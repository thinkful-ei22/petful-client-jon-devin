import {
  FETCH_DOG_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_ERROR,
  DELETE_DOG_ERROR,
  DELETE_DOG_REQUEST,
  DELETE_DOG_SUCCESS
} from '../actions/dogs'

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      return { ...state, data: null, error: null, loading: true }
    case FETCH_DOG_SUCCESS:
      return { ...state, data: action.dog, error: null, loading: false }
    case FETCH_DOG_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    case DELETE_DOG_REQUEST:
      return { ...state, data: null, error: action.error, loading: true }
    case DELETE_DOG_SUCCESS:
      return { ...state, data: null, error: null, loading: false }
    case DELETE_DOG_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    default:
      return state
  }
}