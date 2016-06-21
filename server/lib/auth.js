const bcrypt = require('bcrypt');
const jwt = require('koa-jwt');
const Either = require('data.either');
const R = require('ramda');
const SECRET = 'AP_@#_SECRET';

module.exports = {

    hashUser: user => user.password = bcrypt.hashSync(user.password, 10),
    verifyUser: R.curry((password, user) => bcrypt.compareSync(password, user.password) ? Either.Right(user) : Either.Left(401)),
    createUserToken: user => Either.Right(jwt.sign(user.dataValues, SECRET ))

}


