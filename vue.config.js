module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#ff0',
            'link-color': '#ff0',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {     //这里最好有一个 /
          target: 'http://47.114.156.143:9090',  // 后台接口域名
          changeOrigin: true,  //是否跨域
          pathRewrite:{
              '^/api':''
          }
      }
    }
  }

}