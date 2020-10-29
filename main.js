const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    });
    mainWindow.loadURL(url.format ({
        pathname: path.join(__dirname, 'frontend/newtab.html'),
        protocol: 'file:',
        slashes: true
     }))
    mainWindow.show();
});

function changeURL(url){
    mainWindow.loadURL(url);
}

function createLink(){
    var x = document.getElementById('urlAdd').value;

    var url = 'duckduckgo.com/' + x;

    changeURL(url);
}

module.exports = {changeURL}

