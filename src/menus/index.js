const { Menu } = require('electron');
const appMenu = require('./appMenu');
const fileMenu = require('./fileMenu');
const viewMenu = require('./viewMenu');
const helpMenu = require('./helpMenu');

module.exports.generateMenu = () => {
    const template = [
        ...appMenu,
        ...fileMenu,
        ...viewMenu,
        ...helpMenu
    ];
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);
}