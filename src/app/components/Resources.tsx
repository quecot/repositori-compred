import Resource from "@/app/interfaces/resource"
import ResourceCard from "./ResourceCard"

interface Props {
  resources: Array<Resource>
}

const Resources: React.FC<Props> = ({ resources }) => {
  return (
    <section className="flex flex-col w-full gap-2 px-2 pb-2 sm:grid-cols-2 sm:grid md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
      { resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />) }
    </section>
  )
}

export default Resources