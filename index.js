import Todorouter from "./routers/Todo.router.js";
import express from "express";
import connectDB from "./Database/todo.database.js";
import Authrouter from "./routers/signUp.Router.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/Auth", Authrouter);
app.use("/Todo", Todorouter);
connectDB();

app.listen(port, () => {
  console.log(` Example app listening on port ${port}`);
});
