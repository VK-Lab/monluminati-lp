import { gql,useQuery } from "@apollo/client";

const QUERY_USER = gql`
  query Me {
    me {
      id
      username
      name
      discordAvatar
    }
  }
`

const useFetchUser = () => {
  const query = useQuery(QUERY_USER);

 return query
}

export default useFetchUser;