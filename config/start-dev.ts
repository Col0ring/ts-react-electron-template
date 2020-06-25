import webpack from 'webpack'

import WebpackConfig from './WebpackConfig'

// 创建编译时配置
const config = new WebpackConfig('development')

webpack(config).run(() => {})
