// verify WEB PAGES
import jwt from 'jsonwebtoken'
import pool from '../db/index'


module.exports = {

    verifyToken(req, res, next ) {

        const token  = req.headers['x-access-token'] || req.headers['authorization']
        if (!token) {
            return res.status(400).send({'message': 'Token is not provided'})
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) {
                return res.json({ messsage: 'Token is invalid' })
            }else {
                const text = 'SELECT * FROM users WHERE id = $1'
                pool.query(text, [decoded.userId])
                req.user = { id: decoded.userId }
                next()
            }
        })
    }
}