import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAtmeiVkBdgGUqfjKIKFy-43z5fEmsN-P8",
    authDomain: "finals-firebase.firebaseapp.com",
    projectId: "finals-firebase",
    storageBucket: "finals-firebase.appspot.com",
    messagingSenderId: "703594898874",
    appId: "1:703594898874:web:fcc7e4a53fdc4d18bda983"
};
const fire = firebase.initializeApp(firebaseConfig)

export default fire;