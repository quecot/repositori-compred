"use client"

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import DimensionFilters from "../components/DimensionFilters";
import { resources as r } from "@/app/constants";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Resource from "../interfaces/resource";
import AdminResources from "../components/AdminResources";
import LoginForm from "../components/LoginForm";
import AddResource from "../components/AddResource";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";

let session: any;
supabase.auth.getSession().then((supabaseSession) => { session = supabaseSession.data.session });

const handleSignOut = () => {
  supabase.auth.signOut().then(() => window.location.reload());
}

config.autoAddCss = false

const filteredResources = (resources: Array<Resource>, filter: string) => {
  const curatedFilter = filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  
  return resources.filter((r) => {
    const title = r.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const dimension = r.dimension.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    return title.includes(curatedFilter) || dimension.includes(curatedFilter);
  });
}

const Admin = () => {
  const [filter, setFilter] = useState('');
  const [addingResource, setAddingResource] = useState(false);
  const [resources, setResources] = useState<Array<Resource>>(r);

  if (session === null) {
    return (
      <main className="flex flex-col w-screen h-screen">
        <Header />
        <LoginForm />
      </main>
    )
  }

  const toggleNewResource = () => {
    setAddingResource(true);
  }

  const deleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  }

  return (
    <>
      <main className="flex flex-col items-center w-screen h-screen gap-2 p-12">
        <div className="flex flex-col items-center justify-center gap-4 p-4 px-12 rounded bg-slate-200">
          <h1 className="w-full text-2xl font-semibold text-center">Admin</h1>
          <button className="text-center underline underline-offset-2" onClick={handleSignOut}>Tanca la sessió</button>
          <a href="/" className="text-center underline">Torna</a>
        </div>

        <DimensionFilters setFilter={setFilter} />

        <SearchFilter filter={filter} setFilter={setFilter} />

        <div className="flex items-center gap-4">
          <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">{filteredResources(resources, filter).length} {filteredResources(resources, filter).length === 1 ? 'recurs disponible' : 'recursos disponibles' }</span>
          <button onClick={toggleNewResource} className="p-2 shadow-md hover:scale-[1.03] bg-green-300 rounded hover:bg-green-400">Afegeix</button>
        </div>

        <AdminResources resources={filteredResources(resources, filter)} deleteResource={deleteResource} />
      </main>

      {
        addingResource ?  <AddResource resources={resources} setResources={setResources} setAddingResource={setAddingResource} /> : null
      }
    </>
  )
}

export default Admin;
