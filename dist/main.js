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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lexend&family=M+PLUS+Rounded+1c:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: linear-gradient(#5e2578, #783192, #8e649c, #9a7ba5, #b09fb6);\\n  color: #fff;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Lexend', Verdana, Geneva, Tahoma, sans-serif;\\n  height: 100%;\\n}\\n\\n.header-div {\\n  margin: 0;\\n  padding: 10px 0 30px 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\n.header-title-icon {\\n  display: flex;\\n  align-items: center;\\n  width: 30%;\\n  height: 50px;\\n  margin: 20px 0 5px 0;\\n}\\n\\n.header-title {\\n  font-size: 45px;\\n  font-family: 'Fredoka One', Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\n.fa-temperature-high {\\n  font-size: 45px;\\n  margin-left: 10px;\\n  opacity: 0.8;\\n}\\n\\n.main-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.search-form {\\n  position: relative;\\n}\\n\\n.search-form  input {\\n  border: none;\\n  border-radius: 20px;\\n  padding: 10px 15px;\\n}\\n\\n.fa-arrow-right {\\n  position: absolute;\\n  font-size: 25px;\\n  top: 6px;\\n  right: 10px;\\n  color: #783192;\\n  cursor: pointer;\\n}\\n\\n.today-next-days-div {\\n  width: 100%;\\n  margin-top: 40px;\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n.today-div {\\n  box-sizing: border-box;\\n  width: 35%;\\n  display: flex;\\n  padding: 20px;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  border-radius: 15px;\\n  /* border: 0.5px solid #744b87; */\\n  background: rgba(40, 25, 46, 0.1);\\n  position: relative;\\n}\\n\\n#flag-id {\\n  width: 40px;\\n  height: 40px;\\n  position: absolute;\\n  right: 40px;\\n}\\n\\n#today-icon {\\n  position: absolute;\\n  right: 50px;\\n  top: 140px;\\n  font-size: 70px;\\n  opacity: 0.7;\\n}\\n\\n.today-div h3 {\\n  text-transform: capitalize;\\n  font-size: 35px;\\n  margin: 0 0 10px 0;\\n}\\n\\n.today-time-div {\\n  margin: 0;\\n  width: 70%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: baseline;\\n}\\n\\n.today-div h5 {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 30px;\\n}\\n\\n.today-hour {\\n  margin: 0;\\n}\\n\\n.today-temp {\\n  font-size: 45px;\\n  margin: 0 0 10px 0;\\n}\\n\\n.today-atmosphere {\\n  font-size: 25px;\\n  margin: 0 0 5px 0;\\n}\\n\\n.today-wind {\\n  margin: 0 0 20px 0;\\n  font-size: 20px;\\n}\\n\\n.today-details-div {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n\\n.details-div {\\n  width: 25%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border-radius: 15px;\\n  background: rgba(71, 45, 83, 0.3);\\n  padding: 10px 15px;\\n}\\n\\n.next-days-div {\\n  width: 55%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.day-div {\\n  width: 31%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border-radius: 15px;\\n  background: rgba(71, 45, 83, 0.3);\\n  /* padding: 10px 15px; */\\n}\\n\\n.footer-sub {\\n  height: 55px;\\n  margin-top: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-end;\\n}\\n\\n.footer-text-div {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 60%;\\n}\\n\\n.footer-year {\\n  margin-right: 50px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-js/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchWeather = (() => {\n  let data = {\n    dateTime: '',\n    degrees: '',\n    atmosphere: '',\n    wind: ''\n  }\n\n  const findLocation = async (city) => {\n    try {\n      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});\n      const cityWeather = await response.json();\n      console.log(cityWeather);\n      getData(cityWeather);\n      return data;\n    } catch (error) {\n        alert('Error:', error);\n    }\n  };\n\n  const getData = (jsonData) => {\n    const timezone = jsonData.timezone;\n    data.dateTime = timezone;\n    data.degrees = jsonData.main.temp;\n    data.atmosphere = jsonData.weather[0].main;\n    data.wind = jsonData.wind.speed;\n  };\n\n  // const getDateTime = (tz) => {\n  //   console.log('hey');\n  //   const d = new Date((new Date().getTime())(tz)*1000);\n  //   console.log(d);\n  //   d.toISOString();\n  //   console.log(d);\n  //   return d;\n  // };\n\n  return { findLocation };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);\n\n//# sourceURL=webpack://weather-app-js/./src/js/api.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n\n\nconst setHeader = () => {\n  const headerContainer = document.createElement('div');\n  headerContainer.classList.add('header-div');\n  const headerTitleIcon = document.createElement('div');\n  headerTitleIcon.classList.add('header-title-icon');\n  const headerTitle = document.createElement('h1');\n  headerTitle.classList.add('header-title');\n  headerTitle.textContent = 'WeatherCast';\n  const headerIcon = document.createElement('i');\n  headerIcon.classList.add('fas');\n  headerIcon.classList.add('fa-temperature-high');\n  // const search = document.createElement('form');\n  // search.classList.add('search-form');\n  // const searchInput = document.createElement('input');\n  // searchInput.setAttribute('id', 'search-input-id');\n  // searchInput.type = 'text';\n  // searchInput.placeholder = 'Search city or zip code';\n  // const searchIcon = document.createElement('i');\n  // searchIcon.classList.add('fas');\n  // searchIcon.classList.add('fa-arrow-right');\n  // searchIcon.addEventListener('click', function () {\n  //   const city = document.querySelector('#search-input-id').value;\n  //   const fetchData = fetchWeather.findLocation(city);\n  //   document.getElementById('city-name-id').value = city.toUpperCase();\n  //   document.getElementById('today-hour-id').value = fetchData.dateTime;\n  //   document.getElementById('today-temp-id').value = fetchData.degrees;\n  //   document.getElementById('today-atmosphere-id').value = fetchData.atmosphere;\n  //   document.getElementById('today-wind-id').value = fetchData.wind;\n  // });\n\n  headerTitleIcon.appendChild(headerTitle);\n  headerTitleIcon.appendChild(headerIcon);\n  //search.appendChild(searchInput);\n  //search.appendChild(searchIcon);\n  headerContainer.appendChild(headerTitleIcon);\n  //headerContainer.appendChild(search);\n\n  return headerContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setHeader);\n\n//# sourceURL=webpack://weather-app-js/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\n\n\nconst setFooter = () => {\n  const footerSub = document.createElement('div');\n  footerSub.classList.add('footer-sub');\n\n  const footerTextContainer = document.createElement('div');\n  footerTextContainer.classList.add('footer-text-div');\n\n  const myGithub = document.createElement('a');\n  myGithub.classList.add('my-github');\n  myGithub.href = 'https://github.com/Milypm';\n  myGithub.target = '_blank';\n  const mygithubIcon = document.createElement('i');\n  mygithubIcon.classList.add('fab');\n  mygithubIcon.classList.add('fa-github-alt');\n  myGithub.appendChild(mygithubIcon);\n\n  const siteRights = document.createElement('p');\n  siteRights.classList.add('footer-text');\n  siteRights.textContent = 'Built by Mily Puente ';\n  siteRights.appendChild(myGithub);\n\n  const siteYear = document.createElement('p');\n  siteYear.classList.add('footer-year');\n  siteYear.textContent = 'Microverse 2021';\n\n  footerTextContainer.appendChild(siteRights);\n  footerTextContainer.appendChild(siteYear);\n  footerSub.appendChild(footerTextContainer);\n\n  return footerSub;\n};\n\nconst start = () => {\n  const header = document.getElementById('header');\n  header.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.default)());\n  const main = document.getElementById('main');\n  main.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__.default)());\n  const footer = document.getElementById('footer');\n  footer.appendChild(setFooter());\n};\n\nstart();\n\n//# sourceURL=webpack://weather-app-js/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _todaysDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todaysDetails */ \"./src/js/todaysDetails.js\");\n/* harmony import */ var _nextDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextDays */ \"./src/js/nextDays.js\");\n\n\n\n\nconst setMain = () => {\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('main-container');\n\n  const search = document.createElement('form');\n  search.classList.add('search-form');\n  const searchInput = document.createElement('input');\n  searchInput.setAttribute('id', 'search-input-id');\n  searchInput.type = 'text';\n  searchInput.placeholder = 'Search city or zip code';\n  const searchIcon = document.createElement('i');\n  searchIcon.classList.add('fas');\n  searchIcon.classList.add('fa-arrow-right');\n  searchIcon.addEventListener('click', function () {\n    const city = document.querySelector('#search-input-id').value;\n    _api__WEBPACK_IMPORTED_MODULE_0__.default.findLocation(city).then((fetchData) => {\n      console.log(fetchData);\n      document.getElementById('city-name-id').textContent = city;\n      document.getElementById('today-hour-id').textContent = fetchData.dateTime;\n      document.getElementById('today-temp-id').textContent = fetchData.degrees;\n      document.getElementById('today-atmosphere-id').textContent = fetchData.atmosphere;\n      document.getElementById('today-wind-id').textContent = fetchData.wind;\n    });\n    \n  });\n\n  const todayContainer = document.createElement('div');\n  todayContainer.classList.add('today-div');\n  \n  const cityName = document.createElement('h3');\n  cityName.setAttribute('id', 'city-name-id');\n  cityName.textContent = 'Dublin';\n  const flag = document.createElement('img');\n  flag.setAttribute('id', 'flag-id');\n  flag.src = 'https://www.countryflags.io/IE/shiny/64.png';\n  const todayIcon = document.createElement('i');\n  todayIcon.setAttribute('id', 'today-icon');\n  todayIcon.classList.add('fas');\n  todayIcon.classList.add('fa-cloud');\n  const todayTimeContainer = document.createElement('div');\n  todayTimeContainer.classList.add('today-time-div');\n  const todayText = document.createElement('h5');\n  todayText.textContent = 'Today';\n  const todayHour = document.createElement('p');\n  todayHour.classList.add('today-hour');\n  todayHour.setAttribute('id', 'today-hour-id');\n  todayHour.textContent = 'Sat May 15th at 6:30 PM';\n  const todayTemp = document.createElement('h2');\n  todayTemp.classList.add('today-temp');\n  todayTemp.setAttribute('id', 'today-temp-id');\n  todayTemp.textContent = '13°';\n  const atmosphereWind = document.createElement('div');\n  atmosphereWind.classList.add('atmosphere-wind-div');\n  const todayAtmosphere = document.createElement('p');\n  todayAtmosphere.classList.add('today-atmosphere');\n  todayAtmosphere.setAttribute('id', 'today-atmosphere-id');\n  todayAtmosphere.textContent = 'Clouds';\n  const todayWind = document.createElement('p');\n  todayWind.classList.add('today-wind');\n  todayWind.setAttribute('id', 'today-wind-id');\n  todayWind.textContent = 'Wind: 1km/hr';\n\n  const todayNextDays = document.createElement('div');\n  todayNextDays.classList.add('today-next-days-div');\n\n  search.appendChild(searchInput);\n  search.appendChild(searchIcon);\n  todayContainer.appendChild(cityName);\n  todayContainer.appendChild(flag);\n  todayContainer.appendChild(todayIcon);\n  todayTimeContainer.appendChild(todayText);\n  todayTimeContainer.appendChild(todayHour);\n  todayContainer.appendChild(todayTimeContainer);\n  todayContainer.appendChild(todayTemp);\n  atmosphereWind.appendChild(todayAtmosphere);\n  atmosphereWind.appendChild(todayWind);\n  todayContainer.appendChild(atmosphereWind);\n  todayContainer.appendChild((0,_todaysDetails__WEBPACK_IMPORTED_MODULE_1__.default)());\n  todayNextDays.appendChild(todayContainer);\n  todayNextDays.appendChild((0,_nextDays__WEBPACK_IMPORTED_MODULE_2__.default)());\n  mainContainer.appendChild(search);\n  mainContainer.appendChild(todayNextDays);\n\n  return mainContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMain);\n\n//# sourceURL=webpack://weather-app-js/./src/js/main.js?");

/***/ }),

