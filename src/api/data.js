import client from './client'
import { AxiosPromise } from 'axios'

export const fetchData: AxiosPromise = search => {
  return client.get('/data')
}
