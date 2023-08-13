import { combineReducers } from "redux";

import { productReducer, selectedproductReducer } from "./product-reducer";

const reducers  = combineReducers({
    allProducts : productReducer,
    product : selectedproductReducer,
})

export default reducers