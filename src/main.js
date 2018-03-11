const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow = null;

app.on('ready', () => {
        mainWindow = new BrowserWindow({
        height: 600,
        width:300,
        show: false
    });
    mainWindow.once('ready-to-show', ()=>{
        mainWindow.show();
    });

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }));
});