import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../features/vehicle-slice';

export const store = configureStore({
    reducer: {
        vehicles: vehicleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
