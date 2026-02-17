export default function Navbar({ page, setPage }) {
  return (
<header className="card">
  <div className="space-between">
    <h1>Release Tracker</h1>
    <div className="row">
      <button
        className={page === "issues" ? "primary" : "ghost"}
        onClick={() => setPage("issues")}
      >
        Issues
      </button>
      <button
        className={page === "releases" ? "primary" : "ghost"}
        onClick={() => setPage("releases")}
      >
        Releases
      </button>
    </div>
  </div>
</header>

  );
}
