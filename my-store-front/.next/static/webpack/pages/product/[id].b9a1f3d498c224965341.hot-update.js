"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/store-context */ "./context/store-context.js");
/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper-functions */ "./utils/helper-functions.js");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/product.module.css */ "./styles/product.module.css");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/prices */ "./utils/prices.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\manis\\Desktop\\gitts\\bakeryshop\\my-store-front\\pages\\product\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();










var Product = function Product(_ref) {
  _s();

  var product = _ref.product;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_2__.default),
      addVariantToCart = _useContext.addVariantToCart,
      cart = _useContext.cart;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    variantId: "",
    quantity: 0,
    size: ""
  }),
      options = _useState[0],
      setOptions = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product) {
      setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
    }
  }, [product]);

  var handleQtyChange = function handleQtyChange(action) {
    if (action === "inc") {
      if (options.quantity < product.variants.find(function (_ref2) {
        var id = _ref2.id;
        return id === options.variantId;
      }).inventory_quantity) setOptions({
        variantId: options.variantId,
        quantity: options.quantity + 1,
        size: options.size
      });
    }

    if (action === "dec") {
      if (options.quantity > 1) setOptions({
        variantId: options.variantId,
        quantity: options.quantity - 1,
        size: options.size
      });
    }
  };

  var handleAddToBag = function handleAddToBag() {
    addVariantToCart({
      variantId: options.variantId,
      quantity: options.quantity
    });
    if (product) setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("figure", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().placeholder),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          objectFit: "cover",
          layout: "fill",
          loading: "eager",
          height: 200,
          width: 200,
          src: product.thumbnail,
          alt: "".concat(product.title)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "price",
          children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, product.variants[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qty),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
              onClick: function onClick() {
                return handleQtyChange("dec");
              },
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().ticker),
              children: options.quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
              onClick: function onClick() {
                return handleQtyChange("inc");
              },
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().addbtn),
          onClick: function onClick() {
            return handleAddToBag();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: "Add to Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiShoppingBag, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().tabs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "tab-titles",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().tabtitle),
              children: "Product Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "tab-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
}; //create a Medusa client


_s(Product, "YsnEHj0ftMBwRyxCf0vaJR3LWkU=");

_c = Product;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmI5YTFmM2Q0OThjMjI0OTY1MzQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMvQixvQkFBbUNULGlEQUFVLENBQUNHLDJEQUFELENBQTdDO0FBQUEsTUFBUU8sZ0JBQVIsZUFBUUEsZ0JBQVI7QUFBQSxNQUEwQkMsSUFBMUIsZUFBMEJBLElBQTFCOztBQUNBLGtCQUE4QlosK0NBQVEsQ0FBQztBQUNyQ2EsSUFBQUEsU0FBUyxFQUFFLEVBRDBCO0FBRXJDQyxJQUFBQSxRQUFRLEVBQUUsQ0FGMkI7QUFHckNDLElBQUFBLElBQUksRUFBRTtBQUgrQixHQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFNQWxCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlXLE9BQUosRUFBYTtBQUNYTyxNQUFBQSxVQUFVLENBQUNYLHFFQUFZLENBQUNJLE9BQUQsQ0FBYixDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVk7QUFDbEMsUUFBSUEsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEIsVUFDRUgsT0FBTyxDQUFDRixRQUFSLEdBQ0FKLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0I7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtOLE9BQU8sQ0FBQ0gsU0FBM0I7QUFBQSxPQUF0QixFQUNHVSxrQkFITCxFQUtFTixVQUFVLENBQUM7QUFD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LG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0YsZUFrREU7QUFBUSxtQkFBUyxFQUFFWCwwRUFBbkI7QUFBa0MsaUJBQU8sRUFBRTtBQUFBLG1CQUFNaUIsY0FBYyxFQUFwQjtBQUFBLFdBQTNDO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsREYsZUFzREU7QUFBSyxtQkFBUyxFQUFFakIsd0VBQWhCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUVBLDRFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlHLE9BQU8sQ0FBQzZCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1GRCxDQWhJRCxFQWtJQTs7O0dBbElNOUI7O0tBQUFBOztBQTZKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgQmlTaG9wcGluZ0JhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3N0b3JlLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UsIHJlc2V0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXItZnVuY3Rpb25zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJpY2VzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRWYXJpYW50VG9DYXJ0LCBjYXJ0IH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdmFyaWFudElkOiBcIlwiLFxyXG4gICAgcXVhbnRpdHk6IDAsXHJcbiAgICBzaXplOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgc2V0T3B0aW9ucyhyZXNldE9wdGlvbnMocHJvZHVjdCkpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVF0eUNoYW5nZSA9IChhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24gPT09IFwiaW5jXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG9wdGlvbnMucXVhbnRpdHkgPFxyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gb3B0aW9ucy52YXJpYW50SWQpXHJcbiAgICAgICAgICAuaW52ZW50b3J5X3F1YW50aXR5XHJcbiAgICAgIClcclxuICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSArIDEsXHJcbiAgICAgICAgICBzaXplOiBvcHRpb25zLnNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uID09PSBcImRlY1wiKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnF1YW50aXR5ID4gMSlcclxuICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSAtIDEsXHJcbiAgICAgICAgICBzaXplOiBvcHRpb25zLnNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9CYWcgPSAoKSA9PiB7XHJcbiAgICBhZGRWYXJpYW50VG9DYXJ0KHtcclxuICAgICAgdmFyaWFudElkOiBvcHRpb25zLnZhcmlhbnRJZCxcclxuICAgICAgcXVhbnRpdHk6IG9wdGlvbnMucXVhbnRpdHksXHJcbiAgICB9KTtcclxuICAgIGlmIChwcm9kdWN0KSBzZXRPcHRpb25zKHJlc2V0T3B0aW9ucyhwcm9kdWN0KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZWhvbGRlcn0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2R1Y3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj57Zm9ybWF0UHJpY2VzKGNhcnQsIHByb2R1Y3QudmFyaWFudHNbMF0pfTwvcD5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBTaXplPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yc1wiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnZhcmlhbnRzXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMClcclxuICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3YuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zaXplYnRufSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnRpdGxlID09PSBvcHRpb25zLnNpemUgPyBzdHlsZXMuc2VsZWN0ZWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRJZDogdi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiB2LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3Rpb259PlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgUXVhbnRpdHk8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXR5fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdHlidG59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdHlDaGFuZ2UoXCJkZWNcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpY2tlcn0+e29wdGlvbnMucXVhbnRpdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF0eWJ0bn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF0eUNoYW5nZShcImluY1wiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZGJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9CYWcoKX0+XHJcbiAgICAgICAgICAgIDxzcGFuPkFkZCB0byBCYXNrZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxCaVNob3BwaW5nQmFnIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXRpdGxlc1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudGFidGl0bGV9PlByb2R1Y3QgRGVzY3JpcHRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vY3JlYXRlIGEgTWVkdXNhIGNsaWVudFxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcHJvZHVjdHNcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBjbGllbnQucHJvZHVjdHMubGlzdCgpO1xyXG5cclxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiB0aGUgcHJvZHVjdHNcclxuICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBpZDogcHJvZHVjdC5pZCB9LFxyXG4gIH0pKTtcclxuXHJcbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXHJcbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XHJcbn1cclxuXHJcbi8vIFRoaXMgYWxzbyBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gcGFyYW1zIGNvbnRhaW5zIHRoZSBwcm9kdWN0IGBpZGAuXHJcbiAgLy8gSWYgdGhlIHJvdXRlIGlzIGxpa2UgL3Byb2R1Y3QvcHJvZF8xLCB0aGVuIHBhcmFtcy5pZCBpcyAxXHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBhd2FpdCBjbGllbnQucHJvZHVjdHMucmV0cmlldmUocGFyYW1zLmlkKTtcclxuXHJcbiAgLy8gUGFzcyBwb3N0IGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHVjdCB9IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkltYWdlIiwiQmlTaG9wcGluZ0JhZyIsIlN0b3JlQ29udGV4dCIsImZvcm1hdFByaWNlIiwicmVzZXRPcHRpb25zIiwic3R5bGVzIiwiZm9ybWF0UHJpY2VzIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJhZGRWYXJpYW50VG9DYXJ0IiwiY2FydCIsInZhcmlhbnRJZCIsInF1YW50aXR5Iiwic2l6ZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiaGFuZGxlUXR5Q2hhbmdlIiwiYWN0aW9uIiwidmFyaWFudHMiLCJmaW5kIiwiaWQiLCJpbnZlbnRvcnlfcXVhbnRpdHkiLCJoYW5kbGVBZGRUb0JhZyIsImNvbnRhaW5lciIsImltYWdlIiwicGxhY2Vob2xkZXIiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImluZm8iLCJkZXRhaWxzIiwic2VsZWN0aW9uIiwicXR5IiwicXR5YnRuIiwidGlja2VyIiwiYWRkYnRuIiwidGFicyIsInRhYnRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9