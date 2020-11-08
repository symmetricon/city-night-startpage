const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const dotenv_stuff = require('dotenv').config()



const {CITY_NIGHT_HOST:HOST, CITY_NIGHT_PORT:PORT} = process.env

console.log(`HOST: ${HOST}`)
console.log(`PORT: ${PORT}`)


module.exports = merge(commonConfig, {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            port: PORT,
            host: HOST,
            noInfo: true
        }
    }
)


