const jwt = require('jsonwebtoken')
const bcy = require('bcrypt')

module.exports = {

    /**
     * hash Password
     * @params { string } returns hashed password
     * @returns { string } returns hashed passwords
     */

    hashPassword(password) {
        return bcy.hashSync(password, bcy.genSaltSync(8))
    },

    /**
     *Compare password
     *@params { string } hashpassword
     *@params { string } password
     *@returns { string } returns boolean
     *
     */

    comparePassword(hashPassword, password) {
        return bcy.compareSync( hashPassword, password )
    },

    /**
     * 
     * is validEmail method
     * @params { string } email
     *@returns { string } returns boolean
     *
     */

    isValidEmail (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    /**
     * 
     * Generate Tokem Helper Method
     * @params { string } id
     * @returns { string } returns token
     * used to generate auth token 
     * 
     */

    generateToken(id) {
        return jwt.sign({ userId: id }, process.env.SECRET, { expiresIn: '24h' }) 
    }

}