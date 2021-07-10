import { createSlice } from "@reduxjs/toolkit"
import { IMAGES } from "../../Components/imageArray"

const initialState = {
  images: IMAGES,
}

export const imageReducer = (state = initialState, action) => {
  return state
}

// export const groupReducer = (state = initialState, action) => {
//   if( state.images.group === 'painting'){
//     return state
//   }

// }

export default imageReducer
