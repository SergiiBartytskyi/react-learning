import { useId, useState } from "react";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";

import initialTasks from "../../../tasks.json";
import css from "./App.module.css";

//
// ????????? e.preventDefault ?????????????????
// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(evt);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// ************** Не контрольована форма *****************

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// ************** використання форми *****************

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// export default App;

// ************* Хук useId ***************

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// ****************** Контрольовані елементи ******************

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = evt => {
//     setInputValue(evt.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <SearchBar />
//     </>
//   );
// }

// **************** Елемент select *****************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**Якщо селект використовується поза формою, то ми працюємо з ним як з контрольованим елементом:

 * Зберігаємо поточне значення в стані.
 * Передаємо значення стану як атрибут value.
 * Змінюємо стан при події onChange.
 * */
// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={evt => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default function App() {
//   const [lang, setLang] = useState("uk");
//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// }

// ****************** Радіо-кнопки *****************************

// export default function App() {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = evt => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>

//       <p>
//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
//   );
// }

// ****************** Чекбокси *****************************

// export default function App() {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = evt => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// }

// ****************** Контрольована форма *****************************

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleChange = evt => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   const handleSumit = evt => {
//     evt.preventDefault();

//     console.log(values);

//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSumit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// ****************** Колекція елементів *****************************

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
