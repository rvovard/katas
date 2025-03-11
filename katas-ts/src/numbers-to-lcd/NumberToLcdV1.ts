const LCD_MAP: string[][] = [
  [" _ ","| |","|_|"],
  ["   ","  |","  |"],
  [" _ "," _|","|_ "],
  [" _ "," _|"," _|"],
  ["   ","|_|","  |"],
  [" _ ","|_ "," _|"],
  [" _ ","|_ ","|_|"],
  [" _ ","  |","  |"],
  [" _ ","|_|","|_|"],
  [" _ ","|_|"," _|"],
];

export function numberToLcd(value: number): string {
  let result = "";
  const strValue = value.toFixed();

  for (let line = 0; line < 3; line++) {
    for (let i = 0; i < strValue.length; i++) {
      const digit: number = parseInt(strValue[i]);
      result += LCD_MAP[digit][line];
    }
    result += "\n";
  }

  return result;
}

// top: boolean / topLeft
interface Digit {
  top: boolean;
  topLeft: boolean;
  topRight: boolean;
  center: boolean;
  bottomLeft: boolean;
  bottomRight: boolean;
  bottom: boolean;
}

/*
Also possible to refactor center and bottom in only one function

interface Line {
  left: boolean;
  middle: boolean;
  right: boolean;
}

interface Digit2 {
  top: boolean;
  center: Line;
  bottom: Line;
}
*/

const DIGIT_MAP: Record<string, Digit> = {
  "0": {top: true, topLeft: true, topRight: true, center: false, bottomLeft: true, bottomRight: true, bottom: true},
  "1": {top: false, topLeft: false, topRight: true, center: false, bottomLeft: false, bottomRight: true, bottom: false},
  "2": {top: true, topLeft: false, topRight: true, center: true, bottomLeft: true, bottomRight: false, bottom: true},
  "3": {top: true, topLeft: false, topRight: true, center: true, bottomLeft: false, bottomRight: true, bottom: true},
  "4": {top: false, topLeft: true, topRight: true, center: true, bottomLeft: false, bottomRight: true, bottom: false},
  "5": {top: true, topLeft: true, topRight: false, center: true, bottomLeft: false, bottomRight: true, bottom: true},
  "6": {top: true, topLeft: true, topRight: false, center: true, bottomLeft: true, bottomRight: true, bottom: true},
  "7": {top: true, topLeft: false, topRight: true, center: false, bottomLeft: false, bottomRight: true, bottom: false},
  "8": {top: true, topLeft: true, topRight: true, center: true, bottomLeft: true, bottomRight: true, bottom: true},
  "9": {top: true, topLeft: true, topRight: true, center: true, bottomLeft: false, bottomRight: true, bottom: true},
};

export function numberToLcdCustom(value: number, width: number, height: number): string {
  let result = "";
  const strValue = value.toFixed();

  // First line
  for (const chr of strValue) {
    result += " ";
    result += fill(width, DIGIT_MAP[chr].top);
    result += " ";
  }
  result += "\n";

  // Top + Center
  for (let line = 0; line < height; line++) {
    for (const chr of strValue) {
      result += DIGIT_MAP[chr].topLeft ? '|' : ' ';
      if (line === height - 1) {
        // Center
        result += fill(width, DIGIT_MAP[chr].center);
      } else {
        result += fill(width, false);
      }
      result += DIGIT_MAP[chr].topRight ? '|' : ' ';
    }
    result += "\n";
  }

  // Bottom
  for (let line = 0; line < height; line++) {
    for (const chr of strValue) {
      result += DIGIT_MAP[chr].bottomLeft ? '|' : ' ';
      if (line === height - 1) {
        // Last line
        result += fill(width, DIGIT_MAP[chr].bottom);
      } else {
        result += fill(width, false);
      }
      result += DIGIT_MAP[chr].bottomRight ? '|' : ' ';
    }
    result += "\n";
  }

  console.log(result);
  return result;
}

function fill(width: number, withChar: boolean): string {
  return new Array(width).fill(withChar ? '_' : ' ').join('');
}
