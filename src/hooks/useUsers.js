import { useEffect, useState } from 'react';

import { getUsers } from 'api/user';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const users = (await getUsers()) || [];
      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return { users, loading };
}
