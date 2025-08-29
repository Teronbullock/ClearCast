import { formatDateTime } from '@lib/formatDateTime';
import { HourlyForecastItem, DailyAverage } from '@app-types/weatherDataTypes';

type DailyMapType = {
  temp: number;
  icon: string;
  description: string;
};

export const getDailyAverages = (
  forecast: HourlyForecastItem[]
): DailyAverage[] => {
  const todayDate = formatDateTime('dayAndWeekday');
  const dailyMap: Record<string, DailyMapType> = {};

  forecast.forEach(item => {
    const itemDate = formatDateTime('dayAndWeekday', item.dt);
    const itemTime = formatDateTime('time12hr', item.dt).replace(' ', '');

    if (itemDate === todayDate) {
      return;
    }

    if (!dailyMap[itemDate]) {
      dailyMap[itemDate] = {
        temp: 0,
        description: '',
        icon: '',
      };
    }

    if ('11AM' === itemTime) {
      dailyMap[itemDate].description = item.weather[0].description;
      dailyMap[itemDate].icon = item.weather[0].icon;
      dailyMap[itemDate].temp = Math.round(item.main.temp);
    } else if ('2AM' === itemTime) {
      dailyMap[itemDate].description = item.weather[0].description;
      dailyMap[itemDate].icon = item.weather[0].icon;
      dailyMap[itemDate].temp = Math.round(item.main.temp);
    }
  });

  const dailyMapObj = Object.entries(dailyMap).map(
    ([date, { temp, description, icon }]) => ({
      date: date.split(' ')[0],
      temp,
      description,
      icon,
    })
  );

  return dailyMapObj;
};
