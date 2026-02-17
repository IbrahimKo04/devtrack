export default function ReleaseList({ releases }) {
  return (
<div className="list">
  {releases.map((r) => (
    <div key={r.id} className="card space-between">
      <span>{r.version}</span>
      <span className="muted">{r.status}</span>
    </div>
  ))}
</div>

  );
}
