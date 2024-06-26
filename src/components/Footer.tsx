import { Globe } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import logo from '@/assets/logo--primary.svg';
import iconX from '@/assets/social--x.svg';

const Footer = () => {
  return (
    <div className="bg-[#0b0d1b] flex flex-col mx-auto mt-12">
      <div className="flex flex-col items-center w-full my-20">
        <span className="mb-8">
          <a className="relative z-10" href="#" aria-label="logo">
            <Image src={logo} alt="Monluminati Logo" className="h-[72px]" />
          </a>
        </span>
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
            <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0 lg:space-x-4">
              <li>
                <a href="monadata.ai" target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Globe className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/monadata_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Image src={iconX} alt="X" className="h-7 w-7" />
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
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
        <div className="flex items-center">
          <p className="text-base font-normal leading-7 text-center text-gray-500">
            © 2024 Monadata Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
