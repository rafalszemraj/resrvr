require('babel-polyfill');

const port = process.env.PORT || 3000;
const http = require("http");
const koa = require('koa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const R = require('ramda');


const db = require('./lib/db');
const authRoute = require('./lib/api/auth')(db);



function *errorHandler(next) {

    try {
        yield next;
    }
    catch(error) {

        console.log(error);
        this.status = error.status;
        this.body = {error: {status:error.status, name:error.name}};
        this.app.emit('error', error, this);
    }

}

function *setup(next) {
    "use strict";
    this.throwError = () => {

        this.throw.apply( this, arguments);
    }
    yield next;

}

const app = module.exports = new koa()
    // .use(setup)
    .use(errorHandler)
    .use(cors())
    .use(bodyParser())
    .use( authRoute.routes())

if( !module.parent ) app.listen(port, console.log(`server running at port ${port}`));

