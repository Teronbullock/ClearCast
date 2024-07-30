export function windDir(input: number) {
  let deg;

  if (input >= 350 || input <= 19) {
    deg = 'N';
  } else if (input >= 20 && input <= 39) {
    deg = 'N/NE';
  } else if (input >= 40 && input <= 59) {
    deg = 'NE';
  } else if (input >= 60 && input <= 79) {
    deg = 'E/NE';
  } else if (input >= 80 && input <= 109) {
    deg = 'E';
  } else if (input >= 110 && input <= 129) {
    deg = 'E/SE';
  } else if (input >= 130 && input <= 149) {
    deg = 'SE';
  } else if (input >= 150 && input <= 169) {
    deg = 'S/SE';
  } else if (input >= 170 && input <= 199) {
    deg = 'S';
  } else if (input >= 200 && input <= 219) {
    deg = 'S/SW';
  } else if (input >= 220 && input <= 239) {
    deg = 'SW';
  } else if (input >= 240 && input <= 259) {
    deg = 'W/SW';
  } else if (input >= 260 && input <= 289) {
    deg = 'W';
  } else if (input >= 290 && input <= 309) {
    deg = 'W/NW';
  } else if (input >= 310 && input <= 329) {
    deg = 'NW';
  }

  return deg;
}

export function pressure(input: number) {
  const pressureInput = input / 33.864;
  return pressureInput.toFixed(2);
}
