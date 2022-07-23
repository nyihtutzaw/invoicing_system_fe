import { SET_INVOICES } from '../types/invoice'

const initialState = {
  invoices: [],
}
const invoice = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
      }

    default:
      return state
  }
}
export default invoice
