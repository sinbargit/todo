// TodoList.tsx
import { List, Typography } from 'antd';
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.less';

const { Text } = Typography;

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  clearCompleted,
  toggleTodo,
}) => {
  const activeCount = todos.filter((todo) => !todo.checked).length;
  const completedCount = todos.filter((todo) => todo.checked).length;

  return (
    <div className="todo-list">
      <List
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item>
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          </List.Item>
        )}
      />
      <div className="footer">
        <div>{activeCount} items left</div>
        <div>{completedCount} active completed</div>
        <Text className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </Text>
      </div>
    </div>
  );
};

export default TodoList;
