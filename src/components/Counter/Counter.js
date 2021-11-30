import { Component } from 'react';
import styles from './Counter.module.scss';

class Counter extends Component {
  static defaultProps = {
    title: 'Default Title',
  };

  state = {
    value: 10,
  };

  handleMinusClick = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  handlePlusClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    console.log({ props: this.props });
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>Value: {this.state.value}</h3>
        <div className={styles.ButtonGroup}>
          <button onClick={this.handleMinusClick}>-</button>
          <button onClick={this.handlePlusClick}>+</button>
        </div>
        <button onClick={this.props.onTitleUpdate}>Control Button</button>
      </div>
    );
  }
}

export { Counter };
