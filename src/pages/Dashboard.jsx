import React from 'react';
import { Alert } from '../components/Alert';
import { Nav } from '../components/Nav';
import dashboard from '../css/dashboard.module.css';

export default function Dashboard() {
  return (
    <section className={dashboard.dashboard}>
      <Alert />
      <Nav />
      <article className={dashboard.cardholder}>Body</article>
    </section>
  );
}
