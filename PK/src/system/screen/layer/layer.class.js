import { getTileSize } from "../screen.utils";

export class Layer{
  /**
   * Create a new Screen Layer
   * @param {Object} [options={}]
   * @param {number} [options.width=20]
   * @param {number} [options.height=18]
   * @param {number} [options.x=0]
   * @param {number} [options.y=0]
   * @param {string} layerClassName
   * @param {function}  refresh           Used to refresh parent screens
   */
  constructor({width=20, height=18, x=0, y=0, layerClassName, refresh}={}){
    this.canvasElem;
    this.ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.layerClassName = layerClassName;
    this.refresh = refresh; // Callback that refreshes the parent layer

    this.subLayers = [];
  }

  /** Initializes the Layer */ /* istanbul ignore next */
  init = () => {
    this._buildCanvas();
  }

  /** Builds the Canvas HTML Node and connects its Context */
  _buildCanvas = () => {
    let canvasElem = document.createElement('canvas');
        canvasElem.width = this.width * getTileSize();
        canvasElem.height = this.height * getTileSize();
        canvasElem.x = this.x * 8 * getTileSize();
        canvasElem.y = this.y * 8 * getTileSize();

        canvasElem.classList.add(this.layerClassName);
    this.canvasElem = canvasElem;
    this.ctx = canvasElem.getContext('2d',{ willReadFrequently: true });
  }

  /**
   * Changes the Layer Dimensions
   * @param {Object} dimensions
   * @param {number} dimensions.width
   * @param {number} dimensions.height
   */
  resizeLayer = ({width,height}) => {
    this.width = width || this.width;
    this.height = height || this.height;
    this.canvasElem.width = this.width * getTileSize();
    this.canvasElem.height = this.height  * getTileSize();
  }

  /**
   * Changes the Layer Location
   * @param {Object} coordinates
   * @param {number} coordinates.x
   * @param {number} coordinates.y
   */
  moveLayer = ({x,y}) => {
    this.x = x || this.x;
    this.y = y || this.y;
    this.canvasElem.x = this.x * getTileSize();
    this.canvasElem.y = this.y  * getTileSize();
  }

  
  /**
   * Grabs the color of a specific Pixel
   * Unlike most X and Y coordinates, this one does specifically ask for
   * Pixel location, and not number of Tiles
   * @param {Object} coordinates
   * @param {number} coordinates.x Actual pixel x Coordinate
   * @param {number} coordinates.y Actual pixel y Coordinate
   * @returns Selected Pixel's Color
   */ /* istanbul ignore next */
   _getPixelColor = ({x,y}) => {
    let imageData = this.ctx.getImageData(x,y,1,1).data;
    return imageData;
  }

  /**
   * Draws a Tile with the Color Pallet at the coordinates. The coordinates are in relation to the Layer.
   * @param {Object}  options
   * @param {Array}   options.tile    Matrix of Pixels for Tile
   * @param {Array}   options.pallet  Color Pallet for Tile
   * @param {number}  options.x       Tile's X Location in Layer 
   * @param {number}  options.y       Tile's Y Location in Layer 
   */ /* istanbul ignore next */
  drawTile = ({tile,pallet,x,y}) => {
    for(let r = 0; r < tile.length; r++){
      for(let c = 0; c < tile[r].length; c++){
        let color = pallet[tile[r][c]];
        let _x = calcPixelCoordinate({tile:x,layer:this.x,pixel:c});
        let _y = calcPixelCoordinate({tile:y,layer:this.y,pixel:r});
        this._colorPixel({color,x:_x,y:_y});
      }
    }
  }
}
