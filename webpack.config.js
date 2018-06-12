const webpack = require('webpack');

module.exports = {
    entry: './public/js/main.js',
    output: {
        filename: 'bundle.js',
        path:__dirname +'/public/js/'
    },
    optimization: {
     minimize: false
   },
};
