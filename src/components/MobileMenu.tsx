'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { NextAuthLogout } from '@app/actions/next-auth-actions';

type MobileMenuType = {
  classes?: string;
  isMenuOpen: boolean;
  closeBtnHandler: () => void;
  isLoggedIn?: boolean;
};

const MobileMenu = ({
  classes,
  isMenuOpen,
  closeBtnHandler,
  isLoggedIn,
}: MobileMenuType) => {
  return (
    <div
      id='MobileMenu'
      className={classNames(
        'fixed top-0 left-0 bottom-0 bg-white z-[500] transition-width duration-300 ease-in-out delay-100 overflow-hidden text-center',
        {
          'w-full lg:w-0': isMenuOpen,
        },
        {
          'w-0 transition-all duration-300 ease-in-out': !isMenuOpen,
        },
        classes
      )}
    >
      <button
        className='z-[100] text-black absolute right-[1.5rem] top-[1.5rem] text-[1.5rem] font-bold'
        onClick={closeBtnHandler}
      >
        X
      </button>
      <div className='text-black flex flex-col text-[2rem]'>
        {isLoggedIn ? (
          <>
          <Link href='/cities'>
          </Link>
          <button
            onClick={() => {
              NextAuthLogout();
            }}
          >
            Logout
          </button>
          </>
        ) : (
          <>
            <Link href='/login' className='mb-[1.25rem] mt-[2rem]'>
              Login
            </Link>
            <Link href='/signup' className='text-[1rem] text-blue-500'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
