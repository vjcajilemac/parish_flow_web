import { User } from "@/interfaces/AuthInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { signIn } from "./authThunks";

/*
interface User {
  password: string;
  email: string;
}
*/

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      alert("logout");
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    /*extraReducers: (builder) => {
      builder
        .addCase(signIn.pending, (state) => {
          state.loading = true; // ✅ Correct way to set loading
        })
        .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
          state.loading = false; // ✅ Stops loading on success
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(signIn.rejected, (state) => {
          state.loading = false; // ✅ Stops loading on failure
        });
    },*/
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
