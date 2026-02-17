let issues = [];

const getAllIssues = () => issues;

const getIssueById = (id) =>
  issues.find((issue) => issue.id === id);

const createIssue = (data) => {
  const newIssue = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description || "",
    status: "OPEN",
    createdAt: new Date(),
  };

  issues.push(newIssue);
  return newIssue;
};

const updateIssue = (id, data) => {
  const issue = issues.find((i) => i.id === id);
  if (!issue) return null;

  issue.title = data.title ?? issue.title;
  issue.description = data.description ?? issue.description;
  issue.status = data.status ?? issue.status;

  return issue;
};

const deleteIssue = (id) => {
  const index = issues.findIndex((i) => i.id === id);
  if (index === -1) return false;

  issues.splice(index, 1);
  return true;
};

module.exports = {
  getAllIssues,
  getIssueById,
  createIssue,
  updateIssue,
  deleteIssue,
};
