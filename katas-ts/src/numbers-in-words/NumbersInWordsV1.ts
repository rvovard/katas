const UNITS_MAP: Record<number, string> = {
  0: '',
  1: 'un',
  2: 'deux',
  3: 'trois',
  4: 'quatre',
  5: 'cinq',
  6: 'six',
  7: 'sept',
  8: 'huit',
  9: 'neuf',
}
const TENS_MAP: Record<number, string> = {
  0: '',
  1: 'dix',
  2: 'vingt',
  3: 'trente',
  4: 'quarante',
  5: 'cinquante',
  6: 'soixante',
  7: 'soixante',
  8: 'quatre-vingt',
  9: 'quatre-vingt',
}

const TEN_PLUS_MAP: Record<number, string> = {
  0: 'dix',
  1: 'onze',
  2: 'douze',
  3: 'treize',
  4: 'quatorze',
  5: 'quinze',
  6: 'seize',
  7: 'dix-sept',
  8: 'dix-huit',
  9: 'dix-neuf',
}

const HUNDRED: string = 'cent';
const AND: string = 'et';

export function convertToWords(nb: number): string {

  const units: number = nb % 10;
  const tens: number = (nb % 100 - units) / 10;
  const hundreds: number = (nb - tens * 10 - units) / 100;

  let parts: string[] = [];

  // Hundreds
  if (hundreds === 1) {
    parts.push(HUNDRED);
  } else if (hundreds > 1) {
    parts.push(UNITS_MAP[hundreds]);
    parts.push(HUNDRED);
  }

  // Tens
  if (tens > 1) {
    parts.push(TENS_MAP[tens]);
  }

  if (tens >= 2 && tens <= 7 && units === 1) {
    parts.push(AND);
  }

  // Units
  if ([1, 7, 9].includes(tens)) {
    parts.push(TEN_PLUS_MAP[units]);
  } else {
    parts.push(UNITS_MAP[units]);
  }

  // Result
  const result = parts.filter(s => s != '').join('-');

  if (result.endsWith(`-${HUNDRED}`) || result.endsWith(TENS_MAP[8])) return result + 's';
  return result;
}

export function convertToNumber(str: string): number {
  return str.length.toString().split('').map(s => parseInt(s)).reduce((sum, n) => {return sum + n}, 0);
}
