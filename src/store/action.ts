import { createAction } from '@reduxjs/toolkit';
import { TypeOffer } from '../types/offers';
import { AuthorizationStatus } from '../const';
// import { AppRoute } from '../const';/

export const cityAction = createAction('city/setCity', (city: string) => ({payload: city}));

export const offersAction = createAction('offers/setOffers', (offers: TypeOffer[]) => ({payload: offers}));

export const loadOffers = createAction('offers/loadOffers', (offers: TypeOffer[]) => ({payload: offers}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

// export const redirectToRoute = createAction<>('offers/redirectToRoute');

