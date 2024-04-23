/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction about() {\n  var container = document.querySelector(\"#content\");\n  container.textContent = \"Love you:\";\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/logo.svg */ \"./src/static/logo.svg\");\n/* harmony import */ var _static_hitesh_dewasi_5JwBbnyZzfc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg */ \"./src/static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n//importing static imgs\nvar images = {};\nfunction importAll(r, obj) {\n  r.keys().forEach(function (key) {\n    return obj[key] = r(key);\n  });\n}\nimportAll(__webpack_require__(\"./src/static/dishes sync \\\\.(png%7Cjpe?g%7Csvg)$\"), images);\nvar chefs_pics = {};\nimportAll(__webpack_require__(\"./src/static/chefs sync \\\\.(png%7Cjpe?g%7Csvg)$\"), chefs_pics);\nvar social_icons = {};\nimportAll(__webpack_require__(\"./src/static/icons sync \\\\.(png%7Cjpe?g%7Csvg)$\"), social_icons);\nvar restaurantPics = {};\nimportAll(__webpack_require__(\"./src/static/restaurantpics sync \\\\.(png%7Cjpe?g%7Csvg)$\"), restaurantPics);\n//\nvar buttons = document.querySelectorAll(\"nav button\");\nvar _iterator = _createForOfIteratorHelper(buttons),\n  _step;\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var button = _step.value;\n    button.addEventListener(\"click\", tabListener);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\nvar logo = document.querySelector(\"img[alt='logo']\");\nlogo.setAttribute(\"src\", _static_logo_svg__WEBPACK_IMPORTED_MODULE_2__);\nhome();\nfunction removeOldItems(container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n}\nvar homeButton = document.querySelector(\"#home\");\nhomeButton.classList.add(\"selected-button\");\n\n//click listening callback\nfunction tabListener(e) {\n  var element = e.target;\n  document.querySelectorAll(\"nav button\").forEach(function (button) {\n    return button.classList.remove(\"selected-button\");\n  });\n  switch (element.id) {\n    case \"about\":\n      element.classList.add(\"selected-button\");\n      (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      break;\n    case \"home\":\n      home();\n      element.classList.add(\"selected-button\");\n      break;\n    case \"menu\":\n      element.classList.add(\"selected-button\");\n      break;\n    default:\n      console.log(\"Something's wrong!\");\n  }\n}\nfunction home() {\n  var container = document.querySelector(\"#content\");\n  removeOldItems(container);\n  var dishes = 6;\n  var dish_names = [\"Aaluu\", \"Daal\", \"ShweLi\", \"Fried Rice\", \"MacBook\", \"Adroid\"];\n  var chefs = 5;\n  var chef_names = [\"Daniel\", \"Angel\", \"Gelo\", \"Sell\", \"Soldout\"];\n  var social_media_icons = [\"facebook.svg\", \"instagram.svg\", \"reddit.svg\"];\n  var container_manifesto = createElement(\"div\", \"container-manifesto\");\n  var manifesto = createElement(\"span\", \"manifest-text\");\n  manifesto.textContent = \"The Award winning restaurant is now available online!\";\n  container_manifesto.appendChild(manifesto);\n  var containerBody = createElement(\"div\", \"container-main\");\n  var divsion_main = createElement(\"div\", \"division-main\");\n  var image = createElement(\"img\", \"main-picture\");\n  var imageIndex = 0;\n  image.setAttribute(\"src\", restaurantPics[[\"./table-5356682.jpg\"]]);\n  function changeImage() {\n    var imagePath = imageIndex === 0 ? restaurantPics[\"./table-5356682.jpg\"] : restaurantPics[\"./restaurant-inside.jpg\"];\n    image.setAttribute(\"src\", imagePath);\n    imageIndex = (imageIndex + 1) % Object.keys(restaurantPics).length;\n  }\n  setInterval(function () {\n    return changeImage();\n  }, 3000);\n  var side_text_container = createElement(\"div\", \"side-text-container\");\n  var side_text_upper_container = createElement(\"div\", \"side-text-upper\");\n  var side_text_lower_container = createElement(\"div\", \"side-text-lower\");\n  var upper_text = createElement(\"p\", \"upper-text\");\n  upper_text.textContent = \"Escape the ordinary, savor the extraordinary.\";\n  side_text_upper_container.appendChild(upper_text);\n  var lower_title = createElement(\"h3\", \"lower-title\");\n  lower_title.textContent = \"Reserve a table!\";\n  var table_image = createElement(\"img\", \"table-image\");\n  var lower_text = createElement(\"p\", \"lower-text\");\n  var reserve_button = createElement(\"button\", \"reserve\");\n  table_image.setAttribute(\"src\", _static_hitesh_dewasi_5JwBbnyZzfc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__);\n  reserve_button.textContent = \"Reserve!\";\n  lower_text.textContent = \"Reserving for a table is easier than ever since the website is available.\\n  \\n Do you know that if you reserve more than 2 tables, you will get free bottles of wine per tables?\";\n  side_text_lower_container.appendChild(lower_title);\n  side_text_lower_container.appendChild(table_image);\n  side_text_lower_container.appendChild(lower_text);\n  side_text_lower_container.appendChild(reserve_button);\n  side_text_container.appendChild(side_text_upper_container);\n  side_text_container.appendChild(side_text_lower_container);\n  divsion_main.appendChild(image);\n  divsion_main.appendChild(side_text_container);\n  containerBody.appendChild(divsion_main);\n\n  //list\n  var listContainer = createElement(\"div\", \"list-container\");\n  var listTitle = createElement(\"span\", \"list-title\");\n  listTitle.textContent = \"Popular Dishes\";\n  containerBody.appendChild(listTitle);\n  var observeIntersection = new IntersectionObserver(function (entries) {\n    if (entries[0].intersectionRatio <= 0) return;\n    loadChefCards();\n    loadDishes();\n    console.log(\"Image loaded\");\n  });\n  var loadDishes = function loadDishes() {\n    for (var i = 0; i < dishes; i++) {\n      var items = createElement(\"div\", \"item-div\");\n      var dish_pic = createElement(\"img\", \"dish-pic\");\n      dish_pic.setAttribute(\"src\", images[\"./dish\".concat(i, \".jpg\")]);\n      var dish_name = createElement(\"span\", \"dish-name\");\n      dish_name.textContent = dish_names[i];\n      items.appendChild(dish_pic);\n      items.appendChild(dish_name);\n      listContainer.appendChild(items);\n    }\n    observeIntersection.unobserve(listContainer);\n  };\n  observeIntersection.observe(listContainer);\n  containerBody.appendChild(listContainer);\n\n  //chefs\n\n  var chef_container = createElement(\"div\", \"chef-container\");\n  var chef_container_title = createElement(\"div\", \"chef-container-title\");\n  chef_container_title.textContent = \"Chefs\";\n  chef_container.appendChild(chef_container_title);\n  function loadChefCards(entries) {\n    for (var i = 0; i < chefs; i++) {\n      var chef_card = createElement(\"div\", \"chef-card\");\n      var chef = createElement(\"img\", \"chef-pics\");\n      chef.setAttribute(\"src\", chefs_pics[\"./chef\".concat(i, \".jpg\")]);\n      var chef_name = createElement(\"span\", \"chef-name\");\n      chef_name.textContent = chef_names[i];\n      chef_card.appendChild(chef);\n      chef_card.appendChild(chef_name);\n      chef_container.appendChild(chef_card);\n    }\n    observeIntersection.unobserve(chef_container);\n  }\n  observeIntersection.observe(chef_container);\n  containerBody.appendChild(chef_container_title);\n  containerBody.appendChild(chef_container);\n\n  //footer\n  var footer_container = createElement(\"div\", \"footer-container\");\n  var social_address_wrapper = createElement(\"div\", \"social-address-wrapper\");\n  var social_title = createElement(\"h3\", \"social-title\");\n  social_title.textContent = \"For more updates, follow us on: \";\n  var social_media_container = createElement(\"div\", \"social-container\");\n  social_media_container.appendChild(social_title);\n  var social_icons_container = createElement(\"div\", \"social-icon-container\");\n  social_media_icons.forEach(function (iconseach) {\n    var icon = createElement(\"img\", \"social-media-icon\");\n    icon.setAttribute(\"src\", social_icons[\"./\".concat(iconseach)]);\n    social_icons_container.appendChild(icon);\n  });\n  social_media_container.appendChild(social_icons_container);\n  //=================================\n  var address_container = createElement(\"div\", \"address-container\");\n  var physical_address = createElement(\"div\", \"physical-address\");\n  physical_address.innerHTML = \"\\n  <h3>Physical Address: </h3><address>\\n  124 Main Street <br>\\n  Fiftyville, StateVille 66666 <br>\\n  United States \\n  </address>\";\n  var contact_address = createElement(\"div\", \"contact-address\");\n  contact_address.innerHTML = \"<h3>Contact addresses: </h3>\\n  <address>\\n  Email:<a href=\\\"mailto:restaurant@ace.org\\\">restaurant@ace.org</a><br>\\n  Phone:<a href=\\\"tel:9806969666\\\">9806969666</a><br>\\n  FAQ : <a href=\\\"https://faq.acerestaurant.com\\\">faq.acerestaurant.com</a>\\n  </address>\";\n  address_container.appendChild(physical_address);\n  address_container.appendChild(contact_address);\n  //=============================\n  social_address_wrapper.appendChild(social_media_container);\n  social_address_wrapper.appendChild(address_container);\n  var foot_text_container = createElement(\"div\", \"foot-text-container\");\n  foot_text_container.innerHTML = \"&copy; 2024 &nbsp;<strong>Ace Restaurant</strong>. All rights reserved\";\n  social_address_wrapper.appendChild(foot_text_container);\n  footer_container.appendChild(social_address_wrapper);\n  container.appendChild(container_manifesto);\n  container.appendChild(containerBody);\n  container.appendChild(footer_container);\n}\nfunction createElement(tag, className, id) {\n  var element = document.createElement(tag);\n  if (className) element.classList.add(className);\n  if (id) element.id = id;\n  return element;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./src/static/chefs sync \\.(png%7Cjpe?g%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/static/chefs/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./chef0.jpg\": \"./src/static/chefs/chef0.jpg\",\n\t\"./chef1.jpg\": \"./src/static/chefs/chef1.jpg\",\n\t\"./chef2.jpg\": \"./src/static/chefs/chef2.jpg\",\n\t\"./chef3.jpg\": \"./src/static/chefs/chef3.jpg\",\n\t\"./chef4.jpg\": \"./src/static/chefs/chef4.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/chefs sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/static/dishes sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/static/dishes/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./dish0.jpg\": \"./src/static/dishes/dish0.jpg\",\n\t\"./dish1.jpg\": \"./src/static/dishes/dish1.jpg\",\n\t\"./dish2.jpg\": \"./src/static/dishes/dish2.jpg\",\n\t\"./dish3.jpg\": \"./src/static/dishes/dish3.jpg\",\n\t\"./dish4.jpg\": \"./src/static/dishes/dish4.jpg\",\n\t\"./dish5.jpg\": \"./src/static/dishes/dish5.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/dishes sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/static/icons sync \\.(png%7Cjpe?g%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/static/icons/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./facebook.svg\": \"./src/static/icons/facebook.svg\",\n\t\"./instagram.svg\": \"./src/static/icons/instagram.svg\",\n\t\"./reddit.svg\": \"./src/static/icons/reddit.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/icons sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/icons/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/static/restaurantpics sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*****************************************************************************!*\
  !*** ./src/static/restaurantpics/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./restaurant-inside.jpg\": \"./src/static/restaurantpics/restaurant-inside.jpg\",\n\t\"./table-5356682.jpg\": \"./src/static/restaurantpics/table-5356682.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/restaurantpics sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/restaurantpics/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/static/chefs/chef0.jpg":
/*!************************************!*\
  !*** ./src/static/chefs/chef0.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3f77c83ebcdf5ed92a75.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/chef0.jpg?");

/***/ }),

