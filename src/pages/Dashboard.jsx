import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { ItemCard } from '../components/ItemCard';
import { Nav } from '../components/Nav';
import dashboard from '../css/dashboard.module.css';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Modal } from '../components/Modal';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={dashboard.dashboard}>
      <Alert />
      <Nav />
      <article className={dashboard.cardholder}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </article>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)} />
      <MdOutlineAddCircle
        className={dashboard.openModalBtn}
        onClick={() => setIsOpen(true)}
      />
    </section>
  );
}
