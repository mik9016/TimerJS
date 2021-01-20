const path = require ('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname,"dist"),
        port: 9000,
        watchContentBase: true

    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: './src/assets/favicon.ico',
        })
        ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"]
        },
            {
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    },
        {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
                }
            }
        },
    {
        test: /\.(html)$/,
        use: ["html-loader"]
        }
    ]}

};