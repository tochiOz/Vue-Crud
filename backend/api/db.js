// the first pool creates connection to the database
//here creates a connection to create tables and drop tables in the database

const { Pool } = require('pg')
const dotenv  = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

//here we get a response that the connection is valid using on method
pool.on('connect', () => {
    console.log('Connected to the db')
})
//end of connection

/**
 * 
 * Creating User Tables
 * @returns { object } user details array
 */

const createUserTable = () => {
    const queryText = 
    `CREATE TABLE IF NOT EXISTS
    users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
    )`

    pool.query(queryText)
    .then((res) => {
        console.log(res)
        pool.end()
    })
    .catch((e) => {
        console.log(res)
        pool.end()
    })
}

const dropUserTable = () => {
    const queryText = 
    `DROP TABLE IF EXIST users returning *`
    pool.query(queryText)
    .then((res) => {
        console.log(res)
        pool.end()
    })
    .catch((e) => {
        console.log(res)
        pool.end()
    })
}

//here we shut down the connection after user have been created
pool.on('remove', () => {
    console.log('Client Removed')
    process.exit(0)
})

module.exports = {
    createUserTable,
    dropUserTable
}

require('make-runnable')