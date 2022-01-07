import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../features/car/carSlice';
import solarReducer from '../features/car/solarSlice';

export const store = configureStore({
    reducer: {
        car: carReducer,
        solar: solarReducer
    }
})