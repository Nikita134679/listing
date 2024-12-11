import React, { useState, useEffect } from 'react';
import Listing from './components/Listing';
import './styles.css'; // Подключаем стили

import data from './data/data.json'; // Подключаем данные (JSON)

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Загружаем данные из файла
    setItems(data);
  }, []);

  return (
    <div className="App">
      <h1>Список предложений</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;