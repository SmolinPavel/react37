import { useHistory, useParams } from 'react-router-dom';

import { useUserDetail } from 'hooks/useUserDetail';

export const UserDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { user } = useUserDetail(id);

  console.log('user detail', user);
  return (
    <div>
      <h1>User Detail Page</h1>
      <button onClick={() => history.goBack()}>👈 Back</button>
      <ul>
        {user &&
          Object.entries(user).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value === 'string' ? value : 'obj'}
            </li>
          ))}
      </ul>
    </div>
  );
};
