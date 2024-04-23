import cn from "classnames";
import Modal from "./Modal";
import iconWeb from "../assets/social--web.svg";
import iconX from "../assets/social--x.svg";
import iconDiscord from "../assets/social--discord.svg";
import iconTelegram from "../assets/social--telegram.svg";
import btnClose from "../assets/btn--close.svg"

const ProjectDetailModal = ({ isOpen, project, onClose }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal className="max-w-[768px]">
      <div className="cover relative z-[1]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="image"
          className="w-full h-[140px] sm:h-[320px] rounded rounded-xl object-cover"
        />
        <button onClick={onClose} className="cursor-pointer btn--close absolute top-4 right-4">
          <img src={btnClose} alt="Close" className="block w-[40px] h-[40px]" />
        </button>
      </div>
      <div className="body p-4 relative z-[2]">
        <div className="flex items-center gap-x-4 absolute top-[16px] right-[16px]">
          <button className="btn--primary min-w-[160px] text-center">Active</button>
          <button className="btn--secondary min-w-[160px] text-center">Join</button>
        </div>
        <div className="w-[180px] project-profile text-center relative mt-[-100px]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="w-[150px] h-[150px] rounded rounded-xl object-cover border border-white border-2 mx-auto"
          />
          <h6 className="my-2 block font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal antialiased">
            AIT PROTOCOL
          </h6>
          <div className="social-links">
            <div className="flex items-center">
              <a href="#" className="inline-flex">
                <img
                  src={iconWeb}
                  alt="Web"
                  className="block w-[48px] h-[48px]"
                />
              </a>
              <a href="#" className="inline-flex">
                <img src={iconX} alt="X" className="block w-[48px] h-[48px]" />
              </a>
              <a href="#" className="inline-flex">
                <img
                  src={iconDiscord}
                  alt="Discord"
                  className="block w-[48px] h-[48px]"
                />
              </a>
              <a href="#" className="inline-flex">
                <img
                  src={iconTelegram}
                  alt="Telegram"
                  className="block w-[48px] h-[48px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="category-wrapper flex items-center mb-3">
          <span
            className={cn(
              "font-semibold badge-chip border-2 border rounded p-1 leading-none text-xs",
              {
                "tag--infra": project?.tag === "infra",
                "tag--bridge": project?.tag === "bridge",
                "tag--dexs": project?.tag === "dexs",
                "tag--nft": project?.tag === "nft",
                "tag--defi": project?.tag === "defi",
                "tag--dao": project?.tag === "dao",
                "tag--ai": project?.tag === "ai",
              }
            )}
          >
            AI
          </span>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          <p className="body block font-sans text-sm font-normal leading-relaxed  antialiased">
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minima, optio pariatur enim odit saepe fugiat officiis laboriosam a illo dolorum laborum commodi laudantium, dolore maxime? Repudiandae, maiores deserunt dolorum, quas repellat nobis, tempora suscipit explicabo ab molestias enim consectetur. Debitis, incidunt reprehenderit corporis delectus nemo mollitia, sint adipisci harum nobis cumque numquam repellendus repudiandae quo at libero illo, illum vitae maxime aperiam laborum fuga impedit officiis. Nesciunt molestiae cum nobis accusantium possimus earum ipsam, rem fuga, numquam inventore quidem praesentium et quaerat. Dicta dolor laudantium totam, doloremque unde eligendi facilis, explicabo praesentium voluptatum quos sunt dolore corporis, eum voluptas vel maxime ab consequuntur consectetur ratione sequi possimus veniam. Ad at temporibus asperiores perferendis autem placeat consequuntur consectetur a! Consectetur itaque similique pariatur et. Ad expedita, qui cum iste vel laboriosam quaerat dignissimos beatae maxime, praesentium minus deserunt quibusdam consectetur similique omnis sint molestias! Commodi quaerat officia nesciunt sequi quia voluptate eveniet modi velit earum atque, facilis laborum perferendis non similique temporibus dolores esse provident suscipit exercitationem quas labore? Laboriosam, non ipsam. Corrupti voluptatum harum esse voluptates magni, minus cum expedita beatae. Aliquid itaque praesentium sed, magni laudantium quia quos nemo totam veniam nulla consequuntur aspernatur, doloremque iusto fugiat quasi!
          </p>
          <p className="body block font-sans text-sm font-normal leading-relaxed  antialiased">
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minima, optio pariatur enim odit saepe fugiat officiis laboriosam a illo dolorum laborum commodi laudantium, dolore maxime? Repudiandae, maiores deserunt dolorum, quas repellat nobis, tempora suscipit explicabo ab molestias enim consectetur. Debitis, incidunt reprehenderit corporis delectus nemo mollitia, sint adipisci harum nobis cumque numquam repellendus repudiandae quo at libero illo, illum vitae maxime aperiam laborum fuga impedit officiis. Nesciunt molestiae cum nobis accusantium possimus earum ipsam, rem fuga, numquam inventore quidem praesentium et quaerat. Dicta dolor laudantium totam, doloremque unde eligendi facilis, explicabo praesentium voluptatum quos sunt dolore corporis, eum voluptas vel maxime ab consequuntur consectetur ratione sequi possimus veniam. Ad at temporibus asperiores perferendis autem placeat consequuntur consectetur a! Consectetur itaque similique pariatur et. Ad expedita, qui cum iste vel laboriosam quaerat dignissimos beatae maxime, praesentium minus deserunt quibusdam consectetur similique omnis sint molestias! Commodi quaerat officia nesciunt sequi quia voluptate eveniet modi velit earum atque, facilis laborum perferendis non similique temporibus dolores esse provident suscipit exercitationem quas labore? Laboriosam, non ipsam. Corrupti voluptatum harum esse voluptates magni, minus cum expedita beatae. Aliquid itaque praesentium sed, magni laudantium quia quos nemo totam veniam nulla consequuntur aspernatur, doloremque iusto fugiat quasi!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailModal;
