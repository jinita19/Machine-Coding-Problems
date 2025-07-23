import React, { useState } from "react";
import "./ToDoList.css"; 

type ToDo = {
  id: number;
  title: string;
  completed: boolean;
};

type ToDoProps = {
  data: ToDo;
  onClick: () => void;
  onRemove: () => void;
};

const ToDoApp: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [input, setInput] = useState("");

  const addToDo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!input.trim()) return;
    if (e.key === "Enter") {
      const id = Date.now();
      setToDoList((prev) => [...prev, { id, title: input, completed: false }]);
      setInput("");
    }
  };

  const removeToDo = (id: number) => {
    setToDoList((prev) => prev.filter((todo: ToDo) => todo.id !== id));
  };

  const onTaskClick = (id: number) => {
    setToDoList((prev) =>
      prev.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    );
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={input}
        placeholder="Add a new task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addToDo}
        className="todo-input"
      />
      <div className="todo-list">
        {toDoList.map((todo) => (
          <ToDoCard
            key={todo.id}
            data={todo}
            onClick={() => onTaskClick(todo.id)}
            onRemove={() => removeToDo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

const ToDoCard: React.FC<ToDoProps> = ({ data, onClick, onRemove }) => {
  return (
    <div className="todo-card">
      <input type="checkbox" checked={data.completed} onClick={onClick} />
      <span className={`todo-title${data.completed ? " completed" : ""}`}>
        {data.title}
      </span>
      <i onClick={onRemove} className="todo-remove">
        X
      </i>
    </div>
  );
};

export default ToDoApp;
