import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/residence/${action.payload}`, config);
    

    yield put({ 
      type: 'SET_RESIDENCE', 
      payload: response.data[0] });
  } catch (error) {
    console.log('Residence get request failed', error);
  }
}

function* createResidence(action){
  try{
    const residence = action.payload.residence;
    const uploadedFiles = action.payload.uploadedFiles;
    console.log('create this residence', residence);
    const response = yield axios({
        method: 'POST',
        url:'/api/residence',
        data: residence
    })
    console.log(response.data);
    yield put({
        type:'FETCH_RESIDENCE',
        payload: response.data.id
    }) 
    yield put({
      type:'ADD_RESIDENCE_PHOTOS',
      payload: {
        residenceId: response.data.id,
        uploadedFiles: uploadedFiles
      }
    }) 
  } catch (err) {
    console.log('residence creation failed', err);
  }   
}

function* residenceEdit(action) {
  const editedResidence = action.payload;
  yield axios({
    method: 'PUT',
    url: `/api/residence/${editedResidence.id}`,
    data: editedResidence,
  })
  yield put({
    type: 'FETCH_RESIDENCE',
    payload: editedResidence.id
  })
}



export default function* residenceSaga() {
  yield takeLatest('FETCH_RESIDENCE', fetchResidence);
  yield takeLatest('CREATE_RESIDENCE', createResidence);
  yield takeLatest('EDIT_RESIDENCE', residenceEdit);
}
