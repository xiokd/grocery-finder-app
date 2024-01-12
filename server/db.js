const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'admin',
    password: 'password',
    host: '172.18.0.2',
    database: 'grocery_db',
    port: 5432
});

module.exports = pool;