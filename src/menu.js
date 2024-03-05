const { app, Menu, dialog, nativeImage } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { label: 'About', 
              click: () => {
                const iconPath = path.join(__dirname, '/assets/icons/q1-icon.png');
                const icon = nativeImage.createFromPath(iconPath);
                dialog.showMessageBox({
                    title: 'About',
                    message: 'Q1 Synth v' + app.getVersion(),
                    buttons: ['OK'],
                    icon: icon
                 });
              }
              
            },
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