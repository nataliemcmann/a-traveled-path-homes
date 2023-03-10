import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//post Saga: will fire on "ADD_PHOTOS" action
function* addPhotos(action) {
    try{
        //receive array of files
        const newFiles = action.payload;
        //get array length
        const filesLength = newFiles.files.length;
        const data = new FormData(); //declare FormData (IMPORTANT STEP!!!)
        //loop to populate FormData with file data
        for (let i = 0; i < filesLength; i++) {
            data.append("file", newFiles.files[i]);
            data.append("residenceId", newFiles.residenceId);
        }
        yield console.log('Post new files to upload', data);
        yield axios({
            method: 'POST',
            url: '/api/photo/files',
            data: data,
            //include header to inform server of data type
            headers: {
                'content-type': 'multipart/form-data'
            }
            });
    } catch (error) {
        console.log('Error in addPhotos', error);
    }
}

//get Saga: will fire on "FETCH_PHOTOS" action


function* photoSaga() {
    yield takeEvery('ADD_PHOTOS', addPhotos);
}

export default photoSaga;