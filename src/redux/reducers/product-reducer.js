import { ActionTypes } from "../contants/action-type";

const initialState = {
    products : []
}

export const productReducer = (state=initialState,action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};
        default:
            return state;
    }
}

export const selectedproductReducer = (state=initialState,action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,products:action.payload};
        default:
            return state;
    }
}