const db  = require('./db');
const R = require("ramda");
const fs = require("fs");
const path  = require('path');
const Promise = require("bluebird");
const chalk = require('chalk');

const okMark = chalk.bold.green('✓');
const errorMark = chalk.bold.red('✗');
const seedsDir = process.argv[3] || path.resolve(__dirname, "../seeds");


const logItemsCreated = model => items => console.log(`${model.name}: items created: ${items.length} ${okMark}`);
const seedModelWithAssociation = modelName => {

    const model = db[modelName];
    const data = seeds[modelName].data;
    const association = seeds[modelName].association || [];
    return Promise.map( data, record => model.create(record, { include:association}) )
        .then( logItemsCreated(model) );
}


const seeds = {

    user: {
        data: [
            { email:"eric@southpark.com", password:"kfcrules", firstName:"Eric", lastName:"Cartman"},
            { email:"stan@southpark.com", password:"wendy", firstName:"Stan", lastName:"Marsh"}
        ]}
}



db.sequelize.sync({force:true}).then(  () => Promise.map( R.keys(seeds), seedModelWithAssociation ).then(() => console.log(`All models created ${okMark}`)));


