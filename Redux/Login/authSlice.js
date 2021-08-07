import  { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name:"auth",
    initialState:{
        admin:false, 
        LoggedIn:false
    }, 
    reducers:{
        signIn:(state, action) => {
            const {email, password} = action.payload;

            console.log("Sending Request")
            fetch("https://localhost:3443/users/login", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: password
                })
            })
            .then((response) => {
                console.log("Response Received");
                response.json()
            })
            .then((json) => {
                console.log("Token:", json.token);
            })
            .catch((error) => {
                console.error(error);
            })
            state.LoggedIn = true
            state.admin = true
        },
        signOut:(state) => {
            state.LoggedIn = false
            state.admin = false
        },
        createUser:(state,action) => {

        }
    }
})

export default slice.reducer

export const {signIn,signOut,createUser} = slice.actions