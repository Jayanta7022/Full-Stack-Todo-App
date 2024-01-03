const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({}));

app.get('/', (req, res) => {
  res.send('hi there');
});

app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.post('/todos', async (req, res) => {
  const createPayload = req.body;
  const persedPayload = createTodo.safeParse(createPayload);
  if (!persedPayload.success) {
    return res.status(411).json({ message: 'input is wrong' });
  }
  //put it to mongo db
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: 'todo created' });
});
app.put('/completed', async (req, res) => {
  const updatedPayload = req.body;
  const parsedPaylpoad = updateTodo.safeParse(updatedPayload);
  if (!parsedPaylpoad.success) {
    return res.status(411).json({ message: 'input is wrong' });
  }
  await todo.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({ message: 'todo updated' });
});
app.listen(3000, () => {
  console.log('app is running on 3000');
});