/***/ "./src/static/chefs/chef1.jpg":
/*!************************************!*\
  !*** ./src/static/chefs/chef1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea207d04aa6c9dab2acb.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/chef1.jpg?");

/***/ }),

/***/ "./src/static/chefs/chef2.jpg":
/*!************************************!*\
  !*** ./src/static/chefs/chef2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d41e53e5a154d858b2b6.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/chef2.jpg?");

/***/ }),

/***/ "./src/static/chefs/chef3.jpg":
/*!************************************!*\
  !*** ./src/static/chefs/chef3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1cebb7ce5c0fa41585a8.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/chef3.jpg?");

/***/ }),

/***/ "./src/static/chefs/chef4.jpg":
/*!************************************!*\
  !*** ./src/static/chefs/chef4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b59764ac0ab1185bf4d0.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/chefs/chef4.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish0.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish0.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c38bf6d02508e4010ab9.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish0.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish1.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9b3b3dd38f874746418e.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish1.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish2.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5a7d738f079624768abf.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish2.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish3.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a88cd0ade7591640c753.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish3.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish4.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41e80391612969ec9152.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish4.jpg?");

/***/ }),

/***/ "./src/static/dishes/dish5.jpg":
/*!*************************************!*\
  !*** ./src/static/dishes/dish5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9a88fab7e4e1a1db49cc.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/dishes/dish5.jpg?");

/***/ }),

