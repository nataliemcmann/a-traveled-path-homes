import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//post Saga: will fire on "ADD_FILES" action
function* addFiles(action) {
    try{
        const newFiles = action.payload;
        yield console.log('Post new files to upload', newFiles);
        yield axios({
            method: 'POST',
            url: '/api/photo/files',
            data: newFiles
            });
    } catch (error) {
        console.log('Error in addFiles', error);
    }
}

function* photoSaga() {
    yield takeEvery('ADD_FILES', addFiles);
}

export default photoSaga;