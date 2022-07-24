import { getData, sendData } from './apiService'
import NotificationManager from 'react-notifications/lib/NotificationManager'
export async function getAll(query) {
  try {
    let response = await getData(`invoices?&${new URLSearchParams(query)}`)
    return response
  } catch (e) {
    NotificationManager.error('Opps. Something wrong')
    return false
  }
}

export async function getChartData() {
  try {
    let response = await getData(`invoice-graph`)
    return response
  } catch (e) {
    NotificationManager.error('Opps. Something wrong')
    return false
  }
}

export async function store(values) {
  try {
    return await sendData('invoices', values)
  } catch (e) {
    NotificationManager.error('Error Saving Invoice')
    return false
  }
}
