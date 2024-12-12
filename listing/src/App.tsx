import React, { useEffect, useState } from 'react';
import Listing from './components/Listing';
import './styles/App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  // Загрузка данных из JSON файла
  useEffect(() => {
    fetch('/src/data/data.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="wrapper">
      <h1>Product Listings</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;
