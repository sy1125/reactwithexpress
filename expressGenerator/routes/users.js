var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("get_Method2: Success!");
  res.send("respond with a resource");
});

/* POST users listing. */
router.post("/", function (req, res, next) {
  console.log("post_Method2: Success!");
  res.send("POST request to users");
});

/* PATCH users listing. */
router.patch("/", function (req, res, next) {
  console.log("patch_Method2: Success!");
  res.send("PATCH request to users");
});

/* DELETE users listing. */
router.delete("/", function (req, res, next) {
  console.log("delete_Method2: Success!");
  res.send("DELETE request to users");
});
module.exports = router;
