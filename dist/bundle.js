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
  width: 30vw;
}
body main .menuBar .title {
  font-family: "Anton", system-ui;
  font-size: 40px;
}
body main .menuBar .startBtn {
  display: none;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,YAAA;EACE,UAAA;EACA,SAAA;AAAJ;;AAEA;EAEI,UAAA;EACD,cAAA;EACA,iBAAA;EACF,YAAA;AAAD;AAEA;EAEI,kBAAA;EAED,YAAA;EACC,iCAAA;EACA,YAAA;EACA,aAAA;EACC,uBAAA;EACA,mBAAA;AAFL;AAGI;EACK,eAAA;EACA,+BAAA;AADT;AAKA;EACI,WAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;AAHJ;AAKI;EAQI,eAAA;EACA,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,uBAAA;EACA,WAAA;AAXR;AADQ;EACI,+BAAA;EACA,eAAA;AAGZ;AAQQ;EACI,aAAA;EACA,+BAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;AANZ;AAQQ;EACI,WAAA;AANZ;AASI;EACI,aAAA;EACA,6BAAA;AAPR;AAQQ;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AANZ;AAQY;EACI,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AANhB;AASY;EACI,wBAAA;AAPhB;AAUI;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AARR;AAUQ;EACI,yBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AARZ;AAeA;EAEI,2BAAA;EACA,2BAAA;EACC,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAdL;AAeI;EACI,eAAA;EACA,eAAA;EACA,+BAAA;EACC,WAAA;AAbT;AAgBI;EAEE,qBAAA;AAfN;AAkBI;EACI,eAAA;EACC,2CAAA;EACD,mBAAA;AAhBR","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital@1&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap\");\nhtml{\n  height: 100%;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    \n    padding: 0;\n   margin: 0 auto;\n   min-height: 100vh;\n height: 100%;\n\nheader{\n    \n    position: relative;\n    \n   height: 20vh;\n    box-shadow: 1px 0px 5px 5px black;\n    height: 10vh;\n    display: flex;\n     justify-content: center;\n     align-items: center;\n    h1{\n         font-size: 60px;\n         font-family: 'Anton', system-ui;\n        \n    }\n}\nmain{\n    height: 83%;\n    background-color: #B2BEB5;\n    display: flex;\n    flex-direction: column;\n    \n    .menuBar{\n       \n        .title{\n            font-family: 'Anton', system-ui;\n            font-size: 40px;\n           \n      \n        }\n        margin-top: 3vh;\n        align-self: center;\n        margin-bottom: 5vh;\n        \n        display: flex;\n        justify-content: center;\n        width: 30vw;\n        .startBtn{\n            display: none;\n            font-family: 'Anton', system-ui;\n            cursor: pointer;;\n            width: 10vw;\n            height: 6vh;\n            font-size: 35px;\n            background-color: #B2BEB5;\n            border: none;\n        }\n        .startBtn:hover{\n            color:navy;\n        }\n    }\n    .gridContainer{\n        display: flex;\n        justify-content: space-around;\n        .computer{\n            display: grid;\n            grid-template-columns: repeat(10, 3vw);\n            gap: 0;\n            width: auto;\n        \n            .compCell{        \n                border:1px solid black;\n                background-color: #6082B6;\n                width: 3vw;\n                height: 5vh;\n                \n            }\n            .compCell:hover{\n                background-color: yellow;\n            }\n        }\n    .player{\n        display: grid;\n        grid-template-columns: repeat(10, 3vw);\n        gap: 0;\n        width: auto;\n    \n        .playerCell{        \n            background-color:#6082B6;\n            border:1px solid #000000;\n            width: 3vw;\n            height: 5vh;\n        }\n         \n    }\n    }\n   \n}\nfooter{\n   \n    box-shadow: 0px 0px 5px 5px ;\n    border-top: 1px black solid;\n     height: 7%;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n    h3{\n        margin-top: 5vh;\n        font-size: 35px;\n        font-family: 'Teko', sans-serif;\n         width: 20vw;\n    }\n    \n    svg:hover{\n         \n      transform: scale(1.5);\n    \n    }\n    svg{\n        cursor: pointer;\n         transition: transform .5s ease-in-out .1s;\n        transform: scale(1);  \n      }\n   \n}\n}\n "],"sourceRoot":""}]);
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
/*  player.createBoat(56,5,'horizontal')
 player.createBoat(71,4,'vertical')
 player.createBoat(33,2,'horizontal')
 player.createBoat(99,3,'vertical')
 player.createBoat(74,3,'horizontal')
 */
