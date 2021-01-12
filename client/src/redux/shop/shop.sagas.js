import {takeLatest,call,put} from 'redux-saga/effects';

import{firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import{fetchCollectionSuccess,fetchCollectionFailure} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsynch(){

    try{
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap= yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch(error){
    yield put(fetchCollectionFailure(error.message));     
    }


    // collectionRef
    //   .get()
    //   .then(async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshottoMap(snapshot);
    //     dispatch(fetchCollectionSuccess(collectionsMap));
    //   })
    //   .catch((error) => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsynch
    )
}