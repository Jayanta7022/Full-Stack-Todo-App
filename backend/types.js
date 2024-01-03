const zod = require('zod');
// we have to create the schema for the input from user for  those three end point in backend

// 1 for create todo
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
