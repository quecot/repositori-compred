"use client"

import DimensionFilters from "@/app/components/DimensionFilters";
import Resources from "@/app/components/Resources";
import { resources } from "@/app/constants";
import Resource from "@/app/interfaces/resource";
import { useState } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const filteredResources = (resources: Array<Resource>, filter: string) => {
  return resources.filter((r) => (r.title.toLowerCase().includes(filter.toLowerCase()) || r.dimension.toLowerCase().includes(filter.toLowerCase())));
}

const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <main className='flex flex-col items-center w-screen h-screen'>
      <header className="flex justify-center w-full py-2 text-2xl font-bold text-white bg-slate-400">Repositori CompREd</header>
      
      <DimensionFilters setFilter={setFilter} />

      <div className="relative w-full px-2 sm:mr-auto sm:w-80">
        <input className="w-full px-4 py-2 text-lg border rounded border-slate-300" type="text" placeholder="Cerca al repositori" value={filter} onChange={(e) => setFilter(e.target.value)} />
        
        { filter !== '' ? <button className="absolute py-2 px-[14px] right-4 top-[3px]" onClick={() => setFilter('')}>×</button> : null }        
      </div>

      <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">{filteredResources(resources, filter).length} {filteredResources(resources, filter).length === 1 ? 'recurs disponible' : 'recursos disponibles' }</span>
      
      <Resources resources={filteredResources(resources, filter)} />
    </main>
  )
}

export default App;
