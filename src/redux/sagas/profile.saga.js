import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//post Saga: will fire on "ADD_PROFILE" action
function* createProfile(action) {
    try{
        const newProfile = action.payload;
        yield console.log('Post new profile to databases: ', newProfile);
        yield axios.post('/api/profile', newProfile);
        //once get is written, yield put to get profile info
    } catch (error) {
        console.log('Error in createProfile: ', error);
    }
}

function* profileSaga() {
    yield takeEvery('ADD_PROFILE', createProfile);
}

export default profileSaga;