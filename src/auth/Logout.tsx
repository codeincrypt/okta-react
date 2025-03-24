import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="styled-card">
        <h2 className="logout-title">Your Session Has Ended</h2>
        <p className="logout-text">
          You have been logged out or your session has expired. To continue using our services, please log in again.
        </p>
        <Button size="large" type="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Logout;
