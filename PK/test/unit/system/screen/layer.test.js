import { Layer } from "../../../../src/system/screen/layer/layer.class"
import 'jest-canvas-mock';

describe('Layer Class', () => {
  describe('Building a Layer', () => {
    test('After initializing a layer, a Canvas will be attached', () => {
      let layer = new Layer();
      expect(layer.canvasElem).toBe(undefined);
      expect(layer.ctx).toBe(undefined);
      layer.init();
      expect(layer.canvasElem).not.toBe(undefined);
      expect(layer.ctx).not.toBe(undefined);
    });

    test('After initializing a layer with no params passed into the constructor, the Canvas will have an appropriate width and height', () => {
      let layer = new Layer();
      layer.init();
      expect(layer.width).not.toBe(undefined);
      expect(layer.height).not.toBe(undefined);
    })
  })

  describe('Modifying a Layer', () => {
    test('Moving a layer will change the x and y accordingly', () => {
      let layer = new Layer();
      layer.init();
      let originalX = layer.x;
      let originalY = layer.y;
      layer.moveLayer({x: 10, y:10})
      expect(originalX).not.toBe(layer.x);
      expect(originalY).not.toBe(layer.y);
    })

    test('Only moving one dimension will cause the other to stay still', () => {
      let layer = new Layer();
      layer.init();
      let originalY = layer.y;
      layer.moveLayer({x: 10})
      expect(originalY).toBe(layer.y);
    })

    test('Resizing a Layer will change the width and height accordingly', () => {
      let layer = new Layer();
      layer.init();
      let originalWidth = layer.width;
      let originalHeight = layer.height;
      layer.resizeLayer({width:10,height:10})
      expect(originalWidth).not.toBe(layer.width);
      expect(originalHeight).not.toBe(layer.height);
    })

    test('Only resizing one dimension will cause the other to stay still', () => {
      let layer = new Layer();
      layer.init();
      let originalHeight = layer.height;
      layer.resizeLayer({width:10})
      expect(originalHeight).toBe(layer.height);
    })
  })
})
