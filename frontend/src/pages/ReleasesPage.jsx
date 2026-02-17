import { useEffect, useState } from "react";
import { getReleases } from "../api/releases.api";
import ReleaseForm from "../components/ReleaseForm";
import ReleaseList from "../components/ReleaseList";

export default function ReleasesPage() {
  const [releases, setReleases] = useState([]);

  async function loadReleases() {
    setReleases(await getReleases());
  }

  useEffect(() => {
    loadReleases();
  }, []);

  return (
    <>
      <h2>Releases</h2>
      <ReleaseForm onCreated={loadReleases} />
      <ReleaseList releases={releases} />
    </>
  );
}
