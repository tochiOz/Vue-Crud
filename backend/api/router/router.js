import express from 'express'
// import 'babel-polyfill'
import * as home from '../controllers/home'
import * as controller from '../controllers/user'

const { verifyToken } = require('../middleware/auth')

const router = express.Router()


router.get('/person', home.homepage)

//user routing
router.post('/users/register', controller.user.createUser)
router.post('/users/login', controller.user.loginUser)
router.delete('/users/:id', verifyToken, controller.user.deleteUser)






export default router;