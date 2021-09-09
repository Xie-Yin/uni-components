module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 6,
      exclude(file) {
        return !(
          file.includes('docs/demos') || 
          file.includes('src/components') ||
          file.includes('src/styles')
        )
      }
    },
    'postcss-rpxtopx': {}, // 小程序rpx单位转px
    autoprefixer: {},
  },
}
