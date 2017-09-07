var webpack = require("webpack");
module.exports = {
    entry:{
        path:__dirname+"/list"
    },
    output:{
        loader:__dirname+"/lists"
    },
    module:{
        loader:{
            test:/\.js$/,
            use:[
                "babel-loader"
            ]
        },
        loader:{
            test:/\.html$/,
            use:[
                "html-loader"
            ]
        },
        loader:{
            test:/\.css$/,
            use:[
                "style-loader"
            ]
        }
    },
    server:{
        port:"localhost"
    },
    plugin:[
        new HTMLAllCollection(),
        new PageTransitionEvent(),
        new HTMLOptGroupElement()
    ]
}