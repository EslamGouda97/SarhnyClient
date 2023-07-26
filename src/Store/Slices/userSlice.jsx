import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Sarhny from "../../Api/config";

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const { data } = await Sarhny.get(`users/${userId}`);
    return data;
  });
  
  
const initialState = {
    user: {
      name:'',
      age:'',
      image:{
        url:'',
        publicId:''
      }
    },
    loading: false,
    error: null,
    isLogin:false,
  };
  
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      addInfo: (state, action) => {
        state.loading = false;
        state.user = { ...action.payload };
      },
      setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
      setLoggin: (state, action) => {
      state.loading = false;
      state.isLogin = action.payload;
    },
    setUserProfileImage: (state, action) => {
      state.user.image = action.payload;
    }

    },
    extraReducers: {
      [fetchUser.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = { ...action.payload };
      },
      [fetchUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
  
    }});
  
  export const {addInfo,setError,setLoggin,setUserProfileImage} = userSlice.actions;
  export default userSlice.reducer;
  export const getUserState = (state) => state.users?.user.data;
