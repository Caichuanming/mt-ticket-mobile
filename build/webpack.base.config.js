const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        // publicPath: "../dist",
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                //匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
                //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        //htmlwebpackplugin插件会在打包结束后
        //自动生成一个html文件，并将打包生成的js自动引入到这个html文件中
        new HtmlWebpackPlugin({
            //以这个为模板来生成
            template: "src/index.html"
        }),
        new VueLoaderPlugin()
    ]
};
