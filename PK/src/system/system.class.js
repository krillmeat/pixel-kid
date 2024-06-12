import { debugLog } from "../utils/log.utils";
import { AH } from '../action-handler';
import { Screen } from "./screen/screen.class";

export class System{
  /** The Pixel Kid System */
  constructor(){
    this.game;
    this.screen;
    this.controllers = [];
    this.speaker;
  }

  /** Initializes the System. Sets up the Action Handler, Connects Screen, Controller, Game, etc. */ /* istanbul ignore next */
  init = () => {
    debugLog("Starting System");
    this.initActionHandler();
    this.connectSystemScreen();
    // this.connectControllers(1);
    // this.connectSpeaker();
  }

  /** Creates and Initializes the Screen and connects it to the System */
  connectSystemScreen = () => {
    this.screen = new Screen();
    this.screen.init();
  }

  /** Initializes the Action Handler for the System */ /* istanbul ignore next */
  initActionHandler = () => {
    AH.SYSTEM = {};
  }

  /** Cleans up everything related to the System so it can be cleanly deleted. */
  kill = () => {
    AH.SYSTEM = undefined;
  }
}
