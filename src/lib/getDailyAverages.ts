import { formatDateTime } from '@lib/dateUtils';
import { HourlyForecastItem } from '@app-types/weatherDataTypes';

type DailyAverage = {
  date: string;
  count: number;
  minTemp: number;
  maxTemp: number;
};

type DailyMapType = {
  maxSum: number;
  minSum: number;
  count: number;
  main: string;
};

export const getDailyAverages = (
  forecast: HourlyForecastItem[]
): DailyAverage[] => {
  // console.log('forecast:', forecast);
  // const todayDate = formatDateTime('monthAndDay').replace('/', '-');
  const todayDate = formatDateTime('dayAndWeekday');
  const dailyMap: Record<string, DailyMapType> = {};

  forecast.forEach((item, index) => {
    let ranListDates = new Set();
    const listDate = formatDateTime('dayAndWeekday', item.dt);

    if (listDate === todayDate) {
      return;
    }

    if (!dailyMap[listDate]) {
      dailyMap[listDate] = { maxSum: 0, minSum: 0, count: 0, main: '' };
    }

    if (!ranListDates.has(listDate)) {
      dailyMap[listDate].main = item.weather[0].main;
    }

    dailyMap[listDate].maxSum += item.main.temp_max;
    dailyMap[listDate].minSum += item.main.temp_min;
    dailyMap[listDate].count += 1;

    ranListDates.add(listDate);
  });

  console.log('MapT', dailyMap);
  const dailyMapObj = Object.entries(dailyMap).map(
    ([date, { minSum, maxSum, count, main }]) => ({
      date,
      minTemp: Math.round(minSum / count),
      maxTemp: Math.round(maxSum / count),
      count,
      main,
    })
  );

  console.log('daily Map Obj', dailyMapObj);

  return dailyMapObj;
};
