const { dialog } = require('electron');
const isMac = process.platform === 'darwin'

module.exports.generateFileMenu = ({
    userPresets = [], 
    mainWindow
}) => {
    const setPreset = (name) => mainWindow.webContents.send('setPreset', name)
    const savePreset = () => mainWindow.webContents.send('savePreset')
    
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
            { label: 'Save preset', click: savePreset },
            { label: 'Export Preset', click: () => {
                dialog.showSaveDialog({
                    title: 'Export Preset',
                    defaultPath: 'preset.json',
                    showsTagField: false,
                    filters: [{ name: 'Preset', extensions: ['json'] }]
                }).then(({canceled, filePath}) => {
                    if (canceled) return;
                    console.log(filePath)
                    // mainWindow.webContents.send('savePreset', filePath)
                    // TODO: get json from mainWindow and write to file
                })
            } },
            { label: 'Import Preset', click: () => {
                dialog.showOpenDialog({
                    title: 'Import Preset',
                    properties: ['openFile'],
                    filters: [{ name: 'Preset', extensions: ['json'] }]
                }).then(({canceled, filePaths}) => {
                    if (canceled) return;
                    console.log(filePaths)
                    // mainWindow.webContents.send('loadPreset', filePaths[0])
                    // TODO: read file and send to mainWindow
                })
            } },
            { type: 'separator' },
            { label: 'Sample Library', click: () => console.log('sample library') },
            { type: 'separator' },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    }]
};