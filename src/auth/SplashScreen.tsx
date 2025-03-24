const SplashScreen = () => {
  return (
    <div className="splash-container">
      {/* Loading Animation */}
      <div className="loader"></div>

      {/* Login Message */}
      <h1 className="title">Welcome to Our App</h1>
      <p className="subtitle">Logging in securely with Okta...</p>

      {/* Additional Details */}
      <p className="info-text">
        Please wait while we verify your credentials.
      </p>
    </div>
  );
};

export default SplashScreen;
