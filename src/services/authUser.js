import Api from './Api'

export default {
    registerUser(payload) {
        return Api().post('register', payload )
    }
}