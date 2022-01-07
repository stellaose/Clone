import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sun: ['Solar Roofs', 'Solar Panel']
}

const solarSlice = createSlice({
    name: "solar",
    initialState,
    reducers: {}
})

export const selectSolar = state => state.solar.sun;

export default solarSlice.reducer;