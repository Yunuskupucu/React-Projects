import Search from './Search';
import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext } from 'react';
import LazyLoad from 'react-lazyload';
import Download from './Download';

const Content = () => {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {brands.map((brand) => (
          <LazyLoad
            key={brand.slug}
            once={true}
            overflow={true}
            placeholder="Loading..."
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};

export default Content;
