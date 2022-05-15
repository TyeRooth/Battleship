/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0px;\n    margin: 0px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8DAA8D;IAC9D,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["body {\n    padding: 0px;\n    margin: 0px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


function renderBoard (type, missedShots, hitShots) {
    const boardSection = document.getElementById('boards-section');
    const board = document.createElement('div');
    board.classList.add('board');
    board.classList.add(`${ type }`)
    for(let i = 0; i < 100; i++) {
        const position = document.createElement(`button`);
        position.classList.add('position');
        position.setAttribute('data-position', i);
        if (missedShots.includes(i)) {
            position.classList.add('shot');
            position.appendChild(missedShotDOM());
        }
        else if (hitShots.includes(i)) {
            position.classList.add('shot');
            position.appendChild(hitShotDOM());
        }
        else {
            position.textContent = i;
        }
        board.appendChild(position);
    };
    if (!document.querySelector(`.${ type }`)) {
        boardSection.appendChild(board);
    }
    else {
        const currentBoard = document.querySelector(`.${ type }`);
        currentBoard.textContent = "";
        currentBoard.appendChild(board);
    }  
};

function missedShotDOM () {
    const missCircle = document.createElement('div');
    missCircle.classList.add('circle');
    missCircle.style.backgroundColor = "white";
    return missCircle;
}

function hitShotDOM (position) {
    const hitCircle = document.createElement('div');
    hitCircle.classList.add('circle');
    hitCircle.style.backgroundColor = "red";
    return hitCircle;
}



/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const GameBoard = () => {

    //Order of positions array lines up with order of ships array.
    let ships = [];
    let missedShots = [];
    let hitShots = [];
    const rowSize = 10;

    function placeShip (position, axis, length, name ) {
        let shipSpots = [];
        if (axis === "x") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + i);
            }
        }
        else if (axis === "y") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + rowSize * i);
            }
        }
        ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship) (name, shipSpots));
    }

    function receiveAttack (position) {
        for(let i = 0; i < ships.length; i++) {
            for(let j = 0; j < ships[i].positions.length; j++) {
                if (ships[i].positions[j] === position) {
                    ships[i].hit(position);
                    hitShots.push(position);
                    return;
                }
            }
        }
        missedShots.push(position);
    }

    function checkLoseCondition () {
        return ships.every((element) => { return element.isSunk();} );
    } 

    function updateBoardDOM (type) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(type, missedShots, hitShots);
    }

    return {
        placeShip,
        receiveAttack,
        ships,
        missedShots,
        checkLoseCondition,
        updateBoardDOM
    }
}



/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHitButtons": () => (/* binding */ addHitButtons)
/* harmony export */ });


async function addHitButtons (attackedPositions) {
    console.log(attackedPositions);
    const enemyTargets = document.querySelectorAll('.enemy button');
    const hitPromise = new Promise ((resolve) => {
        enemyTargets.forEach(target => {
            if (attackedPositions.includes(Number(target.getAttribute('data-position'))) === false) {
                target.addEventListener('click', () => {
                    console.log(target.getAttribute('data-position'));
                    resolve(target.getAttribute('data-position')); 
                })
            };
        });
    });
    return await hitPromise;
};



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()

    async function attackEnemy () {
        if (type === "computer") {
            let index = Math.floor(Math.random() * openPositions.length);
            let position = openPositions[index];
            openPositions.splice(index, 1);
            attackedPositions.push(position);
            return position;
        }
        else if (type === "player") {
            let position = Number(await (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addHitButtons)(attackedPositions));
            attackedPositions.push(position);
            openPositions.splice(position - attackedPositions.length, 1);
            return position;    
        }
    }

    return {
        attackEnemy,
        playerBoard,
        attackedPositions
    }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });

