import webpack from 'webpack'

import WebpackConfig from '../config/WebpackConfig'

// 创建编译时配置
const devConfig = new WebpackConfig('development')
// 通过watch来实时编译
webpack(devConfig).watch(
  {
    aggregateTimeout: 300
  },
  (err: Error) => {
    console.log(err)
  }
)
