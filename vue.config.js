const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sassOptions: { // <<<< This wrapper is needed!
          prependData: `@import "@/sass/variables.sass"`
        }
      }
    }
  },
};
