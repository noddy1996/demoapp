
import { CREATE_PRODUCT, GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT_DETAIL, SET_ERROR} from "./actionTypes";

export const setError=(data)=>({
  type:SET_ERROR,
  payload:data
})
export const getProducts=(data)=>({
  type:GET_PRODUCTS,
  payload:data
})
export const getProductDetail=(data)=>({
  type:GET_PRODUCT_DETAIL,
  payload:data
})
export const createProduct=(data)=>({
  type:CREATE_PRODUCT,
  payload:data
})
export const getCategories=(data)=>({
  type:GET_CATEGORIES,
  payload:data
})
  /* here you can add your action */