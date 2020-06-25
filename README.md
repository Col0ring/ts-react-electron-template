<h1 align="center">ts-react-electron-template</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Col0ring/ts-react-electron-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Col0ring/ts-react-electron-template/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Col0ring/ts-react-electron-template/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Col0ring/ts-react-electron-template" />
  </a>
   <a href="https://github.com/Col0ring/ts-react-electron-template#readme" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%3E%3D3.7.2-blue" />
  </a>
  <a href="https://github.com/Col0ring/ts-react-electron-template#readme" target="_blank">
    <img alt="Electron" src="https://img.shields.io/badge/electron-%3E%3D9.0.5-orange" />
  </a>
</p>

> 一个基于 create-react-app 和 typescript 的 electron 模板

### 🏠 [Homepage](https://github.com/Col0ring/ts-react-electron-template)

## Install

```sh
# Clone this repository
git clone https://github.com/Col0ring/ts-react-electron-template.git
# Go into the repository
cd ts-react-electron-template
# Install dependencies
npm install
# or
yarn
```

## Usage

- 开发环境：

  - Electron 部分：使用 webpack 对主进程进行监听打包并生成 build 目录，然后使用 nodemon 运行 electron 进行监听。electron 的入口文件默认为`./main/index.ts`,如果要修改可以在`package.json`中进行修改。
  - React 部分：React 部分没做任何修改，同`create-react-app`开发。

  ```sh
  npm run start
  # or
  yarn start
  ```

- 生产环境：

  - 可以先使用下面命令对项目依赖进行打包，再通过各自需求进行程序打包：
    ```sh
    npm run build
    # or
    yarn build
    ```
  - 也可以直接使用程序打包的命令进行打包，像下面直接打包成当前平台的可执行程序：

    ```sh
    npm run pack
    # or
    # yarn 也需要带上 run，不然会触发 yarn 的 pack 命令
    yarn run pack
    ```

  **注意：** 由于`electron-builder`会将`dependencies`的依赖都打包进去，所以为了减小打包体积，尽量将依赖都放到`devDependencies`中。

## Author

👤 **Col0ring**

- Github: [@Col0ring](https://github.com/Col0ring)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Col0ring](https://github.com/Col0ring).<br />
This project is [MIT](https://github.com/Col0ring/ts-react-electron-template/blob/master/LICENSE) licensed.
