import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function getPrice (action) {
    try{
        const response = yield axios.get("/api/review", action.payload);
        yield put ({ type: "FETCH_PRICE", payload: response.data });
    } catch (error) {
      console.log("Error with getPrice in review.saga", error);
    }
}
function* reviewSaga() {
    yield takeEvery('FETCH_PRICE', getPrice);
}
export default reviewSaga; 