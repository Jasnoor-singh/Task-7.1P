import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmBo-sWw6KqrIjcDm19lFzd7g_kSwZ-ac",
    authDomain: "login-page-5908e.firebaseapp.com",
    projectId: "login-page-5908e",
    storageBucket: "login-page-5908e.appspot.com",
    messagingSenderId: "979787805226",
    appId: "1:979787805226:web:584a59186589b30b1dc953"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth };