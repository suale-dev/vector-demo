var demo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0px;\r\n  height: 100%;\r\n}\r\n\r\n.map {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #f2efe9;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: getMap, getMarker, updateOption, kks, updateUri, loadDataFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMap", function() { return getMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarker", function() { return getMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOption", function() { return updateOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kks", function() { return kks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUri", function() { return updateUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataFrom", function() { return loadDataFrom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var map4d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! map4d */ "map4d");
/* harmony import */ var map4d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(map4d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var mapInstance;
var markerInstance;
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        var _this = _super.call(this, props) || this;
        _this.weatherState = 0;
        _this.mapOption = {
            center: [106.704497, 10.769589],
            zoom: 17,
            geolocate: true,
            tilt: 40,
            bearing: -90,
            controls: true,
            mapType: map4d__WEBPACK_IMPORTED_MODULE_2__["MapType"].roadmap,
            shouldChangeMapMode: function () {
                return false;
            }
        };
        _this.mode = "2d";
        _this.mode = updateOption(_this.mapOption);
        return _this;
    }
    Demo.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "map", id: "mapdemo" })));
    };
    Demo.prototype.componentDidMount = function () {
        var _this = this;
        this.map = new map4d__WEBPACK_IMPORTED_MODULE_2__["Map"](document.getElementById("mapdemo"), this.mapOption);
        return;
        var weatherProvider = {
            refreshTime: 120,
            getWeather: function (location, callback) {
                console.log("request weather");
                loadDataFrom("https://api-test.map4d.vn/map/weather?lat=" + location.lat + "&lng=" + location.lng, function (data) {
                    var ret = JSON.parse(data);
                    var type = +((ret || {}).result || {}).type || 3;
                    var weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Sunny;
                    console.log("weather", ret);
                    switch (type) {
                        case 0:
                            weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Sunny;
                            break;
                        case 1:
                            weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Rainy;
                            break;
                        case 2:
                            weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Snowy;
                            break;
                        case 3:
                            weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Cloudy;
                            break;
                        default:
                            weather = map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].None;
                    }
                    callback(weather);
                });
            }
        };
        mapInstance = this.map;
        this.map.setWeather(map4d__WEBPACK_IMPORTED_MODULE_2__["Weather"].Live, weatherProvider);
        this.circle = new map4d__WEBPACK_IMPORTED_MODULE_2__["Circle"]({
            center: { lat: 10.773201, lng: 106.700147 },
            fillColor: "#ff0000",
            radius: 100,
            strokeWidth: 2.0,
            strokeColor: "#0000ff"
        });
        this.circle.setMap(this.map);
        this.marker = new map4d__WEBPACK_IMPORTED_MODULE_2__["Marker"]({
            title: "kem",
            snippet: "sniper test",
            position: this.map.getCamera().getTarget(),
            label: new map4d__WEBPACK_IMPORTED_MODULE_2__["MarkerLabel"]({
                text: "A",
                halo: false
            }),
            userInteractionEnabled: true
        });
        this.marker.setMap(this.map);
        this.polyline = new map4d__WEBPACK_IMPORTED_MODULE_2__["Polyline"]({
            path: [
                [106.699380, 10.772431],
                [106.700147, 10.773201],
                [106.700763, 10.771783],
                [106.701901, 10.772302],
                [106.701493, 10.773267],
                [106.702835, 10.773599]
            ],
            strokeColor: "#ff0000",
            style: "dotted",
            strokeOpacity: 1.0,
            strokeWidth: 10
        });
        this.polyline.setMap(this.map);
        this.polygon = new map4d__WEBPACK_IMPORTED_MODULE_2__["Polygon"]({
            fillOpacity: 0.1,
            userInteractionEnabled: true,
            paths: [[
                    { lat: 10.771749380684138, lng: 106.70001268386841 },
                    { lat: 10.768534727930506, lng: 106.70332789421082 },
                    { lat: 10.770684860129196, lng: 106.70641779899597 },
                    { lat: 10.77348844082262, lng: 106.70296311378479 },
                    { lat: 10.771749380684138, lng: 106.70001268386841 }
                ]]
        });
        this.polygon.setMap(this.map);
        var poi = new map4d__WEBPACK_IMPORTED_MODULE_2__["POI"]({
            position: { lat: 10.774434, lng: 106.701727 },
            title: "POI 1",
            titleColor: "#FF0000"
        });
        poi.setMap(this.map);
        var poi2 = new map4d__WEBPACK_IMPORTED_MODULE_2__["POI"]({
            position: { lat: 10.775491, lng: 106.700100 },
            title: "POI 2",
            titleColor: "#0000FF"
        });
        poi2.setMap(this.map);
        this.building = new map4d__WEBPACK_IMPORTED_MODULE_2__["Building"]({
            name: "User Building",
            position: { lat: 10.770932, lng: 106.697754 },
            model: "https://sw-hcm-1.vinadata.vn/v1/AUTH_d0ecabcbdcd74f6aa6ac9a5da528eb78/sdk/models/5d26e774bb542caaf439e605.obj",
            texture: "https://sw-hcm-1.vinadata.vn/v1/AUTH_d0ecabcbdcd74f6aa6ac9a5da528eb78/sdk/textures/5d26e775bb542caaf439e607.png",
        });
        this.building.setMap(this.map);
        markerInstance = this.marker;
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Polygon click pixel: ", args.pixel);
            _this.polygon.setPaths([[
                    { lat: 10.771749380684138, lng: 106.70001268386841 },
                    { lat: 10.770684860129196, lng: 106.70641779899597 },
                    { lat: 10.77348844082262, lng: 106.70296311378479 },
                    { lat: 10.771749380684138, lng: 106.70001268386841 }
                ]]);
        }, { polygon: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Marker click pixel: ", args.pixel);
        }, { marker: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Polyline click pixel: ", args.pixel);
        }, { polyline: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Circle click pixel: ", args.pixel);
        }, { circle: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("POI click: ", args);
        }, { poi: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Building click: ", args);
            _this.building.setSelected(true);
        }, { building: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Base Map POI click: ", args);
        }, { mappoi: true });
        this.clickMapsEventClick = this.map.addListener("click", function (args) {
            console.log("Base Map Building click: ", args);
            _this.map.setSelectedBuildings([args.building.id]);
        }, { mapbuilding: true });
        var tileOverlayOption = {
            getUrl: function (x, y, z, _3dMode) {
                return "https://tile.openstreetmap.de/" + z + "/" + x + "/" + y + ".png";
            },
        };
        this.tileOverlay = new map4d__WEBPACK_IMPORTED_MODULE_2__["TileOverlay"](tileOverlayOption);
        var groundOverlayOption = {
            getUrl: function (x, y, z, _3dMode) {
                return "https://tile.openstreetmap.de/" + z + "/" + x + "/" + y + ".png";
            },
            bounds: new map4d__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([106.70049582288681, 10.770223124020484], [106.79620742797852, 10.84915415719884]),
            zIndex: 1,
            override: false,
            visible: true
        };
        this.groundOverlay = new map4d__WEBPACK_IMPORTED_MODULE_2__["GroundOverlay"](groundOverlayOption);
        var groundOverlayOption2 = {
            getUrl: function (x, y, z, _3dMode) {
                return "https://maps.vnpost.vn/api/tm/" + z + "/" + x + "/" + y + "@2x.png?apikey=8fb3246c12d442525034be04bcd038f22e34571be4adbd4c";
            },
            bounds: new map4d__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([106.64909362792967, 10.729091838364623], [106.73286437988281, 10.818805855930771]),
            zIndex: 2,
            override: false
        };
        var groundOverlay2 = new map4d__WEBPACK_IMPORTED_MODULE_2__["GroundOverlay"](groundOverlayOption2);
        var poiOverlayOption = {
            getUrl: function (x, y, zoom) {
                return "https://api.map4d.vn/sdk/tile/v2/" + zoom + "/" + x + "/" + y + "?key=98fd21346d83bee24dc734231f7609c9&mode=2d";
            },
            parserData: function (text) {
                var data = JSON.parse(text);
                var poiDatas = [];
                var places = (data.result || {}).places || [];
                places.forEach(function (place) {
                    var poiData = {
                        id: "",
                        position: [0, 0],
                        title: ""
                    };
                    poiData.id = place.id;
                    poiData.title = place.name;
                    poiData.position = place.location;
                    poiData.zIndex = (place.rank || {}).value || 0;
                    var icon = place.icon || {};
                    poiData.type = icon.type;
                    poiData.titleColor = icon.color;
                    poiDatas.push(poiData);
                });
                return poiDatas;
            },
            prefixId: "p_overlay_",
            visible: true
        };
        this.poiOverlay = new map4d__WEBPACK_IMPORTED_MODULE_2__["POIOverlay"](poiOverlayOption);
        var buildingOverlayOption = {
            getUrl: function (x, y, z) {
                return "https://api.map4d.vn/sdk/tile/v2/" + z + "/" + x + "/" + y + "?mode=3d&key=d9f5568c4c512c562cf0cf9f8ff487ec";
            },
            parserData: function (text) {
                var data = JSON.parse(text);
                var buildingDatas = [];
                var objects = (data.result || {}).objects || [];
                objects.forEach(function (object) {
                    var buildingData = {
                        id: "",
                        name: "string",
                        position: [0, 0]
                    };
                    buildingData.id = object.id;
                    buildingData.name = object.name;
                    buildingData.position = object.location;
                    buildingData.scale = object.scale;
                    buildingData.bearing = object.bearing;
                    buildingData.elevation = object.elevation;
                    buildingData.startDate = object.startDate;
                    buildingData.endDate = object.endDate;
                    var model = object.model || {};
                    buildingData.model = model.objUrl;
                    buildingData.texture = model.textureUrl;
                    buildingData.coordinates = model.coordinates;
                    buildingData.height = model.height;
                    buildingDatas.push(buildingData);
                });
                return buildingDatas;
            },
            prefixId: "building-",
        };
        var buildingOverlay = new map4d__WEBPACK_IMPORTED_MODULE_2__["BuildingOverlay"](buildingOverlayOption);
        this.map.setBuildingsEnabled(true);
        this.map.setPOIsEnabled(true);
        this.map.setWaterEffect(true);
        this.map.enable3dMode(this.mode == "3d");
        this.clickMapsEventClick = this.map.addListener("idle", function (args) {
            updateUri(_this.map.getCamera(), _this.mode);
        });
        this.map.addListener(map4d__WEBPACK_IMPORTED_MODULE_2__["MapEvent"].modeChanged, function (args) {
            _this.mode = _this.map.is3dMode() ? "3d" : "2d";
            updateUri(_this.map.getCamera(), _this.mode);
        });
        this.clickMapsEventClick = this.map.addListener("longClick", function (args) {
            console.log("Map Long clicked: ");
            _this.groundOverlay.setMap(null);
            console.log(args);
        });
        loadDataFrom("http://localhost:6996/BB.txt", function (data) {
            _this.map.data.addGeoJson(data);
        });
    };
    return Demo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Demo, null), document.getElementById("root"));
