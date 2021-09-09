// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2')
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'

module.exports = {
  root: './docs',
  base: './',
  plugins: [
    createVuePlugin({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    })
  ],
}