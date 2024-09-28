import { Table, Tooltip, TablePaginationConfig } from 'antd';
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
        },
        {
            title: 'Model',
            dataIndex: 'Model',
            key: 'model',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'type',
        },
        {
            title: 'Manufacturer',
            dataIndex: 'Manufacturer',
            key: 'manufacturer',
        },
        {
            title: 'Seating',
            dataIndex: 'Seating',
            key: 'seating',
            render: (seating: number) => (
                <Tooltip title={`${seating} seats`}>{seating}</Tooltip>
            ),
        },
    ];

    return (
        <div className="overflow-x-auto bg-blue-300 p-4 rounded-lg">
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
                className="custom-ant-table bg-blue-300 rounded-lg text-white px-3 pt-3"
            />
        </div>
    );
};

export default VehicleTable;
