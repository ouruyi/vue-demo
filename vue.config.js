module.exports = {
  lintOnSave: false, //如果为false，就是取消eslint规则的检查
  outputDir:'dist',
  assetsDir:'static',
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      }
    }
  }
}
