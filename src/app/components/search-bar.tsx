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
             placeholder="Search vehicles by Name, Model, Type, (e.g. sedan) or use 'field:value' syntax (e.g. manufacturer:ford type:sedan)"
            onChange={handleSearch}
            style={{ padding: '10px' }}
        />
    );
};

export default SearchBar;
