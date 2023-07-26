import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/userSlice";
import messageSlice from "./Slices/messagesSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    messages: messageSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;
