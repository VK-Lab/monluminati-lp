'use client';

import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Unless, When } from 'react-if';
import { usePrevious, useWindowScroll } from 'react-use';

import logo from '@/assets/logo--primary.svg';
import iconX from '@/assets/social--x.svg';
import useFetchUser from '@/hooks/useFetchUser';

import SignIn from './SignIn';
import SignOut from './SignOut';
// import iconWeb from "@/assets/social--web.svg";
// import iconTelegram from "../assets/social--telegram.svg";

const Header = () => {
  const { data } = useFetchUser();
  const user = data?.me;
  const { y } = useWindowScroll();
  const lastYPosition = usePrevious(y);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <header>
      <nav
        className={cn(
          'main--navbar fixed transition z-20 w-full bg-[#111113]/90 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none',
          {
            hide: lastYPosition && y > lastYPosition,
          },
        )}
      >
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 py-1">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a className="relative z-10 my-1" href="#" aria-label="logo">
                <Image src={logo} alt="Monluminati logo" className="h-[54px]" />
              </a>
              <label
                className="peer-checked:hamburger -block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                onClick={() => setShowMenu((prev) => !prev)}
              >
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
            <div
              className={`navmenu  w-full flex-wrap justify-center lg:justify-end items-center mb-6 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-dark/80 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 ${showMenu ? 'flex' : 'hidden'}`}
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="relative top-[5px] space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0 lg:space-x-4 flex items-center">
                  {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <Image
                        src={iconWeb}
                        alt="Web"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li> */}
                  <Unless condition={user}>
                    <li>
                      <SignIn />
                    </li>
                  </Unless>
                  <When condition={user}>
                    <li>
                      <div className="relative p-1 flex items-center group flex-col w-full">
                        <div className={`flex items-center gap-2 justify-between w-full `}>
                          <Image
                            alt={user?.name!}
                            src={user?.discordAvatar!}
                            width="40"
                            height="40"
                            className="h-[40px] w-[40px] rounded-full min-w-[40px] border-2 border-solid border-warning-default border-white/50"
                          />
                          <span className="ml-2 text-sm truncate">{user?.name}</span>
                          <button
                            role="menuitem"
                            className={`flex lg:hidden w-fit cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-start leading-tight outline-none transition-all`}
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
                                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                              ></path>
                            </svg>
                            <SignOut hideText />
                            {/* <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                              Sign Out
                            </p> */}
                          </button>
                        </div>
                        <div
                          role="menu"
                          className="absolute z-10 min-w-[180px] flex-col gap-2 overflow-auto rounded-md p-1 font-sans text-sm font-normal shadow-lg shadow-blue-gray-500/10 focus:outline-none top-[100%] right-0 bg-dark group-hover:block hidden"
                        >
                          <button
                            role="menuitem"
                            className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-start leading-tight outline-none transition-all"
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
                                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                              ></path>
                            </svg>
                            <SignOut />
                            {/* <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                              Sign Out
                            </p> */}
                          </button>
                        </div>
                      </div>
                    </li>
                  </When>
                  <li className="hidden  lg:block">
                    <a
                      href="https://twitter.com/Monluminati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Image src={iconX} alt="X" className="" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <Image
                        src={iconTelegram}
                        alt="Telegram"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li> */}
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
