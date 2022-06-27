import React from 'react';
import alert from '../css/alert.module.css';

export const Alert = () => {
  return (
    <header className={alert.alert}>
      <p>
        You have not verified your email address. Click <span>here</span> to
        resend verification link.
      </p>
    </header>
  );
};
