import { NavLink, useNavigate } from 'react-router-dom';

import { LoginForm } from './LoginForm';

import styles from './Login.module.scss';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Wrapper}>
      <ul>
        <li>
          <NavLink to="/first">First</NavLink>
        </li>
        <li>
          <NavLink to="/second">Second</NavLink>
        </li>
      </ul>
      <button onClick={() => navigate('/third')}>To third</button>
      <LoginForm />
    </div>
  );
};
