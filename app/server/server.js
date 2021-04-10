const buildPerson = require('./data-types');

console.log('\n\nBACK IN SERVER');

const billyBob = buildPerson('billy', 'bob', 48);
billyBob.haveBirthday();
console.log(billyBob.getAge());



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

