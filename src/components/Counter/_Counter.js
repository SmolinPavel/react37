import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.scss';

class Counter extends PureComponent {
  state = {
    value: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        value: prevState.value + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  handleMinusClick = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  handlePlusClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.title} {this.state.value}
        </h1>
        <div
          ref={target => console.log('ref target', target)}
          className={styles.ButtonGroup}
        >
          <button onClick={this.handleMinusClick}>-</button>
          <button
            onClick={() => {
              this.setState(prevState => ({ value: prevState.value + 1 }));
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export { Counter };
