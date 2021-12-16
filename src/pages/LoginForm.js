import { useState } from 'react';

import { addUser } from 'api/user';
import { useUsers } from 'hooks/useUsers';

import styles from './Login.module.scss';

const FORM_CONFIG = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'surname',
    label: 'Surname',
  },
];

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const initialState = {
  agreed: false,
  age: '18-25',
  gender: null,
};

FORM_CONFIG.forEach(field => {
  initialState[field.key] = '';
});

export const LoginForm = () => {
  const { users, loading } = useUsers();
  const [state, setState] = useState(initialState);

  const handleChange = event => {
    const { checked, name, type, value } = event.target;

    setState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const payload = {};

    ['name', 'surname', 'gender'].forEach(field => {
      payload[field] = state[field];
    });

    addUser(payload);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map(({ name, surname, gender }) => (
            <li key={name}>
              {name} {surname} is {gender}
            </li>
          ))}
        </ul>
      )}
      <form>
        {FORM_CONFIG.map(field => (
          <div key={field.key} className={styles.InputWrapper}>
            <label>{field.label}:</label>
            <input
              name={field.key}
              value={state[field.key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className={styles.InputWrapper}>
          <label>
            Agree to terms
            <input
              type="checkbox"
              name="agreed"
              checked={state.agreed}
              onChange={handleChange}
            />
          </label>
        </div>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={state.gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={state.gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={handleChange}
            />
          </label>
        </section>
        <div className={styles.InputWrapper}>
          <label>
            Choose your age
            <select
              name="age"
              onChange={handleChange}
              className={styles.Select}
              value={state.age}
              required
            >
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
