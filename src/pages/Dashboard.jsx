import React from 'react';
import { Alert } from '../components/Alert';
import { ItemCard } from '../components/ItemCard';
import { Nav } from '../components/Nav';
import dashboard from '../css/dashboard.module.css';
import { MdOutlineAddCircle } from 'react-icons/md';

export default function Dashboard() {
  return (
    <section className={dashboard.dashboard}>
      <Alert />
      <Nav />
      <article className={dashboard.cardholder}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </article>
      <MdOutlineAddCircle className={dashboard.openModalBtn} />
    </section>
  );
}
