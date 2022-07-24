import { SET_PRODUCTS } from '../types/product'

const initialState = {
  products: [],
}
const product = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }

    default:
      return state
  }
}
export default product
