import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log("Reducer received action:", action); // 👉 яка дія прийшла
  console.log("Current state:", state); // 👉 поточний список задач

  switch (action.type) {
    case "add": {
      const newState = [
        ...state,
        { id: Date.now(), text: action.text, done: false },
      ];
      console.log("New state after add:", newState); // 👉 результат
      return newState;
    }

    case "toggle":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "edit":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.newText } : todo
      );

    case "delete":
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};

const initialState = () => {
  const savedTodo = localStorage.getItem("todos");
  return savedTodo !== null ? JSON.parse(savedTodo) : [];
};

const ToDoApp = () => {
  const [todos, dispatch] = useReducer(reducer, [], initialState);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (text.trim()) {
      console.log("Dispatching add action with text:", text); // 👉 подивитись, що відправляємо
      dispatch({ type: "add", text });
      setText("");
    }
  };

  const handleEdit = todo => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = todo => {
    dispatch({ type: "edit", id: todo.id, newText: editText });
    setEditId(null);
    setEditText("");
  };

  const handleToggle = todo => {
    dispatch({ type: "toggle", id: todo.id });
  };

  const handleDelete = todo => {
    dispatch({ type: "delete", id: todo.id });
  };

  return (
    <div>
      <h1>My Todo List</h1>

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleToggle(todo)}>
                  {todo.done ? "Undo" : "Done"}
                </button>
                <button onClick={() => handleDelete(todo)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
