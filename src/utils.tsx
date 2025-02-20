import { AppRoute } from './const';


// const getClassName = (pathname: string) => {
//   let className = 'page';

//   if (pathname.toLowerCase().startsWith('/offer')) {
//     return className;
//   }

//   switch (pathname.toLowerCase()) {
//     case AppRoute.Favorites:
//       className = 'page';
//       return className;
//     case AppRoute.Main:
//       className = 'page page--gray page--main';
//       return className;
//     case AppRoute.Login:
//       className = 'page page--gray page--login';
//       return className;
//   }
// };

const getClassNames = (pathname: string) => {
  const normalizedPath = pathname.toLowerCase();

  if (normalizedPath.startsWith(AppRoute.Offer.replace(':id', ''))) {
    return 'page';
  }

  const classNames: Record<string, string> = {
    [AppRoute.Favorites]: 'page',
    [AppRoute.Main]: 'page page--gray page--main',
    [AppRoute.Login]: 'page page--gray page--login',
  };

  return classNames[normalizedPath] || 'page';
};

export { getClassNames };
