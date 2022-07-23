import * as InvoiceService from 'services/invoice'
import { SET_INVOICES } from 'store/types/invoice'
export const getAll = (query) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    })
    // let response = await InvoiceService.getAll(query)
    // dispatch({
    //   type: SET_INVOICES,
    //   payload: response,
    // })
    dispatch({
      type: 'SET_LOADING',
      payload: false,
    })
  }
}
