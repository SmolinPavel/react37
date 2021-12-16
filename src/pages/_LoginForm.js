import React, { Component } from 'react';

import { addUser, getUsers } from 'api/user';

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

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreed: false,
      age: '18-25',
      gender: null,
      users: [],
      loading: false,
    };
    FORM_CONFIG.forEach(field => {
      this.state[field.key] = '';
    });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const users = (await getUsers()) || [];
    this.setState({ users, loading: false });
  }

  handleChange = event => {
    const { checked, name, type, value } = event.target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {};

    ['name', 'surname', 'gender'].forEach(field => {
      payload[field] = this.state[field];
    });

    addUser(payload);
  };

  render() {
    const { age, agreed, gender, loading, users } = this.state;

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
                value={this.state[field.key]}
                onChange={this.handleChange}
              />
            </div>
          ))}
          <div className={styles.InputWrapper}>
            <label>
              Agree to terms
              <input
                type="checkbox"
                name="agreed"
                checked={agreed}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <section>
            <h2>Choose your gender</h2>
            <label>
              Male
              <input
                type="radio"
                checked={gender === Gender.MALE}
                name="gender"
                value={Gender.MALE}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                checked={gender === Gender.FEMALE}
                name="gender"
                value={Gender.FEMALE}
                onChange={this.handleChange}
              />
            </label>
          </section>
          <div className={styles.InputWrapper}>
            <label>
              Choose your age
              <select
                name="age"
                onChange={this.handleChange}
                className={styles.Select}
                value={age}
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
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
