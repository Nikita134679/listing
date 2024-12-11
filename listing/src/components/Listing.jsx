import React from 'react';

// Функция для форматирования цены в зависимости от валюты
const formatPrice = (price, currency) => {
  if (currency === 'USD') {
    return `$${parseFloat(price).toFixed(2)}`;
  } else if (currency === 'EUR') {
    return `€${parseFloat(price).toFixed(2)}`;
  } else {
    return `${parseFloat(price).toFixed(2)} ${currency}`;
  }
};

// Функция для обработки остатка
const getQuantityClass = (quantity) => {
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
};

const Listing = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
            </p>
            <p className="item-price">
              {formatPrice(item.price, item.currency_code)}
            </p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;