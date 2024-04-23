import logo from "../assets/logo--primary.svg";
import iconWeb from "../assets/social--web.svg";
import iconX from "../assets/social--x.svg";
import iconDiscord from "../assets/social--discord.svg";
import iconTelegram from "../assets/social--telegram.svg";

const Header = () => {
  return (
    <header>
      <nav className="fixed z-20 w-full bg-[#111113]/90 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a className="relative z-10" href="#" aria-label="logo">
                <img src={logo} className="h-[72px]" />
              </a>
              <label className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-[111113]/80 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0 lg:space-x-4">
                  <li>
                    <a href="#" className="inline-flex">
                      <img
                        src={iconWeb}
                        alt="Web"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex">
                      <img
                        src={iconX}
                        alt="X"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex">
                      <img
                        src={iconDiscord}
                        alt="Discord"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex">
                      <img
                        src={iconTelegram}
                        alt="Telegram"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
