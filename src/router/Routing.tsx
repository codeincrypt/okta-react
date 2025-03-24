import { Route, Routes, useNavigate } from "react-router-dom";
import { Security } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";

import SecureLayout from "../layouts/SecureLayout";
import MainLayout from "../layouts/MainLayout";
import { SecureRouter, MainRouter } from "./Router";
import oktaConfig from "../okta/okta.config";

const Navigation = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => navigate(originalUri || "/");
  const oktaAuth = new OktaAuth(oktaConfig);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        {SecureRouter?.map((item) => (
          <Route
            path={item.path}
            key={item.path}
            element={
              <SecureLayout>
                <item.component />
              </SecureLayout>
            }
          />
        ))}

        {MainRouter?.map((item) => (
          <Route
            path={item.path}
            key={item.path}
            element={
              <MainLayout>
                <item.component />
              </MainLayout>
            }
          />
        ))}
      </Routes>
    </Security>
  );
};

export default Navigation;
