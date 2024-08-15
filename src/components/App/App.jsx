import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
import css from "./App.module.css";
// import articles from "../../../articles.json";
// import Reader from "../Reader/Reader";
// import Button from "../Button/Button";
// import Toggler from "../Toggler/Toggler";

// *************************
// export default function App() {
//   const [click, setClick] = useState(0);

//   function handlerClick() {
//     setClick(click + 1);
//   }

//   return (
//     <>
//       <Reader items={articles} />
//       {/* <Toggler>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint
//           maiores reiciendis neque suscipit voluptas, a facere nemo quae! Beatae
//           nisi error fugit delectus sit sapiente deserunt dolore qui, unde
//           maiores quis esse odit laborum laboriosam ullam voluptatum facere
//           quidem? Quas sequi dolorem perspiciatis non in quae culpa magni, odio
//           id ut maiores tempora! Sit earum perferendis enim nulla deleniti. Eos
//           doloribus, nesciunt pariatur voluptate deleniti ullam numquam atque
//           commodi eaque, ex quasi repellat quam modi, beatae neque! Quis impedit
//           nihil quos, dolores sapiente saepe iusto. Inventore dignissimos illum
//           pariatur, dicta earum sapiente cum error modi eius adipisci quos enim?
//         </p>
//       </Toggler>
//       <Toggler>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint
//           maiores reiciendis neque suscipit voluptas, a facere nemo quae! Beatae
//           nisi error fugit delectus sit sapiente deserunt dolore qui, unde
//           maiores quis esse odit laborum laboriosam ullam voluptatum facere
//           quidem? Quas sequi dolorem perspiciatis non in quae culpa magni, odio
//           id ut maiores tempora! Sit earum perferendis enim nulla deleniti. Eos
//           doloribus, nesciunt pariatur voluptate deleniti ullam numquam atque
//           commodi eaque, ex quasi repellat quam modi, beatae neque! Quis impedit
//           nihil quos, dolores sapiente saepe iusto. Inventore dignissimos illum
//           pariatur, dicta earum sapiente cum error modi eius adipisci quos enim?
//         </p>
//       </Toggler>
//       <Toggler>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint
//           maiores reiciendis neque suscipit voluptas, a facere nemo quae! Beatae
//           nisi error fugit delectus sit sapiente deserunt dolore qui, unde
//           maiores quis esse odit laborum laboriosam ullam voluptatum facere
//           quidem? Quas sequi dolorem perspiciatis non in quae culpa magni, odio
//           id ut maiores tempora! Sit earum perferendis enim nulla deleniti. Eos
//           doloribus, nesciunt pariatur voluptate deleniti ullam numquam atque
//           commodi eaque, ex quasi repellat quam modi, beatae neque! Quis impedit
//           nihil quos, dolores sapiente saepe iusto. Inventore dignissimos illum
//           pariatur, dicta earum sapiente cum error modi eius adipisci quos enim?
//         </p>
//       </Toggler>

//       <hr />

//       <Button />
//       <Button />
//       <Button /> */}
//     </>
//   );
// }

// *************************
// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   // useEffect(() => {
//   //   document.title = `You clicked ${clicks} times`;
//   // });

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }

// const App = () => {
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     console.log(`Interval - ${Date.now()}`);
//   //   }, 2000);
//   // }, []);

//   return <div>App</div>;
// };

// ********************* Функція очищення useEffect *********************
// const Modal = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// ********************* Функція очищення useEffect *********************
// const App = () => {
//   useEffect(() => {
//     console.log("Effect");

//     return () => {
//       console.log("Clean up");
//     };
//   });

//   return <div>App</div>;
// };

// ********* Додавання залежностей useEffect *****************
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// ********** Декілька ефектів *********************
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// ************ Декілька ефектів, які запускаються лише при зміні певних значень *************
// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// ????????????????????    LocaleStorage  ???????????????

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// *************** Запис ********************
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// *************** Читання ********************
// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;
// *************** Sidebar ********************

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const isOpen = window.localStorage.getItem("is-sb-op");
    console.log(isOpen);
    return isOpen !== null ? JSON.parse(isOpen) : false;
  });

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  const [clicks, setClicks] = useState(0);
  const color = clicks % 5 === 0 ? "orangered" : "skyblue";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    window.localStorage.setItem("is-sb-op", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);
  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <button onClick={() => setClicks(clicks + 1)}>Clicks {clicks}</button>

      <button onClick={openSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}

      <Reader items={articles} />
    </div>
  );
};

export default App;
