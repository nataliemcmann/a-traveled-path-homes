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

function* fetchPropertyDetails(action) {
    console.log(action.payload);
    const propertyId = action.payload;
    try {
        const propertyDetailsRes = yield axios({
        method: 'GET',
        url: `/api/property/${propertyId}`
    })
    yield put({
        type: 'SET_PROPERTY_DETAILS',
        payload: propertyDetailsRes.data 
    })
    } catch (err) {
    console.log('fetchPropertyDetails fail:', err);
    }
}


function* propertySaga() {
    yield takeLatest('FETCH_PROPERTY', fetchProperty);
    yield takeLatest('FETCH_PROPERTY_DETAILS', fetchPropertyDetails)
}   

export default propertySaga;