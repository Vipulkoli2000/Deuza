import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSession = createAsyncThunk("session/get-session", async () => {
  try {
    const { data } = await axios.get(`/api/session/get-session`);

    return data.user;
  } catch (error) {
    throw new Error(error);
  }
});

export const register = createAsyncThunk("session/register", async ({ myForm }) => {
  try {
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/session/register",
      data: myForm,
    };

    const { data } = await axios.request(config);

    return data.user;
  } catch (error) {
    throw new Error(error);
  }
});

export const login = createAsyncThunk("session/login", async ({ email, password }) => {
  try {
    const { data } = await axios.post(`/api/session/login?email=${email}&password=${password}`);

    return data.user;
  } catch (error) {
    throw new Error(error);
  }
});

export const logout = createAsyncThunk("session/logout", async () => {
  try {
    const { data } = await axios.get(`/api/session/logout`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    sessionUser: [],
    isAuthenticated: false,
    loading: false,
    error: "",
    phonenumber: ''
  },
  reducers: {
    setSessionUser: (state, action) => {
      const { payload } = action;

      state.sessionUser.push(payload);
    },
    setPhonenumber: (state, action) => {
      const { payload } = action;

      state.phonenumber.push(payload);
    },
  },

  extraReducers: {
    [getSession.pending]: (state, { payload }) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [getSession.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.sessionUser = payload;
        state.isAuthenticated = true;
      }
      state.loading = false;
    },
    [getSession.rejected]: (state, { error }) => {
      console.log(error);
      if (error.message === "AxiosError: Request failed with status code 401") {
        state.error = "";
      } else {
        state.error = error.message;
      }
      state.isAuthenticated = false;
      state.loading = false;
    },

    [register.pending]: (state, { payload }) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.sessionUser = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [register.rejected]: (state, { error }) => {
      console.log(error);
      if (error.message === "AxiosError: Request failed with status code 401") {
        state.error = "Reference Limit reached for the referral code !!!";
      }
      state.isAuthenticated = false;
      state.loading = false;
    },

    [login.pending]: (state, { payload }) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.sessionUser = payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [login.rejected]: (state, { error }) => {
      state.error = error.message;
      state.isAuthenticated = false;
      state.loading = false;
    },

    [logout.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.sessionUser = [];
      state.isAuthenticated = false;
      state.loading = false;
      state.error = "";
    },
    [logout.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
  },
});

// Export Actions
export const { setSessionUser } = sessionSlice.actions;

// Export Reducer
export default sessionSlice.reducer;
