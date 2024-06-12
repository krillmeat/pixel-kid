import { CFG } from "../../../../src/config";
import { AH } from "../../../../src/action-handler";
import { SCREEN_WIDTH, SCREEN_HEIGHT, Screen } from "../../../../src/system/screen/screen.class";
import { convertRGBtoHex, _convertToSixteenBit } from "../../../../src/system/screen/screen.utils";

describe('Screen Class', () => {
  describe('Initialize', () => {
    test('Screen will have appropriate width depending on default and CFG', () => {
      let screen = new Screen();
      expect(screen.width).toBe(SCREEN_WIDTH * CFG.screenSize);
    })
    test('Screen will have appropriate height depending on default and CFG', () => {
      let screen = new Screen();
      expect(screen.height).toBe(SCREEN_HEIGHT * CFG.screenSize);
    })
  })

  describe('Killing', () => {
    test('Killing the Screen will clear out Action Handler', () => {
      let screen = new Screen();
      screen.init();
      expect(AH.SCREEN).toBeDefined();
      screen.kill();
      expect(AH.SCREEN).not.toBeDefined();
    })
  })

  describe('Utilities', () => {
    describe('RGB to Hex', () => {
      describe('16 BIT Conversion', () => {
        test('0 should become 00', () => { expect(_convertToSixteenBit(0)).toBe("00") })
        test('1 should become 01', () => { expect(_convertToSixteenBit(1)).toBe("01") })
        test('15 should gecome 0F', ()=> { expect(_convertToSixteenBit(15)).toBe("0F") })
        test('16 should gecome 10', ()=> { expect(_convertToSixteenBit(16)).toBe("10") })
        test('60 should gecome 3C', ()=> { expect(_convertToSixteenBit(60)).toBe("3C") })
        test('255 should become FF', () => { expect(_convertToSixteenBit(255)).toBe("FF") })
      });

      test('0,0,0 should become 000000', () => { expect(convertRGBtoHex({r:0,g:0,b:0})).toBe("000000") })
      test('255,255,255 should become FFFFFF', () => { expect(convertRGBtoHex({r:255,b:255,g:255})).toBe("FFFFFF") });
      test('0,0,255 should become 00FF00', () => { expect(convertRGBtoHex({r:0,g:255,b:0})).toBe("00FF00") });
      test('0,255,255 should become 00FFFF', () => { expect(convertRGBtoHex({r:0,g:255,b:255,})).toBe("00FFFF") });
      test('15,79,152 should become 0F4F98', () => { expect(convertRGBtoHex({r:15,g:79,b:152})).toBe("0F4F98") });

      test('Should not include actual hex icon', () => { expect(convertRGBtoHex({r:0,g:0,b:0}).indexOf("#")).toBe(-1) });
    })
  })
})