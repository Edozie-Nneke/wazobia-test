import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { ItemCard } from '../components/ItemCard';
import { Nav } from '../components/Nav';
import dashboard from '../css/dashboard.module.css';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Modal } from '../components/Modal';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const openModalForEdit = () => {
    setEdit(true);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setEdit(false);
    setIsOpen(false);
  };

  return (
    <section className={dashboard.dashboard}>
      <Alert />
      <Nav />
      <article className={dashboard.cardholder}>
        <ItemCard handleSetEdit={openModalForEdit} />
        <ItemCard handleSetEdit={openModalForEdit} />
        <ItemCard handleSetEdit={openModalForEdit} />
      </article>
      <Modal open={isOpen} closeModal={handleCloseModal} edit={edit} />
      <MdOutlineAddCircle
        className={dashboard.openModalBtn}
        onClick={() => setIsOpen(true)}
      />
    </section>
  );
}
