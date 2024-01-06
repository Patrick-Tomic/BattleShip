"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital@1&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
}
body header {
  position: relative;
  height: 20vh;
  box-shadow: 1px 0px 5px 5px black;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
body header h1 {
  font-size: 60px;
  font-family: "Anton", system-ui;
}
body main {
  height: 83%;
  background-color: #B2BEB5;
  display: flex;
  flex-direction: column;
}
body main .menuBar {
  margin-top: 3vh;
  align-self: center;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  width: 20vw;
}
body main .menuBar .title {
  font-family: "Anton", system-ui;
  font-size: 40px;
}
body main .menuBar .startBtn {
  font-family: "Anton", system-ui;
  cursor: pointer;
  width: 10vw;
  height: 6vh;
  font-size: 35px;
  background-color: #B2BEB5;
  border: none;
}
body main .menuBar .startBtn:hover {
  color: navy;
}
body main .gridContainer {
  display: flex;
  justify-content: space-around;
}
body main .gridContainer .computer {
  display: grid;
  grid-template-columns: repeat(10, 3vw);
  gap: 0;
  width: auto;
}
body main .gridContainer .computer .compCell {
  border: 1px solid black;
  background-color: #6082B6;
  width: 3vw;
  height: 5vh;
}
body main .gridContainer .computer .compCell:hover {
  background-color: yellow;
}
body main .gridContainer .player {
  display: grid;
  grid-template-columns: repeat(10, 3vw);
  gap: 0;
  width: auto;
}
body main .gridContainer .player .playerCell {
  background-color: #6082B6;
  border: 1px solid #000000;
  width: 3vw;
  height: 5vh;
}
body footer {
  box-shadow: 0px 0px 5px 5px;
  border-top: 1px black solid;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
}
body footer h3 {
  margin-top: 5vh;
  font-size: 35px;
  font-family: "Teko", sans-serif;
  width: 20vw;
}
body footer svg:hover {
  transform: scale(1.5);
}
body footer svg {
  cursor: pointer;
  transition: transform 0.5s ease-in-out 0.1s;
  transform: scale(1);
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,YAAA;EACE,UAAA;EACA,SAAA;AAAJ;;AAEA;EAEI,UAAA;EACD,cAAA;EACA,iBAAA;EACF,YAAA;AAAD;AAEA;EAEI,kBAAA;EAED,YAAA;EACC,iCAAA;EACA,YAAA;EACA,aAAA;EACC,uBAAA;EACA,mBAAA;AAFL;AAGI;EACK,eAAA;EACA,+BAAA;AADT;AAKA;EACI,WAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;AAHJ;AAKI;EAMI,eAAA;EACA,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,uBAAA;EACA,WAAA;AATR;AADQ;EACI,+BAAA;EACA,eAAA;AAGZ;AAMQ;EACI,+BAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;AAJZ;AAMQ;EACI,WAAA;AAJZ;AAOI;EACI,aAAA;EACA,6BAAA;AALR;AAMQ;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AAJZ;AAMY;EACI,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AAJhB;AAOY;EACI,wBAAA;AALhB;AAQI;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AANR;AAQQ;EACI,yBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AANZ;AAaA;EAEI,2BAAA;EACA,2BAAA;EACC,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAZL;AAaI;EACI,eAAA;EACA,eAAA;EACA,+BAAA;EACC,WAAA;AAXT;AAcI;EAEE,qBAAA;AAbN;AAgBI;EACI,eAAA;EACC,2CAAA;EACD,mBAAA;AAdR","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital@1&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap\");\nhtml{\n  height: 100%;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    \n    padding: 0;\n   margin: 0 auto;\n   min-height: 100vh;\n height: 100%;\n\nheader{\n    \n    position: relative;\n    \n   height: 20vh;\n    box-shadow: 1px 0px 5px 5px black;\n    height: 10vh;\n    display: flex;\n     justify-content: center;\n     align-items: center;\n    h1{\n         font-size: 60px;\n         font-family: 'Anton', system-ui;\n        \n    }\n}\nmain{\n    height: 83%;\n    background-color: #B2BEB5;\n    display: flex;\n    flex-direction: column;\n    \n    .menuBar{\n       \n        .title{\n            font-family: 'Anton', system-ui;\n            font-size: 40px;\n        }\n        margin-top: 3vh;\n        align-self: center;\n        margin-bottom: 5vh;\n        \n        display: flex;\n        justify-content: center;\n        width: 20vw;\n        .startBtn{\n            font-family: 'Anton', system-ui;\n            cursor: pointer;;\n            width: 10vw;\n            height: 6vh;\n            font-size: 35px;\n            background-color: #B2BEB5;\n            border: none;\n        }\n        .startBtn:hover{\n            color:navy;\n        }\n    }\n    .gridContainer{\n        display: flex;\n        justify-content: space-around;\n        .computer{\n            display: grid;\n            grid-template-columns: repeat(10, 3vw);\n            gap: 0;\n            width: auto;\n        \n            .compCell{        \n                border:1px solid black;\n                background-color: #6082B6;\n                width: 3vw;\n                height: 5vh;\n                \n            }\n            .compCell:hover{\n                background-color: yellow;\n            }\n        }\n    .player{\n        display: grid;\n        grid-template-columns: repeat(10, 3vw);\n        gap: 0;\n        width: auto;\n    \n        .playerCell{        \n            background-color:#6082B6;\n            border:1px solid #000000;\n            width: 3vw;\n            height: 5vh;\n        }\n         \n    }\n    }\n   \n}\nfooter{\n   \n    box-shadow: 0px 0px 5px 5px ;\n    border-top: 1px black solid;\n     height: 7%;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n    h3{\n        margin-top: 5vh;\n        font-size: 35px;\n        font-family: 'Teko', sans-serif;\n         width: 20vw;\n    }\n    \n    svg:hover{\n         \n      transform: scale(1.5);\n    \n    }\n    svg{\n        cursor: pointer;\n         transition: transform .5s ease-in-out .1s;\n        transform: scale(1);  \n      }\n   \n}\n}\n "],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ship_1 = __importDefault(__webpack_require__(/*! ./ship */ "./src/ship.ts"));
class GameBoard {
    constructor() {
        this.missedShot = [];
        this.board = [];
        this.initialize();
        this.ships = [];
    }
    initialize() {
        const board = this.board;
        const missedShot = this.missedShot;
        for (let i = 0; i < 100; i++) {
            board.push('');
            missedShot.push('');
        }
        this.board = board;
        this.missedShot = missedShot;
    }
    createBoat(position, length, direction) {
        if (this.board[position] != '') {
            console.log('position taken');
            return false;
        }
        else {
            switch (length) {
                case 2:
                    this.ships.push(new ship_1.default(length, 'Destroyer'));
                    break;
                case 3:
                    if (this.ships.length) {
                        this.ships.forEach((boat) => {
                            if (boat.name === 'Submarine') {
                                this.ships.push(new ship_1.default(length, 'Cruiser'));
                            }
                        });
                        if (this.ships[this.ships.length - 1].name === 'Cruiser')
                            break;
                    }
                    this.ships.push(new ship_1.default(length, 'Submarine'));
                    break;
                case 4:
                    this.ships.push(new ship_1.default(length, 'Battleship'));
                    break;
                case 5:
                    this.ships.push(new ship_1.default(length, 'Carrier'));
                    break;
                default:
                    console.log('not valid length');
                    return false;
            }
            let height = 0;
            let sub = 1;
            let bool = false;
            if (direction === 'horizontal') {
                // y == 9
                if (position % 10 === 9) {
                    while (height != length) {
                        if (this.board[position - height] != '') {
                            return false;
                        }
                        height++;
                    }
                    height = 0;
                    while (height != length) {
                        this.ships[this.ships.length - 1].positions.push(position - height);
                        this.board[position - height] = 'O';
                        height++;
                    }
                    height = 0;
                    return true;
                }
                //if y == 0
                else if (position % 10 === 0) {
                    while (height != length) {
                        if (this.board[position + height] != '') {
                            return false;
                        }
                        height++;
                    }
                    height = 0;
                    while (height != length) {
                        this.ships[this.ships.length - 1].positions.push(position + height);
                        this.board[position + height] = 'O';
                        height++;
                    }
                    height = 0;
                    return true;
                }
                // for all other occasions but y cant hit 9 or not valid
                else {
                    while (height != length) {
                        if (position + height % 10 === 0) {
                            bool = true;
                        }
                        if (bool === false) {
                            if (this.board[position + height] != '') {
                                return false;
                            }
                        }
                        if (bool === true) {
                            if (this.board[position - sub] != '') {
                                return false;
                            }
                            sub++;
                        }
                        height++;
                    }
                    height = 0;
                    sub = 1;
                    bool = false;
                    while (height != length) {
                        if ((position + height) % 10 === 0) {
                            bool = true;
                        }
                        if (bool === false) {
                            this.ships[this.ships.length - 1].positions.push(position + height);
                            this.board[position + height] = 'O';
                        }
                        else if (bool === true) {
                            this.ships[this.ships.length - 1].positions.push(position - sub);
                            this.board[position - sub] = 'O';
                            sub++;
                        }
                        height++;
                    }
                }
                return true;
            }
            else if (direction === 'vertical') {
                let width = 0;
                let count = 0;
                sub = 1;
                bool = false;
                if (position >= 90 && position <= 99) {
                    while (count != length) {
                        if (this.board[position - width] != '') {
                            return false;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    count = 0;
                    while (count != length) {
                        this.ships[this.ships.length - 1].positions.push(position - width);
                        this.board[position - width] = 'O';
                        width += 10;
                        count++;
                    }
                    return true;
                }
                else if (position <= 9) {
                    count = 0;
                    width = 0;
                    while (count != length) {
                        if (this.board[position + width] != '') {
                            return false;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    count = 0;
                    while (count != length) {
                        this.ships[this.ships.length - 1].positions.push(position + width);
                        this.board[position + width] = 'O';
                        width += 10;
                        count++;
                    }
                    return true;
                }
                else if (position >= 10 && position <= 89) {
                    sub = 10;
                    count = 0;
                    bool = false;
                    while (count != length) {
                        if (position + width >= 100) {
                            bool = true;
                        }
                        if (bool === false && this.board[position + width] != '') {
                            return false;
                        }
                        else if (bool === true) {
                            if (this.board[position - sub] != '') {
                                return false;
                            }
                            sub += 10;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    sub = 10;
                    count = 0;
                    bool = false;
                    while (count != length) {
                        if (position + width >= 100) {
                            bool = true;
                        }
                        if (bool === false) {
                            this.ships[this.ships.length - 1].positions.push(position + width);
                            this.board[position + width] = 'O';
                        }
                        else if (bool === true) {
                            this.ships[this.ships.length - 1].positions.push(position - sub);
                            this.board[position - sub] = 'O';
                            sub += 10;
                        }
                        width += 10;
                        count++;
                    }
                    return true;
                }
            }
        }
    }
    shipsSunk() {
        let isSunk = true;
        const boats = this.ships;
        while (boats.length) {
            if (this.ships[0].Sunk == false) {
                isSunk = false;
                return isSunk;
            }
            boats.shift();
        }
        console.log('Game Over');
        return isSunk;
    }
}
exports["default"] = GameBoard;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./src/user.ts"));
const player = new user_1.default('Player');
const computer = new user_1.default('Computer');
player.createBoat(56, 5, 'horizontal');
player.createBoat(71, 4, 'vertical');
player.createBoat(33, 2, 'horizontal');
player.createBoat(99, 3, 'vertical');
player.createBoat(74, 3, 'horizontal');
for (let i = 0; i < player.board().length; i++) {
    const div = document.createElement('div');
    div.classList.add('playerCell');
    div.id = `${i}`;
    if (player.boardCell(i) != '') {
        div.style.backgroundColor = '#36454F';
    }
    else {
        div.innerHTML = '';
    }
    (_a = document.querySelector('.player')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
}
computer.randomCreateBoats();
for (let i = 0; i < computer.board().length; i++) {
    const div = document.createElement('div');
    div.classList.add('compCell');
    div.id = `${i}`;
    if (computer.boardCell(i) != '') {
        div.classList.add('boat');
    }
    (_b = document.querySelector('.computer')) === null || _b === void 0 ? void 0 : _b.appendChild(div);
}
const menuBar = document.querySelector('.menuBar');
const start = document.querySelector('.startBtn');
start.addEventListener('click', () => {
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.removeChild(start);
    const compCells = document.querySelectorAll('.compCell');
    const title = document.createElement('h2');
    title.classList.add('title');
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.appendChild(title);
    let position;
    compCells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (player.flag === false) {
                console.log(computer.name + ' wins');
                return;
            }
            if (computer.flag === false) {
                console.log(player.name + ' wins');
                return;
            }
            position = parseInt(cell.id);
            computer.recieveAttack(position, cell, computer, player);
        });
    });
});


/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Ship {
    constructor(length, name) {
        this.length = length;
        this.Sunk = false;
        this.hits = 0;
        this.name = name;
        this.positions = [];
    }
    hit() {
        return this.hits++;
    }
    isSunk(user) {
        const title = document.querySelector('.title');
        if (this.hits === this.length) {
            this.Sunk = true;
            title.innerHTML = user.name + " has sunk your " + this.name;
            return true;
        }
        else {
            return false;
        }
    }
}
exports["default"] = Ship;


/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const gameBoard_1 = __importDefault(__webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts"));
class User {
    constructor(name) {
        this.gameBoard = new gameBoard_1.default;
        this.flag = true;
        this.name = name;
    }
    randomCreateBoats(lengthVals = [2, 3, 3, 4, 5]) {
        if (lengthVals.length < 1) {
            return;
        }
        const values = lengthVals;
        const position = Math.floor(Math.random() * 99 + 1);
        const choice = Math.floor((Math.random() * 2) + 1);
        let bool = false;
        if (choice === 1) {
            bool = this.createBoat(position, values[0], 'horizontal');
        }
        else if (choice === 2) {
            bool = this.createBoat(position, values[0], 'vertical');
        }
        if (bool === false) {
            this.randomCreateBoats(values);
        }
        else if (bool === true) {
            values.shift();
            this.randomCreateBoats(values);
        }
    }
    recieveAttack(position, cell, computer, player) {
        const title = document.querySelector('.title');
        if (computer.board()[position] === 'M' || computer.board()[position] === 'H') {
            return;
        }
        else {
            if (this.flag === false) {
                return;
            }
            let count = 0;
            let bool = false;
            while (computer.ships().length != count) {
                const ship = computer.ships()[count];
                const length = ship.positions.length;
                for (let i = 0; i < length; i++) {
                    if (position === ship.positions[i]) {
                        cell.setAttribute('style', 'background-color:#800020;');
                        ship.hit();
                        ship.isSunk(player);
                        computer.board()[position] = 'H';
                        bool = true;
                    }
                }
                if (bool === true) {
                    computer.randomAttack(player, computer);
                    return;
                }
                count++;
            }
            if (bool === false) {
                computer.board()[position] = 'M';
                cell.setAttribute('style', 'background-color:#B69460;');
            }
            computer.randomAttack(player, computer);
        }
    }
    randomAttack(player, computer) {
        const title = document.querySelector('.title');
        if (player.shipsSunk() === false) {
            title.innerHTML = computer.name + ' wins';
            return;
        }
        if (computer.shipsSunk() === false) {
            title.innerHTML = player.name + ' wins';
            return;
        }
        const position = Math.floor((Math.random() * 99) + 1);
        const playerCells = document.querySelectorAll('.playerCell');
        const cell = playerCells[position];
        let count = 0;
        if (player.board()[position] === 'M' || player.board()[position] === 'H') {
            return this.randomAttack(player, computer);
        }
        else {
            while (player.ships().length != count) {
                const ship = player.ships()[count];
                const length = ship.positions.length;
                for (let i = 0; i < length; i++) {
                    if (ship.positions[i] === position) {
                        cell.setAttribute('style', 'background-color:#800020;');
                        ship.hit();
                        ship.isSunk(computer);
                        player.board()[position] = 'H';
                    }
                }
                if (player.board()[position] === 'H') {
                    return;
                }
                count++;
            }
            if (player.board()[position] != 'H') {
                player.board()[position] = 'M';
                cell.setAttribute('style', 'background-color:#B69460;');
            }
        }
        if (player.shipsSunk() === false) {
            console.log(computer.name + ' wins');
            return;
        }
        if (computer.shipsSunk() === false) {
            console.log(player.name + ' wins');
            return;
        }
    }
    createBoat(position, length, direction) {
        return this.gameBoard.createBoat(position, length, direction);
    }
    boardCell(position) {
        return this.gameBoard.board[position];
    }
    board() {
        return this.gameBoard.board;
    }
    ships() {
        return this.gameBoard.ships;
    }
    shipsSunk() {
        const boats = this.ships();
        while (boats.length) {
            if (this.ships()[0].Sunk == false) {
                return;
            }
            boats.shift();
        }
        console.log('Game Over');
        this.flag = false;
        return this.flag;
    }
}
exports["default"] = User;
const computer = new User('Computer');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsU0FBUyxDQUFDLFFBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUNELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztJQUMvQixDQUFDO0lBQ0QsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO0lBQy9CLENBQUM7SUFFRyxTQUFTO1FBRUwsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBRWhDLE9BQU07WUFDVixDQUFDO1lBQ0QsS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNqQixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztDQUNKO0FBNUpMLDBCQTRKSztBQUdMLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9Um9ib3RvOml0YWxAMSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IGhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3gtc2hhZG93OiAxcHggMHB4IDVweCA1cHggYmxhY2s7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5IGhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xufVxuYm9keSBtYWluIHtcbiAgaGVpZ2h0OiA4MyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMkJFQjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5ib2R5IG1haW4gLm1lbnVCYXIge1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwdnc7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnN0YXJ0QnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDZ2aDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJCRUI1O1xuICBib3JkZXI6IG5vbmU7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnN0YXJ0QnRuOmhvdmVyIHtcbiAgY29sb3I6IG5hdnk7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3Z3KTtcbiAgZ2FwOiAwO1xuICB3aWR0aDogYXV0bztcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIgLmNvbXBDZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDgyQjY7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNXZoO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5jb21wdXRlciAuY29tcENlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIgLnBsYXllciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xuICBnYXA6IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5wbGF5ZXIgLnBsYXllckNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MkI2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDV2aDtcbn1cbmJvZHkgZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4O1xuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XG4gIGhlaWdodDogNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSBmb290ZXIgaDMge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMjB2dztcbn1cbmJvZHkgZm9vdGVyIHN2Zzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbmJvZHkgZm9vdGVyIHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQgMC4xcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsWUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0QsY0FBQTtFQUNBLGlCQUFBO0VBQ0YsWUFBQTtBQUFEO0FBRUE7RUFFSSxrQkFBQTtFQUVELFlBQUE7RUFDQyxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtBQUZMO0FBR0k7RUFDSyxlQUFBO0VBQ0EsK0JBQUE7QUFEVDtBQUtBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLSTtFQU1JLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVRSO0FBRFE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFHWjtBQU1RO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSlo7QUFNUTtFQUNJLFdBQUE7QUFKWjtBQU9JO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBTFI7QUFNUTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBSlo7QUFNWTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUpoQjtBQU9ZO0VBQ0ksd0JBQUE7QUFMaEI7QUFRSTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBTlI7QUFRUTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQU5aO0FBYUE7RUFFSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWkw7QUFhSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQyxXQUFBO0FBWFQ7QUFjSTtFQUVFLHFCQUFBO0FBYk47QUFnQkk7RUFDSSxlQUFBO0VBQ0MsMkNBQUE7RUFDRCxtQkFBQTtBQWRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1Sb2JvdG86aXRhbEAxJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuaHRtbHtcXG4gIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBcXG4gICAgcGFkZGluZzogMDtcXG4gICBtYXJnaW46IDAgYXV0bztcXG4gICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gaGVpZ2h0OiAxMDAlO1xcblxcbmhlYWRlcntcXG4gICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDVweCA1cHggYmxhY2s7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaDF7XFxuICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzeXN0ZW0tdWk7XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG5tYWlue1xcbiAgICBoZWlnaHQ6IDgzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyQkVCNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIC5tZW51QmFye1xcbiAgICAgICBcXG4gICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FudG9uJywgc3lzdGVtLXVpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICAuc3RhcnRCdG57XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHN5c3RlbS11aTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJCRUI1O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdGFydEJ0bjpob3ZlcntcXG4gICAgICAgICAgICBjb2xvcjpuYXZ5O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5ncmlkQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgLmNvbXB1dGVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDN2dyk7XFxuICAgICAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgXFxuICAgICAgICAgICAgLmNvbXBDZWxseyAgICAgICAgXFxuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDgyQjY7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNXZoO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmNvbXBDZWxsOmhvdmVye1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAucGxheWVye1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIFxcbiAgICAgICAgLnBsYXllckNlbGx7ICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MDgyQjY7XFxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1dmg7XFxuICAgICAgICB9XFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgfVxcbiAgIFxcbn1cXG5mb290ZXJ7XFxuICAgXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCA7XFxuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG4gICAgIGhlaWdodDogNyU7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIH1cXG4gICAgXFxuICAgIHN2Zzpob3ZlcntcXG4gICAgICAgICBcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIFxcbiAgICB9XFxuICAgIHN2Z3tcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0IC4xcztcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7ICBcXG4gICAgICB9XFxuICAgXFxufVxcbn1cXG4gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IGRpciB9IGZyb20gXCJjb25zb2xlXCJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBib2FyZDogYW55W11cbiAgICBzaGlwczogU2hpcFtdXG4gICAgbWlzc2VkU2hvdCA6IGFueVtdID0gW11cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuXG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5ib2FyZFxuICAgICAgICBjb25zdCBtaXNzZWRTaG90ID0gdGhpcy5taXNzZWRTaG90XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwxMDA7IGkrKykge1xuICAgICAgICAgIFxuICAgICAgICAgIGJvYXJkLnB1c2goJycpXG4gICAgICAgICAgbWlzc2VkU2hvdC5wdXNoKCcnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgICAgICB0aGlzLm1pc3NlZFNob3QgPSBtaXNzZWRTaG90XG4gICAgfVxuICAgIGNyZWF0ZUJvYXQocG9zaXRpb246bnVtYmVyLCBsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnICk6IGFueSB7XG4gICAgICAgIFxuICAgICAgIGlmICh0aGlzLmJvYXJkW3Bvc2l0aW9uXSAhPSAnJykge1xuICAgICAgICBjb25zb2xlLmxvZygncG9zaXRpb24gdGFrZW4nKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCggbGVuZ3RoICkge1xuICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdEZXN0cm95ZXInKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgaWYodGhpcy5zaGlwcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoYm9hdC5uYW1lID09PSAnU3VibWFyaW5lJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoLCAnQ3J1aXNlcicpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5uYW1lID09PSAnQ3J1aXNlcicpIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdTdWJtYXJpbmUnKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCwgJ0JhdHRsZXNoaXAnKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCwgJ0NhcnJpZXInKSlcbiAgICAgICAgICAgICAgICBicmVhayBcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIGxlbmd0aCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhlaWdodCA9IDBcbiAgICAgICAgbGV0IHN1YiA9IDFcbiAgICAgICAgbGV0IGJvb2wgPSBmYWxzZVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgLy8geSA9PSA5XG4gICAgICAgICAgICBpZiAoIHBvc2l0aW9uICUgMTAgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2hpbGUoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLWhlaWdodF0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbi1oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uLWhlaWdodF0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCsrXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgfVxuICAgICAgICAgICAvL2lmIHkgPT0gMFxuICAgICAgICAgICBlbHNlIGlmKCBwb3NpdGlvbiAlIDEwID09PSAwICkge1xuICAgICAgICAgICAgd2hpbGUoIGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlaWdodCA9IDBcbiAgICAgICAgICAgIHdoaWxlIChoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbitoZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdID0gJ08nXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICB9XG4gICAgICAgICAgIC8vIGZvciBhbGwgb3RoZXIgb2NjYXNpb25zIGJ1dCB5IGNhbnQgaGl0IDkgb3Igbm90IHZhbGlkXG4gICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICB3aGlsZShoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYocG9zaXRpb24raGVpZ2h0ICUxMCA9PT0wKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uK2hlaWdodF0gIT0nJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbcG9zaXRpb24tc3ViXSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWIrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgc3ViID0gMVxuICAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICAgIHdoaWxlKGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoKHBvc2l0aW9uK2hlaWdodCkgJSAxMCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uK2hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdID0gJ08nXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXN1YilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbi1zdWJdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlaWdodCsrXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IDBcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgICAgIHN1YiA9IDFcbiAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uID49OTAgJiYgcG9zaXRpb24gPD05OSkge1xuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLXdpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXdpZHRoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uLXdpZHRoXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2UgaWYgKCBwb3NpdGlvbiA8PTkpe1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2lkdGggPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbcG9zaXRpb24rd2lkdGhdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkdGggPSAwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGgtMV0ucG9zaXRpb25zLnB1c2gocG9zaXRpb24rd2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24rd2lkdGhdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9ZWxzZSBpZihwb3NpdGlvbiA+PSAxMCAmJiBwb3NpdGlvbiA8PSA4OSkge1xuICAgICAgICAgICAgICAgIHN1YiA9IDEwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uICsgd2lkdGggPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSAmJiB0aGlzLmJvYXJkW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLXN1Yl0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIHN1YiA9IDEwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uK3dpZHRoID49IDEwMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uK3dpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbit3aWR0aF0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXN1YilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24tc3ViXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cblxufVxuICAgIH1cbiAgICBcbiAgICBzaGlwc1N1bmsoKSB7XG4gICAgICAgIGxldCBpc1N1bmsgPSB0cnVlXG4gICAgICAgIGNvbnN0IGJvYXRzID0gdGhpcy5zaGlwc1xuICAgICAgICB3aGlsZSggYm9hdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwc1swXS5TdW5rID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaXNTdW5rID0gZmFsc2UgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3Vua1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hdHMuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgICAgICByZXR1cm4gaXNTdW5rXG4gICAgfVxufVxuXG5cbiIsImltcG9ydCAgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcblxuXG5jb25zdCBwbGF5ZXIgPSBuZXcgVXNlcignUGxheWVyJylcbmNvbnN0IGNvbXB1dGVyID0gbmV3IFVzZXIoJ0NvbXB1dGVyJylcbiAgICBcbiAgIFxuIHBsYXllci5jcmVhdGVCb2F0KDU2LDUsJ2hvcml6b250YWwnKVxuIHBsYXllci5jcmVhdGVCb2F0KDcxLDQsJ3ZlcnRpY2FsJylcbiBwbGF5ZXIuY3JlYXRlQm9hdCgzMywyLCdob3Jpem9udGFsJylcbiBwbGF5ZXIuY3JlYXRlQm9hdCg5OSwzLCd2ZXJ0aWNhbCcpXG4gcGxheWVyLmNyZWF0ZUJvYXQoNzQsMywnaG9yaXpvbnRhbCcpXG5cbmZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQoKS5sZW5ndGg7IGkrKykgeyAgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyQ2VsbCcpXG4gICAgZGl2LmlkID0gYCR7aX1gXG4gICAgaWYgKCBwbGF5ZXIuYm9hcmRDZWxsKGkpICE9ICcnKSB7XG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM2NDU0RicgICAgICAgICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcicpPy5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmNvbXB1dGVyLnJhbmRvbUNyZWF0ZUJvYXRzKClcbmZvcihsZXQgaSA9IDA7IGkgPCBjb21wdXRlci5ib2FyZCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb21wQ2VsbCcpXG4gICAgICAgIGRpdi5pZCA9IGAke2l9YFxuICAgICAgICAgaWYoY29tcHV0ZXIuYm9hcmRDZWxsKGkpICE9ICcnKSB7IFxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKSAgICAgIFxuICAgICAgICAgICAgIFxuICAgICB9ICAgICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyJyk/LmFwcGVuZENoaWxkKGRpdikgICAgXG59XG5cbiBcbiAgICAgICAgICBcbiBcbiBcbmNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJhcicpXG5jb25zdCBzdGFydDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRCdG4nKVxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudUJhcj8ucmVtb3ZlQ2hpbGQoc3RhcnQpXG4gICAgY29uc3QgY29tcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBDZWxsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgbWVudUJhcj8uYXBwZW5kQ2hpbGQodGl0bGUpXG5sZXQgcG9zaXRpb246YW55IFxuY29tcENlbGxzLmZvckVhY2goKGNlbGwpID0+eyAgICAgICAgXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBpZihwbGF5ZXIuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLm5hbWUgKycgd2lucycpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9IFxuICAgICAgICAgaWYoY29tcHV0ZXIuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5uYW1lICsnIHdpbnMnKVxuICAgICAgICAgXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uID0gcGFyc2VJbnQoY2VsbC5pZClcbiAgICAgICAgY29tcHV0ZXIucmVjaWV2ZUF0dGFjayhwb3NpdGlvbiwgY2VsbCwgY29tcHV0ZXIsIHBsYXllcilcbiAgICB9KVxufSlcbn0pXG5cbiAgICAiLCJpbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBTdW5rOiBib29sZWFuXG4gICAgaGl0czogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgcG9zaXRpb25zOiBhbnlbXVxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgICB0aGlzLlN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLmhpdHMgPSAwXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbXVxuICAgIH1cbiAgICBoaXQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzKytcblxuICAgIH1cblxuICAgIGlzU3Vuayh1c2VyOlVzZXIpIHtcbiAgICAgICAgY29uc3QgdGl0bGU6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLlN1bmsgPSB0cnVlXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUrXCIgaGFzIHN1bmsgeW91ciBcIiArIHRoaXMubmFtZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBnYW1lQm9hcmQgOiBHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZmxhZzogYm9vbGVhbiA9IHRydWVcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiAnUGxheWVyJyB8ICdDb21wdXRlcicpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICAgIFxuICAgIHJhbmRvbUNyZWF0ZUJvYXRzKGxlbmd0aFZhbHM6IG51bWJlcltdID0gWzIsMywzLDQsNV0gKSB7XG4gICAgICAgIGlmKGxlbmd0aFZhbHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVzID0gbGVuZ3RoVmFsc1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5OSsxKVxuICAgICAgICAgY29uc3QgY2hvaWNlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoyKSsxKVxuICAgICAgICAgbGV0IGJvb2w6IGZhbHNlIHwgdHJ1ZSA9IGZhbHNlXG4gICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XG4gICAgICAgICAgICAgYm9vbCA9IHRoaXMuY3JlYXRlQm9hdChwb3NpdGlvbix2YWx1ZXNbMF0sJ2hvcml6b250YWwnKX1cbiAgICAgICAgZWxzZSBpZihjaG9pY2UgPT09IDIpIHtcbiAgICAgICAgICAgICBib29sID0gdGhpcy5jcmVhdGVCb2F0KHBvc2l0aW9uLHZhbHVlc1swXSwndmVydGljYWwnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUNyZWF0ZUJvYXRzKHZhbHVlcylcbiAgICAgICAgfSBlbHNlIGlmKGJvb2wgPT09IHRydWUpe1xuICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZXMuc2hpZnQoKVxuICAgICAgICAgICAgdGhpcy5yYW5kb21DcmVhdGVCb2F0cyh2YWx1ZXMpXG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgcmVjaWV2ZUF0dGFjayhwb3NpdGlvbjpudW1iZXIsIGNlbGw6YW55LCBjb21wdXRlcjpVc2VyLCBwbGF5ZXI6VXNlcikge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGU6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJylcbiAgICAgICAgaWYoY29tcHV0ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdNJyB8fGNvbXB1dGVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnSCcpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHRoaXMuZmxhZyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICAgICAgICBsZXQgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgIHdoaWxlKGNvbXB1dGVyLnNoaXBzKCkubGVuZ3RoICE9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXA6IFNoaXAgPSBjb21wdXRlci5zaGlwcygpW2NvdW50XVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHNoaXAucG9zaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uID09PSBzaGlwLnBvc2l0aW9uc1tpXSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiM4MDAwMjA7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsocGxheWVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmJvYXJkKClbcG9zaXRpb25dID0gJ0gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllcixjb21wdXRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5ib2FyZCgpW3Bvc2l0aW9uXSA9ICdNJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojQjY5NDYwOycpICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIsY29tcHV0ZXIpXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgXG4gICAgfVxuICAgIHJhbmRvbUF0dGFjayhwbGF5ZXI6VXNlciwgY29tcHV0ZXI6VXNlcik6YW55e1xuICAgICAgICBjb25zdCB0aXRsZTphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuICAgICAgICBpZihwbGF5ZXIuc2hpcHNTdW5rKCkgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbXB1dGVyLm5hbWUgKycgd2lucydcbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH0gXG4gICAgICAgICBpZiggY29tcHV0ZXIuc2hpcHNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBwbGF5ZXIubmFtZSArJyB3aW5zJ1xuICAgICAgICAgXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA5OSkgKyAxKVxuICAgICAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJDZWxsJylcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllckNlbGxzW3Bvc2l0aW9uXVxuICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdNJyB8fCBwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdIJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLCBjb21wdXRlcilcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShwbGF5ZXIuc2hpcHMoKS5sZW5ndGggIT0gY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuc2hpcHMoKVtjb3VudF1cbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAucG9zaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihzaGlwLnBvc2l0aW9uc1tpXSA9PT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzgwMDAyMDsnKVxuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaXNTdW5rKGNvbXB1dGVyKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPSAnSCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdIJykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSAhPSAnSCcpe1xuICAgICAgICAgXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPSAnTSdcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiNCNjk0NjA7JylcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIFxuICAgXG4gICAgaWYocGxheWVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5uYW1lICsnIHdpbnMnKVxuICAgICAgIFxuICAgICAgICByZXR1cm4gXG4gICAgfSBcbiAgICAgaWYoIGNvbXB1dGVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIubmFtZSArJyB3aW5zJylcbiAgICAgXG4gICAgICAgcmV0dXJuXG4gICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgY3JlYXRlQm9hdChwb3NpdGlvbjpudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuY3JlYXRlQm9hdChwb3NpdGlvbiwgbGVuZ3RoLCBkaXJlY3Rpb24pXG4gICAgfVxuICAgIGJvYXJkQ2VsbChwb3NpdGlvbjpudW1iZXIpOmFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5ib2FyZFtwb3NpdGlvbl1cbiAgICB9XG4gICAgYm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5ib2FyZFxuICAgIH1cbiAgICBzaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLnNoaXBzXG4gICAgfVxuICAgICBcbiAgICAgICAgc2hpcHNTdW5rKCkge1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gdGhpcy5zaGlwcygpXG4gICAgICAgICAgICB3aGlsZSggYm9hdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMoKVswXS5TdW5rID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXRzLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgICAgICAgICAgdGhpcy5mbGFnID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZsYWdcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuY29uc3QgY29tcHV0ZXIgPSBuZXcgVXNlcignQ29tcHV0ZXInKVxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==