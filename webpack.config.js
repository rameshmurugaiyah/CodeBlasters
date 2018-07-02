const path = require('path');
var config = {
    context:__dirname,
    entry:
    [
        './index.js'
    ],
    output:{
        path: path.resolve(__dirname,'/'),
        filename:'bundle.js'
    },
    node:{
        net:'empty'
    },
    devServer:{
        inline: true,
        port:8088,
        proxy:{

        },
        hot:true,
        historyApiFallback : true
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude :[
                    path.resolve(__dirname, "/node_modules/")
                ],
                loader : 'babel-loader',
                query:{
                    presets:["react","stage-3"]
                }
            }
        ],
    }
}
module.exports = config;