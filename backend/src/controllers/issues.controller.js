const issueService = require("../services/issues.service");

exports.getIssues = (req, res) => {
  res.json(issueService.getAllIssues());
};

exports.getIssue = (req, res) => {
  const issue = issueService.getIssueById(req.params.id);
  if (!issue) {
    return res.status(404).json({ message: "Issue not found" });
  }
  res.json(issue);
};

exports.createIssue = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newIssue = issueService.createIssue(req.body);
  res.status(201).json(newIssue);
};

exports.updateIssue = (req, res) => {
  const updated = issueService.updateIssue(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Issue not found" });
  }

  res.json(updated);
};

exports.deleteIssue = (req, res) => {
  const deleted = issueService.deleteIssue(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Issue not found" });
  }

  res.status(204).send();
};
