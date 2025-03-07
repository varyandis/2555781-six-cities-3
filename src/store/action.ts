import { createAction } from '@reduxjs/toolkit';
import { TypeOffer } from '../types/offers';
import { AuthorizationStatus } from '../const';

export const cityAction = createAction('city/setCity', (city: string) => ({payload: city}));

export const offersAction = createAction('offers/setOffers', (offers: TypeOffer[]) => ({payload: offers}));

export const loadOffers = createAction('offers/loadOffers', (offers: TypeOffer[]) => ({payload: offers}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<string>('offer/redirectToRoute');

export const setUserLogin = createAction<string>('user/setUserLogin');

export const setUserAvatar = createAction<string>('user/setUserAvatar');

