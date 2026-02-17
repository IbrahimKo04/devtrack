import { useState } from "react";
import { createIssue } from "../api/issues.api";

export default function IssueForm({ onCreated }) {
  const [title, setTitle] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!title) return;

    await createIssue({ title });
    setTitle("");
    onCreated();
  }

  return (
    <form onSubmit={submit} className="card row">
  <input
    placeholder="Describe the issue…"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <button className="primary">Add</button>
</form>

  );
}
