import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/cartSlice';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(state =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div className={styles.header}>
      <h1>Store</h1>
      <div className={styles.cartIcon} onClick={() => dispatch(toggleCart())}>
        🛒 <span>{count}</span>
      </div>
    </div>
  );
};

export default Header;
