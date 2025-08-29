'use client';

// import { MdOutlineMenu } from 'react-icons/md';
import { useHeader } from './useHeader';
import { WeatherDataForm } from '@components/WeatherDataForm/WeatherDataForm';
import MobileMenu from '@components/MobileMenu';

type Props = {
  isLoggedIn: boolean;
};

export const HeaderContainer = ({ isLoggedIn }: Props) => {
  const { mobileMenuStateHandler, isMenuOpen } = useHeader();

  return (
    <div className='header-content sm:mx-auto sm:w-[640px] lg:w-[940px] xl:w-[1240px]'>
      <div className='flex items-center justify-between w-full px-4'>
        <WeatherDataForm />
        {/* <button className='account-icon' onClick={mobileMenuStateHandler}>
          <MdOutlineMenu className='account-icon-svg h-[40px] w-[40px] text-white ms-3' />
        </button> */}
      </div>
      <MobileMenu
        classes='py-[4rem]'
        isMenuOpen={isMenuOpen}
        closeBtnHandler={mobileMenuStateHandler}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};
