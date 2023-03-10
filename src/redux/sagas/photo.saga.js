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

//get Saga: will fire on "FETCH_RESIDENCE_PHOTOS" action
function* fetchResidencePhotos(action) {
    try {
        const residenceId = action.payload;
        const residencePhotos = yield axios.get(`/api/photo/${residenceId}`);
        console.log('get residence photos: ', residencePhotos);
        yield put(({type: 'SET_RESIDENCE_PHOTOS', payload: residencePhotos}))
    } catch (err) {
        console.log('Error in fetchResidencePhotos: ', err)
    }
} 

function* photoSaga() {
    yield takeEvery('ADD_PHOTOS', addPhotos);
    yield takeEvery('FETCH_RESIDENCE_PHOTOS', fetchResidencePhotos);
}

export default photoSaga;