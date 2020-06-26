import { Configuration } from 'webpack'
import path from 'path'

class WebpackConfig implements Configuration {
  // 修改 target 为 electron-main
  target: Configuration['target'] = 'electron-main'
  entry: Configuration['entry'] = [path.resolve(__dirname, '../main/index.ts')]
  output: Configuration['output'] = {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build')
  }

  node: Configuration['node'] = {
    // 默认值是 'mock'，会将其转化为'/'，我们这里并不是服务端，应该设置为 false ，表示输出文件的目录名，在打包代码里面也要一直将其当作打包后的文件路径使用
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
          {
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 更改编译配置
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ]
      }
    ]
  }

  constructor(public mode: Configuration['mode'] = 'production') {}
}

export default WebpackConfig
