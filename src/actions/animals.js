import { BASE_URL } from '../config'

export const FETCH_ANIMAL_REQUEST = 'FETCH_ANIMAL_REQUEST'
export const fetchAnimalRequest = () => ({
  type: FETCH_ANIMAL_REQUEST
})

export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS'
export const fetchAnimalSuccess = animal => ({
  type: FETCH_ANIMAL_SUCCESS,
  animal
})

export const FETCH_ANIMAL_ERROR = 'FETCH_ANIMAL_ERROR'
export const fetchAnimalError = error => ({
  type: FETCH_ANIMAL_ERROR,
  error
})

export const fetchAnimal = (species) => dispatch => {
  if (species === 'cat') {
  dispatch(fetchAnimalRequest());
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
    .then(cat => dispatch(fetchAnimalSuccess(cat)))
    .catch(error => dispatch(fetchAnimalError(error)))
  }

  else if (species === 'dog') {
  dispatch(fetchAnimalRequest());
  return fetch(`${BASE_URL}/dogs`)
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
    .then(dog => dispatch(fetchAnimalSuccess(dog)))
    .catch(error => dispatch(fetchAnimalError(error)))
  }
}

export const DELETE_ANIMAL_REQUEST = 'DELETE_ANIMAL_REQUEST'
export const deleteAnimalRequest = () => ({
  type: DELETE_ANIMAL_REQUEST
})

export const DELETE_ANIMAL_SUCCESS = 'DELETE_ANIMAL_SUCCESS'
export const deleteAnimalSuccess = () => ({
  type: DELETE_ANIMAL_SUCCESS
})

export const DELETE_ANIMAL_ERROR = 'DELETE_ANIMAL_ERROR'
export const deleteAnimalError = error => ({
  type: DELETE_ANIMAL_ERROR,
  error
})

export const deleteAnimal = (species) => dispatch => {
  if (species === 'cat') {
  dispatch(deleteAnimalRequest());
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
    .then(cat => dispatch(deleteAnimalSuccess(cat)))
    .then(() => dispatch(fetchAnimal()))
    .catch(error => dispatch(deleteAnimalError(error)))
  }
  if (species === 'dog') {
  dispatch(deleteAnimalRequest());
  return fetch(`${BASE_URL}/dogs`, {
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
    .then(cat => dispatch(deleteAnimalSuccess(cat)))
    .then(() => dispatch(fetchAnimal()))
    .catch(error => dispatch(deleteAnimalError(error)))
  }
}