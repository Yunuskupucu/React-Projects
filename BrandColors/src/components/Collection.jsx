import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Download from './Download';
import LazyLoad from 'react-lazyload';
import Brand from './Brand';
import MainContext from '../MainContext';

const Collection = () => {
  const { slugs } = useParams();
  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, []);

  return (
    <main className="content">
      <header className="header">
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {brands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder="Loading..."
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;
