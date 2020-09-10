var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "첫번째 프로젝트 앱" });
});

module.exports = router;
