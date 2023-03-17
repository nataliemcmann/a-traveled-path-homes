import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchResidence(action) {
  try {
    

    const response = yield axios.get(`/api/residences/${action.payload}`);
    

    yield put({ 
      type: 'SET_RESIDENCE', 
      payload: response.data });
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

function* fetchSearchResidences(action) {
  try {

    const response = yield axios.get(`/api/residences/search/${action.payload}`);

        yield put({ type: 'SET_RESIDENCES', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
    }
}

function* fetchUserResidences() {
  try {

    const response = yield axios.get(`/api/residences/owner/user`);

        yield put({ type: 'SET_RESIDENCES', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
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

//dispatch on "CHANGE_LISTED"
function* changeListedStatus(action) {
  try{
      const listingStatus = action.payload.listingStatus;
      const residenceId = action.payload.residenceId;
      console.log(listingStatus);
      yield axios({
          method: 'PUT',
          url: `/api/residences/listing/${residenceId}`,
          data: {listingStatus},
      })
      yield put({
          type: 'FETCH_PROFILE'
      })
  } catch (err) {
      console.log('update profile view failed: ', err)
  }
}


export default function* residenceSaga() {
  yield takeLatest('FETCH_RESIDENCE', fetchResidence);
  yield takeLatest('FETCH_ALL_RESIDENCES', fetchAllResidences);
  yield takeLatest('FETCH_RESIDENCES_DETAILS', fetchResidencesDetails)
  yield takeLatest('CREATE_RESIDENCE', createResidence);
  yield takeLatest('EDIT_RESIDENCE', residenceEdit);
  yield takeLatest('FETCH_SEARCH_RESIDENCES', fetchSearchResidences);
  yield takeLatest('FETCH_USER_RESIDENCES', fetchUserResidences);
  yield takeLatest('CHANGE_LISTED', changeListedStatus);
}
