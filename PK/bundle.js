'use strict';

/* istanbul ignore file */

var CFG = {
  debug: true,
  userName: 'KRILL MEAT',
  screenSize: 2,
  keyBindings: {
    action: 'ArrowRight',
    cancel: 'ArrowDown',
    up: 'w',
    right: 'd',
    down: 's',
    left: 'a',
    start: 'Shift',
    select: 'q'
  }
};

/**
 * Logs client message, which shows up even when not in debug mode
 * @param {String} message Message to warn
 * @param {Object} object Extra data to log
 */
var gameLog = function gameLog(message, object) {
  console.log("%c".concat(message), 'color:#75715E');
};

/**
  * Logs Debug messages, which are more verbose than Game Logs
  * Used only when debug=true is set in the URL Params
  * @param {String} message Message to warn
  * @param {Object} object Extra data to log
  */
var debugLog = function debugLog(message, object) {
  console.log("%c".concat(message), 'color:#A6E22E');
};

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var SCREEN_WIDTH = 160;
var SCREEN_HEIGHT = 144;
var Screen = /*#__PURE__*/_createClass(function Screen() {
  var _this = this;
  _classCallCheck(this, Screen);
  /**
   * Initializes the Screen. Sets up the Action Handler and builds necessary components.
   */
  /* istanbul ignore next */
  _defineProperty(this, "init", function () {
    // init screen
    debugLog("Connecting System Screen @".concat(CFG.screenSize, "X (").concat(_this.width, " x ").concat(_this.height, ") "));
    _this.initActionHandler();
    _this.connectScreen();
  });
  /**
   * Connects the Screen Class to the Screen Node in the HTML
   */
  _defineProperty(this, "connectScreen", function () {
    _this.screenElem = document.getElementById('game-screen');
    _this.screenElem.style.width = _this.width + 'px';
    _this.screenElem.style.height = _this.height + 'px';
  });
  /**
   * Initializes the Action Handler for the Screen
   */
  /* istanbul ignore next */
  _defineProperty(this, "initActionHandler", function () {
  });
  /**
   * Cleans up everything related to the Screen so it can be cleanly deleted.
   */
  _defineProperty(this, "kill", function () {
  });
  this.screenElem;
  this.width = SCREEN_WIDTH * CFG.screenSize;
  this.height = SCREEN_HEIGHT * CFG.screenSize;
  this.layer;
});

var System = /*#__PURE__*/_createClass(function System() {
  var _this = this;
  _classCallCheck(this, System);
  /**
   * Initializes the System. Sets up the Action Handler, Connects Screen, Controller, Game, etc.
   */
  /* istanbul ignore next */
  _defineProperty(this, "init", function () {
    debugLog("Starting System");
    _this.initActionHandler();
    _this.connectSystemScreen();
    // this.connectControllers(1);
    // this.connectSpeaker();
  });
  /**
   * Creates and Initializes the Screen and connects it to the System
   */
  _defineProperty(this, "connectSystemScreen", function () {
    _this.screen = new Screen();
    _this.screen.init();
  });
  /**
   * Initializes the Action Handler for the System
   */
  /* istanbul ignore next */
  _defineProperty(this, "initActionHandler", function () {
  });
  /**
   * Cleans up everything related to the System so it can be cleanly deleted.
   */
  _defineProperty(this, "kill", function () {
  });
  this.game;
  this.screen;
  this.controllers = [];
  this.speaker;
});

/* istanbul ignore file */

window.onload = function () {
  init();
};

/**
 * This is the Root Initializer that Sets up the System
 */
var init = function init() {
  gameLog("Booting for ".concat(CFG.userName, "..."));
  var system = new System();
  setTimeout(function () {
    system.init();
  }, 1000);
};
