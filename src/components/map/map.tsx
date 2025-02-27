import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeOffer } from '../../types/offers';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { TypeCity } from '../../types/offers';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type MapProps = {
  offers: TypeOffer[];
  selectedCard?: TypeOffer | undefined;
  city: TypeCity;
  className: string;
}
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [20, 40]
});

function Map({ selectedCard, offers, city, className }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const classNameMap = (className === 'offer') ? 'offer' : 'cities';

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedCard !== undefined && selectedCard.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedCard]);


  return (
    <section className={`${classNameMap}__map map`} ref={mapRef}></section>
  );
}

export default Map;
