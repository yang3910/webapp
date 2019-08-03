const path = require("path")
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.shihuo.cn',
                changeOrigin: true,
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, './src'),
                'api': path.join(__dirname, './src/api'),
                'assets': path.join(__dirname, './src/assets'),
                'common': path.join(__dirname, './src/common'),
                'components': path.join(__dirname, './src/components'),
                'lib': path.join(__dirname, './src/lib'),
                'router': path.join(__dirname, './src/router'),
                'store': path.join(__dirname, './src/store'),
                'utils': path.join(__dirname, './src/utils'),
                'views': path.join(__dirname, './src/views'),
            }
        }
    },
}