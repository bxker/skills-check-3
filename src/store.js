import {createStore} from 'redux';

const initialState = {
    houses: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0.0,
    rent: 0.0
}

// export const UPDATE_NAME = 'UPDATE_NAME'
// export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
// export const UPDATE_CITY = 'UPDATE_CITY'
// export const UPDATE_STATE = 'UPDATE_STATE'
// export const UPDATE_ZIP = 'UPDATE_ZIP'
// export const UPDATE_IMG = 'UPDATE_IMG'
// export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
// export const UPDATE_RENT = 'UPDATE_RENT'


function reducer(state=initialState, action){
    const {type} = action;
    switch(type){
        default:
            return state;
    }
}

export default createStore(reducer);




