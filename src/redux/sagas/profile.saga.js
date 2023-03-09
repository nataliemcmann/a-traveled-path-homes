import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//post Saga: will fire on "ADD_PROFILE" action
function* addProfile(action) {
    try{
        const newProfile = action.payload;
        yield console.log('Post new profile to databases: ', newProfile);
        yield axios.post('/api/profile', newProfile);
    } catch (error) {
        console.log('Error in addProfile: ', error);
    }
}

//get Saga: will fire on "FETCH_PROFILE" action
function* fetchProfile() {
    try{
        const response = yield axios.get('/api/profile');
        yield put({ type: 'SET_PROFILE', payload: response.data})
    } catch (error) {
        console.log('Profile get request failed', error);
    }
}

function* profileSaga() {
    yield takeEvery('ADD_PROFILE', addProfile);
    yield takeEvery('FETCH_PROFILE', fetchProfile);
}

export default profileSaga;