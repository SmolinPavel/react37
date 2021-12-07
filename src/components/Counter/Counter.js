import { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.scss';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    console.log('Counter Constructor!');
  }

  static propTypes = {
    title: PropTypes.string,
  };

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

  componentDidUpdate(prevProps) {}

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextprops title', nextProps.title);
  //   if (nextProps.title.includes('test')) {
  //     return false;
  //   }

  //   return true;
  // }

  handleMinusClick = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  handlePlusClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    console.log('render Constructor');

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
