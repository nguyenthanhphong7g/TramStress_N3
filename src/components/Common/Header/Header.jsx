import React from 'react';
import './Header.css';

const Header = ({ brand, greeting, actions }) => {
  return (
    <header className="header-container">
      <div className="header-left">
        {brand}
      </div>
      <div className="header-center">
        <h2>{greeting}</h2>
      </div>
      <div className="header-right">
        {actions?.map((action, index) => (
          <button
            key={index}
            className="header-action-btn"
            onClick={action.onClick}
            title={action.label}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
