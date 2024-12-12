import React from 'react';
import ReactDOM from 'react-dom/client'; // используем React 18 и новый API
import './styles/App.css'; // импортируем стили
import App from './App'; // импортируем главный компонент

// Получаем элемент с id 'root' из index.html
const rootElement = document.getElementById('root') as HTMLElement; // Типизируем

// Используем новый API для рендеринга с React 18
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);