import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.scss';

class Counter extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    value: 1,
  };

  value = 2;

  handleMinusClick = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  handlePlusClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>Value: {this.value}</h3>
        <div className={styles.ButtonGroup}>
          <button onClick={this.handleMinusClick}>-</button>
          <button
            onClick={() => {
              this.setState(prevState => ({ value: prevState.value + 1 }));
            }}
          >
            +
          </button>
        </div>
        <button onClick={() => this.setState({ value: 0 })}>Rerender</button>
        <button
          onClick={() => {
            console.log('Control Button click');
            this.value = 11;
          }}
        >
          Control Button
        </button>
      </div>
    );
  }
}

export { Counter };
