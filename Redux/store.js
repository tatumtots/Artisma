import { IMAGES } from "../Components/imageArray"
//REDUX IMPORTS
import { createStore } from "redux"
// import reducer from "./Reducers/imageReducer"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
// Login Reducers
import authReducer from "./Login/authSlice"
import userReducer from "./Login/userSlice"

const reducer = combineReducers({
  auth:authReducer,
  user:userReducer,
})

const store = configureStore({
  reducer
})

// const initialState = {
//   image: IMAGES,
// }

export default store
