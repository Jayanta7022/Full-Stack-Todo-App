const mongoose = require('mongoose');
try {
  mongoose.connect('mongodb://localhost:27017/todo').then(() => {
    console.log('connected');
  });
} catch (err) {
  console.log(err);
}
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
  todo: todo,
};
