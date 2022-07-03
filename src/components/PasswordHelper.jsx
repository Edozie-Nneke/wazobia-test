import React from 'react';
import password_helper from '../css/password_helper.module.css';

export const PasswordHelper = ({ passwordError }) => {
  return (
    <ul
      className={
        passwordError
          ? `${password_helper.validator_helper}`
          : `${password_helper.hide_helper}`
      }
    >
      <li>
        <div className={password_helper.container}>
          <div className={password_helper.round}>
            <input type='checkbox' id='checkbox1' />
            <label htmlFor='checkbox'></label>
            Contains at least one uppercase letter
          </div>
        </div>
      </li>
      <li>
        <div className={password_helper.container}>
          <div className={password_helper.round}>
            <input type='checkbox' id='checkbox2' />
            <label htmlFor='checkbox'></label>
            Contains eight characters
          </div>
        </div>
      </li>
      <li>
        <div className={password_helper.container}>
          <div className={password_helper.round}>
            <input type='checkbox' id='checkbox3' />
            <label htmlFor='checkbox'></label>
            Contains at least one number
          </div>
        </div>
      </li>
      <li>
        <div className={password_helper.container}>
          <div className={password_helper.round}>
            <input type='checkbox' id='checkbox4' />
            <label htmlFor='checkbox'></label>
            Contains eight characters
          </div>
        </div>
      </li>
    </ul>
  );
};
