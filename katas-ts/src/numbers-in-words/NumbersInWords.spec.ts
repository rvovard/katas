import { convertToNumber, convertToWords } from "./NumbersInWordsV1"

describe("Test numbers in words", () => {
  test("Convert to word", () => {
    expect(convertToWords(1)).toBe("un");
    expect(convertToWords(9)).toBe("neuf");
    expect(convertToWords(10)).toBe("dix");
    expect(convertToWords(11)).toBe("onze");
    expect(convertToWords(17)).toBe("dix-sept");
    expect(convertToWords(20)).toBe("vingt");
    expect(convertToWords(21)).toBe("vingt-et-un");
    expect(convertToWords(22)).toBe("vingt-deux");
    expect(convertToWords(70)).toBe("soixante-dix");
    expect(convertToWords(71)).toBe("soixante-et-onze");
    expect(convertToWords(72)).toBe("soixante-douze");
    expect(convertToWords(80)).toBe("quatre-vingts");
    expect(convertToWords(81)).toBe("quatre-vingt-un");
    expect(convertToWords(82)).toBe("quatre-vingt-deux");
    expect(convertToWords(90)).toBe("quatre-vingt-dix");
    expect(convertToWords(91)).toBe("quatre-vingt-onze");
    expect(convertToWords(100)).toBe("cent");
    expect(convertToWords(101)).toBe("cent-un");
    expect(convertToWords(200)).toBe("deux-cents");
    expect(convertToWords(372)).toBe("trois-cent-soixante-douze");
  });

  test("Convert to number", () => {
    expect(convertToNumber("un")).toBe(1);
    expect(convertToNumber("neuf")).toBe(9);
    expect(convertToNumber("dix")).toBe(10);
    expect(convertToNumber("onze")).toBe(11);
    expect(convertToNumber("dix-sept")).toBe(17);
    expect(convertToNumber("vingt")).toBe(20);
    expect(convertToNumber("vingt-et-un")).toBe(21);
    expect(convertToNumber("vingt-deux")).toBe(22);
    expect(convertToNumber("soixante-dix")).toBe(70);
    expect(convertToNumber("soixante-et-onze")).toBe(71);
    expect(convertToNumber("soixante-douze")).toBe(72);
    expect(convertToNumber("quatre-vingts")).toBe(80);
    expect(convertToNumber("quatre-vingt-un")).toBe(81);
    expect(convertToNumber("quatre-vingt-deux")).toBe(82);
    expect(convertToNumber("quatre-vingt-dix")).toBe(90);
    expect(convertToNumber("quatre-vingt-onze")).toBe(91);
    expect(convertToNumber("cent")).toBe(100);
    expect(convertToNumber("cent-un")).toBe(101);
    expect(convertToNumber("deux-cents")).toBe(200);
    expect(convertToNumber("trois-cent-soixante-douze")).toBe(372);
  })
});
