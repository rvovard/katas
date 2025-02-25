import { convertToDecimal, convertToRoman } from "./RomanNumeralsV1";

describe("Test roman numerals",() => {
  test("Convert to roman", () => {
    expect(convertToRoman(1)).toBe("I");
    expect(convertToRoman(2)).toBe("II");
    expect(convertToRoman(3)).toBe("III");
    expect(convertToRoman(4)).toBe("IV");
    expect(convertToRoman(5)).toBe("V");
    expect(convertToRoman(6)).toBe("VI");
    expect(convertToRoman(7)).toBe("VII");
    expect(convertToRoman(8)).toBe("VIII");
    expect(convertToRoman(9)).toBe("IX");
    expect(convertToRoman(10)).toBe("X");
    expect(convertToRoman(11)).toBe("XI");
    expect(convertToRoman(14)).toBe("XIV");
    expect(convertToRoman(19)).toBe("XIX");
    expect(convertToRoman(20)).toBe("XX");
    expect(convertToRoman(33)).toBe("XXXIII");
    expect(convertToRoman(49)).toBe("XLIX");
    expect(convertToRoman(50)).toBe("L");
    expect(convertToRoman(60)).toBe("LX");
    expect(convertToRoman(99)).toBe("XCIX");
    expect(convertToRoman(100)).toBe("C");
    expect(convertToRoman(499)).toBe("CDXCIX");
    expect(convertToRoman(500)).toBe("D");
    expect(convertToRoman(999)).toBe("CMXCIX");
    expect(convertToRoman(1000)).toBe("M");
    expect(convertToRoman(1888)).toBe("MDCCCLXXXVIII");
  })

  test("Convert to decimal", () => {
    expect(convertToDecimal("I")).toBe(1);
    expect(convertToDecimal("II")).toBe(2);
    expect(convertToDecimal("III")).toBe(3);
    expect(convertToDecimal("IV")).toBe(4);
    expect(convertToDecimal("V")).toBe(5);
    expect(convertToDecimal("VI")).toBe(6);
    expect(convertToDecimal("VII")).toBe(7);
    expect(convertToDecimal("VIII")).toBe(8);
    expect(convertToDecimal("IX")).toBe(9);
    expect(convertToDecimal("X")).toBe(10);
    expect(convertToDecimal("XI")).toBe(11);
    expect(convertToDecimal("XIV")).toBe(14);
    expect(convertToDecimal("XIX")).toBe(19);
    expect(convertToDecimal("XX")).toBe(20);
    expect(convertToDecimal("XXXIII")).toBe(33);
    expect(convertToDecimal("XLIX")).toBe(49);
    expect(convertToDecimal("L")).toBe(50);
    expect(convertToDecimal("LX")).toBe(60);
    expect(convertToDecimal("XCIX")).toBe(99);
    expect(convertToDecimal("C")).toBe(100);
    expect(convertToDecimal("CDXCIX")).toBe(499);
    expect(convertToDecimal("D")).toBe(500);
    expect(convertToDecimal("CMXCIX")).toBe(999);
    expect(convertToDecimal("M")).toBe(1000);
  })
})
