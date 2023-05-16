interface Props {
  filter: string
  setFilter: (filter: string) => void
}

const DimensionFilters: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Planificació de la recerca" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Planificació de la recerca")}>Planificació de la recerca</button>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Fonamentació teòrica" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Fonamentació teòrica")}>Fonamentació teòrica</button>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Disseny i aplicació" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Disseny i aplicació")}>Disseny i aplicació</button>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Discussió i conclusions" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Discussió i conclusions")}>Discussió i conclusions</button>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Bibliografia" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Bibliografia")}>Bibliografia</button>
      <button className={`p-2 rounded bg-slate-300 ${filter === "Comunicació i TIC" ? 'bg-slate-500 text-white' : ''}`} onClick={() => setFilter("Comunicació i TIC")}>Comunicació i TIC</button>
    </>
  );
}

export default DimensionFilters;
