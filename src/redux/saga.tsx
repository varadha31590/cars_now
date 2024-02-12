import { call,put,takeEvery} from 'redux-saga/effects';
import { ADD_NEW_CAR_POST,ROOT_URL } from './constants';
import axios from 'axios';
import { Action ,addNewCar} from './action';

function* addNewCar_POST(data:Action){

    try{
        const url = ROOT_URL+"/added_cars";
       yield call(axios.post,url,data.payload);
      yield put(addNewCar(data.payload))
    } catch(err){
        console.log("Error is ",err)
    }

}

function* rootSaga(){
    console.log("In saga");
   yield takeEvery(ADD_NEW_CAR_POST as any,addNewCar_POST);
}

export default rootSaga;