import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export let shoppingItems = [
  {
      id: 0,
      name: 'Cokolada',
      price: 399
  },
  {
      id: 1,
      name: 'Hleb',
      price: 45
  },
  {
      id: 2,
      name: 'Kafa',
      price: 729
  },
  {
      id: 3,
      name: 'Banane',
      price: 129
  },
  {
      id: 4,
      name: 'Cigare',
      price: 360
  }
]
const ShoppingItem = ({ shoppingItems }) => {
  return (
    shoppingItems.map(item => 
      <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
      </div>)
)
}

ReactDOM.render(
  <React.StrictMode>
    <App shoppingItems={shoppingItems} username = "Jelena" />
  </React.StrictMode>,
  document.getElementById('root')
);


