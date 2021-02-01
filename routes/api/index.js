const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");

//User routes
router.use("/user", userRoutes);
// Post routes
router.use("/posts", postRoutes);


module.exports = router;
