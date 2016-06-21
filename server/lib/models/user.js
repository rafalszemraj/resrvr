const Promise = require('bluebird');
const auth = require('../auth');
const Either = require('data.either');

const getOrNotFound = entity => entity === null ? Either.Left(404) : Either.Right(entity);

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('user', {

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        freezeTableName: true,
        scopes: {
            public: {
                attributes: {
                    exclude: ['password']
                }
            }
        },
        hooks: {
            beforeCreate: auth.hashUser,
            beforeBulkCreate: users => Promise.map(users, auth.hashUser)
        },
        getterMethods: {

            fullName: function() {

                return [ this.getDataValue('firstName'), this.getDataValue('lastName')].join(' ');

            }
        },
        classMethods: {

            findByLogin: function(login) {

                return this.findOne({where:{email:login}}).then( getOrNotFound )
            }

        }
    }
    )
};
