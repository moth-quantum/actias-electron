const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('isApp', true)
contextBridge.exposeInMainWorld('electronAPI', {
    setUserPresets: (presets) => ipcRenderer.send('setUserPresets', presets),
})