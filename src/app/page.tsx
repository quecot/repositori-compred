"use client"

import DimensionFilters from "@/components/DimensionFilters";
import Resources from "@/components/Resources";
import resources from "@/constants";
import { useState } from "react";

const Home = () => {
  const [filter, setFilter] = useState('');

  return (
    <main className='flex flex-col items-center w-screen h-screen'>
      <header className="flex justify-center w-full py-2 bg-slate-200">Repositori CompREd</header>
      
      <section className="grid w-full grid-cols-2 gap-4 px-2 py-4 sm:grid-cols-3">
        <DimensionFilters filter={filter} setFilter={setFilter} />
      </section>

      <div className="relative w-full px-2 sm:mr-auto sm:w-80">
        <input className="w-full px-4 py-2 text-lg border rounded border-slate-400" type="text" placeholder="Cerca al repositori" value={filter} onChange={(e) => setFilter(e.target.value)} />
        { filter !== '' ? <button className="absolute py-2 px-[14px] right-4 top-[3px]" onClick={() => setFilter('')}>×</button> : null }
      </div>
      
      <Resources resources={resources.filter((r) => (r.title.toLowerCase().includes(filter.toLowerCase()) || r.dimension.toLowerCase().includes(filter.toLowerCase())))} />
    </main>
  )
}

export default Home;
