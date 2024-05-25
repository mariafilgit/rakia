import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataDto } from '../types';
import * as values from './init.json';

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
      state.data = values.data;
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
