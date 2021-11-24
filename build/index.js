/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


 //, FlexItem

wp.blocks.registerBlockType('ourplugin/joulukalenteri', {
  title: 'Joulukalenteri',
  icon: 'smiley',
  category: 'common',
  attributes: {
    day1: {
      type: 'object',
      default: {
        day: 1,
        content: '',
        href: ''
      }
    },
    day2: {
      type: 'object',
      default: {
        day: 2,
        content: '',
        href: ''
      }
    },
    day3: {
      type: 'object',
      default: {
        day: 3,
        content: '',
        href: ''
      }
    },
    day4: {
      type: 'object',
      default: {
        day: 4,
        content: '',
        href: ''
      }
    },
    day5: {
      type: 'object',
      default: {
        day: 5,
        content: '',
        href: ''
      }
    },
    day6: {
      type: 'object',
      default: {
        day: 6,
        content: '',
        href: ''
      }
    },
    day7: {
      type: 'object',
      default: {
        day: 7,
        content: '',
        href: ''
      }
    },
    day8: {
      type: 'object',
      default: {
        day: 8,
        content: '',
        href: ''
      }
    },
    day9: {
      type: 'object',
      default: {
        day: 9,
        content: '',
        href: ''
      }
    },
    day10: {
      type: 'object',
      default: {
        day: 10,
        content: '',
        href: ''
      }
    },
    day11: {
      type: 'object',
      default: {
        day: 11,
        content: '',
        href: ''
      }
    },
    day12: {
      type: 'object',
      default: {
        day: 12,
        content: '',
        href: ''
      }
    },
    day13: {
      type: 'object',
      default: {
        day: 13,
        content: '',
        href: ''
      }
    },
    day14: {
      type: 'object',
      default: {
        day: 14,
        content: '',
        href: ''
      }
    },
    day15: {
      type: 'object',
      default: {
        day: 15,
        content: '',
        href: ''
      }
    },
    day16: {
      type: 'object',
      default: {
        day: 16,
        content: '',
        href: ''
      }
    },
    day17: {
      type: 'object',
      default: {
        day: 17,
        content: '',
        href: ''
      }
    },
    day18: {
      type: 'object',
      default: {
        day: 18,
        content: '',
        href: ''
      }
    },
    day19: {
      type: 'object',
      default: {
        day: 19,
        content: '',
        href: ''
      }
    },
    day20: {
      type: 'object',
      default: {
        day: 20,
        content: '',
        href: ''
      }
    },
    day21: {
      type: 'object',
      default: {
        day: 21,
        content: '',
        href: ''
      }
    },
    day22: {
      type: 'object',
      default: {
        day: 22,
        content: '',
        href: ''
      }
    },
    day23: {
      type: 'object',
      default: {
        day: 23,
        content: '',
        href: ''
      }
    },
    day24: {
      type: 'object',
      default: {
        day: 24,
        content: '',
        href: ''
      }
    }
  },
  edit: AdminSide,
  save: function (props) {
    return null;
  }
});

function AdminSide(props) {
  function renderDayOne() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `Päivä ${props.attributes.day1.day}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Sis\xE4lt\xF6: ",
      value: props.attributes.day1.content,
      onChange: value => {
        props.setAttributes({
          day1: { ...props.attributes.day1,
            content: value
          }
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Linkki: ",
      value: props.attributes.day1.href,
      onChange: value => {
        props.setAttributes({
          day1: { ...props.attributes.day1,
            href: value
          }
        });
      }
    })));
  }

  function renderDayTwo() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `Päivä ${props.attributes.day2.day}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Sis\xE4lt\xF6: ",
      value: props.attributes.day2.content,
      onChange: value => {
        props.setAttributes({
          day2: { ...props.attributes.day2,
            content: value
          }
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Linkki: ",
      value: props.attributes.day2.href,
      onChange: value => {
        props.setAttributes({
          day2: { ...props.attributes.day2,
            href: value
          }
        });
      }
    })));
  }

  function renderDayThree() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `Päivä ${props.attributes.day3.day}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Sis\xE4lt\xF6: ",
      value: props.attributes.day3.content,
      onChange: value => {
        props.setAttributes({
          day3: { ...props.attributes.day3,
            content: value
          }
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Linkki: ",
      value: props.attributes.day3.href,
      onChange: value => {
        props.setAttributes({
          day3: { ...props.attributes.day3,
            href: value
          }
        });
      }
    })));
  }

  function renderDay(dayNumber) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      value: props.attributes
    }));
  }

  console.log(props.attributes, 'attrs');

  function renderDays() {}

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Joulukalenteri admin"), renderDayOne(), renderDayTwo(), renderDayThree());
} // function renderWindows2() {
//   const windows = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//   ];
//   return windows.map((window) => {
//     return (
//       <div key={window}>
//         <input
//           value={props.attributes.windows2[window].content || ''}
//           onChange={(e) => {
//             const newWindows = props.attributes.windows2;
//             newWindows[window].content = e.target.value;
//             props.setAttributes({ windows2: newWindows });
//           }}
//         />
//       </div>
//     );
//   });
// }
// { day: 5 },
//         { day: 6 },
//         { day: 7 },
//         { day: 8 },
//         { day: 9 },
//         { day: 10 },
//         { day: 11 },
//         { day: 12 },
//         { day: 13 },
//         { day: 14 },
//         { day: 15 },
//         { day: 16 },
//         { day: 17 },
//         { day: 18 },
//         { day: 19 },
//         { day: 20 },
//         { day: 21 },
//         { day: 22 },
//         { day: 23 },
//         { day: 24 },
// windows: {
//   type: 'array',
//   default: [
//     { day: 1, content: '' },
//     { day: 2, content: '' },
//     { day: 3, content: '' },
//     { day: 4, content: '' },
//   ],
// },
// let defaultWindows = [];
// for (let i = 0; i < 24; i++) {
//   const window = { day: i + 1, header: null, content: null, href: null };
//   defaultWindows = defaultWindows.concat(window);
// }
// const defaultWindows2 = defaultWindows;
// function renderWindows() {
//   return props.attributes.windows.map((window) => {
//     return (
//       <div key={window.day}>
//         <Flex>
//           <p>{`Päivä ${window.day}`}</p>
//           <FlexBlock>
//             <input
//               value={window.content}
//               onChange={(e) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1].content = e.target.value;
//                 props.setAttributes({ windows: uudetLuukut });
//                 console.log(props.attributes.windows, 'props');
//               }}
//             />
//             <TextControl
//               label="Sisältö: "
//               value={props.attributes.windows[window.day - 1].content}
//               onChange={(newValue) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1] = {
//                   ...uudetLuukut[window.day - 1],
//                   content: newValue,
//                 };
//                 props.setAttributes({ windows: uudetLuukut });
//                 console.log(props.attributes.windows, 'props');
//               }}
//             ></TextControl>
//           </FlexBlock>
//           <FlexBlock>
//             <TextControl
//               label="Linkki: "
//               value={window.href}
//               onChange={(value) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1].href = value;
//                 props.setAttributes({ windows: uudetLuukut });
//               }}
//             ></TextControl>
//           </FlexBlock>
//         </Flex>
//       </div>
//     );
//   });
// }
}();
/******/ })()
;
//# sourceMappingURL=index.js.map