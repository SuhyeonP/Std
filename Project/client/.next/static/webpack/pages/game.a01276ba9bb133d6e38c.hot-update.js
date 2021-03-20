webpackHotUpdate_N_E("pages/game",{

/***/ "./components/Game/playing.tsx":
/*!*************************************!*\
  !*** ./components/Game/playing.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Game/styles.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ \"./store/index.ts\");\n\n\nvar _jsxFileName = \"/Users/hyoni/PycharmProjects/rsp/client/components/Game/playing.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Playing = function Playing() {\n  _s();\n\n  var _gameStore$usersData, _gameStore$usersData2;\n\n  var _useStore = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      gameStore = _useStore.gameStore;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"PlayerInfo\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [(_gameStore$usersData = gameStore.usersData) === null || _gameStore$usersData === void 0 ? void 0 : _gameStore$usersData.userId1, ' ', \"player info\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [(_gameStore$usersData2 = gameStore.usersData) === null || _gameStore$usersData2 === void 0 ? void 0 : _gameStore$usersData2.userId2, ' ', \"player info\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Playing, \"emnijbvHC3l+f1xLuK7Vpt33YJg=\", false, function () {\n  return [_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Playing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(Playing));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Playing\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL3BsYXlpbmcudHN4PzYwYzAiXSwibmFtZXMiOlsiUGxheWluZyIsInVzZVN0b3JlIiwiZ2FtZVN0b3JlIiwidXNlcnNEYXRhIiwidXNlcklkMSIsInVzZXJJZDIiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxFQURHO0FBQUEsTUFDekJDLFNBRHlCLGFBQ3pCQSxTQUR5Qjs7QUFHakMsc0JBQ0UscUVBQUMsa0RBQUQ7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsMkNBQ0dBLFNBQVMsQ0FBQ0MsU0FEYix5REFDRyxxQkFBcUJDLE9BRHhCLEVBRUcsR0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUEsNENBQ0dGLFNBQVMsQ0FBQ0MsU0FEYiwwREFDRyxzQkFBcUJFLE9BRHhCLEVBRUcsR0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FuQkQ7O0dBQU1MLE87VUFDa0JDLDhDOzs7S0FEbEJELE87QUFxQlMscUVBQUFNLGdFQUFRLENBQUNOLE9BQUQsQ0FBdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvcGxheWluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB1c2VTdG9yZSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cbmNvbnN0IFBsYXlpbmcgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGdhbWVTdG9yZSB9ID0gdXNlU3RvcmUoKTtcblxuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJJbmZvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Z2FtZVN0b3JlLnVzZXJzRGF0YT8udXNlcklkMX1cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIHBsYXllciBpbmZvXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtnYW1lU3RvcmUudXNlcnNEYXRhPy51c2VySWQyfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgcGxheWVyIGluZm9cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BsYXllckluZm8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihQbGF5aW5nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/playing.tsx\n");

/***/ })

})