import { useEffect, useRef, useState } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const unmountedRef = useRef();

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setTimeout(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );

        const users = await response.json();

        if (!unmountedRef.current) {
          setUsers(users);
          setLoading(false);
        }
      }, 2000);
    }

    fetchUsers();

    return () => {
      // cleanup -> componentWillUnmount
      unmountedRef.current = true;
    };
  }, []);

  return { users, loading };
}
