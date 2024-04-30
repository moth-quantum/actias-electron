const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('isApp', true)

contextBridge.exposeInMainWorld('apiDomain', process.env.API_DOMAIN)
contextBridge.exposeInMainWorld('apiWsDomain', process.env.API_WS_DOMAIN)
contextBridge.exposeInMainWorld('apiToken', process.env.API_TOKEN)
contextBridge.exposeInMainWorld('apiPusherKey', process.env.API_PUSHER_KEY)

contextBridge.exposeInMainWorld('electronAPI', {
    onUpdateSamples: (callback) => ipcRenderer.on('updateSamples', (_, samples) => callback(samples)),
    onSetPreset: (callback) => ipcRenderer.on('setPreset', (_, name) => callback(name)),
    onSavePreset: (callback) => ipcRenderer.on('savePreset', () => callback()),
    onImportPreset: (callback) => ipcRenderer.on('importPreset', (_, obj) => callback(obj)),
    onExportPreset: (callback) => ipcRenderer.on('exportPreset', (event) => callback(event)),
    onQuit: (callback) => ipcRenderer.on('quit', callback),
    exportPresetResponse: (obj) => ipcRenderer.send('exportPresetResponse', obj),
    syncUserPresets: (presets) => ipcRenderer.send('syncUserPresets', presets),
})