import { GrSearch } from 'react-icons/gr';

const Search = () => {
  return (
    <div>
      <div className="search">
        <div className="icon">
          <GrSearch />
        </div>
        <input type="text" placeholder="Search Brands" />
      </div>
    </div>
  );
};

export default Search;
