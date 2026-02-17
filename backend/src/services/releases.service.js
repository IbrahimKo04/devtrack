let releases = [];

const getAllReleases = () => releases;

const createRelease = (data) => {
  const newRelease = {
    id: Date.now().toString(),
    version: data.version,
    description: data.description || "",
    status: "PLANNED",
    createdAt: new Date(),
  };

  releases.push(newRelease);
  return newRelease;
};

module.exports = {
  getAllReleases,
  createRelease,
};
