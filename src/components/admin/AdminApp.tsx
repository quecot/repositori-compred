import { useState } from 'react';
import type { Resource } from '../../lib/resource';
import filteredResourcesLib from '../../lib/filteredResources';
import Header from '../Header';
import DimensionFilters from '../DimensionFilters';
import SearchFilter from '../SearchFilter';

interface Props {
  resources?: Resource[];
}

const AdminApp = ({ resources: initialResources = [] }: Props) => {
  const [filter, setFilter] = useState('');
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [addingResource, setAddingResource] = useState(false);

  const filtered = filteredResourcesLib(resources, filter);

  const deleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  return (
    <main className="flex flex-col items-center w-screen min-h-screen gap-2 p-12">
      <div className="flex flex-col items-center justify-center gap-4 p-4 px-12 rounded bg-slate-200">
        <h1 className="w-full text-2xl font-semibold text-center">Admin</h1>
        <a href="/" className="text-center underline">Torna</a>
      </div>

      <DimensionFilters setFilter={setFilter} />
      <SearchFilter filter={filter} setFilter={setFilter} />

      <div className="flex items-center gap-4">
        <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">
          {filtered.length} {filtered.length === 1 ? 'recurs disponible' : 'recursos disponibles'}
        </span>
        <button onClick={() => setAddingResource(!addingResource)} className="p-2 shadow-md hover:scale-[1.03] bg-green-300 rounded hover:bg-green-400">
          Afegeix
        </button>
      </div>

      {addingResource && (
        <AddResourceForm 
          resources={resources} 
          setResources={setResources} 
          setAddingResource={setAddingResource} 
        />
      )}

      <AdminResources resources={filtered} deleteResource={deleteResource} />
    </main>
  );
};

const AddResourceForm: React.FC<{
  resources: Resource[];
  setResources: React.Dispatch<React.SetStateAction<Resource[]>>;
  setAddingResource: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ resources, setResources, setAddingResource }) => {
  const handleAddResource = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    const newResource: Resource = {
      id: String(Date.now()),
      title: data.get('title') as string,
      type: data.get('type') as string,
      dimension: data.get('dimension') as string,
      subdimension: data.get('subdimension') as string,
      description: data.get('description') as string,
      level: parseInt(data.get('level') as string),
      language: data.get('language') as string,
      url: data.get('url') as string,
      createdAt: new Date().toISOString(),
    };

    setResources([newResource, ...resources]);
    setAddingResource(false);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-3xl">
      <div className="relative w-2/3 p-4 overflow-scroll bg-white rounded shadow-md h-5/6">
        <button className="absolute py-2 px-[14px] right-4 top-[3px] text-xl hover:scale-[1.1]" onClick={() => setAddingResource(false)}>
          ×
        </button>
        <h2 className="w-full text-2xl font-semibold text-center">Afegeix un recurs</h2>
        <form onSubmit={handleAddResource} className="flex flex-col gap-4 p-4">
          <label className="flex flex-col gap-1">
            <span>Títol</span>
            <input className="p-2 border rounded border-slate-300" type="text" name="title" required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Tipus</span>
            <select className="p-2 border rounded border-slate-300" name="type">
              <option value="Recurs web">Recurs web</option>
              <option value="Llibre">Llibre</option>
              <option value="Article">Article</option>
              <option value="Presentació">Presentació</option>
              <option value="Quiz">Quiz</option>
              <option value="Vídeo">Vídeo</option>
              <option value="Altre">Altre</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>Dimensió</span>
            <select className="p-2 border rounded border-slate-300" name="dimension">
              <option value="Planificació de la recerca">Planificació de la recerca</option>
              <option value="Fonamentació teòrica">Fonamentació teòrica</option>
              <option value="Disseny i aplicació">Disseny i aplicació</option>
              <option value="Discussió i conclusions">Discussió i conclusions</option>
              <option value="Bibliografia">Bibliografia</option>
              <option value="Comunicació i TIC">Comunicació i TIC</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>Subdimensió</span>
            <input className="p-2 border rounded border-slate-300" name="subdimension" type="text" required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Descripció</span>
            <input className="p-2 border rounded border-slate-300" name="description" type="text" required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Nivell</span>
            <select className="p-2 border rounded border-slate-300" name="level">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>Idioma</span>
            <select className="p-2 border rounded border-slate-300" name="language">
              <option value="Català">Català</option>
              <option value="Español">Español</option>
              <option value="English">English</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>Enllaç</span>
            <input className="p-2 border rounded border-slate-300" name="url" type="text" placeholder="https://..." required />
          </label>
          <button className="p-2 rounded bg-slate-200 hover:bg-slate-300 hover:scale-[1.03]">Afegeix</button>
        </form>
      </div>
    </div>
  );
};

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

const dimensionToColor = new Map<string, string>();
dimensionToColor.set('Planificació de la recerca', 'c1');
dimensionToColor.set('Fonamentació teòrica', 'c2');
dimensionToColor.set('Disseny i aplicació', 'c3');
dimensionToColor.set('Discussió i conclusions', 'c4');
dimensionToColor.set('Bibliografia', 'c5');
dimensionToColor.set('Comunicació i TIC', 'c6');

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const color = dimensionToColor.get(resource.dimension) ?? 'slate';
  const levels = [];
  for (let i = 0; i < resource.level; i += 1) {
    levels.push(<span key={resource.id + i} title="Nivell">💡</span>);
  }
  return (
    <div className="flex flex-col justify-between w-full bg-white border rounded shadow-lg border-slate-300">
      <h2 className="m-2 mb-0 text-lg font-semibold hover:text-blue-800 hover:underline">
        <a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a>
      </h2>
      <span className="w-full m-2 mb-0">Tema: {resource.subdimension || '[?]'}</span>
      <div className="flex items-center w-full gap-2 m-2 mb-0">
        Nivell:
        <div className="flex items-center gap-1">{levels}</div>
      </div>
      <p className="m-2 mb-0">{resource.description}</p>
      <div className={`bg-${color} w-full p-1 mt-3 text-white rounded-b flex justify-between`}>
        <span className="px-2 overflow-hidden font-semibold text-ellipsis whitespace-nowrap">{resource.dimension}</span>
        <div className="flex items-center gap-2 px-2">
          <span>{languageFlags[resource.language]}</span>
          <span title={resource.type}>{typeIcons[resource.type]}</span>
          <a href={resource.url} target="_blank" rel="noreferrer" title="Enllaç">🔗</a>
        </div>
      </div>
    </div>
  );
};

const AdminResources: React.FC<{ resources: Resource[]; deleteResource: (id: string) => void }> = ({ resources, deleteResource }) => {
  return (
    <section className="flex flex-col w-full gap-4 px-2 pb-2">
      {resources.map((resource) => (
        <div key={resource.id} className="relative flex flex-col justify-between w-full bg-white border rounded shadow-lg border-slate-300">
          <button 
            className="absolute py-2 px-4 bg-white rounded right-0 top-[3px] text-xl" 
            onClick={() => deleteResource(resource.id)}
          >
            🗑️
          </button>
          <ResourceCard resource={resource} />
        </div>
      ))}
    </section>
  );
};

export default AdminApp;