import { IMAGES } from "../Components/imageArray"
//REDUX IMPORTS
import { createStore } from "redux"
import reducer from "./Reducers/imageReducer"

const initialState = {
  image: IMAGES,
}

export const store = createStore(reducer, initialState)
