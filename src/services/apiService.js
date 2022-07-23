import axios from 'axios'
import { NotificationManager } from 'react-notifications'
const apiEndpoint = 'http://localhost:3200/api/'
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export async function getData(url, params) {
  axios.defaults.headers = headers
  let response = await axios.get(`${apiEndpoint}${url}`, { params: params })
  return response.data
}

export async function sendData(url, data, type = 'POST') {
  let response
  axios.defaults.headers = headers
  if (type === 'POST') response = await axios.post(`${apiEndpoint}${url}`, data)
  else if (type === 'DELETE')
    response = await axios.delete(`${apiEndpoint}${url}`, data)
  else if (type === 'PUT')
    response = await axios.put(`${apiEndpoint}${url}`, data)
  else if (type === 'PATCH')
    response = await axios.patch(`${apiEndpoint}${url}`, data)

  if (response.status === 200) {
    NotificationManager.success('Success')
  }

  return response.data
}
