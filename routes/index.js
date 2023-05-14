const  {registration , login} = require("../controlers/Usercontrolers.js")
const express = require("express")
const router = express.Router()

router.post("/login" ,login );
router.post("/register" , registration)


module.exports = router