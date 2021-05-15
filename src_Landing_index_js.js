(self["webpackChunkvertical1"] = self["webpackChunkvertical1"] || []).push([["src_Landing_index_js"],{

/***/ "./src/Landing/Landing.desktop.js":
/*!****************************************!*\
  !*** ./src/Landing/Landing.desktop.js ***!
  \****************************************/
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
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta */ "./src/meta.js");




function Landing({
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
  const verticalName = (0,_meta__WEBPACK_IMPORTED_MODULE_2__.default)().name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    ref: passedRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "desktop version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "our vertical name is :", verticalName, "the counter is :", counter, "this is a khesht button :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_khesht_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "v1-desktop-button"
  }, "click me, please!"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ }),

/***/ "./src/Landing/index.js":
/*!******************************!*\
  !*** ./src/Landing/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landing */ "./src/Landing/Landing.desktop.js");
/* harmony import */ var _Landing_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Landing.style */ "./src/Landing/Landing.style.desktop.scss");





const LazyComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_Lazy_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../Lazy */ "./src/Lazy/index.js")));

function Landing(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: 'white',
      backgroundImage: `url(${_assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__.default})`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LazyComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "the wrapper for landing with serving mode :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__.default
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Landing__WEBPACK_IMPORTED_MODULE_3__.default, props));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ }),

/***/ "./src/meta.js":
/*!*********************!*\
  !*** ./src/meta.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ meta
/* harmony export */ });
function meta() {
  return {
    name: 'vertical1'
  };
}

/***/ }),

