import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import "./App.css"


const App = () => {
  const [products] = useState([
    { id: 1, name: 'Fancy Product', price: 25.0 },
    { id: 2, name: 'Special Item', price: 120.0 },
    { id: 3, name: 'Sale Item', price: 18.0 },
    { id: 4, name: 'Popular Item', price: 40.0 },
    { id: 5, name: 'Sale Item', price: 18.0 },
    { id: 6, name: 'Fancy Product', price: 25.0 },
    { id: 7, name: 'Special Item', price: 120.0 },
    { id: 8, name: 'Popular Item', price: 40.0 }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;