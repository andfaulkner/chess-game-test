/*-------------------------------------- IMPORTS EXAMPLES ----------------------------------------*/
// Standalone require, no exported data.
require('./test-import');

// Require that receives exported object.
const dataOnEric = require('./test-export-object');
console.log(`Eric is`, dataOnEric.whatEricIs);

// Require that receives exported function.
const ericObjCreator = require('./test-export-function');
const ericInfoObj = ericObjCreator();
console.log(`Eric is`, ericInfoObj.whatEricIs);

/*---------------------------------------- ACTUAL IMPORTS ----------------------------------------*/
const express = require('express');
const app = express();

/*-------------------------------------------- CONFIG --------------------------------------------*/
const path = require('path');
const buildPath = path.join(__dirname, '../../build');

/*----------------------------------------- APPLICATION ------------------------------------------*/
/*
 * Add static server plugin
 */
app.use(express.static('build'));

// Similar functionality to what app.use is doing.
app.get('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    res.status(200).sendFile(path.join(buildPath, fileName));
});

// Manual routes (GET requests)
app.get('/more-eric-info-route', (req, res) => {
    res.json(ericInfoObj);
});

app.get('/eric-info-redux', (req, res) => {
    res.status(200).send(`Eric is ${ericInfoObj.whatEricIs}`);
});

app.get('/info-redux', (req, res) => {
    const nameReceived = req.query.name;
    res.status(200).send(`${nameReceived} is one big piece of poop`);
});

app.get('/info/:name', (req, res) => {
    const nameReceived = req.params.name;
    res.status(200).send(`${nameReceived} is one big piece of poop`);
});

/*---------------------------------------- LAUNCH SERVER -----------------------------------------*/
/*
 * Launch the server
 */
const server = app.listen(8083, () => {
    console.log('Server listening at port 8083');
});
