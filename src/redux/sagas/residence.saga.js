import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence(action) {
  try {
    

    const response = yield axios.get(`/api/residences/${action.payload}`);
    

    yield put({ 
      type: 'SET_RESIDENCE', 
      payload: response.data[0] });
  } catch (error) {
    console.log('Residence get request failed', error);
  }
}

function* fetchAllResidences() {
  try {

    const response = yield axios.get('/api/residences/all');

        yield put({ type: 'SET_RESIDENCES', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
    }
}

function* fetchResidencesDetails(action) {
  console.log(action.payload);
  const residencesId = action.payload;
  try {
      const residencesDetailsRes = yield axios({
      method: 'GET',
      url: `/api/residences/${residencesId}`
  })
  yield put({
      type: 'SET_RESIDENCES_DETAILS',
      payload: residencesDetailsRes.data 
  })
  } catch (err) {
  console.log('fetchResidencesDetails fail:', err);
  }
}

function* createResidence(action){
  try{
    const residence = action.payload.residence;
    const uploadedFiles = action.payload.uploadedFiles;
    const amenitiesArray = action.payload.amenitiesArray;
    console.log('create this residence', residence);
    const response = yield axios({
        method: 'POST',
        url:'/api/residences',
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
    yield put({
      type:'ADD_AMENITIES_RESIDENCE',
      payload: {
        residenceId: response.data.id,
        amenitiesList: amenitiesArray
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
    url: `/api/residences/${editedResidence.id}`,
    data: editedResidence,
  })
  yield put({
    type: 'FETCH_RESIDENCE',
    payload: editedResidence.id
  })
}



export default function* residenceSaga() {
  yield takeLatest('FETCH_RESIDENCE', fetchResidence);
  yield takeLatest('FETCH_ALL_RESIDENCES', fetchAllResidences);
  yield takeLatest('FETCH_RESIDENCES_DETAILS', fetchResidencesDetails)
  yield takeLatest('CREATE_RESIDENCE', createResidence);
  yield takeLatest('EDIT_RESIDENCE', residenceEdit);
}
