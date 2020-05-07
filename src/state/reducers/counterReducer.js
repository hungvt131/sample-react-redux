import {INCREASE_COUNTER, ADD_COUNTER, ADD_COUNTER_MODIFIED} from '../actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            console.log(action.type);
            //xu li logic gi do
            // Object.assign({}, state, ...)
            // call api
            return {
                ...state,
                counter: state.counter + 1
            }
        case ADD_COUNTER_MODIFIED:
        case ADD_COUNTER:
            // const multi2 = action.payload *2 ;
            console.log(action.payload);
            
            return {
                ...state,
                counter: state.counter + parseInt(action.payload)
            }
        default:  
            return state  
    }
}

export default reducer;