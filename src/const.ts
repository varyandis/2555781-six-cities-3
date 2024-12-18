export const Settings = {
  offersCount: 312
};

export const AppRoute = {
  Main: '/',
  Login: '/Login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

