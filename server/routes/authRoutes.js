const express =  require("express");

const router = express.Router();

const {signup,getStaff} = require("../controllers/auth")

router.post("/signup",signup);
router.get("/staff",getStaff);
module.exports = router;