import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create User Action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://670947a4af1a3998baa1016d.mockapi.io/test2",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Read User Data (Get All Users)
export const getAllUserData = createAsyncThunk(
  "getAllUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://670947a4af1a3998baa1016d.mockapi.io/test2"
      );
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.log("API Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Delete User Action
export const handleDelete = createAsyncThunk(
  "handleDelete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://670947a4af1a3998baa1016d.mockapi.io/test2/${id}`
      );
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.log("API Error:", error);
      return rejectWithValue(error.message);
    }
  }
);



// Update user

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://670947a4af1a3998baa1016d.mockapi.io/test2/${id}`,
        data
      );
      console.log("updated Data :" , response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Slice Definition
export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All Users
      .addCase(getAllUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getAllUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete User
      .addCase(handleDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleDelete.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.user = state.user.filter((ele) => ele.id !== id);
        }
        console.log(action.payload);
      })
      .addCase(handleDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Update 

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = state.user.map((ele) => ele.id === action.payload.id ? action.payload : ele)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetails.reducer;
