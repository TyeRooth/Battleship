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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n    color: white;\n    font-size: 2rem;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available {\n    background-color: blue;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable {\n    background-color: midnightblue;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8DAA8D;IAC9D,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n    color: white;\n    font-size: 2rem;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available {\n    background-color: blue;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable {\n    background-color: midnightblue;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "addAxisButton": () => (/* binding */ addAxisButton),
/* harmony export */   "clearBoardSection": () => (/* binding */ clearBoardSection),
/* harmony export */   "removeCurrentPlacement": () => (/* binding */ removeCurrentPlacement),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "showAvailablePositions": () => (/* binding */ showAvailablePositions),
/* harmony export */   "showPossiblePlacement": () => (/* binding */ showPossiblePlacement)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



function renderBoard (type, missedShots, hitShots, shipSpots) {

    const boardSection = document.getElementById('boards-section');
    const boardNode = document.createElement('div');
    boardNode.classList.add('board-summary');
    const boardHeading = createHeading(type);
    boardNode.appendChild(boardHeading);

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
        if (type === "player" && showShips(shipSpots, i)) {
           position.classList.add('ship');
        }
        else if (type === "placement" && showShips(shipSpots, i)) {
            position.classList.add("ship");
        }
        board.appendChild(position);
    };
    if (!document.querySelector(`.${ type }`)) {
        boardNode.appendChild(board);
        boardSection.appendChild(boardNode);
    }
    else {
        const currentBoard = document.querySelector(`.${ type }`);
        currentBoard.textContent = "";
        currentBoard.appendChild(board);
    }
};

function showShips(shipSpots, position) {
    for(let i = 0; i < shipSpots.length; i++) {
        if (shipSpots[i].positions.includes(position)) {
            return true;
        }
    }
    return false;
}

function createHeading(type) {
    const headingNode = document.createElement('div');
    headingNode.classList.add('board-heading');
    if (type === "player") {
        headingNode.textContent = "Friendly Waters";
    }
    else if (type === "enemy") {
        headingNode.textContent = "Enemy Waters";
    }
    else if (type === "placement") {
        headingNode.textContent = "Ready your Ships";
    }
    return headingNode
}

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

function addAxisButton (axis) {
    const boardHeading = document.querySelector('.board-heading');
    const axisButton = document.createElement('button');
    axisButton.setAttribute('id', 'axis-toggle');
    if (axis === "x") {
        axisButton.textContent = "Axis: X";
    }
    else if (axis === "y") {
        axisButton.textContent = "Axis: Y";
    }
    boardHeading.appendChild(axisButton);
}

function showAvailablePositions(openPositions) {
    const positions = document.querySelectorAll('.placement button');
    positions.forEach(position => {
        if (openPositions.includes(Number(position.getAttribute('data-position')))) {
            position.classList.remove('unavailable');
            position.classList.add('available');
        }
        else {
            position.classList.remove('available');
            position.classList.add('unavailable');
        }
    })
}

function showPossiblePlacement (axis, length, coordinate) {
    if (axis === "x") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i}"]`);
            placement.classList.add("possible-placement");
        }
    }
    else if (axis === "y") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i * 10}"]`);
            placement.classList.add("possible-placement");
        }
    }
}

function removeCurrentPlacement (axis, length, coordinate) {
    if (axis === "x") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i}"]`);
            placement.classList.remove("possible-placement");
        }
    }
    else if (axis === "y") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i * 10}"]`);
            placement.classList.remove("possible-placement");
        }
    }  
}

function clearBoardSection () {
    const boardSection = document.getElementById('boards-section');
    boardSection.textContent = "";
}



/***/ }),

/***/ "./src/compAI.js":
/*!***********************!*\
  !*** ./src/compAI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compAI": () => (/* binding */ compAI)
/* harmony export */ });
let compAI = {
    hit : [],
    missed : [],
    lastShot : null,
    lastHit : null,
    lastShotWasHit : false,
    opponentShips : [],
    possibleHits : [],
    activeHits : [],
    curDir : null,
    changedDir : false,
    storedHits : [],

    // Required for AI to recognize whether a hit has been made
    addOpponentShips : function (board) {
        this.opponentShips = board.ships;
        for (let i = 0; i < this.opponentShips.length; i++) {
            for (let j = 0; j < this.opponentShips[i].positions.length; j++) {
                this.possibleHits.push(this.opponentShips[i].positions[j]);
            }
        }
    },

    //Manual add is used in my tests for the computer
    manualAdd : function (coord) {
        this.activeHits = removeSunkShip(this.activeHits, this.opponentShips);
        this.configureAI(coord);
    },

    //Reset AI also important for testing since I am having trouble with teardown
    resetAI : function () {
        this.hit = [];
        this.missed = [];
        this.lastShot = null;
        this.lastHit = null;
        this.lastShotWasHit = false;
        this.opponentShips = [];
        this.possibleHits = [];
        this.activeHits = [];
        this.curDir = null;
        //For multiple ship instances
        this.storedHits = [];
    },

    wasHit : function (coord) {
        return this.possibleHits.includes(coord); 
    },

    //This checks whether AI can follow regular pattern or needs to change directions due to limits
    checkNextAvailable : function () {
        const possibleArray = checkDirectionAvailable(this.lastHit, this.missed, this.hit);
        const reverseArray = checkDirectionAvailable(this.activeHits[0], this.missed, this.hit);
        if (possibleArray.includes(this.curDir)) {
            return this.lastHit;
        }
        else if (reverseArray.includes(oppDir(this.curDir))) {
            return this.activeHits[0];
        }
    },

    checkMultiple : function () {
        if (this.activeHits.length > 1 && this.storedHits.length === 0) {
            const possibleArray = checkDirectionAvailable(this.lastHit, this.missed, this.hit);
            const reverseArray = checkDirectionAvailable(this.activeHits[0], this.missed, this.hit);
            if (!possibleArray.includes(this.curDir) && !reverseArray.includes(oppDir(this.curDir))) {
                return true;
            }
        }
        else if (this.storedHits.length > 0) {
            return true;
        }
        return false;        
    },

    configureMultipleShips : function () {
        if (this.storedHits.length === 0) {
            const startingLength = this.activeHits.length;
            for (let i = 0; i < startingLength - 1; i++) {
                this.storedHits.push(this.activeHits.pop());
            }
        }
        else if (this.storedHits.length > 0 && this.activeHits.length === 0) {
            this.activeHits.push(this.storedHits.pop());
        }
    },

    // Test to see whether generated shot is a hit and changes the object accordingly
    // Essentially this configures the variables important for deciding on a shot
    configureAI : function (newShot) {
        this.lastShot = newShot;
        if (this.wasHit(newShot)) {
            this.hit.push(newShot);
            this.lastShotWasHit = true;
            this.lastHit = newShot;
            this.activeHits.push(newShot);
        }
        else {
            this.missed.push(newShot);
            this.lastShotWasHit = false;
        }
        return newShot;
    },

    //Main method
    testAI : function () {
        this.activeHits = removeSunkShip(this.activeHits, this.opponentShips);
        // Check for multiple ships and configure object if needed
        if (this.checkMultiple()) {
            this.configureMultipleShips();
        }
        //After first hit after random period
        if (this.activeHits.length === 1) {
            const posDir = checkDirectionAvailable(this.activeHits[0], this.missed, this.hit);
            this.curDir = posDir[randomIndex(posDir)];
            let newShot = createNewShot(this.activeHits[0], this.curDir);
            return this.configureAI(newShot);
        }
        //Random Shot
        else if (this.activeHits.length === 0) {
            let openPositions = getOpenPositions(this.hit, this.missed);
            const newShot = openPositions[randomIndex(openPositions)];
            //In case of fullBoard
            if (newShot === undefined) {
                return;
            }
            return this.configureAI(newShot);
        }
        // After two or more adjacent coords have been hit
        else if (this.activeHits.length > 1 && this.lastShotWasHit) {
            const branchingHit = this.checkNextAvailable();
            if (branchingHit === this.activeHits[0]) {
                this.curDir = oppDir(this.curDir);
            }
            let newShot = createNewShot(branchingHit, this.curDir);
            return this.configureAI(newShot);
        }
        // A miss after consecutive hits to change directions
        else if (this.activeHits.length > 1 && !this.lastShotWasHit) {
            this.curDir = oppDir(this.curDir);
            let newShot = createNewShot(this.activeHits[0], this.curDir);
            return this.configureAI(newShot);
        }
    }
};

function getOpenPositions (missed, hit) {
    let openPositions = [];
    for (let i = 0; i < 100; i++) {
        if (!missed.includes(i) && !hit.includes(i)) {
            openPositions.push(i);
        }
    }
    return openPositions;
}

function createNewShot (position, direction) {
    if (direction === "up") {
        return position - 10;
    }
    else if (direction === "right") {
        return position + 1;
    }
    else if (direction === "down") {
        return position + 10;
    }
    else if (direction === "left") {
        return position -1;
    }
}

// This is how the computer will be able to tell it has sunk a ship
// If activeHits.length === 0 after this, computer will shoot randomly again
function removeSunkShip (active, ships) {
    let sunkPositions = [];
    for (let i = 0; i < ships.length; i++) {
        let hitCount = 0;
        for (let j = 0; j < ships[i].positions.length; j++) {
            if (active.includes(ships[i].positions[j])) {
                hitCount++;
            }
        }
        if (hitCount === ships[i].positions.length) {
            sunkPositions = ships[i].positions;
        }
    }
    for (let i = 0; i < sunkPositions.length; i++) {
        for (let j = active.length - 1; j >= 0; j--) {
            if (sunkPositions.includes(active[j])) {
                active.splice(j, 1);
            }
        }
    }
    return active;
}

function checkDirectionAvailable (coord, hits, misses) {
    let possibleDirections = [];
    const rowDif = 10;
    const colDif = 1;
    const up = coord - rowDif;
    if (up >= 0 && checkNotShot(up, hits, misses)) {
        possibleDirections.push("up");
    }
    const right = coord + colDif;
    if (right % rowDif !== 0 && checkNotShot(right, hits, misses)) {
        possibleDirections.push("right");
    }
    const down = coord + rowDif;
    if (down < 100 && checkNotShot(down, hits, misses)) {
        possibleDirections.push("down");
    }
    const left = coord - colDif;
    if (left % rowDif !== 9 && checkNotShot(left, hits, misses)) {
        possibleDirections.push("left");
    }
    return possibleDirections;
}

function checkNotShot (coord, hitArray, missArray) {
    if (!hitArray.includes(coord) && !missArray.includes(coord)) {
        return true;
    }
    else {false;}
}

function oppDir(dir) {
    if (dir === "up") {
        return "down";
    }
    else if (dir === "right") {
        return "left";
    }
    else if (dir === "down") {
        return "up";
    }
    else if (dir === "left") {
        return "right";
    }
}