/***/ "./src/js/nextDays.js":
/*!****************************!*\
  !*** ./src/js/nextDays.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setNextDays = () => {\n  const nextDaysContainer = document.createElement('div');\n  nextDaysContainer.classList.add('next-days-div');\n  const nextOne = document.createElement('div');\n  nextOne.classList.add('day-div');\n  const nextOneDate = document.createElement('h5');\n  nextOneDate.textContent = 'Next day 1';\n  const nextOneTemp = document.createElement('h3');\n  const nextOneIcon = document.createElement('i');\n  const nextTwo = document.createElement('div');\n  nextTwo.classList.add('day-div');\n  const nextTwoDate = document.createElement('h5');\n  nextTwoDate.textContent = 'Next day 2';\n  const nextTwoTemp = document.createElement('h3');\n  const nextTwoIcon = document.createElement('i');\n  const nextThree = document.createElement('div');\n  nextThree.classList.add('day-div');\n  const nextThreeDate = document.createElement('h5');\n  nextThreeDate.textContent = 'Next day 3';\n  const nextThreeTemp = document.createElement('h3');\n  const nextThreeIcon = document.createElement('i');\n\n  nextOne.appendChild(nextOneDate);\n  nextOne.appendChild(nextOneTemp);\n  nextOne.appendChild(nextOneIcon);\n  nextTwo.appendChild(nextTwoDate);\n  nextTwo.appendChild(nextTwoTemp);\n  nextTwo.appendChild(nextTwoIcon);\n  nextThree.appendChild(nextThreeDate);\n  nextThree.appendChild(nextThreeTemp);\n  nextThree.appendChild(nextThreeIcon);\n  nextDaysContainer.appendChild(nextOne);\n  nextDaysContainer.appendChild(nextTwo);\n  nextDaysContainer.appendChild(nextThree);\n\n  return nextDaysContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNextDays);\n\n//# sourceURL=webpack://weather-app-js/./src/js/nextDays.js?");

/***/ }),

