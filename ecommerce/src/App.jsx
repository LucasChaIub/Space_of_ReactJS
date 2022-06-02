import React from 'react'
import './App.css'

import {
  BrowserRouter as MyRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './common/Header'

function App() {
  return (
    <>
      <MyRouter>
        <Header />      
        <Routes>
          <Route path='/'>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} /> 
          </Route>

          <Route path='/cart'>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </MyRouter>
    </>
  )
}

export default App
