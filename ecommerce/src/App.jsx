import React, { useState } from 'react'
import './App.css'

import {
  BrowserRouter as MyRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './common/Header'
import Pages from './pages/Pages'

import Data from './components/flashDeals/Data'

function App() {
  // passo 1: fetch data from database
  const { productItems } = Data

  const [cartItem, setCartItem] = useState([])

  return (
    <>
      <MyRouter>
        <Header />      
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} />} />
        </Routes>
      </MyRouter>
    </>
  )
}

export default App


