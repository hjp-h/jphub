module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    // 配置代理 跨域
    proxy: {
        '/api': {
            target: 'http://localhost:8888',
            ws: true,//是否代理websockets
            changeOrigin: true,  // 设置同源  默认false，是否需要改变原始主机头为目标URL
            pathRewrite: {
              '^/api': ''
            }
          }
    }
}
}

