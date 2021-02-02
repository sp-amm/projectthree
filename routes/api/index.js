const router = require("express").Router();
const userRoutes = require("./users");

//User route
router.use("/user", userRoutes);



module.exports = router;
