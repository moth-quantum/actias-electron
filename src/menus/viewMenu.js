module.exports = [
    {
        label: 'View',
        submenu: [
            { label: 'Actias', click: () => console.log('view synth') },
            { label: 'Circuit Builder', click: () => console.log('view cb') },
            { label: 'Manual', click: () => console.log('view cb') },
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    }
]