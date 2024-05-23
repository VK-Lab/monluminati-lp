import { gql, useQuery } from "@apollo/client";

const QUERY_COMMUNITY_NEWS = gql`
  query News($where: NewWhereInput!, $take: Int) {
    news(where: $where, take: $take) {
      title
      description
      content {
        document
      }
      sourceUrl
      thumbnailUrl
    }
  }
`;

const useFetchCommunitiesNews = () => {
  const { loading, error, data } = useQuery(QUERY_COMMUNITY_NEWS, {
    variables: {
      where: {
        isPublished: {
          equals: true,
        },
      },
      take: 10,
    },
  });

  return {
    loading,
    error,
    data: data?.news ?? []
  };
};

export default useFetchCommunitiesNews;
