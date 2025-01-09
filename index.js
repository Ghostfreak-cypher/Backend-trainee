import Todorouter from "./routers/Todo.router.js";
import express from "express";
import connectDB from "./Database/todo.database.js";
import Authrouter from "./routers/signUp.Router.js";
import cors from "cors";
const app = express();
const port = 8005;
app.use(express.json());
app.use("/Auth", Authrouter);
app.use("/Todo", Todorouter);
connectDB();

app.use(
  cors({
    origin: ["*"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    exposedHeaders: ["set-cookie"],
  })
);

app.listen(port, () => {
  console.log(` Example app listening on port ${port}`);
});

