import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SplashScreen from "./SplashScreen";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();

  const handleLogin = async () => {
    if (!oktaAuth) return;
    await oktaAuth.signInWithRedirect();
  };

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState, navigate]);

  useEffect(() => {
    const interval = setTimeout(() => {
      handleLogin()
    }, 1000);
    return () => clearTimeout(interval);
  }, []);

  return <SplashScreen />;
};

export default Login;