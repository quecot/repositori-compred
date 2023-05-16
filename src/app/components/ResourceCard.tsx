"use client"

import React from 'react';
import Resource from '@/app/components/interfaces/resource';
import { dimensionToColor } from '@/app/components/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilePowerpoint, faGlobe, faLink, faNewspaper, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

interface Props {
  resource: Resource
}

const ResourceCard: React.FC<Props> = ({ resource }) => {
  const color = dimensionToColor.get(resource.dimension) ?? 'slate';
  
  return (
    <div className='flex flex-col justify-between w-full border rounded border-slate-200'>
      <h2 className='m-2 mb-0 text-lg font-semibold hover:text-blue-800 hover:underline'><a href={resource.url} target='_blank' rel='noreferrer'>{resource.title}</a></h2>

      <span className="w-full m-2 mb-0">Tema: {resource.subdimension ?? "[?]"}</span>
      
      <p className='m-2 mb-0'>{ resource.description ?? 'Descripció: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }</p>

      <div className={`bg-${color} w-full p-1 mt-3 text-white rounded-b flex justify-between`}>
        <span className="px-2 font-semibold whitespace-nowrap">{resource.dimension}</span>

        <div className="flex items-center gap-2 px-2">
          {
            resource.type === 'Llibre' ? <FontAwesomeIcon icon={faBook} title="Llibre" /> :
            resource.type === 'Recurs web' ? <FontAwesomeIcon icon={faGlobe} title="Recurs web" /> :
            resource.type === 'Article' ? <FontAwesomeIcon icon={faNewspaper} title="Article" /> :
            resource.type === 'Presentació' ? <FontAwesomeIcon icon={faFilePowerpoint} title="Presentació" /> :
            resource.type === 'Quiz' ? <FontAwesomeIcon icon={faQuestionCircle} title="Quiz" /> :
            resource.type === 'Vídeo' ? <FontAwesomeIcon icon={faYoutube} title="Vídeo" /> :
            null
          }
          
          <a href={resource.url} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink} title="Enllaç" /></a>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard