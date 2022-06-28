import React, { useState } from 'react'
import './App.css'

import {
  BrowserRouter as MyRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './common/Header'
import Pages from './pages/Pages'
import Cart from './common/cart/Cart';

import Data from './components/flashDeals/Data'

function App() {
  // passo 1: fetch data from database
  const { productItems } = Data

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
  
    if(productExit) {
      setCardItem(cartItem.map((item) => 
      (item.id === product.id? {...productExit, qty:productExit.qty + 1} : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <MyRouter>
        <Header cartItem={cartItem} />      
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} />} />
        </Routes>
      </MyRouter>
    </>
  )
}

export default App


