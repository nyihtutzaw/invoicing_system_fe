import * as InvoiceService from '../../services/invoice'
import { SET_INVOICES } from '../types/invoice'
export const getAll = (query) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    })
    let response = await InvoiceService.getAll(query)

    dispatch({
      type: SET_INVOICES,
      payload: response.invoices,
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false,
    })
  }
}

export const store = (values) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_ACTION_LOADING',
      payload: true,
    })
    await InvoiceService.store(values)

    dispatch({
      type: 'SET_ACTION_LOADING',
      payload: false,
    })
  }
}
