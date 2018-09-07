
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import animalReducer from './reducers/animals';

export default createStore(animalReducer, composeWithDevTools(applyMiddleware(thunk)));