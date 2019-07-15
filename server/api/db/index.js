//creating the pool query where the app will be connected to the database

import { Pool } from 'pg'
import dotenv from 'dotenv'

//set the env file as the configuration zone
dotenv.config()

//creating the connection link
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

export default pool;