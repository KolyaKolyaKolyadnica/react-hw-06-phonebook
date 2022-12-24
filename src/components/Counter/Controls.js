import style from './Counter.module.css';

function Controls({ step, onIncrement, onDecrement }) {
  return (
    <div className={style.controls}>
      <button onClick={onDecrement}>-{step}</button>
      <button onClick={onIncrement}>+{step}</button>
    </div>
  );
}

export default Controls;
