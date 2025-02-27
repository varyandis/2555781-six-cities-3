import { CITIES } from '../../const';

type CitiesListProps = {
  selectedCity: string;
  handleCityChange: (name:string) => void;
}

export default function CitiesList({ selectedCity, handleCityChange }: CitiesListProps) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city.name} onClick={() => handleCityChange(city.name)}>
            <a className={`locations__item-link tabs__item ${(city.name === selectedCity) ? 'tabs__item--active' : ''}`} >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
