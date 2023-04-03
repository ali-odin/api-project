import './css/App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from './Pages/Home'
import ShopGrid from "../src/Components/ShopGrid"

function App() {

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route exact path={'/'} element={<Home/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path="/shop" element={<ShopGrid />} />
        </Routes>
    </div>
  )
}

export default App
