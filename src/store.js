import { applyMiddleware, combineReducers } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { alluser, userReducer } from './Components/redux/userReducer';
import { createStoreHook } from 'react-redux';

const reducer = combineReducers({
    user: userReducer,
    alluser: alluser

})


const middleware = [thunk];

const initialState = {}

const store = createStoreHook(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;