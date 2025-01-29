const { Menu } = require('electron');
const appMenu = require('./appMenu');
const { generateFileMenu } = require('./fileMenu');
const { generateHelpMenu } = require('./helpMenu');
const viewMenu = require('./viewMenu');

module.exports.generateMenu = (args = {
    userPresets: [],
    mainWindow
}) => {
    const { userPresets, mainWindow } = args;
    const fileMenuArgs = { userPresets, mainWindow };
    const template = [
        ...appMenu,
        ...generateFileMenu(fileMenuArgs), // dynamic menu based on presets
        ...viewMenu,
        ...generateHelpMenu(mainWindow)
    ];
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);
}