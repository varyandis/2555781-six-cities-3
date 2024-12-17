import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassName } from '../../utils';
import { AuthorizationStatus } from '../../const';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout(props: LayoutProps) : JSX.Element {
  const {authorizationStatus} = props;
  const {pathname} = useLocation();
  return (
    <div className={getClassName(pathname)}>
      <Header authorizationStatus={authorizationStatus}/>
      <Outlet/>
    </div>
  );
}

export default Layout;
