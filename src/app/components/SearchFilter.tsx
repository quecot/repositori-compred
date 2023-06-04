import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
}

const SearchFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="relative w-full px-2 sm:mr-auto sm:w-80">
      <input className="w-full px-4 py-2 text-lg border rounded border-slate-300" type="text" placeholder="Cerca al repositori" value={filter} onChange={(e) => setFilter(e.target.value)} />
      
      { filter !== '' ? <button className="absolute py-2 px-[14px] right-4 top-[3px]" onClick={() => setFilter('')}>×</button> : null }        
    </div>
  )
}

export default SearchFilter