import type { Resource } from '../lib/resource';

interface Props {
  resource: Resource;
}

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

const getDimensionColor = (dimension: string): string => {
  const colors: Record<string, string> = {
    'Planificació de la recerca': '#0ea5e9',
    'Fonamentació teòrica': '#14b8a6',
    'Disseny i aplicació': '#f59e0b',
    'Discussió i conclusions': '#ec4899',
    'Bibliografia': '#6366f1',
    'Comunicació i TIC': '#facc15',
  };
  return colors[dimension] || '#64748b';
};

interface Props {
  resource: Resource;
}

const ResourceCard = ({ resource }: Props) => {
  const dimensionColor = getDimensionColor(resource.dimension);
  const levels = Array.from({ length: resource.level }, (_, i) => (
    <span key={`${resource.id}-level-${i}`} title="Nivell">💡</span>
  ));

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
      <div className="w-full p-1 mt-3 text-white rounded-b flex justify-between" style={{ backgroundColor: dimensionColor }}>
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

export default ResourceCard;