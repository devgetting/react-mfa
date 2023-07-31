const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'build')
const html = path.join(SRC, 'index.dev.html')
const entry = path.join(SRC, 'index.tsx');

module.exports = {
    entry,
    output: {
        path: BUILD,
        filename: 'main.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            exclude: /node_modules/
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [SRC, 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: html,
            publicPath: '/'
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        open: true,
        historyApiFallback: true
    }
}