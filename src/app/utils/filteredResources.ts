import Resource from "../interfaces/resource";

const filteredResources = (resources: Array<Resource>, filter: string) => {
  const curatedFilter = filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  
  return resources.filter((r) => {
    const title = r.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const dimension = r.dimension.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    return title.includes(curatedFilter) || dimension.includes(curatedFilter);
  });
}

export default filteredResources;
