import { app, BrowserWindow } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

let win: BrowserWindow | null = null
function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 加上这个就可以在渲染进程使用 winodw.require 引入 electron 模块
      nodeIntegration: true
    }
  })

  const urlLocation = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './index.html')}`

  win.loadURL(urlLocation)

  // 当 window 被关闭，触发该事件
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
