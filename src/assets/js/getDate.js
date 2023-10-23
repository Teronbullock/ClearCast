// get date
export default function getDate(dateType, optType = null, input = null ) {
  let date;
  let timeInput = input;

  const opt = {
    hour12: true,
    hour:   'numeric'
  };
  
  // add minutes
  if ( ( optType !== null && optType.trim().length !== 0 ) || optType === 'min') {
    opt['minute'] = '2-digit';
  }

  // add day, month, day of month
  if ( optType === 'DMT') {
    opt['weekday'] = 'short';
    opt['month'] = 'short'; 
    opt['day'] = 'numeric';
  }

  // get 24hour format
  if (optType === '24hr') {
    opt['hour12'] = false;
  }

  // check for date type
  if (dateType === 'time' && timeInput) {

    // if timeInput exists convert to milliseconds
    timeInput = timeInput * 1000;
    date = new Date(timeInput);  

  } else {
    date = new Date();
  }
  
  return date.toLocaleTimeString('en-US', opt);
}