import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import Resource from '../interfaces/resource';
import { v4 as uuid } from 'uuid';

interface Props {
  resources: Array<Resource>
  setResources: Dispatch<SetStateAction<Resource[]>>
  setAddingResource: Dispatch<SetStateAction<boolean>>
}

const AddResource: React.FC<Props> = ({ resources, setResources, setAddingResource }) => {
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

  return (
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
        </div>
  )
}

export default AddResource