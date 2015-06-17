(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsMultiSelect = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}

}());

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

// import {CHECKBOX} from "../../constants";
var CHECKBOX = "hire-checkbox";

var Checkbox = (function (_React$Component) {
	function Checkbox() {
		_classCallCheck(this, Checkbox);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Checkbox, _React$Component);

	_createClass(Checkbox, [{
		key: "handleClick",
		value: function handleClick() {
			this.props.onChange(!this.props.value);
		}
	}, {
		key: "render",
		value: function render() {
			var label = undefined;

			if (this.props.label) {
				label = _react2["default"].createElement(
					"label",
					null,
					this.props.label
				);
			}

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])(CHECKBOX, { checked: this.props.value }),
					onClick: this.handleClick.bind(this) },
				_react2["default"].createElement(
					"svg",
					{ viewBox: "0 0 220 220" },
					_react2["default"].createElement("rect", {
						fillOpacity: "0",
						height: "190",
						rx: "20",
						ry: "20",
						stroke: "black",
						strokeWidth: "20",
						width: "190",
						x: "15",
						y: "15" }),
					_react2["default"].createElement("rect", {
						height: "200",
						width: "20",
						x: "180",
						y: "0" }),
					_react2["default"].createElement("rect", {
						height: "20",
						width: "200",
						x: "0",
						y: "180" })
				),
				label
			);
		}
	}]);

	return Checkbox;
})(_react2["default"].Component);

Checkbox.defaultProps = {
	value: false
};

Checkbox.propTypes = {
	label: _react2["default"].PropTypes.string,
	onChange: _react2["default"].PropTypes.func.isRequired,
	value: _react2["default"].PropTypes.bool
};

exports["default"] = Checkbox;
module.exports = exports["default"];

},{"classnames":1,"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsCheckbox = require("hire-forms-checkbox");

var _hireFormsCheckbox2 = _interopRequireDefault(_hireFormsCheckbox);

var MultiSelect = (function (_React$Component) {
	function MultiSelect() {
		_classCallCheck(this, MultiSelect);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(MultiSelect, _React$Component);

	_createClass(MultiSelect, [{
		key: "handleChange",
		value: function handleChange(index, checked) {
			var option = this.props.options[index];

			if (checked) {
				this.props.values.push(option);
				this.props.onChange(this.props.values);
			} else {
				var valueIndex = this.props.values.indexOf(option);
				this.props.values.splice(valueIndex, 1);
				this.props.onChange(this.props.values);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var options = this.props.options.map(function (option, index) {
				return _react2["default"].createElement(_hireFormsCheckbox2["default"], {
					key: index,
					label: option,
					onChange: _this.handleChange.bind(_this, index),
					value: _this.props.values.indexOf(option) > -1 });
			});

			return _react2["default"].createElement(
				"div",
				{ className: "hire-multi-select" },
				options
			);
		}
	}]);

	return MultiSelect;
})(_react2["default"].Component);

MultiSelect.defaultProps = {
	options: [],
	values: []
};

MultiSelect.propTypes = {
	onChange: _react2["default"].PropTypes.func.isRequired,
	options: _react2["default"].PropTypes.array,
	placeholder: _react2["default"].PropTypes.string,
	values: _react2["default"].PropTypes.array
};

exports["default"] = MultiSelect;
module.exports = exports["default"];

},{"hire-forms-checkbox":2,"react":"react"}]},{},[3])(3)
});