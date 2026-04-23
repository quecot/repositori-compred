import type { Resource } from '../lib/resource';

const filteredResources = (resources: Resource[], filter: string): Resource[] => {
  if (filter === '') return resources;
  
  const lowerFilter = filter.toLowerCase();
  
  return resources.filter((resource) => {
    return (
      resource.title.toLowerCase().includes(lowerFilter) ||
      resource.description.toLowerCase().includes(lowerFilter) ||
      resource.dimension.toLowerCase().includes(lowerFilter) ||
      resource.subdimension.toLowerCase().includes(lowerFilter) ||
      resource.type.toLowerCase().includes(lowerFilter) ||
      resource.language.toLowerCase().includes(lowerFilter)
    );
  });
};

export default filteredResources;