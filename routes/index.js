const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("is this thing on");
});

module.exports = router;
