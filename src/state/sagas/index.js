import { 
  USER_LOG_IN,
  USER_LOADING,
  USER_LOG_DONE,
  loginUser,
  loadingUser,
  doneLoadingUser
} from '../actions';

import { put, takeLatest, delay } from "redux-saga/effects";

import Axios from 'axios';

function* startProcessLogin(props) {

  yield put(loadingUser());

  const url = 'https://jsonplaceholder.typicode.com/users';
  const data = yield Axios.get(url)
                    .then((response) => response.data)
                    .catch((error) => error.code);
  
  const user = data.find(item => item.username === props.payload)  
  
  const validatedUserObj = {
    user: user.name || '',
    login: (user.name) ? true : false
  }  

  yield delay(3000);
                    
  yield put(doneLoadingUser(validatedUserObj));

}

export default function* rootSaga() {
  yield takeLatest(USER_LOG_IN, startProcessLogin);
}
