import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//post Saga: will fire on "ADD_FILES" action
function* addFiles(action) {
    try{
        const newFiles = action.payload;
        const filesLength = newFiles.length;
        const data = new FormData();
        for (let i = 0; i < filesLength; i++) {
            data.append("file", newFiles[i]);
        }
        yield console.log('Post new files to upload', data);
        yield axios({
            method: 'POST',
            url: '/api/photo/files',
            data, 
            headers: {
                'content-type': 'multipart/form-data'
            }
            });
    } catch (error) {
        console.log('Error in addFiles', error);
    }
}

function* photoSaga() {
    yield takeEvery('ADD_FILES', addFiles);
}

export default photoSaga;