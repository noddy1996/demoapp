import { act } from 'react-test-renderer';
import { put, takeLatest } from 'redux-saga/effects'
import { CREATE_PRODUCTS_API, GET_CATEGORIES_API, GET_PRODUCTS_API } from '../../APIS/apiList';
import { AlertHelper } from '../../utils/AlertHelper';
import RequestMaker from '../../utils/service/RequestMaker';
import { CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, GET_CATEGORIES_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_SUCCESS, SET_ERROR } from '../actionTypes';
export function* workerGetProduct() {


  const response = yield RequestMaker(GET_PRODUCTS_API);

  yield put({ type: GET_PRODUCTS_SUCCESS, payload: response })

}
export function* watcherGetProduct() {

  yield takeLatest(GET_PRODUCTS, workerGetProduct)
}

export function* workerGetProductDetail(action) {

  const { id, callback } = action.payload
  const response = yield RequestMaker(`${GET_PRODUCTS_API}/${id}`);

  yield put({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: response })
  yield callback(true)

}
export function* watcherGetProductDetail() {

  yield takeLatest(GET_PRODUCT_DETAIL, workerGetProductDetail)
}
export function* workerGetCategory() {

  const response = yield RequestMaker(GET_CATEGORIES_API);

  yield put({ type: GET_CATEGORIES_SUCCESS, payload: response })

}
export function* watcherGetCategory() {

  yield takeLatest(GET_PRODUCTS, workerGetCategory)
}

export function* workerCreateProduct(action ) {

  // console.log({action});
  const { name, price, category, description, image ,callback} = action.payload

  const formdata = new FormData()
  formdata.append("Name", name);
  formdata.append("price ", price);
  formdata.append("Category", category);
  formdata.append("Description", description);
  formdata.append("Image", image);
  // console.log({ formdata });

  const response = yield RequestMaker(CREATE_PRODUCTS_API, {method:"POST" ,body:formdata}, { isFormData: true });
  
 if(response) {
   
  callback(true)}

  // yield put({ type: CREATE_PRODUCT_SUCCESS, payload: response })

}
export function* watcherCreateProduct() {

  yield takeLatest(CREATE_PRODUCT, workerCreateProduct)
}
