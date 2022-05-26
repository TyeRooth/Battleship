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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 10px;\n    background-color: grey;\n    border-radius: 8px;\n    width: 50%;\n    height: 2rem;\n    font-size: 1rem;\n    color: white;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available {\n    background-color: blue;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable {\n    background-color: midnightblue;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8DAA8D;IAC9D,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: midnightblue;\n    height: 10vh;\n}\n\n#message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 10px;\n    background-color: grey;\n    border-radius: 8px;\n    width: 50%;\n    height: 2rem;\n    font-size: 1rem;\n    color: white;\n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: midnightblue;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background-color: lightgray;\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background-color: midnightblue;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available {\n    background-color: blue;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable {\n    background-color: midnightblue;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "addToMessage": () => (/* binding */ addToMessage),
/* harmony export */   "clearBoardSection": () => (/* binding */ clearBoardSection),
/* harmony export */   "postMessage": () => (/* binding */ postMessage),
/* harmony export */   "removeCurrentPlacement": () => (/* binding */ removeCurrentPlacement),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "showAvailablePositions": () => (/* binding */ showAvailablePositions),
/* harmony export */   "showPossiblePlacement": () => (/* binding */ showPossiblePlacement)
/* harmony export */ });
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

function postMessage (message) {
    const messageBox = document.getElementById('message');
    messageBox.textContent = message;
} 

