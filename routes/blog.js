const express = require("express");
const router = express.Router();


// import controller 
const {dummyLink} = require("../controllers/LikeController");



// Mapping create
router.get("dummyroute", dummyLink);



// Export
module.exports = router;