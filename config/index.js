module.exports = {
    dev: {
     proxyTable: {
      '/api': {
        target: 'http://localhost:7000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
        }
    }
    }
}