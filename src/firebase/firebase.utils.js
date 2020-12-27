import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 
        apiKey: "AIzaSyDMWpc2z0nnbT3tIr1Y-qMltUWspuBrLLo",
        authDomain: "crwn-db-ba5aa.firebaseapp.com",
        projectId: "crwn-db-ba5aa",
        storageBucket: "crwn-db-ba5aa.appspot.com",
        messagingSenderId: "760549227482",
        appId: "1:760549227482:web:c4e6d5196172cefc38dee3",
        measurementId: "G-B7Q1E8QCYC"
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;