// vite.config.js
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  root: './docs',
  base: './',
  plugins: [
    createVuePlugin({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),
  ],
}
