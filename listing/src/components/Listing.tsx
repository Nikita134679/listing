import React from 'react';

// Тип для элементов списка
interface Item {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: Item[];
}

// Функция для форматирования цены в зависимости от валюты
const formatPrice = (price: string, currency_code: string) => {
  const priceValue = parseFloat(price);
  switch (currency_code) {
    case 'USD':
      return `$${priceValue.toFixed(2)}`;
    case 'EUR':
      return `€${priceValue.toFixed(2)}`;
    default:
      return `${priceValue.toFixed(2)} ${currency_code}`;
  }
};

// Функция для определения уровня остатка
const getLevelClass = (quantity: number) => {
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
};

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
            </p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getLevelClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
