import { StaticImageData } from 'next/image';
import { getDate } from '@lib/getDate';
import clear01 from '../../public/assets/img/clear01.jpg';
import clear02 from '../../public/assets/img/clear02.jpg';
import clouds01 from '../../public/assets/img/clouds01.jpg';
import clouds02 from '../../public/assets/img/clouds02.jpg';
import rain01 from '../../public/assets/img/rain01.jpg';
import rain02 from '../../public/assets/img/rain02.jpg';
import drizzle01 from '../../public/assets/img/drizzle01.jpg';
import drizzle02 from '../../public/assets/img/drizzle02.jpg';
import thunderstorm01 from '../../public/assets/img/thunderstorm01.jpg';
import thunderstorm02 from '../../public/assets/img/thunderstorm02.jpg';
import snow01 from '../../public/assets/img/snow01.jpg';
import snow02 from '../../public/assets/img/snow02.jpg';
import fog01 from '../../public/assets/img/fog01.jpg';
import fog02 from '../../public/assets/img/fog02.jpg';
import atmosphere01 from '../../public/assets/img/atmosphere01.jpg';

export const getBackground = (
  weatherCondition: string,
  timeOfDay: { sunrise: number; sunset: number }
): { bgImg: string; bgColor: string } => {
  let bgImgObj: StaticImageData;
  let bgColor = '';
  let bgImg = '';
  let sunrise;
  let sunset;

  if (timeOfDay) {
    sunrise = getDate('24hr', timeOfDay.sunrise);
    sunset = getDate('24hr', timeOfDay.sunset);
  } else {
    sunrise = getDate('24hr');
    sunset = getDate('24hr');
  }

  if (!timeOfDay) {
    bgImgObj = clear01;
  } else if (sunrise < getDate('24hr') && sunset > getDate('24hr')) {
    switch (weatherCondition) {
      case 'Clear':
      default:
        bgImgObj = clear01;
        bgColor = '#285e9c';
        break;
      case 'Clouds':
        bgImgObj = clouds01;
        bgColor = '#008d9b';
        break;
      case 'Rain':
        bgImgObj = rain01;
        bgColor = '#404149';
        break;
      case 'Drizzle':
        bgImgObj = drizzle01;
        bgColor = '#577376';
        break;
      case 'Thunderstorm':
        bgImgObj = thunderstorm01;
        bgColor = '#63717d';
        break;
      case 'Snow':
        bgImgObj = snow01;
        bgColor = '#7d8aa0';
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgImgObj = fog01;
        bgColor = '#404049';
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgImgObj = atmosphere01;
        bgColor = '#8d9dae';
        break;
    }
  } else {
    switch (weatherCondition) {
      case 'Clear':
      default:
        bgImgObj = clear02;
        bgColor = '#543e3f';
        break;
      case 'Clouds':
        bgImgObj = clouds02;
        bgColor = '#082d3e';
        break;
      case 'Rain':
        bgImgObj = rain02;
        bgColor = '#23495e';
        break;
      case 'Drizzle':
        bgImgObj = drizzle02;
        bgColor = '#686868';
        break;
      case 'Thunderstorm':
        bgImgObj = thunderstorm02;
        bgColor = '#e9af7d';
        break;
      case 'Snow':
        bgImgObj = snow02;
        bgColor = '#1e1e1e';
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgImgObj = fog02;
        bgColor = '#34333b';
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgImgObj = atmosphere01;
        bgColor = '#8d9dae';
        break;
    }
  }

  // add bg img src to bgImg
  bgImg = bgImgObj.src;

  return { bgImg, bgColor };
};
