const { Pool } = require('pg');
const databaseConfiguration = require('../secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;


pool.query('SELECT * FROM contacts', (error, response) => {
    if (error) return console.log('error', error);

    console.log('response', response.rows);
});