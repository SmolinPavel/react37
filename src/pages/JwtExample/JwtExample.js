import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import GoogleLogin from 'react-google-login';

const GOOGLE_CLIENT_ID =
  '582512709164-ukskfqf046act4cggiiq3q1rv3odab8i.apps.googleusercontent.com';

export const JwtExample = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

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
    console.log({ token: jwtDecode(token) });

    localStorage.setItem('token', token);
  };

  const handleSuccess = data => {
    const { profileObj } = data;
    console.log({ data });
    setAvatar(profileObj.imageUrl);
  };

  const handleFailure = params => {
    console.log({ params });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div>
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: '50px', borderRadius: '50%' }}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
          />
        )}
      </div>
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
