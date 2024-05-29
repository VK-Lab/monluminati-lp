import { gql,useQuery } from "@apollo/client";

const QUERY_LEADING_PROJECTS = gql`
  query Projects($where: ProjectWhereInput!, $take: Int) {
    projects(where: $where, take: $take) {
      name
      id
      isLeadingProject
      shortDescription
      avatar {
        url
        width
        height
        id
      }
    }
  }
`;

const useFetchLeadingProjects = () => {
  const { loading, error, data } = useQuery(QUERY_LEADING_PROJECTS, {
    variables: {
      where: {
        isLeadingProject: {
          equals: true,
        },
        isNative: {
          equals: true,
        }
      },
      take: 5, 
    },
  });

  return {
    loading,
    error,
    data: data?.projects ?? [],
  };
}

export default useFetchLeadingProjects;
