import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProperty() {
  try {

      const response = yield axios.get('/api/property');

      yield put({ type: 'SET_PROPERTY', payload: response.data });
  } catch (error) {
      console.log('could not find', error);
  }
}


function* propertySaga() {
    yield takeLatest('FETCH_PROPERTY', fetchProperty);
}   

export default propertySaga;