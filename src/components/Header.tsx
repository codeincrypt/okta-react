import { Button } from "antd";
import React from "react";

const Header: React.FC<{ username: string, handleLogout: () => void }> = ({ username, handleLogout }) => {

  return (
    <header className="header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="user-section">
        <span className="welcome-text">Welcome, {username}</span>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
