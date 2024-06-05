import { gql, useMutation } from '@apollo/client';

const UP_VOTE = gql`
  mutation VoteProject($id: ID!) {
    voteProject(id: $id) {
      id
    }
  }
`;

const useUpVote = () => {
  const mutation = useMutation(UP_VOTE, { refetchQueries: ['Projects'] });

  return mutation;
};

export default useUpVote;
