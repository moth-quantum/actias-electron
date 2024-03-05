const isMac = process.platform === 'darwin'

module.exports.generateFileMenu = ({
    userPresets = [], 
    mainWindow
}) => {
    const setPreset = (name) => mainWindow.webContents.send('setPreset', name)
    
    return [{
        label: 'File',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: () => mainWindow.reload()
            },
            { type: 'separator' },
            { 
                label: 'Load Preset', 
                submenu: [
                    { 
                        label: 'Factory', 
                        submenu: [
                            { label: 'FM', click: () => console.log('FM') },
                            { label: 'Subtractive', click: () => console.log('Subtractive') },
                            { label: 'Additive', click: () => console.log('Additive') },
                        ],
                    },
                    { 
                        label: 'Cephas Teom',  
                        submenu: [
                            { label: 'FM Bass', click: () => console.log('FM Bass') },
                            { label: 'Gravy Granulator', click: () => console.log('Gravy Granulator') },
                            { label: 'Ocean Dream', click: () => console.log('Ocean Dream') },
                        ],
                    },
                    {   
                        label: 'User',  
                        submenu: Object.keys(userPresets).map(name => {
                            return { label: name, click: () => setPreset(name) }
                        })
                    },
                ]
            },
            { label: 'Import Preset', click: () => console.log('import clicked') },
            { label: 'Export preset', click: () => console.log('export clicked') },
            { type: 'separator' },
            { label: 'Sample Library', click: () => console.log('sample library') },
            { type: 'separator' },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    }]
};