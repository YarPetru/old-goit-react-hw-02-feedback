import React from 'react';
import s from './Counter.module.css';

function Controls({ onIncrement, onDecrement, onDischarge }) {
  return (
    <div className={s.controls}>
      <button type={s.button} onClick={onIncrement}>
        увеличить на 1
      </button>
      <button type={s.button} onClick={onDecrement}>
        уменьшить на 1
      </button>
      <button type={s.button} onClick={onDischarge}>
        СБРОС
      </button>
    </div>
  );
}

export default Controls;
