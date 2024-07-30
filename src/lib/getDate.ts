interface optInterface {
  hour12: boolean;
  hour: 'numeric' | '2-digit' | undefined;
  minute?: 'numeric' | '2-digit' | undefined;
  weekday?: 'short' | 'long' | 'narrow' | undefined;
  month?: 'short' | 'long' | 'narrow' | 'numeric' | '2-digit' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
}

type optType = 'min' | 'DMT' | '24hr';

/**
 * -- get date --
 * @param optType - optional type
 * @param timeInput - optional time input
 * @returns 
 */
export default function getDate(optType: optType | null = null, timeInput: null | number = null) {
  let date;

  const opt: optInterface = {
    hour12: true,
    hour: 'numeric',
  };

  // add minutes
  if (optType === 'min') {
    opt['minute'] = '2-digit';
  }

  // add day, month, day of month
  if (optType === 'DMT') {
    opt['weekday'] = 'short';
    opt['month'] = 'short';
    opt['day'] = 'numeric';
  }

  // get 24hour format
  if (optType === '24hr') {
    opt['hour12'] = false;
  }

  // check for date type
  if (timeInput) {
    // if timeInput exists convert to milliseconds
    timeInput = timeInput * 1000;
    date = new Date(timeInput);
  } else {
    date = new Date();
  }

  return date.toLocaleTimeString('en-US', opt);
}
