import { System } from "../../../src/system/system.class";
import { AH } from "../../../src/action-handler";

describe('System Class', () => {
  describe('Initializing', () => {
    test('System Screen Connection should create a new Screen', () => {
      let system = new System();
      expect(system.screen).not.toBeDefined();
      system.connectSystemScreen();
      expect(system.screen).toBeDefined();
    })
  })

  describe('Killing', () => {
    test('Killing the System will clear out Action Handler', () => {
      let system = new System();
      system.init();
      expect(AH.SYSTEM).toBeDefined();
      system.kill();
      expect(AH.SYSTEM).not.toBeDefined();
    })
  })
})
