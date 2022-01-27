import {
  // useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  memo,
  useReducer,
} from 'react';

import { Legend } from './Legend';

import { useMedia } from 'hooks/useMedia';

import styles from './Counter.module.scss';

const initialState = {
  value: 0,
  value2: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DECREMENT':
      return { value: state.value - 1, value2: state.value2 - 2 };
    case 'PARTIAL_DECREMENT':
      return { ...state, value: state.value - 1 };
    case 'DECREMENT_WITH_VALUE':
      return { ...state, value: state.value - action.payload };
    default:
      throw state;
  }
}

function CounterComponent({ title }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mobile = useMedia('(max-width: 500px)');

  const intervalIdRef = useRef();

  const handleMinusClick = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handlePlusClick = useCallback(() => {
    dispatch({ type: 'DECREMENT_WITH_VALUE', payload: 10 });
    // setValue(prevValue => prevValue + 1);
    // setValue2(prevValue => prevValue + 2);
  }, []);

  const newTitle = useMemo(() => {
    return title + ' some calculated value';
  }, [title]);

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
      // setValue(prevValue => prevValue + 1);
      // setValue2(prevValue => prevValue + 2);
    }, 1000);
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const handleClearInterval = () => {
    // setValue(0);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  return (
    <div>
      <h1>Mobile: {String(mobile)}</h1>
      <h1>New title: {newTitle}</h1>
      <h1>
        {state.value} {state.value2}
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

export const Counter = memo(CounterComponent);
