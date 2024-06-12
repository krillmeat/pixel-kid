import { LOG_COLOR, debugLog, gameLog, warningLog } from "../../../src/utils/log.utils";
import { CFG } from "../../../src/config";

jest.mock('../../../src/config.js');

const MOCK_MESSAGE = "Testing console logging";

describe('Logger Utility', () => {
  beforeEach(()=>{
    console.log = jest.fn();
  })
  describe('Game Logger', () => {
    test('If a message is passed in alone to Game Logger, will log the message', () => {
      gameLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything())
    })

    test('If a message is passed in with an object to Game Logger, will log the message, plus the object', () => {
      gameLog(MOCK_MESSAGE,"specific string");
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything(),"specific string");
    })

    test('When a Game Log is called, it will log in the correct color', () => {
      gameLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(expect.anything(),`color:#${LOG_COLOR.GAME}`);
    })

    test('Game Logs will log, even if Debug is disabled', () => {
      CFG.debug = false;
      gameLog(MOCK_MESSAGE);
      expect(console.log).toBeCalled();
    })
  })

  describe('Debug Logger', () => {
    beforeEach(()=>{CFG.debug = true })

    test('Debug Logs will log when the Debug is enabled', () => {
      debugLog(MOCK_MESSAGE);
      expect(console.log).toBeCalled();
    })

    test('Debug Logs will not log when the Debug is disabled', () => {
      CFG.debug = false;
      debugLog(MOCK_MESSAGE);
      expect(console.log).not.toBeCalled();
    })

    test('If a message is passed in alone to Debug Logger, will log the message', () => {
      debugLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything())
    })

    test('If a message is passed in with an object to Debug Logger, will log the message, plus the object', () => {
      debugLog(MOCK_MESSAGE,"specific string");
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything(),"specific string");
    })

    test('When a Debug Log is called, it will log in the correct color', () => {
      debugLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(expect.anything(),`color:#${LOG_COLOR.DEBUG}`);
    })
  })

  describe('Warning Logger', () => {
    beforeEach(()=>{CFG.debug = true })

    test('Warning Logs will log when the Debug is enabled', () => {
      warningLog(MOCK_MESSAGE);
      expect(console.log).toBeCalled();
    })

    test('Warning Logs will not log when the Debug is disabled', () => {
      CFG.debug = false;
      warningLog(MOCK_MESSAGE);
      expect(console.log).not.toBeCalled();
    })

    test('If a message is passed in alone to Warning Logger, will log the message', () => {
      warningLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything())
    })

    test('If a message is passed in with an object to Warning Logger, will log the message, plus the object', () => {
      warningLog(MOCK_MESSAGE,"specific string");
      expect(console.log).toBeCalledWith(`%c${MOCK_MESSAGE}`,expect.anything(),"specific string");
    })

    test('When a Warning Log is called, it will log in the correct color', () => {
      warningLog(MOCK_MESSAGE);
      expect(console.log).toBeCalledWith(expect.anything(),`color:#${LOG_COLOR.WARNING}`);
    })
  })
})
