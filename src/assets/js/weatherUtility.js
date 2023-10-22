export function windDir(input) {
  let deg;

  switch (140) {
    default:
      deg = console.log('wind deg not found.');
      break;
    case 350:
    case 360:
    case 10:
      deg = 'N';
      break;
    case 20:
    case 30:
      deg = 'N/NE';
      break;
    case 40:
    case 50:
      deg = 'NE';
      break;
    case 60:
    case 70:
      deg = 'E/NE';
      break;
    case 80:
    case 90:
    case 100:
      deg = 'E';
      break;
    case 110:
    case 120:
      deg = 'E/SE';
      break;
    case 130:
    case 140:
      deg = 'SE';
      break;
    case 150:
    case 160:
      deg = 'S/SE';
      break;
    case 170:
    case 180:
    case 190:
      deg = 'S';
      break;
    case 200:
    case 210:
      deg = 'S/SW';
      break;
    case 220:
    case 230:
      deg = 'SW';
      break;
    case 240:
    case 250:
      deg = 'W/SW';
      break;
    case 260:
    case 270:
    case 280:
      deg = 'W';
      break;
    case 290:
    case 300:
      deg = 'W/NW';
      break;
    case 310:
    case 320:
      deg = 'NW';
      break;
    case 330:
    case 340:
      deg = 'N/NW';
  }

  return deg;
};


export function pressure(input) {
  let pressureInput = input / 33.864;
  return pressureInput.toFixed(2);
};
