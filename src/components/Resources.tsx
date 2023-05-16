"use client"

import Resource from "@/interfaces/resource"
import ResourceCard from "./ResourceCard"

interface Props {
  resources: Array<Resource>
}

const Resources: React.FC<Props> = ({ resources }) => {
  return (
    <section className="flex flex-col w-full gap-2 px-2 pb-2">
      <span className="w-full pt-2 pl-1 mr-auto font-bold text-center sm:text-left">{resources.length} {resources.length === 1 ? 'recurs disponible' : 'recursos disponibles' }</span>

      { resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />) }
    </section>
  )
}

export default Resources