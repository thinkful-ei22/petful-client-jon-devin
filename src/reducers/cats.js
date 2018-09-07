import {
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR,
  DELETE_CAT_ERROR,
  DELETE_CAT_REQUEST,
  DELETE_CAT_SUCCESS
} from '../actions/cats'

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST:
      return { ...state, data: null, error: null, loading: true }
    case FETCH_CAT_SUCCESS:
      return { ...state, data: action.cat, error: null, loading: false }
    case FETCH_CAT_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    case DELETE_CAT_REQUEST:
      return { ...state, data: null, error: action.error, loading: true }
    case DELETE_CAT_SUCCESS:
      return { ...state, data: null, error: null, loading: false }
    case DELETE_CAT_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    default:
      return state
  }
}