/***/ "./src/Landing/Landing.style.desktop.scss":
/*!************************************************!*\
  !*** ./src/Landing/Landing.style.desktop.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "background.4f5b1c78.jpg");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTAiIGhlaWdodD0iMjEwIiB2aWV3Qm94PSIwIDAgMjEwIDIxMCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDczIDI2KSI+CiAgICAgIDxwb2x5Z29uIGZpbGw9IiM1RUJDNUUiIHBvaW50cz0iNjIgMCAyNC45NDQgMzMuMDM1IDUgMTUuNTgyIDUgMzMuMjc4IDI0Ljk0NCA1MiA2MiAxOC4yNjQiLz4KICAgICAgPHBhdGggZmlsbD0iI0ZEMCIgZD0iTTI3LjcyMDg3MTQsNTMuODk1MTQ4OCBMMjcuNzIwODcxNCw1My44OTUxNDg4IEMyOC42NzI2ODU2LDU1LjczODgzNDMgMzEuMTQ1MTA0NSw1Ni4zNjA4ODcyIDMyLjk1MTA2MTksNTUuMjExMTY4MSBDMzUuNDI2MzUzNCw1My42MzUzNjA4IDM4Ljc0NjIxMjUsNTUuNDM0OTk5MyAzOC41Mjk4MDQsNTguMjM0MjM3MSBDMzguMzcyNzY0Myw2MC4yNzgzODE5IDQwLjE4MjU1MTksNjEuOTc2NDQyNCA0Mi4zNTkwODQ4LDYxLjgyOTAxOTUgQzQ1LjM0MDkyNTQsNjEuNjI2NzYyNCA0Ny4yNTc5NTk3LDY0Ljc0MjQyMDIgNDUuNTc5MzU3OCw2Ny4wNjYxMjkzIEM0NC4zNTQ2MzksNjguNzYxNDkzIDQ1LjAxNzI3MDMsNzEuMDgyNTA1MyA0Ni45ODEyMjUsNzEuOTc2MDMyIEM0OS42NzI5MjUsNzMuMjAxMjYwNCA0OS42NzI5MjUsNzYuNzk5NjM4NSA0Ni45ODEyMjUsNzguMDIzOTY4IEM0NS4wMTcyNzAzLDc4LjkxNzQ5NDcgNDQuMzU0NjM5LDgxLjIzODUwNyA0NS41NzkzNTc4LDgyLjkzMzg3MDcgQzQ3LjI1Nzk1OTcsODUuMjU3NTc5OCA0NS4zNDA5MjU0LDg4LjM3NDEzNjUgNDIuMzU5MDg0OCw4OC4xNzE4Nzk0IEM0MC4xODI1NTE5LDg4LjAyMzU1NzYgMzguMzcyNzY0Myw4OS43MjI1MTcgMzguNTI5ODA0LDkxLjc2NTc2MjkgQzM4Ljc0NjIxMjUsOTQuNTY1ODk5NyAzNS40MjYzNTM0LDk2LjM2NTUzODEgMzIuOTUxMDYxOSw5NC43ODk3MzA4IEMzMS4xNDUxMDQ1LDkzLjY0MDAxMTcgMjguNjcyNjg1Niw5NC4yNjExNjU3IDI3LjcyMDg3MTQsOTYuMTA0ODUxMiBDMjYuNDE2Njc1Miw5OC42MzE3MTYzIDIyLjU4MjYwNjYsOTguNjMxNzE2MyAyMS4yNzg0MTA1LDk2LjEwNDg1MTIgQzIwLjMyNjU5NjIsOTQuMjYxMTY1NyAxNy44NTQxNzc0LDkzLjY0MDAxMTcgMTYuMDQ5MTc3NSw5NC43ODk3MzA4IEMxMy41NzM4ODYsOTYuMzY1NTM4MSAxMC4yNTMwNjkzLDk0LjU2NTg5OTcgMTAuNDY4NTIwMiw5MS43NjU3NjI5IEMxMC42MjY1MTc2LDg5LjcyMjUxNyA4LjgxNjcyOTkzLDg4LjAyMzU1NzYgNi42NDAxOTY5OCw4OC4xNzE4Nzk0IEMzLjY1NzM5ODg2LDg4LjM3NDEzNjUgMS43NDAzNjQ1Niw4NS4yNTc1Nzk4IDMuNDE4OTY2NTIsODIuOTMzODcwNyBDNC42NDM2ODUyNCw4MS4yMzg1MDcgMy45ODIwMTE1Niw3OC45MTc0OTQ3IDIuMDE4MDU2ODQsNzguMDIzOTY4IEMtMC42NzI2ODU2MTMsNzYuNzk5NjM4NSAtMC42NzI2ODU2MTMsNzMuMjAxMjYwNCAyLjAxODA1Njg0LDcxLjk3NjAzMiBDMy45ODIwMTE1Niw3MS4wODI1MDUzIDQuNjQzNjg1MjQsNjguNzYxNDkzIDMuNDE4OTY2NTIsNjcuMDY2MTI5MyBDMS43NDAzNjQ1Niw2NC43NDI0MjAyIDMuNjU3Mzk4ODYsNjEuNjI2NzYyNCA2LjY0MDE5Njk4LDYxLjgyOTAxOTUgQzguODE2NzI5OTMsNjEuOTc2NDQyNCAxMC42MjY1MTc2LDYwLjI3ODM4MTkgMTAuNDY4NTIwMiw1OC4yMzQyMzcxIEMxMC4yNTMwNjkzLDU1LjQzNDk5OTMgMTMuNTczODg2LDUzLjYzNTM2MDggMTYuMDQ5MTc3NSw1NS4yMTExNjgxIEMxNy44NTQxNzc0LDU2LjM2MDg4NzIgMjAuMzI2NTk2Miw1NS43Mzg4MzQzIDIxLjI3ODQxMDUsNTMuODk1MTQ4OCBDMjIuNTgyNjA2Niw1MS4zNjgyODM3IDI2LjQxNjY3NTIsNTEuMzY4MjgzNyAyNy43MjA4NzE0LDUzLjg5NTE0ODgiLz4KICAgIDwvZz4KICAgIDxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMjEwIi8+CiAgICA8ZyBmaWxsPSIjNjVCNTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE0NSkiPgogICAgICA8cGF0aCBkPSJNNzkuMjQ1OTUyNCAyMi40NDc5NjYzTDY3LjY5NzIxNDMgMjIuNDQ3OTY2M0M2NS4wMzI1IDIyLjQ0Nzk2NjMgNjIuODYzOTI4NiAyMC4yODc3OTc2IDYyLjg2MzkyODYgMTcuNjMyMTkyNUw2Mi44NjM5Mjg2IDEyLjgxNjQxODcgNzkuMjQ1OTUyNCAxMi44MTY0MTg3QzgxLjkxMDY2NjcgMTIuODE2NDE4NyA4NC4wNzkyMzgxIDE0Ljk3NjU4NzMgODQuMDc5MjM4MSAxNy42MzIxOTI1IDg0LjA3OTIzODEgMjAuMjg3Nzk3NiA4MS45MTA2NjY3IDIyLjQ0Nzk2NjMgNzkuMjQ1OTUyNCAyMi40NDc5NjYzTTc5LjI0NTk1MjQgNi4yNjg3OTk2TDU2LjI5MjUgNi4yNjg3OTk2IDU2LjI5MjUgOS41NDI2MDkxMyA1Ni4yOTI1IDE3LjYzMjE5MjVDNTYuMjkyNSAyMC4yODc3OTc2IDU0LjEyNDQ3NjIgMjIuNDQ3OTY2MyA1MS40NTkyMTQzIDIyLjQ0Nzk2NjNMNDcuMjE3MzU3MSAyMi40NDc5NjYzQzQ0LjU1MjA5NTIgMjIuNDQ3OTY2MyA0Mi4zODM1MjM4IDIwLjI4Nzc5NzYgNDIuMzgzNTIzOCAxNy42MzIxOTI1IDQyLjM4MzUyMzggMTEuMzY2MTIxIDM3LjI2NzExOSA2LjI2ODc5OTYgMzAuOTc4MjYxOSA2LjI2ODc5OTZMMTEuNDA0NzE0MyA2LjI2ODc5OTZDNS4xMTY0MDQ3NiA2LjI2ODc5OTYgMi4xMzE2MjgyMWUtMTQgMTEuMzY2MTIxIDIuMTMxNjI4MjFlLTE0IDE3LjYzMjE5MjUgMi4xMzE2MjgyMWUtMTQgMjMuODk3NzE4MyA1LjExNjQwNDc2IDI4Ljk5NTU4NTMgMTEuNDA0NzE0MyAyOC45OTU1ODUzTDMyLjk4MjU0NzYgMjguOTk1NTg1MyAzMi45ODI1NDc2IDIyLjQ0Nzk2NjMgMTEuNDA0NzE0MyAyMi40NDc5NjYzQzguNzQgMjIuNDQ3OTY2MyA2LjU3MTQyODU3IDIwLjI4Nzc5NzYgNi41NzE0Mjg1NyAxNy42MzIxOTI1IDYuNTcxNDI4NTcgMTQuOTc2NTg3MyA4Ljc0IDEyLjgxNjQxODcgMTEuNDA0NzE0MyAxMi44MTY0MTg3TDMwLjk3ODI2MTkgMTIuODE2NDE4N0MzMy42NDQwNzE0IDEyLjgxNjQxODcgMzUuODEyMDk1MiAxNC45NzY1ODczIDM1LjgxMjA5NTIgMTcuNjMyMTkyNSAzNS44MTIwOTUyIDIzLjg5NzcxODMgNDAuOTI3OTUyNCAyOC45OTU1ODUzIDQ3LjIxNzM1NzEgMjguOTk1NTg1M0w1MS40NTkyMTQzIDI4Ljk5NTU4NTNDNTQuNjM0ODU3MSAyOC45OTU1ODUzIDU3LjUwODc2MTkgMjcuNjkzMTU0OCA1OS41NzgyMTQzIDI1LjU5OTU1MzYgNjEuNjQ4MjE0MyAyNy42OTMxNTQ4IDY0LjUyMjExOSAyOC45OTU1ODUzIDY3LjY5NzIxNDMgMjguOTk1NTg1M0w3OS4yNDU5NTI0IDI4Ljk5NTU4NTNDODUuNTM0MjYxOSAyOC45OTU1ODUzIDkwLjY1MDY2NjcgMjMuODk3NzE4MyA5MC42NTA2NjY3IDE3LjYzMjE5MjUgOTAuNjUwNjY2NyAxMS4zNjYxMjEgODUuNTM0MjYxOSA2LjI2ODc5OTYgNzkuMjQ1OTUyNCA2LjI2ODc5OTZNMTk1LjQ1MzUwNyA2LjMwNDgxMTUxTDE4MC44ODQxMDIgNi4zMDQ4MTE1MSAxODYuOTIyMTUgMCAxNzcuOTA3NzkzIDAgMTY1LjYxNTkzNiAxMi44ODI5ODYxIDE3NC41ODQ4NCAxMi44ODI5ODYxIDE3NC42MTMzMTcgMTIuODUyNDMwNiAxOTUuNDUzNTA3IDEyLjg1MjQzMDZDMTk4LjEwODkxMiAxMi44NTI0MzA2IDIwMC4yNjg3MjEgMTUuMDA0NDE0NyAyMDAuMjY4NzIxIDE3LjY1MDE5ODQgMjAwLjI2ODcyMSAyMC4yOTU5ODIxIDE5OC4xMDg5MTIgMjIuNDQ3OTY2MyAxOTUuNDUzNTA3IDIyLjQ0Nzk2NjNMMTgxLjcxNzAzMSAyMi40NDc5NjYzIDE2Ni4yOTQ0MzYgMjIuNDQ3OTY2M0MxNjMuNDQ1NzIxIDIyLjQ0Nzk2NjMgMTYxLjEyNzY1IDIwLjEzODgzOTMgMTYxLjEyNzY1IDE3LjI5OTkwMDhMMTYxLjEyNzY1IDMuMDg0NDc0MjEgMTU0LjU1NjIyMSAzLjA4NDQ3NDIxIDE1NC41NTYyMjEgMTcuMjk5OTAwOEMxNTQuNTU2MjIxIDIzLjc0OTMwNTYgMTU5LjgyMjEyNiAyOC45OTU1ODUzIDE2Ni4yOTQ0MzYgMjguOTk1NTg1M0wxODEuNzE3MDMxIDI4Ljk5NTU4NTMgMTk1LjQ1MzUwNyAyOC45OTU1ODUzQzIwMS43MzI1MDcgMjguOTk1NTg1MyAyMDYuODQwMTUgMjMuOTA1OTAyOCAyMDYuODQwMTUgMTcuNjUwMTk4NCAyMDYuODQwMTUgMTEuMzk0NDk0IDIwMS43MzI1MDcgNi4zMDQ4MTE1MSAxOTUuNDUzNTA3IDYuMzA0ODExNTFNMTQxLjIzNjA0NSAxNy4zMDAxMTlDMTQxLjIzNjA0NSAyMC4yMzUwODkzIDEzOS4xMzIwOTMgMjIuNDQ4MTg0NSAxMzYuMzQxOTc0IDIyLjQ0ODE4NDVMMTM2LjM0MTk3NCAyOC45OTU4MDM2QzE0Mi43NzE1NjkgMjguOTk1ODAzNiAxNDcuODA3NDc0IDIzLjg1ODY1MDggMTQ3LjgwNzQ3NCAxNy4zMDAxMTlMMTQ3LjgwNzQ3NCA2LjE2OTE2NjY3IDE0MS4yMzYwNDUgNi4xNjkxNjY2NyAxNDEuMjM2MDQ1IDE3LjMwMDExOXpNMTI1LjU3NDg1MiAxNy42NTM5MDg3QzEyNS41NzQ4NTIgMjAuMjk3NTA5OSAxMjMuNDE2Njg2IDIyLjQ0Nzg1NzEgMTIwLjc2MzQ3MSAyMi40NDc4NTcxTDEwNy4yODc2NjIgMjIuNDQ3ODU3MUMxMDQuNjM0OTk1IDIyLjQ0Nzg1NzEgMTAyLjQ3NjI4MSAyMC4yOTc1MDk5IDEwMi40NzYyODEgMTcuNjUzOTA4N0wxMDIuNDc2MjgxIDMuMDg0MzY1MDggOTUuOTA0ODUyNCAzLjA4NDM2NTA4IDk1LjkwNDg1MjQgMTcuNjUzOTA4N0M5NS45MDQ4NTI0IDIzLjkwNzk3NjIgMTAxLjAxMTQgMjguOTk1NDc2MiAxMDcuMjg3NjYyIDI4Ljk5NTQ3NjJMMTIwLjc2MzQ3MSAyOC45OTU0NzYyQzEyNy4wMzk3MzMgMjguOTk1NDc2MiAxMzIuMTQ2MjgxIDIzLjkwNzk3NjIgMTMyLjE0NjI4MSAxNy42NTM5MDg3TDEzMi4xNDYyODEgMTIuNzkxNzU2IDEyNS41NzQ4NTIgMTIuNzkxNzU2IDEyNS41NzQ4NTIgMTcuNjUzOTA4N3oiLz4KICAgICAgPHBvbHlnb24gcG9pbnRzPSIxMTUuODQgOS41NDIgMTIyLjg4MiA5LjU0MiAxMjIuODgyIDMuMDg1IDExNS44NCAzLjA4NSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");

/***/ })

}]);
//# sourceMappingURL=src_Landing_index_js.js.map