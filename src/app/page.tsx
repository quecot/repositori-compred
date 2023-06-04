"use client"

import DimensionFilters from "@/app/components/DimensionFilters";
import Resources from "@/app/components/Resources";
import { resources } from "@/app/constants";
import { useState } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import SearchFilter from "./components/SearchFilter";
import filteredResources from "./utils/filteredResources";
import Header from "./components/Header";

config.autoAddCss = false

const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <main className='flex flex-col items-center w-screen h-screen p-4'>
      <Header />
      
      <DimensionFilters setFilter={setFilter} />

      <SearchFilter filter={filter} setFilter={setFilter} />

      <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">{filteredResources(resources, filter).length} {filteredResources(resources, filter).length === 1 ? 'recurs disponible' : 'recursos disponibles' }</span>
      
      <Resources resources={filteredResources(resources, filter)} />
    </main>
  )
}

export default App;
