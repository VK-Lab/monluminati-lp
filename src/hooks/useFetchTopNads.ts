import { gql,useQuery } from "@apollo/client";

const QUERY_TOP_NADS = gql`
  query TopContributors {
    topContributors {
      avatarUrl
      detailed_xp
      id
      level
      message_count
      username
      xp
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