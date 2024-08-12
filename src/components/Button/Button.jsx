import { useState } from "react";
export default function Button() {
  const [click, setClick] = useState(0);

  function handlerClick() {
    setClick(click + 1);
  }
  return <button onClick={handlerClick}>{click}</button>;
}
