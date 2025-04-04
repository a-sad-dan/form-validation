const express = require("express");
const { body, validationResult } = require("express-validator");
const usersRouter = require("./routes/usersRouter");
const searchRouter = require("./routes/searchRouter");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);
app.use("/search", searchRouter);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));