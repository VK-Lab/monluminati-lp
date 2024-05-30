"use client";

import cn from "classnames";
import Image from 'next/image'
import { useSession } from "next-auth/react";
import React from "react";
import { Unless, When } from "react-if";
import { usePrevious, useWindowScroll } from "react-use";

import logo from "@/assets/logo--primary.svg";
import iconX from "@/assets/social--x.svg";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
// import iconWeb from "@/assets/social--web.svg";
// import iconTelegram from "../assets/social--telegram.svg";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(`🚀 ~ Header ~ session:`, session, status)
  const { y } = useWindowScroll();
  const lastYPosition = usePrevious(y);
  const isLoggedIn = Boolean(session?.user);
  const { user } = session || {};

  return (
    <header>
      <nav
        className={cn(
          "main--navbar fixed transition z-20 w-full bg-[#111113]/90 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none",
          {
            hide: lastYPosition && y > lastYPosition,
          }
        )}
      >
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 py-1">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a className="relative z-10 my-1" href="#" aria-label="logo">
                <Image src={logo} alt="Monluminati logo" className="h-[54px]" />
              </a>
              <label className="peer-checked:hamburger hidden -block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
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
                <ul className="relative top-[5px] space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0 lg:space-x-4">
                  {/* <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <Image
                        src={iconWeb}
                        alt="Web"
                        className="block w-[48px] h-[48px]"
                      />
                    </a>
                  </li> */}
                  <Unless condition={isLoggedIn}>
                    <li>
                      <SignIn />
                    </li>
                  </Unless>
                  <When condition={isLoggedIn}>
                    <li>
                      <div className="p-1 flex items-center overflow-hidden">
                        <Image
                          alt={user?.name!}
                          src={user?.image!}
                          width="40"
                          height="40"
                          className="h-[40px] w-[40px] rounded-full min-w-[40px] border-2 border-solid border-warning-default border-white/50"
                        />
                        <span className="ml-2 text-sm truncate">{user?.name}</span>
                        <div className="ml-2">
                          <SignOut />
                        </div>
                      </div>
                    </li>
                  </When>
                  <li>
                    <a
                      href="https://twitter.com/Monluminati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Image
                        src={iconX}
                        alt="X"
                        className="block w-[48px] h-[48px]"
                      />
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
