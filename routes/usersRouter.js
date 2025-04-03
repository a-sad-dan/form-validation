const { Router } = require("express")
const usersControllers = require("../controllers/usersController")

const usersRouter = Router();

usersRouter.get("/", usersControllers.usersListGet);
usersRouter.get("/create", usersControllers.usersCreateGet);
usersRouter.post("/create", usersControllers.usersCreatePost);

// Delete the data using form POST method
usersRouter.post("/:id/delete", usersControllers.usersDeletePost);

// show the form to update the users
usersRouter.get("/:id/update", usersControllers.usersUpdateGet);

// update the data using POST - form
usersRouter.post("/:id/update", usersControllers.usersUpdatePost);


module.exports = usersRouter;