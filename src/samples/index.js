const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

let server;

module.exports.serveSamples = function(directory, mainWindow) {
    // clean up old server
    server && server.close();

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("An error occurred reading the directory :", err);
            return;
        }
        const samples = files
            .filter(file => ['.wav', '.mp3', '.flac'].includes(path.extname(file)))
            .map(file => `http://localhost:49152/samples/${file}`)

        app.use(cors());
        app.use('/samples', express.static(directory));
        server = http.createServer(app);
        server.listen(49152, () => {
            console.log('Sample library server listening on port 49152');
            mainWindow.webContents.send('updateSamples', samples);
        });
    });
}