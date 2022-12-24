import { connect } from 'react-redux';

import Controls from './Controls';
import Value from './Value';
import style from './Counter.module.css';
import counterActions from '../../redux/counter/counter-actions';

const STEP = 25;

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className={style.container}>
      <Value counterValue={value} />
      <Controls
        step={STEP}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.reducer.counterValue,
});
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(counterActions.increment(STEP)),
  onDecrement: () => dispatch(counterActions.decrement(STEP)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
