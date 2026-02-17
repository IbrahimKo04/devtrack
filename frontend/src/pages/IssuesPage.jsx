import { useEffect, useState } from "react";
import { getIssues } from "../api/issues.api";
import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";

export default function IssuesPage() {
  const [issues, setIssues] = useState([]);

  async function loadIssues() {
    setIssues(await getIssues());
  }

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <>
      <h2>Issues</h2>
      <IssueForm onCreated={loadIssues} />
      <IssueList issues={issues} refresh={loadIssues} />
    </>
  );
}
