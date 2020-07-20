import { useState } from 'react';
export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todo.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => {
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
      });
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};

// usage
const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
  initialTodos
);
