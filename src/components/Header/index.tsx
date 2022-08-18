import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Header: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className='w-full flex-row flex-nowrap justify-start flex items-center'>
      <div className='w-full items-center flex justify-between flex-nowrap'>
        <div className='flex-row flex justify-center items-center ml-auto'>
          <div className='flex-row list-none items-center flex'>
            <button
              className='text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <svg className='fill-current text-gray-800 dark:text-gray-50' viewBox='0 0 512 512'>
                  <path
                    d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              ) : (
                <svg className='fill-current text-gray-800 dark:text-gray-50' viewBox='0 0 512 512'>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='32'
                    d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'
                  />
                  <circle
                    cx='256'
                    cy='256'
                    r='80'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='32'
                  />
                </svg>
              )}
            </button>
            <div className='w-8 h-8 ml-4'>
              <Image src='/avatar.jpg' layout='fill' objectFit='cover' className='rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
