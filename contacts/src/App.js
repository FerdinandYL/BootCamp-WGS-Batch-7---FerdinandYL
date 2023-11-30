import React from 'react';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  function changePage(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div>
      <Navbar currentPage={currentPage} onPageChange={changePage} />
      {currentPage === 'home' && <HomePage/>}
      {currentPage === 'contacts' && <ContactPage/>}
      {currentPage === 'about' && <AboutPage/>}
    </div>
  );
}