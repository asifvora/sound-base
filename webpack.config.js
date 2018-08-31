const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    favicon: 'public/favicon.ico',
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /favicon\.ico$/,
                loader: "url-loader",
                query: { mimetype: "image/x-icon" },
                query: {
                    limit: 1,
                    name: '[name].[ext]',
                },
            },
        ]
    },
    plugins: [htmlPlugin],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    }
};