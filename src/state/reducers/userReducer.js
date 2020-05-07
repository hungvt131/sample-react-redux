import {USER_LOG_IN, USER_LOADING, USER_LOG_DONE} from '../actions';

const initialState = {
    username: '',
    isLoggedIn: false,
    fetching: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOG_IN:            
            return {
                ...state,
                username: action.payload
            }
        case USER_LOADING:
            return {
                ...state,
                fetching : true
            }
        case USER_LOG_DONE:            
            return {
                ...state,
                username: action.payload.user,
                isLoggedIn: action.payload.login,
                fetching: false,
                error: action.payload.error
            }
        default:  
            return state  
    }
}

export default reducer;