import cn from "classnames";
import Image from "next/image";
import Modal from "./Modal";
import iconWeb from "@/assets/social--web.svg";
import iconX from "@/assets/social--x.svg";
import iconDiscord from "@/assets/social--discord.svg";
import iconTelegram from "@/assets/social--telegram.svg";
import btnClose from "@/assets/btn--close.svg"
import { DocumentRenderer } from '@keystone-6/document-renderer';

const ProjectDetailModal = ({ isOpen, project, onClose }: any) => {
  console.log(`🚀 ~ ProjectDetailModal ~ project:`, project)
  // const { logoUrl, name, tags, social } = project;
  const {
    categories,
    tags,
    avatar: { url: avatarUrl },
    socialDiscord,
    socialTelegram,
    socialX,
    socialWeb,
    name,
    content: {
      document
    }
  } = project;
  console.log(`🚀 ~ ProjectDetailModal ~ document:`, document)
  const { name: category } = categories?.[0] ?? "";

  if (!isOpen) {
    return null;
  }

  return (
    <Modal className="!max-w-[768px]">
      <div className="cover relative z-[1]">
        <img
          src={avatarUrl}
          alt="image"
          className="w-full h-[140px] sm:h-[320px] rounded rounded-xl object-cover"
        />
        <button onClick={onClose} className="cursor-pointer btn--close absolute top-4 right-4">
          <Image src={btnClose} alt="Close" className="block w-[40px] h-[40px]" />
        </button>
      </div>
      <div className="body p-4 relative z-[2]">
        <div className="flex items-center gap-x-4 absolute top-[16px] right-[16px]">
          <button className="btn--primary min-w-[160px] text-center">Active</button>
          <button className="btn--secondary min-w-[160px] text-center">Join</button>
        </div>
        <div className="w-[180px] project-profile text-center relative mt-[-100px]">
          <img
            src={avatarUrl}
            alt="image"
            // width={150}
            // height={150}
            className="w-[150px] h-[150px] rounded rounded-xl object-cover border border-white border-2 mx-auto"
          />
          <h6 className="my-2 block   text-sm font-semibold uppercase leading-relaxed tracking-normal antialiased">
            {name}
          </h6>
          <div className="social-links">
            <div className="flex items-center">
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
                  <Image src={iconX} alt="X" className="block w-[48px] h-[48px]" />
                </a>
              )}
              {socialDiscord && (
                <a href={socialDiscord} className="inline-flex">
                  <Image
                    src={iconDiscord}
                    alt="Discord"
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
        <div className="category-wrapper flex items-center mb-3">
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
                "tag--ai": tags === "ai",
              }
            )}
          >
            {category}
          </span>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          <DocumentRenderer document={document} />
          <p className="body block text-sm font-normal leading-relaxed  antialiased">
            {project?.description}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailModal;
