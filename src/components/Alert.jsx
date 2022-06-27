import React, { useState } from 'react';
import alert from '../css/alert.module.css';

export const Alert = () => {
  const [verified, setVerified] = useState(false);
  return (
    <header
      className={!verified ? `${alert.alert} ` : `${alert.alertVerified}`}
    >
      <p>
        You have not verified your email address. Click{' '}
        <span onClick={() => setVerified(!verified)}>here</span> to resend
        verification link.
      </p>
    </header>
  );
};
