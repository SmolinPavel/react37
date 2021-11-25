import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Title.module.scss';

const TOPICS = ['react-scripts', 'react components', 'jsx', 'props'];

export const Title = ({ children, error, number }) => {
  return (
    <>
      {number === 37 && <h3>This is happening right now...</h3>}
      <h1
        className={classnames(styles.Title, {
          [styles['Title--error']]: error,
        })}
      >
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

Title.propTypes = {
  number: PropTypes.number,
};
