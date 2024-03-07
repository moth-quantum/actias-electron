const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('isApp', true)
contextBridge.exposeInMainWorld('electronAPI', {
    syncUserPresets: (presets) => ipcRenderer.send('syncUserPresets', presets),
    onSetPreset: (callback) => ipcRenderer.on('setPreset', (_, name) => callback(name)),
    onSavePreset: (callback) => ipcRenderer.on('savePreset', callback)
})