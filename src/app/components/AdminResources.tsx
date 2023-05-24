import Resource from "@/app/interfaces/resource"
import AdminResourceCard from "./AdminResourceCard"

interface Props {
  resources: Array<Resource>
}

const Resources: React.FC<Props> = ({ resources }) => {
  return (
    <section className="flex flex-col w-full gap-4 px-2 pb-2">
      { resources.map((resource) => <AdminResourceCard key={resource.id} resource={resource} />) }
    </section>
  )
}

export default Resources