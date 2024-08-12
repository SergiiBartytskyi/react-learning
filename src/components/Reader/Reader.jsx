import { useState } from "react";

export default function Reader({ items }) {
  const [index, setIndex] = useState(0);

  function handlerPrev() {
    setIndex(index - 1);
  }
  function handlerNext() {
    setIndex(index + 1);
  }

  const currentItem = items[index];
  const isBeggin = index === 0;
  const isEnd = index === items.length - 1;
  return (
    <>
      <header>
        <div>
          <button onClick={handlerPrev} disabled={isBeggin}>
            Prev
          </button>
          <button onClick={handlerNext} disabled={isEnd}>
            Next
          </button>
        </div>
        <p>
          {index + 1}/{items.length}
        </p>
      </header>
      <article>
        <h2>{currentItem.topic}</h2>
        <p>{currentItem.text}</p>
      </article>
    </>
  );
}