const Ship = (name, positions) => {

    let hits = [];
    function hit (position) {
        if (!hits.includes(position)) {
            hits.push(position);
        }
    }
    function isSunk () {
        return hits.length === positions.length;
    }

    return {
        hit,
        isSunk,
        positions
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("player");
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

pBoard.placeShip(2, "y", 3, "Submarine");
cBoard.placeShip(1, "x", 3, "Submarine");

pBoard.updateBoardDOM("player");
cBoard.updateBoardDOM("enemy");

async function gameFlow () {
    let turn = 0;
    do {
        if (turn % 2 === 0) {
            cBoard.receiveAttack(await player.attackEnemy());
            console.log(cBoard.missedShots);
        }
        else {
            pBoard.receiveAttack(await computer.attackEnemy());
            console.log(pBoard.missedShots);
        }
        pBoard.updateBoardDOM("player");
        cBoard.updateBoardDOM("enemy");
        turn++
    }
    while (!pBoard.checkLoseCondition() && !cBoard.checkLoseCondition());
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsbUJBQW1CLGtCQUFrQixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIscUNBQXFDLG1CQUFtQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHFDQUFxQyxtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLG9DQUFvQywwQkFBMEIscUNBQXFDLG1CQUFtQixzQkFBc0IsZ0JBQWdCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixrQ0FBa0MsR0FBRyxZQUFZLG1CQUFtQixvQkFBb0Isb0JBQW9CLHFFQUFxRSxlQUFlLEdBQUcsZUFBZSxtQkFBbUIscUNBQXFDLDhCQUE4QixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLCtCQUErQix5QkFBeUIsR0FBRyxhQUFhLG1CQUFtQixrQkFBa0IseUJBQXlCLDRCQUE0QixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdDQUFnQyxtQkFBbUIsa0JBQWtCLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQixxQ0FBcUMsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIscUNBQXFDLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0Isb0NBQW9DLDBCQUEwQixxQ0FBcUMsbUJBQW1CLHNCQUFzQixnQkFBZ0IsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGtDQUFrQyxHQUFHLFlBQVksbUJBQW1CLG9CQUFvQixvQkFBb0IscUVBQXFFLGVBQWUsR0FBRyxlQUFlLG1CQUFtQixxQ0FBcUMsOEJBQThCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsK0JBQStCLHlCQUF5QixHQUFHLGFBQWEsbUJBQW1CLGtCQUFrQix5QkFBeUIsNEJBQTRCLEdBQUcsbUJBQW1CO0FBQzNvSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEMsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQSx5REFBeUQsTUFBTTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzhCO0FBQ007O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUk7QUFDdkI7O0FBRUE7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTs7QUFFQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndDO0FBQ0U7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVEQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNhOztBQUVsQyxlQUFlLCtDQUFNO0FBQ3JCLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRpbmctc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uLnNob3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOERBQThEO0lBQzlELFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRpbmctc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uLnNob3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZCAodHlwZSwgbWlzc2VkU2hvdHMsIGhpdFNob3RzKSB7XG4gICAgY29uc3QgYm9hcmRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkcy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7IHR5cGUgfWApXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHBvc2l0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicsIGkpO1xuICAgICAgICBpZiAobWlzc2VkU2hvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKG1pc3NlZFNob3RET00oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGl0U2hvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKGhpdFNob3RET00oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbi50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocG9zaXRpb24pO1xuICAgIH07XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHsgdHlwZSB9YCkpIHtcbiAgICAgICAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4keyB0eXBlIH1gKTtcbiAgICAgICAgY3VycmVudEJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY3VycmVudEJvYXJkLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICB9ICBcbn07XG5cbmZ1bmN0aW9uIG1pc3NlZFNob3RET00gKCkge1xuICAgIGNvbnN0IG1pc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaXNzQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIG1pc3NDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHJldHVybiBtaXNzQ2lyY2xlO1xufVxuXG5mdW5jdGlvbiBoaXRTaG90RE9NIChwb3NpdGlvbikge1xuICAgIGNvbnN0IGhpdENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICBoaXRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICByZXR1cm4gaGl0Q2lyY2xlO1xufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZCB9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG5cbiAgICAvL09yZGVyIG9mIHBvc2l0aW9ucyBhcnJheSBsaW5lcyB1cCB3aXRoIG9yZGVyIG9mIHNoaXBzIGFycmF5LlxuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGxldCBoaXRTaG90cyA9IFtdO1xuICAgIGNvbnN0IHJvd1NpemUgPSAxMDtcblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCAocG9zaXRpb24sIGF4aXMsIGxlbmd0aCwgbmFtZSApIHtcbiAgICAgICAgbGV0IHNoaXBTcG90cyA9IFtdO1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNoaXBTcG90cy5wdXNoKHBvc2l0aW9uICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNoaXBTcG90cy5wdXNoKHBvc2l0aW9uICsgcm93U2l6ZSAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnB1c2goU2hpcCAobmFtZSwgc2hpcFNwb3RzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAocG9zaXRpb24pIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0ucG9zaXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLnBvc2l0aW9uc1tqXSA9PT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMb3NlQ29uZGl0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChlbGVtZW50KSA9PiB7IHJldHVybiBlbGVtZW50LmlzU3VuaygpO30gKTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQm9hcmRET00gKHR5cGUpIHtcbiAgICAgICAgcmVuZGVyQm9hcmQodHlwZSwgbWlzc2VkU2hvdHMsIGhpdFNob3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgY2hlY2tMb3NlQ29uZGl0aW9uLFxuICAgICAgICB1cGRhdGVCb2FyZERPTVxuICAgIH1cbn1cblxuZXhwb3J0IHtHYW1lQm9hcmR9OyIsIlxuXG5hc3luYyBmdW5jdGlvbiBhZGRIaXRCdXR0b25zIChhdHRhY2tlZFBvc2l0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKGF0dGFja2VkUG9zaXRpb25zKTtcbiAgICBjb25zdCBlbmVteVRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXkgYnV0dG9uJyk7XG4gICAgY29uc3QgaGl0UHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBlbmVteVRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkUG9zaXRpb25zLmluY2x1ZGVzKE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTsgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBoaXRQcm9taXNlO1xufTtcblxuZXhwb3J0IHthZGRIaXRCdXR0b25zfTsiLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IGFkZEhpdEJ1dHRvbnMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IFBsYXllciA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGF0dGFja2VkUG9zaXRpb25zID0gW107XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYXR0YWNrRW5lbXkgKCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcGVuUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBvcGVuUG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGF0dGFja2VkUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE51bWJlcihhd2FpdCBhZGRIaXRCdXR0b25zKGF0dGFja2VkUG9zaXRpb25zKSk7XG4gICAgICAgICAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMuc3BsaWNlKHBvc2l0aW9uIC0gYXR0YWNrZWRQb3NpdGlvbnMubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjsgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2tFbmVteSxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGF0dGFja2VkUG9zaXRpb25zXG4gICAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJcbmNvbnN0IFNoaXAgPSAobmFtZSwgcG9zaXRpb25zKSA9PiB7XG5cbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGZ1bmN0aW9uIGhpdCAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFoaXRzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgaGl0cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsgKCkge1xuICAgICAgICByZXR1cm4gaGl0cy5sZW5ndGggPT09IHBvc2l0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uc1xuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbmNvbnN0IHBCb2FyZCA9IHBsYXllci5wbGF5ZXJCb2FyZDtcbmNvbnN0IGNCb2FyZCA9IGNvbXB1dGVyLnBsYXllckJvYXJkO1xuXG5wQm9hcmQucGxhY2VTaGlwKDIsIFwieVwiLCAzLCBcIlN1Ym1hcmluZVwiKTtcbmNCb2FyZC5wbGFjZVNoaXAoMSwgXCJ4XCIsIDMsIFwiU3VibWFyaW5lXCIpO1xuXG5wQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGF5ZXJcIik7XG5jQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZUZsb3cgKCkge1xuICAgIGxldCB0dXJuID0gMDtcbiAgICBkbyB7XG4gICAgICAgIGlmICh0dXJuICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgY0JvYXJkLnJlY2VpdmVBdHRhY2soYXdhaXQgcGxheWVyLmF0dGFja0VuZW15KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY0JvYXJkLm1pc3NlZFNob3RzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBCb2FyZC5yZWNlaXZlQXR0YWNrKGF3YWl0IGNvbXB1dGVyLmF0dGFja0VuZW15KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocEJvYXJkLm1pc3NlZFNob3RzKTtcbiAgICAgICAgfVxuICAgICAgICBwQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGF5ZXJcIik7XG4gICAgICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xuICAgICAgICB0dXJuKytcbiAgICB9XG4gICAgd2hpbGUgKCFwQm9hcmQuY2hlY2tMb3NlQ29uZGl0aW9uKCkgJiYgIWNCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSk7XG4gICAgcEJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxheWVyXCIpO1xuICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xufVxuXG5nYW1lRmxvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9