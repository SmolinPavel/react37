import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import { Counter } from 'components/Counter';
import { Table } from 'components/Table';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App Constructor!');
  }

  state = {
    appTitle: 'React 37!',
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = e => {
    this.setState({ appTitle: e.target.value });
  };

  render() {
    console.log('render App');
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.appTitle}</h1>
          <div>
            <input value={this.state.appTitle} onChange={this.handleChange} />
          </div>
          <img data-type="logo" src={logo} className="App-logo" alt="logo" />
          {this.state.open && (
            <Counter
              title={this.state.appTitle}
              arrProp={['Good', 'Neutral', 'Bad']}
              onTitleUpdate={() => this.setState({ appTitle: 'New Value' })}
            />
          )}
          <div>
            <button onClick={this.handleClick}>
              {this.state.open ? 'Close' : 'Open'}
            </button>
          </div>
          <Table />
        </header>
      </div>
    );
  }
}

export default App;
