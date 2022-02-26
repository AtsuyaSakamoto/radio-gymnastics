import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDWgzZz_YcjVoP0_CTo2iWl1Xn0IwO36DA",
  authDomain: "radiogym-80526.firebaseapp.com",
  projectId: "radiogym-80526",
  storageBucket: "radiogym-80526.appspot.com",
  messagingSenderId: "446556927678",
  appId: "1:446556927678:web:4334004bf7e149b9ca50ef"
}

const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore