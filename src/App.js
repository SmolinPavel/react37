import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import { Counter } from 'components/Counter';
import { Table } from 'components/Table';

class App extends Component {
  state = {
    appTitle: 'React 37!',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.appTitle}</h1>
          <img data-type="logo" src={logo} className="App-logo" alt="logo" />
          <Counter
            title="First"
            onTitleUpdate={() => this.setState({ appTitle: 'New Value' })}
          />
          <Counter />
          <Table />
        </header>
      </div>
    );
  }
}

export default App;
