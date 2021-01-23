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
}