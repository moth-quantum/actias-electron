module.exports.generateHelpMenu = (mainWindow) => {
    return [
        {
            label: 'Help',
            submenu: [
                { 
                    label: 'Restore Factory Settings', 
                    click: () => mainWindow.webContents.send('restoreFactorySettings')
                },
            ]
        }
    ]
}