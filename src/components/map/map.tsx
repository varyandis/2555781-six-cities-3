import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeOffer } from '../../types/offers';
import { useRef } from 'react';
import useMap from '../../hook/useMap';
import { TypeCity } from '../../types/offers';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type MapProps = {
  offers: TypeOffer[];
  card: string;
  city: TypeCity;
}

function Map({ card, offers, city }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
