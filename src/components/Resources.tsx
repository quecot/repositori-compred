import type { Resource } from '../lib/resource';
import ResourceCard from './ResourceCard';

interface Props {
  resources: Resource[];
}

const Resources = ({ resources }: Props) => {
  return (
    <section className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
    </section>
  );
};

export default Resources;