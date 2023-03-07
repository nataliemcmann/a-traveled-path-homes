import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/residence', config);
    

    yield put({ type: 'SET_RESIDENCE', payload: response.data });
  } catch (error) {
    console.log('Residence get request failed', error);
  }
}

export default function* residenceSaga() {
  yield takeLatest('FETCH_RESIDENCE', fetchResidence);
}