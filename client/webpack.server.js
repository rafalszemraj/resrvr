var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {

    contentBase: './public',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    colors:true,
    stats: {
        colors: true
    }
}).listen(8080, 'localhost', function(err, result) {
    "use strict";
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:8080');
});
