module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: "examples/main.js",
      // 模板来源
      template: "pubilc/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },
  publicPath: process.env.VUE_APP_Path,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#13c2c2",
          "primary-color": "#9C76E4",
          // "layout-color": "#9867f7"
          "layout-color": "#9C76E4"
        },
        javascriptEnabled: true
      }
    }
  }
};
