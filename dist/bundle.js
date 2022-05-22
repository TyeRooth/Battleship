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

/***/ "./src/computerAI.js":
/*!***************************!*\
  !*** ./src/computerAI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerAI": () => (/* binding */ computerAI)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


let nextHits = [];
let opponentBoard;
let alreadyAttacked = [];
let rememberSplit;

// The board used by the AI is a copy of the player's board so they can detect sunk ships
function computerAI (prevHits, board, attackedPositions, startRandom, hitLastTurn) {
    opponentBoard = board;
    alreadyAttacked = attackedPositions;
    console.log(nextHits);
    console.log(prevHits);

    //Making it so that the computer is random for now
    if(true) {return randomShot()};

    //Once AI has found multiple ship direction
    console.log(checkForMultipleAxis(prevHits))
    if (checkForMultipleAxis(prevHits) && hitLastTurn && prevHits.length > 1) {
        console.log("multiple axis");
        const newShipArray = [prevHits[prevHits.length - 2], prevHits[prevHits.length - 1]];
        console.log(newShipArray);
        return caseThree(newShipArray);
    }

    else if (checkForMultipleAxis(prevHits) && prevHits.length > 1) {
        console.log("working good");
        return caseFour(prevHits, hitLastTurn);
    }

    // Remove hits from sunk ship so computer starts attacking other grouped ship(s)

    //Case 0: No previous hits, computer makes random shot
    else if (startRandom && prevHits.length === 0) {
        return randomShot();
    }

    //Case 1: Computer has made their first hit after random shooting turns
    //Case 2: Computer has missed after a first hit shot
    //Difference between to the two is Bool of hitLastTurn
    else if (prevHits.length === 1) {
        return caseOne(prevHits[0]);
    }

    //Case 3: Computer has made two hits adjacent to each other
    else if (prevHits.length === 2) {
        //Cond. needed for special case where computer two boats are beside each other
        if (hitLastTurn) {
            return caseThree (prevHits); 
        }
    }

    //Case 4: Computer has determined direction and all possible next hits
    else if (prevHits.length > 2 && nextHits.length !== 0) {
        return caseFour(prevHits, hitLastTurn);
    }

        //Case 5: Computer hits multiple ships in same set
    //Before case 3 due to how cond. work
    else if (nextHits.length === 0 && prevHits.length > 1) {
        console.log("multipleships");
        const randomIndex = Math.floor(Math.random() * prevHits.length);
        emptyNexts();
        console.log(nextHits);
        return caseOne(prevHits[prevHits.length - 1]);
    }
}

function emptyNexts () {
    nextHits.splice(0, nextHits.length);
}

function caseOne (position) {
    nextHits = checkBoardEdge(position);
    nextHits = checkAlreadyHit(nextHits);
    return nextHits;
}

function caseThree (prevHits) {
    nextHits.length = 0;
    // Difference determines whether the ship is vertical or horizontal.
    // Difference of 10 for vertical and 1 for horizontal.
    const difference = prevHits[1] - prevHits[0];
    addFutureShots(difference, prevHits);
    // The AI should have generated a full next steps list as this point
    const next = [nextHits[0]];
    nextHits.splice(0, 1);
    return next;
}

function caseFour (prevHits, hitLastTurn) {
    if (!hitLastTurn) {
        const difference = prevHits[1] - prevHits[0];
        //first set deals with initial direction
        if (difference > 0) {
            nextHits = nextHits.filter(hit => hit < prevHits[1]);
        }
        else if (difference < 0) {
            nextHits = nextHits.filter(hit => hit > prevHits[0]);
        }
        // Second set deals with opposite direction
        const difAbs = Math.abs(difference);
        if(Math.max(prevHits) + difAbs * 1 < nextHits[0]) {
            nextHits = nextHits.filter(hit => hit < nextHits[0]);
        }
        else if (Math.max(prevHits) + difAbs * 1 < nextHits[0]) {
            nextHits = nextHits.filter(hit => hit > nextHits[0]);
        }
    }
    const next = [nextHits[0]];
    nextHits.splice(0, 1);
    return next; 
}

function checkForMultipleAxis (pastHits) {
    const rowSize = 10;
    const row = Math.floor(pastHits[0] / rowSize);
    const column = pastHits[0] % rowSize;
    const columnCheck = pastHits.some(difColumn);
    const rowCheck = pastHits.some(difRow);
    if (columnCheck && rowCheck) {
        return true;
    }
    else {return false};
    function difColumn (element) {
        return (element % rowSize) !== column;
    }
    function difRow (element) {
        return (Math.floor(element / rowSize)) !== row;
    }
}

function randomShot () {
    let openPositions = Array.from(Array(100).keys());
    for (let i = openPositions.length - 1; i > 0; i--) {
        if (alreadyAttacked.includes(openPositions[i])) {
            openPositions.splice(i, 1);
        }
    };
    let index = Math.floor(Math.random() * openPositions.length);
    return [openPositions[index]];
}

