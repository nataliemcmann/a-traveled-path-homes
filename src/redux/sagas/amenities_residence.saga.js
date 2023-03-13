import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addResidenceAmenities(action) {
  try {
      const residenceId = action.payload.residenceId;
      const amenitiesList = action.payload.amenitiesList;
      yield axios ({
          method: "POST",
          url: "/api/amenities_residences",
          data: {
            residenceId,
            amenitiesList
          }
      })
      // yield put({ type: 'FETCH_AMENITIES_RESIDENCES', payload: amenitiesArray.amenitiesId })
  } catch (error) {
      console.log('Error in addResidenceAmenities: ', error);
  }
}

function* deleteResidenceAmenities(action) {
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
  yield takeEvery('ADD_AMENITIES_RESIDENCE', addResidenceAmenities);
  yield takeEvery('DELETE_AMENITIES_RESIDENCE', deleteResidenceAmenities);
}

export default amenitiesResidenceSaga;

