import webpack from 'webpack'

import WebpackConfig from '../config/WebpackConfig'

const buildConfig = new WebpackConfig('production')

webpack(buildConfig).run((err: Error) => {
  if (!err) {
    console.log('webpack build successfully')
  }
})
