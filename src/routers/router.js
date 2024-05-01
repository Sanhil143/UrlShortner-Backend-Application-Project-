const express = require("express");
const router = express.Router();
const { create, getUrl } = require("../controllers/controller");

router.post("/url/shorten", create);
router.get("/:urlCode", getUrl);

router.all("/*", (req, res) => {
  res.status(400).send({ status: false, message: "invalid HTTP request" });
});

module.exports = router;
