const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  updateUser,
} = require("../controllers/user.controller");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/updateuser/:userId").post(updateUser);

module.exports = router;
