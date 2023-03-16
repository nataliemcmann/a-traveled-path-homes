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

function* fetchProfileToEdit(action) {
    const idOfProfileToEdit = action.payload;
    console.log(idOfProfileToEdit)
    const response = yield axios({
        method: 'GET',
        url: `/api/profile`
    })
    yield put({
        type: 'SET_PROFILE_TO_EDIT',
        payload: response.data
    })
}

function* editProfile(action) {
    const editProfile = action.payload.editProfile;
    const userId = action.payload.userId
    yield axios({
        method: 'PUT',
        url: `/api/profile/${userId}`,
        data: editProfile,
    })
    yield put({
        type: 'FETCH_PROFILE'
    })
}

//dispatch on "CHANGE_VIEW"
function* changeProfileView(action) {
    try{
        const newView = action.payload.newView;
        const userId = action.payload.userId;
        console.log(newView);
        yield axios({
            method: 'PUT',
            url: `/api/profile/view/${userId}`,
            data: {newView},
        })
        yield put({
            type: 'FETCH_PROFILE'
        })
    } catch (err) {
        console.log('update profile view failed: ', err)
    }
}


function* profileSaga() {
    yield takeEvery('ADD_PROFILE', addProfile);
    yield takeEvery('FETCH_PROFILE', fetchProfile);
    yield takeEvery('FETCH_PROFILE_TO_EDIT', fetchProfileToEdit);
    yield takeEvery('EDITED_PROFILE', editProfile);
    yield takeEvery('CHANGE_VIEW', changeProfileView);
}

export default profileSaga;