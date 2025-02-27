import { createAction } from '@reduxjs/toolkit';
import { TypeOffer } from '../types/offers';

export const cityAction = createAction('city/setCity', (city: string) => ({payload: city}));

export const offersAction = createAction('offers/setOffers', (offers: TypeOffer[]) => ({payload: offers}));

