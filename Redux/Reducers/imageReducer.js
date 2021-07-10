import { createSlice } from "@reduxjs/toolkit"
import { IMAGES } from "../../Components/imageArray"

const initialState = {
  images: IMAGES,
}

const imageReducer = (state = initialState, action) => {
  return state
}

export default imageReducer
