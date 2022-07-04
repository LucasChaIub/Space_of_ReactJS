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
      setCartItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty:productExit.qty + 1} : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)  
    
    if (productExit.qty === 1){
      setCartItem(cartItem.filter((item) => item.id != product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item)))
    }
  }

  return (
    <>
      <MyRouter>
        <Header cartItem={cartItem} />      
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} />
        </Routes>
      </MyRouter>
    </>
  )
}

export default App


