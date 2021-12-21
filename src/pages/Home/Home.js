import { Component } from 'react';

import logo from 'logo.svg';
import 'App.css';

import { Counter } from 'components/Counter';
import { Table } from 'components/Table';
import { Title } from 'components/Title';
import { TitleContext } from 'contexts/Title';

export class Home extends Component {
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
    return (
      <TitleContext.Provider value={{ title: this.state.appTitle }}>
        <div className="App">
          <header className="App-header">
            <Title>{this.state.appTitle}</Title>
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
      </TitleContext.Provider>
    );
  }
}
