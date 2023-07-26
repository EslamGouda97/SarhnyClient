import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Sarhny from "../../Api/config";

export const fetchMessages = createAsyncThunk("message/fetchMessages", async (userId) => {
    const { data } = await Sarhny.get(`messages`);
    return data;
  });
  export const deleteMessage = createAsyncThunk(
    'messages/deleteMessage',
    async (id) => {
     await Sarhny.delete(`messages/${id}`);
      return id;
    }
  );
  export const addMessage = createAsyncThunk(
    'messages/addMessage',
    async ({userId,message}) => {
      const {data} = await Sarhny.post(`messages/user/${userId}`, {
        message:message
      });
      return data.data;
    }
  );
  
const initialState = {
    messages: [],
    loading: false,
    error: null,
  };
  
  const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchMessages.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchMessages.fulfilled]: (state, action) => {
        state.loading = false;
        state.messages = { ...action.payload };
      },
      [fetchMessages.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
      [deleteMessage.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [deleteMessage.fulfilled]: (state, action) => {
        const messageId = action.payload;
        state.loading = false;
        state.error = null;
        state.messages.data = state.messages.data.filter((message) => message._id !== messageId);
      },
      [deleteMessage.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
      [addMessage.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [addMessage.fulfilled]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.messages.push(action.payload);
    },
    [addMessage.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    },
    },
  
    });
    export default messageSlice.reducer;
    export const getMessagesState = (state) => state.messages?.messages.data;
    export const getLoadingState = (state) => state.messages?.loading;

    
  
  