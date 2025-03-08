const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("is this thing on");
});

router.use("/contacts", require("./users"));
module.exports = router;
