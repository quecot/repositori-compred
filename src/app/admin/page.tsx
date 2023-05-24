"use client"

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import DimensionFilters from "../components/DimensionFilters";
import { resources as r } from "@/app/constants";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Resource from "../interfaces/resource";
import AdminResources from "../components/AdminResources";
import { v4 as uuid } from "uuid";

let session: any;
supabase.auth.getSession().then((supabaseSession) => { session = supabaseSession.data.session });

const handleSubmit = (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
  e.preventDefault();

  supabase.auth.signInWithPassword({
    email: email,
    password: password
  }).then((response) => {
    if (response.data.session !== null) window.location.reload();
  }).catch((error) => {
    // console.log(error);
  })
}

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [filter, setFilter] = useState('');
  const [addingResource, setAddingResource] = useState(false);
  const [resources, setResources] = useState<Array<Resource>>(r);

  if (session === null) {
    return (
      <main>
        <form onSubmit={(e) => { handleSubmit(e, email, password); setEmail(''); setPassword(''); } } className="flex flex-col items-center justify-center w-screen h-screen gap-6 bg-slate-50">
          <h1 className="text-2xl font-semibold">Accés admin</h1>
          <input className="w-64 p-2 text-center border rounded outline-slate-400 border-slate-400" type="text" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-64 p-2 text-center border rounded outline-slate-400 border-slate-400" type="password" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="p-2 rounded bg-slate-300 outline-slate-400 outline" type="submit">Inicia sessió</button>
          <a href="/" className="pt-4 underline">Torna</a>
        </form>
      </main>
    )
  }

  const toggleNewResource = () => {
    setAddingResource(true);
  }

  const handleAddResource = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    const newResource: Resource = {
      dimension: data.get('dimension') as string,
      level: parseInt(data.get('level') as string),
      url: data.get('url') as string,
      title: data.get('title') as string,
      type: data.get('type') as string,
      language: data.get('language') as string,
      subdimension: data.get('subdimension')?.toString(),
      id: uuid(),
      description: data.get('description')?.toString(),
    };

    setResources([newResource, ...resources]);
    setAddingResource(false);
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

        <div className="relative w-full px-2 sm:mr-auto sm:w-80">
          <input className="w-full px-4 py-2 text-lg border rounded border-slate-300" type="text" placeholder="Cerca al repositori" value={filter} onChange={(e) => setFilter(e.target.value)} />
          
          { filter !== '' ? <button className="absolute py-2 px-[14px] right-4 top-[3px]" onClick={() => setFilter('')}>×</button> : null }        
        </div>

        <div className="flex items-center gap-4">
          <span className="w-full py-2 pl-2 mr-auto font-bold text-center sm:text-left">{filteredResources(resources, filter).length} {filteredResources(resources, filter).length === 1 ? 'recurs disponible' : 'recursos disponibles' }</span>
          <button onClick={toggleNewResource} className="p-2 shadow-md hover:scale-[1.03] bg-green-300 rounded hover:bg-green-400">Afegeix</button>
        </div>

        <AdminResources resources={filteredResources(resources, filter)} deleteResource={deleteResource} />
        
      </main>

      {
        addingResource ?  (
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-3xl">
          <div className="relative w-2/3 p-4 overflow-scroll bg-white rounded shadow-md h-5/6">
            <button className="absolute py-2 px-[14px] right-4 top-[3px] text-xl hover:scale-[1.1]" onClick={() => setAddingResource(false)}>×</button>
            <h2 className="w-full text-2xl font-semibold text-center">Afegeix un recurs</h2>
            <form onSubmit={handleAddResource} className="flex flex-col gap-4 p-4">
              <label className="flex flex-col gap-1">
                <span>Títol</span>
                <input className="p-2 border rounded border-slate-300" type="text" name="title" required />
              </label>
              <label className="flex flex-col gap-1">
                <span>Tipus</span>
                <select className="p-2 border rounded border-slate-300" name="type" id="type">
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
                <select className="p-2 border rounded border-slate-300" name="dimension" id="dimension">
                  <option value="Planificació de la recerca">Planificació de la recerca</option>
                  <option value="Fonamentació teòrica">Fonamentació teòrica</option>
                  <option value="Disseny i aplicació">Disseny i aplicació</option>
                  <option value="Discussió i conclusions">Discussió i conclusions</option>
                  <option value="Bibliografia">Bibliografia</option>
                  <option value="Comunicació i TIC">Comunicació i TIC</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Subdimensió (opcional)</span>
                <input className="p-2 border rounded border-slate-300" name="subdimension" type="text" />
              </label>
              <label className="flex flex-col gap-1">
                <span>Descripció</span>
                <input className="p-2 border rounded border-slate-300" name="description" type="text" />
              </label>
              <label className="flex flex-col gap-1">
                <span>Nivell</span>
                <select className="p-2 border rounded border-slate-300" name="level" id="level">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Idioma</span>
                <select className="p-2 border rounded border-slate-300" name="language" id="language">
                  <option value="Català">Català</option>
                  <option value="Español">Español</option>
                  <option value="English">English</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span>Enllaç</span>
                <input className="p-2 border rounded border-slate-300" name="url" type="text" placeholder="https://compred.com/recursos/recurs-molt-xulo" required/>
              </label>
              <button className="p-2 rounded bg-slate-200 hover:bg-slate-300 hover:scale-[1.03]">Afegeix</button>
            </form>
          </div>
        </div>) : null
      }
    </>
  )
}

export default Admin;
