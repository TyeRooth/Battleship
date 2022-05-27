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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./PressStart2P-Regular.ttf */ "./src/PressStart2P-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    background: rgb(2,23,133);\n    background: radial-gradient(circle, rgba(2,23,133,1) 0%, rgba(8,0,50,1) 100%); \n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    margin-top: 30px;\n}\n\n@font-face {\n    font-family: 'GameFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: grey;\n    border-radius: 16px;\n    width: 55%;\n    height: 2rem;\n    font-family: 'GameFont';\n    font-size: 0.7rem;\n    color: lightgray;\n    background: rgb(34,34,34);\n    background: radial-gradient(circle, rgba(34,34,34,1) 0%, rgba(55,55,55,1) 100%);\n    border: solid 1px white;\n    padding: 10px; \n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n    padding: 3px;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background: rgb(196,196,196);\n    background: radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(139,139,139,1) 100%);\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background: transparent;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,6EAA6E;AACjF;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,4CAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,+EAA+E;IAC/E,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,4BAA4B;IAC5B,qFAAqF;AACzF;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8DAA8D;IAC9D,2DAA2D;IAC3D,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["body {\n    padding: 0px;\n    margin: 0px;\n}\n\n:root {\n    font-size: 20px;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    background: rgb(2,23,133);\n    background: radial-gradient(circle, rgba(2,23,133,1) 0%, rgba(8,0,50,1) 100%); \n}\n\n#heading-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n}\n\n#logo {\n    height: 7vh;\n}\n\n#message-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    margin-top: 30px;\n}\n\n@font-face {\n    font-family: 'GameFont';\n    src: url(./PressStart2P-Regular.ttf);\n}\n\n#message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: grey;\n    border-radius: 16px;\n    width: 55%;\n    height: 2rem;\n    font-family: 'GameFont';\n    font-size: 0.7rem;\n    color: lightgray;\n    background: rgb(34,34,34);\n    background: radial-gradient(circle, rgba(34,34,34,1) 0%, rgba(55,55,55,1) 100%);\n    border: solid 1px white;\n    padding: 10px; \n}\n\n#boards-section {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 72vh;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n.board-summary {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.board-heading {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#axis-toggle {\n    width: max-content;\n    padding: 3px;\n}\n\n#credit-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8vh;\n    background: rgb(196,196,196);\n    background: radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(139,139,139,1) 100%);\n}\n\n.board {\n    width: 400px;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 2px;\n}\n\n.position {\n    color: white;\n    background: transparent;\n    border: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.available:hover,\nbutton.possible-placement {\n    background-color: lightgray;\n}\n\n.unavailable:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.enemy button:hover {\n    background-color: green;\n    cursor: crosshair;\n}\n\n.enemy button.shot:hover {\n    background-color: maroon;\n    cursor:not-allowed;\n}\n\n.circle {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    display: inline-block;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
        if (type === "player" && showShips(shipSpots, i)) {
           position.classList.add('ship');
        }
        else if (type === "placement" && showShips(shipSpots, i)) {
            position.classList.add("ship");
        }
        //Computer ships appear once sunk
        else if (type === "enemy" && showSunkShips(shipSpots, i)) {
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

//Shows computer ships once they are sunk
function showSunkShips (ships, position) {
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].isSunk("arg to prevent sink state") && ships[i].positions.includes(position)) {
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

function hitShotDOM () {
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
    const coordinateNode = document.querySelector(`[data-position="${coordinate}"]`);
    if (coordinateNode.classList.contains('available')) {
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
}

function removeCurrentPlacement (axis, length, coordinate) {
    const coordinateNode = document.querySelector(`[data-position="${coordinate}"]`);
    if (coordinateNode.classList.contains('available')) {
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
            alreadySunk = true;
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.postMessage)(`${ player } has sunk the opponent's ${ name }`);
            return true;
        }
        return false;
    }

    // The argument is used to prevent DOM manipulation requiring isSunk to change alreadySunk
    function isSunk (a) {
        const result = hits.length === positions.length;
        if (result && arguments.length === 0) {
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



/***/ }),

/***/ "./src/PressStart2P-Regular.ttf":
/*!**************************************!*\
  !*** ./src/PressStart2P-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21503c6a5385ab41dde9.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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




async function gameFlow () {
    const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("player");
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("computer");
    const pBoard = player.playerBoard;
    const cBoard = computer.playerBoard;
    computer.setupBoard();
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
        await waitTest(10, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdEQUFnRCxtQkFBbUIsa0JBQWtCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGdDQUFnQyxxRkFBcUYsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLHVCQUF1QixHQUFHLGdCQUFnQiw4QkFBOEIsMkRBQTJELEdBQUcsY0FBYyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsNkJBQTZCLDBCQUEwQixpQkFBaUIsbUJBQW1CLDhCQUE4Qix3QkFBd0IsdUJBQXVCLGdDQUFnQyxzRkFBc0YsOEJBQThCLHFCQUFxQixHQUFHLHFCQUFxQixvQkFBb0Isb0NBQW9DLDBCQUEwQixtQkFBbUIsc0JBQXNCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsbUJBQW1CLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQ0FBbUMsNEZBQTRGLEdBQUcsWUFBWSxtQkFBbUIsb0JBQW9CLG9CQUFvQixxRUFBcUUsa0VBQWtFLGVBQWUsR0FBRyxlQUFlLG1CQUFtQiw4QkFBOEIsOEJBQThCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsa0RBQWtELGtDQUFrQyxHQUFHLHdCQUF3QiwrQkFBK0IseUJBQXlCLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyx5QkFBeUIsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4QiwrQkFBK0IseUJBQXlCLEdBQUcsYUFBYSxtQkFBbUIsa0JBQWtCLHlCQUF5Qiw0QkFBNEIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0NBQWdDLG1CQUFtQixrQkFBa0IsR0FBRyxXQUFXLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixvQkFBb0IsZ0NBQWdDLHFGQUFxRixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDhCQUE4QiwyQ0FBMkMsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsOEJBQThCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLGlCQUFpQixtQkFBbUIsOEJBQThCLHdCQUF3Qix1QkFBdUIsZ0NBQWdDLHNGQUFzRiw4QkFBOEIscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLG1CQUFtQixzQkFBc0IsZ0JBQWdCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDBCQUEwQixHQUFHLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1DQUFtQyw0RkFBNEYsR0FBRyxZQUFZLG1CQUFtQixvQkFBb0Isb0JBQW9CLHFFQUFxRSxrRUFBa0UsZUFBZSxHQUFHLGVBQWUsbUJBQW1CLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxrREFBa0Qsa0NBQWtDLEdBQUcsd0JBQXdCLCtCQUErQix5QkFBeUIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLCtCQUErQix5QkFBeUIsR0FBRyxhQUFhLG1CQUFtQixrQkFBa0IseUJBQXlCLDRCQUE0QixHQUFHLG1CQUFtQjtBQUN4ck47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxNQUFNO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHFFQUFxRSxXQUFXO0FBQ2hGO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qyw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDLDRFQUE0RSxvQkFBb0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRSxXQUFXO0FBQ2hGO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qyw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDLDRFQUE0RSxvQkFBb0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QOEI7QUFDb0I7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekMsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBVztBQUNuQjs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCd0M7QUFDcUI7QUFDZ0Y7QUFDM0c7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUztBQUMvQjs7QUFFQTtBQUNBLGFBQWEsMkNBQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFXLGtDQUFrQyxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1REFBYTtBQUNyRDtBQUNBO0FBQ0EsWUFBWSxpREFBVyxnQ0FBZ0MsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFXLGVBQWUsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNERBQWtCO0FBQzFEO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRCw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQXFCO0FBQ3pDLGlCQUFpQjtBQUNqQjtBQUNBLG9CQUFvQiw0REFBc0I7QUFDMUMsaUJBQWlCO0FBQ2pCO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFFBQVEsdURBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Sm9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVyxLQUFLLFNBQVMsMkJBQTJCLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDYTtBQUNFOztBQUVwQztBQUNBLG1CQUFtQiwrQ0FBTTtBQUN6QixxQkFBcUIsK0NBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBBSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9QcmVzc1N0YXJ0MlAtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMjMsMTMzKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyLDIzLDEzMywxKSAwJSwgcmdiYSg4LDAsNTAsMSkgMTAwJSk7IFxcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhbWVGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHYW1lRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsMzQsMzQpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDM0LDM0LDM0LDEpIDAlLCByZ2JhKDU1LDU1LDU1LDEpIDEwMCUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDsgXFxufVxcblxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDcydmg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWhlYWRpbmcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2F4aXMtdG9nZ2xlIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbiNjcmVkaXQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NiwxOTYsMTk2KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTYsMTk2LDE5NiwxKSAwJSwgcmdiYSgxMzksMTM5LDEzOSwxKSAxMDAlKTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIsXFxuYnV0dG9uLnBvc3NpYmxlLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnVuYXZhaWxhYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbi5zaG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtFQUErRTtJQUMvRSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixxRkFBcUY7QUFDekY7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsMkRBQTJEO0lBQzNELFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMjMsMTMzKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyLDIzLDEzMywxKSAwJSwgcmdiYSg4LDAsNTAsMSkgMTAwJSk7IFxcbn1cXG5cXG4jaGVhZGluZy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhbWVGb250JztcXG4gICAgc3JjOiB1cmwoLi9QcmVzc1N0YXJ0MlAtUmVndWxhci50dGYpO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHYW1lRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsMzQsMzQpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDM0LDM0LDM0LDEpIDAlLCByZ2JhKDU1LDU1LDU1LDEpIDEwMCUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDsgXFxufVxcblxcbiNib2FyZHMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDcydmg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWhlYWRpbmcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2F4aXMtdG9nZ2xlIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbiNjcmVkaXQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NiwxOTYsMTk2KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxOTYsMTk2LDE5NiwxKSAwJSwgcmdiYSgxMzksMTM5LDEzOSwxKSAxMDAlKTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIsXFxuYnV0dG9uLnBvc3NpYmxlLXBsYWNlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnVuYXZhaWxhYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmVuZW15IGJ1dHRvbi5zaG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlckJvYXJkICh0eXBlLCBtaXNzZWRTaG90cywgaGl0U2hvdHMsIHNoaXBTcG90cykge1xuXG4gICAgY29uc3QgYm9hcmRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkcy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYm9hcmROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmROb2RlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXN1bW1hcnknKTtcbiAgICBjb25zdCBib2FyZEhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKHR5cGUpO1xuICAgIGJvYXJkTm9kZS5hcHBlbmRDaGlsZChib2FyZEhlYWRpbmcpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7IHR5cGUgfWApXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHBvc2l0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicsIGkpO1xuICAgICAgICBpZiAobWlzc2VkU2hvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKG1pc3NlZFNob3RET00oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGl0U2hvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKGhpdFNob3RET00oKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFwicGxheWVyXCIgJiYgc2hvd1NoaXBzKHNoaXBTcG90cywgaSkpIHtcbiAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicGxhY2VtZW50XCIgJiYgc2hvd1NoaXBzKHNoaXBTcG90cywgaSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vQ29tcHV0ZXIgc2hpcHMgYXBwZWFyIG9uY2Ugc3Vua1xuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcImVuZW15XCIgJiYgc2hvd1N1bmtTaGlwcyhzaGlwU3BvdHMsIGkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChwb3NpdGlvbik7XG4gICAgfTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4keyB0eXBlIH1gKSkge1xuICAgICAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBib2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmROb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4keyB0eXBlIH1gKTtcbiAgICAgICAgY3VycmVudEJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY3VycmVudEJvYXJkLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzaG93U2hpcHMoc2hpcFNwb3RzLCBwb3NpdGlvbikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwU3BvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXBTcG90c1tpXS5wb3NpdGlvbnMuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vU2hvd3MgY29tcHV0ZXIgc2hpcHMgb25jZSB0aGV5IGFyZSBzdW5rXG5mdW5jdGlvbiBzaG93U3Vua1NoaXBzIChzaGlwcywgcG9zaXRpb24pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzaGlwc1tpXS5pc1N1bmsoXCJhcmcgdG8gcHJldmVudCBzaW5rIHN0YXRlXCIpICYmIHNoaXBzW2ldLnBvc2l0aW9ucy5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZyh0eXBlKSB7XG4gICAgY29uc3QgaGVhZGluZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nTm9kZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1oZWFkaW5nJyk7XG4gICAgaWYgKHR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIkZyaWVuZGx5IFdhdGVyc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcImVuZW15XCIpIHtcbiAgICAgICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIkVuZW15IFdhdGVyc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInBsYWNlbWVudFwiKSB7XG4gICAgICAgIGhlYWRpbmdOb2RlLnRleHRDb250ZW50ID0gXCJSZWFkeSB5b3VyIFNoaXBzXCI7XG4gICAgfVxuICAgIHJldHVybiBoZWFkaW5nTm9kZVxufVxuXG5mdW5jdGlvbiBtaXNzZWRTaG90RE9NICgpIHtcbiAgICBjb25zdCBtaXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlzc0NpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICBtaXNzQ2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICByZXR1cm4gbWlzc0NpcmNsZTtcbn1cblxuZnVuY3Rpb24gaGl0U2hvdERPTSAoKSB7XG4gICAgY29uc3QgaGl0Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0Q2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIGhpdENpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIHJldHVybiBoaXRDaXJjbGU7XG59XG5cbmZ1bmN0aW9uIGFkZEF4aXNCdXR0b24gKGF4aXMpIHtcbiAgICBjb25zdCBib2FyZEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtaGVhZGluZycpO1xuICAgIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBheGlzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXhpcy10b2dnbGUnKTtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQXhpczogWFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBeGlzOiBZXCI7XG4gICAgfVxuICAgIGJvYXJkSGVhZGluZy5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyhvcGVuUG9zaXRpb25zKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudCBidXR0b24nKTtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcGVuUG9zaXRpb25zLmluY2x1ZGVzKE51bWJlcihwb3NpdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaG93UG9zc2libGVQbGFjZW1lbnQgKGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgaWYgKGNvb3JkaW5hdGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygnYXZhaWxhYmxlJykpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9zc2libGUtcGxhY2VtZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpICogMTB9XCJdYCk7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRQbGFjZW1lbnQgKGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG4gICAgaWYgKGNvb3JkaW5hdGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygnYXZhaWxhYmxlJykpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9zc2libGUtcGxhY2VtZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke2Nvb3JkaW5hdGUgKyBpICogMTB9XCJdYCk7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NzaWJsZS1wbGFjZW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZFNlY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZHMtc2VjdGlvbicpO1xuICAgIGJvYXJkU2VjdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHBvc3RNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4gICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59IFxuXG5mdW5jdGlvbiBhZGRUb01lc3NhZ2UgKGFkZGVkVGV4dCkge1xuICAgIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSBtZXNzYWdlQm94LnRleHRDb250ZW50ICsgYWRkZWRUZXh0O1xufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZCwgYWRkQXhpc0J1dHRvbiwgY2xlYXJCb2FyZFNlY3Rpb24sIHNob3dBdmFpbGFibGVQb3NpdGlvbnMsIHNob3dQb3NzaWJsZVBsYWNlbWVudCwgcmVtb3ZlQ3VycmVudFBsYWNlbWVudCwgcG9zdE1lc3NhZ2UsIGFkZFRvTWVzc2FnZSB9OyIsImxldCBjb21wQUkgPSB7XG4gICAgaGl0IDogW10sXG4gICAgbWlzc2VkIDogW10sXG4gICAgbGFzdFNob3QgOiBudWxsLFxuICAgIGxhc3RIaXQgOiBudWxsLFxuICAgIGxhc3RTaG90V2FzSGl0IDogZmFsc2UsXG4gICAgb3Bwb25lbnRTaGlwcyA6IFtdLFxuICAgIHBvc3NpYmxlSGl0cyA6IFtdLFxuICAgIGFjdGl2ZUhpdHMgOiBbXSxcbiAgICBjdXJEaXIgOiBudWxsLFxuICAgIGNoYW5nZWREaXIgOiBmYWxzZSxcbiAgICAvL0ZvciBtdWx0aXBsZSBzaGlwIGluc3RhbmNlc1xuICAgIHN0b3JlZEhpdHMgOiBbXSxcblxuICAgIC8vIFJlcXVpcmVkIGZvciBBSSB0byByZWNvZ25pemUgd2hldGhlciBhIGhpdCBoYXMgYmVlbiBtYWRlXG4gICAgYWRkT3Bwb25lbnRTaGlwcyA6IGZ1bmN0aW9uIChib2FyZCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50U2hpcHMgPSBib2FyZC5zaGlwcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wcG9uZW50U2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHBvbmVudFNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVIaXRzLnB1c2godGhpcy5vcHBvbmVudFNoaXBzW2ldLnBvc2l0aW9uc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy9NYW51YWwgYWRkIGlzIHVzZWQgaW4gbXkgdGVzdHMgZm9yIHRoZSBjb21wdXRlclxuICAgIG1hbnVhbEFkZCA6IGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUhpdHMgPSByZW1vdmVTdW5rU2hpcCh0aGlzLmFjdGl2ZUhpdHMsIHRoaXMub3Bwb25lbnRTaGlwcyk7XG4gICAgICAgIHRoaXMuY29uZmlndXJlQUkoY29vcmQpO1xuICAgIH0sXG5cbiAgICAvL1Jlc2V0IEFJIGFsc28gaW1wb3J0YW50IGZvciB0ZXN0aW5nIHNpbmNlIEkgYW0gaGF2aW5nIHRyb3VibGUgd2l0aCB0ZWFyZG93blxuICAgIHJlc2V0QUkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGl0ID0gW107XG4gICAgICAgIHRoaXMubWlzc2VkID0gW107XG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RTaG90V2FzSGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnBvc3NpYmxlSGl0cyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUhpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJEaXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0b3JlZEhpdHMgPSBbXTtcbiAgICB9LFxuXG4gICAgd2FzSGl0IDogZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3NpYmxlSGl0cy5pbmNsdWRlcyhjb29yZCk7IFxuICAgIH0sXG5cbiAgICAvL1RoaXMgY2hlY2tzIHdoZXRoZXIgQUkgY2FuIGZvbGxvdyByZWd1bGFyIHBhdHRlcm4gb3IgbmVlZHMgdG8gY2hhbmdlIGRpcmVjdGlvbnMgZHVlIHRvIGxpbWl0c1xuICAgIGNoZWNrTmV4dEF2YWlsYWJsZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVBcnJheSA9IGNoZWNrRGlyZWN0aW9uQXZhaWxhYmxlKHRoaXMubGFzdEhpdCwgdGhpcy5taXNzZWQsIHRoaXMuaGl0KTtcbiAgICAgICAgY29uc3QgcmV2ZXJzZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICBpZiAocG9zc2libGVBcnJheS5pbmNsdWRlcyh0aGlzLmN1ckRpcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RIaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmV2ZXJzZUFycmF5LmluY2x1ZGVzKG9wcERpcih0aGlzLmN1ckRpcikpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVIaXRzWzBdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrTXVsdGlwbGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID4gMSAmJiB0aGlzLnN0b3JlZEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5sYXN0SGl0LCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZUFycmF5ID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgaWYgKCFwb3NzaWJsZUFycmF5LmluY2x1ZGVzKHRoaXMuY3VyRGlyKSAmJiAhcmV2ZXJzZUFycmF5LmluY2x1ZGVzKG9wcERpcih0aGlzLmN1ckRpcikpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgIFxuICAgIH0sXG5cbiAgICBjb25maWd1cmVNdWx0aXBsZVNoaXBzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdMZW5ndGggPSB0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydGluZ0xlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkSGl0cy5wdXNoKHRoaXMuYWN0aXZlSGl0cy5wb3AoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdG9yZWRIaXRzLmxlbmd0aCA+IDAgJiYgdGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVIaXRzLnB1c2godGhpcy5zdG9yZWRIaXRzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUZXN0IHRvIHNlZSB3aGV0aGVyIGdlbmVyYXRlZCBzaG90IGlzIGEgaGl0IGFuZCBjaGFuZ2VzIHRoZSBvYmplY3QgYWNjb3JkaW5nbHlcbiAgICAvLyBFc3NlbnRpYWxseSB0aGlzIGNvbmZpZ3VyZXMgdGhlIHZhcmlhYmxlcyBpbXBvcnRhbnQgZm9yIGRlY2lkaW5nIG9uIGEgc2hvdFxuICAgIGNvbmZpZ3VyZUFJIDogZnVuY3Rpb24gKG5ld1Nob3QpIHtcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG5ld1Nob3Q7XG4gICAgICAgIGlmICh0aGlzLndhc0hpdChuZXdTaG90KSkge1xuICAgICAgICAgICAgdGhpcy5oaXQucHVzaChuZXdTaG90KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3RXYXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGl0ID0gbmV3U2hvdDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSGl0cy5wdXNoKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzZWQucHVzaChuZXdTaG90KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3RXYXNIaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3U2hvdDtcbiAgICB9LFxuXG4gICAgLy9NYWluIG1ldGhvZFxuICAgIHRlc3RBSSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVIaXRzID0gcmVtb3ZlU3Vua1NoaXAodGhpcy5hY3RpdmVIaXRzLCB0aGlzLm9wcG9uZW50U2hpcHMpO1xuICAgICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgc2hpcHMgYW5kIGNvbmZpZ3VyZSBvYmplY3QgaWYgbmVlZGVkXG4gICAgICAgIGlmICh0aGlzLmNoZWNrTXVsdGlwbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVNdWx0aXBsZVNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9BZnRlciBmaXJzdCBoaXQgYWZ0ZXIgcmFuZG9tIHBlcmlvZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVIaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcG9zRGlyID0gY2hlY2tEaXJlY3Rpb25BdmFpbGFibGUodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLm1pc3NlZCwgdGhpcy5oaXQpO1xuICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBwb3NEaXJbcmFuZG9tSW5kZXgocG9zRGlyKV07XG4gICAgICAgICAgICBsZXQgbmV3U2hvdCA9IGNyZWF0ZU5ld1Nob3QodGhpcy5hY3RpdmVIaXRzWzBdLCB0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVBSShuZXdTaG90KTtcbiAgICAgICAgfVxuICAgICAgICAvL1JhbmRvbSBTaG90XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zID0gZ2V0T3BlblBvc2l0aW9ucyh0aGlzLmhpdCwgdGhpcy5taXNzZWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3U2hvdCA9IG9wZW5Qb3NpdGlvbnNbcmFuZG9tSW5kZXgob3BlblBvc2l0aW9ucyldO1xuICAgICAgICAgICAgLy9JbiBjYXNlIG9mIGZ1bGxCb2FyZFxuICAgICAgICAgICAgaWYgKG5ld1Nob3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyZUFJKG5ld1Nob3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFmdGVyIHR3byBvciBtb3JlIGFkamFjZW50IGNvb3JkcyBoYXZlIGJlZW4gaGl0XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlSGl0cy5sZW5ndGggPiAxICYmIHRoaXMubGFzdFNob3RXYXNIaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyYW5jaGluZ0hpdCA9IHRoaXMuY2hlY2tOZXh0QXZhaWxhYmxlKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoaW5nSGl0ID09PSB0aGlzLmFjdGl2ZUhpdHNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckRpciA9IG9wcERpcih0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3U2hvdCA9IGNyZWF0ZU5ld1Nob3QoYnJhbmNoaW5nSGl0LCB0aGlzLmN1ckRpcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVBSShuZXdTaG90KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIG1pc3MgYWZ0ZXIgY29uc2VjdXRpdmUgaGl0cyB0byBjaGFuZ2UgZGlyZWN0aW9uc1xuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZUhpdHMubGVuZ3RoID4gMSAmJiAhdGhpcy5sYXN0U2hvdFdhc0hpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBvcHBEaXIodGhpcy5jdXJEaXIpO1xuICAgICAgICAgICAgbGV0IG5ld1Nob3QgPSBjcmVhdGVOZXdTaG90KHRoaXMuYWN0aXZlSGl0c1swXSwgdGhpcy5jdXJEaXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlQUkobmV3U2hvdCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZXRPcGVuUG9zaXRpb25zIChtaXNzZWQsIGhpdCkge1xuICAgIGxldCBvcGVuUG9zaXRpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZiAoIW1pc3NlZC5pbmNsdWRlcyhpKSAmJiAhaGl0LmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICBvcGVuUG9zaXRpb25zLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wZW5Qb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Nob3QgKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uIC0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbiArIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uICsgMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uIC0xO1xuICAgIH1cbn1cblxuLy8gVGhpcyBpcyBob3cgdGhlIGNvbXB1dGVyIHdpbGwgYmUgYWJsZSB0byB0ZWxsIGl0IGhhcyBzdW5rIGEgc2hpcFxuLy8gSWYgYWN0aXZlSGl0cy5sZW5ndGggPT09IDAgYWZ0ZXIgdGhpcywgY29tcHV0ZXIgd2lsbCBzaG9vdCByYW5kb21seSBhZ2FpblxuZnVuY3Rpb24gcmVtb3ZlU3Vua1NoaXAgKGFjdGl2ZSwgc2hpcHMpIHtcbiAgICBsZXQgc3Vua1Bvc2l0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmUuaW5jbHVkZXMoc2hpcHNbaV0ucG9zaXRpb25zW2pdKSkge1xuICAgICAgICAgICAgICAgIGhpdENvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpdENvdW50ID09PSBzaGlwc1tpXS5wb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rUG9zaXRpb25zID0gc2hpcHNbaV0ucG9zaXRpb25zO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua1Bvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gYWN0aXZlLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBpZiAoc3Vua1Bvc2l0aW9ucy5pbmNsdWRlcyhhY3RpdmVbal0pKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlO1xufVxuXG5mdW5jdGlvbiBjaGVja0RpcmVjdGlvbkF2YWlsYWJsZSAoY29vcmQsIGhpdHMsIG1pc3Nlcykge1xuICAgIGxldCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbXTtcbiAgICBjb25zdCByb3dEaWYgPSAxMDtcbiAgICBjb25zdCBjb2xEaWYgPSAxO1xuICAgIGNvbnN0IHVwID0gY29vcmQgLSByb3dEaWY7XG4gICAgaWYgKHVwID49IDAgJiYgY2hlY2tOb3RTaG90KHVwLCBoaXRzLCBtaXNzZXMpKSB7XG4gICAgICAgIHBvc3NpYmxlRGlyZWN0aW9ucy5wdXNoKFwidXBcIik7XG4gICAgfVxuICAgIGNvbnN0IHJpZ2h0ID0gY29vcmQgKyBjb2xEaWY7XG4gICAgaWYgKHJpZ2h0ICUgcm93RGlmICE9PSAwICYmIGNoZWNrTm90U2hvdChyaWdodCwgaGl0cywgbWlzc2VzKSkge1xuICAgICAgICBwb3NzaWJsZURpcmVjdGlvbnMucHVzaChcInJpZ2h0XCIpO1xuICAgIH1cbiAgICBjb25zdCBkb3duID0gY29vcmQgKyByb3dEaWY7XG4gICAgaWYgKGRvd24gPCAxMDAgJiYgY2hlY2tOb3RTaG90KGRvd24sIGhpdHMsIG1pc3NlcykpIHtcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLnB1c2goXCJkb3duXCIpO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0gY29vcmQgLSBjb2xEaWY7XG4gICAgaWYgKGxlZnQgJSByb3dEaWYgIT09IDkgJiYgY2hlY2tOb3RTaG90KGxlZnQsIGhpdHMsIG1pc3NlcykpIHtcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLnB1c2goXCJsZWZ0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVEaXJlY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBjaGVja05vdFNob3QgKGNvb3JkLCBoaXRBcnJheSwgbWlzc0FycmF5KSB7XG4gICAgaWYgKCFoaXRBcnJheS5pbmNsdWRlcyhjb29yZCkgJiYgIW1pc3NBcnJheS5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge2ZhbHNlO31cbn1cblxuZnVuY3Rpb24gb3BwRGlyKGRpcikge1xuICAgIGlmIChkaXIgPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gXCJkb3duXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpciA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyID09PSBcImRvd25cIikge1xuICAgICAgICByZXR1cm4gXCJ1cFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXIgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHJldHVybiBcInJpZ2h0XCI7XG4gICAgfVxufVxuXG4vL0kgd2lsbCBiZSB1c2luZyB0aGlzIGEgbG90XG5mdW5jdGlvbiByYW5kb21JbmRleCAoYXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IHsgY29tcEFJIH07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHJlbmRlckJvYXJkLCBhZGRUb01lc3NhZ2UgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy9PcmRlciBvZiBwb3NpdGlvbnMgYXJyYXkgbGluZXMgdXAgd2l0aCBvcmRlciBvZiBzaGlwcyBhcnJheS5cbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBsZXQgaGl0U2hvdHMgPSBbXTtcbiAgICBjb25zdCByb3dTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAgKHBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUgKSB7XG4gICAgICAgIGxldCBzaGlwU3BvdHMgPSBbXTtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGlwU3BvdHMucHVzaChwb3NpdGlvbiArIHJvd1NpemUgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKFNoaXAgKG5hbWUsIHNoaXBTcG90cykpO1xuICAgICAgICByZXR1cm4gc2hpcFNwb3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHBvc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnBvc2l0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwc1tpXS5wb3NpdGlvbnNbal0gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb01lc3NhZ2UoXCIgLi4uIEl0IHdhcyBhIGhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZFRvTWVzc2FnZShcIiAuLi4gSXQgd2FzIGEgbWlzc1wiKTtcbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0xvc2VDb25kaXRpb24gKCkge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IHsgcmV0dXJuIGVsZW1lbnQuaXNTdW5rKCk7fSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBDYW5CZVBsYWNlZCAoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vQ29sbGlzaW9ucyhheGlzLCBpLCBsZW5ndGgpICYmIGluc2lkZUJvYXJkKGF4aXMsIGksIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlUG9zaXRpb25zO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBub0NvbGxpc2lvbnMgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNbal0ucG9zaXRpb25zLmluY2x1ZGVzKHBvc2l0aW9uICsgaSAqIHJvd1NpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zaWRlQm9hcmQgKGF4aXMsIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiICYmIHBvc2l0aW9uICUgMTAgKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiICYmIHBvc2l0aW9uICsgKGxlbmd0aCAtIDEpICogcm93U2l6ZSA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkRE9NICh0eXBlKSB7XG4gICAgICAgIHJlbmRlckJvYXJkKHR5cGUsIG1pc3NlZFNob3RzLCBoaXRTaG90cywgc2hpcHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRmlyc3RUaW1lU3VuayAocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2luayA9IHNoaXBzW2ldLmZpcnN0VGltZVN1bmsocGxheWVyKTtcbiAgICAgICAgICAgIGlmIChmaXJzdFNpbmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBzaGlwQ2FuQmVQbGFjZWQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgY2hlY2tMb3NlQ29uZGl0aW9uLFxuICAgICAgICB1cGRhdGVCb2FyZERPTSxcbiAgICAgICAgc2hpcENhbkJlUGxhY2VkLFxuICAgICAgICBjaGVja0ZpcnN0VGltZVN1bmtcbiAgICB9XG59XG5cbmV4cG9ydCB7R2FtZUJvYXJkfTsiLCJcblxuYXN5bmMgZnVuY3Rpb24gYWRkSGl0QnV0dG9ucyAoYXR0YWNrZWRQb3NpdGlvbnMpIHtcbiAgICBjb25zdCBlbmVteVRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXkgYnV0dG9uJyk7XG4gICAgY29uc3QgaGl0UHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBlbmVteVRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkUG9zaXRpb25zLmluY2x1ZGVzKE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJykpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTsgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBoaXRQcm9taXNlO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gY2hvb3NlU2hpcFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQgYnV0dG9uJyk7XG4gICAgY29uc3QgcGxhY2VtZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBvc2l0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcGxhY2VtZW50UHJvbWlzZTtcbn07XG5cbmV4cG9ydCB7YWRkSGl0QnV0dG9ucywgY2hvb3NlU2hpcFBvc2l0aW9uLCB9OyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgYWRkSGl0QnV0dG9ucywgY2hvb3NlU2hpcFBvc2l0aW9ufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRBeGlzQnV0dG9uLCBjbGVhckJvYXJkU2VjdGlvbiwgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucywgc2hvd1Bvc3NpYmxlUGxhY2VtZW50LCByZW1vdmVDdXJyZW50UGxhY2VtZW50LCBwb3N0TWVzc2FnZSB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgY29tcEFJIH0gZnJvbSBcIi4vY29tcEFJXCI7XG5cbmNvbnN0IFBsYXllciA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGF0dGFja2VkUG9zaXRpb25zID0gW107XG4gICAgbGV0IG9wZW5Qb3NpdGlvbnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKVxuICAgIGxldCBheGlzID0gXCJ4XCI7XG5cbiAgICAvL0RpZmZlcmVudCBBcHByb2FjaCB0byBBSSwgdHJ5aW5nIG1vcmUgT09QIHdheVxuICAgIGxldCBhaSA9IGNvbXBBSTtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbXBIaXQgKCkge1xuICAgICAgICByZXR1cm4gYWkudGVzdEFJKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYXR0YWNrRW5lbXkgKCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGdlbmVyYXRlQ29tcEhpdCgpO1xuICAgICAgICAgICAgYXR0YWNrZWRQb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgICBvcGVuUG9zaXRpb25zLnNwbGljZShwb3NpdGlvbiAtIGF0dGFja2VkUG9zaXRpb25zLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZShgQ29tcHV0ZXIgaGFzIHNob3QgY29vcmRpbmF0ZSAkeyBwb3NpdGlvbiB9YCk7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gTnVtYmVyKGF3YWl0IGFkZEhpdEJ1dHRvbnMoYXR0YWNrZWRQb3NpdGlvbnMpKTtcbiAgICAgICAgICAgIGF0dGFja2VkUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgb3BlblBvc2l0aW9ucy5zcGxpY2UocG9zaXRpb24gLSBhdHRhY2tlZFBvc2l0aW9ucy5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoYFBsYXllciBoYXMgc2hvdCBjb29yZGluYXRlICR7IHBvc2l0aW9uIH1gKTtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjsgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCZWxvdyBmdW5jdGlvbnMgYXJlIHJlbGF0ZWQgdG8gc2V0dGluZyB1cCB0aGUgYm9hcmRcblxuICAgIGZ1bmN0aW9uIGF4aXNUb2dnbGUgKCkge1xuICAgICAgICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMtdG9nZ2xlJyk7XG4gICAgICAgIGF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gXCJ5XCJcbiAgICAgICAgICAgICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBeGlzOiBZXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBcInhcIjtcbiAgICAgICAgICAgICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBeGlzOiBYXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBCb2FyZCAoKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICBhZGRBeGlzQnV0dG9uKGF4aXMpO1xuICAgICAgICAgICAgYXhpc1RvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCg1LCBcIkNhcnJpZXJcIik7XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCg0LCBcIkJhdHRsZXNoaXBcIik7XG4gICAgICAgIGF3YWl0IHNldHVwU2hpcCgzLCBcIkRlc3Ryb3llclwiKTtcbiAgICAgICAgYXdhaXQgc2V0dXBTaGlwKDMsIFwiU3VibWFyaW5lXCIpO1xuICAgICAgICBhd2FpdCBzZXR1cFNoaXAoMiwgXCJQYXRyb2wgQm9hdFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cFNoaXAgKGxlbmd0aCwgbmFtZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBheGlzID0gKE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcInhcIiA6IFwieVwiKTtcbiAgICAgICAgICAgIGxldCBvcGVuUG9zaXRpb25zID0gcGxheWVyQm9hcmQuc2hpcENhbkJlUGxhY2VkKGF4aXMsIGxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IG9wZW5Qb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3BlblBvc2l0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChyYW5kb21Qb3NpdGlvbiwgYXhpcywgbGVuZ3RoLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZShgUGxhY2UgeW91ciAke25hbWV9YCk7XG4gICAgICAgICAgICBsZXQgb3BlblBvc2l0aW9uc1ggPSBwbGF5ZXJCb2FyZC5zaGlwQ2FuQmVQbGFjZWQoXCJ4XCIsIGxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgb3BlblBvc2l0aW9uc1kgPSBwbGF5ZXJCb2FyZC5zaGlwQ2FuQmVQbGFjZWQoXCJ5XCIsIGxlbmd0aCk7XG4gICAgICAgICAgICBzd2l0Y2hPcGVucyhvcGVuUG9zaXRpb25zWCwgb3BlblBvc2l0aW9uc1ksIGxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBOdW1iZXIoYXdhaXQgY2hvb3NlU2hpcFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFNwb3RzID0gcGxheWVyQm9hcmQucGxhY2VTaGlwKHBvc2l0aW9uLCBheGlzLCBsZW5ndGgsIG5hbWUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU3BvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3NpdGlvbj1cIiR7c2hpcFNwb3RzW2ldfVwiXWApO1xuICAgICAgICAgICAgICAgIGJvYXJkU3BvdC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hPcGVucyAoeFBvcywgeVBvcywgbGVuZ3RoKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxhY2VtZW50XCIpO1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHNob3dBdmFpbGFibGVQb3NpdGlvbnMoeFBvcyk7XG4gICAgICAgICAgICBzaG93UGxhY2VtZW50KHhQb3MsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIHNob3dBdmFpbGFibGVQb3NpdGlvbnMoeVBvcyk7XG4gICAgICAgICAgICBzaG93UGxhY2VtZW50KHlQb3MsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzLXRvZ2dsZScpO1xuICAgICAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh4UG9zKTtcbiAgICAgICAgICAgICAgICBzaG93UGxhY2VtZW50KHhQb3MsIGdldExlbmd0aCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgc2hvd0F2YWlsYWJsZVBvc2l0aW9ucyh5UG9zKTtcbiAgICAgICAgICAgICAgICBzaG93UGxhY2VtZW50KHlQb3MsIGdldExlbmd0aCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IFxuICAgIH07XG5cbiAgICAvLyBJIGRpc2xpa2UgaGFyZCBjb2RpbmcgdGhpbmdzLCBidXQgSSBuZWVkIHRvIGRvIHRoaXMgZm9yIHRoZSBheGlzdG9nZ2xlIGJ1dHRvbi5cbiAgICAvLyBUaGUgcGxhY2VtZW50IHNpemUgc3RheXMgYXQgZml2ZSB1bmxlc3MgSSBjYW5jZWwgdGhlIGV2ZW50IGxpc3RlbmVycyByZXF1aXJlZFxuICAgIC8vIGZvciB0aGUgYXN5bmMgcGxheWVyIHBpY2tcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICAgICAgICBsZXQgY3VycmVudFBsYWNlbWVudCA9IHBsYXllckJvYXJkLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGxhY2VtZW50ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDUgLSBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGxhY2VtZW50ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDYgLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1BsYWNlbWVudCAocG9zaXRpb25zLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRQb3NpdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50IGJ1dHRvbicpO1xuICAgICAgICBib2FyZFBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBOdW1iZXIocG9zaXRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiKSk7XG4gICAgICAgICAgICBpZiAocG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Bvc3NpYmxlUGxhY2VtZW50KGF4aXMsIGxlbmd0aCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ3VycmVudFBsYWNlbWVudChheGlzLCBsZW5ndGgsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwicG9zc2libGUtcGxhY2VtZW50XCIpfTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQbGFjZW1lbnRCb2FyZCAoKSB7XG4gICAgICAgIGNsZWFyQm9hcmRTZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrRW5lbXksXG4gICAgICAgIHNldHVwQm9hcmQsXG4gICAgICAgIHJlbW92ZVBsYWNlbWVudEJvYXJkLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWksXG4gICAgICAgIGF0dGFja2VkUG9zaXRpb25zXG4gICAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJpbXBvcnQgeyBwb3N0TWVzc2FnZSB9IGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBTaGlwID0gKG5hbWUsIHBvc2l0aW9ucykgPT4ge1xuICAgIGxldCBhbHJlYWR5U3VuayA9IGZhbHNlO1xuICAgIGxldCBoaXRzID0gW107XG4gICAgZnVuY3Rpb24gaGl0IChwb3NpdGlvbikge1xuICAgICAgICBpZiAoIWhpdHMuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9UaGlzIGlzIGZvciBwb3N0aW5nIHRoZSBtZXNzYWdlIHdoZW4gYSBzaGlwIGZpcnN0IHNpbmtzXG4gICAgZnVuY3Rpb24gZmlyc3RUaW1lU3VuayAocGxheWVyKSB7XG4gICAgICAgIGlmIChhbHJlYWR5U3VuayA9PT0gZmFsc2UgJiYgaGl0cy5sZW5ndGggPT09IHBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFscmVhZHlTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKGAkeyBwbGF5ZXIgfSBoYXMgc3VuayB0aGUgb3Bwb25lbnQncyAkeyBuYW1lIH1gKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgYXJndW1lbnQgaXMgdXNlZCB0byBwcmV2ZW50IERPTSBtYW5pcHVsYXRpb24gcmVxdWlyaW5nIGlzU3VuayB0byBjaGFuZ2UgYWxyZWFkeVN1bmtcbiAgICBmdW5jdGlvbiBpc1N1bmsgKGEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaGl0cy5sZW5ndGggPT09IHBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWxyZWFkeVN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGZpcnN0VGltZVN1bmssXG4gICAgICAgIHBvc2l0aW9ucyxcbiAgICB9XG59XG5cbmV4cG9ydCB7U2hpcH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcG9zdE1lc3NhZ2UgfSBmcm9tICcuL0RPTSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVGbG93ICgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICBjb25zdCBwQm9hcmQgPSBwbGF5ZXIucGxheWVyQm9hcmQ7XG4gICAgY29uc3QgY0JvYXJkID0gY29tcHV0ZXIucGxheWVyQm9hcmQ7XG4gICAgY29tcHV0ZXIuc2V0dXBCb2FyZCgpO1xuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYWNlbWVudFwiKTtcbiAgICAvL3dhaXRUZXN0IGlzIHRlbXBvcmFyeSB3aGlsZSBJIHVuZGVyc3RhbmQgYXN5bmNocm9ub3VzIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIHdhaXRUZXN0KHgsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXdhaXQgcGxheWVyLnNldHVwQm9hcmQoKTtcbiAgICBhd2FpdCB3YWl0VGVzdCgxMCwgMTAwMCk7XG4gICAgcGxheWVyLnJlbW92ZVBsYWNlbWVudEJvYXJkKClcbiAgICBjb21wdXRlci5haS5hZGRPcHBvbmVudFNoaXBzKHBCb2FyZCk7XG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIHBCb2FyZC51cGRhdGVCb2FyZERPTShcInBsYXllclwiKTtcbiAgICBjQm9hcmQudXBkYXRlQm9hcmRET00oXCJlbmVteVwiKTtcbiAgICBkbyB7XG4gICAgICAgIGlmICh0dXJuICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoXCJTaG9vdCB5b3VyIHNob3RcIik7XG4gICAgICAgICAgICBjQm9hcmQucmVjZWl2ZUF0dGFjayhhd2FpdCBwbGF5ZXIuYXR0YWNrRW5lbXkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwQm9hcmQucmVjZWl2ZUF0dGFjayhhd2FpdCBjb21wdXRlci5hdHRhY2tFbmVteSgpKTtcbiAgICAgICAgfVxuICAgICAgICBwQm9hcmQudXBkYXRlQm9hcmRET00oXCJwbGF5ZXJcIik7XG4gICAgICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xuICAgICAgICBhd2FpdCB3YWl0VGVzdCgxMCwgMzAwMCk7XG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIHBvc3RpbmcgYSBtZXNzYWdlIGlmIGEgc2hpcCBoYXMgYmVlbiBzdW5rXG4gICAgICAgIGlmIChwQm9hcmQuY2hlY2tGaXJzdFRpbWVTdW5rKFwiQ29tcHV0ZXJcIikgfHwgY0JvYXJkLmNoZWNrRmlyc3RUaW1lU3VuayhcIlBsYXllclwiKSkge1xuICAgICAgICAgICAgYXdhaXQgd2FpdFRlc3QoMTAsIDMwMDApO1xuICAgICAgICB9XG4gICAgICAgIHR1cm4rKztcbiAgICB9XG4gICAgd2hpbGUgKCFwQm9hcmQuY2hlY2tMb3NlQ29uZGl0aW9uKCkgJiYgIWNCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSk7XG4gICAgaWYgKHBCb2FyZC5jaGVja0xvc2VDb25kaXRpb24oKSkge1xuICAgICAgICBwb3N0TWVzc2FnZShcIkNvbXB1dGVyIGhhcyB3b24gdGhlIGJhdHRsZVwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY0JvYXJkLmNoZWNrTG9zZUNvbmRpdGlvbigpKSB7XG4gICAgICAgIHBvc3RNZXNzYWdlKFwiUGxheWVyIGhhcyB3b24gdGhlIGJhdHRsZVwiKTtcbiAgICB9XG4gICAgcEJvYXJkLnVwZGF0ZUJvYXJkRE9NKFwicGxheWVyXCIpO1xuICAgIGNCb2FyZC51cGRhdGVCb2FyZERPTShcImVuZW15XCIpO1xufVxuXG5nYW1lRmxvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9