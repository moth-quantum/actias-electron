const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

let server;

export function serveSamples(directory) {
    // clean up old server
    server && server.close();

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("An error occurred reading the directory :", err);
            return;
        }
        const audioFiles = files.filter(file => ['.wav', '.mp3', '.flac'].includes(path.extname(file)));
        app.use('/samples', express.static(dir));
        server = http.createServer(app);
        server.listen(3000, () => {
            console.log('Sample library server listening on port 3000');
            console.log(audioFiles)
            // mainWindow.webContents.send('sampleLibrary', audioFiles);
        });
    });
}