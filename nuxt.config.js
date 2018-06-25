module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-i18n-bug',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: () => {
      return new Promise((resolve, reject) => {
        const count = 2000;
        const urls = [];
  
        for (let index = 0; index < count; index++) {
          urls.push(`/test/${index}`)
        }
        resolve(urls)
      });
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
