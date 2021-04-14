module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#435EBE', // 全局主色
            '@link-color':' #435EBE', // 链接色
          },
          javascriptEnabled: true
        }
      }
    }
  }

}