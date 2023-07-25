import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  page: 0,
  totalPages: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setSearchValue, setTotalPages, setPage } = filterSlice.actions;

export default filterSlice.reducer;
