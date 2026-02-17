import { useState } from "react";
import { createRelease } from "../api/releases.api";

export default function ReleaseForm({ onCreated }) {
  const [version, setVersion] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!version) return;

    await createRelease({ version });
    setVersion("");
    onCreated();
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="v1.0.0"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      />
      <button>Add Release</button>
    </form>
  );
}
