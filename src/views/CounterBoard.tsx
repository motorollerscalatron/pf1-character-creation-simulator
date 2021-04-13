import React, { FC, useState, useCallback, useEffect } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import './CounterBoard.css';

const CounterBoard: FC<{ initial?: number }> = ({
  initial = 10,
}): JSX.Element => {
  const pool = 80;

  const [count1, setCount1] = useState(initial);
  const [count2, setCount2] = useState(initial);
  const [count3, setCount3] = useState(initial);
  const [count4, setCount4] = useState(initial);
  const [count5, setCount5] = useState(initial);
  const [count6, setCount6] = useState(initial);

  const [countPoolLeft, setCountPoolLeft] = useState(pool);
  useEffect(() => {
    setCountPoolLeft(
      pool - (count1 + count2 + count3 + count4 + count5 + count6)
    );
  }, [count1, count2, count3, count4, count5, count6]);

  const Attrib = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  };
  type AttribType = keyof typeof Attrib;

  const handleAmount = (atr: AttribType, increment: boolean) => {
    // MAX
    if (
      increment &&
      count1 + count2 + count3 + count4 + count5 + count6 > pool - 1
    ) {
      return;
    } else {
      switch (atr) {
        case 'str': {
          setCount1(count1 + (increment ? 1 : -1));
          break;
        }
        case 'dex': {
          setCount2(count2 + (increment ? 1 : -1));
          break;
        }
        case 'con': {
          setCount3(count3 + (increment ? 1 : -1));
          break;
        }
        case 'int': {
          setCount4(count4 + (increment ? 1 : -1));
          break;
        }
        case 'wis': {
          setCount5(count5 + (increment ? 1 : -1));
          break;
        }
        case 'cha': {
          setCount6(count6 + (increment ? 1 : -1));
          break;
        }
      }
    }
    // point min: 7
    // point max: 18
    // point buy cost
    // < 7 ... -2
    // < 10 ... -1
    // < 15 ... 1
    // < 17 ... 2
    // 18 ... 3
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Header />
      <h1>Charname</h1>
      <div></div>
      <div className="border-2">
        <p> Str {count1}</p>
        <button onClick={() => handleAmount('str', true)}>+</button>
        <button onClick={() => handleAmount('str', false)}>-</button>
      </div>
      <div className="border-2">
        <p> Dex {count2}</p>
        <button onClick={() => handleAmount('dex', true)}>+</button>
        <button onClick={() => handleAmount('dex', false)}>-</button>
      </div>
      <div className="border-2">
        <p> Con {count3}</p>
        <button onClick={() => handleAmount('con', true)}>+</button>
        <button onClick={() => handleAmount('con', false)}>-</button>
      </div>
      <div className="border-2">
        <p> Int {count4}</p>
        <button onClick={() => handleAmount('int', true)}>+</button>
        <button onClick={() => handleAmount('int', false)}>-</button>
      </div>
      <div className="border-2">
        <p> Wis {count5}</p>
        <button onClick={() => handleAmount('wis', true)}>+</button>
        <button onClick={() => handleAmount('wis', false)}>-</button>
      </div>
      <div className="border-2">
        <p> Cha {count6}</p>
        <button onClick={() => handleAmount('cha', true)}>+</button>
        <button onClick={() => handleAmount('cha', false)}>-</button>
      </div>
      <div className="border-2">
        <p>Attr points left: {countPoolLeft}</p>
      </div>
      <div className="my-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Store
        </button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Load
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CounterBoard;
