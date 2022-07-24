import * as ProductService from '../../services/product'
import { SET_PRODUCTS } from '../types/product'
export const getByKeyword = (query) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    })
    let response = await ProductService.getByKeyword(query)

    dispatch({
      type: SET_PRODUCTS,
      payload: response.products,
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false,
    })
  }
}
