import {takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionTypes from './user-types';

import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';


import {signInSuccess,signInFailure,signOutSuccess,signOutFailure,signUpSuccess,signUpFailure} from './user-actions';


export function* getSnapshotFromUserAuth(userAuth,additionalData){
    try{
        const userRef=yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot=yield userRef.get();
        
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error));
    }
    
}


// sign in with google
export function* signInWithGoogle(){
    try{
        // api calls
        const {user}=yield auth.signInWithPopup(googleProvider);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnapshot=yield userRef.get();
        
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}



// sign in with email
export function* signInWithEmail({payload:{email,password}}){
    try{
        // api calls
        const{user}= yield auth.signInWithEmailAndPassword(email,password);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnapshot=yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


// SESSION
export function* isUserAuthenticated(){
    try{
        const userAuth=yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
        }catch(error){
            yield put(signInFailure(error))
        }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

// SIGN-OUT
export function* userSignOut(){
    try {
        yield auth.signOut();
        yield put (signOutSuccess());
    } catch (error) {
        yield put (signOutFailure(error));
    }

}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,userSignOut)
}

// SIGN UP START

export function* signUp({payload:{email,password,displayName}}){
    try{
        const{user}= yield auth.createUserWithEmailAndPassword(email, password);

        yield put(signUpSuccess({user,additionalData:{displayName }}));
    }catch(error){
        yield put (signUpFailure(error))
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

//Sign Up SUCCESS
export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}









// root user sagas
export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess)])
}