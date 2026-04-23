import { useState, useEffect } from 'react';
import type { Resource } from '../lib/resource';
import { dummyResources, dimensionToColor } from '../lib/constants';
import filteredResourcesLib from '../lib/filteredResources';
import Header from '../components/Header';
import DimensionFilters from '../components/DimensionFilters';
import SearchFilter from '../components/SearchFilter';
import AdminResources from '../components/AdminResources';

const typeIcons: Record<string, string> = {
  'Llibre': '📚',
  'Recurs web': '🌐',
  'Article': '📰',
  'Presentació': '📊',
  'Quiz': '❓',
  'Vídeo': '🎬',
  'Altre': '📎',
};

const languageFlags: Record<string, string> = {
  'Català': '🇪🇸',
  'Español': '🇪🇸',
  'English': '🇬🇧',
};

interface Props {
  resource: Resource;
}

const ResourceCard: React.FC<Props> = ({ resource }) => {
  const color = dimensionToColor.get(resource.dimension) ?? 'slate';
  const levels = [];
  for (let i = 0; i < resource.level; i += 1) {
    levels.push(<span key={resource.id + i} title="Nivell">💡</span>);
  }

  const bgColorClass = `bg-${color}`;

  return (
    <div className="flex flex-col justify-between w-full bg-white border rounded shadow-lg border-slate-300">
      <h2 className="m-2 mb-0 text-lg font-semibold hover:text-blue-800 hover:underline">
        <a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a>
      </h2>
      <span className="w-full m-2 mb-0">Tema: {resource.subdimension !== '' ? resource.subdimension : '[?]'}</span>
      <div className="flex items-center w-full gap-2 m-2 mb-0">
        Nivell:
        <div className="flex items-center gap-1">{levels}</div>
      </div>
      <p className="m-2 mb-0">{resource.description}</p>
      <div className={`${bgColorClass} w-full p-1 mt-3 text-white rounded-b flex justify-between`}>
        <span className="px-2 overflow-hidden font-semibold text-ellipsis hover:whitespace-normal whitespace-nowrap">
          {resource.dimension}
        </span>
        <div className="flex items-center gap-2 px-2">
          <span>{languageFlags[resource.language]}</span>
          <span title={resource.type}>{typeIcons[resource.type]}</span>
          <a href={resource.url} target="_blank" rel="noreferrer" title="Enllaç">🔗</a>
        </div>
      </div>
    </div>
  );
};

interface AdminListProps {
  resources: Resource[];
}

const AdminResources: React.FC<AdminListProps> = ({ resources }) => {
  return (
    <section className="flex flex-col w-full gap-4 px-2 pb-2">
      {resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
    </section>
  );
};

export default AdminResources;