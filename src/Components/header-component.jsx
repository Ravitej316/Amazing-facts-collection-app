function Header({ formstate, Showform }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Share your Amazing Facts</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => Showform((c) => !c)}
      >
        {formstate ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
