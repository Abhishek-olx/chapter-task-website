import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleCart } from '../../redux/cartSlice';
import styles from './CartSidebar.module.scss';

const CartSidebar = () => {
  const { cartItems, isCartOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`${styles.sidebar} ${isCartOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h3>CART</h3>
        <span onClick={() => dispatch(toggleCart())}>✕</span>
      </div>

      <div className={styles.items}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={`/images/${item.sku}.jpg`} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>Quantity : {item.quantity}</p>
            </div>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>×</button>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p>Subtotal : $ {subtotal}</p>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartSidebar;