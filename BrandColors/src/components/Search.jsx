import { GrSearch } from 'react-icons/gr';
import MainContext from '../MainContext';
import { useContext } from 'react';

const Search = () => {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div>
      <div className="search">
        <div className="icon">
          <GrSearch />
        </div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Brands"
        />
      </div>
    </div>
  );
};

export default Search;
