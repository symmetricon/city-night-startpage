const path = require('path')
const hwp = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ttf|jpe?g|png|gif|svg|json)$/i,
                loader: 'file-loader',

                // important for loading json. 
                // See webpack asset modules
                type: 'javascript/auto',

                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new hwp({
            template: './src/templates/index.pug'
        })
    ]
}
