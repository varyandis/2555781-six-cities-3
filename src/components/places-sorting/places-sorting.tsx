import { useState } from 'react';

type PlacesSortingProps = {
  sort: (sort: string) => void;
  selectedSort: string;
}

const sorting = [
  { value: 'POPULAR', label: 'Popular' },
  { value: 'PRICE_LOW_TO_HIGH', label: 'Price: low to high' },
  { value: 'PRICE_HIGH_TO_LOW', label: 'Price: high to low' },
  { value: 'TOP_RATED', label: 'Top rated first' },
];


export default function PlacesSorting({ sort, selectedSort }: PlacesSortingProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickSort = (value: string) => {
    sort(value);
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {selectedSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isOpen &&
        (
          <ul className="places__options places__options--custom places__options--opened">
            {sorting.map((sortOption) => (
              <li key={sortOption.value}
                className={`places__option ${(sortOption.label === selectedSort) ? 'places__option--active' : ''}`}
                tabIndex={0}
                onClick={() => handleClickSort(sortOption.label)}
              >
                {sortOption.label}
              </li>
            ))}
          </ul>
        )}
    </form>
  );
}
