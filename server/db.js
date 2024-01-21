const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'admin',
    password: 'password',
    host: 'localhost',
    database: 'grocery_db',
    port: 5432
});

module.exports = pool;