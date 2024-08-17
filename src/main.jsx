// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App/App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

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

// import ReactDOM from "react-dom/client";
// import { userContext } from "./userContext";
// import App from "./components/App/App";

// const contextValue = {
//   username: "Mango",
//   isLoggedIn: true,
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <userContext.Provider value={contextValue}>
//     <App />
//   </userContext.Provider>
// );

// ***** Кастомний компонент провайдера *****

import ReactDOM from "react-dom/client";
import { UserProvider } from "./userContext";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
