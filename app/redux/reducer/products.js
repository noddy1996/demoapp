const { SET_ERROR_SUCCESS, GET_PRODUCTS_SUCCESS, GET_CATEGORIES_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS } = require("../actionTypes");
const initialState = {
    products:[],
    categories:[],
    productDetail:{}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products:action.payload,
            }
            case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories:action.payload,
            } 
            case GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                productDetail:action.payload,
            }
        default:
            return  state   //must be like this so it can  presist the reducers
    }
}