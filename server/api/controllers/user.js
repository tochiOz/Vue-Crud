import pool from '../db/index'
import moment from 'moment'
import uuidv4 from 'uuid/v4'
const Helper = require('./Helper')


export const user = {

    /**
     * Create a user
     * @param {object} req
     * @param {object} res
     * @returns {object} user object
     * 
     */

    createUser(req, res) {
return res.status(200).send('cool')
        //checks and information validation
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({ 'message': 'Please Fill a valid Email/Password'})
        }

        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(403).send({
                'message': 'Please enter a valid Email'
            })
        }

        //hash password
        const hashPassword = Helper.hashPassword(req.body.password)

        const createQuery = `INSERT INTO
        users( id, email, password, created_date, modified_date)
        values( $1, $2, $3, $4, $5 )
        returning *`

        const values = [
            uuidv4(),
            req.body.email,
            hashPassword,
            moment(new Date()),
            moment(new Date())
        ]

        pool.query(createQuery, values)
        .then((data) => {
            const token = Helper.generateToken(data.rows[0].id)
            return res.status(200).json({
                message: 'Account Created',
                data: data.rows[0],
                token: token
            })
        })
        .catch((e) => {
            if (e.routine === '_bt_check_unique') {
                return res.status(400).send({
                    'message': 'This Email already exist'
                })
            }
            res.status(400).send( e.message)
        })
    },

    /**
     * 
     * Login method
     * @param { object } req
     * @param { object } res
     * @returns { object } user object
     * 
     */

    loginUser(req, res) {

        //make all validations
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({ 'message': 'Please Fill a valid Email/Password'})
        }

        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(403).send({
                'message': 'Please enter a valid Email'
            })
        }

        const loginQuery = 'SELECT * FROM users WHERE email = $1'
        pool.query(loginQuery, [req.body.email])
        .then((data) => {
            // if (!Helper.comparePassword(data.rows[0].password, req.body.password)) {
            //     return res.status(400).send({
            //         'message': 'The credentials you provided are wrong'
            //     })
            // }

            const token = Helper.generateToken(data.rows[0].id)
            return res.status(200).json({
                message: 'Login Successful',
                token: token
            })
        })
        .catch((e) => {
            return res.status(403).send(e.message)
        })

    },

    /**
     * 
     * Delete User
     * @param { object } req
     * @param { object } res
     * @returns { void } return status code 204
     * 
     */

    deleteUser(req, res) {

        const deletequery = 'DELETE FROM users WHERE id = $1 returning *'
        const id = [ req.user.id ]

        if (!id) {
            return res.status(404).send({'message': 'User not found'})
        }

        pool.query(deletequery, id, (err ) => {
            if(err) {
                return res.status(400).send(err.message)
            }

            return res.status(204).send({
                'message': 'User Deleted'
            })
        })
    }

}