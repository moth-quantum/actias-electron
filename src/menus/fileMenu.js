const isMac = process.platform === 'darwin'

module.exports.generateFileMenu = ({userPresets = []}) => {
    console.log('userPresets', userPresets);
    return [{
        label: 'File',
        submenu: [
            { 
                label: 'Load Preset', 
                submenu: [
                    { 
                        label: 'Factory', 
                        submenu: [
                            { label: 'FM', click: () => console.log('Preset clicked') },
                            { label: 'Sampler', click: () => console.log('Preset clicked') },
                            { label: 'Granulator', click: () => console.log('Preset clicked') },
                            { label: 'Wavetable', click: () => console.log('Preset clicked') },
                        ],
                    },
                    { 
                        label: 'Cephas Teom',  
                        submenu: [
                            { label: 'FM Bass', click: () => console.log('Preset clicked') },
                            { label: 'Gravy Granulator', click: () => console.log('Preset clicked') },
                            { label: 'Ocean Dream', click: () => console.log('Preset clicked') },
                        ],
                    },
                    {   
                        label: 'User',  
                        submenu: Object.keys(userPresets).map(name => {
                            return { label: name, click: () => console.log(name) }
                        })
                    },
                ]
            },
            { type: 'separator' },
            { label: 'Import Preset', click: () => console.log('import clicked') },
            { label: 'Export preset', click: () => console.log('export clicked') },
            { type: 'separator' },
            { label: 'Sample Library', click: () => console.log('sample library') },
            { type: 'separator' },
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    }]
};