import React from 'react';

import { toast } from 'react-toastify';

const AddToBasketButton = () => {
  const handleOnClick = (evt) => {
    evt.preventDefault();
    toast.error('This feature does not currently work.');
  };

  return (
    <button
      className="button is-large is-dark"
      onClick={handleOnClick}
      type="button"
    >
      Add to basket
    </button>
  );
};

export default AddToBasketButton;
