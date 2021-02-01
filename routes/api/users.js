const router = require("express").Router();
const cookieParser = require("cookie-parser");
const postsController = require("../../controllers/postsController");
const User = require("../../models/user")

//Passport routes for authentication
router.post("/", (req, res) => {
    console.log(req.body);
  });

//Checks if there's already a user and if not post new User
router.post("/register", (req, res) => {
  User.findOne({username: req.body.username}, (err,doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const newUser = new User ({
          email: req.body.email,
          password: req.body.password
        }).then (newUser.save());
        res.send("User Created");
  }  
  });
});

router.get("/getUser", (req, res) => {
    console.log(req.body);
  });


module.exports = router;