export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';

export const increaseCounter = () => {
    return {
        type: INCREASE_COUNTER
    }
}

export const addCounter = (value) => {
    return {
        type: ADD_COUNTER,
        payload: value
    }
} 