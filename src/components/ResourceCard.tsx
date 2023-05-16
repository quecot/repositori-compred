"use client"

import React from 'react';
import Resource from '@/interfaces/resource';

interface Props {
  resource: Resource
}

const ResourceCard: React.FC<Props> = ({ resource }) => {
  return (
    <div className='flex flex-col w-full p-2 border rounded border-slate-200'>
      <h2 className='font-semibold'>{resource.title}</h2>
      <p>{ resource.description ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</p>
    </div>
  )
}

export default ResourceCard