const R = require('ramda');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./../config.js')[env];
const modelsDir = config.models;

const sequelize = new Sequelize(config.database, config.username, config.password, config);


const modelFilter = file => file.indexOf('.') !== 0
                            && file !== path.basename(module.filename)
                            && file !== 'base'
                            && file.slice(-3) === '.js';
const importModel = file => sequelize.import(path.join(modelsDir, file));
const accommodate = (acc, model) => R.assoc(R.prop('name', model), model, acc);

const processModels = R.transduce(
    R.compose(R.filter(modelFilter), R.map(importModel)),
    accommodate,
    {}
);

const db = R.merge({ sequelize }, processModels(fs.readdirSync(modelsDir)));

// db.accommodation.hasOne(db.address, {foreignKey:"accommodationId"});
// db.customer.hasOne(db.address, {foreignKey:"customerId"});
// db.accommodation.hasMany(db.room);
// db.room.belongsTo(db.accommodation);
// db.room.hasMany(db.bed);
// db.bed.belongsTo(db.room);
// db.customer.hasMany(db.reservation);
// db.reservation.belongsToMany(db.bed, {through:"reservation_bed"});
// db.bed.belongsToMany(db.reservation, {through:"reservation_bed"});

module.exports = db;
