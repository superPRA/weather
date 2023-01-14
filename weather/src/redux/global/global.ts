import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { activeCity, airPlution, cityApiResponce } from "../../types/apiTypes";
import { result,weather } from "../../types/apiTypes";
import { useAppSelector } from "../hooks";


type theme = "dark" | "light"

interface initialState {
    isDay: boolean
    loading: boolean
    theme: theme
}

const initialState: initialState = {
    isDay: false,
    loading: true,
    theme: "dark"
};

export const counterSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<boolean>)=>{
        state.isDay = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>)=>{
        state.loading = action.payload
    },
    changeTheme: (state, action: PayloadAction<theme>)=>{
      state.theme = action.payload
    }
  },
});

export const { setDay, setLoading, changeTheme } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default counterSlice.reducer;