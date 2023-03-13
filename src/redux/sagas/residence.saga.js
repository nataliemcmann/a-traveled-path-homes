import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/residence/${id}`, config);
    

    yield put({ 
      type: 'SET_RESIDENCE', 
      payload: response.data });
  } catch (error) {
    console.log('Residence get request failed', error);
  }
}

function* createResidence(action){
  try{
    const residence = action.payload
    console.log('create this residence', residence);
    yield response = axios({
        method: 'POST',
        url:'/api/residence',
        data: residence
    })
    yield put({
        type:'FETCH_RESIDENCE',
        payload: response.data
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
    type: 'FETCH_RESIDENCE'
  })
}



export default function* residenceSaga() {
  yield takeLatest('FETCH_RESIDENCE', fetchResidence);
  yield takeLatest('CREATE_RESIDENCE', createResidence);
  yield takeLatest('EDIT_RESIDENCE', residenceEdit);
}
