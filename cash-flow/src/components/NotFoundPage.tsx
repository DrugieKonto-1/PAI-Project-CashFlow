
export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>Sorry, we can't find the page you are looking for.</p>
      <a href="/" className="home-link">
      <button className="cta-button">Return to homepage</button>
      </a>
    </div>
  );
};
