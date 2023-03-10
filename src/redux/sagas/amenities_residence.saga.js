import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addResidenceAmenities(action) {
  try {
      const amenitiesArray = action.payload;
      yield axios ({
          method: "POST",
          url: "/api/amenities_residences",
          data: amenitiesArray
      })
      yield put({ type: 'FETCH_AMENITIES_RESIDENCES', payload: amenitiesArray.amenitiesId })
  } catch (error) {
      console.log('Error in addResidenceAmenities: ', error);
  }
}

function* deleteAmenities(action) {
  const amenitiesToDelete = action.payload;
  console.log('amenities we are deleting:', amenitiesToDelete)
  const response = yield axios({
      method: 'DELETE',
      url: `/api/amenities/${amenitiesToDelete}`
  })
  yield put({
      type: 'FETCH_AMENITIES',
      payload: response.data
  })
}

function* amenitiesResidenceSaga() {
  yield takeEvery('ADD_TASK_USER', addResidenceAmenities);
  yield takeEvery('DELETE_TASK_USER', deleteAmenities);
}

export default amenitiesResidenceSaga;