/***/ "./src/js/todaysDetails.js":
/*!*********************************!*\
  !*** ./src/js/todaysDetails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setTodayDetails = () => {\n  const todayDetailsContainer = document.createElement('div');\n  todayDetailsContainer.classList.add('today-details-div');\n\n  const morning = document.createElement('div');\n  morning.classList.add('details-div');\n  morning.textContent = 'Morning';\n  const tempMorning = document.createElement('h4');\n  tempMorning.textContent = '10°';\n  const iconMorning = document.createElement('i');\n  iconMorning.classList.add('fas');\n  iconMorning.classList.add('fa-cloud-sun-rain');\n\n  const afternoon = document.createElement('div');\n  afternoon.classList.add('details-div');\n  afternoon.textContent = 'Afternoon';\n  const tempAfternoon = document.createElement('h4');\n  tempAfternoon.textContent = '13°';\n  const iconAfternoon = document.createElement('i');\n  iconAfternoon.classList.add('fas');\n  iconAfternoon.classList.add('fa-cloud');\n\n  const night = document.createElement('div');\n  night.classList.add('details-div');\n  night.textContent = 'Night';\n  const tempNight = document.createElement('h4');\n  tempNight.textContent = '8°';\n  const iconNight = document.createElement('i');\n  iconNight.classList.add('fas');\n  iconNight.classList.add('fa-cloud-moon-rain');\n\n  morning.appendChild(tempMorning);\n  morning.appendChild(iconMorning);\n  afternoon.appendChild(tempAfternoon);\n  afternoon.appendChild(iconAfternoon);\n  night.appendChild(tempNight);\n  night.appendChild(iconNight);\n  todayDetailsContainer.appendChild(morning);\n  todayDetailsContainer.appendChild(afternoon);\n  todayDetailsContainer.appendChild(night);\n\n  return todayDetailsContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTodayDetails);\n\n//# sourceURL=webpack://weather-app-js/./src/js/todaysDetails.js?");

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