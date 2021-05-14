/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #bf6a90;\\n  color: #fff;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.header-div {\\n  margin: 0;\\n  padding: 10px 0 30px 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\n.header-title-icon {\\n  display: flex;\\n  align-items: center;\\n  width: 30%;\\n  height: 50px;\\n  margin: 20px 0 25px 0;\\n}\\n\\n.header-title {\\n  font-size: 45px;\\n}\\n\\n.fa-temperature-high {\\n  font-size: 45px;\\n  margin-left: 10px;\\n  opacity: 0.8;\\n}\\n\\n.search-form {\\n  position: relative;\\n}\\n\\n.search-form  input {\\n  border: none;\\n  border-radius: 20px;\\n  padding: 10px 15px;\\n}\\n\\n.fa-arrow-right {\\n  position: absolute;\\n  font-size: 25px;\\n  top: 6px;\\n  right: 10px;\\n  color: #bf6a90;\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: space-evenly;\\n  border: 1px solid red;\\n}\\n\\n.today-div {\\n  border: 1px solid white;\\n}\\n\\n.today-details-div {\\n  display: flex;\\n}\\n\\n.details-div {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.next-days-div {\\n  display: flex;\\n  border: 1px solid white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-js/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app-js/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchWeather = (() => {\n  const findLocation = async (city) => {\n    try {\n      const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});\n      const cityWeather = await response.json();\n      console.log(cityWeather);\n    } catch (error) {\n        alert('Error:', error);\n    }\n  };\n\n  return { findLocation };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\n//# sourceURL=webpack://weather-app-js/./src/js/api.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/js/today.js\");\n/* harmony import */ var _nextDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextDays */ \"./src/js/nextDays.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\nconsole.log('Hello!');\n\n\n\n\n\n\nconst setHeader = () => {\n  const headerContainer = document.createElement('div');\n  headerContainer.classList.add('header-div');\n  const headerTitleIcon = document.createElement('div');\n  headerTitleIcon.classList.add('header-title-icon');\n  const headerTitle = document.createElement('h1');\n  headerTitle.classList.add('header-title');\n  headerTitle.textContent = 'WeatherCast';\n  const headerIcon = document.createElement('i');\n  headerIcon.classList.add('fas');\n  headerIcon.classList.add('fa-temperature-high');\n  const search = document.createElement('form');\n  search.classList.add('search-form');\n  const searchInput = document.createElement('input');\n  searchInput.placeholder = 'Search city or zip code';\n  const searchIcon = document.createElement('i');\n  searchIcon.classList.add('fas');\n  searchIcon.classList.add('fa-arrow-right');\n\n  headerTitleIcon.appendChild(headerTitle);\n  headerTitleIcon.appendChild(headerIcon);\n  search.appendChild(searchInput);\n  search.appendChild(searchIcon);\n  headerContainer.appendChild(headerTitleIcon);\n  headerContainer.appendChild(search);\n\n  return headerContainer;\n};\n\nconst start = () => {\n  const header = document.getElementById('header');\n  header.appendChild(setHeader());\n  const main = document.getElementById('main');\n  main.appendChild((0,_today__WEBPACK_IMPORTED_MODULE_1__.default)());\n  main.appendChild((0,_nextDays__WEBPACK_IMPORTED_MODULE_2__.default)());\n};\n\nstart();\n\n//# sourceURL=webpack://weather-app-js/./src/js/index.js?");

/***/ }),

