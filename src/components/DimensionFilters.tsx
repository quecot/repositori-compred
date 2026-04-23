interface Props {
  setFilter: (filter: string) => void;
}

const dimensions = [
  { name: 'Planificació de la recerca', color: '#0ea5e9' },
  { name: 'Fonamentació teòrica', color: '#14b8a6' },
  { name: 'Disseny i aplicació', color: '#f59e0b' },
  { name: 'Discussió i conclusions', color: '#ec4899' },
  { name: 'Bibliografia', color: '#6366f1' },
  { name: 'Comunicació i TIC', color: '#facc15' },
];

const DimensionFilters = ({ setFilter }: Props) => {
  return (
    <section className="grid w-full grid-cols-2 gap-4 px-2 py-4 font-semibold text-white sm:grid-cols-3">
      {dimensions.map((dim) => (
        <button 
          key={dim.name}
          className="p-2 rounded shadow-md hover:scale-[1.03]"
          style={{ backgroundColor: dim.color }}
          onClick={() => setFilter(dim.name)}
        >
          {dim.name}
        </button>
      ))}
    </section>
  );
};

export default DimensionFilters;