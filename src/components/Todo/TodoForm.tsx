// TodoForm.tsx
import { Input } from 'antd';
import React, { useState } from 'react';
import './TodoForm.less';

interface Props {
  addTodo: (todo: { id: number; text: string }) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      addTodo({
        id: Date.now(),
        text,
      });
      setText('');
    }
  };

  return (
    <div className="todo-form">
      <Input
        value={text}
        onChange={handleChange}
        // onSearch={() => {}}
        placeholder="Add todo..."
        style={{ width: '100%', height: 60, borderRadius: 10 }}
        // enterButton={true}
        size="large"
        onPressEnter={handleKeyPress}
      />
    </div>
  );
};

export default TodoForm;
