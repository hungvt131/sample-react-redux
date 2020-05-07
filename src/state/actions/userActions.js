export const USER_LOG_IN = 'LOG_IN';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOG_DONE = 'USER_LOG_DONE';

export const loginUser = (name) =>  {    
    return {
        type: USER_LOG_IN, 
        payload: name
    }
};

export const loadingUser = () =>  {
    return {
        type: USER_LOADING, 
    }
};

export const doneLoadingUser = (data) =>  {
    return {
        type: USER_LOG_DONE, 
        payload: data
    }
};