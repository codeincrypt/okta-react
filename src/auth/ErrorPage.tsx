import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "antd";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useOktaAuth();
  const isLogged = authState?.isAuthenticated;

  const params = new URLSearchParams(location.search);
  const error = params.get("error");
  const errorDescription = params.get("error_description");

  const formatErrorString = (str: string) => {
    return str
      ? str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : str;
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return (
    <div className="error-container">
      <Card className="styled-card">
        <img
          src={"/1DATA_LOGO.png"}
          alt="Logo"
          className="logo"
        />
        <h2 className="error-title">{formatErrorString(error) || "Error"}</h2>
        <p className="error-description">{errorDescription || "An unexpected error occurred."}</p>
        <Button
          className="custom-button"
          type="primary"
          size="large"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Card>
    </div>
  );
};

export default ErrorPage;