import { AppRoute } from './const';

const getClassName = (pathname: string) => {
  let className = 'page';
  switch(pathname) {
    case AppRoute.Offer:
    case AppRoute.Favorites:
      return className;
    case AppRoute.Main:
      className = 'page page--gray page--main';
      return className;
    case AppRoute.Login:
      className = 'page page--gray page--login';
      return className;
  }

};

export {getClassName};
