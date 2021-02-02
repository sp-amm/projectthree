const router = require("express").Router();
const cookieParser = require("cookie-parser");
const usersController = require("../../controllers/usersController");


// Matches with "/api/user"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


module.exports = router;
