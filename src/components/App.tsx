import React, { useState, useMemo } from 'react';
import type { CollectionEntry } from 'astro:content';

interface ResourceData {
  title: string;
  type: string;
  dimension: string;
  subdimension?: string;
  level: number;
  url: string;
}

interface Resource {
  id: string;
  data: ResourceData;
}

const dimensionToColor = new Map<string, string>();
dimensionToColor.set('Planificacio de la recerca', 'c1');
dimensionToColor.set('Fonamentacio teorica', 'c2');
dimensionToColor.set('Disseny i aplicacio', 'c3');
dimensionToColor.set('Discussio i conclusions', 'c4');
dimensionToColor.set('Bibliografia', 'c5');
dimensionToColor.set('Comunicacio i TIC', 'c6');

const checkMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1024;
};

const App: React.FC<{ resources?: Resource[] }> = ({ resources: initialResources = [] }) => {
  const [filterDimensions, setFilterDimensions] = useState<string[]>([]);
  const [filterLevels, setFilterLevels] = useState<number[]>([]);
  const [textFilter, setTextFilter] = useState('');
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const dimensions = useMemo(() => {
    return [...new Set(initialResources.map((r) => r.data.dimension))];
  }, [initialResources]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="overflow-scroll w-screen h-screen">
      <div className="lg:grid flex flex-col grid-cols-6 w-full h-full p-2 bg-gray-100 overflow-scroll">
        <details open={!checkMobile()} className="col-span-1 pb-4 w-full lg:border-r-gray-400 lg:border-r flex flex-col justify-center gap-12">
          <summary className="font-bold text-xl text-center">Filtres</summary>
          <div className="flex gap-2 flex-col mx-4 justify-center">
            <input
              type="text"
              id="textFilter"
              className="w-full py-2 my-4 text-center rounded-lg shadow-sm bg-white"
              placeholder="Cerca un títol"
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col mx-4 justify-center">
            <span className="font-bold underline text-center">Dimensions</span>
            {dimensions.map((d) => {
              const color = dimensionToColor.get(d);
              return (
                <button
                  key={d}
                  type="button"
                  className={`bg-${color} text-white rounded-full px-2 py-1 ${filterDimensions.includes(d) ? 'font-semibold' : 'opacity-25'}`}
                  onClick={() => {
                    if (!filterDimensions.includes(d)) {
                      setFilterDimensions(filterDimensions.concat(d));
                    } else {
                      setFilterDimensions(filterDimensions.filter((currentFilters) => currentFilters !== d));
                    }
                  }}
                >
                  {d}
                </button>
              );
            })}
            <button type="button" className={`rounded-full px-2 py-1 text-white ${filterDimensions.length > 0 ? 'opacity-75' : 'font-semibold'} bg-gray-300`} onClick={() => setFilterDimensions([])}>Totes</button>
          </div>
          <div className="flex gap-2 lg:flex-col mx-4 justify-center items-center mt-6">
            <span className="font-bold underline text-center">Nivells</span>
            {[1, 2, 3].map((level) => (
              <button
                key={level}
                type="button"
                className={`bg-gray-300 w-fit pr-4 items-center rounded-full ${filterLevels.includes(level) ? 'fill-yellow-200' : 'fill-white opacity-25'} flex justify-center`}
                onClick={() => {
                  if (!filterLevels.includes(level)) {
                    setFilterLevels(filterLevels.concat(level));
                  } else {
                    setFilterLevels(filterLevels.filter((currentFilters) => currentFilters !== level));
                  }
                }}
              >
                {[...Array(level)].map((_, i) => (
                  <svg key={i} className="scale-[.5] mr-[-15px]" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path d="M24 44q-1.7 0-2.875-1.175T19.95 39.95h8.1q0 1.7-1.175 2.875T24 44Zm-6.6-7.15q-.65 0-1.075-.425Q15.9 36 15.9 35.35q0-.65.425-1.075.425-.425 1.075-.425h13.2q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425Zm-1.25-6.05q-3.3-2.15-5.225-5.375Q9 22.2 9 18.15q0-6.1 4.45-10.55Q17.9 3.15 24 3.15q6.1 0 10.55 4.45Q39 12.05 39 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Z" />
                  </svg>
                ))}
              </button>
            ))}
            <button type="button" className={`rounded-full px-2 py-1 text-white bg-gray-300 ${filterLevels.length > 0 ? 'opacity-75' : 'font-semibold'}`} onClick={() => setFilterLevels([])}>Tots</button>
          </div>
        </details>
        <div className="col-span-5 overflow-scroll h-full flex flex-col gap-3 rounded-md mx-4">
          {initialResources
            .filter((r) => `${r.data.type.toLowerCase()}: ${r.data.title.toLowerCase()}`.includes(textFilter.toLowerCase()))
            .filter((r) => filterLevels.length === 0 || filterLevels.includes(r.data.level))
            .filter((r) => filterDimensions.length === 0 || filterDimensions.includes(r.data.dimension))
            .map((resource) => {
              const color = dimensionToColor.get(resource.data.dimension) || 'gray';
              return (
                <div key={resource.id} className="flex flex-col relative p-4 rounded-md bg-white shadow-md">
                  {filterDimensions.length !== 1 ? (
                    <span className={`bg-${color} text-white font-semibold rounded-full px-2 py-1 w-fit`}>{resource.data.dimension}</span>
                  ) : (
                    <div />
                  )}
                  <div className="py-2" />
                  <a className="hover:text-gray-500 w-fit" href={resource.data.url} target="_blank" rel="noreferrer">
                    <h1 className="font-bold">{`${resource.data.type}: ${resource.data.title}`}</h1>
                  </a>
                  <span>{resource.data.subdimension ? `→ ${resource.data.subdimension}` : ''}</span>
                  <div className="py-2" />
                  <a aria-label="resource-link" className="hover:fill-gray-500" href={resource.data.url} target="_blank" rel="noreferrer">
                    <svg className="absolute right-6 top-[28%]" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                      <path d="M14 34q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 17 21 17h-7q-3 0-5 2t-2 5q0 3 2 5t5 2h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 34 21 34Zm3.75-8.5q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h12.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425ZM27 34q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 31 27 31h7q3 0 5-2t2-5q0-3-2-5t-5-2h-7q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 14 27 14h7q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z" />
                    </svg>
                  </a>
                  <div className="flex items-center">
                    <span>Nivell:</span>
                    {[...Array(resource.data.level)].map((_, i) => (
                      <svg key={i} className={`fill-${color} scale-[.6] mr-[-15px]`} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path d="M24 44q-1.7 0-2.875-1.175T19.95 39.95h8.1q0 1.7-1.175 2.875T24 44Zm-6.6-7.15q-.65 0-1.075-.425Q15.9 36 15.9 35.35q0-.65.425-1.075.425-.425 1.075-.425h13.2q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425Zm-1.25-6.05q-3.3-2.15-5.225-5.375Q9 22.2 9 18.15q0-6.1 4.45-10.55Q17.9 3.15 24 3.15q6.1 0 10.55 4.45Q39 12.05 39 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;