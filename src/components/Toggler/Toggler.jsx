import { useState } from "react";

export default function Toggler({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handlerIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button onClick={handlerIsOpen}>Open/Close</button>
      {isOpen && children}
    </div>
  );
}
