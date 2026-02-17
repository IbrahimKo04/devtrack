const express = require("express");
const router = express.Router();
const issuesController = require("../controllers/issues.controller");

router.get("/", issuesController.getIssues);
router.get("/:id", issuesController.getIssue);
router.post("/", issuesController.createIssue);
router.put("/:id", issuesController.updateIssue);
router.delete("/:id", issuesController.deleteIssue);

module.exports = router;
