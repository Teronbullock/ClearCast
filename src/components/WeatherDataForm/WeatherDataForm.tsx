'use client';

import { useWeatherDataForm } from './useWeatherDataForm';

export const WeatherDataForm = () => {
  const {
    isPlaceholder,
    handleInputChange,
    handleInputFocus,
    handInputBlur,
    handleFromSubmit,
    inputValue,
  } = useWeatherDataForm();

  return (
    <form className='form w-full' onSubmit={handleFromSubmit}>
      <input
        id='form__input'
        className='form__input h-[40px] block text-center bg-[#FBFDFF00] text-xs rounded-[8px] border border-white placeholder:text-white sm:text-base w-full text-white'
        type='text'
        name='searchinput'
        placeholder={isPlaceholder ? 'Zip Code or City, State' : ' '}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handInputBlur}
        value={inputValue}
      />
    </form>
  );
};
