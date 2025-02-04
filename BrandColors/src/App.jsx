import './App.css';
import MainContext from './MainContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import BrandsData from './brands.json';
import { useEffect, useState } from 'react';

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  const data = { brands, selectedBrands, setSelectedBrands };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
