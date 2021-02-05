// @flow

import axios from 'axios'

/**
 * custom axios client
 */
export default axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
  headers: {
    // common: {
    //   Authorization: `Bearer ${window.localStorage.getItem(
    //     LOCALSTORAGE_AUTH_TOKEN,
    //   )}`,
    // },
  },
})
