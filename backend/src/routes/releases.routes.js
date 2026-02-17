const express = require("express");
const router = express.Router();
const releasesController = require("../controllers/releases.controller");

router.get("/", releasesController.getReleases);
router.post("/", releasesController.createRelease);

module.exports = router;