//I will be using this a lot
function randomIndex (array) {
    return Math.floor(Math.random() * array.length);
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
        return shipSpots;
    }

    function receiveAttack (position) {
        for(let i = 0; i < ships.length; i++) {
            for(let j = 0; j < ships[i].positions.length; j++) {
                if (ships[i].positions[j] === position) {
                    ships[i].hit(position);
                    hitShots.push(position);
                    return true;
                }
            }
        }
        missedShots.push(position);
        return false;
    }

    function checkLoseCondition () {
        return ships.every((element) => { return element.isSunk();} );
    }

    function shipCanBePlaced (axis, length) {
        let availablePositions = [];
        for (let i = 0; i < 100; i++) {
            if (noCollisions(axis, i, length) && insideBoard(axis, i, length)) {
                availablePositions.push(i);
            }
        }
        return availablePositions;
    }
    
    function noCollisions (axis, position, length) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < ships.length; j++) {
                if (axis === "x") {
                    if (ships[j].positions.includes(position + i)) {
                        return false;
                    }
                }
                else if (axis === "y") {
                    if (ships[j].positions.includes(position + i * rowSize)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function insideBoard (axis, position, length) {
        if (axis === "x" && position % 10 + length - 1 < 10) {
            return true;
        }
        else if (axis === "y" && position + (length - 1) * rowSize < 100) {
            return true;
        }
        return false;
    }

    function updateBoardDOM (type) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(type, missedShots, hitShots, ships);
    }

    return {
        placeShip,
        receiveAttack,
        shipCanBePlaced,
        ships,
        missedShots,
        checkLoseCondition,
        updateBoardDOM,
        shipCanBePlaced
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
/* harmony export */   "addHitButtons": () => (/* binding */ addHitButtons),
/* harmony export */   "chooseShipPosition": () => (/* binding */ chooseShipPosition)
/* harmony export */ });


async function addHitButtons (attackedPositions) {
    const enemyTargets = document.querySelectorAll('.enemy button');
    const hitPromise = new Promise ((resolve) => {
        enemyTargets.forEach(target => {
            if (attackedPositions.includes(Number(target.getAttribute('data-position'))) === false) {
                target.addEventListener('click', () => {
                    resolve(target.getAttribute('data-position')); 
                })
            };
        });
    });
    return await hitPromise;
};

async function chooseShipPosition() {
    const positions = document.querySelectorAll('.placement button');
    const placementPromise = new Promise ((resolve) => {
        positions.forEach(position => {
            position.addEventListener('click', () => {
                if (position.classList.contains('available')) {
                    resolve(position.getAttribute('data-position'));
                }
            });  
        });
    });
    return await placementPromise;
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _compAI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compAI */ "./src/compAI.js");





const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()
    let axis = "x";

    //Different Approach to AI, trying more OOP way
    let ai = _compAI__WEBPACK_IMPORTED_MODULE_3__.compAI;
    function generateCompHit () {
        console.log(ai.possibleHits);
        return ai.testAI();
    }

    // Check whether a ship has been sunk in the recent aimed shots
    function hitsSunkShip () {
        const enemyShips = opponentBoard.ships;
        for (let i = 0; i < enemyShips.length; i++) {
            let hitCount = 0;
            for (let j = 0; j < enemyShips[i].positions.length; j++) {
                if (prevHits.includes(enemyShips[i].positions[j])) {
                    hitCount++;
                }
            }
            if (hitCount === enemyShips[i].positions.length) {
                recentSunkPositions = enemyShips[i].positions;
                return true;
            }
        }
        return false;
    }

    async function attackEnemy () {
        if (type === "computer") {
            const position = generateCompHit();
            attackedPositions.push(position);
            openPositions.splice(position - attackedPositions.length, 1);
            return position;
        }
        else if (type === "player") {
            let position = Number(await (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addHitButtons)(attackedPositions));
            attackedPositions.push(position);
            openPositions.splice(position - attackedPositions.length, 1);
            return position;    
        }
    }

    function axisToggle () {
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                axis = "y"
                axisButton.textContent = "Axis: Y";
            }
            else if (axis === "y") {
                axis = "x";
                axisButton.textContent = "Axis: X";
            }
        })
    }

    async function setupBoard () {
        if (type === "player") {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.addAxisButton)(axis);
            axisToggle();
        }
        await setupShip(5, "Carrier");
        await setupShip(4, "Battleship");
        await setupShip(3, "Destroyer");
        await setupShip(3, "Submarine");
        await setupShip(2, "Patrol Boat");
    }

    async function setupShip (length, name) {
        if (type === "computer") {
            axis = (Math.random() < 0.5 ? "x" : "y");
            let openPositions = playerBoard.shipCanBePlaced(axis, length);
            const randomPosition = openPositions[Math.floor(Math.random() * openPositions.length)];
            playerBoard.placeShip(randomPosition, axis, length, name);
        }
        else if (type === "player") {
            let openPositionsX = playerBoard.shipCanBePlaced("x", length);
            let openPositionsY = playerBoard.shipCanBePlaced("y", length);
            switchOpens(openPositionsX, openPositionsY, length);
            let position = Number(await (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.chooseShipPosition)());
            const shipSpots = playerBoard.placeShip(position, axis, length, name);
            for (let i = 0; i < shipSpots.length; i++) {
                const boardSpot = document.querySelector(`[data-position="${shipSpots[i]}"]`);
                boardSpot.classList.add('ship');
            }
        }
    }

    function switchOpens (xPos, yPos, length) {
        playerBoard.updateBoardDOM("placement");
        if (axis === "x") {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.showAvailablePositions)(xPos);
            showPlacement(xPos, length);
        }
        else if (axis === "y") {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.showAvailablePositions)(yPos);
            showPlacement(yPos, length);
        }
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.showAvailablePositions)(xPos);
                showPlacement(xPos, getLength());
            }
            else if (axis === "y") {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.showAvailablePositions)(yPos);
                showPlacement(yPos, getLength());
            }
        }); 
    };

    // I dislike hard coding things, but I need to do this for the axistoggle button.
    // The placement size stays at five unless I cancel the event listeners required
    // for the async player pick
    function getLength () {
        let currentPlacement = playerBoard.ships.length;
        for (let i = 0; i < 3; i++) {
            if (currentPlacement === i) {
                return 5 - i
            }
        }
        for (let i = 3; i < 5; i++) {
            if (currentPlacement === i) {
                return 6 - i;
            }
        }
    }

    function showPlacement (positions, length) {
        const boardPositions = document.querySelectorAll('.placement button');
        boardPositions.forEach(position => {
            const coordinate = Number(position.getAttribute("data-position"));
            if (positions.includes(coordinate)) {
                position.addEventListener('mouseenter', () => {
                    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.showPossiblePlacement)(axis, length, coordinate);
                });
                position.addEventListener('mouseleave', () => {
                    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.removeCurrentPlacement)(axis, length, coordinate);
                })
            }
            else {position.classList.remove("possible-placement")};
        })
    }

    function removePlacementBoard () {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.clearBoardSection)();
    }

    return {
        attackEnemy,
        setupBoard,
        removePlacementBoard,
        playerBoard,
        ai,
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

computer.setupBoard();

async function gameFlow () {
    pBoard.updateBoardDOM("placement");
    //waitTest is temporary while I understand asynchronous functions
    function waitTest(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, 1000);
        });
    }
    await player.setupBoard();
    await waitTest(10);
    player.removePlacementBoard()
    computer.ai.addOpponentShips(pBoard);
    let turn = 0;
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
    do {
        if (turn % 2 === 0) {
            cBoard.receiveAttack(await player.attackEnemy());
        }
        else {
            pBoard.receiveAttack(await computer.attackEnemy());
        }
        pBoard.updateBoardDOM("player");
        cBoard.updateBoardDOM("enemy");
        turn++
    }
    while (!pBoard.checkLoseCondition() && !cBoard.checkLoseCondition());
    const message = document.getElementById('message-section');
    if (pBoard.checkLoseCondition()) {
        message.textContent = "Computer has won the game";
    }
    else if (cBoard.checkLoseCondition()) {
        message.textContent = "Player has won the game"
    }
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkaW5nLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgaGVpZ2h0OiA3dmg7XFxufVxcblxcbiNtZXNzYWdlLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jYm9hcmRzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbiAgICBoZWlnaHQ6IDcydmg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWhlYWRpbmcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2F4aXMtdG9nZ2xlIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jY3JlZGl0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5wb3NpdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uYXZhaWxhYmxlOmhvdmVyLFxcbmJ1dHRvbi5wb3NzaWJsZS1wbGFjZW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi51bmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG59XFxuXFxuLnVuYXZhaWxhYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbi5zaG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGhlaWdodDogN3ZoO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLmJvYXJkLXN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkaW5nIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNheGlzLXRvZ2dsZSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlcixcXG5idXR0b24ucG9zc2libGUtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udW5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxufVxcblxcbi51bmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbmVteSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5lbmVteSBidXR0b24uc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZCAodHlwZSwgbWlzc2VkU2hvdHMsIGhpdFNob3RzLCBzaGlwU3BvdHMpIHtcblxuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZHMtc2VjdGlvbicpO1xuICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkTm9kZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1zdW1tYXJ5Jyk7XG4gICAgY29uc3QgYm9hcmRIZWFkaW5nID0gY3JlYXRlSGVhZGluZyh0eXBlKTtcbiAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQoYm9hcmRIZWFkaW5nKTtcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKGAkeyB0eXBlIH1gKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbicpO1xuICAgICAgICBwb3NpdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nLCBpKTtcbiAgICAgICAgaWYgKG1pc3NlZFNob3RzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG90Jyk7XG4gICAgICAgICAgICBwb3NpdGlvbi5hcHBlbmRDaGlsZChtaXNzZWRTaG90RE9NKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhpdFNob3RzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG90Jyk7XG4gICAgICAgICAgICBwb3NpdGlvbi5hcHBlbmRDaGlsZChoaXRTaG90RE9NKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcInBsYXllclwiICYmIHNob3dTaGlwcyhzaGlwU3BvdHMsIGkpKSB7XG4gICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInBsYWNlbWVudFwiICYmIHNob3dTaGlwcyhzaGlwU3BvdHMsIGkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChwb3NpdGlvbik7XG4gICAgfTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4keyB0eXBlIH1gKSkge1xuICAgICAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBib2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmROb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4keyB0eXBlIH1gKTtcbiAgICAgICAgY3VycmVudEJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY3VycmVudEJvYXJkLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzaG93U2hpcHMoc2hpcFNwb3RzLCBwb3NpdGlvbikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwU3BvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXBTcG90c1tpXS5wb3NpdGlvbnMuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcodHlwZSkge1xuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ05vZGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtaGVhZGluZycpO1xuICAgIGlmICh0eXBlID09PSBcInBsYXllclwiKSB7XG4gICAgICAgIGhlYWRpbmdOb2RlLnRleHRDb250ZW50ID0gXCJGcmllbmRseSBXYXRlcnNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJlbmVteVwiKSB7XG4gICAgICAgIGhlYWRpbmdOb2RlLnRleHRDb250ZW50ID0gXCJFbmVteSBXYXRlcnNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwbGFjZW1lbnRcIikge1xuICAgICAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IFwiUmVhZHkgeW91ciBTaGlwc1wiO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGluZ05vZGVcbn1cblxuZnVuY3Rpb24gbWlzc2VkU2hvdERPTSAoKSB7XG4gICAgY29uc3QgbWlzc0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pc3NDaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgbWlzc0NpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgcmV0dXJuIG1pc3NDaXJjbGU7XG59XG5cbmZ1bmN0aW9uIGhpdFNob3RET00gKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaGl0Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIGhpdENpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIHJldHVybiBoaXRDaXJjbGU7XG59XG5cbmZ1bmN0aW9uIGFkZEF4aXNCdXR0b24gKGF4aXMpIHtcbiAgICBjb25zdCBib2FyZEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtaGVhZGluZycpO1xuICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBheGlzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXhpcy10b2dnbGUnKTtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBeGlzOiBZXCI7XG4gICAgfVxuICAgIGJvYXJkSGVhZGluZy5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyhvcGVuUG9zaXRpb25zKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudCBidXR0b24nKTtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcGVuUG9zaXRpb25zLmluY2x1ZGVzKE51bWJlcihwb3NpdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaG93UG9zc2libGVQbGFjZW1lbnQgKGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSkge1xuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3NpdGlvbj1cIiR7Y29vcmRpbmF0ZSArIGl9XCJdYCk7XG4gICAgICAgICAgICBwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvc3NpYmxlLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3NpdGlvbj1cIiR7Y29vcmRpbmF0ZSArIGkgKiAxMH1cIl1gKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9zc2libGUtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50UGxhY2VtZW50IChheGlzLCBsZW5ndGgsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpfVwiXWApO1xuICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpICogMTB9XCJdYCk7XG4gICAgICAgICAgICBwbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvc3NpYmxlLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBjbGVhckJvYXJkU2VjdGlvbiAoKSB7XG4gICAgY29uc3QgYm9hcmRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkcy1zZWN0aW9uJyk7XG4gICAgYm9hcmRTZWN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQm9hcmQsIGFkZEF4aXNCdXR0b24sIGNsZWFyQm9hcmRTZWN0aW9uLCBzaG93QXZhaWxhYmxlUG9zaXRpb25zLCBzaG93UG9zc2libGVQbGFjZW1lbnQsIHJlbW92ZUN1cnJlbnRQbGFjZW1lbnQgfTsiLCJsZXQgY29tcEFJID0ge1xuICAgIGhpdCA6IFtdLFxuICAgIG1pc3NlZCA6IFtdLFxuICAgIGxhc3RTaG90IDogbnVsbCxcbiAgICBsYXN0SGl0IDogbnVsbCxcbiAgICBsYXN0U2hvdFdhc0hpdCA6IGZhbHNlLFxuICAgIG9wcG9uZW50U2hpcHMgOiBbXSxcbiAgICBwb3NzaWJsZUhpdHMgOiBbXSxcbiAgICBhY3RpdmVIaXRzIDogW10sXG4gICAgY3VyRGlyIDogbnVsbCxcbiAgICBjaGFuZ2VkRGlyIDogZmFsc2UsXG4gICAgc3RvcmVkSGl0cyA6IFtdLFxuXG4gICAgLy8gUmVxdWlyZWQgZm9yIEFJIHRvIHJlY29nbml6ZSB3aGV0aGVyIGEgaGl0IGhhcyBiZWVuIG1hZGVcbiAgICBhZGRPcHBvbmVudFNoaXBzIDogZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTaGlwcyA9IGJvYXJkLnNoaXBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Bwb25lbnRTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm9wcG9uZW50U2hpcHNbaV0ucG9zaXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZUhpdHMucHVzaCh0aGlzLm9wcG9uZW50U2hpcHNbaV0ucG9zaXRpb25zW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL01hbnVhbCBhZGQgaXMgdXNlZCBpbiBteSB0ZXN0cyBmb3IgdGhlIGNvbXB1dGVyXG4gICAgbWFudWFsQWRkIDogZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSGl0cyA9IHJlbW92ZVN1bmtTaGlwKHRoaXMuYWN0aXZlSGl0cywgdGhpcy5vcHBvbmVudFNoaXBzKTtcbiAgICAgICAgdGhpcy5jb25maWd1cmVBSShjb29yZCk7XG4gICAgfSxcblxuICAgIC8vUmVzZXQgQUkgYWxzbyBpbXBvcnRhbnQgZm9yIHRlc3Rpbmcgc2luY2UgSSBhbSBoYXZpbmcgdHJvdWJsZSB3aXRoIHRlYXJkb3duXG4gICAgcmVzZXRBSSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaXQgPSBbXTtcbiAgICAgICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFNob3RXYXNIaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHBvbmVudFNoaXBzID0gW107XG4gICAgICAgIHRoaXMucG9zc2libGVIaXRzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlSGl0cyA9IFtdO1xuICAgICAgICB0aGlzLmN1ckRpciA9IG51bGw7XG4gICAgICAgIC8vRm9yIG11bHRpcGxlIHNoaXAgaW5zdGFuY2VzXG4gICAgICAgIHRoaXMuc3RvcmVkSGl0cyA9IFtdO1xuICAgIH0sXG5cbiAgICB3YXNIaXQgOiBmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zc2libGVIaXRzLmluY2x1ZGVzKGNvb3JkKTsgXG4gICAgfSxcblxuICAgIC8vVGhpcyBjaGVja3Mgd2hldGhlciBBSSBjYW4gZm9sbG93IHJlZ3VsYXIgcGF0dGVybiBvciBuZWVkcyB0byBjaGFuZ2UgZGlyZWN0aW9ucyBkdWUgdG8gbGltaXRzXG4gICAgY2hlY2tOZXh0QXZhaWxhYmxlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5sYXN0SGl0LCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICBjb25zdCByZXZlcnNlQXJyYXkgPSBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSh0aGlzLmFjdGl2ZUhpdHNbMF0sIHRoaXMubWlzc2VkLCB0aGlzLmhpdCk7XG4gICAgICAgIGlmIChwb3NzaWJsZUFycmF5LmluY2x1ZGVzKHRoaXMuY3VyRGlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdEhpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXZlcnNlQXJyYXkuaW5jbHVkZXMob3BwRGlyKHRoaXMuY3VyRGlyKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUhpdHNbMF07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hlY2tNdWx0aXBsZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPiAxICYmIHRoaXMuc3RvcmVkSGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlQXJyYXkgPSBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSh0aGlzLmxhc3RIaXQsIHRoaXMubWlzc2VkLCB0aGlzLmhpdCk7XG4gICAgICAgICAgICBjb25zdCByZXZlcnNlQXJyYXkgPSBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSh0aGlzLmFjdGl2ZUhpdHNbMF0sIHRoaXMubWlzc2VkLCB0aGlzLmhpdCk7XG4gICAgICAgICAgICBpZiAoIXBvc3NpYmxlQXJyYXkuaW5jbHVkZXModGhpcy5jdXJEaXIpICYmICFyZXZlcnNlQXJyYXkuaW5jbHVkZXMob3BwRGlyKHRoaXMuY3VyRGlyKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0b3JlZEhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXG4gICAgfSxcblxuICAgIGNvbmZpZ3VyZU11bHRpcGxlU2hpcHMgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JlZEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ0xlbmd0aCA9IHRoaXMuYWN0aXZlSGl0cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0aW5nTGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRIaXRzLnB1c2godGhpcy5hY3RpdmVIaXRzLnBvcCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0b3JlZEhpdHMubGVuZ3RoID4gMCAmJiB0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUhpdHMucHVzaCh0aGlzLnN0b3JlZEhpdHMucG9wKCkpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRlc3QgdG8gc2VlIHdoZXRoZXIgZ2VuZXJhdGVkIHNob3QgaXMgYSBoaXQgYW5kIGNoYW5nZXMgdGhlIG9iamVjdCBhY2NvcmRpbmdseVxuICAgIC8vIEVzc2VudGlhbGx5IHRoaXMgY29uZmlndXJlcyB0aGUgdmFyaWFibGVzIGltcG9ydGFudCBmb3IgZGVjaWRpbmcgb24gYSBzaG90XG4gICAgY29uZmlndXJlQUkgOiBmdW5jdGlvbiAobmV3U2hvdCkge1xuICAgICAgICB0aGlzLmxhc3RTaG90ID0gbmV3U2hvdDtcbiAgICAgICAgaWYgKHRoaXMud2FzSGl0KG5ld1Nob3QpKSB7XG4gICAgICAgICAgICB0aGlzLmhpdC5wdXNoKG5ld1Nob3QpO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdFdhc0hpdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RIaXQgPSBuZXdTaG90O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVIaXRzLnB1c2gobmV3U2hvdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NlZC5wdXNoKG5ld1Nob3QpO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdFdhc0hpdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTaG90O1xuICAgIH0sXG5cbiAgICAvL01haW4gbWV0aG9kXG4gICAgdGVzdEFJIDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUhpdHMgPSByZW1vdmVTdW5rU2hpcCh0aGlzLmFjdGl2ZUhpdHMsIHRoaXMub3Bwb25lbnRTaGlwcyk7XG4gICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSBzaGlwcyBhbmQgY29uZmlndXJlIG9iamVjdCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tNdWx0aXBsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZU11bHRpcGxlU2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICAvL0FmdGVyIGZpcnN0IGhpdCBhZnRlciByYW5kb20gcGVyaW9kXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NEaXIgPSBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSh0aGlzLmFjdGl2ZUhpdHNbMF0sIHRoaXMubWlzc2VkLCB0aGlzLmhpdCk7XG4gICAgICAgICAgICB0aGlzLmN1ckRpciA9IHBvc0RpcltyYW5kb21JbmRleChwb3NEaXIpXTtcbiAgICAgICAgICAgIGxldCBuZXdTaG90ID0gY3JlYXRlTmV3U2hvdCh0aGlzLmFjdGl2ZUhpdHNbMF0sIHRoaXMuY3VyRGlyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyZUFJKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vUmFuZG9tIFNob3RcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBnZXRPcGVuUG9zaXRpb25zKHRoaXMuaGl0LCB0aGlzLm1pc3NlZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdTaG90ID0gb3BlblBvc2l0aW9uc1tyYW5kb21JbmRleChvcGVuUG9zaXRpb25zKV07XG4gICAgICAgICAgICAvL0luIGNhc2Ugb2YgZnVsbEJvYXJkXG4gICAgICAgICAgICBpZiAobmV3U2hvdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlQUkobmV3U2hvdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWZ0ZXIgdHdvIG9yIG1vcmUgYWRqYWNlbnQgY29vcmRzIGhhdmUgYmVlbiBoaXRcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA+IDEgJiYgdGhpcy5sYXN0U2hvdFdhc0hpdCkge1xuICAgICAgICAgICAgY29uc3QgYnJhbmNoaW5nSGl0ID0gdGhpcy5jaGVja05leHRBdmFpbGFibGUoKTtcbiAgICAgICAgICAgIGlmIChicmFuY2hpbmdIaXQgPT09IHRoaXMuYWN0aXZlSGl0c1swXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gb3BwRGlyKHRoaXMuY3VyRGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdTaG90ID0gY3JlYXRlTmV3U2hvdChicmFuY2hpbmdIaXQsIHRoaXMuY3VyRGlyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyZUFJKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgbWlzcyBhZnRlciBjb25zZWN1dGl2ZSBoaXRzIHRvIGNoYW5nZSBkaXJlY3Rpb25zXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPiAxICYmICF0aGlzLmxhc3RTaG90V2FzSGl0KSB7XG4gICAgICAgICAgICB0aGlzLmN1ckRpciA9IG9wcERpcih0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICBsZXQgbmV3U2hvdCA9IGNyZWF0ZU5ld1Nob3QodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVBSShuZXdTaG90KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldE9wZW5Qb3NpdGlvbnMgKG1pc3NlZCwgaGl0KSB7XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGlmICghbWlzc2VkLmluY2x1ZGVzKGkpICYmICFoaXQuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3BlblBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3U2hvdCAocG9zaXRpb24sIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gLSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uICsgMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gKyAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gLTE7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIGhvdyB0aGUgY29tcHV0ZXIgd2lsbCBiZSBhYmxlIHRvIHRlbGwgaXQgaGFzIHN1bmsgYSBzaGlwXG4vLyBJZiBhY3RpdmVIaXRzLmxlbmd0aCA9PT0gMCBhZnRlciB0aGlzLCBjb21wdXRlciB3aWxsIHNob290IHJhbmRvbWx5IGFnYWluXG5mdW5jdGlvbiByZW1vdmVTdW5rU2hpcCAoYWN0aXZlLCBzaGlwcykge1xuICAgIGxldCBzdW5rUG9zaXRpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZS5pbmNsdWRlcyhzaGlwc1tpXS5wb3NpdGlvbnNbal0pKSB7XG4gICAgICAgICAgICAgICAgaGl0Q291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGl0Q291bnQgPT09IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN1bmtQb3NpdGlvbnMgPSBzaGlwc1tpXS5wb3NpdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW5rUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBhY3RpdmUubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIGlmIChzdW5rUG9zaXRpb25zLmluY2x1ZGVzKGFjdGl2ZVtqXSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGlyZWN0aW9uQXZhaWxhYmxlIChjb29yZCwgaGl0cywgbWlzc2VzKSB7XG4gICAgbGV0IHBvc3NpYmxlRGlyZWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHJvd0RpZiA9IDEwO1xuICAgIGNvbnN0IGNvbERpZiA9IDE7XG4gICAgY29uc3QgdXAgPSBjb29yZCAtIHJvd0RpZjtcbiAgICBpZiAodXAgPj0gMCAmJiBjaGVja05vdFNob3QodXAsIGhpdHMsIG1pc3NlcykpIHtcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLnB1c2goXCJ1cFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmlnaHQgPSBjb29yZCArIGNvbERpZjtcbiAgICBpZiAocmlnaHQgJSByb3dEaWYgIT09IDAgJiYgY2hlY2tOb3RTaG90KHJpZ2h0LCBoaXRzLCBtaXNzZXMpKSB7XG4gICAgICAgIHBvc3NpYmxlRGlyZWN0aW9ucy5wdXNoKFwicmlnaHRcIik7XG4gICAgfVxuICAgIGNvbnN0IGRvd24gPSBjb29yZCArIHJvd0RpZjtcbiAgICBpZiAoZG93biA8IDEwMCAmJiBjaGVja05vdFNob3QoZG93biwgaGl0cywgbWlzc2VzKSkge1xuICAgICAgICBwb3NzaWJsZURpcmVjdGlvbnMucHVzaChcImRvd25cIik7XG4gICAgfVxuICAgIGNvbnN0IGxlZnQgPSBjb29yZCAtIGNvbERpZjtcbiAgICBpZiAobGVmdCAlIHJvd0RpZiAhPT0gOSAmJiBjaGVja05vdFNob3QobGVmdCwgaGl0cywgbWlzc2VzKSkge1xuICAgICAgICBwb3NzaWJsZURpcmVjdGlvbnMucHVzaChcImxlZnRcIik7XG4gICAgfVxuICAgIHJldHVybiBwb3NzaWJsZURpcmVjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTm90U2hvdCAoY29vcmQsIGhpdEFycmF5LCBtaXNzQXJyYXkpIHtcbiAgICBpZiAoIWhpdEFycmF5LmluY2x1ZGVzKGNvb3JkKSAmJiAhbWlzc0FycmF5LmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7ZmFsc2U7fVxufVxuXG5mdW5jdGlvbiBvcHBEaXIoZGlyKSB7XG4gICAgaWYgKGRpciA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIHJldHVybiBcImRvd25cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXIgPT09IFwiZG93blwiKSB7XG4gICAgICAgIHJldHVybiBcInVwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpciA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICB9XG59XG5cbi8vSSB3aWxsIGJlIHVzaW5nIHRoaXMgYSBsb3RcbmZ1bmN0aW9uIHJhbmRvbUluZGV4IChhcnJheSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xufVxuXG5leHBvcnQgeyBjb21wQUkgfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmQgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy9PcmRlciBvZiBwb3NpdGlvbnMgYXJyYXkgbGluZXMgdXAgd2l0aCBvcmRlciBvZiBzaGlwcyBhcnJheS5cbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBsZXQgaGl0U2hvdHMgPSBbXTtcbiAgICBjb25zdCByb3dTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAgKHBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUgKSB7XG4gICAgICAgIGxldCBzaGlwU3BvdHMgPSBbXTtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIHJvd1NpemUgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKFNoaXAgKG5hbWUsIHNoaXBTcG90cykpO1xuICAgICAgICByZXR1cm4gc2hpcFNwb3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHBvc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvbnNbal0gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xvc2VDb25kaXRpb24gKCkge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IHsgcmV0dXJuIGVsZW1lbnQuaXNTdW5rKCk7fSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBDYW5CZVBsYWNlZCAoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vQ29sbGlzaW9ucyhheGlzLCBpLCBsZW5ndGgpICYmIGluc2lkZUJvYXJkKGF4aXMsIGksIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlUG9zaXRpb25zO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBub0NvbGxpc2lvbnMgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSAqIHJvd1NpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zaWRlQm9hcmQgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiICYmIHBvc2l0aW9uICUgMTAgKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiICYmIHBvc2l0aW9uICsgKGxlbmd0aCAtIDEpICogcm93U2l6ZSA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkRE9NICh0eXBlKSB7XG4gICAgICAgIHJlbmRlckJvYXJkKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgc2hpcENhbkJlUGxhY2VkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgbWlzc2VkU2hvdHMsXG4gICAgICAgIGNoZWNrTG9zZUNvbmRpdGlvbixcbiAgICAgICAgdXBkYXRlQm9hcmRET00sXG4gICAgICAgIHNoaXBDYW5CZVBsYWNlZFxuICAgIH1cbn1cblxuZXhwb3J0IHtHYW1lQm9hcmR9OyIsIlxuXG5hc3luYyBmdW5jdGlvbiBhZGRIaXRCdXR0b25zIChhdHRhY2tlZFBvc2l0aW9ucykge1xuICAgIGNvbnN0IGVuZW15VGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteSBidXR0b24nKTtcbiAgICBjb25zdCBoaXRQcm9taXNlID0gbmV3IFByb21pc2UgKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGVuZW15VGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrZWRQb3NpdGlvbnMuaW5jbHVkZXMoTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IGhpdFByb21pc2U7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjaG9vc2VTaGlwUG9zaXRpb24oKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudCBidXR0b24nKTtcbiAgICBjb25zdCBwbGFjZW1lbnRQcm9taXNlID0gbmV3IFByb21pc2UgKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocG9zaXRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBwbGFjZW1lbnRQcm9taXNlO1xufTtcblxuZXhwb3J0IHthZGRIaXRCdXR0b25zLCBjaG9vc2VTaGlwUG9zaXRpb24sIH07IiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBhZGRIaXRCdXR0b25zLCBjaG9vc2VTaGlwUG9zaXRpb259IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGFkZEF4aXNCdXR0b24sIGNsZWFyQm9hcmRTZWN0aW9uLCBzaG93QXZhaWxhYmxlUG9zaXRpb25zLCBzaG93UG9zc2libGVQbGFjZW1lbnQsIHJlbW92ZUN1cnJlbnRQbGFjZW1lbnQgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IGNvbXBBSSB9IGZyb20gXCIuL2NvbXBBSVwiO1xuXG5jb25zdCBQbGF5ZXIgPSAodHlwZSkgPT4ge1xuICAgIGxldCBhdHRhY2tlZFBvc2l0aW9ucyA9IFtdO1xuICAgIGxldCBvcGVuUG9zaXRpb25zID0gQXJyYXkuZnJvbShBcnJheSgxMDApLmtleXMoKSk7XG4gICAgbGV0IHBsYXllckJvYXJkID0gR2FtZUJvYXJkKClcbiAgICBsZXQgYXhpcyA9IFwieFwiO1xuXG4gICAgLy9EaWZmZXJlbnQgQXBwcm9hY2ggdG8gQUksIHRyeWluZyBtb3JlIE9PUCB3YXlcbiAgICBsZXQgYWkgPSBjb21wQUk7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb21wSGl0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYWkucG9zc2libGVIaXRzKTtcbiAgICAgICAgcmV0dXJuIGFpLnRlc3RBSSgpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHdoZXRoZXIgYSBzaGlwIGhhcyBiZWVuIHN1bmsgaW4gdGhlIHJlY2VudCBhaW1lZCBzaG90c1xuICAgIGZ1bmN0aW9uIGhpdHNTdW5rU2hpcCAoKSB7XG4gICAgICAgIGNvbnN0IGVuZW15U2hpcHMgPSBvcHBvbmVudEJvYXJkLnNoaXBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15U2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVuZW15U2hpcHNbaV0ucG9zaXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZIaXRzLmluY2x1ZGVzKGVuZW15U2hpcHNbaV0ucG9zaXRpb25zW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoaXRDb3VudCA9PT0gZW5lbXlTaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVjZW50U3Vua1Bvc2l0aW9ucyA9IGVuZW15U2hpcHNbaV0ucG9zaXRpb25zO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhdHRhY2tFbmVteSAoKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2VuZXJhdGVDb21wSGl0KCk7XG4gICAgICAgICAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMuc3BsaWNlKHBvc2l0aW9uIC0gYXR0YWNrZWRQb3NpdGlvbnMubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBOdW1iZXIoYXdhaXQgYWRkSGl0QnV0dG9ucyhhdHRhY2tlZFBvc2l0aW9ucykpO1xuICAgICAgICAgICAgYXR0YWNrZWRQb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgICBvcGVuUG9zaXRpb25zLnNwbGljZShwb3NpdGlvbiAtIGF0dGFja2VkUG9zaXRpb25zLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXhpc1RvZ2dsZSAoKSB7XG4gICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy10b2dnbGUnKTtcbiAgICAgICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBcInlcIlxuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cEJvYXJkICgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGFkZEF4aXNCdXR0b24oYXhpcyk7XG4gICAgICAgICAgICBheGlzVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDUsIFwiQ2FycmllclwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDMsIFwiRGVzdHJveWVyXCIpO1xuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoMywgXCJTdWJtYXJpbmVcIik7XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwU2hpcCAobGVuZ3RoLCBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIGF4aXMgPSAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwieFwiIDogXCJ5XCIpO1xuICAgICAgICAgICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBwbGF5ZXJCb2FyZC5zaGlwQ2FuQmVQbGFjZWQoYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gb3BlblBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcGVuUG9zaXRpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHJhbmRvbVBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zWCA9IHBsYXllckJvYXJkLnNoaXBDYW5CZVBsYWNlZChcInhcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zWSA9IHBsYXllckJvYXJkLnNoaXBDYW5CZVBsYWNlZChcInlcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHN3aXRjaE9wZW5zKG9wZW5Qb3NpdGlvbnNYLCBvcGVuUG9zaXRpb25zWSwgbGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE51bWJlcihhd2FpdCBjaG9vc2VTaGlwUG9zaXRpb24oKSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwU3BvdHMgPSBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocG9zaXRpb24sIGF4aXMsIGxlbmd0aCwgbmFtZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTcG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtzaGlwU3BvdHNbaV19XCJdYCk7XG4gICAgICAgICAgICAgICAgYm9hcmRTcG90LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaE9wZW5zICh4UG9zLCB5UG9zLCBsZW5ndGgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGFjZW1lbnRcIik7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh4UG9zKTtcbiAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeFBvcywgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh5UG9zKTtcbiAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeVBvcywgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMtdG9nZ2xlJyk7XG4gICAgICAgIGF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHhQb3MpO1xuICAgICAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeFBvcywgZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHlQb3MpO1xuICAgICAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeVBvcywgZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgfTtcblxuICAgIC8vIEkgZGlzbGlrZSBoYXJkIGNvZGluZyB0aGluZ3MsIGJ1dCBJIG5lZWQgdG8gZG8gdGhpcyBmb3IgdGhlIGF4aXN0b2dnbGUgYnV0dG9uLlxuICAgIC8vIFRoZSBwbGFjZW1lbnQgc2l6ZSBzdGF5cyBhdCBmaXZlIHVubGVzcyBJIGNhbmNlbCB0aGUgZXZlbnQgbGlzdGVuZXJzIHJlcXVpcmVkXG4gICAgLy8gZm9yIHRoZSBhc3luYyBwbGF5ZXIgcGlja1xuICAgIGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UGxhY2VtZW50ID0gcGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGFjZW1lbnQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNSAtIGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGFjZW1lbnQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNiAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UGxhY2VtZW50IChwb3NpdGlvbnMsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBib2FyZFBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgICAgIGJvYXJkUG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IE51bWJlcihwb3NpdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpKTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93UG9zc2libGVQbGFjZW1lbnQoYXhpcywgbGVuZ3RoLCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVDdXJyZW50UGxhY2VtZW50KGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge3Bvc2l0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIil9O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVBsYWNlbWVudEJvYXJkICgpIHtcbiAgICAgICAgY2xlYXJCb2FyZFNlY3Rpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2tFbmVteSxcbiAgICAgICAgc2V0dXBCb2FyZCxcbiAgICAgICAgcmVtb3ZlUGxhY2VtZW50Qm9hcmQsXG4gICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICBhaSxcbiAgICAgICAgYXR0YWNrZWRQb3NpdGlvbnNcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9OyIsIlxuY29uc3QgU2hpcCA9IChuYW1lLCBwb3NpdGlvbnMpID0+IHtcblxuICAgIGxldCBoaXRzID0gW107XG4gICAgZnVuY3Rpb24gaGl0IChwb3NpdGlvbikge1xuICAgICAgICBpZiAoIWhpdHMuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3VuayAoKSB7XG4gICAgICAgIHJldHVybiBoaXRzLmxlbmd0aCA9PT0gcG9zaXRpb25zLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgcG9zaXRpb25zXG4gICAgfVxufVxuXG5leHBvcnQge1NoaXB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuY29uc3QgcEJvYXJkID0gcGxheWVyLnBsYXllckJvYXJkO1xuY29uc3QgY0JvYXJkID0gY29tcHV0ZXIucGxheWVyQm9hcmQ7XG5cbmNvbXB1dGVyLnNldHVwQm9hcmQoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZUZsb3cgKCkge1xuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYWNlbWVudFwiKTtcbiAgICAvL3dhaXRUZXN0IGlzIHRlbXBvcmFyeSB3aGlsZSBJIHVuZGVyc3RhbmQgYXN5bmNocm9ub3VzIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIHdhaXRUZXN0KHgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXdhaXQgcGxheWVyLnNldHVwQm9hcmQoKTtcbiAgICBhd2FpdCB3YWl0VGVzdCgxMCk7XG4gICAgcGxheWVyLnJlbW92ZVBsYWNlbWVudEJvYXJkKClcbiAgICBjb21wdXRlci5haS5hZGRPcHBvbmVudFNoaXBzKHBCb2FyZCk7XG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbiAgICBkbyB7XG4gICAgICAgIGlmICh0dXJuICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgY0JvYXJkLnJlY2VpdmVBdHRhY2soYXdhaXQgcGxheWVyLmF0dGFja0VuZW15KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcEJvYXJkLnJlY2VpdmVBdHRhY2soYXdhaXQgY29tcHV0ZXIuYXR0YWNrRW5lbXkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcEJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxheWVyXCIpO1xuICAgICAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbiAgICAgICAgdHVybisrXG4gICAgfVxuICAgIHdoaWxlICghcEJvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpICYmICFjQm9hcmQuY2hlY2tMb3NlQ29uZGl0aW9uKCkpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1zZWN0aW9uJyk7XG4gICAgaWYgKHBCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJDb21wdXRlciBoYXMgd29uIHRoZSBnYW1lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgaGFzIHdvbiB0aGUgZ2FtZVwiXG4gICAgfVxuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbn1cblxuZ2FtZUZsb3coKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==