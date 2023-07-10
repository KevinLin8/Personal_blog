const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_API_URL + "/"
      : "./",
});
