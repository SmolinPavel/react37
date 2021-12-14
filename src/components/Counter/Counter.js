import { useState, useEffect, useRef } from 'react';

import { Legend } from './Legend';

import styles from './Counter.module.scss';

export function Counter({ title }) {
  const [value, setValue] = useState(0);
  const intervalIdRef = useRef();

  const handleMinusClick = () => {
    setValue(prevValue => prevValue - 1);
  };

  const handlePlusClick = () => {
    setValue(prevValue => prevValue + 1);
  };

  // open the Counter
  // change the title (prop)
  // close the Counter

  useEffect(() => {
    console.log('effect', title);

    return () => {
      console.log('clean up', title);
    };
  }, [title]);

  // componentDidMount
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setValue(prevValue => prevValue + 1);
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const handleClearInterval = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  return (
    <div>
      <h1>
        {title} {value}
      </h1>
      <div>
        <button onClick={handleClearInterval}>Clear interval</button>
      </div>
      <div className={styles.ButtonGroup}>
        <button onClick={handleMinusClick}>-</button>
        <button onClick={handlePlusClick}>+</button>
      </div>
      <Legend title={title} />
    </div>
  );
}
