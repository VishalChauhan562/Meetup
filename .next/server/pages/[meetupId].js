module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: MeetupDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MeetupDetail\", function() { return MeetupDetail; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/vishalchauhan/Documents/NextJs/MeetUp/components/meetups/MeetupDetail.js\";\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.details,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.img,\n      alt: \"Image details\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlscyIsImltZyIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDckMsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLCtEQUFPLENBQUNDLE9BQTVCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0csR0FBaEI7QUFBcUIsU0FBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUFJSCxLQUFLLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUlKLEtBQUssQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQSxnQkFBSUwsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVRNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSBhbHQ9XCJJbWFnZSBkZXRhaWxzXCIgLz5cbiAgICAgIDxwPntwcm9wcy50aXRsZX08L3A+XG4gICAgICA8cD57cHJvcHMuYWRkcmVzc308L3A+XG4gICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"details\": \"MeetupDetail_details__tdjSt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbHNcIjogXCJNZWV0dXBEZXRhaWxfZGV0YWlsc19fdGRqU3RcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _jsxFileName = \"/Users/vishalchauhan/Documents/NextJs/MeetUp/pages/[meetupId]/index.js\";\n\n\nconst MeetupDetails = ({\n  meetUpImg,\n  meetUpTitle,\n  meetUpAddress,\n  meetUpDescription\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"MeetupDetail\"], {\n    img: meetUpImg,\n    title: meetUpTitle,\n    address: meetUpAddress,\n    description: meetUpDescription\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  return {\n    fallback: false,\n    paths: [{\n      params: {\n        meetupId: 'm1'\n      }\n    }, {\n      params: {\n        meetupId: 'm2'\n      }\n    }]\n  };\n}\nasync function getStaticProps(context) {\n  let meetup_id = context.params.meetupId;\n  console.log(\"meetupId====>\", meetup_id);\n  return {\n    props: {\n      meetUpImg: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg',\n      meetUptitle: 'First meetup',\n      meetUpAddress: 'Some street, some place',\n      meetUpDescription: 'Nice Meetup'\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIm1lZXRVcEltZyIsIm1lZXRVcFRpdGxlIiwibWVldFVwQWRkcmVzcyIsIm1lZXRVcERlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJtZWV0dXBfaWQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtZWV0VXB0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFDQyxXQUFEO0FBQVdDLGFBQVg7QUFBdUJDLGVBQXZCO0FBQXFDQztBQUFyQyxDQUFELEtBQTZEO0FBQy9FLHNCQUNJLHFFQUFDLDZFQUFEO0FBQ0ksT0FBRyxFQUFFSCxTQURUO0FBRUksU0FBSyxFQUFFQyxXQUZYO0FBR0ksV0FBTyxFQUFFQyxhQUhiO0FBSUksZUFBVyxFQUFFQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVREOztBQVdPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDbkMsU0FBTztBQUNIQyxZQUFRLEVBQUcsS0FEUjtBQUVIQyxTQUFLLEVBQUcsQ0FDSjtBQUNJQyxZQUFNLEVBQUc7QUFDTEMsZ0JBQVEsRUFBRztBQUROO0FBRGIsS0FESSxFQU1KO0FBQ0lELFlBQU0sRUFBRztBQUNMQyxnQkFBUSxFQUFHO0FBRE47QUFEYixLQU5JO0FBRkwsR0FBUDtBQWVIO0FBRU0sZUFBZUMsY0FBZixDQUErQkMsT0FBL0IsRUFBdUM7QUFDMUMsTUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUNILE1BQVIsQ0FBZUMsUUFBL0I7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE0QkYsU0FBNUI7QUFFQSxTQUFPO0FBQ0hHLFNBQUssRUFBRztBQUNKZCxlQUFTLEVBQUcsaUZBRFI7QUFFSmUsaUJBQVcsRUFBRyxjQUZWO0FBR0piLG1CQUFhLEVBQUcseUJBSFo7QUFJSkMsdUJBQWlCLEVBQUc7QUFKaEI7QUFETCxHQUFQO0FBU0g7QUFFY0osNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVldHVwRGV0YWlsIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIlxuXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHttZWV0VXBJbWcsbWVldFVwVGl0bGUsbWVldFVwQWRkcmVzcyxtZWV0VXBEZXNjcmlwdGlvbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVldHVwRGV0YWlsXG4gICAgICAgICAgICBpbWc9e21lZXRVcEltZ31cbiAgICAgICAgICAgIHRpdGxlPXttZWV0VXBUaXRsZX1cbiAgICAgICAgICAgIGFkZHJlc3M9e21lZXRVcEFkZHJlc3N9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17bWVldFVwRGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmFsbGJhY2sgOiBmYWxzZSxcbiAgICAgICAgcGF0aHMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1zIDoge1xuICAgICAgICAgICAgICAgICAgICBtZWV0dXBJZCA6ICdtMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVldHVwSWQgOiAnbTInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKGNvbnRleHQpe1xuICAgIGxldCBtZWV0dXBfaWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZFxuICAgIGNvbnNvbGUubG9nKFwibWVldHVwSWQ9PT09PlwiLG1lZXR1cF9pZCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHMgOiB7XG4gICAgICAgICAgICBtZWV0VXBJbWcgOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hL2E3L1ByYWd1ZV8lMjg2MzY1MTE5NzM3JTI5LmpwZycsXG4gICAgICAgICAgICBtZWV0VXB0aXRsZSA6ICdGaXJzdCBtZWV0dXAnLFxuICAgICAgICAgICAgbWVldFVwQWRkcmVzcyA6ICdTb21lIHN0cmVldCwgc29tZSBwbGFjZScsXG4gICAgICAgICAgICBtZWV0VXBEZXNjcmlwdGlvbiA6ICdOaWNlIE1lZXR1cCdcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });