import { useState } from 'react';
import type { Resource } from '../lib/resource';
import filteredResourcesLib from '../lib/filteredResources';
import Header from './Header';
import DimensionFilters from './DimensionFilters';
import SearchFilter from './SearchFilter';
import Resources from './Resources';

interface Props {
  resources?: Resource[];
}

const App = ({ resources: initialResources = [] }: Props) => {
  const [filter, setFilter] = useState('');
  const resources = initialResources;

  const filtered = filteredResourcesLib(resources, filter);

  return (
    <main className="flex flex-col items-center w-screen min-h-screen p-4">
      <Header />
      <DimensionFilters setFilter={setFilter} />
      <SearchFilter filter={filter} setFilter={setFilter} />
      <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">
        {filtered.length} {filtered.length === 1 ? 'recurs disponible' : 'recursos disponibles'}
      </span>
      <Resources resources={filtered} />
    </main>
  );
};

export default App;