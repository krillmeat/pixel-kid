import { CFG } from "../../config";
export const TILE_SIZE = 8;

/** Uses the Config to calculate the tile size */
export const getTileSize = () => TILE_SIZE * CFG.screenSize;

/** 
 * Takes an RGB value (0-255) and converts it into a 16 Bit Value (00-FF)
 * @param {number}  value RGB Number from 0-255
 * @returns Hex Code Value, converted to Uppercase (00-FF)
 */
export const _convertToSixteenBit = value => {
  let hex = value.toString(16).toUpperCase();
  return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Converts three RGB values to a Hex Color Code (without the #)
 * @param {Object}  rbgValue
 * @param {number}  rbgValue.r  Red value
 * @param {number}  rbgValue.g  Green value
 * @param {number}  rbgValue.b  Blue value
 * @returns Hex Color Code (without the #)
 */
export const convertRGBtoHex = ({r=0,g=0,b=0}) => _convertToSixteenBit(r)+""+_convertToSixteenBit(g)+""+_convertToSixteenBit(b);
