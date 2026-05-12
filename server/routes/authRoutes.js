const express =  require("express");

const router = express.Router();

const {signup,getStaff} = require("../controllers/auth")

router.post("/signup",signup);
router.get("/signup",getStaff);
module.exports = router;