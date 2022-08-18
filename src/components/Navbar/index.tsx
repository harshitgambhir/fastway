import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faWallet,
  faUser,
  faUserGroup,
  faEnvelope,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <nav
      className={`left-0 fixed top-0 bottom-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow items-center justify-between w-56 z-10 py-4 `}
    >
      <div className='flex-col items-stretch min-h-full flex-nowrap px-0 flex justify-between w-full mx-auto'>
        <div className='flex flex-row justify-between border-b border-white py-6'>
          <div className='font-light text-2xl text-center text-white mx-auto'>Traders Block</div>
        </div>
        <div className='flex flex-col items-stretch opacity-100 relative mt-4 shadow-none top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded'>
          <ul className='flex-col min-w-full flex list-none'>
            {[
              {
                name: 'Dashboard',
                icon: faHome,
              },
              {
                name: 'Asset',
                icon: faWallet,
              },
              {
                name: 'Transaction hall',
                icon: faWallet,
              },
              {
                name: 'Personal info',
                icon: faUser,
              },
              {
                name: 'KYC',
                icon: faEnvelope,
              },
              {
                name: 'My Team',
                icon: faUserGroup,
              },
              {
                name: 'Settings',
                icon: faGear,
              },
            ].map(menu => {
              return (
                <li className={`items-center text-sm px-6 ${menu.name === 'My Team' ? 'pr-0' : ''}`} key={menu.name}>
                  {menu.name === 'My Team' ? (
                    <div className='bg-gray-100 dark:bg-slate-800 text-tertiary rounded-l-full py-3 px-3 block text-blue-700 dark:text-blue-500'>
                      <FontAwesomeIcon icon={menu.icon} className='opacity-75' />
                      <span className='ml-4'>{menu.name}</span>
                    </div>
                  ) : (
                    <div className='py-3 px-3 block'>
                      <FontAwesomeIcon icon={menu.icon} className='opacity-75 text-white' />
                      <span className='ml-4 text-white'>{menu.name}</span>
                    </div>
                  )}
                </li>
              );
            })}
            <li className={`items-center text-sm px-6 border-t border-white mt-6`}>
              <div className='py-3 px-3 block'>
                <FontAwesomeIcon icon={faSignOut} className='opacity-75 text-white' />
                <span className='ml-4 text-white'>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
