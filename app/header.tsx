import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold">Careersight</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#">About</a></li>
          <li><a href="#">Careersight</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;