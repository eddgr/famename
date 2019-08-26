webpackHotUpdatefamename("main",{

/***/ "./src/lib/components/containers/GenderSelectContainer.js":
/*!****************************************************************!*\
  !*** ./src/lib/components/containers/GenderSelectContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenderSelectContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function GenderSelectContainer(props) {
  var setProps = props.setProps,
      nameOutput = props.nameOutput;

  var handleGenderButton = function handleGenderButton(gender) {
    setProps({
      genderSelect: gender
    });
  };

  var renderNames = function renderNames() {
    return nameOutput.map(function (name, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, name);
    });
  };

  console.log('GenderSelectContainer props', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Select a gender: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleGenderButton('MALE');
    }
  }, "Male"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleGenderButton('FEMALE');
    }
  }, "Female"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleGenderButton('BOTH');
    }
  }, "Both")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderNames()));
}
GenderSelectContainer.defaultProps = {};
GenderSelectContainer.propTypes = {
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  nameOutput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1lbmFtZS8uL3NyYy9saWIvY29tcG9uZW50cy9jb250YWluZXJzL0dlbmRlclNlbGVjdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJHZW5kZXJTZWxlY3RDb250YWluZXIiLCJwcm9wcyIsInNldFByb3BzIiwibmFtZU91dHB1dCIsImhhbmRsZUdlbmRlckJ1dHRvbiIsImdlbmRlciIsImdlbmRlclNlbGVjdCIsInJlbmRlck5hbWVzIiwibWFwIiwibmFtZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTQSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFBQSxNQUMxQ0MsUUFEMEMsR0FDbEJELEtBRGtCLENBQzFDQyxRQUQwQztBQUFBLE1BQ2hDQyxVQURnQyxHQUNsQkYsS0FEa0IsQ0FDaENFLFVBRGdDOztBQUVqRCxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLE1BQU0sRUFBSTtBQUNqQ0gsWUFBUSxDQUFDO0FBQ0xJLGtCQUFZLEVBQUVEO0FBRFQsS0FBRCxDQUFSO0FBR0gsR0FKRDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFdBQU9KLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNuQyxhQUFPO0FBQUksV0FBRyxFQUFFQTtBQUFULFNBQWlCRCxJQUFqQixDQUFQO0FBQ0gsS0FGTSxDQUFQO0FBR0gsR0FKRDs7QUFLQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFBMkNYLEtBQTNDO0FBQ0EsU0FDSSx3RUFDSSw2RkFDcUIsc0VBRHJCLEVBRUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRyxrQkFBa0IsQ0FBQyxNQUFELENBQXhCO0FBQUE7QUFBakIsWUFGSixFQUdJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsa0JBQWtCLENBQUMsUUFBRCxDQUF4QjtBQUFBO0FBQWpCLGNBSEosRUFNSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1BLGtCQUFrQixDQUFDLE1BQUQsQ0FBeEI7QUFBQTtBQUFqQixZQU5KLENBREosRUFTSSx3RUFBTUcsV0FBVyxFQUFqQixDQVRKLENBREo7QUFhSDtBQUVEUCxxQkFBcUIsQ0FBQ2EsWUFBdEIsR0FBcUMsRUFBckM7QUFFQWIscUJBQXFCLENBQUNjLFNBQXRCLEdBQWtDO0FBQzlCWixVQUFRLEVBQUVhLGlEQUFTLENBQUNDLElBRFU7QUFFOUJiLFlBQVUsRUFBRVksaURBQVMsQ0FBQ0U7QUFGUSxDQUFsQyxDIiwiZmlsZSI6ImFhMzUyNWQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmRlclNlbGVjdENvbnRhaW5lcihwcm9wcykge1xuICAgIGNvbnN0IHtzZXRQcm9wcywgbmFtZU91dHB1dH0gPSBwcm9wcztcbiAgICBjb25zdCBoYW5kbGVHZW5kZXJCdXR0b24gPSBnZW5kZXIgPT4ge1xuICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICBnZW5kZXJTZWxlY3Q6IGdlbmRlcixcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlck5hbWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZU91dHB1dC5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntuYW1lfTwvbGk+O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdHZW5kZXJTZWxlY3RDb250YWluZXIgcHJvcHMnLCBwcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgZ2VuZGVyOiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdlbmRlckJ1dHRvbignTUFMRScpfT5NYWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHZW5kZXJCdXR0b24oJ0ZFTUFMRScpfT5cbiAgICAgICAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHZW5kZXJCdXR0b24oJ0JPVEgnKX0+Qm90aDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntyZW5kZXJOYW1lcygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5HZW5kZXJTZWxlY3RDb250YWluZXIuZGVmYXVsdFByb3BzID0ge307XG5cbkdlbmRlclNlbGVjdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5hbWVPdXRwdXQ6IFByb3BUeXBlcy5hcnJheSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9