function getMap() {
    return mapInstance;
}
function getMarker() {
    return markerInstance;
}
function updateOption(option) {
    var pathNames = document.location.pathname.split("/");
    var parameters = [];
    for (var _i = 0, pathNames_1 = pathNames; _i < pathNames_1.length; _i++) {
        var path = pathNames_1[_i];
        if (path[0] == "@") {
            parameters = path.substr(1).split(",");
        }
    }
    var mode = "2d";
    if (parameters.length == 6) {
        option.center[0] = parseFloat(parameters[1]);
        option.center[1] = parseFloat(parameters[0]);
        option.zoom = parseFloat(parameters[2]);
        option.tilt = parseFloat(parameters[3]);
        option.bearing = parseFloat(parameters[4]);
        mode = parseInt(parameters[5]) == 0 ? "2d" : "3d";
    }
    return mode;
}
var kks = null;
function updateUri(option, mode) {
    var cameraParams = "@" + option.getTarget().lat.toFixed(6) + "," + option.getTarget().lng.toFixed(6) + "," +
        (option.getZoom().toFixed(2) + ",") +
        (option.getTilt().toFixed(1) + ",") +
        (option.getBearing().toFixed(1) + ",") +
        ("" + (mode == "3d" ? 1 : 0));
    var pathName = document.location.pathname;
    var pathNames = pathName.split("/");
    for (var _i = 0, pathNames_2 = pathNames; _i < pathNames_2.length; _i++) {
        var path = pathNames_2[_i];
        if (path[0] == "@") {
            pathName = pathName.replace(path, cameraParams);
        }
    }
    if (pathName.indexOf("@") == -1) {
        pathName += cameraParams;
    }
    history.replaceState(null, null, encodeURI(pathName));
}
function loadDataFrom(url, callback) {
    var xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (xmlRequest.status == 200) {
                callback(this.responseText);
            }
            else {
                callback(null);
            }
        }
    };
    xmlRequest.open("GET", url);
    xmlRequest.send();
    return xmlRequest;
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "map4d":
/*!************************!*\
  !*** external "map4d" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = map4d;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });