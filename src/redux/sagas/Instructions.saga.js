import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
function* fetchInstructions() {
   try {
    const response = yield axios.get('/api/instructions');
    yield put ({
        type: 'FETCH_INSTRUCTIONS',
        payload: response.data
    });
   } catch(error){
    console.log('could not fetch instructions');
   }
  }


function* addToInstructionsForm(action){
try {
    const response = yield axios.post ('/api/instructions', action.payload);
    yield put ({
        type: 'SET_INSTRUCTIONS',
        payload: response.data,
    });
} catch(error){
    console.log('could not set instructions');
}

}
export default function* instructionsSaga() {
    yield takeLatest('FETCH_INSTRUCTIONS', fetchInstructions);
    yield takeLatest('SAGA/ADD_TO_INSTRUCTIONS', addToInstructionsForm);
  }