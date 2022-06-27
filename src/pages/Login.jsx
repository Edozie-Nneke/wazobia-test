import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../css/login.module.css';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

export default function Login() {
  const [viewPassword, setViewPassword] = useState(true);
  return (
    <section className={login.login}>
      <article className={login.login_card}>
        <div className={login.content}>
          <div className={login.header}>
            <p className={login.title}>Log in</p>
            <p>
              If you have no account,{' '}
              <Link to={`/create-account`}>Sign up</Link>
            </p>
          </div>

          <div className={login.emailInput}>
            <label htmlFor='email'>Email Address</label>
            <div className={login.emailWrapper}>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Type here'
              />
            </div>
            <small>Wrong email format!</small>
          </div>

          <div className={login.passwordInput}>
            <label htmlFor='password'>Password</label>
            <div className={login.paaswordWrapper}>
              <input
                id='password'
                type={viewPassword ? `password` : `text`}
                name='password'
                placeholder='Type your password here'
              />
            </div>
            {viewPassword ? (
              <ImEyeBlocked
                className={login.hidePassword}
                onClick={() => setViewPassword(!viewPassword)}
              />
            ) : (
              <ImEye
                className={login.viewPassword}
                onClick={() => setViewPassword(!viewPassword)}
              />
            )}
          </div>

          <button>Log in</button>
        </div>
      </article>
    </section>
  );
}
