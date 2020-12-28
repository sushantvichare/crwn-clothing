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

export const createUserProfileDocument=async(userAuth,...additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
  
    // if user not present we create
    if(!snapshot.exists){
        const{displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;