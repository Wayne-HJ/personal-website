module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
	port: 8080,
    // public: '0.0.0.0',
    proxy: {
      "/api": {
        target: "http://localhost:8089",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/getNews": {
        target: "https://wayne-news.vercel.app/api",
        changeOrigin: true,
        pathRewrite: {
          "^/getNews": ""
        }
      }
    },
    disableHostCheck: true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
