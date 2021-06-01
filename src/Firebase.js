import firebase from 'firebase/app';
import 'firebase/auth';

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
