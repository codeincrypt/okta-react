const oktaConfig = {
  clientId: import.meta.env.VITE_APP_OKTA_CLIENT_ID,
  issuer: import.meta.env.VITE_APP_OKTA_ISSUER,
  redirectUri: `${window.location.origin}/login/callback`,
  postLogoutRedirectUri: window.location.origin + '/session',
  scopes: ["openid", "profile", "email"],
  pkce: true, // PKCE should be true for SPA apps
};

export default oktaConfig;