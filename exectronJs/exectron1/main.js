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
    // Opening Developer Tools in Electro
    win.webContents.openDevTools(); 
}

app.whenReady().then(createWindow);

app.on("window-all-closed",()=>{
    if(process.platform !== 'darwin') app.quit();
})
