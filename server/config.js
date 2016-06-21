const path = require("path");
module.exports = 
{
    development: {

        database: "DEV",
        username: null,
        password: null,
        host: "localhost",
        dialect: "sqlite",
        storage: path.join(__dirname, "dist/dev.sqlite"),
        logging: false,
        models: path.join(__dirname, "lib/models")
    }
}