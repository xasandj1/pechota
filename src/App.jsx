import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Cotalgy from './pages/Cotalgy';
import OurShop from './pages/OurShop';
import Contact from './pages/Contact';
import "./global/style.scss";
import NoutFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/cotalgy' element={<Cotalgy />} />
          <Route path='/ourshop' element={<OurShop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoutFound />} />
        </Route>
      </Routes>
    </>
  )
}
export default App