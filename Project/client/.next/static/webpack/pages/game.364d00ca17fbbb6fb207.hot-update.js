webpackHotUpdate_N_E("pages/game",{

/***/ "./store/gameStore.ts":
/*!****************************!*\
  !*** ./store/gameStore.ts ***!
  \****************************/
/*! exports provided: GameStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameStore\", function() { return GameStore; });\n/* harmony import */ var _Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\n\n\n\nvar GameStore = /*#__PURE__*/function () {\n  function GameStore() {\n    Object(_Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GameStore);\n\n    Object(_Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"rspArray\", ['./rock.png', 'paper.png', './scissor.png']);\n\n    Object(_Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"usersData\", void 0);\n\n    Object(mobx__WEBPACK_IMPORTED_MODULE_3__[\"makeAutoObservable\"])(this);\n  }\n\n  Object(_Users_hyoni_PycharmProjects_rsp_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GameStore, [{\n    key: \"setUsers\",\n    value: function setUsers(data) {\n      this.usersData = data;\n    }\n  }]);\n\n  return GameStore;\n}();\nvar gameStore = new GameStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameStore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZ2FtZVN0b3JlLnRzPzZlMzMiXSwibmFtZXMiOlsiR2FtZVN0b3JlIiwibWFrZUF1dG9PYnNlcnZhYmxlIiwiZGF0YSIsInVzZXJzRGF0YSIsImdhbWVTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxTQUFiO0FBS0ksdUJBQWM7QUFBQTs7QUFBQSxzTEFKSCxDQUFDLFlBQUQsRUFBZSxXQUFmLEVBQTRCLGVBQTVCLENBSUc7O0FBQUE7O0FBQ1pDLG1FQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRDs7QUFQTDtBQUFBO0FBQUEsNkJBU2FDLElBVGIsRUFTZ0M7QUFDMUIsV0FBS0MsU0FBTCxHQUFpQkQsSUFBakI7QUFDRDtBQVhMOztBQUFBO0FBQUE7QUFjQSxJQUFNRSxTQUFTLEdBQUcsSUFBSUosU0FBSixFQUFsQjtBQUVlSSx3RUFBZiIsImZpbGUiOiIuL3N0b3JlL2dhbWVTdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgR2FtZVN0b3JlIHtcbiAgICByc3BBcnJheSA9IFsnLi9yb2NrLnBuZycsICdwYXBlci5wbmcnLCAnLi9zY2lzc29yLnBuZyddO1xuXG4gICAgdXNlcnNEYXRhOiBVc2VycyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFVzZXJzKGRhdGE6IFVzZXJzKTogdm9pZCB7XG4gICAgICB0aGlzLnVzZXJzRGF0YSA9IGRhdGE7XG4gICAgfVxufVxuXG5jb25zdCBnYW1lU3RvcmUgPSBuZXcgR2FtZVN0b3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/gameStore.ts\n");

/***/ })

})