for (let i = 0; i < player.board().length; i++) {
    const div = document.createElement('div');
    div.classList.add('playerCell');
    div.id = `${i}`;
    if (player.boardCell(i) != '') {
        div.setAttribute('style', 'background-color:maroon');
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
let playerCount = 1;
const axis = document.querySelector('.axis');
let direction = axis.id;
axis.addEventListener('click', () => {
    if (axis.id === 'horizontal') {
        axis.id = 'vertical';
        axis.innerHTML = 'Y-Axis';
        direction = axis.id;
        return;
    }
    else if (axis.id === 'vertical') {
        axis.id = 'horizontal';
        axis.innerHTML = 'X-Axis';
        direction = axis.id;
        return;
    }
});
const menuBar = document.querySelector('.menuBar');
const start = document.querySelector('.startBtn');
const playerCells = document.querySelectorAll('.playerCell');
let array = [5, 4, 3, 3, 2];
playerCells.forEach(cell => {
    let Xpositions = []; //horizontal
    let Ypositions = []; //vertical
    let position = parseInt(cell.id);
    let Xcells = [];
    let Ycells = [];
    cell.addEventListener('mouseover', () => {
        if (!array.length) {
            axis.setAttribute('style', 'display:none');
            start.setAttribute('style', 'display:block');
            return;
        }
        if (cell.className === 'playerCell boat') {
            cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
            return;
        }
        if (direction === 'vertical') {
            if (Ypositions.length === 0 || Ypositions.length > array[0]) {
                Ypositions = [];
                placeBoats(cell, Ypositions, position, array[0]);
                Ycells = [];
            }
            for (let i = 0; i < Ypositions.length; i++) {
                const cells = document.getElementById(Ypositions[i]);
                if (cells.className === 'playerCell boat') {
                    const Cell = document.getElementById(Ypositions[0]);
                    Cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
                    return;
                }
            }
            Ypositions.forEach((position) => {
                const cell = document.getElementById(position);
                Ycells.push(cell);
                cell.setAttribute('style', 'background-color:#36454F');
            });
        }
        else if (direction === 'horizontal') {
            if (Xpositions.length === 0 || Xpositions.length > array[0]) {
                Xpositions = [];
                placeBoats(cell, Xpositions, position, array[0]);
                Xcells = [];
            }
            for (let i = 0; i < Xpositions.length; i++) {
                const cell = document.getElementById(Xpositions[i]);
                if (cell.className === 'playerCell boat') {
                    const Cell = document.getElementById(Xpositions[0]);
                    Cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
                    return;
                }
            }
            Xpositions.forEach((position) => {
                const cell = document.getElementById(position);
                Xcells.push(cell);
                cell.setAttribute('style', 'background-color:#36454F');
            });
        }
    });
    cell.addEventListener('mouseleave', () => {
        if (!array.length) {
            return;
        }
        if (cell.className === 'playerCell boat') {
            cell.setAttribute('style', 'background-color:#36454F');
            return;
        }
        if (direction === 'vertical') {
            Ypositions.forEach((position) => {
                const cell = document.getElementById(position);
                if (cell.className === 'playerCell boat') {
                    cell.setAttribute('style', 'background-color:#36454F');
                }
                else {
                    cell.setAttribute('style', 'background-color:#6082B6');
                }
            });
        }
        else if (direction === 'horizontal') {
            Xpositions.forEach((position) => {
                const cell = document.getElementById(position);
                if (cell.className === 'playerCell boat') {
                    cell.setAttribute('style', 'background-color:#36454F');
                }
                else {
                    cell.setAttribute('style', 'background-color:#6082B6');
                }
            });
        }
    });
    cell.addEventListener('click', () => {
        if (!array.length) {
            return;
        }
        if (direction === 'vertical') {
            for (let i = 0; i < Ycells.length; i++) {
                if (Ycells[i].className === 'playerCell boat') {
                    alert('position taken');
                    return;
                }
            }
            Ycells.forEach((cell) => {
                cell.classList.add('boat');
                cell.setAttribute('style', 'background-color:#36454F');
            });
            player.createBoat(Ypositions[0], array[0], 'vertical');
            array.shift();
            return;
        }
        else if (direction === 'horizontal') {
            for (let i = 0; i < Xcells.length; i++) {
                if (Xcells[i].className === 'playerCell boat') {
                    alert('position taken');
                    return;
                }
            }
            Xcells.forEach((cell) => {
                cell.classList.add('boat');
                cell.setAttribute('style', 'background-color:#36454F');
            });
            player.createBoat(Xpositions[0], array[0], 'horizontal');
            array.shift();
            return;
        }
    });
});
start.addEventListener('click', () => {
    const ships = player.ships();
    ships.forEach((ship) => console.log(typeof (ship.positions[0])));
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.removeChild(start);
    const compCells = document.querySelectorAll('.compCell');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = "Begin!";
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.appendChild(title);
    let position;
    compCells.forEach((cell) => {
        cell.addEventListener('click', () => {
            title.innerHTML = '';
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
/* cell.setAttribute('style', 'background-color:#36454F') */
function placeBoats(cell, positions, position, length) {
    let count = 0;
    let sub = 1;
    let bool = false;
    if (direction === 'horizontal') {
        if (position % 10 === 9) {
            while (count != length) {
                if (player.board()[position - count] != '') {
                    return false;
                }
                count++;
            }
            count = 0;
            while (count != length) {
                positions.push(position - count);
                count++;
            }
            return true;
        }
        else if (position % 10 === 0) {
            while (count != length) {
                if (player.board()[position + count] != '') {
                    return false;
                }
                count++;
            }
            count = 0;
            while (count != length) {
                positions.push(position + count);
                count++;
            }
            return true;
        }
        else {
            while (count != length) {
                if (position + count % 10 === 0) {
                    return false;
                    bool = true;
                }
                if (bool === false) {
                    if (player.board()[position + count] != '') {
                        return false;
                    }
                }
                /*  if(bool === true){
                     if(player.board()[position -sub] != ''){
                         return false
                     }
                     sub++
                 } */
                count++;
            }
            count = 0;
            sub = 1;
            bool = false;
            while (count != length) {
                if ((position + count) % 10 === 0) {
                    bool = true;
                }
                if (bool === false) {
                    positions.push(position + count);
                }
                else if (bool === true) {
                    positions.push(position - sub);
                    sub++;
                }
                count++;
            }
            return true;
        }
    }
    else if (direction === 'vertical') {
        count = 0;
        let width = 0;
        sub = 1;
        bool = false;
        if (position >= 90 && position <= 99) {
            while (count != length) {
                if (player.board()[position - width] != '') {
                    return false;
                }
                width += 10;
                count++;
            }
            width = 0;
            count = 0;
            while (count != length) {
                positions.push(position - width);
                width += 10;
                count++;
            }
            return true;
        }
        else if (position <= 9) {
            width = 0;
            count = 0;
            while (count != length) {
                if (player.board()[position + width] != '') {
                    return false;
                }
                width += 10;
                count++;
            }
            width = 0;
            count = 0;
            while (count != length) {
                positions.push(position + width);
                width += 10;
                count++;
            }
            return true;
        }
        else if (position >= 10 && position <= 89) {
            while (count != length) {
                if (position + width >= 100) {
                    bool = true;
                }
                if (bool === false && player.board()[position + width] != '') {
                    return false;
                }
                else if (bool === true) {
                    if (player.board()[position - sub] != '') {
                        return false;
                    }
                    sub += 10;
                }
                width += 10;
                count++;
            }
            count = 0;
            sub = 10;
            width = 0;
            bool = false;
            while (count != length) {
                if (position + width >= 100) {
                    bool = true;
                }
                if (bool === false) {
                    positions.push(position + width);
                }
                else if (bool === true) {
                    positions.push(position - sub);
                    sub += 10;
                }
                width += 10;
                count++;
            }
            return true;
        }
    }
}


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
        this.area = null;
        this.chances = ['left', 'right', 'up', 'down'];
        this.vertical = false;
        this.horizontal = false;
        this.opposite = false;
        this.direction = null;
        this.marker = 0;
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
        console.log(this.chances[0]);
        let position = 0;
        if (this.opposite === false) {
            if (this.horizontal === true) {
                if (this.direction === 'left') {
                    if (this.area % 10 === 0) {
                        position = this.area + 1;
                    }
                    else {
                        position = this.area - 1;
                    }
                }
                else if (this.direction === 'right') {
                    if (this.area % 10 === 9) {
                        position = this.area - 1;
                    }
                    else {
                        position = this.area + 1;
                    }
                }
            }
            else if (this.vertical === true) {
                if (this.direction === 'up') {
                    if (this.area >= 0 && this.area <= 9) {
                        position = this.area + 10;
                    }
                    else {
                        position = this.area - 10;
                    }
                }
                else if (this.direction === 'down') {
                    if (this.area >= 90 && this.area <= 99) {
                        position = this.area - 10;
                    }
                    else {
                        position = this.area + 10;
                    }
                }
            }
            else if (this.area != null) {
                if (this.chances[0] === 'left') {
                    if (this.area % 10 === 0) {
                        position = this.area + 1;
                    }
                    else {
                        position = this.area - 1;
                    }
                }
                else if (this.chances[0] === 'up') {
                    if (this.area >= 0 && this.area <= 9) {
                        position = this.area + 10;
                    }
                    else {
                        position = this.area - 10;
                    }
                }
                else if (this.chances[0] === 'right') {
                    if (this.area % 10 === 9) {
                        position = this.area - 1;
                    }
                    else {
                        position = this.area + 1;
                    }
                }
                else if (this.chances[0] === 'down') {
                    if (this.area >= 90 && this.area <= 99) {
                        position = this.area - 10;
                    }
                    else {
                        position = this.area + 10;
                    }
                }
            }
            else {
                position = Math.floor((Math.random() * 99) + 1);
            }
        }
        else if (this.opposite === true) {
            if (this.horizontal === true) {
                if (this.direction === 'left') {
                    position = this.marker + 1;
                }
                else if (this.direction === 'right') {
                    position = this.marker - 1;
                }
            }
            else if (this.vertical === true) {
                if (this.direction === 'up') {
                    position = this.marker + 10;
                }
                else if (this.direction === 'down') {
                    position = this.marker - 10;
                }
            }
        }
        const playerCells = document.querySelectorAll('.playerCell');
        const cell = playerCells[position];
        let count = 0;
        if (player.board()[position] === 'M' || player.board()[position] === 'H') {
            if ((this.horizontal === true || this.vertical === true) && this.opposite != true) {
                this.opposite = true;
                return this.randomAttack(player, computer);
            }
            else if (this.horizontal === false || this.vertical === false) {
                this.chances.shift();
                return this.randomAttack(player, computer);
            }
        }
        else {
            while (player.ships().length != count) {
                const ship = player.ships()[count];
                const length = ship.positions.length;
                for (let i = 0; i < length; i++) {
                    if (ship.positions[i] === position) {
                        console.log('hit!');
                        cell.setAttribute('style', 'background-color:#800020;');
                        ship.hit();
                        ship.isSunk(computer);
                        if (ship.isSunk(computer) === true) {
                            this.area = null;
                            this.vertical = false;
                            this.horizontal = false;
                            this.opposite = false;
                            this.direction = null;
                            this.chances = ['left', 'up', 'right', 'down'];
                            this.marker = 0;
                            return;
                        }
                        player.board()[position] = 'H';
                    }
                }
                if (player.board()[position] === 'H') {
                    if (this.opposite === true) {
                        this.marker = position;
                        return;
                    }
                    if (this.vertical != true || this.horizontal != true) {
                        if (this.area != null) {
                            if (this.chances[0] === 'left' || this.chances[0] === 'right') {
                                this.horizontal = true;
                                this.direction = this.chances[0];
                            }
                            else if (this.chances[0] === 'up' || this.chances[0] === 'down') {
                                this.vertical = true;
                                this.direction = this.chances[0];
                            }
                            this.area = position;
                            return;
                        }
                    }
                    if (this.area === null) {
                        this.marker = position;
                    }
                    this.area = position;
                    return;
                }
                count++;
            }
            if (player.board()[position] != 'H') {
                player.board()[position] = 'M';
                cell.setAttribute('style', 'background-color:#B69460;');
                if (this.area === null) {
                    return;
                }
                else {
                    if (this.horizontal != true || this.vertical != true) {
                        this.chances.shift();
                        return;
                    }
                    else if (this.horizontal === true || this.vertical === true) {
                        this.opposite = true;
                        return;
                    }
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
        console.log('here');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix3SUFBd0k7QUFDeEksMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsNEhBQTRILHVGQUF1RixPQUFPLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsT0FBTyx1QkFBdUIsb0JBQW9CLHVCQUF1QixnQkFBZ0IsV0FBVywrQkFBK0Isd0JBQXdCLHdDQUF3QyxtQkFBbUIsb0JBQW9CLCtCQUErQiwyQkFBMkIsU0FBUywyQkFBMkIsMkNBQTJDLGlCQUFpQixHQUFHLE9BQU8sa0JBQWtCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHFCQUFxQiwwQkFBMEIsOENBQThDLDhCQUE4QixnQ0FBZ0MsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsa0NBQWtDLGtDQUFrQyxzQkFBc0Isb0JBQW9CLDRCQUE0Qiw4Q0FBOEMsK0JBQStCLDBCQUEwQiwwQkFBMEIsOEJBQThCLHdDQUF3QywyQkFBMkIsV0FBVywwQkFBMEIseUJBQXlCLFdBQVcsT0FBTyxxQkFBcUIsd0JBQXdCLHdDQUF3QyxvQkFBb0IsNEJBQTRCLHFEQUFxRCxxQkFBcUIsMEJBQTBCLDBDQUEwQyx5Q0FBeUMsNENBQTRDLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLDhCQUE4QiwyQ0FBMkMsZUFBZSxXQUFXLGNBQWMsd0JBQXdCLGlEQUFpRCxpQkFBaUIsc0JBQXNCLG9DQUFvQyx1Q0FBdUMsdUNBQXVDLHlCQUF5QiwwQkFBMEIsV0FBVyxrQkFBa0IsT0FBTyxRQUFRLFNBQVMsd0NBQXdDLGtDQUFrQyxrQkFBa0IscUJBQXFCLCtCQUErQiwyQkFBMkIsU0FBUywwQkFBMEIsMEJBQTBCLDBDQUEwQyx1QkFBdUIsT0FBTyxzQkFBc0IseUNBQXlDLGFBQWEsVUFBVSwwQkFBMEIscURBQXFELGdDQUFnQyxTQUFTLFFBQVEsR0FBRyxzQkFBc0I7QUFDcnpIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDckgxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNEk7QUFDNUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlzRjtBQUM5RyxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsbUZBQXlCO0FBQ3pCLE1BQXFCLFNBQVM7SUFJMUI7UUFEQSxlQUFVLEdBQVcsRUFBRTtRQUVuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtJQUVuQixDQUFDO0lBQ0QsVUFBVTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUU1QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNkLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO0lBQ2hDLENBQUM7SUFDRCxVQUFVLENBQUMsUUFBZSxFQUFFLE1BQWMsRUFBRSxTQUFvQztRQUU3RSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixPQUFPLEtBQUs7UUFDYixDQUFDO2FBQ0ksQ0FBQztZQUNMLFFBQVEsTUFBTSxFQUFHLENBQUM7Z0JBQ2QsS0FBSyxDQUFDO29CQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDOUMsTUFBSztnQkFDTCxLQUFLLENBQUM7b0JBQ04sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFLENBQUM7Z0NBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQzs0QkFDaEQsQ0FBQzt3QkFDTCxDQUFDLENBQUM7d0JBRUYsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTOzRCQUFFLE1BQUs7b0JBQ2hFLENBQUM7b0JBQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUM5QyxNQUFLO2dCQUNMLEtBQUssQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQy9DLE1BQUs7Z0JBQ0wsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDNUMsTUFBSztnQkFFVDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO29CQUMvQixPQUFPLEtBQUs7WUFDcEIsQ0FBQztZQUNELElBQUksTUFBTSxHQUFHLENBQUM7WUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ1gsSUFBSSxJQUFJLEdBQUcsS0FBSztZQUNoQixJQUFHLFNBQVMsS0FBSyxZQUFZLEVBQUUsQ0FBQztnQkFDNUIsU0FBUztnQkFDVCxJQUFLLFFBQVEsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBRXZCLE9BQU0sTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUNyQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDOzRCQUVsQyxPQUFPLEtBQUs7d0JBQ2hCLENBQUM7d0JBQ0QsTUFBTSxFQUFFO29CQUNaLENBQUM7b0JBQ0QsTUFBTSxHQUFHLENBQUM7b0JBQ1YsT0FBTSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDO3dCQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO3dCQUNqQyxNQUFNLEVBQUU7b0JBRWhCLENBQUM7b0JBQ0QsTUFBTSxHQUFHLENBQUM7b0JBQ1YsT0FBTyxJQUFJO2dCQUNoQixDQUFDO2dCQUNELFdBQVc7cUJBQ04sSUFBSSxRQUFRLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRyxDQUFDO29CQUMvQixPQUFPLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzs0QkFFcEMsT0FBTyxLQUFLO3dCQUNoQixDQUFDO3dCQUNELE1BQU0sRUFBRTtvQkFDWixDQUFDO29CQUNELE1BQU0sR0FBRyxDQUFDO29CQUNWLE9BQU8sTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQzt3QkFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRzt3QkFDakMsTUFBTSxFQUFHO29CQUNiLENBQUM7b0JBQ0QsTUFBTSxHQUFHLENBQUM7b0JBQ1YsT0FBTyxJQUFJO2dCQUNaLENBQUM7Z0JBQ0Qsd0RBQXdEO3FCQUNwRCxDQUFDO29CQUVILE9BQU0sTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUN0QixJQUFHLFFBQVEsR0FBQyxNQUFNLEdBQUUsRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDOzRCQUMxQixJQUFJLEdBQUcsSUFBSTt3QkFDZixDQUFDO3dCQUNELElBQUcsSUFBSSxLQUFLLEtBQUssRUFBQyxDQUFDOzRCQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQyxJQUFHLEVBQUUsRUFBRSxDQUFDO2dDQUVsQyxPQUFPLEtBQUs7NEJBQ2hCLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQzs0QkFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQ0FFaEMsT0FBTyxLQUFLOzRCQUNoQixDQUFDOzRCQUNELEdBQUcsRUFBRTt3QkFDVCxDQUFDO3dCQUNELE1BQU0sRUFBRTtvQkFDWCxDQUFDO29CQUNELE1BQU0sR0FBRyxDQUFDO29CQUNWLEdBQUcsR0FBRyxDQUFDO29CQUNQLElBQUksR0FBRyxLQUFLO29CQUNaLE9BQU0sTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUV0QixJQUFHLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQzs0QkFDMUIsSUFBSSxHQUFHLElBQUk7d0JBQ2hCLENBQUM7d0JBRUosSUFBRyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7NEJBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDOzRCQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO3dCQUNyQyxDQUFDOzZCQUFLLElBQUcsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQzs0QkFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRzs0QkFDOUIsR0FBRyxFQUFFO3dCQUNULENBQUM7d0JBQ0QsTUFBTSxFQUFFO29CQUNYLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLElBQUk7WUFDZCxDQUFDO2lCQUNJLElBQUcsU0FBUyxLQUFLLFVBQVUsRUFBRSxDQUFDO2dCQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDO2dCQUNiLElBQUksS0FBSyxHQUFHLENBQUM7Z0JBQ2IsR0FBRyxHQUFHLENBQUM7Z0JBQ1AsSUFBSSxHQUFHLEtBQUs7Z0JBRVosSUFBRyxRQUFRLElBQUcsRUFBRSxJQUFJLFFBQVEsSUFBRyxFQUFFLEVBQUUsQ0FBQztvQkFDaEMsT0FBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7d0JBQ3BCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7NEJBRXhDLE9BQU8sS0FBSzt3QkFDYixDQUFDO3dCQUNELEtBQUssSUFBRSxFQUFFO3dCQUNULEtBQUssRUFBRTtvQkFDWCxDQUFDO29CQUNHLEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULE9BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQzt3QkFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRzt3QkFDaEMsS0FBSyxJQUFFLEVBQUU7d0JBQ1QsS0FBSyxFQUFFO29CQUNYLENBQUM7b0JBQ0QsT0FBTyxJQUFJO2dCQUVmLENBQUM7cUJBQ0ksSUFBSyxRQUFRLElBQUcsQ0FBQyxFQUFDLENBQUM7b0JBQ3BCLEtBQUssR0FBRyxDQUFDO29CQUNiLEtBQUssR0FBRyxDQUFDO29CQUNMLE9BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDO3dCQUNwQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDOzRCQUVqQyxPQUFPLEtBQUs7d0JBQ2hCLENBQUM7d0JBQ0QsS0FBSyxJQUFFLEVBQUU7d0JBQ1QsS0FBSyxFQUFFO29CQUNYLENBQUM7b0JBQ0QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsT0FBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHO3dCQUNoQyxLQUFLLElBQUUsRUFBRTt3QkFDVCxLQUFLLEVBQUU7b0JBQ1gsQ0FBQztvQkFDRCxPQUFPLElBQUk7Z0JBQ2YsQ0FBQztxQkFBSyxJQUFHLFFBQVEsSUFBSSxFQUFFLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUN4QyxHQUFHLEdBQUcsRUFBRTtvQkFDUixLQUFLLEdBQUcsQ0FBQztvQkFDVCxJQUFJLEdBQUcsS0FBSztvQkFDWixPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUUsQ0FBQzt3QkFDcEIsSUFBRyxRQUFRLEdBQUcsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDOzRCQUN6QixJQUFJLEdBQUcsSUFBSTt3QkFDZixDQUFDO3dCQUNHLElBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzs0QkFFcEQsT0FBTyxLQUFLO3dCQUNoQixDQUFDOzZCQUFPLElBQUcsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUMzQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDO2dDQUUvQixPQUFPLEtBQUs7NEJBQ2hCLENBQUM7NEJBQ0QsR0FBRyxJQUFFLEVBQUU7d0JBQ1gsQ0FBQzt3QkFDRCxLQUFLLElBQUUsRUFBRTt3QkFDVCxLQUFLLEVBQUU7b0JBQ1gsQ0FBQztvQkFDRCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxHQUFHLEdBQUcsRUFBRTtvQkFDUixLQUFLLEdBQUcsQ0FBQztvQkFDVCxJQUFJLEdBQUcsS0FBSztvQkFDWixPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUUsQ0FBQzt3QkFDcEIsSUFBRyxRQUFRLEdBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixJQUFJLEdBQUcsSUFBSTt3QkFDZixDQUFDO3dCQUNELElBQUcsSUFBSSxLQUFLLEtBQUssRUFBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDOzRCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHO3dCQUVwQyxDQUFDOzZCQUFLLElBQUcsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQzs0QkFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRzs0QkFDOUIsR0FBRyxJQUFFLEVBQUU7d0JBQ1gsQ0FBQzt3QkFDRCxLQUFLLElBQUUsRUFBRTt3QkFDVCxLQUFLLEVBQUU7b0JBQ1gsQ0FBQztvQkFJVCxPQUFPLElBQUk7Z0JBQ2YsQ0FBQztZQUNMLENBQUM7UUFFRCxDQUFDO0lBQ0csQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLE1BQU0sR0FBRyxJQUFJO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sR0FBRyxLQUFLO2dCQUNkLE9BQU8sTUFBTTtZQUNqQixDQUFDO1lBQ0QsS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNqQixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEIsT0FBTyxNQUFNO0lBQ2pCLENBQUM7Q0FDSjtBQTNQRCwrQkEyUEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVBELDREQUFzQjtBQUN0QixtRkFBeUI7QUFHekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksY0FBSSxDQUFDLFVBQVUsQ0FBQztBQUdyQzs7Ozs7R0FLRztBQUNILEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUU7SUFDZixJQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMseUJBQXlCLENBQUM7SUFDeEQsQ0FBQztTQUFNLENBQUM7UUFDSixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDdEIsQ0FBQztJQUNELGNBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDBDQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDdkQsQ0FBQztBQUVELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtBQUM1QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzFDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM3QixHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFO0lBQ2QsSUFBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUVoQyxDQUFDO0lBQ0YsY0FBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsMENBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUN6RCxDQUFDO0FBQ0QsSUFBSSxXQUFXLEdBQUcsQ0FBQztBQUVuQixNQUFNLElBQUksR0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUVoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRTtBQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRTtJQUMvQixJQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFFbkIsT0FBTTtJQUNWLENBQUM7U0FBTSxJQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFFbkIsT0FBTTtJQUNWLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixNQUFNLE9BQU8sR0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUV0RCxNQUFNLEtBQUssR0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNyRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0FBQzVELElBQUksS0FBSyxHQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUMzQixXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRXZCLElBQUksVUFBVSxHQUFPLEVBQUUsRUFBQyxZQUFZO0lBQ3BDLElBQUksVUFBVSxHQUFPLEVBQUUsRUFBQyxVQUFVO0lBQ2xDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hDLElBQUksTUFBTSxHQUFPLEVBQUU7SUFDbkIsSUFBSSxNQUFNLEdBQVEsRUFBRTtJQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFDLEdBQUUsRUFBRTtRQUNsQyxJQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDO1lBRWIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsY0FBYyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUM1QyxPQUFNO1FBQ1YsQ0FBQztRQUVELElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsRUFBQyxDQUFDO1lBRXJDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLDZDQUE2QyxDQUFDO1lBQ3hFLE9BQU07UUFDbEIsQ0FBQztRQUNPLElBQUcsU0FBUyxLQUFLLFVBQVUsRUFBQyxDQUFDO1lBQ3pCLElBQUcsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFFeEQsVUFBVSxHQUFHLEVBQUU7Z0JBQ2YsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxHQUFHLEVBQUU7WUFFZixDQUFDO1lBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDdkMsTUFBTSxLQUFLLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUcsS0FBSyxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsRUFBQyxDQUFDO29CQUUxQyxNQUFNLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsNkNBQTZDLENBQUM7b0JBQ3hFLE9BQU07Z0JBQ04sQ0FBQztZQUNMLENBQUM7WUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO2dCQUNwQyxNQUFNLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDO1lBQzFELENBQUMsQ0FBQztRQUdOLENBQUM7YUFDSSxJQUFHLFNBQVMsS0FBSyxZQUFZLEVBQUMsQ0FBQztZQUNsQyxJQUFHLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7Z0JBQzFELFVBQVUsR0FBRyxFQUFFO2dCQUNmLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sR0FBRyxFQUFFO1lBQ2QsQ0FBQztZQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sSUFBSSxHQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssaUJBQWlCLEVBQUMsQ0FBQztvQkFFekMsTUFBTSxJQUFJLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLDZDQUE2QyxDQUFDO29CQUN4RSxPQUFNO2dCQUNOLENBQUM7WUFDTCxDQUFDO1lBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtnQkFDcEMsTUFBTSxJQUFJLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQztZQUMxRCxDQUFDLENBQUM7UUFFTCxDQUFDO0lBRUYsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBQyxHQUFHLEVBQUU7UUFDcEMsSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNkLE9BQU07UUFDVixDQUFDO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFpQixFQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUM7WUFDdEQsT0FBTTtRQUNWLENBQUM7UUFDRCxJQUFHLFNBQVMsS0FBSyxVQUFVLEVBQUMsQ0FBQztZQUN6QixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO2dCQUNwQyxNQUFNLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDbEQsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFpQixFQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDO2dCQUN0RCxDQUFDO3FCQUFLLENBQUM7b0JBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3RELENBQUM7WUFDTCxDQUFDLENBQUM7UUFDTixDQUFDO2FBQ0ksSUFBRyxTQUFTLEtBQUssWUFBWSxFQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtnQkFDcEMsTUFBTSxJQUFJLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsRUFBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQztnQkFDdEQsQ0FBQztxQkFBSyxDQUFDO29CQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDO2dCQUN0RCxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFO1FBQy9CLElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUM7WUFDZCxPQUFNO1FBQ1YsQ0FBQztRQUNGLElBQUcsU0FBUyxLQUFLLFVBQVUsRUFBQyxDQUFDO1lBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ25DLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsRUFBQyxDQUFDO29CQUMxQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3ZCLE9BQU07Z0JBQ1YsQ0FBQztZQUNMLENBQUM7WUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUM7WUFDMUQsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUN0RCxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTTtRQUNWLENBQUM7YUFBSyxJQUFHLFNBQVMsS0FBSyxZQUFZLEVBQUMsQ0FBQztZQUVqQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUVuQyxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssaUJBQWlCLEVBQUMsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO29CQUN2QixPQUFNO2dCQUNWLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVEsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDO1lBQzFELENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUM7WUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU07UUFFZCxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBT0YsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUMzQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM1QixLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVE7SUFDMUIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDL0IsSUFBSSxRQUFZO0lBQ2hCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRTtZQUMvQixLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUU7WUFDcEIsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUUsT0FBTyxDQUFDO2dCQUVuQyxPQUFNO1lBQ1YsQ0FBQztZQUNBLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLE9BQU8sQ0FBQztnQkFFbEMsT0FBTTtZQUNULENBQUM7WUFDRCxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFDNUQsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsNERBQTREO0FBQzVELFNBQVMsVUFBVSxDQUFDLElBQVEsRUFBRSxTQUFlLEVBQUUsUUFBWSxFQUFFLE1BQWE7SUFFdEUsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNiLElBQUksR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJLElBQUksR0FBRyxLQUFLO0lBQ2hCLElBQUcsU0FBUyxLQUFLLFlBQVksRUFBRSxDQUFDO1FBQzVCLElBQUcsUUFBUSxHQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUVuQixPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDbkIsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBRSxJQUFJLEVBQUUsRUFBQyxDQUFDO29CQUMxQyxPQUFPLEtBQUs7Z0JBQ2QsQ0FBQztnQkFDRCxLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsS0FBSyxHQUFHLENBQUM7WUFDVCxPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2dCQUM5QixLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsT0FBTyxJQUFJO1FBQ2YsQ0FBQzthQUNJLElBQUcsUUFBUSxHQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUN4QixPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDbkIsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDO29CQUNyQyxPQUFPLEtBQUs7Z0JBQ2hCLENBQUM7Z0JBQ0QsS0FBSyxFQUFFO1lBQ1gsQ0FBQztZQUNELEtBQUssR0FBRyxDQUFDO1lBQ1QsT0FBTSxLQUFLLElBQUksTUFBTSxFQUFDLENBQUM7Z0JBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztnQkFDOUIsS0FBSyxFQUFFO1lBQ1gsQ0FBQztZQUNELE9BQU8sSUFBSTtRQUNmLENBQUM7YUFBSSxDQUFDO1lBQ0YsT0FBTSxLQUFLLElBQUksTUFBTSxFQUFDLENBQUM7Z0JBQ25CLElBQUcsUUFBUSxHQUFDLEtBQUssR0FBRSxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7b0JBRXpCLE9BQU8sS0FBSztvQkFDWixJQUFJLEdBQUcsSUFBSTtnQkFDZixDQUFDO2dCQUNELElBQUcsSUFBSSxLQUFLLEtBQUssRUFBQyxDQUFDO29CQUNmLElBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQzt3QkFDckMsT0FBTyxLQUFLO29CQUNoQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0Y7Ozs7O3FCQUtLO2dCQUNKLEtBQUssRUFBRTtZQUNYLENBQUM7WUFDRCxLQUFLLEdBQUcsQ0FBQztZQUNULEdBQUcsR0FBRyxDQUFDO1lBQ1AsSUFBSSxHQUFHLEtBQUs7WUFDWixPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDbkIsSUFBRyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7b0JBQzVCLElBQUksR0FBRyxJQUFJO2dCQUNmLENBQUM7Z0JBQ0QsSUFBRyxJQUFJLEtBQUssS0FBSyxFQUFDLENBQUM7b0JBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2dCQUNsQyxDQUFDO3FCQUFNLElBQUcsSUFBSSxLQUFLLElBQUksRUFBQyxDQUFDO29CQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUM7b0JBQzVCLEdBQUcsRUFBRTtnQkFDVCxDQUFDO2dCQUNELEtBQUssRUFBRTtZQUNYLENBQUM7WUFDRCxPQUFPLElBQUk7UUFDZixDQUFDO0lBQ0wsQ0FBQztTQUFNLElBQUcsU0FBUyxLQUFLLFVBQVUsRUFBQyxDQUFDO1FBRWhDLEtBQUssR0FBRyxDQUFDO1FBQ1QsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUNiLEdBQUcsR0FBRyxDQUFDO1FBQ1AsSUFBSSxHQUFHLEtBQUs7UUFDWixJQUFHLFFBQVEsSUFBSSxFQUFFLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBQyxDQUFDO1lBQ2pDLE9BQU0sS0FBSyxJQUFJLE1BQU0sRUFBQyxDQUFDO2dCQUNuQixJQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7b0JBQ3JDLE9BQU8sS0FBSztnQkFDaEIsQ0FBQztnQkFDRCxLQUFLLElBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULE9BQU0sS0FBSyxJQUFHLE1BQU0sRUFBQyxDQUFDO2dCQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7Z0JBQzlCLEtBQUssSUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRTtZQUNYLENBQUM7WUFDRCxPQUFPLElBQUk7UUFDZixDQUFDO2FBQ0ksSUFBRyxRQUFRLElBQUksQ0FBQyxFQUFDLENBQUM7WUFDbkIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULE9BQU0sS0FBSyxJQUFJLE1BQU0sRUFBQyxDQUFDO2dCQUNuQixJQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7b0JBQ3JDLE9BQU8sS0FBSztnQkFDaEIsQ0FBQztnQkFDRCxLQUFLLElBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULE9BQU0sS0FBSyxJQUFJLE1BQU0sRUFBQyxDQUFDO2dCQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7Z0JBQzlCLEtBQUssSUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRTtZQUNYLENBQUM7WUFDRCxPQUFPLElBQUk7UUFDZixDQUFDO2FBQU0sSUFBRyxRQUFRLElBQUksRUFBRSxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUMsQ0FBQztZQUMxQyxPQUFNLEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQztnQkFDckIsSUFBRyxRQUFRLEdBQUMsS0FBSyxJQUFHLEdBQUcsRUFBQyxDQUFDO29CQUNyQixJQUFJLEdBQUcsSUFBSTtnQkFDZixDQUFDO2dCQUNELElBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDO29CQUN2RCxPQUFPLEtBQUs7Z0JBQ2hCLENBQUM7cUJBQU0sSUFBRyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQUM7b0JBQ3JCLElBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQzt3QkFDdkMsT0FBTyxLQUFLO29CQUNoQixDQUFDO29CQUNMLEdBQUcsSUFBRSxFQUFFO2dCQUNQLENBQUM7Z0JBQ0QsS0FBSyxJQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFO1lBQ1AsQ0FBQztZQUNELEtBQUssR0FBRyxDQUFDO1lBQ1QsR0FBRyxHQUFHLEVBQUU7WUFDUixLQUFLLEdBQUcsQ0FBQztZQUNULElBQUksR0FBRyxLQUFLO1lBQ1osT0FBTSxLQUFLLElBQUksTUFBTSxFQUFDLENBQUM7Z0JBQ25CLElBQUcsUUFBUSxHQUFDLEtBQUssSUFBRyxHQUFHLEVBQUMsQ0FBQztvQkFDckIsSUFBSSxHQUFHLElBQUk7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFHLElBQUksS0FBSyxLQUFLLEVBQUMsQ0FBQztvQkFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7cUJBQU0sSUFBRyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQUM7b0JBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQztvQkFDNUIsR0FBRyxJQUFFLEVBQUU7Z0JBQ1gsQ0FBQztnQkFDRCxLQUFLLElBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsT0FBTyxJQUFJO1FBQ1gsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOVhELE1BQXFCLElBQUk7SUFNckIsWUFBWSxNQUFjLEVBQUUsSUFBVztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDdkIsQ0FBQztJQUNELEdBQUc7UUFFQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFFdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFTO1FBQ1osTUFBTSxLQUFLLEdBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDaEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ3pELE9BQU8sSUFBSTtRQUNmLENBQUM7YUFBTSxDQUFDO1lBQ0osT0FBTyxLQUFLO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUE5QkQsMEJBOEJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JELGtHQUFvQztBQUVwQyxNQUFxQixJQUFJO0lBV3JCLFlBQVksSUFBMkI7UUFWdkMsY0FBUyxHQUFlLElBQUksbUJBQVM7UUFFckMsU0FBSSxHQUFZLElBQUk7UUFDcEIsU0FBSSxHQUFPLElBQUk7UUFDZixZQUFPLEdBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7UUFDcEQsYUFBUSxHQUFZLEtBQUs7UUFDekIsZUFBVSxHQUFZLEtBQUs7UUFDM0IsYUFBUSxHQUFXLEtBQUs7UUFDeEIsY0FBUyxHQUFPLElBQUk7UUFDcEIsV0FBTSxHQUFVLENBQUM7UUFFYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7SUFDcEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLGFBQXVCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFFdkIsT0FBTTtRQUNWLENBQUM7UUFDRCxNQUFNLE1BQU0sR0FBRyxVQUFVO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLEdBQWlCLEtBQUs7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQztRQUFBLENBQUM7YUFDeEQsSUFBRyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFVLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUcsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQzthQUFNLElBQUcsSUFBSSxLQUFLLElBQUksRUFBQyxDQUFDO1lBRXJCLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYSxDQUFDLFFBQWUsRUFBRSxJQUFRLEVBQUUsUUFBYSxFQUFFLE1BQVc7UUFFL0QsTUFBTSxLQUFLLEdBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDbEQsSUFBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUMsQ0FBQztZQUN4RSxPQUFNO1FBQ1IsQ0FBQzthQUFJLENBQUM7WUFDRixJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFDLENBQUM7Z0JBQ3BCLE9BQU07WUFDVixDQUFDO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUNiLElBQUksSUFBSSxHQUFHLEtBQUs7WUFDYixPQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sSUFBSSxHQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQzFDLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDeEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM1QixJQUFHLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDO3dCQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUNuQixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRzt3QkFDaEMsSUFBSSxHQUFHLElBQUk7b0JBQ2IsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUcsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUVmLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQztvQkFDckMsT0FBTTtnQkFDWCxDQUFDO2dCQUNELEtBQUssRUFBRTtZQUNYLENBQUM7WUFDRCxJQUFHLElBQUksS0FBSyxLQUFLLEVBQUMsQ0FBQztnQkFFZCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztnQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUM7WUFDeEQsQ0FBQztZQUVELFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQztRQUMxRCxDQUFDO0lBQ0wsQ0FBQztJQUNELFlBQVksQ0FBQyxNQUFXLEVBQUUsUUFBYTtRQUVuQyxNQUFNLEtBQUssR0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUU5QixLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUUsT0FBTztZQUV4QyxPQUFNO1FBQ1YsQ0FBQztRQUNBLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxPQUFPO1lBRXZDLE9BQU07UUFDVCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksUUFBUSxHQUFHLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBQyxDQUFDO1lBQ3ZCLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUMsQ0FBQztnQkFDOUIsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBQyxDQUFDO29CQUUxQixJQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsRUFBRSxLQUFJLENBQUMsRUFBQyxDQUFDO3dCQUNuQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO29CQUMxQixDQUFDO3lCQUFJLENBQUM7d0JBQ04sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztvQkFDdEIsQ0FBQztnQkFDTCxDQUFDO3FCQUFNLElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSSxPQUFPLEVBQUMsQ0FBQztvQkFFakMsSUFBRyxJQUFJLENBQUMsSUFBSSxHQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQzt3QkFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztvQkFDMUIsQ0FBQzt5QkFBSyxDQUFDO3dCQUNQLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUM7b0JBQUEsQ0FBQztnQkFDNUIsQ0FBQztZQUNMLENBQUM7aUJBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQyxDQUFDO2dCQUM3QixJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFDLENBQUM7b0JBRXhCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUMsQ0FBQzt3QkFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsRUFBRTtvQkFDNUIsQ0FBQzt5QkFBSSxDQUFDO3dCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUU7b0JBQUEsQ0FBQztnQkFDNUIsQ0FBQztxQkFBTSxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFDLENBQUM7b0JBRWpDLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUMsQ0FBQzt3QkFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsRUFBRTtvQkFDNUIsQ0FBQzt5QkFBSSxDQUFDO3dCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFFLEVBQUU7b0JBQUEsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7aUJBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN6QixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFDLENBQUM7b0JBQzNCLElBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxFQUFFLEtBQUksQ0FBQyxFQUFDLENBQUM7d0JBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7b0JBQzFCLENBQUM7eUJBQUksQ0FBQzt3QkFDTixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO29CQUN0QixDQUFDO2dCQUNMLENBQUM7cUJBQUssSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBQyxDQUFDO29CQUMvQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLENBQUM7d0JBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFFLEVBQUU7b0JBQzVCLENBQUM7eUJBQUksQ0FBQzt3QkFDTixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFO29CQUFBLENBQUM7Z0JBQzVCLENBQUM7cUJBQUssSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBQyxDQUFDO29CQUNsQyxJQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDO3dCQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO29CQUMxQixDQUFDO3lCQUFLLENBQUM7d0JBQ1AsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQztvQkFBQSxDQUFDO2dCQUM1QixDQUFDO3FCQUFNLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxNQUFNLEVBQUMsQ0FBQztvQkFDakMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBQyxDQUFDO3dCQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxFQUFFO29CQUM1QixDQUFDO3lCQUFJLENBQUM7d0JBQ04sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsRUFBRTtvQkFBQSxDQUFDO2dCQUM3QixDQUFDO1lBQ0wsQ0FBQztpQkFDQSxDQUFDO2dCQUNGLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVwRCxDQUFDO1FBQUMsQ0FBQzthQUFLLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUMsQ0FBQztZQUNsQyxJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFDLENBQUM7Z0JBQ3pCLElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUMsQ0FBQztvQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQztxQkFBSyxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFDLENBQUM7b0JBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFFLENBQUM7Z0JBQzdCLENBQUM7WUFDTCxDQUFDO2lCQUFNLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUMsQ0FBQztnQkFDOUIsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBQyxDQUFDO29CQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFO2dCQUMvQixDQUFDO3FCQUFNLElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUMsQ0FBQztvQkFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtnQkFDL0IsQ0FBQztZQUNMLENBQUM7UUFDQSxDQUFDO1FBRUcsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUU3RCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksS0FBSyxHQUFHLENBQUM7UUFDYixJQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3pFLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxRQUFRLENBQUM7WUFDN0MsQ0FBQztpQkFBTSxJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUM5QyxDQUFDO1FBQ0YsQ0FBQzthQUFNLENBQUM7WUFDUCxPQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDcEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO29CQUM1QixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7d0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQzt3QkFDdkQsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDckIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBQyxDQUFDOzRCQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7NEJBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSzs0QkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLOzRCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7NEJBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTs0QkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs0QkFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUNmLE9BQU07d0JBQ1YsQ0FBQzt3QkFDRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRztvQkFDbEMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFDLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUTt3QkFDdEIsT0FBTTtvQkFDVixDQUFDO29CQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDbEQsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDOzRCQUNuQixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFDLENBQUM7Z0NBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTtnQ0FDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQztpQ0FBTSxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFDLENBQUM7Z0NBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQ0FDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzs0QkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVE7NEJBQ3BCLE9BQU07d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRO29CQUMxQixDQUFDO29CQUNHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUTtvQkFDcEIsT0FBTTtnQkFDbEIsQ0FBQztnQkFDRCxLQUFLLEVBQUU7WUFDWCxDQUFDO1lBQ0QsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQztnQkFDdkQsSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQyxDQUFDO29CQUNuQixPQUFNO2dCQUNWLENBQUM7cUJBQUksQ0FBQztvQkFDTixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNwQixPQUFNO29CQUNWLENBQUM7eUJBQU0sSUFBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7d0JBQ3BCLE9BQU07b0JBQ1YsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVJLElBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUUsT0FBTyxDQUFDO2dCQUVuQyxPQUFNO1lBQ1YsQ0FBQztZQUNBLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUUsT0FBTyxDQUFDO2dCQUVsQyxPQUFNO1lBQ1QsQ0FBQztRQUVELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0csVUFBVSxDQUFDLFFBQWUsRUFBRSxNQUFjLEVBQUUsU0FBb0M7UUFDaEYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsU0FBUyxDQUFDLFFBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUNELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztJQUMvQixDQUFDO0lBQ0QsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO0lBQy9CLENBQUM7SUFFRyxTQUFTO1FBRUwsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBRWhDLE9BQU07WUFDVixDQUFDO1lBQ0QsS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNqQixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztDQUNKO0FBM1JMLDBCQTJSSztBQUdMLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9Um9ib3RvOml0YWxAMSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IGhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3gtc2hhZG93OiAxcHggMHB4IDVweCA1cHggYmxhY2s7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5IGhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xufVxuYm9keSBtYWluIHtcbiAgaGVpZ2h0OiA4MyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMkJFQjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5ib2R5IG1haW4gLm1lbnVCYXIge1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwdnc7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnN0YXJ0QnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDZ2aDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJCRUI1O1xuICBib3JkZXI6IG5vbmU7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgLnN0YXJ0QnRuOmhvdmVyIHtcbiAgY29sb3I6IG5hdnk7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3Z3KTtcbiAgZ2FwOiAwO1xuICB3aWR0aDogYXV0bztcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIgLmNvbXBDZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDgyQjY7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNXZoO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5jb21wdXRlciAuY29tcENlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIgLnBsYXllciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xuICBnYXA6IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5wbGF5ZXIgLnBsYXllckNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MkI2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDV2aDtcbn1cbmJvZHkgZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4O1xuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XG4gIGhlaWdodDogNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSBmb290ZXIgaDMge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMjB2dztcbn1cbmJvZHkgZm9vdGVyIHN2Zzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbmJvZHkgZm9vdGVyIHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQgMC4xcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsWUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0QsY0FBQTtFQUNBLGlCQUFBO0VBQ0YsWUFBQTtBQUFEO0FBRUE7RUFFSSxrQkFBQTtFQUVELFlBQUE7RUFDQyxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtBQUZMO0FBR0k7RUFDSyxlQUFBO0VBQ0EsK0JBQUE7QUFEVDtBQUtBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLSTtFQVFJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVhSO0FBRFE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFHWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU5aO0FBUVE7RUFDSSxXQUFBO0FBTlo7QUFTSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQVBSO0FBUVE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQU5aO0FBUVk7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFOaEI7QUFTWTtFQUNJLHdCQUFBO0FBUGhCO0FBVUk7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQVJSO0FBVVE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFSWjtBQWVBO0VBRUksMkJBQUE7RUFDQSwyQkFBQTtFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWRMO0FBZUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0MsV0FBQTtBQWJUO0FBZ0JJO0VBRUUscUJBQUE7QUFmTjtBQWtCSTtFQUNJLGVBQUE7RUFDQywyQ0FBQTtFQUNELG1CQUFBO0FBaEJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1Sb2JvdG86aXRhbEAxJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuaHRtbHtcXG4gIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBcXG4gICAgcGFkZGluZzogMDtcXG4gICBtYXJnaW46IDAgYXV0bztcXG4gICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gaGVpZ2h0OiAxMDAlO1xcblxcbmhlYWRlcntcXG4gICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDVweCA1cHggYmxhY2s7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaDF7XFxuICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzeXN0ZW0tdWk7XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG5tYWlue1xcbiAgICBoZWlnaHQ6IDgzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyQkVCNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIC5tZW51QmFye1xcbiAgICAgICBcXG4gICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FudG9uJywgc3lzdGVtLXVpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgICAgIFxcbiAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIC5zdGFydEJ0bntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzeXN0ZW0tdWk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOztcXG4gICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IyQkVCNTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuc3RhcnRCdG46aG92ZXJ7XFxuICAgICAgICAgICAgY29sb3I6bmF2eTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZ3JpZENvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIC5jb21wdXRlcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xcbiAgICAgICAgICAgIGdhcDogMDtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIFxcbiAgICAgICAgICAgIC5jb21wQ2VsbHsgICAgICAgIFxcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MkI2O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogM3Z3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDV2aDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jb21wQ2VsbDpob3ZlcntcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgLnBsYXllcntcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3Z3KTtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gICAgICAgIC5wbGF5ZXJDZWxseyAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjA4MkI2O1xcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcXG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIGhlaWdodDogNXZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgIH1cXG4gICBcXG59XFxuZm9vdGVye1xcbiAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxuICAgICBoZWlnaHQ6IDclO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaDN7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICBzdmc6aG92ZXJ7XFxuICAgICAgICAgXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBcXG4gICAgfVxcbiAgICBzdmd7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyAgXFxuICAgICAgfVxcbiAgIFxcbn1cXG59XFxuIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBkaXIgfSBmcm9tIFwiY29uc29sZVwiXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gICAgYm9hcmQ6IGFueVtdXG4gICAgc2hpcHM6IFNoaXBbXVxuICAgIG1pc3NlZFNob3QgOiBhbnlbXSA9IFtdXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXVxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgICAgICB0aGlzLnNoaXBzID0gW11cblxuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuYm9hcmRcbiAgICAgICAgY29uc3QgbWlzc2VkU2hvdCA9IHRoaXMubWlzc2VkU2hvdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8MTAwOyBpKyspIHtcbiAgICAgICAgICBcbiAgICAgICAgICBib2FyZC5wdXNoKCcnKVxuICAgICAgICAgIG1pc3NlZFNob3QucHVzaCgnJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmRcbiAgICAgICAgdGhpcy5taXNzZWRTaG90ID0gbWlzc2VkU2hvdFxuICAgIH1cbiAgICBjcmVhdGVCb2F0KHBvc2l0aW9uOm51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyApOiBhbnkge1xuICAgICAgICBcbiAgICAgICBpZiAodGhpcy5ib2FyZFtwb3NpdGlvbl0gIT0gJycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc2l0aW9uIHRha2VuJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgfVxuICAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2goIGxlbmd0aCApIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoLCAnRGVzdHJveWVyJykpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGJvYXQubmFtZSA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCwgJ0NydWlzZXInKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGgtMV0ubmFtZSA9PT0gJ0NydWlzZXInKSBicmVha1xuICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoLCAnU3VibWFyaW5lJykpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdCYXR0bGVzaGlwJykpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdDYXJyaWVyJykpXG4gICAgICAgICAgICAgICAgYnJlYWsgXG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCBsZW5ndGgnKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCBoZWlnaHQgPSAwXG4gICAgICAgIGxldCBzdWIgPSAxXG4gICAgICAgIGxldCBib29sID0gZmFsc2VcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIC8vIHkgPT0gOVxuICAgICAgICAgICAgaWYgKCBwb3NpdGlvbiAlIDEwID09PSA5KSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdoaWxlKGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtwb3NpdGlvbi1oZWlnaHRdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIHdoaWxlKGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGgtMV0ucG9zaXRpb25zLnB1c2gocG9zaXRpb24taGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbi1oZWlnaHRdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLy9pZiB5ID09IDBcbiAgICAgICAgICAgZWxzZSBpZiggcG9zaXRpb24gJSAxMCA9PT0gMCApIHtcbiAgICAgICAgICAgIHdoaWxlKCBoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcG9zaXRpb24raGVpZ2h0XSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlaWdodCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICB3aGlsZSAoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGgtMV0ucG9zaXRpb25zLnB1c2gocG9zaXRpb24raGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24raGVpZ2h0XSA9ICdPJ1xuICAgICAgICAgICAgICAgIGhlaWdodCArK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVpZ2h0ID0gMFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgfVxuICAgICAgICAgICAvLyBmb3IgYWxsIG90aGVyIG9jY2FzaW9ucyBidXQgeSBjYW50IGhpdCA5IG9yIG5vdCB2YWxpZFxuICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgd2hpbGUoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uK2hlaWdodCAlMTAgPT09MCkge1xuICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdICE9JycpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLXN1Yl0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ViKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0KytcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgaGVpZ2h0ID0gMFxuICAgICAgICAgICAgIHN1YiA9IDFcbiAgICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICAgICB3aGlsZShoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKChwb3NpdGlvbitoZWlnaHQpICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbitoZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24raGVpZ2h0XSA9ICdPJ1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGJvb2wgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24tc3ViXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICBzdWIrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSAwXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgICAgICBzdWIgPSAxXG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZihwb3NpdGlvbiA+PTkwICYmIHBvc2l0aW9uIDw9OTkpIHtcbiAgICAgICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtwb3NpdGlvbi13aWR0aF0gIT0gJycpe1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbi13aWR0aClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbi13aWR0aF0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIGlmICggcG9zaXRpb24gPD05KXtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uK3dpZHRoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uK3dpZHRoXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfWVsc2UgaWYocG9zaXRpb24gPj0gMTAgJiYgcG9zaXRpb24gPD0gODkpIHtcbiAgICAgICAgICAgICAgICBzdWIgPSAxMFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvbiArIHdpZHRoID49IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2UgJiYgdGhpcy5ib2FyZFtwb3NpdGlvbit3aWR0aF0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtwb3NpdGlvbi1zdWJdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yis9MTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgICAgICBzdWIgPSAxMFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvbit3aWR0aCA+PSAxMDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbit3aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24rd2lkdGhdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uLXN1Yl0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yis9MTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbn1cbiAgICB9XG4gICAgXG4gICAgc2hpcHNTdW5rKCkge1xuICAgICAgICBsZXQgaXNTdW5rID0gdHJ1ZVxuICAgICAgICBjb25zdCBib2F0cyA9IHRoaXMuc2hpcHNcbiAgICAgICAgd2hpbGUoIGJvYXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbMF0uU3VuayA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlzU3VuayA9IGZhbHNlICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBpc1N1bmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXRzLnNoaWZ0KClcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICAgICAgcmV0dXJuIGlzU3Vua1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5cblxuY29uc3QgcGxheWVyID0gbmV3IFVzZXIoJ1BsYXllcicpXG5jb25zdCBjb21wdXRlciA9IG5ldyBVc2VyKCdDb21wdXRlcicpXG4gICAgXG4gIFxuLyogIHBsYXllci5jcmVhdGVCb2F0KDU2LDUsJ2hvcml6b250YWwnKVxuIHBsYXllci5jcmVhdGVCb2F0KDcxLDQsJ3ZlcnRpY2FsJylcbiBwbGF5ZXIuY3JlYXRlQm9hdCgzMywyLCdob3Jpem9udGFsJylcbiBwbGF5ZXIuY3JlYXRlQm9hdCg5OSwzLCd2ZXJ0aWNhbCcpXG4gcGxheWVyLmNyZWF0ZUJvYXQoNzQsMywnaG9yaXpvbnRhbCcpIFxuICovXG5mb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJvYXJkKCkubGVuZ3RoOyBpKyspIHsgIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllckNlbGwnKVxuICAgIGRpdi5pZCA9IGAke2l9YFxuICAgIGlmICggcGxheWVyLmJvYXJkQ2VsbChpKSAhPSAnJykge1xuICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOm1hcm9vbicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICcnXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXInKT8uYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5jb21wdXRlci5yYW5kb21DcmVhdGVCb2F0cygpXG5mb3IobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXIuYm9hcmQoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29tcENlbGwnKVxuICAgICAgICBkaXYuaWQgPSBgJHtpfWBcbiAgICAgICAgIGlmKGNvbXB1dGVyLmJvYXJkQ2VsbChpKSAhPSAnJykgeyBcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdib2F0JykgICAgICBcbiAgICAgICAgICBcbiAgICAgfSAgICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlcicpPy5hcHBlbmRDaGlsZChkaXYpICAgIFxufVxubGV0IHBsYXllckNvdW50ID0gMVxuIFxuY29uc3QgYXhpczphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXhpcycpXG5cbmxldCBkaXJlY3Rpb24gPSBheGlzLmlkXG5heGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICBpZihheGlzLmlkID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICBheGlzLmlkID0gJ3ZlcnRpY2FsJ1xuICAgICAgICBheGlzLmlubmVySFRNTCA9ICdZLUF4aXMnXG4gICAgICAgIGRpcmVjdGlvbiA9IGF4aXMuaWRcbiAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZihheGlzLmlkID09PSAndmVydGljYWwnKXtcbiAgICAgICAgYXhpcy5pZCA9ICdob3Jpem9udGFsJ1xuICAgICAgICBheGlzLmlubmVySFRNTCA9ICdYLUF4aXMnXG4gICAgICAgIGRpcmVjdGlvbiA9IGF4aXMuaWRcbiAgICAgIFxuICAgICAgICByZXR1cm5cbiAgICB9XG59KVxuY29uc3QgbWVudUJhcjphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJhcicpXG4gXG5jb25zdCBzdGFydDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRCdG4nKVxuY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQ2VsbCcpXG5sZXQgYXJyYXk6YW55ID0gWzUsNCwzLDMsMl1cbnBsYXllckNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICBcbiAgICBsZXQgWHBvc2l0aW9uczphbnkgPSBbXSAvL2hvcml6b250YWxcbiAgICBsZXQgWXBvc2l0aW9uczphbnkgPSBbXSAvL3ZlcnRpY2FsXG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQoY2VsbC5pZClcbiAgICBsZXQgWGNlbGxzOmFueSA9IFtdXG4gICAgbGV0IFljZWxsczogYW55ID0gW11cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcbiAgICAgICAgaWYoIWFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgYXhpcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJylcbiAgICAgICAgICAgIHN0YXJ0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jaycpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGlmKGNlbGwuY2xhc3NOYW1lID09PSAncGxheWVyQ2VsbCBib2F0Jyl7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOm1hcm9vbjsgY3Vyc29yOm5vdC1hbGxvd2VkJylcbiAgICAgICAgICAgIHJldHVyblxufVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgaWYoWXBvc2l0aW9ucy5sZW5ndGggPT09IDAgfHwgWXBvc2l0aW9ucy5sZW5ndGggPiBhcnJheVswXSl7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFlwb3NpdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgIHBsYWNlQm9hdHMoY2VsbCwgWXBvc2l0aW9ucywgcG9zaXRpb24sIGFycmF5WzBdKSAgXG4gICAgICAgICAgICAgICAgWWNlbGxzID0gW11cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBZcG9zaXRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsczphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChZcG9zaXRpb25zW2ldKVxuICAgICAgICAgICAgICAgIGlmKGNlbGxzLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgQ2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChZcG9zaXRpb25zWzBdKVxuICAgICAgICAgICAgICAgIENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtY29sb3I6bWFyb29uOyBjdXJzb3I6bm90LWFsbG93ZWQnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFlwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb246IHN0cmluZykgPT57XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbilcbiAgICAgICAgICAgICAgICBZY2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiMzNjQ1NEYnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICBpZihYcG9zaXRpb25zLmxlbmd0aCA9PT0gMCB8fCBYcG9zaXRpb25zLmxlbmd0aCA+IGFycmF5WzBdKXtcbiAgICAgICAgICAgIFhwb3NpdGlvbnMgPSBbXVxuICAgICAgICAgICAgcGxhY2VCb2F0cyhjZWxsLCBYcG9zaXRpb25zLCBwb3NpdGlvbiwgYXJyYXlbMF0pIFxuICAgICAgICAgICBYY2VsbHMgPSBbXVxuICAgICAgICB9ICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFhwb3NpdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChYcG9zaXRpb25zW2ldKVxuICAgICAgICAgICAgaWYoY2VsbC5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IENlbGw6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoWHBvc2l0aW9uc1swXSlcbiAgICAgICAgICAgIENlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtY29sb3I6bWFyb29uOyBjdXJzb3I6bm90LWFsbG93ZWQnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFhwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb246IHN0cmluZykgPT57XG4gICAgICAgICAgICBjb25zdCBjZWxsOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvc2l0aW9uKVxuICAgICAgICAgICAgWGNlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiMzNjQ1NEYnKVxuICAgICAgICB9KSAgICBcbiAgICBcbiAgICAgfVxuICAgIFxuICAgIH0pXG4gICAgXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKSA9PntcbiAgICAgICAgaWYoIWFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZihjZWxsLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzM2NDU0RicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgWXBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbjogc3RyaW5nKSA9PntcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIGlmKGNlbGwuY2xhc3NOYW1lID09PSAncGxheWVyQ2VsbCBib2F0Jyl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScgLCdiYWNrZ3JvdW5kLWNvbG9yOiMzNjQ1NEYnKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzYwODJCNicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIFhwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb246IHN0cmluZykgPT57XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbilcbiAgICAgICAgICAgICAgICBpZihjZWxsLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnICwnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiM2MDgyQjYnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgICAgICBpZighYXJyYXkubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKXsgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBZY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKFljZWxsc1tpXS5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3Bvc2l0aW9uIHRha2VuJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICBZY2VsbHMuZm9yRWFjaCgoY2VsbDphbnkpID0+e1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXQnKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHBsYXllci5jcmVhdGVCb2F0KFlwb3NpdGlvbnNbMF0sIGFycmF5WzBdLCAndmVydGljYWwnKVxuICAgICAgICAgICAgICAgIGFycmF5LnNoaWZ0KCkgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgWGNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKFhjZWxsc1tpXS5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwb3NpdGlvbiB0YWtlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICBYY2VsbHMuZm9yRWFjaCgoY2VsbDphbnkpID0+e1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXQnKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHBsYXllci5jcmVhdGVCb2F0KFhwb3NpdGlvbnNbMF0sIGFycmF5WzBdLCAnaG9yaXpvbnRhbCcpICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5zaGlmdCgpICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG59KVxuIFxuICAgICAgICBcbiBcbiBcblxuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllci5zaGlwcygpXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gY29uc29sZS5sb2codHlwZW9mKHNoaXAucG9zaXRpb25zWzBdKSkpXG4gICAgbWVudUJhcj8ucmVtb3ZlQ2hpbGQoc3RhcnQpXG4gICAgY29uc3QgY29tcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBDZWxsJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJCZWdpbiFcIlxuICAgIG1lbnVCYXI/LmFwcGVuZENoaWxkKHRpdGxlKVxubGV0IHBvc2l0aW9uOmFueSBcbmNvbXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PnsgICAgICAgIFxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaWYocGxheWVyLmZsYWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5uYW1lICsnIHdpbnMnKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfSBcbiAgICAgICAgIGlmKGNvbXB1dGVyLmZsYWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIubmFtZSArJyB3aW5zJylcbiAgICAgICAgIFxuICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbiA9IHBhcnNlSW50KGNlbGwuaWQpXG4gICAgICAgIGNvbXB1dGVyLnJlY2lldmVBdHRhY2socG9zaXRpb24sIGNlbGwsIGNvbXB1dGVyLCBwbGF5ZXIpXG4gICAgfSlcbn0pXG59KVxuXG4vKiBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJykgKi9cbmZ1bmN0aW9uIHBsYWNlQm9hdHMoY2VsbDphbnksIHBvc2l0aW9uczphbnlbXSwgcG9zaXRpb246YW55LCBsZW5ndGg6bnVtYmVyKXtcblxuICAgIGxldCBjb3VudCA9IDBcbiAgICBsZXQgc3ViID0gMVxuICAgIGxldCBib29sID0gZmFsc2UgICBcbiAgICBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZihwb3NpdGlvbiAlMTAgPT09IDkpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb24gLSBjb3VudCBdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24tY291bnQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBvc2l0aW9uICUxMCA9PT0gMCl7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK2NvdW50XSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24rY291bnQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uK2NvdW50ICUxMCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbitjb3VudF0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAvKiAgaWYoYm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uIC1zdWJdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgc3ViID0gMVxuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKChwb3NpdGlvbitjb3VudCkgJSAxMCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24rY291bnQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGJvb2wgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgIFxuICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgbGV0IHdpZHRoID0gMFxuICAgICAgICBzdWIgPSAxXG4gICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICBpZihwb3NpdGlvbiA+PSA5MCAmJiBwb3NpdGlvbiA8PSA5OSl7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uLXdpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2hpbGUoY291bnQhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXdpZHRoKVxuICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwb3NpdGlvbiA8PSA5KXtcbiAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbit3aWR0aClcbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYocG9zaXRpb24gPj0gMTAgJiYgcG9zaXRpb24gPD0gODkpe1xuICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICBpZihwb3NpdGlvbit3aWR0aD49IDEwMCl7XG4gICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlICYmIHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgaWYoYm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb24tc3ViXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIHN1Yis9MTBcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGNvdW50ID0gMFxuICAgICAgICBzdWIgPSAxMFxuICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICBpZihwb3NpdGlvbit3aWR0aCA+PTEwMCl7XG4gICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbit3aWR0aClcbiAgICAgICAgICAgIH0gZWxzZSBpZihib29sID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBTdW5rOiBib29sZWFuXG4gICAgaGl0czogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgcG9zaXRpb25zOiBhbnlbXVxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgICB0aGlzLlN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLmhpdHMgPSAwXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbXVxuICAgIH1cbiAgICBoaXQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzKytcblxuICAgIH1cblxuICAgIGlzU3Vuayh1c2VyOlVzZXIpIHtcbiAgICAgICAgY29uc3QgdGl0bGU6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLlN1bmsgPSB0cnVlXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUrXCIgaGFzIHN1bmsgeW91ciBcIiArIHRoaXMubmFtZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBnYW1lQm9hcmQgOiBHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZmxhZzogYm9vbGVhbiA9IHRydWVcbiAgICBhcmVhOmFueSA9IG51bGxcbiAgICBjaGFuY2VzIDogc3RyaW5nW10gPSBbJ2xlZnQnLCAncmlnaHQnLCAndXAnLCAnZG93biddXG4gICAgdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGhvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZVxuICAgIG9wcG9zaXRlOmJvb2xlYW4gPSBmYWxzZVxuICAgIGRpcmVjdGlvbjphbnkgPSBudWxsXG4gICAgbWFya2VyOm51bWJlciA9IDBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiAnUGxheWVyJyB8ICdDb21wdXRlcicpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICAgIFxuICAgIHJhbmRvbUNyZWF0ZUJvYXRzKGxlbmd0aFZhbHM6IG51bWJlcltdID0gWzIsMywzLDQsNV0gKSB7XG4gICAgICAgIGlmKGxlbmd0aFZhbHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVzID0gbGVuZ3RoVmFsc1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5OSsxKVxuICAgICAgICAgY29uc3QgY2hvaWNlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoyKSsxKVxuICAgICAgICAgbGV0IGJvb2w6IGZhbHNlIHwgdHJ1ZSA9IGZhbHNlXG4gICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XG4gICAgICAgICAgICAgYm9vbCA9IHRoaXMuY3JlYXRlQm9hdChwb3NpdGlvbix2YWx1ZXNbMF0sJ2hvcml6b250YWwnKX1cbiAgICAgICAgZWxzZSBpZihjaG9pY2UgPT09IDIpIHtcbiAgICAgICAgICAgICBib29sID0gdGhpcy5jcmVhdGVCb2F0KHBvc2l0aW9uLHZhbHVlc1swXSwndmVydGljYWwnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUNyZWF0ZUJvYXRzKHZhbHVlcylcbiAgICAgICAgfSBlbHNlIGlmKGJvb2wgPT09IHRydWUpe1xuICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZXMuc2hpZnQoKVxuICAgICAgICAgICAgdGhpcy5yYW5kb21DcmVhdGVCb2F0cyh2YWx1ZXMpXG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgcmVjaWV2ZUF0dGFjayhwb3NpdGlvbjpudW1iZXIsIGNlbGw6YW55LCBjb21wdXRlcjpVc2VyLCBwbGF5ZXI6VXNlcikge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGU6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJylcbiAgICAgICAgaWYoY29tcHV0ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdNJyB8fGNvbXB1dGVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnSCcpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKHRoaXMuZmxhZyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICAgICAgICBsZXQgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgIHdoaWxlKGNvbXB1dGVyLnNoaXBzKCkubGVuZ3RoICE9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXA6IFNoaXAgPSBjb21wdXRlci5zaGlwcygpW2NvdW50XVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHNoaXAucG9zaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uID09PSBzaGlwLnBvc2l0aW9uc1tpXSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiM4MDAwMjA7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsocGxheWVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmJvYXJkKClbcG9zaXRpb25dID0gJ0gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllcixjb21wdXRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5ib2FyZCgpW3Bvc2l0aW9uXSA9ICdNJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojQjY5NDYwOycpICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIsY29tcHV0ZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9tQXR0YWNrKHBsYXllcjpVc2VyLCBjb21wdXRlcjpVc2VyKTphbnl7XG4gIFxuICAgICAgICBjb25zdCB0aXRsZTphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuICAgICAgICBpZihwbGF5ZXIuc2hpcHNTdW5rKCkgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbXB1dGVyLm5hbWUgKycgd2lucydcbiAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH0gXG4gICAgICAgICBpZiggY29tcHV0ZXIuc2hpcHNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBwbGF5ZXIubmFtZSArJyB3aW5zJ1xuICAgICAgICAgXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhbmNlc1swXSlcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMFxuICAgICAgICBpZih0aGlzLm9wcG9zaXRlID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgaWYodGhpcy5ob3Jpem9udGFsID09PSB0cnVlKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFyZWEgJTEwID09PTApe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSsxXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWEtMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0ncmlnaHQnKXtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhICUxMCA9PT0gOSl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTFcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWEgKzF9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMudmVydGljYWwgPT09IHRydWUpe1xuICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICd1cCcpe1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhID49IDAgJiYgdGhpcy5hcmVhIDw9IDkpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSArMTBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYS0xMH1cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nKXtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA+PSA5MCAmJiB0aGlzLmFyZWEgPD0gOTkpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSAtMTBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSArMTB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYXJlYSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhICUxMCA9PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWErMVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICd1cCcpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA+PSAwICYmIHRoaXMuYXJlYSA8PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWEgKzEwXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWEtMTB9XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSAlMTAgPT09IDkpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYS0xXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhICsxfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuY2hhbmNlc1swXSA9PT0nZG93bicpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA+PSA5MCAmJiB0aGlzLmFyZWEgPD0gOTkpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSAtMTBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSArMTB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgZWxzZXtcbiAgICAgICAgcG9zaXRpb24gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogOTkpICsgMSkgICAgXG4gICAgIFxuICAgfSB9ZWxzZSBpZih0aGlzLm9wcG9zaXRlID09PSB0cnVlKXtcbiAgICBpZih0aGlzLmhvcml6b250YWwgPT09IHRydWUpe1xuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5tYXJrZXIgKyAxXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5tYXJrZXIgLTFcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLnZlcnRpY2FsID09PSB0cnVlKXtcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICd1cCcpe1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLm1hcmtlciArIDEwXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nKXtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5tYXJrZXIgLSAxMFxuICAgICAgICB9XG4gICAgfVxuICAgICB9IFxuICAgIFxuICAgICAgICAgY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyQ2VsbCcpXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJDZWxsc1twb3NpdGlvbl1cbiAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnTScgfHwgcGxheWVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnSCcpIHtcbiAgICAgICAgaWYoKHRoaXMuaG9yaXpvbnRhbCA9PT0gdHJ1ZSB8fCB0aGlzLnZlcnRpY2FsID09PSB0cnVlKSAmJiB0aGlzLm9wcG9zaXRlICE9IHRydWUgKXtcbiAgICAgICAgICAgIHRoaXMub3Bwb3NpdGUgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLGNvbXB1dGVyKVxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ob3Jpem9udGFsID09PSBmYWxzZSB8fCB0aGlzLnZlcnRpY2FsID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmNoYW5jZXMuc2hpZnQoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKHBsYXllciwgY29tcHV0ZXIpXG4gICAgICAgIH1cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShwbGF5ZXIuc2hpcHMoKS5sZW5ndGggIT0gY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuc2hpcHMoKVtjb3VudF1cbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAucG9zaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihzaGlwLnBvc2l0aW9uc1tpXSA9PT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCEnKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojODAwMDIwOycpXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsoY29tcHV0ZXIpXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXAuaXNTdW5rKGNvbXB1dGVyKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyZWEgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9zaXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuY2VzID0gWydsZWZ0JywgJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXIgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPSAnSCcgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnSCcpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wcG9zaXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXIgPSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy52ZXJ0aWNhbCAhPSB0cnVlIHx8IHRoaXMuaG9yaXpvbnRhbCAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICdsZWZ0JyB8fCB0aGlzLmNoYW5jZXNbMF0gPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY2hhbmNlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuY2hhbmNlc1swXSA9PT0gJ3VwJyB8fCB0aGlzLmNoYW5jZXNbMF0gPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY2hhbmNlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmVhID0gcG9zaXRpb24gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJlYSA9IHBvc2l0aW9uICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY291bnQrK1xuICAgIH1cbiAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gIT0gJ0gnKXsgICAgICAgICBcbiAgICAgICAgcGxheWVyLmJvYXJkKClbcG9zaXRpb25dID0gJ00nXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiNCNjk0NjA7JylcbiAgICAgICAgaWYodGhpcy5hcmVhID09PSBudWxsKXsgICAgICAgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgIGlmKHRoaXMuaG9yaXpvbnRhbCAhPSB0cnVlIHx8IHRoaXMudmVydGljYWwgIT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNoYW5jZXMuc2hpZnQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmhvcml6b250YWwgPT09IHRydWUgfHwgdGhpcy52ZXJ0aWNhbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLm9wcG9zaXRlID0gdHJ1ZSAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxufVxuICBcbiAgICAgaWYocGxheWVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5uYW1lICsnIHdpbnMnKVxuICAgICAgIFxuICAgICAgICByZXR1cm4gXG4gICAgfSBcbiAgICAgaWYoIGNvbXB1dGVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIubmFtZSArJyB3aW5zJylcbiAgICAgXG4gICAgICAgcmV0dXJuICBcbiAgICB9IFxuICAgICAgICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKSBcbn1cbiAgICBjcmVhdGVCb2F0KHBvc2l0aW9uOm51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyApOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5jcmVhdGVCb2F0KHBvc2l0aW9uLCBsZW5ndGgsIGRpcmVjdGlvbilcbiAgICB9XG4gICAgYm9hcmRDZWxsKHBvc2l0aW9uOm51bWJlcik6YW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmJvYXJkW3Bvc2l0aW9uXVxuICAgIH1cbiAgICBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmJvYXJkXG4gICAgfVxuICAgIHNoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuc2hpcHNcbiAgICB9XG4gICAgIFxuICAgICAgICBzaGlwc1N1bmsoKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSB0aGlzLnNoaXBzKClcbiAgICAgICAgICAgIHdoaWxlKCBib2F0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwcygpWzBdLlN1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9hdHMuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmxhZ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG5jb25zdCBjb21wdXRlciA9IG5ldyBVc2VyKCdDb21wdXRlcicpXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9