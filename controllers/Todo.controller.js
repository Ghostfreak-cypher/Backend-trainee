const Todo = [];
const create = (req,res) => {
    const { task } = req.body;
    Todo.push(task);
};
const read = (req,res) => {
    res.send(Todo);
};
const update = (req,res) => {
    const { index, task } = req.body;
    Todo[index] = task;
};
const remove = (req,res) => {
    const { index } = req.body;
    Todo.splice(index, 1);
};
export default { create, read, update, remove };


