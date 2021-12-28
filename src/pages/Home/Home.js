import { useState } from 'react';

import logo from 'logo.svg';
import 'App.css';

import { Counter } from 'components/Counter';
import { Table } from 'components/Table';
import { Title } from 'components/Title';
import { TitleContext } from 'contexts/Title';

export const Home = () => {
  const [appTitle, setAppTitle] = useState('React 37!');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleChange = e => {
    setAppTitle(e.target.value);
  };

  return (
    <TitleContext.Provider value={{ title: appTitle }}>
      <div className="App">
        <header className="App-header">
          <Title>{appTitle}</Title>
          <div>
            <input value={appTitle} onChange={handleChange} />
          </div>
          <img data-type="logo" src={logo} className="App-logo" alt="logo" />
          {open && (
            <Counter
              title={appTitle}
              arrProp={['Good', 'Neutral', 'Bad']}
              onTitleUpdate={() => setAppTitle('New Value')}
            />
          )}
          <div>
            <button onClick={handleClick}>{open ? 'Close' : 'Open'}</button>
          </div>
          <Table />
        </header>
      </div>
    </TitleContext.Provider>
  );
};
