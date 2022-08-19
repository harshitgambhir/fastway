import { useState } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <div className='bg-blue-700 dark:bg-slate-900 '>
      <Navbar />
      <div className='ml-56 min-h-full h-full py-4 pr-6 '>
        <div className='mx-auto w-full min-h-full bg-gray-100 dark:bg-slate-800 rounded-3xl p-4'>
          <Header />
          <div className='text-xl font-medium'>My Team</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 rounded'>
            <div className='rounded bg-gray-100 dark:bg-slate-700 shadow-lg p-8'>
              <div className='grid grid-cols-2 gap-4'>
                <div className=' p-4 rounded dark:bg-slate-600 shadow-lg'>
                  <div className='font-medium'>Total Incomes</div>
                  <div className='text-blue-700 dark:text-white text-xl font-medium'>612.785</div>
                </div>
                <div className=' p-4 rounded dark:bg-slate-600 shadow-lg'>
                  <div className='font-medium'>Residual Incomes</div>
                  <div className='text-blue-700 dark:text-white text-xl font-medium'>10.785</div>
                </div>
              </div>
              <button className='bg-blue-700 dark:bg-blue-500 rounded-md text-white text-center p-2 text-sm mt-8 w-full'>
                Receive
              </button>
            </div>
            <div className='rounded bg-gray-100 dark:bg-slate-700 shadow-lg p-8'>
              <div className='font-medium'>Referral System</div>
              <div className='mt-3 text-gray-500'>Earn 10% for direct referrals and 5% for indirect referrals</div>
              <div className='h-24 w-full mt-4'>
                <Image src='/referral.jpg' layout='fill' objectFit='contain' />
              </div>
            </div>
          </div>
          <div className='mt-8 relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-700 w-full mb-6 shadow rounded'>
            <div className='block w-full overflow-x-auto'>
              <table className='items-center w-full bg-transparent border-collapse'>
                <thead className='border-b'>
                  <tr>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle py-4 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      ID Number
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle py-4 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      Nickname
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle py-4 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      Registration Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      076854
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Dave4demi
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      08-05-22 10:40
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      869065
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Manie
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      04-05-22 12:00
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      786890
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Equinox
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      02-05-22 11:00
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      076854
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Dave4demi
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      08-05-22 10:40
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      869065
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Manie
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      04-05-22 12:00
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      786890
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      Equinox
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                      02-05-22 11:00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='w-full flex items-center justify-center border-t mt-4'>
                <FontAwesomeIcon icon={faChevronLeft} className='p-4 h-3 w-3' />
                <div className='p-2'>
                  <div className='bg-bg-blue-700 bg-blue-700 dark:bg-blue-500 text-white p-1 px-3 rounded-full'>1</div>
                </div>
                <div className='p-2'>
                  <div className='p-2'>2</div>
                </div>
                <div className='p-2'>
                  <div className='p-2'>3</div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-4 h-3 w-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
