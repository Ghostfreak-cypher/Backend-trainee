import { response } from "express";
import Todo from "../models/Todoschema.js";
const create = async (req, res) => {
  try {
    if (!req.body.task) {
      return res.json({ error: "Task is required" });
    }
    const newTodo = new Todo({
      task: req.body.task,
      completed: false,
    });
    await newTodo.save();

    res.json({ success: true, status: 201, data: newTodo });
  }
  catch (error) {
    res.json({ error: "error" });
  }
};

const read = async (req, res) => {
  try {
    const todo = await Todo.find();
    console.log(todo)
    res.json({ success: true, status: 200, data: todo });
  }
  catch (error) {
    res.json({ success: false, status: 500, error: "error" });
  }
};
const update = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    todo.task = req.body.task;
    await todo.save();
    res.json(todo);

  } catch (error) {
    res.json({ error: "error" });
  }
};
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.json({ error: "Todo not found" });
    }
    res.json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.json({ error: "error" });
  }
};

const toggle = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.json({ error: "error" });
  }
}

export { create, read, update, remove, toggle };
