import React from 'react';

export default function Navbar({ currentPage, onPageChange }) {
  return (
    <div className="ui secondary menu">
      <button className={currentPage === 'home' ? 'active item' : 'item'} onClick={() => onPageChange('home')}>
        Home
      </button>
      <button className={currentPage === 'contacts' ? 'active item' : 'item'} onClick={() => onPageChange('contacts')}>
        Contacts
      </button>
      <button className={currentPage === 'about' ? 'active item' : 'item'} onClick={() => onPageChange('about')}>
        About
      </button>
    </div>
  );
}