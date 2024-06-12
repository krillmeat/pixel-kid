import 'jest-canvas-mock';

import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
global.document.body.innerHTML = "<div id='game-screen'></div>";