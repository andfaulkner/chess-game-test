const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//
console.log("path to build:", path.resolve(__dirname, "..", "build"));

module.exports = {
    entry: {
        index: path.resolve(__dirname, "..", "app", "client", "index.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "..", "build"),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },

    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "..",
                "app",
                "client",
                "index.html"
            ),
        }),
    ],
};
