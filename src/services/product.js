import { getData } from './apiService'
import NotificationManager from 'react-notifications/lib/NotificationManager'
export async function getByKeyword(value) {
  try {
    let response = await getData(`products?search=${value}`)
    return response
  } catch (e) {
    NotificationManager.error('Opps. Something wrong')
    return false
  }
}
