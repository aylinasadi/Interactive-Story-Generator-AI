function LoadingStatus({theme}) {
  return <div className="loading-container">
      <h2>Generating Your {theme} Story</h2>
      <div className="loading-animation">
        <div className="spinner"></div>
      </div>

      <p className="loading-info">
        This may take a moment. Sit back and let the magic happen!
      </p>
    </div>
}

export default LoadingStatus;