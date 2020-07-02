const CracoLessPlugin = require('craco-less')
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@@': path.resolve(__dirname, './')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'less', 'css']
  },
  // 设置匹配规则，使用 .module.less 自动会使用 css-module，使用 .less 不会引入 css-module
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule) {
          lessRule.test = /\.module\.(less)$/
          lessRule.exclude = /[^\\.module]\.(less)$/
          return lessRule
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
