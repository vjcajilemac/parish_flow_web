import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SchoolClass } from "@/interfaces/SchoolInterfaces";
// Define the state type

interface SchoolState {
  schoolClass: SchoolClass[] | [];
  isLoading: boolean;
}
// Define the initial state with type
const initialState: SchoolState = {
  schoolClass: [],
  isLoading: false,
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    setClasses: (state, action: PayloadAction<SchoolClass[]>) => {
      state.schoolClass = action.payload;
      state.isLoading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClasses, setLoading } = schoolSlice.actions;

// Export reducer
export default schoolSlice.reducer;
