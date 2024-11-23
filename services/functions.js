export const cartTotalAmount = (items) => {
  return items.reduce((acc, item) => (acc += item.precio * item.quantity), 0);
}