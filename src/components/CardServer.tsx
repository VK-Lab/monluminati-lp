import cn from 'classnames';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import imgPlaceholder from '@/assets/image--hero.svg';
import iconDiscord from '@/assets/social--discord.svg';
import iconTelegram from '@/assets/social--telegram.svg';
import iconX from '@/assets/social--x.svg';
import useUpVote from '@/hooks/useUpVote';

import { UpVoteButton } from './UpVoteButton';

const CardServer = ({ data, onClick }: any) => {
  console.log('🚀 ~ CardServer ~ data:', data);
  const { categories, tags, avatar, socialDiscord, socialTelegram, socialX, socialWeb, name } = data;
  const { name: category } = categories?.[0] ?? '';

  const [upVote, { data: upVoteData, loading, error }] = useUpVote();

  const onUpVote = () => {
    upVote({ variables: { id: data.id } });
  };

  return (
    <div className="cursor-pointer transition card-common p-5 relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border shadow-2xl border border-white/25 rounded rounded-lg">
      <div className="relative m-0 w-[150px] shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
        <div className="rounded mb-1">
          <Image
            // src={imgPlaceholder}
            src={avatar?.url ?? imgPlaceholder}
            alt="image"
            className="w-[150px] h-[150px] rounded rounded-xl object-cover"
            width={150}
            height={150}
          />
        </div>
        <div className="hidden social-links">
          <div className="flex items-center">
            {socialWeb && (
              <a href={socialWeb} className="inline-flex">
                <Globe className="w-12 h-12" />
              </a>
            )}
            {socialX && (
              <a href={socialX} className="inline-flex">
                <Image src={iconX} alt="X" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {socialDiscord && (
              <a href={socialDiscord} className="inline-flex">
                <Image src={iconDiscord} alt="Discord" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {socialTelegram && (
              <a href={socialTelegram} className="inline-flex">
                <Image src={iconTelegram} alt="Telegram" className="block w-[48px] h-[48px]" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="px-3 text-left flex-1 w-auto">
        <h6 className="mb-2 block   text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {name}
        </h6>
        <div className="category-wrapper flex items-center mb-3">
          <span
            className={cn('font-semibold badge-chip border-2 border rounded p-1 px-1.5 leading-none text-xs', {
              'tag--defi': category === 'DeFi',
              'tag--game-nft': category === 'GameNFT',
              'tag--other': category === 'Other',
            })}
          >
            {category}
          </span>
        </div>

        <div className="social-links">
          <div className="flex items-center gap-4 p-1">
            {socialWeb && (
              <a href={socialWeb} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {socialX && (
              <a href={socialX} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconX} alt="X" className="w-5 h-5" />
              </a>
            )}
            {socialDiscord && (
              <a href={socialDiscord} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconDiscord} alt="Discord" className="w-5 h-5" />
              </a>
            )}
            {socialTelegram && (
              <a href={socialTelegram} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconTelegram} alt="Telegram" className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        {/* <div className="mt-2">
        </div> */}

        <p className="body   text-sm font-normal leading-relaxed antialiased line-clamp-4">
          {/* Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
        selling licenses. */}
        </p>
        <div className="flex mt-3 items-center justify-between">
          <UpVoteButton id={data.id} votes={data.votes} />
          <button
            className="ml-auto show-more rounded-full flex select-none items-center gap-2  p-3 text-center align-middle   text-xs font-bold uppercase text-indigo-500 transition-all hover:opacity-100 hover:bg-indigo-500/10 active:bg-indigo-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={onClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardServer;
