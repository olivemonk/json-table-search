'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVehicles } from '../../features/vehicle-slice';
import VehicleTable from './vehicle-table';
import SearchBar from './search-bar';
import { Spin } from 'antd';
import { Vehicle } from '@/types/vehicle';

type VehiclePageProps = {
    vehicleData: Vehicle[];
};

const VehiclePage = ({ vehicleData }: VehiclePageProps) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            dispatch(setVehicles(vehicleData));
            setLoading(false);
        }, 1000);
    }, [dispatch, vehicleData]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <>
            <SearchBar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <VehicleTable />
            </div>
        </>
    );
};

export default VehiclePage;
