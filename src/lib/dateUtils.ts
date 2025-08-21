type FormatType =
  | 'time12hr'
  | 'time24hr'
  | 'timeWithMinutes'
  | 'dateAndTime'
  | 'weekdayDay'
  | 'dayAndWeekday'
  | 'monthAndDay';

/**
 * Formats a given Unix timestamp or the current date and time into a human-readable string based on a specified format type.
 */
export const formatDateTime = (
  formatType: FormatType,
  unixTime?: number | null,
  timezoneOffset?: number,
  locale: string = 'en-US'
) => {
  if (!formatType) return '';

  const formatOptions: Record<FormatType, Intl.DateTimeFormatOptions> = {
    time12hr: { hour: 'numeric', hour12: true },
    time24hr: { hour: 'numeric', hour12: false },
    timeWithMinutes: { hour: 'numeric', minute: '2-digit' },
    dateAndTime: {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    dayAndWeekday: {
      weekday: 'short',
      day: 'numeric',
    },
    monthAndDay: { month: '2-digit', day: '2-digit' },
  };

  let date: Date;

  if (unixTime) {
    date =
      timezoneOffset && unixTime
        ? new Date((unixTime + timezoneOffset) * 1000)
        : new Date(unixTime * 1000);
  } else {
    date = new Date();
  }

  const options = timezoneOffset
    ? { ...formatOptions[formatType], timeZone: 'UTC' }
    : formatOptions[formatType];

  return new Intl.DateTimeFormat(locale, options).format(date);
};