/***/ "./src/static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a30f7bb6510670ffc05c.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg?");

/***/ }),

/***/ "./src/static/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/static/icons/facebook.svg ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4NCjxwYXRoIGZpbGw9IiMwMzliZTUiIGQ9Ik0yNCA1QTE5IDE5IDAgMSAwIDI0IDQzQTE5IDE5IDAgMSAwIDI0IDVaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjU3MiwyOS4wMzZoNC45MTdsMC43NzItNC45OTVoLTUuNjl2LTIuNzNjMC0yLjA3NSwwLjY3OC0zLjkxNSwyLjYxOS0zLjkxNWgzLjExOXYtNC4zNTljLTAuNTQ4LTAuMDc0LTEuNzA3LTAuMjM2LTMuODk3LTAuMjM2Yy00LjU3MywwLTcuMjU0LDIuNDE1LTcuMjU0LDcuOTE3djMuMzIzaC00LjcwMXY0Ljk5NWg0LjcwMXYxMy43MjlDMjIuMDg5LDQyLjkwNSwyMy4wMzIsNDMsMjQsNDNjMC44NzUsMCwxLjcyOS0wLjA4LDIuNTcyLTAuMTk0VjI5LjAzNnoiPjwvcGF0aD4NCjwvc3ZnPg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/icons/facebook.svg?");

