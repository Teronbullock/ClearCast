import { formatDateTime } from '@lib/dateUtils';
import { HourlyForecastItem } from '@app-types/weatherDataTypes';

type DailyAverage = {
  date: string; // e.g., '2025-08-23'
  avgTemp: number;
  count: number;
};

export const getDailyAverages = (
  forecast: HourlyForecastItem[]
): DailyAverage[] => {
  const todayDate = formatDateTime('monthAndDay').replace('/', '/');
  // const todayDateStr = `${todayDate[1]} ${todayDate[0]}`;

  const dailyMap: Record<string, { sum: number; count: number }> = {};

  forecast.forEach(item => {
    const listDate = formatDateTime('monthAndDay', item.dt).replace('/', '-');

    if (listDate === todayDate) return;
    // console.log('in loop', index, localDate, localDateStr);

    if (!dailyMap[listDate]) {
      dailyMap[listDate] = { sum: 0, count: 0 };
    }
    dailyMap[listDate].sum += item.main.temp;
    dailyMap[listDate].count += 1;
  });

  console.log('dailyMap', dailyMap);
  return Object.entries(dailyMap).map(([date, { sum, count }]) => ({
    date,
    avgTemp: sum / count,
    count,
  }));
};
