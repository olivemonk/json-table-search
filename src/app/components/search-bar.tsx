import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../features/vehicle-slice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <Input.Search
            placeholder="Search vehicles by Name, Model, Type, or use 'field:value' syntax"
            onChange={handleSearch}
            style={{ marginBottom: 20 }}
        />
    );
};

export default SearchBar;
