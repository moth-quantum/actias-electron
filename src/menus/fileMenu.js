const fs = require('fs');
const { dialog, ipcMain } = require('electron');
const { serveSamples } = require('../samples/index.js');

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
            // { 
            //     label: 'Load Preset', 
            //     submenu: [
            //         { 
            //             label: 'Factory', 
            //             submenu: [
            //                 { label: 'FM', click: () => console.log('FM') },
            //                 { label: 'Subtractive', click: () => console.log('Subtractive') },
            //                 { label: 'Additive', click: () => console.log('Additive') },
            //             ],
            //         },
            //         { 
            //             label: 'Cephas Teom',  
            //             submenu: [
            //                 { label: 'FM Bass', click: () => console.log('FM Bass') },
            //                 { label: 'Gravy Granulator', click: () => console.log('Gravy Granulator') },
            //                 { label: 'Ocean Dream', click: () => console.log('Ocean Dream') },
            //             ],
            //         },
            //         {   
            //             label: 'User',  
            //             submenu: Object.keys(userPresets).map(name => {
            //                 return { label: name, click: () => setPreset(name) }
            //             })
            //         },
            //     ]
            // },
            // { 
            //     label: 'Save preset', 
            //     click: savePreset,
            //     accelerator: 'CmdOrCtrl+S'
            // },              
            // TODO: implement import preset if budget allows
            // { label: 'Import Preset', click: () => {
            //     dialog.showOpenDialog({
            //         title: 'Import Preset',
            //         properties: ['openFile'],
            //         filters: [{ name: 'Preset', extensions: ['json'] }]
            //     }).then(({canceled, filePaths}) => {
            //         if (canceled) return;
            //         fs.readFile(filePaths[0], 'utf-8', (err, data) => {
            //             if (err) {
            //                 console.error("An error occurred reading the file :", err);
            //                 return;
            //             }
            //             try {
            //                 mainWindow.webContents.send('importPreset', {
            //                     data: JSON.parse(data), 
            //                     name: path.basename(filePaths[0], '.json')
            //                 });
            //             } catch (err) {
            //                 console.error('Error parsing JSON:', err);
            //             }
            //         });
            //     })
            // } },
            { label: 'Export Preset', click: () => {
                mainWindow.webContents.send('exportPreset');
                ipcMain.once('exportPresetResponse', (_, response) => {
                    dialog.showSaveDialog({
                        title: 'Export Preset',
                        defaultPath: 'preset.json',
                        showsTagField: false,
                        filters: [{ name: 'Preset', extensions: ['json'] }]
                    }).then(({canceled, filePath}) => {
                        if (canceled) return;
                        fs.writeFile(filePath, JSON.stringify(response), (err) => {
                            if (err) console.error("An error occurred creating the file :", err);
                        });
                    })
                })
            } },            
            { type: 'separator' },
            { label: 'Select Samples Directory', click: () => {
                dialog.showOpenDialog({
                    title: 'Select Sample Library',
                    properties: ['openDirectory']
                }).then(({canceled, filePaths}) => {
                    if (canceled) return;
                    serveSamples(filePaths[0], mainWindow);
                })
            } },
            { type: 'separator' },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    }]
};