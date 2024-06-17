import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <button className="new-chat">New Chat</button>
      <div className="user-info">
        <span>Business User</span>
        <span>Admin</span>
      </div>
    </div>
  );
};

export default Header;
