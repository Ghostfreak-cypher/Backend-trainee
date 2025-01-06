import router from "./routers/Todo.router.js";
import express from "express";
const app = express();
const port = 3000;

app.get("/Todo", (req, res) => {
 
  res.send(router.create());
});
app.listen(port, () => {
 
  console.log(`Example app listening on port ${port}`);
});

app.post("/Todo", router);
