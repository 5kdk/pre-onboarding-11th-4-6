import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

const Root = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Root;
