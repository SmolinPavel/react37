import { Component } from 'react';

import { LoginForm } from './LoginForm';

import styles from './Login.module.scss';

export class Login extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
        <LoginForm />
      </div>
    );
  }
}
