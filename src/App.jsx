import Header from '.components/Header/Header';
import CartSidebar from './components/CartSidebar/CartSidebar';
import ProductList from './pages/ProductList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <Header />
    <CartSidebar />
    <ProductList />
  </Provider>
);
