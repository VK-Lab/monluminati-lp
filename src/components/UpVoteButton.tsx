import { ThumbsUp } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

import useUpVote from '@/hooks/useUpVote';

export const UpVoteButton = ({ id, votes }: { id: string; votes: number }) => {
  const [upVote, { loading, error }] = useUpVote();

  const onUpVote = async () => {
    try {
      await upVote({ variables: { id } });
      toast.success('Voted successfully');
    } catch (e) {
      toast.error(error?.graphQLErrors?.[0].message || 'No remaining votes');
    }
  };
  return (
    <div
      className="cursor-pointer flex items-center justify-between gap-2 bg-[#333338] px-3 py-1 rounded-3xl text-sm"
      onClick={!loading ? onUpVote : undefined}
    >
      <ThumbsUp className="w-4 h-4" /> <div>{votes || 0}</div>
    </div>
  );
};
