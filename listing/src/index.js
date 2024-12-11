import React from 'react';
import ReactDOM from 'react-dom/client';  // Импортируем createRoot из react-dom/client
import './styles.css'; // Подключаем стили
import App from './App'; // Подключаем главный компонент

// Создаем корень приложения и рендерим его
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);