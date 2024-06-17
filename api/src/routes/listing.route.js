const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer.middleware");
const {
  createListing,
  getAllListings,
  getSingleListing,
} = require("../controllers/listing.controller");

router.route("/create").post(upload.single("image"), createListing);
router.route("/all").get(getAllListings);
router.route("/property/:id").get(getSingleListing);
// router.route();

module.exports = router;
