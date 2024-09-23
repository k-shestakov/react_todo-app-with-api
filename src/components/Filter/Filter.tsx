import React from 'react';
import cn from 'classnames';
import { FilterSetting } from '../../types/FilterSetting';

type Props = {
  onFilter: (v: FilterSetting) => void;
  filter: FilterSetting;
};

export const Filter: React.FC<Props> = ({ onFilter, filter }) => {
  const handleFilterChange = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLAnchorElement;
    const filterValue = target.dataset.cy as FilterSetting;

    if (filterValue !== filter) {
      onFilter(filterValue);
    }
  };

  return (
    <nav className="filter" data-cy="Filter" onClick={handleFilterChange}>
      <a
        href="#/"
        className={cn('filter__link', {
          selected: filter === FilterSetting.all,
        })}
        data-cy="FilterLinkAll"
      >
        All
      </a>

      <a
        href="#/active"
        className={cn('filter__link', {
          selected: filter === FilterSetting.active,
        })}
        data-cy="FilterLinkActive"
      >
        Active
      </a>

      <a
        href="#/completed"
        className={cn('filter__link', {
          selected: filter === FilterSetting.completed,
        })}
        data-cy="FilterLinkCompleted"
      >
        Completed
      </a>
    </nav>
  );
};
