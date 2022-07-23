import { getData } from './apiService'
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
