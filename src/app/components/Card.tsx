import cn from "classnames";
import Image from 'next/image'
import React from "react";

import iconDiscord from "@/assets/social--discord.svg";
import iconTelegram from "@/assets/social--telegram.svg";
import iconWeb from "@/assets/social--web.svg";
import iconX from "@/assets/social--x.svg";

const Card = ({ data, onClick }: any) => {
  const { category, tags, logoUrl, social, name } = data;
  return (
    <div className="cursor-pointer transition card-common p-5 relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border shadow-2xl border border-white/25 rounded rounded-lg">
      <div className="relative m-0 w-[150px] shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
        <div className="rounded mb-1">
          <Image
            src={logoUrl}
            alt="image"
            className="w-[150px] h-[150px] rounded rounded-xl object-cover"
          />
        </div>
        <div className="hidden social-links">
          <div className="flex items-center">
            {social.website && (
              <a href={social.website} className="inline-flex">
                <Image src={iconWeb} alt="Web" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.x && (
              <a href={social.x} className="inline-flex">
                <Image src={iconX} alt="X" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.discord && (
              <a href={social.discord} className="inline-flex">
                <Image src={iconDiscord} alt="Discord" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.telegram && (
              <a href={social.telegram} className="inline-flex">
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
          <span className={cn("font-semibold badge-chip border-2 border rounded p-1 px-1.5 leading-none text-xs", {
            "tag--defi": category === "DeFi",
            "tag--game-nft": category === "GameNFT",
            "tag--other": category === "Other",
          })}>
            {tags}
          </span>
        </div>

        <div className="social-links">
          <div className="flex items-center">
            {social.website && (
              <a href={social.website} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconWeb} alt="Web" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.x && (
              <a href={social.x} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconX} alt="X" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.discord && (
              <a href={social.discord} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconDiscord} alt="Discord" className="block w-[48px] h-[48px]" />
              </a>
            )}
            {social.telegram && (
              <a href={social.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src={iconTelegram} alt="Telegram" className="block w-[48px] h-[48px]" />
              </a>
            )}
          </div>
        </div>

        <p className="body   text-sm font-normal leading-relaxed antialiased line-clamp-4">
          {/* Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. */}
        </p>
        <div className="text-right">
          <button
            className="ml-auto show-more rounded-full flex select-none items-center gap-2 rounded-lg p-3 text-center align-middle   text-xs font-bold uppercase text-indigo-500 transition-all hover:opacity-100 hover:bg-indigo-500/10 active:bg-indigo-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
