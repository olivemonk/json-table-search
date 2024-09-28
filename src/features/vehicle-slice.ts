import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../types/vehicle';
import { parseSearchQuery } from '@/lib/utils';

interface VehicleState {
    data: Vehicle[];
    filteredData: Vehicle[];
    searchQuery: string;
    currentPage: number;
    pageSize: number;
}

const initialState: VehicleState = {
    data: [],
    filteredData: [],
    searchQuery: '',
    currentPage: 1,
    pageSize: 10,
};

const vehicleSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehicles(state, action: PayloadAction<Vehicle[]>) {
            state.data = action.payload;
            state.filteredData = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            const query = action.payload.toLowerCase();
            state.searchQuery = query;

            const filters = parseSearchQuery(query);

            if (Object.keys(filters).length === 0) {
                state.filteredData = state.data.filter(
                    (vehicle) =>
                        vehicle.Name.toLowerCase().includes(query) ||
                        vehicle.Model.toLowerCase().includes(query) ||
                        vehicle.Type.toLowerCase().includes(query) ||
                        vehicle.Manufacturer.toLowerCase().includes(query)
                );
            } else {
                state.filteredData = state.data.filter((vehicle) => {
                    return Object.entries(filters).every(([key, value]) => {
                        if (
                            key === 'name' &&
                            vehicle.Name.toLowerCase().includes(value)
                        )
                            return true;
                        if (
                            key === 'model' &&
                            vehicle.Model.toLowerCase().includes(value)
                        )
                            return true;
                        if (
                            key === 'type' &&
                            vehicle.Type.toLowerCase().includes(value)
                        )
                            return true;
                        if (
                            key === 'manufacturer' &&
                            vehicle.Manufacturer.toLowerCase().includes(value)
                        )
                            return true;
                        return false;
                    });
                });
            }
        },
        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setPageSize(state, action: PayloadAction<number>) {
            state.pageSize = action.payload;
        },
    },
});

export const {
    setVehicles,
    setSearchQuery,
    setPage,
    setPageSize,
} = vehicleSlice.actions;
export default vehicleSlice.reducer;
