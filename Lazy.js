(self["webpackChunkvertical1"] = self["webpackChunkvertical1"] || []).push([["Lazy"],{

/***/ "./src/DeepLazy/index.js":
/*!*******************************!*\
  !*** ./src/DeepLazy/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Comp
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeepLazy_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeepLazy.style */ "./src/DeepLazy/DeepLazy.style.desktop.scss");
var importedWrapper = __webpack_require__(/*! react-imported-component/wrapper */ "./node_modules/react-imported-component/wrapper.js");

 // its better to import the styles before at the top!
// even better to import them inside the lazy loader
// file (like this file, instead of `src/DeepLazy/DeepLazy.desktop.jsx`)


const lazy = {
  // we can use the same `webpackChunkName` for multiple `import()`s
  // that's ok to combine some chunks together, for example `webpackChunkName: "Lazy"`
  // is ok too without conflict by `src/Lazy/index.js`
  load: () => importedWrapper("imported_-9n56ua_component", Promise.all(/*! import() | DeepLazy */[__webpack_require__.e("v1_stripe"), __webpack_require__.e("v1_lodash_flatten"), __webpack_require__.e("DeepLazy")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DeepLazy */ "./src/DeepLazy/DeepLazy.desktop.jsx"))),
  id: /*require.resolve*/(/*! ./DeepLazy */ "./src/DeepLazy/DeepLazy.desktop.jsx"),
  chunkName: 'DeepLazy'
};
const isSSR = typeof window === 'undefined';

function getModuleID(id) {
  return `vertical1:${id}`;
}

let CSRComponentAfterHydrate = null;

if (!isSSR) {
  lazy.load().then(module => {
    CSRComponentAfterHydrate = module.default;

    window.__receiveVerticalMarkSignal(getModuleID(lazy.id));
  });
}

console.log('how many times, deep lazy module added?');
function Comp() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const module = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    lazy.load().then(m => {
      module.current = m;
      setLoading(false);
    });
  }, []);

  if (isSSR) {
    __webpack_require__.g.__ADD_VERTICAL_REQUIRED_MARK(getModuleID(lazy.id), lazy.chunkName, lazy.id);

    const Component = __webpack_require__(lazy.id).default;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null);
  }

  if (CSRComponentAfterHydrate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CSRComponentAfterHydrate, null);
  }

  if (!loading) {
    const CSRComponent = module.current.default;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CSRComponent, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "loading deep module!");
}

/***/ }),

/***/ "./src/Lazy/Lazy.js":
/*!**************************!*\
  !*** ./src/Lazy/Lazy.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeepLazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DeepLazy */ "./src/DeepLazy/index.js");



function Lazy() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "hoooooora lazy component v2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeepLazy__WEBPACK_IMPORTED_MODULE_1__.default, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lazy);

/***/ }),

/***/ "./src/DeepLazy/DeepLazy.style.desktop.scss":
/*!**************************************************!*\
  !*** ./src/DeepLazy/DeepLazy.style.desktop.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=Lazy.js.map