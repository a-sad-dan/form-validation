const { Router } = require("express")
const usersControllers = require("../controllers/usersController")

const usersRouter = Router();

usersRouter.get("/", usersControllers.usersListGet);
usersRouter.get("/create", usersControllers.usersCreateGet)
usersRouter.post("/create", usersControllers.usersCreatePost)

module.exports = usersRouter;