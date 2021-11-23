import { Fragment } from 'react';
import PropTypes from 'prop-types';

const TOPICS = ['react-scripts', 'react components', 'jsx', 'props'];

export const FirstComponent = ({ children, number }) => {
  return (
    <>
      {number === 37 && <h3>This is happening right now...</h3>}
      <h1>
        {children} React {number}!
      </h1>
      <ul>
        {TOPICS.map(topic => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </>
  );
};

FirstComponent.propTypes = {
  number: PropTypes.number,
};
