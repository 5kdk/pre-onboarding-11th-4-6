import { Outlet } from 'react-router-dom';
import { GlobalNavBar, GlobalFooter } from '../components';

const Root = () => (
  <>
    <GlobalNavBar />
    <Outlet />
    <GlobalFooter />
  </>
);

export default Root;
