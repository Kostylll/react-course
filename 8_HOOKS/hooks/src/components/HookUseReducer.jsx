import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [taskText, setTaskText] = useState("");
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    { id: 1, text: "faze1" },
    { id: 2, text: "faze2" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Núemro: {number}</p>
      <button onClick={dispatch}>Alterar Número</button>
      <hr />

      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <button type="submit">Enviar</button>
      </form>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </div>
  );
};

export default HookUseReducer;
