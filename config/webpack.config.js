//----- IMPORTS -----//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Fiber = require('fibers');

console.log('path to build:', path.resolve(__dirname, '..', 'build'));

//----- REUSABLE CONFIG SECTIONS -----/
/**
 * Configuration for handling CSS files, including the last stages of SCSS transpilation.
 */
 const cssLoaders = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            esModule: false,
            modules: {namedExport: false},
        },
    },
    {
        loader: `css-loader`,
        options: {
            modules: {
                localIdentName: `[path][name]__[local]`,
                compileType: 'module',
                exportGlobals: true,
                exportOnlyLocals: false,
            },
            sourceMap: true,
        },
    },
];

//--- EXPORT ---//
module.exports = {
    entry: {
        index: path.resolve(__dirname, '..', 'app', 'client', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '..', 'build')
    },

    module: {
        rules: [

            // Handle loading CSS files
            {
                test: /\.css?$/,
                use: cssLoaders,
            },

            // Handle loading SCSS files
            {
                test: /\.scss?$/,
                use: [
                    ...cssLoaders,
                    {
                        loader: `sass-loader`,
                        options: {
                            implementation: require(`dart-sass`),
                            sourceMap: true,
                        },
                    },
                ],
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'app', 'client', 'index.html')
        })
    ]
};
