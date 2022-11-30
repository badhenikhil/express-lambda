var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("Get User API");
});
router.post("/create", function (req, res, next) {
  res.status(200).send("Post User API");
});

module.exports = router;
