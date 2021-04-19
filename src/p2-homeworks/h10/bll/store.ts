import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {authReducer} from "../../h13/authReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer,
    theme:themeReducer,
    auth:authReducer

});

const store: Store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
// for dev
