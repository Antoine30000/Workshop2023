import { createSlice } from '@reduxjs/toolkit';

interface ProductMetadata {
  id: number;
  name: string;
  description: string;
}

const initialState: ProductMetadata = {
  id: 0,
  name: 'string',
  description: 'string',
};

export const productSlice = createSlice({
  initialState,
  reducers = {},
});
