import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';

const AuthErrorHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const error = params.get('error');
    const errorDescription = params.get('error_description');

    if (error) {
      console.error("Okta Login Error:", errorDescription);

      // Redirect to logout error page with error details
      navigate(`/session?error=${error}&error_description=${encodeURIComponent(errorDescription)}`);
    }
  }, [location, navigate]);

  return <LoginCallback />;
};

export default AuthErrorHandler;