import webpack from 'webpack'

import WebpackConfig from './WebpackConfig'

const env =
  process.env.NODE_ENV === 'development' ? 'development' : 'production'

// 创建编译时配置
const config = new WebpackConfig(env)

function errorHandler(err: Error & { details?: string }, stats: webpack.Stats) {
  const info = stats.toJson()
  if (err || stats.hasErrors()) {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }
    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }
    if (stats.hasErrors()) {
      console.error(info.errors)
    }
    return false
  } else {
    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }
    return true
  }
}

if (env === 'development') {
  // 通过watch来实时编译
  const watching = webpack(config).watch(
    {
      aggregateTimeout: 300,
      ignored: /node_modules/
    },
    (err, stats) => {
      const flag = errorHandler(err, stats)
      if (flag) {
        console.log('webpack start successfully')
      } else {
        watching.close(() => {})
        throw Error('webpack start failed')
      }
    }
  )
} else {
  webpack(config).run((err: Error & { details?: string }, stats) => {
    const flag = errorHandler(err, stats)
    if (flag) {
      console.log('webpack build successfully')
    } else {
      throw Error('webpack build failed')
    }
  })
}
