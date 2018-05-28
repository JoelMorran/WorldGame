const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

//app.unsubscribe(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    const index = path.join(__dirname, 'dist/index.html');
    res.sendFile(index);
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));