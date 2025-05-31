import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <Header />
      </header>
      <div className="main-layout__content">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}; 