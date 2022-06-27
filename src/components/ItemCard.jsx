import React from 'react';
import item_card from '../css/item_card.module.css';

export const ItemCard = () => {
  return (
    <div className={item_card.item_card}>
      <div className={item_card.content}>
        <p className={item_card.name}>Name</p>
        <h4 className={item_card.itemNo}>Item 1</h4>
        <p className={item_card.desc}>Description</p>
        <p className={item_card.itemText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className={item_card.btnholder}>
          <button className={item_card.edit}>Edit</button>
          <button className={item_card.delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
