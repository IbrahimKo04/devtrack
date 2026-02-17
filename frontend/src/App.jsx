import { useState } from "react";
import Navbar from "./components/Navbar";
import IssuesPage from "./pages/IssuesPage";
import ReleasesPage from "./pages/ReleasesPage";

export default function App() {
  const [page, setPage] = useState("issues");

  return (
    <div style={{ padding: "2rem" }}>
      <Navbar page={page} setPage={setPage} />
      {page === "issues" ? <IssuesPage /> : <ReleasesPage />}
    </div>
  );
}
