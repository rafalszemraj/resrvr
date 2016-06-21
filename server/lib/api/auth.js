const router = require('koa-router');
const R = require('ramda');
const auth = require('../auth');
const authRouter = new router();

module.exports = function(db) {
    "use strict";


    authRouter.post('login', '/login', function *(next) {


        const login= this.request.body.login;
        const password = this.request.body.password;
        const generateToken = R.composeK( auth.createUserToken, auth.verifyUser(password) );
        const user = yield db.user.findByLogin(login);

        const token = generateToken( user )
            .orElse( this.throw )
            .get();
        this.body = {token:token, user:user}

    })
    return authRouter;

}


