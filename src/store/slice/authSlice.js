import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token:null,
    register:false,

}


export const authSlice = createSlice({
    name:"state",
    initialState,
    reducers:{
        setLogin:(state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setRegister:(state,action)=>{
            state.register=action.payload;
        }

    }
});

export const {setLogin, setLogout,setRegister} = authSlice.actions;
export default authSlice;