function addToMessage (addedText) {
    const messageBox = document.getElementById('message');
    messageBox.textContent = messageBox.textContent + addedText;
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
    //For multiple ship instances
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
                    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.addToMessage)(" ... It was a hit");
                    return true;
                }
            }
        }
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.addToMessage)(" ... It was a miss");
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

    function checkFirstTimeSunk (player) {
        for (let i = 0; i < ships.length; i++) {
            const firstSink = ships[i].firstTimeSunk(player);
            if (firstSink) {
                return true;
            }
        }
        return false;
    }

    return {
        placeShip,
        receiveAttack,
        shipCanBePlaced,
        ships,
        missedShots,
        checkLoseCondition,
        updateBoardDOM,
        shipCanBePlaced,
        checkFirstTimeSunk
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
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)(`Computer has shot coordinate ${ position }`);
            return position;
        }
        else if (type === "player") {
            let position = Number(await (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addHitButtons)(attackedPositions));
            attackedPositions.push(position);
            openPositions.splice(position - attackedPositions.length, 1);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)(`Player has shot coordinate ${ position }`);
            return position;    
        }
    }

    // Below functions are related to setting up the board

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
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)(`Place your ${name}`);
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const Ship = (name, positions) => {
    let alreadySunk = false;
    let hits = [];
    function hit (position) {
        if (!hits.includes(position)) {
            hits.push(position);
        }
    }

    //This is for posting the message when a ship first sinks
    function firstTimeSunk (player) {
        if (alreadySunk === false && hits.length === positions.length) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.postMessage)(`${ player } has sunk the opponent's ${ name }`);
            return true;
        }
        return false;
    }

    function isSunk () {
        const result = hits.length === positions.length;
        if (result) {
            alreadySunk = true;
        }
        return result;
    }

    return {
        hit,
        isSunk,
        firstTimeSunk,
        positions,
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");




const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("player");
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

computer.setupBoard();

async function gameFlow () {
    pBoard.updateBoardDOM("placement");
    //waitTest is temporary while I understand asynchronous functions
    function waitTest(x, time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, time);
        });
    }
    await player.setupBoard();
    await waitTest(10, 1000);
    player.removePlacementBoard()
    computer.ai.addOpponentShips(pBoard);
    let turn = 0;
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
    do {
        if (turn % 2 === 0) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)("Shoot your shot");
            cBoard.receiveAttack(await player.attackEnemy());
        }
        else {
            pBoard.receiveAttack(await computer.attackEnemy());
        }
        pBoard.updateBoardDOM("player");
        cBoard.updateBoardDOM("enemy");
        await waitTest(10, 2000);
        // This is for posting a message if a ship has been sunk
        if (pBoard.checkFirstTimeSunk("Computer") || cBoard.checkFirstTimeSunk("Player")) {
            await waitTest(10, 3000);
        }
        turn++;
    }
    while (!pBoard.checkLoseCondition() && !cBoard.checkLoseCondition());
    if (pBoard.checkLoseCondition()) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)("Computer has won the battle");
    }
    else if (cBoard.checkLoseCondition()) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.postMessage)("Player has won the battle");
    }
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcEMsd0VBQXdFLG9CQUFvQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QOEI7QUFDb0I7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekMsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBVztBQUNuQjs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCd0M7QUFDcUI7QUFDZ0Y7QUFDM0c7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUztBQUMvQjs7QUFFQTtBQUNBLGFBQWEsMkNBQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVcsa0NBQWtDLFVBQVU7QUFDbkU7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVEQUFhO0FBQ3JEO0FBQ0E7QUFDQSxZQUFZLGlEQUFXLGdDQUFnQyxVQUFVO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVcsZUFBZSxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0REFBa0I7QUFDMUQ7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xELDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBc0I7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBcUI7QUFDekMsaUJBQWlCO0FBQ2pCO0FBQ0Esb0JBQW9CLDREQUFzQjtBQUMxQyxpQkFBaUI7QUFDakI7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSx1REFBaUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVyxLQUFLLFNBQVMsMkJBQTJCLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNhO0FBQ0U7O0FBRXBDLGVBQWUsK0NBQU07QUFDckIsaUJBQWlCLCtDQUFNO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcEFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGhlaWdodDogN3ZoO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLmJvYXJkLXN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkaW5nIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNheGlzLXRvZ2dsZSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlcixcXG5idXR0b24ucG9zc2libGUtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udW5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxufVxcblxcbi51bmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbmVteSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5lbmVteSBidXR0b24uc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGhlaWdodDogN3ZoO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2JvYXJkcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA3MnZoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLmJvYXJkLXN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkaW5nIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNheGlzLXRvZ2dsZSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2NyZWRpdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlcixcXG5idXR0b24ucG9zc2libGUtcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4udW5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxufVxcblxcbi51bmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbmVteSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5lbmVteSBidXR0b24uc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcmVuZGVyQm9hcmQgKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcFNwb3RzKSB7XG5cbiAgICBjb25zdCBib2FyZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmRzLXNlY3Rpb24nKTtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZE5vZGUuY2xhc3NMaXN0LmFkZCgnYm9hcmQtc3VtbWFyeScpO1xuICAgIGNvbnN0IGJvYXJkSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcodHlwZSk7XG4gICAgYm9hcmROb2RlLmFwcGVuZENoaWxkKGJvYXJkSGVhZGluZyk7XG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChgJHsgdHlwZSB9YClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgncG9zaXRpb24nKTtcbiAgICAgICAgcG9zaXRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJywgaSk7XG4gICAgICAgIGlmIChtaXNzZWRTaG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnc2hvdCcpO1xuICAgICAgICAgICAgcG9zaXRpb24uYXBwZW5kQ2hpbGQobWlzc2VkU2hvdERPTSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoaXRTaG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnc2hvdCcpO1xuICAgICAgICAgICAgcG9zaXRpb24uYXBwZW5kQ2hpbGQoaGl0U2hvdERPTSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIiAmJiBzaG93U2hpcHMoc2hpcFNwb3RzLCBpKSkge1xuICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwbGFjZW1lbnRcIiAmJiBzaG93U2hpcHMoc2hpcFNwb3RzLCBpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocG9zaXRpb24pO1xuICAgIH07XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHsgdHlwZSB9YCkpIHtcbiAgICAgICAgYm9hcmROb2RlLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjdXJyZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHsgdHlwZSB9YCk7XG4gICAgICAgIGN1cnJlbnRCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGN1cnJlbnRCb2FyZC5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gc2hvd1NoaXBzKHNoaXBTcG90cywgcG9zaXRpb24pIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzaGlwU3BvdHNbaV0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHR5cGUpIHtcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmdOb2RlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWhlYWRpbmcnKTtcbiAgICBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IFwiRnJpZW5kbHkgV2F0ZXJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiZW5lbXlcIikge1xuICAgICAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IFwiRW5lbXkgV2F0ZXJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxhY2VtZW50XCIpIHtcbiAgICAgICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIlJlYWR5IHlvdXIgU2hpcHNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRpbmdOb2RlXG59XG5cbmZ1bmN0aW9uIG1pc3NlZFNob3RET00gKCkge1xuICAgIGNvbnN0IG1pc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaXNzQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIG1pc3NDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHJldHVybiBtaXNzQ2lyY2xlO1xufVxuXG5mdW5jdGlvbiBoaXRTaG90RE9NIChwb3NpdGlvbikge1xuICAgIGNvbnN0IGhpdENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdENpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICBoaXRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICByZXR1cm4gaGl0Q2lyY2xlO1xufVxuXG5mdW5jdGlvbiBhZGRBeGlzQnV0dG9uIChheGlzKSB7XG4gICAgY29uc3QgYm9hcmRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWhlYWRpbmcnKTtcbiAgICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F4aXMtdG9nZ2xlJyk7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkF4aXM6IFhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWVwiO1xuICAgIH1cbiAgICBib2FyZEhlYWRpbmcuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHNob3dBdmFpbGFibGVQb3NpdGlvbnMob3BlblBvc2l0aW9ucykge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgcG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICBpZiAob3BlblBvc2l0aW9ucy5pbmNsdWRlcyhOdW1iZXIocG9zaXRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpKSkge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndW5hdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2hvd1Bvc3NpYmxlUGxhY2VtZW50IChheGlzLCBsZW5ndGgsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpfVwiXWApO1xuICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpICogMTB9XCJdYCk7XG4gICAgICAgICAgICBwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvc3NpYmxlLXBsYWNlbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFBsYWNlbWVudCAoYXhpcywgbGVuZ3RoLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtjb29yZGluYXRlICsgaX1cIl1gKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9zc2libGUtcGxhY2VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtjb29yZGluYXRlICsgaSAqIDEwfVwiXWApO1xuICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZFNlY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZHMtc2VjdGlvbicpO1xuICAgIGJvYXJkU2VjdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHBvc3RNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4gICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59IFxuXG5mdW5jdGlvbiBhZGRUb01lc3NhZ2UgKGFkZGVkVGV4dCkge1xuICAgIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSBtZXNzYWdlQm94LnRleHRDb250ZW50ICsgYWRkZWRUZXh0O1xufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZCwgYWRkQXhpc0J1dHRvbiwgY2xlYXJCb2FyZFNlY3Rpb24sIHNob3dBdmFpbGFibGVQb3NpdGlvbnMsIHNob3dQb3NzaWJsZVBsYWNlbWVudCwgcmVtb3ZlQ3VycmVudFBsYWNlbWVudCwgcG9zdE1lc3NhZ2UsIGFkZFRvTWVzc2FnZSB9OyIsImxldCBjb21wQUkgPSB7XG4gICAgaGl0IDogW10sXG4gICAgbWlzc2VkIDogW10sXG4gICAgbGFzdFNob3QgOiBudWxsLFxuICAgIGxhc3RIaXQgOiBudWxsLFxuICAgIGxhc3RTaG90V2FzSGl0IDogZmFsc2UsXG4gICAgb3Bwb25lbnRTaGlwcyA6IFtdLFxuICAgIHBvc3NpYmxlSGl0cyA6IFtdLFxuICAgIGFjdGl2ZUhpdHMgOiBbXSxcbiAgICBjdXJEaXIgOiBudWxsLFxuICAgIGNoYW5nZWREaXIgOiBmYWxzZSxcbiAgICAvL0ZvciBtdWx0aXBsZSBzaGlwIGluc3RhbmNlc1xuICAgIHN0b3JlZEhpdHMgOiBbXSxcblxuICAgIC8vIFJlcXVpcmVkIGZvciBBSSB0byByZWNvZ25pemUgd2hldGhlciBhIGhpdCBoYXMgYmVlbiBtYWRlXG4gICAgYWRkT3Bwb25lbnRTaGlwcyA6IGZ1bmN0aW9uIChib2FyZCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50U2hpcHMgPSBib2FyZC5zaGlwcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wcG9uZW50U2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHBvbmVudFNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVIaXRzLnB1c2godGhpcy5vcHBvbmVudFNoaXBzW2ldLnBvc2l0aW9uc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9NYW51YWwgYWRkIGlzIHVzZWQgaW4gbXkgdGVzdHMgZm9yIHRoZSBjb21wdXRlclxuICAgIG1hbnVhbEFkZCA6IGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUhpdHMgPSByZW1vdmVTdW5rU2hpcCh0aGlzLmFjdGl2ZUhpdHMsIHRoaXMub3Bwb25lbnRTaGlwcyk7XG4gICAgICAgIHRoaXMuY29uZmlndXJlQUkoY29vcmQpO1xuICAgIH0sXG5cbiAgICAvL1Jlc2V0IEFJIGFsc28gaW1wb3J0YW50IGZvciB0ZXN0aW5nIHNpbmNlIEkgYW0gaGF2aW5nIHRyb3VibGUgd2l0aCB0ZWFyZG93blxuICAgIHJlc2V0QUkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGl0ID0gW107XG4gICAgICAgIHRoaXMubWlzc2VkID0gW107XG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RTaG90V2FzSGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnBvc3NpYmxlSGl0cyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUhpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJEaXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0b3JlZEhpdHMgPSBbXTtcbiAgICB9LFxuXG4gICAgd2FzSGl0IDogZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3NpYmxlSGl0cy5pbmNsdWRlcyhjb29yZCk7IFxuICAgIH0sXG5cbiAgICAvL1RoaXMgY2hlY2tzIHdoZXRoZXIgQUkgY2FuIGZvbGxvdyByZWd1bGFyIHBhdHRlcm4gb3IgbmVlZHMgdG8gY2hhbmdlIGRpcmVjdGlvbnMgZHVlIHRvIGxpbWl0c1xuICAgIGNoZWNrTmV4dEF2YWlsYWJsZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVBcnJheSA9IGNoZWNrRGlyZWN0aW9uQXZhaWxhYmxlKHRoaXMubGFzdEhpdCwgdGhpcy5taXNzZWQsIHRoaXMuaGl0KTtcbiAgICAgICAgY29uc3QgcmV2ZXJzZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICBpZiAocG9zc2libGVBcnJheS5pbmNsdWRlcyh0aGlzLmN1ckRpcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RIaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmV2ZXJzZUFycmF5LmluY2x1ZGVzKG9wcERpcih0aGlzLmN1ckRpcikpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVIaXRzWzBdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrTXVsdGlwbGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID4gMSAmJiB0aGlzLnN0b3JlZEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5sYXN0SGl0LCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgaWYgKCFwb3NzaWJsZUFycmF5LmluY2x1ZGVzKHRoaXMuY3VyRGlyKSAmJiAhcmV2ZXJzZUFycmF5LmluY2x1ZGVzKG9wcERpcih0aGlzLmN1ckRpcikpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgIFxuICAgIH0sXG5cbiAgICBjb25maWd1cmVNdWx0aXBsZVNoaXBzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdMZW5ndGggPSB0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ0xlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkSGl0cy5wdXNoKHRoaXMuYWN0aXZlSGl0cy5wb3AoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA+IDAgJiYgdGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVIaXRzLnB1c2godGhpcy5zdG9yZWRIaXRzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUZXN0IHRvIHNlZSB3aGV0aGVyIGdlbmVyYXRlZCBzaG90IGlzIGEgaGl0IGFuZCBjaGFuZ2VzIHRoZSBvYmplY3QgYWNjb3JkaW5nbHlcbiAgICAvLyBFc3NlbnRpYWxseSB0aGlzIGNvbmZpZ3VyZXMgdGhlIHZhcmlhYmxlcyBpbXBvcnRhbnQgZm9yIGRlY2lkaW5nIG9uIGEgc2hvdFxuICAgIGNvbmZpZ3VyZUFJIDogZnVuY3Rpb24gKG5ld1Nob3QpIHtcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG5ld1Nob3Q7XG4gICAgICAgIGlmICh0aGlzLndhc0hpdChuZXdTaG90KSkge1xuICAgICAgICAgICAgdGhpcy5oaXQucHVzaChuZXdTaG90KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3RXYXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGl0ID0gbmV3U2hvdDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSGl0cy5wdXNoKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzZWQucHVzaChuZXdTaG90KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3RXYXNIaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3U2hvdDtcbiAgICB9LFxuXG4gICAgLy9NYWluIG1ldGhvZFxuICAgIHRlc3RBSSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVIaXRzID0gcmVtb3ZlU3Vua1NoaXAodGhpcy5hY3RpdmVIaXRzLCB0aGlzLm9wcG9uZW50U2hpcHMpO1xuICAgICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgc2hpcHMgYW5kIGNvbmZpZ3VyZSBvYmplY3QgaWYgbmVlZGVkXG4gICAgICAgIGlmICh0aGlzLmNoZWNrTXVsdGlwbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVNdWx0aXBsZVNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9BZnRlciBmaXJzdCBoaXQgYWZ0ZXIgcmFuZG9tIHBlcmlvZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcG9zRGlyID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBwb3NEaXJbcmFuZG9tSW5kZXgocG9zRGlyKV07XG4gICAgICAgICAgICBsZXQgbmV3U2hvdCA9IGNyZWF0ZU5ld1Nob3QodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVBSShuZXdTaG90KTtcbiAgICAgICAgfVxuICAgICAgICAvL1JhbmRvbSBTaG90XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zID0gZ2V0T3BlblBvc2l0aW9ucyh0aGlzLmhpdCwgdGhpcy5taXNzZWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3U2hvdCA9IG9wZW5Qb3NpdGlvbnNbcmFuZG9tSW5kZXgob3BlblBvc2l0aW9ucyldO1xuICAgICAgICAgICAgLy9JbiBjYXNlIG9mIGZ1bGxCb2FyZFxuICAgICAgICAgICAgaWYgKG5ld1Nob3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyZUFJKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFmdGVyIHR3byBvciBtb3JlIGFkamFjZW50IGNvb3JkcyBoYXZlIGJlZW4gaGl0XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPiAxICYmIHRoaXMubGFzdFNob3RXYXNIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyYW5jaGluZ0hpdCA9IHRoaXMuY2hlY2tOZXh0QXZhaWxhYmxlKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoaW5nSGl0ID09PSB0aGlzLmFjdGl2ZUhpdHNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckRpciA9IG9wcERpcih0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3U2hvdCA9IGNyZWF0ZU5ld1Nob3QoYnJhbmNoaW5nSGl0LCB0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVBSShuZXdTaG90KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIG1pc3MgYWZ0ZXIgY29uc2VjdXRpdmUgaGl0cyB0byBjaGFuZ2UgZGlyZWN0aW9uc1xuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID4gMSAmJiAhdGhpcy5sYXN0U2hvdFdhc0hpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBvcHBEaXIodGhpcy5jdXJEaXIpO1xuICAgICAgICAgICAgbGV0IG5ld1Nob3QgPSBjcmVhdGVOZXdTaG90KHRoaXMuYWN0aXZlSGl0c1swXSwgdGhpcy5jdXJEaXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlQUkobmV3U2hvdCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXRPcGVuUG9zaXRpb25zIChtaXNzZWQsIGhpdCkge1xuICAgIGxldCBvcGVuUG9zaXRpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZiAoIW1pc3NlZC5pbmNsdWRlcyhpKSAmJiAhaGl0LmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICBvcGVuUG9zaXRpb25zLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wZW5Qb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Nob3QgKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uIC0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbiArIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uICsgMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uIC0xO1xuICAgIH1cbn1cblxuLy8gVGhpcyBpcyBob3cgdGhlIGNvbXB1dGVyIHdpbGwgYmUgYWJsZSB0byB0ZWxsIGl0IGhhcyBzdW5rIGEgc2hpcFxuLy8gSWYgYWN0aXZlSGl0cy5sZW5ndGggPT09IDAgYWZ0ZXIgdGhpcywgY29tcHV0ZXIgd2lsbCBzaG9vdCByYW5kb21seSBhZ2FpblxuZnVuY3Rpb24gcmVtb3ZlU3Vua1NoaXAgKGFjdGl2ZSwgc2hpcHMpIHtcbiAgICBsZXQgc3Vua1Bvc2l0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmUuaW5jbHVkZXMoc2hpcHNbaV0ucG9zaXRpb25zW2pdKSkge1xuICAgICAgICAgICAgICAgIGhpdENvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpdENvdW50ID09PSBzaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rUG9zaXRpb25zID0gc2hpcHNbaV0ucG9zaXRpb25zO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua1Bvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gYWN0aXZlLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBpZiAoc3Vua1Bvc2l0aW9ucy5pbmNsdWRlcyhhY3RpdmVbal0pKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlO1xufVxuXG5mdW5jdGlvbiBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSAoY29vcmQsIGhpdHMsIG1pc3Nlcykge1xuICAgIGxldCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbXTtcbiAgICBjb25zdCByb3dEaWYgPSAxMDtcbiAgICBjb25zdCBjb2xEaWYgPSAxO1xuICAgIGNvbnN0IHVwID0gY29vcmQgLSByb3dEaWY7XG4gICAgaWYgKHVwID49IDAgJiYgY2hlY2tOb3RTaG90KHVwLCBoaXRzLCBtaXNzZXMpKSB7XG4gICAgICAgIHBvc3NpYmxlRGlyZWN0aW9ucy5wdXNoKFwidXBcIik7XG4gICAgfVxuICAgIGNvbnN0IHJpZ2h0ID0gY29vcmQgKyBjb2xEaWY7XG4gICAgaWYgKHJpZ2h0ICUgcm93RGlmICE9PSAwICYmIGNoZWNrTm90U2hvdChyaWdodCwgaGl0cywgbWlzc2VzKSkge1xuICAgICAgICBwb3NzaWJsZURpcmVjdGlvbnMucHVzaChcInJpZ2h0XCIpO1xuICAgIH1cbiAgICBjb25zdCBkb3duID0gY29vcmQgKyByb3dEaWY7XG4gICAgaWYgKGRvd24gPCAxMDAgJiYgY2hlY2tOb3RTaG90KGRvd24sIGhpdHMsIG1pc3NlcykpIHtcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLnB1c2goXCJkb3duXCIpO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0gY29vcmQgLSBjb2xEaWY7XG4gICAgaWYgKGxlZnQgJSByb3dEaWYgIT09IDkgJiYgY2hlY2tOb3RTaG90KGxlZnQsIGhpdHMsIG1pc3NlcykpIHtcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLnB1c2goXCJsZWZ0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVEaXJlY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBjaGVja05vdFNob3QgKGNvb3JkLCBoaXRBcnJheSwgbWlzc0FycmF5KSB7XG4gICAgaWYgKCFoaXRBcnJheS5pbmNsdWRlcyhjb29yZCkgJiYgIW1pc3NBcnJheS5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge2ZhbHNlO31cbn1cblxuZnVuY3Rpb24gb3BwRGlyKGRpcikge1xuICAgIGlmIChkaXIgPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gXCJkb3duXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpciA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyID09PSBcImRvd25cIikge1xuICAgICAgICByZXR1cm4gXCJ1cFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXIgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHJldHVybiBcInJpZ2h0XCI7XG4gICAgfVxufVxuXG4vL0kgd2lsbCBiZSB1c2luZyB0aGlzIGEgbG90XG5mdW5jdGlvbiByYW5kb21JbmRleCAoYXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IHsgY29tcEFJIH07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHJlbmRlckJvYXJkLCBhZGRUb01lc3NhZ2UgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy9PcmRlciBvZiBwb3NpdGlvbnMgYXJyYXkgbGluZXMgdXAgd2l0aCBvcmRlciBvZiBzaGlwcyBhcnJheS5cbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBsZXQgaGl0U2hvdHMgPSBbXTtcbiAgICBjb25zdCByb3dTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAgKHBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUgKSB7XG4gICAgICAgIGxldCBzaGlwU3BvdHMgPSBbXTtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIHJvd1NpemUgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKFNoaXAgKG5hbWUsIHNoaXBTcG90cykpO1xuICAgICAgICByZXR1cm4gc2hpcFNwb3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHBvc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvbnNbal0gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb01lc3NhZ2UoXCIgLi4uIEl0IHdhcyBhIGhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZFRvTWVzc2FnZShcIiAuLi4gSXQgd2FzIGEgbWlzc1wiKTtcbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xvc2VDb25kaXRpb24gKCkge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IHsgcmV0dXJuIGVsZW1lbnQuaXNTdW5rKCk7fSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBDYW5CZVBsYWNlZCAoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vQ29sbGlzaW9ucyhheGlzLCBpLCBsZW5ndGgpICYmIGluc2lkZUJvYXJkKGF4aXMsIGksIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlUG9zaXRpb25zO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBub0NvbGxpc2lvbnMgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSAqIHJvd1NpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zaWRlQm9hcmQgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiICYmIHBvc2l0aW9uICUgMTAgKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiICYmIHBvc2l0aW9uICsgKGxlbmd0aCAtIDEpICogcm93U2l6ZSA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkRE9NICh0eXBlKSB7XG4gICAgICAgIHJlbmRlckJvYXJkKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRmlyc3RUaW1lU3VuayAocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2luayA9IHNoaXBzW2ldLmZpcnN0VGltZVN1bmsocGxheWVyKTtcbiAgICAgICAgICAgIGlmIChmaXJzdFNpbmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBzaGlwQ2FuQmVQbGFjZWQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgY2hlY2tMb3NlQ29uZGl0aW9uLFxuICAgICAgICB1cGRhdGVCb2FyZERPTSxcbiAgICAgICAgc2hpcENhbkJlUGxhY2VkLFxuICAgICAgICBjaGVja0ZpcnN0VGltZVN1bmtcbiAgICB9XG59XG5cbmV4cG9ydCB7R2FtZUJvYXJkfTsiLCJcblxuYXN5bmMgZnVuY3Rpb24gYWRkSGl0QnV0dG9ucyAoYXR0YWNrZWRQb3NpdGlvbnMpIHtcbiAgICBjb25zdCBlbmVteVRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXkgYnV0dG9uJyk7XG4gICAgY29uc3QgaGl0UHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBlbmVteVRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkUG9zaXRpb25zLmluY2x1ZGVzKE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTsgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBoaXRQcm9taXNlO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gY2hvb3NlU2hpcFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgY29uc3QgcGxhY2VtZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBvc2l0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcGxhY2VtZW50UHJvbWlzZTtcbn07XG5cbmV4cG9ydCB7YWRkSGl0QnV0dG9ucywgY2hvb3NlU2hpcFBvc2l0aW9uLCB9OyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgYWRkSGl0QnV0dG9ucywgY2hvb3NlU2hpcFBvc2l0aW9ufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRBeGlzQnV0dG9uLCBjbGVhckJvYXJkU2VjdGlvbiwgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucywgc2hvd1Bvc3NpYmxlUGxhY2VtZW50LCByZW1vdmVDdXJyZW50UGxhY2VtZW50LCBwb3N0TWVzc2FnZSB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgY29tcEFJIH0gZnJvbSBcIi4vY29tcEFJXCI7XG5cbmNvbnN0IFBsYXllciA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGF0dGFja2VkUG9zaXRpb25zID0gW107XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKVxuICAgIGxldCBheGlzID0gXCJ4XCI7XG5cbiAgICAvL0RpZmZlcmVudCBBcHByb2FjaCB0byBBSSwgdHJ5aW5nIG1vcmUgT09QIHdheVxuICAgIGxldCBhaSA9IGNvbXBBSTtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbXBIaXQgKCkge1xuICAgICAgICByZXR1cm4gYWkudGVzdEFJKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hldGhlciBhIHNoaXAgaGFzIGJlZW4gc3VuayBpbiB0aGUgcmVjZW50IGFpbWVkIHNob3RzXG4gICAgZnVuY3Rpb24gaGl0c1N1bmtTaGlwICgpIHtcbiAgICAgICAgY29uc3QgZW5lbXlTaGlwcyA9IG9wcG9uZW50Qm9hcmQuc2hpcHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZW5lbXlTaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldkhpdHMuaW5jbHVkZXMoZW5lbXlTaGlwc1tpXS5wb3NpdGlvbnNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpdENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpdENvdW50ID09PSBlbmVteVNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZWNlbnRTdW5rUG9zaXRpb25zID0gZW5lbXlTaGlwc1tpXS5wb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFja0VuZW15ICgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnZW5lcmF0ZUNvbXBIaXQoKTtcbiAgICAgICAgICAgIGF0dGFja2VkUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgb3BlblBvc2l0aW9ucy5zcGxpY2UocG9zaXRpb24gLSBhdHRhY2tlZFBvc2l0aW9ucy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoYENvbXB1dGVyIGhhcyBzaG90IGNvb3JkaW5hdGUgJHsgcG9zaXRpb24gfWApO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE51bWJlcihhd2FpdCBhZGRIaXRCdXR0b25zKGF0dGFja2VkUG9zaXRpb25zKSk7XG4gICAgICAgICAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIG9wZW5Qb3NpdGlvbnMuc3BsaWNlKHBvc2l0aW9uIC0gYXR0YWNrZWRQb3NpdGlvbnMubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKGBQbGF5ZXIgaGFzIHNob3QgY29vcmRpbmF0ZSAkeyBwb3NpdGlvbiB9YCk7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmVsb3cgZnVuY3Rpb25zIGFyZSByZWxhdGVkIHRvIHNldHRpbmcgdXAgdGhlIGJvYXJkXG5cbiAgICBmdW5jdGlvbiBheGlzVG9nZ2xlICgpIHtcbiAgICAgICAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzLXRvZ2dsZScpO1xuICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IFwieVwiXG4gICAgICAgICAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gXCJ4XCI7XG4gICAgICAgICAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwQm9hcmQgKCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgYWRkQXhpc0J1dHRvbihheGlzKTtcbiAgICAgICAgICAgIGF4aXNUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoNSwgXCJDYXJyaWVyXCIpO1xuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpO1xuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoMywgXCJEZXN0cm95ZXJcIik7XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCgzLCBcIlN1Ym1hcmluZVwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDIsIFwiUGF0cm9sIEJvYXRcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBTaGlwIChsZW5ndGgsIG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgYXhpcyA9IChNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJ4XCIgOiBcInlcIik7XG4gICAgICAgICAgICBsZXQgb3BlblBvc2l0aW9ucyA9IHBsYXllckJvYXJkLnNoaXBDYW5CZVBsYWNlZChheGlzLCBsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBvcGVuUG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wZW5Qb3NpdGlvbnMubGVuZ3RoKV07XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocmFuZG9tUG9zaXRpb24sIGF4aXMsIGxlbmd0aCwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoYFBsYWNlIHlvdXIgJHtuYW1lfWApO1xuICAgICAgICAgICAgbGV0IG9wZW5Qb3NpdGlvbnNYID0gcGxheWVyQm9hcmQuc2hpcENhbkJlUGxhY2VkKFwieFwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgbGV0IG9wZW5Qb3NpdGlvbnNZID0gcGxheWVyQm9hcmQuc2hpcENhbkJlUGxhY2VkKFwieVwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgc3dpdGNoT3BlbnMob3BlblBvc2l0aW9uc1gsIG9wZW5Qb3NpdGlvbnNZLCBsZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gTnVtYmVyKGF3YWl0IGNob29zZVNoaXBQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBTcG90cyA9IHBsYXllckJvYXJkLnBsYWNlU2hpcChwb3NpdGlvbiwgYXhpcywgbGVuZ3RoLCBuYW1lKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke3NoaXBTcG90c1tpXX1cIl1gKTtcbiAgICAgICAgICAgICAgICBib2FyZFNwb3QuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoT3BlbnMgKHhQb3MsIHlQb3MsIGxlbmd0aCkge1xuICAgICAgICBwbGF5ZXJCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYWNlbWVudFwiKTtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHhQb3MpO1xuICAgICAgICAgICAgc2hvd1BsYWNlbWVudCh4UG9zLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBzaG93QXZhaWxhYmxlUG9zaXRpb25zKHlQb3MpO1xuICAgICAgICAgICAgc2hvd1BsYWNlbWVudCh5UG9zLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy10b2dnbGUnKTtcbiAgICAgICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIHNob3dBdmFpbGFibGVQb3NpdGlvbnMoeFBvcyk7XG4gICAgICAgICAgICAgICAgc2hvd1BsYWNlbWVudCh4UG9zLCBnZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIHNob3dBdmFpbGFibGVQb3NpdGlvbnMoeVBvcyk7XG4gICAgICAgICAgICAgICAgc2hvd1BsYWNlbWVudCh5UG9zLCBnZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyBcbiAgICB9O1xuXG4gICAgLy8gSSBkaXNsaWtlIGhhcmQgY29kaW5nIHRoaW5ncywgYnV0IEkgbmVlZCB0byBkbyB0aGlzIGZvciB0aGUgYXhpc3RvZ2dsZSBidXR0b24uXG4gICAgLy8gVGhlIHBsYWNlbWVudCBzaXplIHN0YXlzIGF0IGZpdmUgdW5sZXNzIEkgY2FuY2VsIHRoZSBldmVudCBsaXN0ZW5lcnMgcmVxdWlyZWRcbiAgICAvLyBmb3IgdGhlIGFzeW5jIHBsYXllciBwaWNrXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQbGFjZW1lbnQgPSBwbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBsYWNlbWVudCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA1IC0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBsYWNlbWVudCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA2IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQbGFjZW1lbnQgKHBvc2l0aW9ucywgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkUG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudCBidXR0b24nKTtcbiAgICAgICAgYm9hcmRQb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gTnVtYmVyKHBvc2l0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIikpO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9ucy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQb3NzaWJsZVBsYWNlbWVudChheGlzLCBsZW5ndGgsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUN1cnJlbnRQbGFjZW1lbnQoYXhpcywgbGVuZ3RoLCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7cG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZShcInBvc3NpYmxlLXBsYWNlbWVudFwiKX07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGxhY2VtZW50Qm9hcmQgKCkge1xuICAgICAgICBjbGVhckJvYXJkU2VjdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja0VuZW15LFxuICAgICAgICBzZXR1cEJvYXJkLFxuICAgICAgICByZW1vdmVQbGFjZW1lbnRCb2FyZCxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFpLFxuICAgICAgICBhdHRhY2tlZFBvc2l0aW9uc1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07IiwiaW1wb3J0IHsgcG9zdE1lc3NhZ2UgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgU2hpcCA9IChuYW1lLCBwb3NpdGlvbnMpID0+IHtcbiAgICBsZXQgYWxyZWFkeVN1bmsgPSBmYWxzZTtcbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGZ1bmN0aW9uIGhpdCAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFoaXRzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgaGl0cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vVGhpcyBpcyBmb3IgcG9zdGluZyB0aGUgbWVzc2FnZSB3aGVuIGEgc2hpcCBmaXJzdCBzaW5rc1xuICAgIGZ1bmN0aW9uIGZpcnN0VGltZVN1bmsgKHBsYXllcikge1xuICAgICAgICBpZiAoYWxyZWFkeVN1bmsgPT09IGZhbHNlICYmIGhpdHMubGVuZ3RoID09PSBwb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZShgJHsgcGxheWVyIH0gaGFzIHN1bmsgdGhlIG9wcG9uZW50J3MgJHsgbmFtZSB9YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rICgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGl0cy5sZW5ndGggPT09IHBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGFscmVhZHlTdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBmaXJzdFRpbWVTdW5rLFxuICAgICAgICBwb3NpdGlvbnMsXG4gICAgfVxufVxuXG5leHBvcnQge1NoaXB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcG9zdE1lc3NhZ2UgfSBmcm9tICcuL0RPTSc7XG5cbmNvbnN0IHBsYXllciA9IFBsYXllcihcInBsYXllclwiKTtcbmNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG5jb25zdCBwQm9hcmQgPSBwbGF5ZXIucGxheWVyQm9hcmQ7XG5jb25zdCBjQm9hcmQgPSBjb21wdXRlci5wbGF5ZXJCb2FyZDtcblxuY29tcHV0ZXIuc2V0dXBCb2FyZCgpO1xuXG5hc3luYyBmdW5jdGlvbiBnYW1lRmxvdyAoKSB7XG4gICAgcEJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxhY2VtZW50XCIpO1xuICAgIC8vd2FpdFRlc3QgaXMgdGVtcG9yYXJ5IHdoaWxlIEkgdW5kZXJzdGFuZCBhc3luY2hyb25vdXMgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gd2FpdFRlc3QoeCwgdGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHgpO1xuICAgICAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhd2FpdCBwbGF5ZXIuc2V0dXBCb2FyZCgpO1xuICAgIGF3YWl0IHdhaXRUZXN0KDEwLCAxMDAwKTtcbiAgICBwbGF5ZXIucmVtb3ZlUGxhY2VtZW50Qm9hcmQoKVxuICAgIGNvbXB1dGVyLmFpLmFkZE9wcG9uZW50U2hpcHMocEJvYXJkKTtcbiAgICBsZXQgdHVybiA9IDA7XG4gICAgcEJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxheWVyXCIpO1xuICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKHR1cm4gJSAyID09PSAwKSB7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZShcIlNob290IHlvdXIgc2hvdFwiKTtcbiAgICAgICAgICAgIGNCb2FyZC5yZWNlaXZlQXR0YWNrKGF3YWl0IHBsYXllci5hdHRhY2tFbmVteSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBCb2FyZC5yZWNlaXZlQXR0YWNrKGF3YWl0IGNvbXB1dGVyLmF0dGFja0VuZW15KCkpO1xuICAgICAgICB9XG4gICAgICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICAgICAgY0JvYXJkLnVwZGF0ZUJvYXJkRE9NKFwiZW5lbXlcIik7XG4gICAgICAgIGF3YWl0IHdhaXRUZXN0KDEwLCAyMDAwKTtcbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgcG9zdGluZyBhIG1lc3NhZ2UgaWYgYSBzaGlwIGhhcyBiZWVuIHN1bmtcbiAgICAgICAgaWYgKHBCb2FyZC5jaGVja0ZpcnN0VGltZVN1bmsoXCJDb21wdXRlclwiKSB8fCBjQm9hcmQuY2hlY2tGaXJzdFRpbWVTdW5rKFwiUGxheWVyXCIpKSB7XG4gICAgICAgICAgICBhd2FpdCB3YWl0VGVzdCgxMCwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdHVybisrO1xuICAgIH1cbiAgICB3aGlsZSAoIXBCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSAmJiAhY0JvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpKTtcbiAgICBpZiAocEJvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpKSB7XG4gICAgICAgIHBvc3RNZXNzYWdlKFwiQ29tcHV0ZXIgaGFzIHdvbiB0aGUgYmF0dGxlXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjQm9hcmQuY2hlY2tMb3NlQ29uZGl0aW9uKCkpIHtcbiAgICAgICAgcG9zdE1lc3NhZ2UoXCJQbGF5ZXIgaGFzIHdvbiB0aGUgYmF0dGxlXCIpO1xuICAgIH1cbiAgICBwQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGF5ZXJcIik7XG4gICAgY0JvYXJkLnVwZGF0ZUJvYXJkRE9NKFwiZW5lbXlcIik7XG59XG5cbmdhbWVGbG93KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=