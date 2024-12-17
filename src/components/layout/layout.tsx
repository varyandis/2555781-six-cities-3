import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="page page--gray page--main">
        <Header/>
      </div>
      <Outlet/>
    </>
  );
}

export default Layout;
