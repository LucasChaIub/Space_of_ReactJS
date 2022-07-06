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

import Data from './components/Data'

function App() {
  // passo 1: fetch data from database
  const { productItems } = Data

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
  
    if(productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id? {...productExit, qty:productExit.qty + 1} : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)  
    
    if (productExit.qty === 1){
      setCartItem(CartItem.filter((item) => item.id != product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item)))
    }
  }

  return (
    <>
      <MyRouter>
        <Header CartItem={CartItem} />      
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} />
        </Routes>
      </MyRouter>
    </>
  )
}

export default App