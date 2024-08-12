import { useState } from "react";
import "./App.css";
import Button from "../Button/Button";
import stats from "../../stats.json";

// export default function App() {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// }

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// const App = () => {
//   const [contentType, setContentType] = useState(null);
//   const [now, setNow] = useState(new Date());

//   console.log("App Component render");

//   function handlerClick(type) {
//     setContentType(type);
//     console.log(contentType);
//   }

//   // setInterval(() => setNow(new Date()), 1000);
//   return (
//     <>
//       <div>Time now: {now.toLocaleTimeString()}</div>
//       <br />
//       <Button onClick={() => handlerClick("1")}>Click</Button>
//       <Button onClick={() => handlerClick("2")}>Click</Button>
//       <Button onClick={() => handlerClick("3")}>Click</Button>
//       <Button onClick={() => handlerClick("4")}>Click</Button>

//       {!contentType && <p>Click on the button</p>}
//       {contentType && <p>{stats[contentType]}</p>}
//     </>
//   );
// };

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  // Функція, яку будемо передавати в ClickCounter
  // для виклику під час кліку
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return <button onClick={handleClick}>Current: {clicks}</button>;
};

const App = () => {
  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
};

export default App;
