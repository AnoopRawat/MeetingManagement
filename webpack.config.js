var path = require("path");

var APP_DIR = path.resolve(__dirname, "app");

var config = {
    entry: path.resolve(APP_DIR + "/main.ts"),
    output: {
        path: APP_DIR,
        publicPath:APP_DIR,
        filename: "bundle.js"
    },
    watch: true,
    resolve: {
        extensions: ['', '.webpack.js', ".web.js", ".ts", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "node_modules"
            }
        ]
    }

}

module.exports = config;