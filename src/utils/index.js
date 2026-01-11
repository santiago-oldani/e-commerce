const calcularTotal = (cart) => {
    const total = cart.reduce((acc, producto) => { return acc + (producto.quantity * producto.price) }, 0);
    return total
}

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
    }).format(price);
  };
  export {formatPrice, calcularTotal}