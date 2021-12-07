//----- IMPORTS -----//
const {path: rootPath} = require('app-root-path');
const {isDevelopment, isProduction} = require('env-var-helpers');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const Fiber = require('fibers');

console.log('path to build:', path.resolve(__dirname, '..', 'build'));

console.log(`path.join(rootPath, 'app/client/tsconfig.json'):`, path.join(rootPath, 'app/client/tsconfig.json'));

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
    context: path.resolve(__dirname, `..`, `app`, `client`),

    entry: {
        index: path.resolve(__dirname, '..', 'app', 'client', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '..', 'build')
    },

    module: {
        rules: [
            // Handle Typescript files
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.join(rootPath, 'app/client/tsconfig.json'),
                        },
                    },
                ],
            },
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
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'app', 'client', 'index.html')
        })
    ]
};
