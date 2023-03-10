import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/residence', config);
    

    yield put({ 
      type: 'SET_RESIDENCE', 
      payload: response.data });
  } catch (error) {
    console.log('Residence get request failed', error);
  }
}

function* propertyDescriptionForm(action){
    const property = action.payload
    console.log('this is the describe property', property);
    const response = yield axios({
        method: 'POST',
        url:'/api/residence',
        data: property
    })
    yield put({
        type:'FETCH_RESIDENCE'
    })   
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
  yield takeLatest('CREATE_PROPERTY_DESCRIPTION', propertyDescriptionForm);
  yield takeLatest('EDIT_RESIDENCE', residenceEdit);
}
