'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.toggleDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    var template = [{
        label: "Application",
        submenu: [
            { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function () { app.quit(); } }
        ]
    }, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]
    }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});