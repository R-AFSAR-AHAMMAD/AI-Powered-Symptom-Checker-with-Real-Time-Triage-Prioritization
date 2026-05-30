const express =  require("express");

const router = express.Router();

const {signup,getStaff,login} = require("../controllers/auth")

router.post("/signup",signup);
router.get("/staff",getStaff);
router.post("/login",login);
module.exports = router;