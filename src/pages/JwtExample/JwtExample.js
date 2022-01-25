import { useState } from 'react';

export const JwtExample = () => {
  const [name, setName] = useState('');

  const handleChange = e => setName(e.target.value);

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
      }),
    });

    const token = await response.json();

    localStorage.setItem('token', token);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <label>
        <h2>Username:</h2>
        <input value={name} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  );
};
