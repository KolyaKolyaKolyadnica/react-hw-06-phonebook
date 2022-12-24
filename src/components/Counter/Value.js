import style from './Counter.module.css';

function Value({ counterValue }) {
  return <div className={style.value}>Total = {counterValue}</div>;
}

export default Value;
