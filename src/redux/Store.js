import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./CartSlice"

const rootReduser = {
  cart: cartReduser
};

const store = configureStore({
  reducer: rootReduser
})

export default store;