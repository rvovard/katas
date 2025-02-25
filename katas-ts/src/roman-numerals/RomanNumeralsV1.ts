export function convertToRoman(normal: number): string {
  const thousands = Math.floor(normal / 1000);
  const hundreds = Math.floor((normal % 1000) / 100);
  const tens = Math.floor((normal % 100) / 10);
  const units = normal % 10;

  const result = _expand("M", thousands) + _expand("C", hundreds) + _expand("X", tens) + _expand("I", units);
  return result;
}

const NUMERALS: string[] = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function _expand(letter: string, nb: number): string {

  const letterIdx: number = NUMERALS.indexOf(letter);

  if (nb === 0) {
    return "";
  } else if (nb <= 3) { // 1 - 3
    return new Array(nb).fill(letter).join('');
  } else if (nb === 4) { // 4
    return letter + NUMERALS[letterIdx + 1];
  } else if (nb === 5) { // 5 
    return NUMERALS[letterIdx + 1];
  } else if (nb <= 8) { // 6 - 8
    return NUMERALS[letterIdx + 1] + new Array(nb % 5).fill(letter).join('');
  } else { // 9
    return letter + NUMERALS[letterIdx + 2];
  }
}

const NUMERALS_MAP: Record<string, number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

export function convertToDecimal(roman: string): number {
  let result = 0;
  for (let i = 0; i < roman.length - 1; i++) {
    if (_isSuperior(roman[i + 1], roman[i])) {
      result -= NUMERALS_MAP[roman[i]];
    } else {
      result += NUMERALS_MAP[roman[i]];
    }
  }
  result += NUMERALS_MAP[roman[roman.length - 1]];
  return result;
}

function _isSuperior(c1: string, c2: string): boolean {
  return NUMERALS.indexOf(c1) > NUMERALS.indexOf(c2);
}
