import { Outlet } from 'react-router-dom';
import GlobalNavBar from '../components/GlobalNavBar';

const Root = () => (
  <>
    <GlobalNavBar />
    <Outlet />
  </>
);

export default Root;
