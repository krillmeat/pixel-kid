import { CFG } from "../config";

export const LOG_COLOR = {
  DEBUG: "A6E22E",
  GAME: "75715E",
  WARNING: "E6DB74"
}

/**
 * Logs client message, which shows up even when not in debug mode
 * @param {String} message Message to warn
 * @param {Object} object Extra data to log
 */
export const gameLog = (message,object) => {
  object ? console.log(`%c${message}`,'color:#75715E',object) : console.log(`%c${message}`,'color:#75715E');
}

/**
  * Logs Debug messages, which are more verbose than Game Logs
  * Used only when debug=true is set in the URL Params
  * @param {String} message Message to warn
  * @param {Object} object Extra data to log
  */
export const debugLog = (message,object) => {
  if(CFG.debug)
    object ? console.log(`%c${message}`,'color:#A6E22E',object) : console.log(`%c${message}`,'color:#A6E22E');
}

/**
 * Logs Warning, which should be used for when something is setup incorrectly
 * Used only when debug=true is set in the URL Params
 * @param {String} message Message to warn
 * @param {Object} object Extra data to log
 */
export const warningLog = (message,object) => {
  if(CFG.debug)
    object ? console.log(`%c${message}`,'color:#E6DB74',object) : console.log(`%c${message}`,'color:#E6DB74');
}
