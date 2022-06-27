import React, { useState } from 'react';
import create_acct from '../css/create_acct.module.css';
import { Link } from 'react-router-dom';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

export default function CreateAccount() {
  const [viewPassword, setViewPassword] = useState(true);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <section className={create_acct.create_acct}>
      <article className={create_acct.create_acct_card}>
        <div className={create_acct.content}>
          <div className={create_acct.header}>
            <p className={create_acct.title}>Create An Account</p>
            <p>
              Already have an account? <Link to={`/login`}>Log in</Link>
            </p>
          </div>

          <div className={create_acct.nameInput}>
            <div className={create_acct.first_nameInput}>
              <label htmlFor='first_name'>First Name</label>
              <div className={create_acct.first_nameWrapper}>
                <input
                  id='first_name'
                  type='text'
                  name='first_name'
                  placeholder='Type here'
                />
              </div>
            </div>
            <div className={create_acct.last_nameInput}>
              <label htmlFor='last_name'>Last Name</label>
              <div className={create_acct.last_nameWrapper}>
                <input
                  id='last_name'
                  type='text'
                  name='last_name'
                  placeholder='Type here'
                />
              </div>
            </div>
          </div>

          <div className={create_acct.emailInput}>
            <label htmlFor='email'>Email Address</label>
            <div className={create_acct.emailWrapper}>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Type email address here'
              />
            </div>
            <small>Wrong email format!</small>
          </div>

          <div className={create_acct.passwordInput}>
            <label htmlFor='password'>Password</label>
            <div className={create_acct.paaswordWrapper}>
              <input
                id='password'
                type={viewPassword ? `password` : `text`}
                name='password'
                placeholder='Type your password here'
              />
            </div>
            {viewPassword ? (
              <ImEyeBlocked
                className={create_acct.hidePassword}
                onClick={() => setViewPassword(!viewPassword)}
              />
            ) : (
              <ImEye
                className={create_acct.viewPassword}
                onClick={() => setViewPassword(!viewPassword)}
              />
            )}
          </div>

          <ul
            className={
              passwordError
                ? `${create_acct.validator_helper}`
                : `${create_acct.hide_helper}`
            }
          >
            <li>
              <div className={create_acct.container}>
                <div className={create_acct.round}>
                  <input type='checkbox' checked id='checkbox' />
                  <label htmlFor='checkbox'></label>
                  Contains at least one uppercase letter
                </div>
              </div>
            </li>
            <li>
              <div className={create_acct.container}>
                <div className={create_acct.round}>
                  <input type='checkbox' checked id='checkbox' />
                  <label htmlFor='checkbox'></label>
                  Contains eight characters
                </div>
              </div>
            </li>
            <li>
              <div className={create_acct.container}>
                <div className={create_acct.round}>
                  <input type='checkbox' id='checkbox' />
                  <label htmlFor='checkbox'></label>
                  Contains at least one number
                </div>
              </div>
            </li>
            <li>
              <div className={create_acct.container}>
                <div className={create_acct.round}>
                  <input type='checkbox' checked id='checkbox' />
                  <label htmlFor='checkbox'></label>
                  Contains eight characters
                </div>
              </div>
            </li>
          </ul>

          <button>Sign Up</button>
        </div>
      </article>
    </section>
  );
}
