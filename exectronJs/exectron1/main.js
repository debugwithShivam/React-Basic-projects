const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration:true
        }
    })
    // Menu bar remove karega
    win.setMenu(null)
    win.loadFile('index.html')
}

app.whenReady().then(createWindow);


