import React, { Component } from 'react';
import s from './Counter.module.css';

import Controls from './Controls';

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 10,
  //     };
  //   }

  // 1 - СТАТИКА

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  // 2 - СОСТОЯНИЯ

  state = {
    value: this.props.initialValue,
  };

  // 3 - КАСТОМНЫЕ МЕТОДЫ

  handleDischarge = () => {
    this.setState({
      value: this.props.initialValue,
    });
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));

    // console.log('кликнули в увеличить');
    // const { target } = event;
    // setTimeout(() => {
    //   console.log(target);
    // }, 1000);
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  // 4 - РЕНДЕР

  render() {
    // деструктуризщация свойства value чтобы не использовать this.state. при вызове
    const { value } = this.state;
    //
    return (
      <div className={s.counter}>
        <span className={s.value}>{value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDischarge={this.handleDischarge}
        />
        {/* <div className={s.controls}>
          <button type={s.button} onClick={this.handleIncrement}>
            увеличить на 1
          </button>
          <button type={s.button} onClick={this.handleDecrement}>
            уменьшить на 1
          </button>
          <button type={s.button} onClick={this.handleDischarge}>
            СБРОС
          </button>
        </div> */}
      </div>
    );
  }
}

// const Counter = () => (
//   <div className="Counter">
//     <span className="value">0</span>

//     <div className="controls">
//       <button type="button">увеличить на 1</button>
//       <button type="button">уменьшить на 1</button>
//     </div>
//   </div>
// );

export default Counter;
