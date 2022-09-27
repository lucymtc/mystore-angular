/**
 * Update cart number on header.
 * @todo must be a better way
 */
export const updateTotalProducts = (total: number): void => {
  const headerMessage = document.querySelector('.items-in-cart-message span');
  if (headerMessage) {
    headerMessage.innerHTML = `${total}`;
  }
};
