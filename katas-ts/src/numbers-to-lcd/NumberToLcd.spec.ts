import { numberToLcd, numberToLcdCustom } from "./NumberToLcdV1"

describe('Test number to LCD', () => {
  test('Convert simple digits to LCD', () => {
    expect(numberToLcd(0)).toBe(" _ \n| |\n|_|\n");
    expect(numberToLcd(1)).toBe("   \n  |\n  |\n");
    expect(numberToLcd(2)).toBe(" _ \n _|\n|_ \n");
    expect(numberToLcd(3)).toBe(" _ \n _|\n _|\n");
    expect(numberToLcd(4)).toBe("   \n|_|\n  |\n");
    expect(numberToLcd(5)).toBe(" _ \n|_ \n _|\n");
    expect(numberToLcd(6)).toBe(" _ \n|_ \n|_|\n");
    expect(numberToLcd(7)).toBe(" _ \n  |\n  |\n");
    expect(numberToLcd(8)).toBe(" _ \n|_|\n|_|\n");
    expect(numberToLcd(9)).toBe(" _ \n|_|\n _|\n");
  })

  test('Convert multiple digits to LCD', () => {
    expect(numberToLcd(10)).toBe("    _ \n  || |\n  ||_|\n");
    expect(numberToLcd(234)).toBe(" _  _    \n _| _||_|\n|_  _|  |\n");
  })
})

describe('Test number to LCD custom', () => {
  test('Convert simple digits to LCD custom', () => {
    expect(numberToLcdCustom(0,1,1)).toBe(" _ \n| |\n|_|\n");
    expect(numberToLcdCustom(1,1,1)).toBe("   \n  |\n  |\n");
    expect(numberToLcdCustom(2,1,1)).toBe(" _ \n _|\n|_ \n");
    expect(numberToLcdCustom(3,1,1)).toBe(" _ \n _|\n _|\n");
    expect(numberToLcdCustom(4,1,1)).toBe("   \n|_|\n  |\n");
    expect(numberToLcdCustom(5,1,1)).toBe(" _ \n|_ \n _|\n");
    expect(numberToLcdCustom(6,1,1)).toBe(" _ \n|_ \n|_|\n");
    expect(numberToLcdCustom(7,1,1)).toBe(" _ \n  |\n  |\n");
    expect(numberToLcdCustom(8,1,1)).toBe(" _ \n|_|\n|_|\n");
    expect(numberToLcdCustom(9,1,1)).toBe(" _ \n|_|\n _|\n");
    expect(numberToLcdCustom(0,2,2)).toBe(" __ \n|  |\n|  |\n|  |\n|__|\n");
    expect(numberToLcdCustom(2,3,2)).toBe(" ___ \n    |\n ___|\n|    \n|___ \n");
    expect(numberToLcdCustom(5,2,3)).toBe(" __ \n|   \n|   \n|__ \n   |\n   |\n __|\n");
  })
})

/*
 __ 
|  |
|  |
|  |
|__|

 ___ 
    |
 ___|
|    
|___

 __ 
|   
|   
|__ 
   |
   |
 __|
*/
