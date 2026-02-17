const releaseService = require("../services/releases.service");

exports.getReleases = (req, res) => {
  res.json(releaseService.getAllReleases());
};

exports.createRelease = (req, res) => {
  const { version } = req.body;

  if (!version) {
    return res.status(400).json({ message: "Version is required" });
  }

  const newRelease = releaseService.createRelease(req.body);
  res.status(201).json(newRelease);
};
