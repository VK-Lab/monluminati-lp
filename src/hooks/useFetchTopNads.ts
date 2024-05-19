import { gql,useQuery } from "@apollo/client";

const QUERY_TOP_NADS = gql`
  query TopContributors {
    topContributors {
      id
      username
      level
      detailed_xp
      avatarUrl
      xp
      message_count
    }
  }
`

const useFetchTopNads = () => {
  const { loading, error, data } = useQuery(QUERY_TOP_NADS);

  return {
    loading,
    error,
    data: data?.topContributors ?? []
  }
}

export default useFetchTopNads;