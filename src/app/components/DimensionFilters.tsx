interface Props {
  setFilter: (filter: string) => void
}

const DimensionFilters: React.FC<Props> = ({ setFilter }) => {
  return (
    <section className="grid w-full grid-cols-2 gap-4 px-2 py-4 sm:grid-cols-3">
      <button className="p-2 text-white rounded bg-c1" onClick={() => setFilter("Planificació de la recerca")}>Planificació de la recerca</button>
      <button className="p-2 text-white rounded bg-c2" onClick={() => setFilter("Fonamentació teòrica")}>Fonamentació teòrica</button>
      <button className="p-2 text-white rounded bg-c3" onClick={() => setFilter("Disseny i aplicació")}>Disseny i aplicació</button>
      <button className="p-2 text-white rounded bg-c4" onClick={() => setFilter("Discussió i conclusions")}>Discussió i conclusions</button>
      <button className="p-2 text-white rounded bg-c5" onClick={() => setFilter("Bibliografia")}>Bibliografia</button>
      <button className="p-2 text-white rounded bg-c6" onClick={() => setFilter("Comunicació i TIC")}>Comunicació i TIC</button>
    </section>
  );
}

export default DimensionFilters;
