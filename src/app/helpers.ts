/**
 * Update cart number on header.
 * @todo This works, bu must be a better way by subscribing to a service?
 */
export const updateTotalProducts = (total: number): void => {
  const headerMessage = document.querySelector('.items-in-cart-message span');
  if (headerMessage) {
    headerMessage.innerHTML = `${total}`;
  }
};
