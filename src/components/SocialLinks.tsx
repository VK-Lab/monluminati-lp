import Image from "next/image";
import iconX from "@/assets/icon--x.svg";
import iconDiscord from "@/assets/icon--discord.svg";
// import iconTelegram from "@/assets/icon--telegram.svg";

const SocialLinks = () => {
  return (
    <div className="gap-x-4 social-links items-center flex">
      <a
        href="https://twitter.com/BuildOnCrossX"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={iconX} alt="CrossX Game" className="w-12 h-12" />
      </a>
      {/* <a href="https://t.me/crossxroblox" target="_blank" rel="noreferrer">
        <Image src={iconTelegram} alt="Telegram" className="w-12 h-12" />
      </a> */}
      <a href="https://discord.gg/SEA7gzfe" target="_blank" rel="noreferrer">
        <Image src={iconDiscord} alt="Discord" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default SocialLinks;
