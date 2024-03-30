// TodoApp.tsx
import React, { useState } from 'react';
import './TodoApp.less'; // Import the styles
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import image from './image.png';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; checked: boolean }[]
  >([]);
  const [filteredTodos, setFilteredTodos] = useState<
    { id: number; text: string; checked: boolean }[]
  >([]);

  const addTodo = (todo: { id: number; text: string }) => {
    setTodos([...todos, { ...todo, checked: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const searchTodo = (searchText: string) => {
    if (searchText.trim() === '') {
      setFilteredTodos([]);
    } else {
      const filtered = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <div className="container">
      <div className="background-image">
        <img src={image} />
      </div>
      <div className="todo-app">
        <h1>TODO</h1>
        <TodoForm addTodo={addTodo} searchTodo={searchTodo} />
        <TodoList
          todos={filteredTodos.length > 0 ? filteredTodos : todos}
          deleteTodo={deleteTodo}
          clearCompleted={clearCompleted}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
