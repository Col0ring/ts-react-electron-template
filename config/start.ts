import webpack from 'webpack'

import WebpackConfig from './WebpackConfig'

const env =
  process.env.NODE_ENV === 'development' ? 'development' : 'production'
// 创建编译时配置
const config = new WebpackConfig(env)

if (env === 'development') {
  // 通过watch来实时编译
  webpack(config).watch(
    {
      aggregateTimeout: 300
    },
    (err: Error) => {
      if (!err) {
        console.log('webpack start successfully')
      }
    }
  )
} else {
  webpack(config).run((err: Error) => {
    if (!err) {
      console.log('webpack build successfully')
    }
  })
}
