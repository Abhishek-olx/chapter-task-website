import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      {product.isFreeShipping && <div className={styles.freeTag}>Free Shipping</div>}
      <img src={`/images/${product.sku}.jpg`} alt={product.title} />
      <p>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;