import { BASE_URL } from '../config'

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
})

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest())
  return fetch(`${BASE_URL}/cats`)
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers.get('content-type').startsWith('application/json')
        ) {
          return Promise.reject(res.json())
        }
        return Promise.reject({ code: res.status, message: res.statusText })
      }
      return res.json()
    })
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatError(error)))
}

export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST'
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
})

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS'
export const deleteCatSuccess = () => ({
  type: DELETE_CAT_SUCCESS
})

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR'
export const deleteCatError = error => ({
  type: DELETE_CAT_ERROR,
  error
})

export const deleteCat = () => dispatch => {
  dispatch(deleteCatRequest())
  return fetch(`${BASE_URL}/cats`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers.get('content-type').startsWith('application/json')
        ) {
          return Promise.reject(res.json())
        }
        return Promise.reject({ code: res.status, message: res.statusText })
      }
      return res.json()
    })
    .then(cat => dispatch(deleteCatSuccess(cat)))
    .then(() => dispatch(fetchCat()))
    .catch(error => dispatch(deleteCatError(error)))
}