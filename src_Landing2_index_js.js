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
/* harmony import */ var _khesht_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @khesht/react */ "webpack/sharing/consume/default/@khesht/react/@khesht/react");
/* harmony import */ var _khesht_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_khesht_react__WEBPACK_IMPORTED_MODULE_1__);



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
  }, "landing2 results from vertical", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "counter from landing 2 is : ", counter));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing2);

/***/ })

}]);
//# sourceMappingURL=src_Landing2_index_js.js.map