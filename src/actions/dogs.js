import { BASE_URL } from '../config'

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
})

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest())
  return fetch(`${BASE_URL}/dog`)
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
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(error => dispatch(fetchDogError(error)))
}

export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST'
export const deleteDogRequest = () => ({
  type: DELETE_DOG_REQUEST
})

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS'
export const deleteDogSuccess = () => ({
  type: DELETE_DOG_SUCCESS
})

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR'
export const deleteDogError = error => ({
  type: DELETE_DOG_ERROR,
  error
})

export const deleteDog = () => dispatch => {
  dispatch(deleteDogRequest())
  return fetch(`${BASE_URL}/dog`, {
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
    .then(cat => dispatch(deleteDogSuccess(cat)))
    .then(() => dispatch(fetchDog()))
    .catch(error => dispatch(deleteDogError(error)))
}