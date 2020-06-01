import firebase from "firebase/app"

const fbConfig = {
    apiKey: "AIzaSyC4qckuHppJZs4Sa2f7uR4Mt0sVWqjehH8",
    authDomain: "memo-app2-5d813.firebaseapp.com",
    databaseURL: "https://memo-app2-5d813.firebaseio.com",
    projectId: "memo-app2-5d813",
    storageBucket: "memo-app2-5d813.appspot.com",
    messagingSenderId: "730141484171",
};
firebase.initializeApp(fbConfig)

export default firebase