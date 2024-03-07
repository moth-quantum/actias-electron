const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('isApp', true)
contextBridge.exposeInMainWorld('electronAPI', {
    onUpdateSamples: (callback) => ipcRenderer.on('updateSamples', (_, samples) => callback(samples)),
    onSetPreset: (callback) => ipcRenderer.on('setPreset', (_, name) => callback(name)),
    onSavePreset: (callback) => ipcRenderer.on('savePreset', () => callback()),
    onImportPreset: (callback) => ipcRenderer.on('importPreset', (_, obj) => callback(obj)),
    onExportPreset: (callback) => ipcRenderer.on('exportPreset', (event) => callback(event)),
    exportPresetResponse: (obj) => ipcRenderer.send('exportPresetResponse', obj),
    syncUserPresets: (presets) => ipcRenderer.send('syncUserPresets', presets),
})