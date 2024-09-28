import { Table, Tooltip, TablePaginationConfig, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setPage, setPageSize } from '../../features/vehicle-slice';
import { useState } from 'react';
import { Vehicle } from '@/types/vehicle';

const VehicleTable = () => {
    const dispatch = useDispatch();
    const { filteredData, currentPage, pageSize } = useSelector(
        (state: RootState) => state.vehicles
    );

    const [loading, setLoading] = useState(false);

    const handleTableChange = (pagination: TablePaginationConfig) => {
        dispatch(setPage(pagination.current || 1));
        dispatch(setPageSize(pagination.pageSize || 10));
    };

    const onTableChange = (pagination: TablePaginationConfig) => {
        setLoading(true);
        setTimeout(() => {
            handleTableChange(pagination);
            setLoading(false);
        }, 500);
    };

    const columns = [
        {
            title: 'S/N',
            dataIndex: 'serial',
            key: 'serial',
            render: (_: string, __: Vehicle, index: number) =>
                (currentPage - 1) * pageSize + index + 1,
        },
        {
            title: 'Vehicle Name',
            dataIndex: 'Name',
            key: 'name',
            sorter: (a: Vehicle, b: Vehicle) => a.Name.localeCompare(b.Name),
        },
        {
            title: 'Model',
            dataIndex: 'Model',
            key: 'model',
            sorter: (a: Vehicle, b: Vehicle) => a.Model.localeCompare(b.Model),
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'type',
            sorter: (a: Vehicle, b: Vehicle) => a.Type.localeCompare(b.Type),
        },
        {
            title: 'Manufacturer',
            dataIndex: 'Manufacturer',
            key: 'manufacturer',
            sorter: (a: Vehicle, b: Vehicle) =>
                a.Manufacturer.localeCompare(b.Manufacturer),
        },
        {
            title: 'Seating',
            dataIndex: 'Seating',
            key: 'seating',
            sorter: (a: Vehicle, b: Vehicle) => a.Seating - b.Seating,
            render: (seating: number) => (
                <Tooltip title={`${seating} seats`}>{seating}</Tooltip>
            ),
        },
    ];

    return (
        <Row justify="center" style={{ padding: '10px' }}>
            <Col span={24}>
                <Table
                    columns={columns}
                    dataSource={filteredData.slice(
                        (currentPage - 1) * pageSize,
                        currentPage * pageSize
                    )}
                    loading={loading}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        total: filteredData.length,
                    }}
                    onChange={onTableChange}
                    rowKey={(record) =>
                        `${record.Name}-${record.Model}-${record.Manufacturer}`
                    }
                    scroll={{ x: true }}
                />
            </Col>
        </Row>
    );
};

export default VehicleTable;
