import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="page">
        <Header/>
      </div>
      <Outlet/>
    </>
  );
}

export default Layout;
