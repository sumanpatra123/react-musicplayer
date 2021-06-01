import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBR1QI0yl9MLu0vmxTL0a2v_z0LKz15ROc',
  authDomain: 'musicplayer-824fa.firebaseapp.com',
  projectId: 'musicplayer-824fa',
  storageBucket: 'musicplayer-824fa.appspot.com',
  messagingSenderId: '56220655709',
  appId: '1:56220655709:web:87097101203edecd806db4',
  measurementId: 'G-EZF3Z37JE3'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(res => {
      console.log(res.user);
    })
    .catch(error => {
      console.log(error.message);
    });
};
