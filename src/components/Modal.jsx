import React from 'react';
import ReactDom from 'react-dom';
import modal from '../css/modal.module.css';

export const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={modal.overlay} />
      <div className={modal.modal}>
        <div className={modal.header}>
          <p>Create Item</p>
        </div>

        <form className={modal.content}>
          <div className={modal.itemName}>
            <label htmlFor='itemName'>Name</label>
            <div className={modal.itemNameWrapper}>
              <input
                id='itemName'
                type='text'
                name='itemName'
                placeholder='Input item name here'
              />
            </div>
          </div>

          <div className={modal.itemNote}>
            <label htmlFor='itemName'>Add Note</label>
            <div className={modal.itemNoteWrapper}>
              <textarea
                id='itemNote'
                type='text'
                name='itemNote'
                placeholder='Input item name here'
              ></textarea>
            </div>
          </div>

          <div className={modal.foot}>
            <button className={modal.cancelEvent} onClick={closeModal}>
              Cancel
            </button>
            <button className={modal.createEvent}>Create Event</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  );
};
