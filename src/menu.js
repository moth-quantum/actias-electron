const { app, Menu } = require('electron');

const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            { label: 'Import Preset', click: () => console.log('import clicked') },
            { label: 'Export preset', click: () => console.log('export clicked') },
            { type: 'separator' },
            { label: 'Sample Library', click: () => console.log('sample library') },
            { type: 'separator' },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    // { role: 'view' }
    {
        label: 'View',
        submenu: [
            { label: 'Q1 Synth', click: () => console.log('view synth') },
            { label: 'Circuit Builder', click: () => console.log('view cb') },
            { label: 'Manual', click: () => console.log('view cb') },
        ]
    },
    // { role: 'help' }
    {
        label: 'Help',
        submenu: [
            { label: 'Manual', click: () => console.log('view cb') },
        ]
    }    
];

module.exports.mainMenu = Menu.buildFromTemplate(template)