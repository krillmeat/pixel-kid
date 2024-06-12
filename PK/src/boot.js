/* istanbul ignore file */

import { CFG } from "./config";
import { gameLog } from "../src/utils/log.utils";
import { System } from "./system/system.class";

window.onload = function () {
  init();
};

/**
 * This is the Root Initializer that Sets up the System
 */
var init = function init() {
  gameLog(`Booting for ${CFG.userName}...`);
  let system = new System();
  setTimeout(()=>{
    system.init();
  }, 1000);
};
