import React from 'react'
import './App.css'

import {
  BrowserRouter as MyRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './common/Header'
import Pages from './pages/Pages'

function App() {
  return (
    <>
      <MyRouter>
        <Header />      
        <Routes>
          <Route path='/' element={<Pages />} />
        </Routes>
      </MyRouter>
    </>
  )
}

export default App


