import { CFG } from "../../config";
import { AH } from '../../action-handler';
import { debugLog } from "../../utils/log.utils";

export const SCREEN_WIDTH = 160;
export const SCREEN_HEIGHT = 144;

export class Screen{
  constructor(){
    this.screenElem;
    this.width = SCREEN_WIDTH * CFG.screenSize;
    this.height = SCREEN_HEIGHT * CFG.screenSize;

    this.layer;
  }

  /**
   * Initializes the Screen. Sets up the Action Handler and builds necessary components.
   */ /* istanbul ignore next */
  init = () => {
    debugLog(`Connecting System Screen @${CFG.screenSize}X (${this.width} x ${this.height}) `);
    
    this.initActionHandler();
    this.connectScreen();
  }

  /**
   * Connects the Screen Class to the Screen Node in the HTML
   */
  connectScreen = () => {
    this.screenElem = document.getElementById('game-screen');
    this.screenElem.style.width = this.width+'px'; 
    this.screenElem.style.height = this.height+'px';
  }

  /**
   * Initializes the Action Handler for the Screen
   */ /* istanbul ignore next */
   initActionHandler = () => {
    AH.SCREEN = {};
  }

  /**
   * Cleans up everything related to the Screen so it can be cleanly deleted.
   */
  kill = () => {
    AH.SCREEN = undefined;
  }
}
