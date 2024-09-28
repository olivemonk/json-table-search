'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVehicles } from '../../features/vehicle-slice';
import VehicleTable from './vehicle-table';
import SearchBar from './search-bar';
import { Spin, Layout, Row, Col } from 'antd';
import { Vehicle } from '@/types/vehicle';

const { Content } = Layout;

type VehiclePageProps = {
    vehicleData: Vehicle[];
};

const VehiclePage = ({ vehicleData }: VehiclePageProps) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(setVehicles(vehicleData));
        setLoading(false);
    }, [dispatch, vehicleData]);

    if (loading) {
        return (
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Spin size="large" />
            </Row>
        );
    }

    return (
        <Layout style={{ backgroundColor: '#bdc7d6', borderRadius: "8px" }}>
            <Content style={{ padding: '10px'}}>
                <Row justify="center">
                    <Col span={24}>
                        <SearchBar />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={24}>
                        <VehicleTable />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default VehiclePage;
