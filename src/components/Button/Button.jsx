// import { useState } from "react";
export default function Button({ onClick, children }) {
  console.log("Button render");
  return <button onClick={onClick}>{children}</button>;
}
