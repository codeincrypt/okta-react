import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import Header from "../components/Header";

interface SecureLayoutProps {
  children: React.ReactNode;
}

const SecureLayout = ({ children }: SecureLayoutProps) => {
  const navigate = useNavigate()
  const { oktaAuth, authState } = useOktaAuth();

  const isLogged = authState?.isAuthenticated;
  const username = authState?.idToken?.claims.name;
  console.log("isLogged in Main Layout", authState)
  console.log("Name", authState?.idToken?.claims.name)
  console.log("Email", authState?.idToken?.claims.email)

  const handleLogout = async () => {
    await oktaAuth.signOut();
  };

  useEffect(() => {
    if (isLogged === false) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return (
    <>
      <Header username={username} handleLogout={handleLogout} />
      <div className="p-3 bg-muted">
        {children}
      </div>
    </>
  );
};

export default SecureLayout;
