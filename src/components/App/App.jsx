import { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import Player from "../Player/Player";
// import { useToggle } from "../../hooks/useToggle.js";
import "./App.css";

// впвап
// ????? useMemo ?????
// export default function App() {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query]
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul style={{ listStyle: "none" }}>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ????? useRef ?????
// export default function App() {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log("App: ", btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("useEffect: ", btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("handleClick: ", btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// }

// ****** зміна значення рефа не впливає на оновлення компонента і не викликає повторний рендер *****
// export default function App() {
//   const valueRef = useRef(0);

//   useEffect(() => {
//     // Виконається лише один раз під час монтування.
//     // Наступні оновлення значення рефа не
//     // викличуть оновлення компонента
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value</button>;
// }

// ????? Player ?????

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };
// export default App;

// ????? Перенаправлення рефів ?????
// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// const App = () => {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// };

// export default App;

// ????? Хук useToggle ?????

// ***** до хука *****

// // ComponentA.jsx
// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// // ComponentB.jsx
// const ComponentB = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => setIsSidebarOpen(true);

//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <>
//       <button onClick={openSidebar}>Open sidebar</button>
//       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
//     </>
//   );
// };

// ***** після хука *****

// ComponentA.jsx
// import { useToggle } from "../hooks/useToggle.js";

// const ComponentA = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// // ComponentB.jsx
// // import { useToggle } from "../hooks/useToggle.js";

// const ComponentB = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open sidebar</button>
//       <Sidebar isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// ***** useToggle with args *****

// MyComponent.jsx
// import { useToggle } from "../hooks/useToggle.js";

// const MyComponent = () => {
//   const { isOpen, open, close } = useToggle(true);

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// ????? Створення контекста ?????

// ***** Компонент <Provider> *****

// import { createContext } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App/App";
// const myContext = createContext();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <myContext.Provider value={{ username: "Mango" }}>
//     <App />
//   </myContext.Provider>
// );

// ***** Контекст користувача *****
import { UserMenu } from "../UserMenu/UserMenu";

const App = () => {
  return (
    <div>
      <UserMenu />
    </div>
  );
};

export default App;
