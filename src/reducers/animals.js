import {
  FETCH_ANIMAL_SUCCESS,
  FETCH_ANIMAL_REQUEST,
  FETCH_ANIMAL_ERROR,
  DELETE_ANIMAL_ERROR,
  DELETE_ANIMAL_REQUEST,
  DELETE_ANIMAL_SUCCESS
} from '../actions/animals'

const initialState = {
  data: [],
  error: null,
  loading: false
}

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMAL_REQUEST:
      return { ...state, data: null, error: null, loading: true }
    case FETCH_ANIMAL_SUCCESS:
      return { ...state, data: [state.data, action.animal], error: null, loading: false }
    case FETCH_ANIMAL_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    case DELETE_ANIMAL_REQUEST:
      return { ...state, data: null, error: action.error, loading: true }
    case DELETE_ANIMAL_SUCCESS:
      return { ...state, data: null, error: null, loading: false }
    case DELETE_ANIMAL_ERROR:
      return { ...state, data: null, error: action.error, loading: false }
    default:
      return state
  }
}

export default animalReducer;

// case FETCH_ANIMAL_SUCCESS:
//       return Object.assign({}, state, {
//         error: null,
//         loading: false, 
//         data: Object.assign({}, state.data, {
//           ...action.animal
//         })
//       });