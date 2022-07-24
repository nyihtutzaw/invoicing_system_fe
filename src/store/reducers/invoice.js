import { SET_INVOICES, SET_INVOICES_CHART } from '../types/invoice'

const initialState = {
  invoices: [],
  invoice_chart: {},
}
const invoice = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
      }
    case SET_INVOICES_CHART:
      return {
        ...state,
        invoice_chart: action.payload,
      }

    default:
      return state
  }
}
export default invoice