/***/ }),

/***/ "./src/static/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/static/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9c734f2adf918a636e58.svg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/icons/instagram.svg?");

/***/ }),

/***/ "./src/static/icons/reddit.svg":
/*!*************************************!*\
  !*** ./src/static/icons/reddit.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4NCjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMi4xOTMgMTkuNTU1Yy0xLjk0LTEuNzQxLTQuNzktMS43MjctNi4zNjUuMDI5LTEuNTc2IDEuNzU2LTEuMzAxIDUuMDIzLjkyNiA2LjYzMkwxMi4xOTMgMTkuNTU1ek0zNS44MDcgMTkuNTU1YzEuOTM5LTEuNzQxIDQuNzg5LTEuNzI3IDYuMzY1LjAyOSAxLjU3NSAxLjc1NiAxLjMwMiA1LjAyMy0uOTI3IDYuNjMyTDM1LjgwNyAxOS41NTV6TTM4LjMyIDYuOTc1QTMuNSAzLjUgMCAxIDAgMzguMzIgMTMuOTc1IDMuNSAzLjUgMCAxIDAgMzguMzIgNi45NzV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LjA4NSAxNS42NjUwMDAwMDAwMDAwMDFBMTguMDg1IDEyLjk0NiAwIDEgMCAyNC4wODUgNDEuNTU3QTE4LjA4NSAxMi45NDYgMCAxIDAgMjQuMDg1IDE1LjY2NTAwMDAwMDAwMDAwMVoiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjRDg0MzE1IiBkPSJNMzAuMzY1IDIzLjUwNkEyLjg4NCAyLjg4NCAwIDEgMCAzMC4zNjUgMjkuMjc0IDIuODg0IDIuODg0IDAgMSAwIDMwLjM2NSAyMy41MDZ6TTE3LjYzNSAyMy41MDZBMi44ODQgMi44ODQgMCAxIDAgMTcuNjM1IDI5LjI3NCAyLjg4NCAyLjg4NCAwIDEgMCAxNy42MzUgMjMuNTA2eiI+PC9wYXRoPjwvZz48Zz48cGF0aCBmaWxsPSIjMzc0NzRGIiBkPSJNMjQuMDAyIDM0LjkwMmMtMy4yNTIgMC02LjE0LS43NDUtOC4wMDItMS45MDIgMS4wMjQgMi4wNDQgNC4xOTYgNCA4LjAwMiA0IDMuODAyIDAgNi45NzYtMS45NTYgNy45OTgtNEMzMC4xNDMgMzQuMTU3IDI3LjI1NCAzNC45MDIgMjQuMDAyIDM0LjkwMnpNNDEuODMgMjcuMDI2bC0xLjE3LTEuNjIxYy44MzEtLjYgMS4zNzMtMS41NTYgMS40ODgtMi42MjMuMTA1LS45OC0uMTU3LTEuOTAzLS43MjEtMi41MzEtLjU3MS0uNjM3LTEuMzkxLS45OS0yLjMwNy0uOTk0LS45MjcuMDEzLTEuODk0LjM2NS0yLjY0NiAxLjA0MWwtMS4zMzYtMS40ODhjMS4xMjMtMS4wMDggMi41NDUtMS41MjMgMy45OTEtMS41NTMgMS40ODguMDA3IDIuODMzLjU5NiAzLjc4NiAxLjY1OC45NDIgMS4wNSAxLjM4NyAyLjUzNyAxLjIyMSA0LjA4MUM0My45NjEgMjQuNjI2IDQzLjEyMSAyNi4wOTYgNDEuODMgMjcuMDI2ek02LjE2OSAyNy4wMjZjLTEuMjktLjkzMi0yLjEzMS0yLjQwMS0yLjMwNi00LjAzMS0uMTY2LTEuNTQzLjI3OS0zLjAzIDEuMjIxLTQuMDc5Ljk1My0xLjA2MiAyLjI5Ny0xLjY1MSAzLjc4NS0xLjY1OC4wMDkgMCAuMDE4IDAgLjAyNyAwIDEuNDQxIDAgMi44NDkuNTUxIDMuOTY1IDEuNTUzbC0xLjMzNiAxLjQ4OGMtLjc1My0uNjc2LTEuNjg5LTEuMDA1LTIuNjQ2LTEuMDQxLS45MTYuMDA0LTEuNzM1LjM1Ny0yLjMwNi45OTQtLjU2My42MjgtLjgyNiAxLjU1LS43MjEgMi41My4xMTUgMS4wNjcuNjU3IDIuMDIzIDEuNDg4IDIuNjI0TDYuMTY5IDI3LjAyNnpNMjUgMTYuODRoLTJjMC0yLjg4NSAwLTEwLjU0OCA0Ljk3OS0xMC41NDggMi4xNTQgMCAzLjE5MyAxLjIxMSAzLjk1MiAyLjA5Ni42MjkuNzM0Ljk2MSAxLjA4NiAxLjYxNiAxLjA4NmgxLjM3djJoLTEuMzdjLTEuNjA0IDAtMi40NTMtLjk5LTMuMTM1LTEuNzg1LS42Ny0uNzgxLTEuMTk4LTEuMzk4LTIuNDM0LTEuMzk4QzI1Ljk3NSA4LjI5MiAyNSAxMS4wODggMjUgMTYuODR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM3NDc0RiIgZD0iTTI0LjA4NSAxNi45NWM5LjQyMSAwIDE3LjA4NSA1LjIzMSAxNy4wODUgMTEuNjYxIDAgNi40MzEtNy42NjQgMTEuNjYyLTE3LjA4NSAxMS42NjJTNyAzNS4wNDIgNyAyOC42MTFDNyAyMi4xODEgMTQuNjY0IDE2Ljk1IDI0LjA4NSAxNi45NU0yNC4wODUgMTQuOTVDMTMuNTQ0IDE0Ljk1IDUgMjEuMDY2IDUgMjguNjExYzAgNy41NDYgOC41NDUgMTMuNjYyIDE5LjA4NSAxMy42NjIgMTAuNTQgMCAxOS4wODUtNi4xMTYgMTkuMDg1LTEzLjY2MkM0My4xNyAyMS4wNjYgMzQuNjI1IDE0Ljk1IDI0LjA4NSAxNC45NUwyNC4wODUgMTQuOTV6TTM4LjMyIDcuOTc1YzEuMzc5IDAgMi41IDEuMTIyIDIuNSAyLjVzLTEuMTIxIDIuNS0yLjUgMi41LTIuNS0xLjEyMi0yLjUtMi41UzM2Ljk0MSA3Ljk3NSAzOC4zMiA3Ljk3NU0zOC4zMiA1Ljk3NWMtMi40ODQgMC00LjUgMi4wMTUtNC41IDQuNXMyLjAxNiA0LjUgNC41IDQuNWMyLjQ4NiAwIDQuNS0yLjAxNSA0LjUtNC41UzQwLjgwNyA1Ljk3NSAzOC4zMiA1Ljk3NUwzOC4zMiA1Ljk3NXoiPjwvcGF0aD48L2c+DQo8L3N2Zz4=\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/icons/reddit.svg?");

/***/ }),

/***/ "./src/static/logo.svg":
/*!*****************************!*\
  !*** ./src/static/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"992dfdfea1984769d395.svg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/logo.svg?");

/***/ }),

/***/ "./src/static/restaurantpics/restaurant-inside.jpg":
/*!*********************************************************!*\
  !*** ./src/static/restaurantpics/restaurant-inside.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5ebef9a1ccf3874893b2.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/restaurantpics/restaurant-inside.jpg?");

/***/ }),

/***/ "./src/static/restaurantpics/table-5356682.jpg":
/*!*****************************************************!*\
  !*** ./src/static/restaurantpics/table-5356682.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dbc92d144bff9c672a2f.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/static/restaurantpics/table-5356682.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;