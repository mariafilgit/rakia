import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataDto } from '../types';

export interface CommonState {
  data: DataDto[];
  isLoaded: boolean;
}

const initialState: CommonState = {
  data: [],
  isLoaded: false,
};

export const commonSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    getInitialData: (state) => {
      state.data = [];
    },
    updateData: (state, action: PayloadAction<DataDto[]>) => {
      state.isLoaded = false;
      state.data = action.payload;
      state.isLoaded = true;
    },
  },
});

export const { updateData, getInitialData } = commonSlice.actions;

export default commonSlice.reducer;
