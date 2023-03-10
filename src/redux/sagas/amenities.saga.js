import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';




export default function* amenitiesSaga() {
  yield takeLatest('FETCH_AMENITIES', fetchAmenities);
}