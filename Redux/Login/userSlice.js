import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name:'user',
    initialState:[{}],
    reducers: {
        getUser:(state) => {
            state.push({name: "User One"})
            state.push({name: "USer Two"})
        }
    }
    
})

export default slice.reducer

export const {getUser} = slice.actions