/***/ "./src/js/nextDays.js":
/*!****************************!*\
  !*** ./src/js/nextDays.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setNextDays = () => {\n  const nextDaysContainer = document.createElement('div');\n  nextDaysContainer.classList.add('next-days-div');\n  const nextOne = document.createElement('div');\n  nextOne.classList.add('day-div');\n  const nextOneDate = document.createElement('h5');\n  nextOneDate.textContent = 'Next day 1';\n  const nextOneTemp = document.createElement('h3');\n  const nextOneIcon = document.createElement('i');\n  const nextTwo = document.createElement('div');\n  nextTwo.classList.add('day-div');\n  const nextTwoDate = document.createElement('h5');\n  nextTwoDate.textContent = 'Next day 2';\n  const nextTwoTemp = document.createElement('h3');\n  const nextTwoIcon = document.createElement('i');\n  const nextThree = document.createElement('div');\n  nextThree.classList.add('day-div');\n  const nextThreeDate = document.createElement('h5');\n  nextThreeDate.textContent = 'Next day 3';\n  const nextThreeTemp = document.createElement('h3');\n  const nextThreeIcon = document.createElement('i');\n\n  nextOne.appendChild(nextOneDate);\n  nextOne.appendChild(nextOneTemp);\n  nextOne.appendChild(nextOneIcon);\n  nextTwo.appendChild(nextTwoDate);\n  nextTwo.appendChild(nextTwoTemp);\n  nextTwo.appendChild(nextTwoIcon);\n  nextThree.appendChild(nextThreeDate);\n  nextThree.appendChild(nextThreeTemp);\n  nextThree.appendChild(nextThreeIcon);\n  nextDaysContainer.appendChild(nextOne);\n  nextDaysContainer.appendChild(nextTwo);\n  nextDaysContainer.appendChild(nextThree);\n\n  return nextDaysContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNextDays);\n\n//# sourceURL=webpack://weather-app-js/./src/js/nextDays.js?");

/***/ }),

/***/ "./src/js/today.js":
/*!*************************!*\
  !*** ./src/js/today.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todaysDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todaysDetails */ \"./src/js/todaysDetails.js\");\n\n\nconst setToday = () => {\n  const todayContainer = document.createElement('div');\n  todayContainer.classList.add('today-div');\n  const cityName = document.createElement('h4');\n  cityName.setAttribute('id', 'city-name-id');\n  const todayText = document.createElement('h5');\n  todayText.textContent = 'Today';\n  const todayHour = document.createElement('p');\n  todayHour.classList.add('today-hour');\n  todayHour.setAttribute('id', 'today-hour-id');\n  const todayTemp = document.createElement('h3');\n  todayTemp.classList.add('today-temp');\n  todayTemp.setAttribute('id', 'today-temp-id');\n  const todayIcon = document.createElement('h3');\n  todayIcon.classList.add('today-icon');\n  todayIcon.setAttribute('id', 'today-icon-id');\n\n  todayContainer.appendChild(cityName);\n  todayContainer.appendChild(todayText);\n  todayContainer.appendChild(todayHour);\n  todayContainer.appendChild(todayTemp);\n  todayContainer.appendChild(todayIcon);\n  todayContainer.appendChild((0,_todaysDetails__WEBPACK_IMPORTED_MODULE_0__.default)());\n  \n  return todayContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToday);\n\n//# sourceURL=webpack://weather-app-js/./src/js/today.js?");

/***/ }),

/***/ "./src/js/todaysDetails.js":
/*!*********************************!*\
  !*** ./src/js/todaysDetails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setTodayDetails = () => {\n  const todayDetailsContainer = document.createElement('div');\n  todayDetailsContainer.classList.add('today-details-div');\n  const morning = document.createElement('div');\n  morning.classList.add('details-div');\n  morning.textContent = 'Morning';\n  const tempMorning = document.createElement('h4');\n  const iconMorning = document.createElement('i');\n  const afternoon = document.createElement('div');\n  afternoon.classList.add('details-div');\n  afternoon.textContent = 'Afternoon';\n  const tempAfternoon = document.createElement('h4');\n  const iconAfternoon = document.createElement('i');\n  const night = document.createElement('div');\n  night.classList.add('details-div');\n  night.textContent = 'Night';\n  const tempNight = document.createElement('h4');\n  const iconNight = document.createElement('i');\n\n  morning.appendChild(tempMorning);\n  morning.appendChild(iconMorning);\n  afternoon.appendChild(tempAfternoon);\n  afternoon.appendChild(iconAfternoon);\n  night.appendChild(tempNight);\n  night.appendChild(iconNight);\n  todayDetailsContainer.appendChild(morning);\n  todayDetailsContainer.appendChild(afternoon);\n  todayDetailsContainer.appendChild(night);\n\n  return todayDetailsContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTodayDetails);\n\n//# sourceURL=webpack://weather-app-js/./src/js/todaysDetails.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;