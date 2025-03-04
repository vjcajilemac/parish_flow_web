import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface TeacherState {
  counter: number;
}

// Define the initial state with type
const initialState: TeacherState = {
  counter: 10,
};

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = teacherSlice.actions;

// Export reducer
export default teacherSlice.reducer;