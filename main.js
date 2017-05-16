const electron  = require('electron')
const ipcMain   = require('electron').ipcMain
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Application reload
require('electron-reload')(__dirname);

require('electron-debug')({showDevTools: false});

let mainWindow = null
let newAppWindow = null
let removeAppWindow = null
let preferencesWindow = null

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    'minWidth': 800,
    'minHeight': 600,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
    newAppWindow = null
    preferencesWindow = null
  })

}

//////////////////////////////////////////
// ALL APP EVENTS WILL BE HANDLED HERE //
////////////////////////////////////////

// General app events
app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('browser-window-created',function(e, window) {
  window.setMenu(null);
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// ipc events
ipcMain.on('show-new-app-window', function() {

  if(newAppWindow != null) {
    newAppWindow.destroy();
  }

  newAppWindow = new BrowserWindow({
    width: 400,
    height: 400,
    'minWidth': 400,
    'minHeight': 400,
    show: false,
    frame: false
  })
  newAppWindow.loadURL('file://' + __dirname + '/new_app.html')
  newAppWindow.show()

})

ipcMain.on('hide-new-app-window', function() {
  newAppWindow.destroy()
})

ipcMain.on('show-remove-app-window', function() {

  if(removeAppWindow != null) {
    removeAppWindow.destroy();
  }

  removeAppWindow = new BrowserWindow({
    width: 400,
    height: 200,
    'minWidth': 400,
    'minHeight': 200,
    show: false,
    frame: false
  })
  removeAppWindow.loadURL('file://' + __dirname + '/remove_app.html')
  removeAppWindow.show()

})

ipcMain.on('hide-remove-app-window', function() {
  removeAppWindow.destroy()
})

ipcMain.on('show-preferences-window', function() {

  if(preferencesWindow != null) {
    preferencesWindow.destroy()
  }

  preferencesWindow = new BrowserWindow({
    width: 400,
    height: 400,
    'minWidth': 400,
    'minHeight': 400,
    show: false,
    frame: false
  })

  preferencesWindow.loadURL('file://' + __dirname + '/preferences.html')
  preferencesWindow.show();

})

ipcMain.on('hide-preferences-window', function() {
  preferencesWindow.hide()
})
