const { Menu } = require('electron');
const appMenu = require('./appMenu');
const { generateFileMenu } = require('./fileMenu');
const viewMenu = require('./viewMenu');
const helpMenu = require('./helpMenu');

module.exports.generateMenu = (args = {userPresets: []}) => {
    const { userPresets } = args;
    const fileMenuArgs = { userPresets };
    const template = [
        ...appMenu,
        ...generateFileMenu(fileMenuArgs), // dynamic menu based on presets
        ...viewMenu,
        ...helpMenu
    ];
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);
}