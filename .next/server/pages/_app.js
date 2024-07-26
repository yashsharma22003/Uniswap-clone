/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amoyChain\": () => (/* binding */ amoyChain),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_chains__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst amoyChain = {\n    id: 80002,\n    name: \"Amoy\",\n    network: \"amoy\",\n    nativeCurrency: {\n        name: \"Amoy Token\",\n        symbol: \"AMY\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://rpc-amoy.polygon.technology/\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Amoy Explorer\",\n            url: \"https://explorer.amoy.network\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider ,  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(/* [chain.hardhat],\r\n    [\r\n      jsonRpcProvider({\r\n        rpc: (chain) => {\r\n          if (chain.id === hardhat.id) {\r\n            return { http: 'http://127.0.0.1:8545/' } // Replace with your Hardhat node RPC URL\r\n          }\r\n          return null;\r\n        },\r\n        priority: 1,\r\n      }),\r\n    ]*/ [\n    amoyChain\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id !== amoyChain.id) return null;\n            return {\n                http: chain.rpcUrls.default\n            };\n        }\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custome Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yashs\\\\Desktop\\\\Uniswap-marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yashs\\\\Desktop\\\\Uniswap-marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yashs\\\\Desktop\\\\Uniswap-marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7QUFDVTtBQU9YO0FBRTBDO0FBQ2hCO0FBQ25CO0FBRWhDLE1BQU1XLFNBQVMsR0FBRztJQUN2QkMsRUFBRSxFQUFFLEtBQUs7SUFDVEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsY0FBYyxFQUFFO1FBQ2RGLElBQUksRUFBRSxZQUFZO1FBQ2xCRyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUUsc0NBQXNDO0tBQ2hEO0lBQ0RDLGNBQWMsRUFBRTtRQUNkRCxPQUFPLEVBQUU7WUFBRU4sSUFBSSxFQUFFLGVBQWU7WUFBRVEsR0FBRyxFQUFFLCtCQUErQjtTQUFFO0tBQ3pFO0lBQ0RDLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxRQUFRLEtBQUcsR0FBR2xCLHNEQUFlLENBRTFDO0lBYUVLO0NBQVUsRUFDWDtJQUNFRixlQUFlLENBQUM7UUFDZGdCLEdBQUcsRUFBRSxDQUFDcEIsS0FBSyxHQUFLO1lBQ2QsSUFBSUEsS0FBSyxDQUFDTyxFQUFFLEtBQUtELFNBQVMsQ0FBQ0MsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzNDO2dCQUFTYyxJQUFJLEVBQUVyQjs7U0FDaEI7S0FDRixDQUFDO0NBQ0gsQ0FFSjtBQUdELE1BQU0sRUFBRXNCO0lBQ05DO0lBQ0FMLHdFQUFNO0NBQ1AsQ0FBQztBQUlGLE1BQU1NLFdBQVcsR0FBR3RCLFlBQVksQ0FBQztJQUMvQnVCLFdBQVcsRUFBRTtJQUNiSCxVQUFVO0lBQ1ZILFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTU87O1FBRUZFLFdBQVcsRUFBRSw0RUFBUztRQUN0QkM7S0FDRDtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUUsRUFBRUMsR0FBQUEsbURBQVdDO0lBQzNCO1FBQ2VDLE1BQU07OztZQUNtQkMsSUFBQUEsbURBQU9SLENBQUFBLHFFQUFPOztnQkFDcEMsR0FBR00sU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7Q0FDSDtBQUlELGVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLW1hcmtldHBsYWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xyXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcblxyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiOyBcclxuaW1wb3J0IHsgaGFyZGhhdCB9IGZyb20gXCJ3YWdtaS9jaGFpbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhbW95Q2hhaW4gPSB7XHJcbiAgaWQ6IDgwMDAyLCAvLyBSZXBsYWNlIHdpdGggeW91ciBBbW95IGNoYWluIElEXHJcbiAgbmFtZTogJ0Ftb3knLFxyXG4gIG5ldHdvcms6ICdhbW95JyxcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgbmFtZTogJ0Ftb3kgVG9rZW4nLFxyXG4gICAgc3ltYm9sOiAnQU1ZJyxcclxuICAgIGRlY2ltYWxzOiAxOCxcclxuICB9LFxyXG4gIHJwY1VybHM6IHtcclxuICAgIGRlZmF1bHQ6ICdodHRwczovL3JwYy1hbW95LnBvbHlnb24udGVjaG5vbG9neS8nLCAvLyBSZXBsYWNlIHdpdGggeW91ciBBbW95IFJQQyBVUkxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBkZWZhdWx0OiB7IG5hbWU6ICdBbW95IEV4cGxvcmVyJywgdXJsOiAnaHR0cHM6Ly9leHBsb3Jlci5hbW95Lm5ldHdvcmsnIH0sIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGJsb2NrIGV4cGxvcmVyIFVSTFxyXG4gIH0sXHJcbiAgdGVzdG5ldDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciwgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICAgIFxyXG4gICAvKiBbY2hhaW4uaGFyZGhhdF0sXHJcbiAgICBbXHJcbiAgICAgIGpzb25ScGNQcm92aWRlcih7XHJcbiAgICAgICAgcnBjOiAoY2hhaW4pID0+IHtcclxuICAgICAgICAgIGlmIChjaGFpbi5pZCA9PT0gaGFyZGhhdC5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBodHRwOiAnaHR0cDovLzEyNy4wLjAuMTo4NTQ1LycgfSAvLyBSZXBsYWNlIHdpdGggeW91ciBIYXJkaGF0IG5vZGUgUlBDIFVSTFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmlvcml0eTogMSxcclxuICAgICAgfSksXHJcbiAgICBdKi9cclxuXHJcbiAgICBbYW1veUNoYWluXSxcclxuICAgIFtcclxuICAgICAganNvblJwY1Byb3ZpZGVyKHtcclxuICAgICAgICBycGM6IChjaGFpbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNoYWluLmlkICE9PSBhbW95Q2hhaW4uaWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuIHsgaHR0cDogY2hhaW4ucnBjVXJscy5kZWZhdWx0IH07XHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICBdXHJcblxyXG4pXHJcbiAgICBcclxuXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6IFwiQ3VzdG9tZSBEZXhcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlcixcclxufSk7XHJcblxyXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXHJcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoIHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJtZXJnZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWlkbmlnaHRUaGVtZSIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJqc29uUnBjUHJvdmlkZXIiLCJoYXJkaGF0IiwiYW1veUNoYWluIiwiaWQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiZGVmYXVsdCIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiaHR0cCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/chains");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();