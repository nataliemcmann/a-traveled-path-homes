import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAmenities() {
  try {

      const response = yield axios.get('/api/amenities');

      yield put({ type: 'SET_AMENITIES', payload: response.data });
  } catch (error) {
      console.log('could not find', error);
  }
}



export default function* amenitiesSaga() {
  yield takeLatest('FETCH_AMENITIES', fetchAmenities);
}