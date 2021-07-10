//REDUX IMPORTS
import { createStore } from "redux"
// import reducer from "./Reducers/imageReducer"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
// Login Reducers
import authReducer from "./Login/authSlice"
import userReducer from "./Login/userSlice"
import imageReducer from "./Reducers/imageReducer"

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  image: imageReducer,
})

const store = createStore(reducer)

export default store
