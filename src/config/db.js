import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBw-FEwYoS9lQPMtFAS6adyvwBpNdwvwjU",
    authDomain: "simple-vue-crud.firebaseapp.com",
    databaseURL: "https://simple-vue-crud.firebaseio.com",
    projectId: "simple-vue-crud",
    storageBucket: "gs://simple-vue-crud.appspot.com"
}

let app = Firebase.initializeApp(config)
export const db = app.database()
