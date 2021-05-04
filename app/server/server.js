const express = require('express');
const app = express();

/*
 * Add static server plugin
 */
app.use(
    express.static('app/client')
);

/*
 * Launch the server
 */
const server = app.listen(8080, () => {
    console.log('Server listening at port 8080');
});
