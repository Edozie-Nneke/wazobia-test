import React from 'react';
import { Link } from 'react-router-dom';
import verify_email from '../css/verify_email.module.css';
import { BsCheckCircle, BsChevronRight } from 'react-icons/bs';

export default function VerifyEmail() {
  return (
    <section className={verify_email.verify_email}>
      <article className={verify_email.wrapper}>
        <div className={verify_email.content}>
          <BsCheckCircle className={verify_email.verifyIcon} />
          <p className={verify_email.message}>
            Your email address has been verified.
          </p>
          <p className={verify_email.link}>
            <Link to={`/`}>
              Go to Dashboard <BsChevronRight className={verify_email.arrow} />
            </Link>
          </p>
        </div>
      </article>
    </section>
  );
}
