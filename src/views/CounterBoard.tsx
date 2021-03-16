// import "../../tailwind.output.css"

import React, { FC, useState, useCallback } from "react";

const CounterBoard: FC<{}> = (): JSX.Element => {
  const [count1, setCount1] = useState(0);

  const updateCount1 = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      switch (e.currentTarget.innerText) {
        case "-":
          setCount1(count1 - 1);
          break;
        case "+":
        default:
          setCount1(count1 + 1);
          break;
      }
    },
    [count1]
  );

  return (
    <div className="board">
      <h1>Board</h1>
      <p> {count1}</p>
      <button onClick={updateCount1}>+</button>
      <button onClick={updateCount1}>-</button>
    </div>
  );
};

export default CounterBoard;
