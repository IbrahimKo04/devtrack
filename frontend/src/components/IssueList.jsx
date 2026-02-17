import { deleteIssue } from "../api/issues.api";

export default function IssueList({ issues, refresh }) {
  async function remove(id) {
    await deleteIssue(id);
    refresh();
  }

  return (
   <div className="list">
  {issues.map((i) => (
    <div key={i.id} className="card space-between">
      <div>
        <div>{i.title}</div>
        <div className="muted">{i.status}</div>
      </div>

      <button
        className="danger"
        onClick={() => deleteIssue(i.id).then(refresh)}
      >
        Delete
      </button>
    </div>
  ))}
</div>

  );
}
