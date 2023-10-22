import getDate from './getDate';
import clear01 from '../img/clear01.jpg';
import clear02 from '../img/clear02.jpg';
import clouds01 from '../img/clouds01.jpg';
import clouds02 from '../img/clouds02.jpg';
import rain01 from '../img/rain01.jpg';
import rain02 from '../img/rain02.jpg';
import drizzle01 from '../img/drizzle01.jpg';
import drizzle02 from '../img/drizzle02.jpg';
import thunderstorm01 from '../img/thunderstorm01.jpg';
import thunderstorm02 from '../img/thunderstorm02.jpg';
import snow01 from '../img/snow01.jpg';
import snow02 from '../img/snow02.jpg';
import fog01 from '../img/fog01.jpg';
import fog02 from '../img/fog02.jpg';
import atmosphere01 from '../img/atmosphere01.jpg';



export default function getBackground(weatherCondition, timeOfDay) {
  
  let bgOBJ = {};
  let sunrise;
  let sunset;


  if (timeOfDay) {
    sunrise = getDate('time','24hr',timeOfDay.sunrise);
    sunset = getDate('time','24hr',timeOfDay.sunset);
  } else {
    sunrise = getDate('time','24hr',);
    sunset = getDate('time','24hr',);
  }
 

  if (!timeOfDay) {
    return clear01;

  } else if (
    sunrise < getDate('time','24hr') &&
    sunset > getDate('time','24hr')
  ) {
    switch (weatherCondition) {
      default:
        bgOBJ.URL = clear01;
        bgOBJ.color = '#285e9c';
        break;
      case 'Clear':
        bgOBJ.URL = clear01;
        bgOBJ.color = '#285e9c';
        break;
      case 'Clouds':
        bgOBJ.URL = clouds01;
        bgOBJ.color = '#008d9b';
        break;
      case 'Rain':
        bgOBJ.URL = rain01;
        bgOBJ.color = '#404149';
        break;
      case 'Drizzle':
        bgOBJ.URL = drizzle01;
        bgOBJ.color = '#577376';
        break;
      case 'Thunderstorm':
        bgOBJ.URL = thunderstorm01;
        bgOBJ.color = '#63717d';
        break;
      case 'Snow':
        bgOBJ.URL = snow01;
        bgOBJ.color = '#7d8aa0';
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgOBJ.URL = fog01;
        bgOBJ.color = '#404049';
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgOBJ.URL = atmosphere01;
        bgOBJ.color = '#8d9dae';
        break;
    }
    return bgOBJ;

  } else {
    switch (weatherCondition) {
      default:
        bgOBJ.URL = clear02;
        bgOBJ.color = '#543e3f';
        break;
      case 'Clear':
        bgOBJ.URL = clear02;
        bgOBJ.color = '#543e3f';
        break;
      case 'Clouds':
        bgOBJ.URL = clouds02;
        bgOBJ.color = '#082d3e';
        break;
      case 'Rain':
        bgOBJ.URL = rain02;
        bgOBJ.color = '#23495e';
        break;
      case 'Drizzle':
        bgOBJ.URL = drizzle02;
        bgOBJ.color = '#686868';
        break;
      case 'Thunderstorm':
        bgOBJ.URL = thunderstorm02;
        bgOBJ.color = '#e9af7d';
        break;
      case 'Snow':
        bgOBJ.URL = snow02;
        bgOBJ.color = '#1e1e1e';  
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgOBJ.URL = fog02;
        bgOBJ.color = '#34333b';
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgOBJ.URL = atmosphere01;
        bgOBJ.color = '#8d9dae';
        break;
    }
    return bgOBJ;
  }

};