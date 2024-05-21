import cn from "classnames";
import Image from "next/image";
import React from "react";

import btnClose from "@/assets/btn--close.svg";
import imgPlaceholder from "@/assets/image--hero.svg";
import iconDiscord from "@/assets/social--discord.svg";
import iconTelegram from "@/assets/social--telegram.svg";
import iconWeb from "@/assets/social--web.svg";
import iconX from "@/assets/social--x.svg";

import { CustomRenderer } from "./custom-document-render";
import Modal from "./Modal";

const ProjectDetailModal = ({ isOpen, project, onClose }: any) => {
  const {
    categories,
    tags,
    avatar,
    socialDiscord,
    socialTelegram,
    socialX,
    socialWeb,
    name,
    content: { document }
  } = project;
  console.log(`🚀 ~ ProjectDetailModal ~ document:`, document);
  const { name: category } = categories?.[0] ?? "";

  if (!isOpen) {
    return null;
  }

  return (
    <Modal className="!max-w-[768px] -max-h-[80vh]">
      <div className="flex flex-col">
        <div className="cover relative z-[1] min-h-[140px] md:min-h-[240px] relative">
          <Image
            src={avatar?.url ?? imgPlaceholder}
            alt="image"
            className="w-full h-[140px] sm:h-[320px] rounded rounded-xl object-cover"
            fill
          />
          <button
            onClick={onClose}
            className="cursor-pointer btn--close absolute top-4 right-4"
          >
            <Image
              src={btnClose}
              alt="Close"
              className="block w-[40px] h-[40px]"
            />
          </button>
        </div>
        <div className="body p-4 relative z-[2]">
          <div className="w-[180px] project-profile text-center relative mt-[-70px] md:mt-[-100px] mx-auto md:mx-0">
            <div className="relative pb-[100%]">
              <Image
                src={avatar?.url ?? imgPlaceholder}
                alt="image"
                className="min-w-[150px] min-h-[150px] w-[150px] h-[150px] rounded rounded-xl object-cover border border-white border-2 mx-auto"
                fill
              />
            </div>
          </div>
          <div>
            <h3 className="my-2 block text-3xl font-semibold uppercase leading-relaxed tracking-normal antialiased flex items-center gap-2 justify-center md:justify-start">
              {name}
              <span className="inline-flex items-center bg-green-600 rounded-full px-2 text-sm text-white py-0.5 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current mr-1.5 text-white"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
                  <path
                    fillRule="evenodd"
                    d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  ></path>
                </svg>
                Active
              </span>
            </h3>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-x-4 md:absolute md:top-[16px] md:right-[16px] mb-4">
            <button
              disabled
              className="btn--primary flex-col items-center min-w-[120px] text-center"
            >
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Upvote
              </span>
              <span className="text-[12px]">(Coming soon)</span>
            </button>
            {socialDiscord && (
              <a
                href={socialDiscord}
                className="btn--secondary inline-flex text-sm items-center"
              >
                <Image
                  src={iconDiscord}
                  alt="Discord"
                  className="block w-[36px] h-[36px] relative top-[3px]"
                />
                <span>Join community</span>
              </a>
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="category-wrapper flex justify-center md:justify-start items-center mb-3">
              <span
                className={cn(
                  "font-semibold badge-chip border-2 border rounded p-1 leading-none text-xs",
                  {
                    "tag--infra": tags === "infra",
                    "tag--bridge": tags === "bridge",
                    "tag--dexs": tags === "dexs",
                    "tag--nft": tags === "nft",
                    "tag--defi": tags === "defi",
                    "tag--dao": tags === "dao",
                    "tag--ai": tags === "ai"
                  }
                )}
              >
                {category}
              </span>
            </div>
            <div className="social-links">
              <div className="flex items-center justify-center md:justify-start">
                {socialWeb && (
                  <a href={socialWeb} className="inline-flex">
                    <Image
                      src={iconWeb}
                      alt="Web"
                      className="block w-[48px] h-[48px]"
                    />
                  </a>
                )}
                {socialX && (
                  <a href={socialX} className="inline-flex">
                    <Image
                      src={iconX}
                      alt="X"
                      className="block w-[48px] h-[48px]"
                    />
                  </a>
                )}
                {socialTelegram && (
                  <a href={socialTelegram} className="inline-flex">
                    <Image
                      src={iconTelegram}
                      alt="Telegram"
                      className="block w-[48px] h-[48px]"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="max-h-full -max-h-[60vh] overflow-y-auto text-base mt-4">
            <CustomRenderer document={document} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailModal;
