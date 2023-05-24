"use client"

import React from 'react';
import Resource from '@/app/interfaces/resource';
import { dimensionToColor } from '@/app/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilePowerpoint, faGlobe, faLightbulb, faLink, faNewspaper, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

interface Props {
  resource: Resource
  deleteResource: (id: string) => void
}

const ResourceCard: React.FC<Props> = ({ resource, deleteResource }) => {
  const [deletePrompt, setDeletePrompt] = React.useState(false);
  
  const toggleDeletePrompt = () => {
    setDeletePrompt(true);
    setTimeout(() => {
      setDeletePrompt(false);
    }, 1000);
  }

  const color = dimensionToColor.get(resource.dimension) ?? 'slate';
  const levels = [];

  for (let i = 0; i < resource.level; i += 1) {
      levels.push(<span title="Nivell" key={resource.id + i + "title"}><FontAwesomeIcon icon={faLightbulb} aria-hidden="true" className="text-lg text-yellow-400" key={resource.id + i} /></span>);
  }

  // {
  //   id: '0',
  //   title: 'Planteamiento del problema de investigación: desde la óptica cuantitativa y cualitativa',
  //   type: 'Llibre',
  //   dimension: 'Planificació de la recerca',
  //   subdimension: 'Elecció del tema i pregunta de recerca',
  //   level: 2,
  //   language: 'Español',
  //   url: 'https://www.uca.ac.cr/wp-content/uploads/2017/10/Investigacion.pdf',
  // }

  return (
    <div className="relative flex flex-col justify-between w-full bg-white border rounded shadow-lg border-slate-300">
      {
      deletePrompt ?
       <button className="absolute py-2 px-4 bg-white rounded right-0 top-[3px] text-xl text-red-600" onClick={(e) => {deleteResource(resource.id)}}><FontAwesomeIcon id={resource.id + "-trash"} icon={faTrash} /></button> :
       <button className="absolute py-2 px-4 bg-white rounded right-0 top-[3px] text-xl" onClick={toggleDeletePrompt}><FontAwesomeIcon id={resource.id + "-trash"} icon={faTrash} /></button>
       }
      
      <h2 className="m-2 mb-0 text-lg font-semibold hover:text-blue-800 hover:underline"><a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a></h2>

      <span className="w-full m-2 mb-0">Tema: {resource.subdimension !== '' ? resource.subdimension : "[?]"}</span>

      <div className="flex items-center w-full gap-2 m-2 mb-0">
        Nivell:
        <div className="flex items-center gap-1">{ levels }</div>
      </div>
      
      <p className="m-2 mb-0">{ resource.description ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }</p>

      <div className={`bg-${color} w-full p-1 mt-3 text-white rounded-b flex justify-between`}>
        <span className="px-2 overflow-hidden font-semibold text-ellipsis hover:whitespace-normal whitespace-nowrap">{resource.dimension}</span>

        <div className="flex items-center gap-2 px-2">
          {
            resource.language === 'Català' ? <img id="flag-icons-es-ct" src='/catalonia.svg' className="w-6 rounded" alt="Català" title="Català" /> :
            resource.language === 'English' ? <img id="flag-icons-gb" src='/uk.svg' className="w-6 rounded" alt="English" title="English" /> :
            resource.language === 'Español' ? <img id="flag-icons-es" src='/spain.svg' className="w-6 rounded" alt="Español" title="Español" /> :
            null
          }
          
          {
            resource.type === 'Llibre' ? <span title="Llibre"><FontAwesomeIcon id={resource.id + "-type"} icon={faBook} /></span> :
            resource.type === 'Recurs web' ? <span title="Recurs web"><FontAwesomeIcon id={resource.id + "-type"} icon={faGlobe} /></span> :
            resource.type === 'Article' ? <span title="Article"><FontAwesomeIcon id={resource.id + "-type"} icon={faNewspaper} /></span> :
            resource.type === 'Presentació' ? <span title="Presentació"><FontAwesomeIcon id={resource.id + "-type"} icon={faFilePowerpoint} /></span> :
            resource.type === 'Quiz' ? <span title="Quiz"><FontAwesomeIcon id={resource.id + "-type"} icon={faQuestionCircle} /></span> :
            resource.type === 'Vídeo' ? <span title="Vídeo"><FontAwesomeIcon id={resource.id + "-type"} icon={faYoutube} /></span> :
            null
          }
          
          <a href={resource.url} target="_blank" rel="noreferrer"><span title="Enllaç"><FontAwesomeIcon id={resource.id + "-link"} icon={faLink} /></span></a>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard