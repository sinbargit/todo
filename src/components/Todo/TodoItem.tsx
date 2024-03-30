// TodoItem.tsx
import { Button, Checkbox, Typography } from 'antd';
import React from 'react';
import './TodoItem.less';

const { Text } = Typography;

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo, toggleTodo }) => {
  const handleCheckboxClick = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <Checkbox checked={todo.checked} onChange={handleCheckboxClick} />
      <Text className={todo.checked ? 'checked' : ''}>{todo.text}</Text>
      <Button type="text" onClick={handleDeleteClick}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
