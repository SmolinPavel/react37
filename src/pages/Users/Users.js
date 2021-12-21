import { NavLink } from 'react-router-dom';

import { useUsers } from 'hooks/useUsers';
import { ROUTES } from 'consts';

import styles from './Users.module.scss';

export const Users = () => {
  const { users } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <NavLink
              to={`${ROUTES.USERS}/${user.id}`}
              activeClassName={styles.ActiveLink}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
