import logo from './logo.svg';
import './App.css';

import { Button } from 'components/shared/Button';
import { Slider } from 'components/shared/Slider';
import { Table } from 'components/Table';
import { Title } from 'components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-type="logo" src={logo} className="App-logo" alt="logo" />
        {/* <Title number={37}>See you on Tuesday</Title> */}
        <Table />
        {/* <Slider /> */}
        {/* <Button primary>Learn React</Button>
        <Button>Do not Learn Angular</Button> */}
      </header>
    </div>
  );
}

export default App;
