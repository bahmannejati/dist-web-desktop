(self["webpackChunkvertical1"] = self["webpackChunkvertical1"] || []).push([["src_Landing2_index_js"],{

/***/ "./src/Landing2/index.js":
/*!*******************************!*\
  !*** ./src/Landing2/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Lazy */ "./src/Lazy/index.js");



function Landing2({
  passedRef
}) {
  const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setInterval(() => {
      setCounter(c => c + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    ref: passedRef,
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  }, "landing2 results from vertical", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "counter from landing 2 is : ", counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "inner lazy component :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Lazy__WEBPACK_IMPORTED_MODULE_1__.default, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing2);

/***/ }),

/***/ "./src/Lazy/index.js":
/*!***************************!*\
  !*** ./src/Lazy/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Comp
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var importedWrapper = __webpack_require__(/*! react-imported-component/wrapper */ "./node_modules/react-imported-component/wrapper.js");

 // similar ways (more complex) :
// https://github.com/faceyspacey/babel-plugin-universal-import
// https://github.com/faceyspacey/react-universal-component/blob/master/src/index.js
// this way we assume that the vertical server-side bundle is just 1 chunk file,
// if we want to support splitted chunks for server-side bundle, we should write
// a babel plugin then add a `require` manually, this way we
// ensure the module is loaded before rendering
// for the first release, we do it manually! but a babel plugin
// can simply do this manual works

const lazy = {
  load: () => importedWrapper("imported_-njieu2_component", __webpack_require__.e(/*! import() | Lazy */ "Lazy").then(__webpack_require__.bind(__webpack_require__, /*! ./Lazy */ "./src/Lazy/Lazy.js"))),
  id: /*require.resolve*/(/*! ./Lazy */ "./src/Lazy/Lazy.js"),
  chunkName: 'Lazy'
};
const isSSR = typeof window === 'undefined';

function getModuleID(id) {
  return `vertical1:${id}`;
} // this variables acts as a cache, we assume that the context of this
// module is shared when it is used multiple times, otherwise the next
// usages of this module may execute without a cache, so they show a
// loading
// if the cache is not shared, we should use a `window[key]` approach
// instead of `CSRComponentAfterHydrate = module.default;` or use a webpack
// cache variable
// TODO: better to use a shared variable to prevent non-necessary loading in some
// cases, note that cache unused modules should be cleaned up whenever neened


let CSRComponentAfterHydrate = null;

if (!isSSR) {
  // this just affects the initial hydrate, after the initial hydrate
  // this code has no effect!
  // NOTE: when this module is loaded, so it's ok to load the lazy too
  lazy.load().then(module => {
    CSRComponentAfterHydrate = module.default;

    window.__receiveVerticalMarkSignal(getModuleID(lazy.id));
  });
}

console.log('how many times, lazy module added?');
function Comp() {
  // during CSR and before the the first hydrate, this component doesn't render!
  // right after the lazy is loaded, the component will be rendered
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const module = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // NOTE: the module is already requested in the browser, this
    // load is just to found out when to hide the loading, so it's not slow
    lazy.load().then(m => {
      module.current = m;
      setLoading(false);
    });
  }, []); // what if component is loaded according an state in upper components?
  // if at the SSR phase, it is not needed, so there is no need to call
  // add to global chunks, and if at the client side it will be required,
  // so let the CSR do it by itself! everything is ok.

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "loading module!");
}

/***/ }),

/***/ "./node_modules/react-imported-component/wrapper.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-imported-component/wrapper.js ***!
  \**********************************************************/
/***/ ((module) => {

var importedWrapper = function(marker, realImport) {
  if (typeof __deoptimization_sideEffect__ !== 'undefined') {
    __deoptimization_sideEffect__(marker, realImport);
  }
  return realImport;
};

module.exports = importedWrapper;


/***/ })

}]);
//# sourceMappingURL=src_Landing2_index_js.js.map