function addFutureShots (difference, pastHits) {
    const newHit = pastHits[pastHits.length -1]
    // Loop through and three possible hits in each direction unless already attacked or border
    for (let i = 1; i <= 3; i++) {
        const nextTurn = [newHit + difference * i];
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
    // Opposite direction possibilities
    for (let i = 1; i <= 3; i++) {
        const nextTurn = [pastHits[0] - difference * i];
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
}

// Separate border function needed for getting next hits
function checkWithinBoard (possible, alreadyHit, difference) {
    const rowChange = 10;
    const columnChange = 1;
    if (Math.abs(difference) === rowChange) {
        if (possible < 0 || possible > 99) {
            return false;
        }
        return true;
    }
    if (Math.abs(difference) === columnChange) {
        const row = getRow(alreadyHit);
        // Have to add !== 0 to account for 0 / 10 edge case
        if(getRow(possible) !== row && possible !== 0) {
            return false;
        }
        return true;
    }
    function getRow (position) {
        return Math.floor(position / 10);
    }
}

function checkAlreadyHit (possibleHits) {
    possibleHits = possibleHits.filter(option => !opponentBoard.missedShots.includes(option));
    possibleHits = possibleHits.filter(option => !alreadyAttacked.includes(option));
    return possibleHits;
}

function checkBoardEdge (lastHit) {
    let possibleNextHits = [];
    if (lastHit >= 10) {
        possibleNextHits.push(lastHit - 10);
    }
    if (lastHit % 10 !== 9) {
        possibleNextHits.push(lastHit + 1);
    }
    if (lastHit < 90) {
        possibleNextHits.push(lastHit + 10);
    }
    if (lastHit % 10 !== 0) {
        possibleNextHits.push(lastHit - 1);
    }
    return possibleNextHits;
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
/* harmony export */   "chooseShipPosition": () => (/* binding */ chooseShipPosition),
/* harmony export */   "computerChooses": () => (/* binding */ computerChooses)
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

function computerChooses (lastHit, attackedPositions) {
    let possibleNextHits = [];
    if (lastHit >= 10) {
        possibleNextHits.push(lastHit - 10);
    }
    if (lastHit % 10 !== 9) {
        possibleNextHits.push(lastHit - 1);
    }
    if (lastHit < 90) {
        possibleNextHits.push(lastHit + 10);
    }
    if (lastHit % 10 !== 0) {
        possibleNextHits.push(lastHit + 1);
    }
    for (let i = 0; i < possibleNextHits.length; i++) {
        if (attackedPositions.includes(possibleNextHits[i])) {
            possibleNextHits.splice(i, 1);
        }
    }
    return possibleNextHits
}



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
/* harmony import */ var _computerAI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerAI */ "./src/computerAI.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()
    let axis = "x";

    //These variables are all important for computer AI.
    let hitLastTurn = false;
    let prevHits = [];
    let opponentBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    let startRandom = true;
    let recentSunkPositions = [];

    function configureMemory (result, position, opponent) {
        // This configuration leads back to random picks
        // Computer stops purposeful picking once ship has been sunk
        opponentBoard = opponent;
        if (hitsSunkShip()) {
            prevHits = prevHits.filter(position => !recentSunkPositions.includes(position));
        }
        // Add hit to current hit array if successful
        if (result) {
            prevHits.push(position);
        }
        // Unfortunately, I need to check for sunk to add it to AI cond.
        startRandom = !hitsSunkShip() && prevHits.length !== 0 ? false : true;
        hitLastTurn = result;
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

    function computerChooses () {
        const possibleOptions = (0,_computerAI__WEBPACK_IMPORTED_MODULE_2__.computerAI)(prevHits, opponentBoard, attackedPositions, startRandom, hitLastTurn);
        console.log(possibleOptions);
        let index = Math.floor(Math.random() * possibleOptions.length);
        const shot = possibleOptions[index];
        return shot;
    };

    async function attackEnemy () {
        if (type === "computer") {
            const chosenPosition = computerChooses();
            const positionIndex = openPositions.findIndex(index => index === chosenPosition);
            openPositions.splice(positionIndex, 1);
            attackedPositions.push(chosenPosition);
            return chosenPosition;
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
            (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.addAxisButton)(axis);
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
            (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showAvailablePositions)(xPos);
            showPlacement(xPos, length);
        }
        else if (axis === "y") {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showAvailablePositions)(yPos);
            showPlacement(yPos, length);
        }
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showAvailablePositions)(xPos);
                showPlacement(xPos, getLength());
            }
            else if (axis === "y") {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showAvailablePositions)(yPos);
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
                    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showPossiblePlacement)(axis, length, coordinate);
                });
                position.addEventListener('mouseleave', () => {
                    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.removeCurrentPlacement)(axis, length, coordinate);
                })
            }
            else {position.classList.remove("possible-placement")};
        })
    }

    function removePlacementBoard () {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.clearBoardSection)();
    }

    return {
        attackEnemy,
        setupBoard,
        removePlacementBoard,
        configureMemory,
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
    let turn = 0;
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
    do {
        if (turn % 2 === 0) {
            cBoard.receiveAttack(await player.attackEnemy());
        }
        else {
            const position = await computer.attackEnemy()
            const result = pBoard.receiveAttack(position);
            computer.configureMemory(result, position, pBoard);
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
        message.textContent = "Player has won the game";
    }
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOOEI7QUFDTTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBSTtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QywyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHdDO0FBQ3FCO0FBQ3JCO0FBQ3dGOztBQUVoSTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVM7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFTO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsdURBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0REFBa0I7QUFDMUQ7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xELDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBc0I7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBcUI7QUFDekMsaUJBQWlCO0FBQ2pCO0FBQ0Esb0JBQW9CLDREQUFzQjtBQUMxQyxpQkFBaUI7QUFDakI7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSx1REFBaUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNhOztBQUVsQyxlQUFlLCtDQUFNO0FBQ3JCLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlckFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGhlaWdodDogN3ZoO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLmJvYXJkLXN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkaW5nIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNheGlzLXRvZ2dsZSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlcixcXG5idXR0b24ucG9zc2libGUtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udW5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxufVxcblxcbi51bmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbmVteSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5lbmVteSBidXR0b24uc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOERBQThEO0lBQzlELFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRpbmctc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGhlaWdodDogNzJ2aDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi5ib2FyZC1zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtaGVhZGluZyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jYXhpcy10b2dnbGUge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbiNjcmVkaXQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnBvc2l0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIsXFxuYnV0dG9uLnBvc3NpYmxlLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnVuYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbn1cXG5cXG4udW5hdmFpbGFibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZW5lbXkgYnV0dG9uLnNob3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQgKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcFNwb3RzKSB7XG5cbiAgICBjb25zdCBib2FyZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmRzLXNlY3Rpb24nKTtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZE5vZGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtc3VtbWFyeScpO1xuICAgIGNvbnN0IGJvYXJkSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcodHlwZSk7XG4gICAgYm9hcmROb2RlLmFwcGVuZENoaWxkKGJvYXJkSGVhZGluZyk7XG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChgJHsgdHlwZSB9YClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgncG9zaXRpb24nKTtcbiAgICAgICAgcG9zaXRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJywgaSk7XG4gICAgICAgIGlmIChtaXNzZWRTaG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnc2hvdCcpO1xuICAgICAgICAgICAgcG9zaXRpb24uYXBwZW5kQ2hpbGQobWlzc2VkU2hvdERPTSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoaXRTaG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnc2hvdCcpO1xuICAgICAgICAgICAgcG9zaXRpb24uYXBwZW5kQ2hpbGQoaGl0U2hvdERPTSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIiAmJiBzaG93U2hpcHMoc2hpcFNwb3RzLCBpKSkge1xuICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwbGFjZW1lbnRcIiAmJiBzaG93U2hpcHMoc2hpcFNwb3RzLCBpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocG9zaXRpb24pO1xuICAgIH07XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHsgdHlwZSB9YCkpIHtcbiAgICAgICAgYm9hcmROb2RlLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjdXJyZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHsgdHlwZSB9YCk7XG4gICAgICAgIGN1cnJlbnRCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGN1cnJlbnRCb2FyZC5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gc2hvd1NoaXBzKHNoaXBTcG90cywgcG9zaXRpb24pIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzaGlwU3BvdHNbaV0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHR5cGUpIHtcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmdOb2RlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWhlYWRpbmcnKTtcbiAgICBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IFwiRnJpZW5kbHkgV2F0ZXJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiZW5lbXlcIikge1xuICAgICAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IFwiRW5lbXkgV2F0ZXJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxhY2VtZW50XCIpIHtcbiAgICAgICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIlJlYWR5IHlvdXIgU2hpcHNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRpbmdOb2RlXG59XG5cbmZ1bmN0aW9uIG1pc3NlZFNob3RET00gKCkge1xuICAgIGNvbnN0IG1pc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaXNzQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIG1pc3NDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHJldHVybiBtaXNzQ2lyY2xlO1xufVxuXG5mdW5jdGlvbiBoaXRTaG90RE9NIChwb3NpdGlvbikge1xuICAgIGNvbnN0IGhpdENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICBoaXRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICByZXR1cm4gaGl0Q2lyY2xlO1xufVxuXG5mdW5jdGlvbiBhZGRBeGlzQnV0dG9uIChheGlzKSB7XG4gICAgY29uc3QgYm9hcmRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWhlYWRpbmcnKTtcbiAgICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F4aXMtdG9nZ2xlJyk7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWVwiO1xuICAgIH1cbiAgICBib2FyZEhlYWRpbmcuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHNob3dBdmFpbGFibGVQb3NpdGlvbnMob3BlblBvc2l0aW9ucykge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgcG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICBpZiAob3BlblBvc2l0aW9ucy5pbmNsdWRlcyhOdW1iZXIocG9zaXRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndW5hdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2hvd1Bvc3NpYmxlUGxhY2VtZW50IChheGlzLCBsZW5ndGgsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpfVwiXWApO1xuICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpICogMTB9XCJdYCk7XG4gICAgICAgICAgICBwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvc3NpYmxlLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFBsYWNlbWVudCAoYXhpcywgbGVuZ3RoLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtjb29yZGluYXRlICsgaX1cIl1gKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9zc2libGUtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtjb29yZGluYXRlICsgaSAqIDEwfVwiXWApO1xuICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZFNlY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZHMtc2VjdGlvbicpO1xuICAgIGJvYXJkU2VjdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkLCBhZGRBeGlzQnV0dG9uLCBjbGVhckJvYXJkU2VjdGlvbiwgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucywgc2hvd1Bvc3NpYmxlUGxhY2VtZW50LCByZW1vdmVDdXJyZW50UGxhY2VtZW50IH07IiwiaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5sZXQgbmV4dEhpdHMgPSBbXTtcbmxldCBvcHBvbmVudEJvYXJkO1xubGV0IGFscmVhZHlBdHRhY2tlZCA9IFtdO1xubGV0IHJlbWVtYmVyU3BsaXQ7XG5cbi8vIFRoZSBib2FyZCB1c2VkIGJ5IHRoZSBBSSBpcyBhIGNvcHkgb2YgdGhlIHBsYXllcidzIGJvYXJkIHNvIHRoZXkgY2FuIGRldGVjdCBzdW5rIHNoaXBzXG5mdW5jdGlvbiBjb21wdXRlckFJIChwcmV2SGl0cywgYm9hcmQsIGF0dGFja2VkUG9zaXRpb25zLCBzdGFydFJhbmRvbSwgaGl0TGFzdFR1cm4pIHtcbiAgICBvcHBvbmVudEJvYXJkID0gYm9hcmQ7XG4gICAgYWxyZWFkeUF0dGFja2VkID0gYXR0YWNrZWRQb3NpdGlvbnM7XG4gICAgY29uc29sZS5sb2cobmV4dEhpdHMpO1xuICAgIGNvbnNvbGUubG9nKHByZXZIaXRzKTtcblxuICAgIC8vTWFraW5nIGl0IHNvIHRoYXQgdGhlIGNvbXB1dGVyIGlzIHJhbmRvbSBmb3Igbm93XG4gICAgaWYodHJ1ZSkge3JldHVybiByYW5kb21TaG90KCl9O1xuXG4gICAgLy9PbmNlIEFJIGhhcyBmb3VuZCBtdWx0aXBsZSBzaGlwIGRpcmVjdGlvblxuICAgIGNvbnNvbGUubG9nKGNoZWNrRm9yTXVsdGlwbGVBeGlzKHByZXZIaXRzKSlcbiAgICBpZiAoY2hlY2tGb3JNdWx0aXBsZUF4aXMocHJldkhpdHMpICYmIGhpdExhc3RUdXJuICYmIHByZXZIaXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtdWx0aXBsZSBheGlzXCIpO1xuICAgICAgICBjb25zdCBuZXdTaGlwQXJyYXkgPSBbcHJldkhpdHNbcHJldkhpdHMubGVuZ3RoIC0gMl0sIHByZXZIaXRzW3ByZXZIaXRzLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U2hpcEFycmF5KTtcbiAgICAgICAgcmV0dXJuIGNhc2VUaHJlZShuZXdTaGlwQXJyYXkpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKGNoZWNrRm9yTXVsdGlwbGVBeGlzKHByZXZIaXRzKSAmJiBwcmV2SGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZyBnb29kXCIpO1xuICAgICAgICByZXR1cm4gY2FzZUZvdXIocHJldkhpdHMsIGhpdExhc3RUdXJuKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgaGl0cyBmcm9tIHN1bmsgc2hpcCBzbyBjb21wdXRlciBzdGFydHMgYXR0YWNraW5nIG90aGVyIGdyb3VwZWQgc2hpcChzKVxuXG4gICAgLy9DYXNlIDA6IE5vIHByZXZpb3VzIGhpdHMsIGNvbXB1dGVyIG1ha2VzIHJhbmRvbSBzaG90XG4gICAgZWxzZSBpZiAoc3RhcnRSYW5kb20gJiYgcHJldkhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByYW5kb21TaG90KCk7XG4gICAgfVxuXG4gICAgLy9DYXNlIDE6IENvbXB1dGVyIGhhcyBtYWRlIHRoZWlyIGZpcnN0IGhpdCBhZnRlciByYW5kb20gc2hvb3RpbmcgdHVybnNcbiAgICAvL0Nhc2UgMjogQ29tcHV0ZXIgaGFzIG1pc3NlZCBhZnRlciBhIGZpcnN0IGhpdCBzaG90XG4gICAgLy9EaWZmZXJlbmNlIGJldHdlZW4gdG8gdGhlIHR3byBpcyBCb29sIG9mIGhpdExhc3RUdXJuXG4gICAgZWxzZSBpZiAocHJldkhpdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjYXNlT25lKHByZXZIaXRzWzBdKTtcbiAgICB9XG5cbiAgICAvL0Nhc2UgMzogQ29tcHV0ZXIgaGFzIG1hZGUgdHdvIGhpdHMgYWRqYWNlbnQgdG8gZWFjaCBvdGhlclxuICAgIGVsc2UgaWYgKHByZXZIaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvL0NvbmQuIG5lZWRlZCBmb3Igc3BlY2lhbCBjYXNlIHdoZXJlIGNvbXB1dGVyIHR3byBib2F0cyBhcmUgYmVzaWRlIGVhY2ggb3RoZXJcbiAgICAgICAgaWYgKGhpdExhc3RUdXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FzZVRocmVlIChwcmV2SGl0cyk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9DYXNlIDQ6IENvbXB1dGVyIGhhcyBkZXRlcm1pbmVkIGRpcmVjdGlvbiBhbmQgYWxsIHBvc3NpYmxlIG5leHQgaGl0c1xuICAgIGVsc2UgaWYgKHByZXZIaXRzLmxlbmd0aCA+IDIgJiYgbmV4dEhpdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjYXNlRm91cihwcmV2SGl0cywgaGl0TGFzdFR1cm4pO1xuICAgIH1cblxuICAgICAgICAvL0Nhc2UgNTogQ29tcHV0ZXIgaGl0cyBtdWx0aXBsZSBzaGlwcyBpbiBzYW1lIHNldFxuICAgIC8vQmVmb3JlIGNhc2UgMyBkdWUgdG8gaG93IGNvbmQuIHdvcmtcbiAgICBlbHNlIGlmIChuZXh0SGl0cy5sZW5ndGggPT09IDAgJiYgcHJldkhpdHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm11bHRpcGxlc2hpcHNcIik7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJldkhpdHMubGVuZ3RoKTtcbiAgICAgICAgZW1wdHlOZXh0cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXh0SGl0cyk7XG4gICAgICAgIHJldHVybiBjYXNlT25lKHByZXZIaXRzW3ByZXZIaXRzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVtcHR5TmV4dHMgKCkge1xuICAgIG5leHRIaXRzLnNwbGljZSgwLCBuZXh0SGl0cy5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBjYXNlT25lIChwb3NpdGlvbikge1xuICAgIG5leHRIaXRzID0gY2hlY2tCb2FyZEVkZ2UocG9zaXRpb24pO1xuICAgIG5leHRIaXRzID0gY2hlY2tBbHJlYWR5SGl0KG5leHRIaXRzKTtcbiAgICByZXR1cm4gbmV4dEhpdHM7XG59XG5cbmZ1bmN0aW9uIGNhc2VUaHJlZSAocHJldkhpdHMpIHtcbiAgICBuZXh0SGl0cy5sZW5ndGggPSAwO1xuICAgIC8vIERpZmZlcmVuY2UgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzaGlwIGlzIHZlcnRpY2FsIG9yIGhvcml6b250YWwuXG4gICAgLy8gRGlmZmVyZW5jZSBvZiAxMCBmb3IgdmVydGljYWwgYW5kIDEgZm9yIGhvcml6b250YWwuXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHByZXZIaXRzWzFdIC0gcHJldkhpdHNbMF07XG4gICAgYWRkRnV0dXJlU2hvdHMoZGlmZmVyZW5jZSwgcHJldkhpdHMpO1xuICAgIC8vIFRoZSBBSSBzaG91bGQgaGF2ZSBnZW5lcmF0ZWQgYSBmdWxsIG5leHQgc3RlcHMgbGlzdCBhcyB0aGlzIHBvaW50XG4gICAgY29uc3QgbmV4dCA9IFtuZXh0SGl0c1swXV07XG4gICAgbmV4dEhpdHMuc3BsaWNlKDAsIDEpO1xuICAgIHJldHVybiBuZXh0O1xufVxuXG5mdW5jdGlvbiBjYXNlRm91ciAocHJldkhpdHMsIGhpdExhc3RUdXJuKSB7XG4gICAgaWYgKCFoaXRMYXN0VHVybikge1xuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gcHJldkhpdHNbMV0gLSBwcmV2SGl0c1swXTtcbiAgICAgICAgLy9maXJzdCBzZXQgZGVhbHMgd2l0aCBpbml0aWFsIGRpcmVjdGlvblxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICAgICAgIG5leHRIaXRzID0gbmV4dEhpdHMuZmlsdGVyKGhpdCA9PiBoaXQgPCBwcmV2SGl0c1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlmZmVyZW5jZSA8IDApIHtcbiAgICAgICAgICAgIG5leHRIaXRzID0gbmV4dEhpdHMuZmlsdGVyKGhpdCA9PiBoaXQgPiBwcmV2SGl0c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2Vjb25kIHNldCBkZWFscyB3aXRoIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBkaWZBYnMgPSBNYXRoLmFicyhkaWZmZXJlbmNlKTtcbiAgICAgICAgaWYoTWF0aC5tYXgocHJldkhpdHMpICsgZGlmQWJzICogMSA8IG5leHRIaXRzWzBdKSB7XG4gICAgICAgICAgICBuZXh0SGl0cyA9IG5leHRIaXRzLmZpbHRlcihoaXQgPT4gaGl0IDwgbmV4dEhpdHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE1hdGgubWF4KHByZXZIaXRzKSArIGRpZkFicyAqIDEgPCBuZXh0SGl0c1swXSkge1xuICAgICAgICAgICAgbmV4dEhpdHMgPSBuZXh0SGl0cy5maWx0ZXIoaGl0ID0+IGhpdCA+IG5leHRIaXRzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXh0ID0gW25leHRIaXRzWzBdXTtcbiAgICBuZXh0SGl0cy5zcGxpY2UoMCwgMSk7XG4gICAgcmV0dXJuIG5leHQ7IFxufVxuXG5mdW5jdGlvbiBjaGVja0Zvck11bHRpcGxlQXhpcyAocGFzdEhpdHMpIHtcbiAgICBjb25zdCByb3dTaXplID0gMTA7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihwYXN0SGl0c1swXSAvIHJvd1NpemUpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhc3RIaXRzWzBdICUgcm93U2l6ZTtcbiAgICBjb25zdCBjb2x1bW5DaGVjayA9IHBhc3RIaXRzLnNvbWUoZGlmQ29sdW1uKTtcbiAgICBjb25zdCByb3dDaGVjayA9IHBhc3RIaXRzLnNvbWUoZGlmUm93KTtcbiAgICBpZiAoY29sdW1uQ2hlY2sgJiYgcm93Q2hlY2spIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge3JldHVybiBmYWxzZX07XG4gICAgZnVuY3Rpb24gZGlmQ29sdW1uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudCAlIHJvd1NpemUpICE9PSBjb2x1bW47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpZlJvdyAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoZWxlbWVudCAvIHJvd1NpemUpKSAhPT0gcm93O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tU2hvdCAoKSB7XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcbiAgICBmb3IgKGxldCBpID0gb3BlblBvc2l0aW9ucy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGlmIChhbHJlYWR5QXR0YWNrZWQuaW5jbHVkZXMob3BlblBvc2l0aW9uc1tpXSkpIHtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcGVuUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgcmV0dXJuIFtvcGVuUG9zaXRpb25zW2luZGV4XV07XG59XG5cbmZ1bmN0aW9uIGFkZEZ1dHVyZVNob3RzIChkaWZmZXJlbmNlLCBwYXN0SGl0cykge1xuICAgIGNvbnN0IG5ld0hpdCA9IHBhc3RIaXRzW3Bhc3RIaXRzLmxlbmd0aCAtMV1cbiAgICAvLyBMb29wIHRocm91Z2ggYW5kIHRocmVlIHBvc3NpYmxlIGhpdHMgaW4gZWFjaCBkaXJlY3Rpb24gdW5sZXNzIGFscmVhZHkgYXR0YWNrZWQgb3IgYm9yZGVyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5leHRUdXJuID0gW25ld0hpdCArIGRpZmZlcmVuY2UgKiBpXTtcbiAgICAgICAgaWYgKGNoZWNrQWxyZWFkeUhpdChuZXh0VHVybikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tXaXRoaW5Cb2FyZChuZXh0VHVybiwgbmV3SGl0LCBkaWZmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIG5leHRIaXRzLnB1c2gobmV4dFR1cm5bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE9wcG9zaXRlIGRpcmVjdGlvbiBwb3NzaWJpbGl0aWVzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5leHRUdXJuID0gW3Bhc3RIaXRzWzBdIC0gZGlmZmVyZW5jZSAqIGldO1xuICAgICAgICBpZiAoY2hlY2tBbHJlYWR5SGl0KG5leHRUdXJuKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1dpdGhpbkJvYXJkKG5leHRUdXJuLCBuZXdIaXQsIGRpZmZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgbmV4dEhpdHMucHVzaChuZXh0VHVyblswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFNlcGFyYXRlIGJvcmRlciBmdW5jdGlvbiBuZWVkZWQgZm9yIGdldHRpbmcgbmV4dCBoaXRzXG5mdW5jdGlvbiBjaGVja1dpdGhpbkJvYXJkIChwb3NzaWJsZSwgYWxyZWFkeUhpdCwgZGlmZmVyZW5jZSkge1xuICAgIGNvbnN0IHJvd0NoYW5nZSA9IDEwO1xuICAgIGNvbnN0IGNvbHVtbkNoYW5nZSA9IDE7XG4gICAgaWYgKE1hdGguYWJzKGRpZmZlcmVuY2UpID09PSByb3dDaGFuZ2UpIHtcbiAgICAgICAgaWYgKHBvc3NpYmxlIDwgMCB8fCBwb3NzaWJsZSA+IDk5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChNYXRoLmFicyhkaWZmZXJlbmNlKSA9PT0gY29sdW1uQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGdldFJvdyhhbHJlYWR5SGl0KTtcbiAgICAgICAgLy8gSGF2ZSB0byBhZGQgIT09IDAgdG8gYWNjb3VudCBmb3IgMCAvIDEwIGVkZ2UgY2FzZVxuICAgICAgICBpZihnZXRSb3cocG9zc2libGUpICE9PSByb3cgJiYgcG9zc2libGUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Um93IChwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwb3NpdGlvbiAvIDEwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQWxyZWFkeUhpdCAocG9zc2libGVIaXRzKSB7XG4gICAgcG9zc2libGVIaXRzID0gcG9zc2libGVIaXRzLmZpbHRlcihvcHRpb24gPT4gIW9wcG9uZW50Qm9hcmQubWlzc2VkU2hvdHMuaW5jbHVkZXMob3B0aW9uKSk7XG4gICAgcG9zc2libGVIaXRzID0gcG9zc2libGVIaXRzLmZpbHRlcihvcHRpb24gPT4gIWFscmVhZHlBdHRhY2tlZC5pbmNsdWRlcyhvcHRpb24pKTtcbiAgICByZXR1cm4gcG9zc2libGVIaXRzO1xufVxuXG5mdW5jdGlvbiBjaGVja0JvYXJkRWRnZSAobGFzdEhpdCkge1xuICAgIGxldCBwb3NzaWJsZU5leHRIaXRzID0gW107XG4gICAgaWYgKGxhc3RIaXQgPj0gMTApIHtcbiAgICAgICAgcG9zc2libGVOZXh0SGl0cy5wdXNoKGxhc3RIaXQgLSAxMCk7XG4gICAgfVxuICAgIGlmIChsYXN0SGl0ICUgMTAgIT09IDkpIHtcbiAgICAgICAgcG9zc2libGVOZXh0SGl0cy5wdXNoKGxhc3RIaXQgKyAxKTtcbiAgICB9XG4gICAgaWYgKGxhc3RIaXQgPCA5MCkge1xuICAgICAgICBwb3NzaWJsZU5leHRIaXRzLnB1c2gobGFzdEhpdCArIDEwKTtcbiAgICB9XG4gICAgaWYgKGxhc3RIaXQgJSAxMCAhPT0gMCkge1xuICAgICAgICBwb3NzaWJsZU5leHRIaXRzLnB1c2gobGFzdEhpdCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVOZXh0SGl0cztcbn1cblxuZXhwb3J0IHtjb21wdXRlckFJfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmQgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy9PcmRlciBvZiBwb3NpdGlvbnMgYXJyYXkgbGluZXMgdXAgd2l0aCBvcmRlciBvZiBzaGlwcyBhcnJheS5cbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBsZXQgaGl0U2hvdHMgPSBbXTtcbiAgICBjb25zdCByb3dTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAgKHBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUgKSB7XG4gICAgICAgIGxldCBzaGlwU3BvdHMgPSBbXTtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIHJvd1NpemUgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKFNoaXAgKG5hbWUsIHNoaXBTcG90cykpO1xuICAgICAgICByZXR1cm4gc2hpcFNwb3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHBvc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvbnNbal0gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xvc2VDb25kaXRpb24gKCkge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IHsgcmV0dXJuIGVsZW1lbnQuaXNTdW5rKCk7fSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBDYW5CZVBsYWNlZCAoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vQ29sbGlzaW9ucyhheGlzLCBpLCBsZW5ndGgpICYmIGluc2lkZUJvYXJkKGF4aXMsIGksIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlUG9zaXRpb25zO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBub0NvbGxpc2lvbnMgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSAqIHJvd1NpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zaWRlQm9hcmQgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiICYmIHBvc2l0aW9uICUgMTAgKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiICYmIHBvc2l0aW9uICsgKGxlbmd0aCAtIDEpICogcm93U2l6ZSA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkRE9NICh0eXBlKSB7XG4gICAgICAgIHJlbmRlckJvYXJkKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgc2hpcENhbkJlUGxhY2VkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgbWlzc2VkU2hvdHMsXG4gICAgICAgIGNoZWNrTG9zZUNvbmRpdGlvbixcbiAgICAgICAgdXBkYXRlQm9hcmRET00sXG4gICAgICAgIHNoaXBDYW5CZVBsYWNlZFxuICAgIH1cbn1cblxuZXhwb3J0IHtHYW1lQm9hcmR9OyIsIlxuXG5hc3luYyBmdW5jdGlvbiBhZGRIaXRCdXR0b25zIChhdHRhY2tlZFBvc2l0aW9ucykge1xuICAgIGNvbnN0IGVuZW15VGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteSBidXR0b24nKTtcbiAgICBjb25zdCBoaXRQcm9taXNlID0gbmV3IFByb21pc2UgKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGVuZW15VGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrZWRQb3NpdGlvbnMuaW5jbHVkZXMoTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IGhpdFByb21pc2U7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjaG9vc2VTaGlwUG9zaXRpb24oKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudCBidXR0b24nKTtcbiAgICBjb25zdCBwbGFjZW1lbnRQcm9taXNlID0gbmV3IFByb21pc2UgKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocG9zaXRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBwbGFjZW1lbnRQcm9taXNlO1xufTtcblxuZnVuY3Rpb24gY29tcHV0ZXJDaG9vc2VzIChsYXN0SGl0LCBhdHRhY2tlZFBvc2l0aW9ucykge1xuICAgIGxldCBwb3NzaWJsZU5leHRIaXRzID0gW107XG4gICAgaWYgKGxhc3RIaXQgPj0gMTApIHtcbiAgICAgICAgcG9zc2libGVOZXh0SGl0cy5wdXNoKGxhc3RIaXQgLSAxMCk7XG4gICAgfVxuICAgIGlmIChsYXN0SGl0ICUgMTAgIT09IDkpIHtcbiAgICAgICAgcG9zc2libGVOZXh0SGl0cy5wdXNoKGxhc3RIaXQgLSAxKTtcbiAgICB9XG4gICAgaWYgKGxhc3RIaXQgPCA5MCkge1xuICAgICAgICBwb3NzaWJsZU5leHRIaXRzLnB1c2gobGFzdEhpdCArIDEwKTtcbiAgICB9XG4gICAgaWYgKGxhc3RIaXQgJSAxMCAhPT0gMCkge1xuICAgICAgICBwb3NzaWJsZU5leHRIaXRzLnB1c2gobGFzdEhpdCArIDEpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTmV4dEhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGF0dGFja2VkUG9zaXRpb25zLmluY2x1ZGVzKHBvc3NpYmxlTmV4dEhpdHNbaV0pKSB7XG4gICAgICAgICAgICBwb3NzaWJsZU5leHRIaXRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVOZXh0SGl0c1xufVxuXG5leHBvcnQge2FkZEhpdEJ1dHRvbnMsIGNob29zZVNoaXBQb3NpdGlvbiwgY29tcHV0ZXJDaG9vc2VzfTsiLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IGFkZEhpdEJ1dHRvbnMsIGNob29zZVNoaXBQb3NpdGlvbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHtjb21wdXRlckFJfSBmcm9tIFwiLi9jb21wdXRlckFJXCI7XG5pbXBvcnQgeyBhZGRBeGlzQnV0dG9uLCBjbGVhckJvYXJkU2VjdGlvbiwgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucywgc2hvd1Bvc3NpYmxlUGxhY2VtZW50LCByZW1vdmVDdXJyZW50UGxhY2VtZW50IH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IFBsYXllciA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGF0dGFja2VkUG9zaXRpb25zID0gW107XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKVxuICAgIGxldCBheGlzID0gXCJ4XCI7XG5cbiAgICAvL1RoZXNlIHZhcmlhYmxlcyBhcmUgYWxsIGltcG9ydGFudCBmb3IgY29tcHV0ZXIgQUkuXG4gICAgbGV0IGhpdExhc3RUdXJuID0gZmFsc2U7XG4gICAgbGV0IHByZXZIaXRzID0gW107XG4gICAgbGV0IG9wcG9uZW50Qm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgICBsZXQgc3RhcnRSYW5kb20gPSB0cnVlO1xuICAgIGxldCByZWNlbnRTdW5rUG9zaXRpb25zID0gW107XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVNZW1vcnkgKHJlc3VsdCwgcG9zaXRpb24sIG9wcG9uZW50KSB7XG4gICAgICAgIC8vIFRoaXMgY29uZmlndXJhdGlvbiBsZWFkcyBiYWNrIHRvIHJhbmRvbSBwaWNrc1xuICAgICAgICAvLyBDb21wdXRlciBzdG9wcyBwdXJwb3NlZnVsIHBpY2tpbmcgb25jZSBzaGlwIGhhcyBiZWVuIHN1bmtcbiAgICAgICAgb3Bwb25lbnRCb2FyZCA9IG9wcG9uZW50O1xuICAgICAgICBpZiAoaGl0c1N1bmtTaGlwKCkpIHtcbiAgICAgICAgICAgIHByZXZIaXRzID0gcHJldkhpdHMuZmlsdGVyKHBvc2l0aW9uID0+ICFyZWNlbnRTdW5rUG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhpdCB0byBjdXJyZW50IGhpdCBhcnJheSBpZiBzdWNjZXNzZnVsXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHByZXZIaXRzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIEkgbmVlZCB0byBjaGVjayBmb3Igc3VuayB0byBhZGQgaXQgdG8gQUkgY29uZC5cbiAgICAgICAgc3RhcnRSYW5kb20gPSAhaGl0c1N1bmtTaGlwKCkgJiYgcHJldkhpdHMubGVuZ3RoICE9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBoaXRMYXN0VHVybiA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGV0aGVyIGEgc2hpcCBoYXMgYmVlbiBzdW5rIGluIHRoZSByZWNlbnQgYWltZWQgc2hvdHNcbiAgICBmdW5jdGlvbiBoaXRzU3Vua1NoaXAgKCkge1xuICAgICAgICBjb25zdCBlbmVteVNoaXBzID0gb3Bwb25lbnRCb2FyZC5zaGlwcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbmVteVNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2SGl0cy5pbmNsdWRlcyhlbmVteVNoaXBzW2ldLnBvc2l0aW9uc1tqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGl0Q291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGl0Q291bnQgPT09IGVuZW15U2hpcHNbaV0ucG9zaXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlY2VudFN1bmtQb3NpdGlvbnMgPSBlbmVteVNoaXBzW2ldLnBvc2l0aW9ucztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZXJDaG9vc2VzICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVPcHRpb25zID0gY29tcHV0ZXJBSShwcmV2SGl0cywgb3Bwb25lbnRCb2FyZCwgYXR0YWNrZWRQb3NpdGlvbnMsIHN0YXJ0UmFuZG9tLCBoaXRMYXN0VHVybik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3NpYmxlT3B0aW9ucyk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlT3B0aW9ucy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBzaG90ID0gcG9zc2libGVPcHRpb25zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHNob3Q7XG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFja0VuZW15ICgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgY29uc3QgY2hvc2VuUG9zaXRpb24gPSBjb21wdXRlckNob29zZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5kZXggPSBvcGVuUG9zaXRpb25zLmZpbmRJbmRleChpbmRleCA9PiBpbmRleCA9PT0gY2hvc2VuUG9zaXRpb24pO1xuICAgICAgICAgICAgb3BlblBvc2l0aW9ucy5zcGxpY2UocG9zaXRpb25JbmRleCwgMSk7XG4gICAgICAgICAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKGNob3NlblBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBjaG9zZW5Qb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBOdW1iZXIoYXdhaXQgYWRkSGl0QnV0dG9ucyhhdHRhY2tlZFBvc2l0aW9ucykpO1xuICAgICAgICAgICAgYXR0YWNrZWRQb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgICBvcGVuUG9zaXRpb25zLnNwbGljZShwb3NpdGlvbiAtIGF0dGFja2VkUG9zaXRpb25zLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXhpc1RvZ2dsZSAoKSB7XG4gICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy10b2dnbGUnKTtcbiAgICAgICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBcInlcIlxuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cEJvYXJkICgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGFkZEF4aXNCdXR0b24oYXhpcyk7XG4gICAgICAgICAgICBheGlzVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDUsIFwiQ2FycmllclwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDMsIFwiRGVzdHJveWVyXCIpO1xuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoMywgXCJTdWJtYXJpbmVcIik7XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwU2hpcCAobGVuZ3RoLCBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIGF4aXMgPSAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwieFwiIDogXCJ5XCIpO1xuICAgICAgICAgICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBwbGF5ZXJCb2FyZC5zaGlwQ2FuQmVQbGFjZWQoYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gb3BlblBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcGVuUG9zaXRpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHJhbmRvbVBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zWCA9IHBsYXllckJvYXJkLnNoaXBDYW5CZVBsYWNlZChcInhcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zWSA9IHBsYXllckJvYXJkLnNoaXBDYW5CZVBsYWNlZChcInlcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHN3aXRjaE9wZW5zKG9wZW5Qb3NpdGlvbnNYLCBvcGVuUG9zaXRpb25zWSwgbGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE51bWJlcihhd2FpdCBjaG9vc2VTaGlwUG9zaXRpb24oKSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwU3BvdHMgPSBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocG9zaXRpb24sIGF4aXMsIGxlbmd0aCwgbmFtZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTcG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtzaGlwU3BvdHNbaV19XCJdYCk7XG4gICAgICAgICAgICAgICAgYm9hcmRTcG90LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaE9wZW5zICh4UG9zLCB5UG9zLCBsZW5ndGgpIHtcbiAgICAgICAgcGxheWVyQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGFjZW1lbnRcIik7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh4UG9zKTtcbiAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeFBvcywgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh5UG9zKTtcbiAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeVBvcywgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMtdG9nZ2xlJyk7XG4gICAgICAgIGF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHhQb3MpO1xuICAgICAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeFBvcywgZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHlQb3MpO1xuICAgICAgICAgICAgICAgIHNob3dQbGFjZW1lbnQoeVBvcywgZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgfTtcblxuICAgIC8vIEkgZGlzbGlrZSBoYXJkIGNvZGluZyB0aGluZ3MsIGJ1dCBJIG5lZWQgdG8gZG8gdGhpcyBmb3IgdGhlIGF4aXN0b2dnbGUgYnV0dG9uLlxuICAgIC8vIFRoZSBwbGFjZW1lbnQgc2l6ZSBzdGF5cyBhdCBmaXZlIHVubGVzcyBJIGNhbmNlbCB0aGUgZXZlbnQgbGlzdGVuZXJzIHJlcXVpcmVkXG4gICAgLy8gZm9yIHRoZSBhc3luYyBwbGF5ZXIgcGlja1xuICAgIGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UGxhY2VtZW50ID0gcGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGFjZW1lbnQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNSAtIGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGFjZW1lbnQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNiAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UGxhY2VtZW50IChwb3NpdGlvbnMsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBib2FyZFBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgICAgIGJvYXJkUG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IE51bWJlcihwb3NpdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpKTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93UG9zc2libGVQbGFjZW1lbnQoYXhpcywgbGVuZ3RoLCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVDdXJyZW50UGxhY2VtZW50KGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge3Bvc2l0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIil9O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVBsYWNlbWVudEJvYXJkICgpIHtcbiAgICAgICAgY2xlYXJCb2FyZFNlY3Rpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2tFbmVteSxcbiAgICAgICAgc2V0dXBCb2FyZCxcbiAgICAgICAgcmVtb3ZlUGxhY2VtZW50Qm9hcmQsXG4gICAgICAgIGNvbmZpZ3VyZU1lbW9yeSxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGF0dGFja2VkUG9zaXRpb25zXG4gICAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJcbmNvbnN0IFNoaXAgPSAobmFtZSwgcG9zaXRpb25zKSA9PiB7XG5cbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGZ1bmN0aW9uIGhpdCAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFoaXRzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgaGl0cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsgKCkge1xuICAgICAgICByZXR1cm4gaGl0cy5sZW5ndGggPT09IHBvc2l0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uc1xuICAgIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbmNvbnN0IHBCb2FyZCA9IHBsYXllci5wbGF5ZXJCb2FyZDtcbmNvbnN0IGNCb2FyZCA9IGNvbXB1dGVyLnBsYXllckJvYXJkO1xuXG5jb21wdXRlci5zZXR1cEJvYXJkKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVGbG93ICgpIHtcbiAgICBwQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGFjZW1lbnRcIik7XG4gICAgLy93YWl0VGVzdCBpcyB0ZW1wb3Jhcnkgd2hpbGUgSSB1bmRlcnN0YW5kIGFzeW5jaHJvbm91cyBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiB3YWl0VGVzdCh4KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGF3YWl0IHBsYXllci5zZXR1cEJvYXJkKCk7XG4gICAgYXdhaXQgd2FpdFRlc3QoMTApO1xuICAgIHBsYXllci5yZW1vdmVQbGFjZW1lbnRCb2FyZCgpXG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbiAgICBkbyB7XG4gICAgICAgIGlmICh0dXJuICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgY0JvYXJkLnJlY2VpdmVBdHRhY2soYXdhaXQgcGxheWVyLmF0dGFja0VuZW15KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBjb21wdXRlci5hdHRhY2tFbmVteSgpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgICAgICAgICBjb21wdXRlci5jb25maWd1cmVNZW1vcnkocmVzdWx0LCBwb3NpdGlvbiwgcEJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBwQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGF5ZXJcIik7XG4gICAgICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xuICAgICAgICB0dXJuKytcbiAgICB9XG4gICAgd2hpbGUgKCFwQm9hcmQuY2hlY2tMb3NlQ29uZGl0aW9uKCkgJiYgIWNCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLXNlY3Rpb24nKTtcbiAgICBpZiAocEJvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIGhhcyB3b24gdGhlIGdhbWVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY0JvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYXllciBoYXMgd29uIHRoZSBnYW1lXCI7XG4gICAgfVxuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbn1cblxuZ2FtZUZsb3coKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==