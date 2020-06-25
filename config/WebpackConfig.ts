import { Configuration } from 'webpack'
// import nodeExrernals from 'webpack-node-externals'
import path from 'path'

class WebpackConfig implements Configuration {
  // node环境
  target: Configuration['target'] = 'electron-main'
  entry: Configuration['entry'] = [
    path.resolve(__dirname, '../src/main/index.ts')
  ]
  output: Configuration['output'] = {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build')
  }
  node: Configuration['node'] = {
    __dirname: false
  }
  resolve: Configuration['resolve'] = {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@@': path.resolve(__dirname, '../')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
  // webpack 的 externals配置
  //   externals: ExternalsElement[] = [nodeExrernals()]
  module: Configuration['module'] = {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: '/.jsx$/',
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }

  constructor(public mode: Configuration['mode'] = 'production') {}
}

export default WebpackConfig
