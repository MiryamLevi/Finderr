import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
// import { userReducer } from './reducers/user.reducer'
import { gigReducer } from './reducers/gig.reducer'
import { orederReducer } from './reducers/order.reducer'

const rootReducer = combineReducers({
    gigModule: gigReducer,
    orderModule: orederReducer
    // userModule: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store