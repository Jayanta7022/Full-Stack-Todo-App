import React, { useState } from 'react';
function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((res) => {
            alert('todo created');
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
