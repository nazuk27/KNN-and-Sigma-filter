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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/runtime.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset_) {
  var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = uuidToBytes(namespace);
    }

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./static/runtime.js":
/*!***************************!*\
  !*** ./static/runtime.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
let data = [];
let platforms = [];
let systems = [];
let lru_data = [];
let system_option_list = [];
let all_runtime_data = [];
let shortfalls = ['BIT Efficacy', 'Tools', 'Documents', 'Training of crew'];
let current_this;

$(document).ready(function () {
  let permission = sessionStorage.permission;
  let platform = sessionStorage.associated_platform;
  let platform_logo_html = `${platform} <sub style="font-size: small">${sessionStorage.platform_rank}</sub>`;
  $('.mtu-logo').html(platform_logo_html);
  ajaxGet('/get_all_reportId', {
    'query': 1
  }, data_callBack);
});

const data_callBack = cdata => {
  data = cdata;
  let system_data = JSON.parse(data['system_data']);
  platforms = new Set(system_data.map(x => x.PLATFORM));
  systems = new Set(system_data.map(x => x.system));
  systems = [...systems];
  platforms = [...platforms];
  system_populate();
  populatePlatform();
  ajaxGet('/get_runtime', {}, get_runtime_callback);
};

const populatePlatform = () => {
  let selectedSystem = $('#system_').val();
  $('#platform_').html('');
  let filtered_platforms = JSON.parse(data["system_data"]).filter(x => x.system === selectedSystem);
  let platform_options_html = ``;
  $.each(platforms, (p_index, p_val) => {
    platform_options_html += `<option>${p_val}</option>`;
  });
  $('#platform_').append(platform_options_html);
};

const system_populate = () => {
  system_option_list = []; // let platform = $('#platform_').val();
  // let filtered_system = JSON.parse(data["system_data"]).filter(x => x.PLATFORM === platform);

  $('#system_').html('');
  let system_html = ``;
  $.each(systems, (index, system) => {
    system_html += `<option>${system}</option>`;
  });
  $('#system_').append(system_html);
  let selectedSystem = $('#system_').val();
  changeEodSerialDisplay(selectedSystem);
};

const get_runtime_callback = runtime_d => {
  all_runtime_data = runtime_d["runtime_data"];
  $('#overlay').css('display', 'none');
};

$('#runtime_clock_show').click(() => {
  clock_table_html();
  populateHistoricalData();
});

const clock_table_html = () => {
  let wrapper = $('.runtime_table');
  wrapper.html('');
  let tr_html = ``;
  let selected_system = $('#system_').val();
  let platform = $('#platform_').val();
  let table_html_;

  if (selected_system === 'EOD') {
    table_html_ = populate_EPS();
  } else if (selected_system === 'MFSTAR') {
    table_html_ = populate_MFSTAR();
  } else if (selected_system === 'WCS') {
    table_html_ = populate_WCS();
  }

  let table_html = `<div>
                      <table class="table table-dark table-hover table-striped">
                      <thead style="text-align: center">${table_html_[0]}</thead>
                        <tbody>
                            ${table_html_[1]}
                        </tbody>
                      </table>
                      <button class="mb-2 mr-2 btn btn-danger" style="float: right;display: none" id="discardSaveRuntime">Discard Error and Save</button>
                      <button class="mb-2 mr-2 btn btn-primary" style="float: right;" id="save_clock_runtime">Save Updated Runtime</button>
                        </div>`;
  wrapper.append(table_html);
  $('#date').datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'MM yy',
    onClose: function (dateText, inst) {
      $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
    }
  }); // $('#date').click(() => {
  //     alert('aHello')})
}; //
// $(document).on('click', '.add_clock_input', function () {
//     let dialog = document.getElementById('favDialog');
//     dialog.showModal();
//     current_this = this;
// });
// dialog confirmBtn click


$('#confirmBtn').click(() => {
  let clk_name = $('#dialog_input_val').val();
  let prev_tds_length = $(current_this).closest('tr').children().length;
  let new_td_html = `<td><input placeholder="${clk_name}"  uuid="#"/></td>`;
  $(current_this).closest('tr td').before(new_td_html);
}); //Saving Runtime

$(document).on('click', '#save_clock_runtime', () => {
  let all_tr = $('.runtime_table table tbody tr');
  let runtime_data_ = [];
  let platform = $('#platform_').val();
  let system = $('#system_').val();
  let serial_num = null;
  let isClockGreater = true;

  if (system === 'EOD') {
    serial_num = $('#eod_serial_num').val();
  }

  $.each(all_tr, (tr_index, tr_val) => {
    let all_tds = $(tr_val).find('td');
    let clock_data = [];
    $.each(all_tds, (c_index, c_val) => {
      if (c_index > 0) {
        let clock_name = $(c_val).find('input').attr('placeholder');
        let rD_ = all_runtime_data.filter(x => x.clock_name === clock_name && x.serial_num === serial_num);
        sortDate(rD_);
        rD_ = rD_[rD_.length - 1];
        let clock_val = $(c_val).find('input').val();

        if (clock_val < rD_.runtime_val) {
          isClockGreater = false;
        }

        let moment_date = moment($('#date').val());
        let current_date = moment_date.get('date') + '-' + (moment_date.get('month') + 1) + '-' + moment_date.get('year');
        let uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        clock_data.push({
          'clock_name': clock_name,
          'clock_val': clock_val,
          'date': current_date,
          'uuid': uuid
        });
      }
    });
    runtime_data_.push({
      platform: platform,
      system: system,
      clock_data: clock_data,
      serialNum: serial_num
    });
  });

  if (isClockGreater === true) {
    save_clock_data(runtime_data_);
  } else {
    toastr.error("Please check the clock time should be greater than previous value!. If you still want to proceed please click on Red Button.");
    $('#save_clock_runtime').css('display', 'none');
    $('#discardSaveRuntime').css('display', 'block');
  }
});
$(document).on('click', '#discardSaveRuntime', () => {
  let all_tr = $('.runtime_table table tbody tr');
  let runtime_data_ = [];
  let platform = $('#platform_').val();
  let system = $('#system_').val();
  let serial_num = null;
  let isClockGreater = true;

  if (system === 'EOD') {
    serial_num = $('#eod_serial_num').val();
  }

  $.each(all_tr, (tr_index, tr_val) => {
    let all_tds = $(tr_val).find('td');
    let clock_data = [];
    $.each(all_tds, (c_index, c_val) => {
      if (c_index > 0) {
        let clock_name = $(c_val).find('input').attr('placeholder');
        let clock_val = $(c_val).find('input').val();
        let moment_date = moment($('#date').val());
        let current_date = moment_date.get('date') + '-' + (moment_date.get('month') + 1) + '-' + moment_date.get('year');
        let uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        clock_data.push({
          'clock_name': clock_name,
          'clock_val': clock_val,
          'date': current_date,
          'uuid': uuid
        });
      }
    });
    runtime_data_.push({
      platform: platform,
      system: system,
      clock_data: clock_data,
      serialNum: serial_num
    });
  });
  save_clock_data(runtime_data_);
});

const save_clock_data = clock_data => {
  ajaxPost('/save_runtime', clock_data, save_runtime_callback);
};

const save_runtime_callback = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
    window.location.reload(); // let wrapper = $('.runtime_table');
    // wrapper.html('');
    // $('.runtime_history_').css('display', 'none');
  }
}; //Platform select on change.
// $('#platform_').on('change', () => {
//    system_populate();
// });
//System change function to enable serial number select field in case of EOD and hide in other cases.


$('#system_').on('change', () => {
  let selectedSystem = $('#system_').val();
  populatePlatform();
  changeEodSerialDisplay(selectedSystem);
});

const changeEodSerialDisplay = selectedSystem => {
  if (selectedSystem === 'EOD') {
    $('.eod-serial-div').css('display', 'block');
    $('.platform_div').css('display', 'none');
  } else {
    $('.eod-serial-div').css('display', 'none');
    $('.platform_div').css('display', 'block');
  }
};

const populateHistoricalData = () => {
  $('.runtime_history_').css('display', 'block');
  let platform = $('#platform_').val();
  let system = $('#system_').val();
  let serial_num = null;

  if (system === 'EOD') {
    serial_num = $('#eod_serial_num').val();
  }

  ;
  let filtered_data = all_runtime_data.filter(x => x.system === system && x.platform === platform && x.serial_num === serial_num);
  let table_head_wrapper = $('.runtime_history_ table thead');
  let table_body_wrapper = $('.runtime_history_ table tbody');
  table_body_wrapper.html('');
  table_head_wrapper.html('');

  if (filtered_data.length > 0) {
    sortDate(filtered_data);
    let tabel_html;

    if (system === 'EOD') {
      tabel_html = populateHistoricalEPS(filtered_data);
    } else if (system === 'MFSTAR') {
      tabel_html = populateHistoricalMFSTAR(filtered_data);
    } else if (system === 'WCS') {
      tabel_html = populateHistoricalWCS(filtered_data);
    }

    if (tabel_html) {
      table_head_wrapper.append(tabel_html[0]);
      table_body_wrapper.append(tabel_html[1]);
    }
  }
}; // Creating functions for each system for populating table header and body.


const populate_EPS = () => {
  let platform = $('#platform_').val();
  let thead_html = `<th>Date</th>
                        <th>EOD</th>
                        `;
  let tbody_html = `<tr>
                            <td><input class="form-control" id="date"></td>
                            <td><input class="form-control" placeholder="EOD" /></td>
                        </tr>`;
  return [thead_html, tbody_html];
};

const populate_MFSTAR = () => {
  let platform = $('#platform_').val();
  let thead_html = `<th>Date</th><th>MFSTAR Master</th>
                        `;
  let tbody_html = `<tr>    
                            <td><input class="form-control" id="date"></td>
                            <td><input class="form-control" placeholder="MFSTAR Master" /></td>
                        </tr>`;
  return [thead_html, tbody_html];
};

const populate_WCS = () => {
  let platform = $('#platform_').val();
  let thead_html = `  <th>Date</th>  
                        <th>MFC 1</th>
                        <th>MFC 2</th>
                        <th>MFC 3</th>
                        <th>UPS FWD</th>
                        <th>UPS AFT</th>
                        <th>GCU</th>
                        <th>LCU</th>
                        <th>DLU</th>
                        `;
  let tbody_html = `<tr>  <td><input class="form-control" id="date"></td>  
                            <td><input class="form-control" placeholder="MFC 1" /></td>
                            <td><input class="form-control" placeholder="MFC 2" /></td>
                            <td><input class="form-control mfc3" placeholder="MFC 3" /></td>
                            <td><input class="form-control" placeholder="UPS FWD" /></td>
                            <td><input class="form-control" placeholder="UPS AFT" /></td>
                            <td><input class="form-control gcu" placeholder="GCU" disabled /></td>
                            <td><input class="form-control lcu" placeholder="LCU" disabled /></td>
                            <td><input class="form-control dlu" placeholder="DLU" disabled /></td>
                        </tr>`;
  return [thead_html, tbody_html];
}; //Populating table head and body for historical data.


const populateHistoricalEPS = filtered_data => {
  let thead_html = `  
                        <th>S.R.No.</th>
                        <th>Date Submitted</th>  
                        <th>EOD</th>
                        `;
  let tbody_html = ``;
  let count = 0;

  do {
    let first2pts = filtered_data.slice(0, 1);
    count++;
    filtered_data.shift();
    let date_ = moment(first2pts[0].prev_date, 'ddd, DD MMM YYYY');
    let formattedDate = date_.get('date') + '-' + (+date_.get('month') + 1) + '-' + date_.get('year'); // let eodFwdClockValue = first2pts.filter(x => x.clock_name === 'EOD FWD')[0].runtime_val;
    // let eodAftClockValue = first2pts.filter(x => x.clock_name === 'EOD AFT')[0].runtime_val;

    tbody_html += `<tr>
                            <td>${count}</td>  
                            <td>${formattedDate}</td>
                            <td><input class="form-control" placeholder="EOD" disabled value="${first2pts[0].runtime_val}" /></td>
                          
                        </tr>`;
  } while (filtered_data.length > 0);

  return [thead_html, tbody_html];
};

const populateHistoricalMFSTAR = filtered_data => {
  let thead_html = `  
                        <th>S.R.No.</th>
                        <th>Date Submitted</th>  
                        <th>MFSTAR Master</th>
                        `;
  let tbody_html = ``;
  let count = 0;

  do {
    let first2pts = filtered_data.slice(0, 1);
    count++;
    filtered_data.shift();
    let date_ = moment(first2pts[0].prev_date, 'ddd, DD MMM YYYY');
    let formattedDate = date_.get('date') + '-' + (+date_.get('month') + 1) + '-' + date_.get('year');
    tbody_html += `<tr>
                            <td>${count}</td>  
                            <td>${formattedDate}</td>
                            <td><input class="form-control" placeholder="MFSTAR Master" disabled value="${first2pts[0].runtime_val}" /></td>
                        </tr>`;
  } while (filtered_data.length > 0);

  return [thead_html, tbody_html];
};

const populateHistoricalWCS = filtered_data => {
  if (filtered_data.length > 0) {
    let thead_html = `  
                        <th>S.R.No.</th>
                        <th>Date Submitted</th>  
                        <th>MFC 1</th>
                        <th>MFC 2</th>
                        <th>MFC 3</th>
                        <th>UPS FWD</th>
                        <th>UPS AFT</th>
                        <th>GCU</th>
                        <th>LCU</th>
                        <th>DLU</th>
                        `;
    let tbody_html = ``;
    let count = 0;

    do {
      let first8pts = filtered_data.slice(0, 8);
      count++;

      for (let i = 0; i < 8; i++) {
        filtered_data.shift();
      }

      let date_ = moment(first8pts[0].prev_date, 'ddd, DD MMM YYYY');
      let formattedDate = date_.get('date') + '-' + (+date_.get('month') + 1) + '-' + date_.get('year');
      let mfc1 = first8pts.filter(x => x.clock_name === 'MFC 1')[0].runtime_val;
      let mfc2 = first8pts.filter(x => x.clock_name === 'MFC 2')[0].runtime_val;
      let mfc3 = first8pts.filter(x => x.clock_name === 'MFC 3')[0].runtime_val;
      let upsFWD = first8pts.filter(x => x.clock_name === 'UPS FWD')[0].runtime_val;
      let upsAFT = first8pts.filter(x => x.clock_name === 'UPS AFT')[0].runtime_val;
      let gcu = first8pts.filter(x => x.clock_name === 'GCU')[0].runtime_val;
      let lcu = first8pts.filter(x => x.clock_name === 'LCU')[0].runtime_val;
      let dlu = first8pts.filter(x => x.clock_name === 'DLU')[0].runtime_val;
      tbody_html += `<tr>
                            <td>${count}</td>  
                            <td>${formattedDate}</td>
                            <td><input class="form-control" placeholder="MFC 1"
                             disabled value="${mfc1}" /></td>
                             <td><input class="form-control" placeholder="MFC 2"
                             disabled value="${mfc2}" /></td>
                             <td><input class="form-control" placeholder="MFC 3"
                             disabled value="${mfc3}" /></td>
                             <td><input class="form-control" placeholder="UPS FWD"
                             disabled value="${upsFWD}" /></td>
                             <td><input class="form-control" placeholder="UPS AFT"
                             disabled value="${upsAFT}" /></td>
                             <td><input class="form-control" placeholder="GCU"
                             disabled value="${gcu}" /></td>
                             <td><input class="form-control" placeholder="LCU"
                             disabled value="${lcu}" /></td>
                             <td><input class="form-control" placeholder="DLU"
                             disabled value="${dlu}" /></td>
                        </tr>`;
    } while (filtered_data.length > 7);

    return [thead_html, tbody_html];
  }
};

const sortDate = array => {
  array.sort(sortFunction);
};

const sortFunction = (a, b) => {
  let dateA = new Date(moment(a.prev_date, 'ddd, DD MMM YYYY HH:mm:ss'));
  let dateB = new Date(moment(b.prev_date, 'ddd, DD MMM YYYY HH:mm:ss'));
  return dateA > dateB ? 1 : -1;
}; //Auto fill GCU, LCU, DLU as 40%, 30%, 30% of MFC3


$(document).on('focusout', '.mfc3', () => {
  let mfc3Value = +$('.mfc3').val();
  let gcuValue = mfc3Value * 0.4;
  let lcuValue = mfc3Value * 0.3;
  let dluValue = mfc3Value * 0.3;
  $('.gcu').val(gcuValue);
  $('.lcu').val(lcuValue);
  $('.dlu').val(dluValue);
}); //logout.

$('#logout').click(() => {
  ajaxGet('/logout', {}, logout);
});

const logout = data => {
  sessionStorage.clear();
  window.location.replace('/login');
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9ydW50aW1lLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJwbGF0Zm9ybXMiLCJzeXN0ZW1zIiwibHJ1X2RhdGEiLCJzeXN0ZW1fb3B0aW9uX2xpc3QiLCJhbGxfcnVudGltZV9kYXRhIiwic2hvcnRmYWxscyIsImN1cnJlbnRfdGhpcyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicGVybWlzc2lvbiIsInNlc3Npb25TdG9yYWdlIiwicGxhdGZvcm0iLCJhc3NvY2lhdGVkX3BsYXRmb3JtIiwicGxhdGZvcm1fbG9nb19odG1sIiwicGxhdGZvcm1fcmFuayIsImh0bWwiLCJhamF4R2V0IiwiZGF0YV9jYWxsQmFjayIsImNkYXRhIiwic3lzdGVtX2RhdGEiLCJKU09OIiwicGFyc2UiLCJTZXQiLCJtYXAiLCJ4IiwiUExBVEZPUk0iLCJzeXN0ZW0iLCJzeXN0ZW1fcG9wdWxhdGUiLCJwb3B1bGF0ZVBsYXRmb3JtIiwiZ2V0X3J1bnRpbWVfY2FsbGJhY2siLCJzZWxlY3RlZFN5c3RlbSIsInZhbCIsImZpbHRlcmVkX3BsYXRmb3JtcyIsImZpbHRlciIsInBsYXRmb3JtX29wdGlvbnNfaHRtbCIsImVhY2giLCJwX2luZGV4IiwicF92YWwiLCJhcHBlbmQiLCJzeXN0ZW1faHRtbCIsImluZGV4IiwiY2hhbmdlRW9kU2VyaWFsRGlzcGxheSIsInJ1bnRpbWVfZCIsImNzcyIsImNsaWNrIiwiY2xvY2tfdGFibGVfaHRtbCIsInBvcHVsYXRlSGlzdG9yaWNhbERhdGEiLCJ3cmFwcGVyIiwidHJfaHRtbCIsInNlbGVjdGVkX3N5c3RlbSIsInRhYmxlX2h0bWxfIiwicG9wdWxhdGVfRVBTIiwicG9wdWxhdGVfTUZTVEFSIiwicG9wdWxhdGVfV0NTIiwidGFibGVfaHRtbCIsImRhdGVwaWNrZXIiLCJjaGFuZ2VNb250aCIsImNoYW5nZVllYXIiLCJzaG93QnV0dG9uUGFuZWwiLCJkYXRlRm9ybWF0Iiwib25DbG9zZSIsImRhdGVUZXh0IiwiaW5zdCIsIkRhdGUiLCJzZWxlY3RlZFllYXIiLCJzZWxlY3RlZE1vbnRoIiwiY2xrX25hbWUiLCJwcmV2X3Rkc19sZW5ndGgiLCJjbG9zZXN0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdfdGRfaHRtbCIsImJlZm9yZSIsIm9uIiwiYWxsX3RyIiwicnVudGltZV9kYXRhXyIsInNlcmlhbF9udW0iLCJpc0Nsb2NrR3JlYXRlciIsInRyX2luZGV4IiwidHJfdmFsIiwiYWxsX3RkcyIsImZpbmQiLCJjbG9ja19kYXRhIiwiY19pbmRleCIsImNfdmFsIiwiY2xvY2tfbmFtZSIsImF0dHIiLCJyRF8iLCJzb3J0RGF0ZSIsImNsb2NrX3ZhbCIsInJ1bnRpbWVfdmFsIiwibW9tZW50X2RhdGUiLCJtb21lbnQiLCJjdXJyZW50X2RhdGUiLCJnZXQiLCJ1dWlkIiwidXVpZHY0IiwicHVzaCIsInNlcmlhbE51bSIsInNhdmVfY2xvY2tfZGF0YSIsInRvYXN0ciIsImVycm9yIiwiYWpheFBvc3QiLCJzYXZlX3J1bnRpbWVfY2FsbGJhY2siLCJkIiwiaWZfZXJyb3IiLCJtZXNzYWdlIiwic3VjY2VzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmlsdGVyZWRfZGF0YSIsInRhYmxlX2hlYWRfd3JhcHBlciIsInRhYmxlX2JvZHlfd3JhcHBlciIsInRhYmVsX2h0bWwiLCJwb3B1bGF0ZUhpc3RvcmljYWxFUFMiLCJwb3B1bGF0ZUhpc3RvcmljYWxNRlNUQVIiLCJwb3B1bGF0ZUhpc3RvcmljYWxXQ1MiLCJ0aGVhZF9odG1sIiwidGJvZHlfaHRtbCIsImNvdW50IiwiZmlyc3QycHRzIiwic2xpY2UiLCJzaGlmdCIsImRhdGVfIiwicHJldl9kYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImZpcnN0OHB0cyIsImkiLCJtZmMxIiwibWZjMiIsIm1mYzMiLCJ1cHNGV0QiLCJ1cHNBRlQiLCJnY3UiLCJsY3UiLCJkbHUiLCJhcnJheSIsInNvcnQiLCJzb3J0RnVuY3Rpb24iLCJhIiwiYiIsImRhdGVBIiwiZGF0ZUIiLCJtZmMzVmFsdWUiLCJnY3VWYWx1ZSIsImxjdVZhbHVlIiwiZGx1VmFsdWUiLCJsb2dvdXQiLCJjbGVhciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRWUsMEVBQVcsRTs7Ozs7Ozs7Ozs7O0FDakIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGeEM7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ3RObEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDs7QUFFbEQ7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1Qjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQzVGbkI7QUFBQTtBQUFBO0FBQTJCO0FBQ2dCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFjOzs7QUFHZDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELCtDQUFHOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBLHVFQUF1RTtBQUN2RTs7QUFFQSwyRUFBMkU7O0FBRTNFLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QiwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QixtQ0FBbUM7O0FBRW5DLDZCQUE2Qjs7QUFFN0IsaUNBQWlDOztBQUVqQywyQkFBMkI7O0FBRTNCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUEsZ0JBQWdCLCtEQUFXO0FBQzNCOztBQUVlLGlFQUFFLEU7Ozs7Ozs7Ozs7OztBQzlGakI7QUFBQTtBQUFBO0FBQTJCO0FBQ0E7QUFDM0IsU0FBUyx1REFBRyxhQUFhLCtDQUFHO0FBQ2IsaUVBQUUsRTs7Ozs7Ozs7Ozs7O0FDSGpCO0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQzs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNBO0FBQ1E7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVywrREFBVztBQUN0QixHQUFHOzs7QUFHSDtBQUNBLDZCQUE2QjtBQUM3QixHQUFHLGVBQWU7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQTJCO0FBQ2dCOztBQUUzQztBQUNBO0FBQ0EsK0NBQStDLCtDQUFHLElBQUk7O0FBRXREO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLCtEQUFXO0FBQ3BCOztBQUVlLGlFQUFFLEU7Ozs7Ozs7Ozs7OztBQ3ZCakI7QUFBQTtBQUFBO0FBQTJCO0FBQ0U7QUFDN0IsU0FBUyx1REFBRyxhQUFhLGdEQUFJO0FBQ2QsaUVBQUUsRTs7Ozs7Ozs7Ozs7O0FDSGpCO0FBQUE7QUFBQSxJQUFJQSxJQUFJLEdBQUMsRUFBVDtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLE9BQU8sR0FBRSxFQUFiO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxFQUF6QjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQUMsY0FBRCxFQUFpQixPQUFqQixFQUEwQixXQUExQixFQUF1QyxrQkFBdkMsQ0FBakI7QUFDQSxJQUFJQyxZQUFKO0FBQ0E7QUFDQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLFVBQVUsR0FBR0MsY0FBYyxDQUFDRCxVQUFoQztBQUNBLE1BQUlFLFFBQVEsR0FBR0QsY0FBYyxDQUFDRSxtQkFBOUI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBSSxHQUFFRixRQUFTLGtDQUFpQ0QsY0FBYyxDQUFDSSxhQUFjLFFBQW5HO0FBQ0FSLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVMsSUFBZixDQUFvQkYsa0JBQXBCO0FBQ0FHLFNBQU8sQ0FBQyxtQkFBRCxFQUFzQjtBQUFDLGFBQVM7QUFBVixHQUF0QixFQUFvQ0MsYUFBcEMsQ0FBUDtBQUNILENBTkQ7O0FBUUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDN0JwQixNQUFJLEdBQUdvQixLQUFQO0FBQ0EsTUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3ZCLElBQUksQ0FBQyxhQUFELENBQWYsQ0FBbEI7QUFDQUMsV0FBUyxHQUFHLElBQUl1QixHQUFKLENBQVFILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFFBQXZCLENBQVIsQ0FBWjtBQUNBekIsU0FBTyxHQUFHLElBQUlzQixHQUFKLENBQVFILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNFLE1BQXZCLENBQVIsQ0FBVjtBQUNBMUIsU0FBTyxHQUFHLENBQUMsR0FBR0EsT0FBSixDQUFWO0FBQ0FELFdBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQUosQ0FBWjtBQUNBNEIsaUJBQWU7QUFDZkMsa0JBQWdCO0FBQ2hCWixTQUFPLENBQUMsY0FBRCxFQUFnQixFQUFoQixFQUFvQmEsb0JBQXBCLENBQVA7QUFDSCxDQVZEOztBQVdBLE1BQU1ELGdCQUFnQixHQUFHLE1BQU07QUFDM0IsTUFBSUUsY0FBYyxHQUFHeEIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjeUIsR0FBZCxFQUFyQjtBQUNBekIsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlMsSUFBaEIsQ0FBcUIsRUFBckI7QUFDQSxNQUFJaUIsa0JBQWtCLEdBQUdaLElBQUksQ0FBQ0MsS0FBTCxDQUFXdkIsSUFBSSxDQUFDLGFBQUQsQ0FBZixFQUFnQ21DLE1BQWhDLENBQXVDVCxDQUFDLElBQUlBLENBQUMsQ0FBQ0UsTUFBRixLQUFhSSxjQUF6RCxDQUF6QjtBQUNBLE1BQUlJLHFCQUFxQixHQUFJLEVBQTdCO0FBQ0E1QixHQUFDLENBQUM2QixJQUFGLENBQU9wQyxTQUFQLEVBQWtCLENBQUNxQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDbkNILHlCQUFxQixJQUFLLFdBQVVHLEtBQU0sV0FBMUM7QUFDRixHQUZEO0FBR0EvQixHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ0MsTUFBaEIsQ0FBdUJKLHFCQUF2QjtBQUNILENBVEQ7O0FBV0EsTUFBTVAsZUFBZSxHQUFHLE1BQU07QUFDMUJ6QixvQkFBa0IsR0FBRyxFQUFyQixDQUQwQixDQUUxQjtBQUNBOztBQUNBSSxHQUFDLENBQUMsVUFBRCxDQUFELENBQWNTLElBQWQsQ0FBbUIsRUFBbkI7QUFDQSxNQUFJd0IsV0FBVyxHQUFJLEVBQW5CO0FBQ0FqQyxHQUFDLENBQUM2QixJQUFGLENBQU9uQyxPQUFQLEVBQWdCLENBQUN3QyxLQUFELEVBQVFkLE1BQVIsS0FBbUI7QUFDL0JhLGVBQVcsSUFBSyxXQUFVYixNQUFPLFdBQWpDO0FBQ0gsR0FGRDtBQUdBcEIsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZ0MsTUFBZCxDQUFxQkMsV0FBckI7QUFDQSxNQUFJVCxjQUFjLEdBQUd4QixDQUFDLENBQUMsVUFBRCxDQUFELENBQWN5QixHQUFkLEVBQXJCO0FBQ0FVLHdCQUFzQixDQUFDWCxjQUFELENBQXRCO0FBQ0gsQ0FaRDs7QUFjQSxNQUFNRCxvQkFBb0IsR0FBSWEsU0FBRCxJQUFlO0FBQ3hDdkMsa0JBQWdCLEdBQUd1QyxTQUFTLENBQUMsY0FBRCxDQUE1QjtBQUNDcEMsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjcUMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixNQUE3QjtBQUNKLENBSEQ7O0FBS0FyQyxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QnNDLEtBQXpCLENBQStCLE1BQU07QUFDakNDLGtCQUFnQjtBQUNoQkMsd0JBQXNCO0FBQ3pCLENBSEQ7O0FBTUEsTUFBTUQsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixNQUFJRSxPQUFPLEdBQUd6QyxDQUFDLENBQUMsZ0JBQUQsQ0FBZjtBQUNBeUMsU0FBTyxDQUFDaEMsSUFBUixDQUFhLEVBQWI7QUFDQSxNQUFJaUMsT0FBTyxHQUFJLEVBQWY7QUFDQSxNQUFJQyxlQUFlLEdBQUczQyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWN5QixHQUFkLEVBQXRCO0FBQ0EsTUFBSXBCLFFBQVEsR0FBR0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLEdBQWhCLEVBQWY7QUFDQSxNQUFJbUIsV0FBSjs7QUFDQSxNQUFJRCxlQUFlLEtBQUssS0FBeEIsRUFBOEI7QUFDMUJDLGVBQVcsR0FBR0MsWUFBWSxFQUExQjtBQUNILEdBRkQsTUFFTSxJQUFHRixlQUFlLEtBQUssUUFBdkIsRUFBZ0M7QUFDbENDLGVBQVcsR0FBR0UsZUFBZSxFQUE3QjtBQUNILEdBRkssTUFFQSxJQUFHSCxlQUFlLEtBQUssS0FBdkIsRUFBNkI7QUFDL0JDLGVBQVcsR0FBR0csWUFBWSxFQUExQjtBQUNIOztBQUVELE1BQUlDLFVBQVUsR0FBSTs7MERBRW9DSixXQUFXLENBQUMsQ0FBRCxDQUFJOzs4QkFFM0NBLFdBQVcsQ0FBQyxDQUFELENBQUk7Ozs7OytCQUp6QztBQVVBSCxTQUFPLENBQUNULE1BQVIsQ0FBZWdCLFVBQWY7QUFDQWhELEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2lELFVBQVgsQ0FBdUI7QUFDbkJDLGVBQVcsRUFBRSxJQURNO0FBRW5CQyxjQUFVLEVBQUUsSUFGTztBQUduQkMsbUJBQWUsRUFBRSxJQUhFO0FBSW5CQyxjQUFVLEVBQUUsT0FKTztBQUtuQkMsV0FBTyxFQUFFLFVBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQzlCeEQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUQsVUFBUixDQUFtQixTQUFuQixFQUE4QixJQUFJUSxJQUFKLENBQVNELElBQUksQ0FBQ0UsWUFBZCxFQUE0QkYsSUFBSSxDQUFDRyxhQUFqQyxFQUFnRCxDQUFoRCxDQUE5QjtBQUNIO0FBUGtCLEdBQXZCLEVBMUIyQixDQW1DM0I7QUFDQTtBQUNILENBckNELEMsQ0F5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBM0QsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnNDLEtBQWpCLENBQXVCLE1BQU07QUFDMUIsTUFBSXNCLFFBQVEsR0FBRzVELENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCeUIsR0FBdkIsRUFBZjtBQUNBLE1BQUlvQyxlQUFlLEdBQUc3RCxDQUFDLENBQUNELFlBQUQsQ0FBRCxDQUFnQitELE9BQWhCLENBQXdCLElBQXhCLEVBQThCQyxRQUE5QixHQUF5Q0MsTUFBL0Q7QUFDQSxNQUFJQyxXQUFXLEdBQUssMkJBQTBCTCxRQUFTLG9CQUF2RDtBQUNBNUQsR0FBQyxDQUFDRCxZQUFELENBQUQsQ0FBZ0IrRCxPQUFoQixDQUF3QixPQUF4QixFQUFpQ0ksTUFBakMsQ0FBd0NELFdBQXhDO0FBQ0YsQ0FMRCxFLENBUUE7O0FBQ0FqRSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZa0UsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLE1BQU07QUFDakQsTUFBSUMsTUFBTSxHQUFHcEUsQ0FBQyxDQUFDLCtCQUFELENBQWQ7QUFDQSxNQUFJcUUsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsTUFBSWhFLFFBQVEsR0FBR0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLEdBQWhCLEVBQWY7QUFDQSxNQUFJTCxNQUFNLEdBQUdwQixDQUFDLENBQUMsVUFBRCxDQUFELENBQWN5QixHQUFkLEVBQWI7QUFDQSxNQUFJNkMsVUFBVSxHQUFHLElBQWpCO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLElBQXJCOztBQUNBLE1BQUduRCxNQUFNLEtBQUssS0FBZCxFQUFvQjtBQUNoQmtELGNBQVUsR0FBR3RFLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCeUIsR0FBckIsRUFBYjtBQUNIOztBQUNEekIsR0FBQyxDQUFDNkIsSUFBRixDQUFPdUMsTUFBUCxFQUFlLENBQUNJLFFBQUQsRUFBV0MsTUFBWCxLQUFzQjtBQUNqQyxRQUFJQyxPQUFPLEdBQUcxRSxDQUFDLENBQUN5RSxNQUFELENBQUQsQ0FBVUUsSUFBVixDQUFlLElBQWYsQ0FBZDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBNUUsS0FBQyxDQUFDNkIsSUFBRixDQUFPNkMsT0FBUCxFQUFnQixDQUFDRyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDaEMsVUFBR0QsT0FBTyxHQUFHLENBQWIsRUFBZTtBQUNYLFlBQUlFLFVBQVUsR0FBRy9FLENBQUMsQ0FBQzhFLEtBQUQsQ0FBRCxDQUFTSCxJQUFULENBQWMsT0FBZCxFQUF1QkssSUFBdkIsQ0FBNEIsYUFBNUIsQ0FBakI7QUFDQSxZQUFJQyxHQUFHLEdBQUdwRixnQkFBZ0IsQ0FBQzhCLE1BQWpCLENBQXdCVCxDQUFDLElBQUlBLENBQUMsQ0FBQzZELFVBQUYsS0FBaUJBLFVBQWpCLElBQStCN0QsQ0FBQyxDQUFDb0QsVUFBRixLQUFpQkEsVUFBN0UsQ0FBVjtBQUNBWSxnQkFBUSxDQUFDRCxHQUFELENBQVI7QUFDQUEsV0FBRyxHQUFHQSxHQUFHLENBQUNBLEdBQUcsQ0FBQ2pCLE1BQUosR0FBYSxDQUFkLENBQVQ7QUFDQSxZQUFJbUIsU0FBUyxHQUFHbkYsQ0FBQyxDQUFDOEUsS0FBRCxDQUFELENBQVNILElBQVQsQ0FBYyxPQUFkLEVBQXVCbEQsR0FBdkIsRUFBaEI7O0FBQ0EsWUFBRzBELFNBQVMsR0FBR0YsR0FBRyxDQUFDRyxXQUFuQixFQUErQjtBQUMzQmIsd0JBQWMsR0FBRyxLQUFqQjtBQUNIOztBQUNELFlBQUljLFdBQVcsR0FBR0MsTUFBTSxDQUFDdEYsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXeUIsR0FBWCxFQUFELENBQXhCO0FBQ0EsWUFBSThELFlBQVksR0FBR0YsV0FBVyxDQUFDRyxHQUFaLENBQWdCLE1BQWhCLElBQTBCLEdBQTFCLElBQWlDSCxXQUFXLENBQUNHLEdBQVosQ0FBZ0IsT0FBaEIsSUFBMkIsQ0FBNUQsSUFBaUUsR0FBakUsR0FBdUVILFdBQVcsQ0FBQ0csR0FBWixDQUFnQixNQUFoQixDQUExRjtBQUNBLFlBQUlDLElBQUksR0FBR0MsK0NBQU0sRUFBakI7QUFDQWQsa0JBQVUsQ0FBQ2UsSUFBWCxDQUFnQjtBQUFDLHdCQUFjWixVQUFmO0FBQTJCLHVCQUFhSSxTQUF4QztBQUFtRCxrQkFBUUksWUFBM0Q7QUFBeUUsa0JBQVFFO0FBQWpGLFNBQWhCO0FBQ0g7QUFDSixLQWZEO0FBZ0JBcEIsaUJBQWEsQ0FBQ3NCLElBQWQsQ0FBbUI7QUFBQ3RGLGNBQVEsRUFBRUEsUUFBWDtBQUFxQmUsWUFBTSxFQUFFQSxNQUE3QjtBQUFvQ3dELGdCQUFVLEVBQUVBLFVBQWhEO0FBQTREZ0IsZUFBUyxFQUFFdEI7QUFBdkUsS0FBbkI7QUFDSCxHQXBCRDs7QUFxQkEsTUFBSUMsY0FBYyxLQUFLLElBQXZCLEVBQTRCO0FBQ3hCc0IsbUJBQWUsQ0FBQ3hCLGFBQUQsQ0FBZjtBQUNILEdBRkQsTUFFSztBQUNEeUIsVUFBTSxDQUFDQyxLQUFQLENBQWEsOEhBQWI7QUFDQS9GLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCcUMsR0FBekIsQ0FBNkIsU0FBN0IsRUFBd0MsTUFBeEM7QUFDQXJDLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCcUMsR0FBekIsQ0FBNkIsU0FBN0IsRUFBd0MsT0FBeEM7QUFDSDtBQUNKLENBdENEO0FBd0NBckMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWWtFLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHFCQUF4QixFQUErQyxNQUFNO0FBQ2pELE1BQUlDLE1BQU0sR0FBR3BFLENBQUMsQ0FBQywrQkFBRCxDQUFkO0FBQ0EsTUFBSXFFLGFBQWEsR0FBRyxFQUFwQjtBQUNBLE1BQUloRSxRQUFRLEdBQUdMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J5QixHQUFoQixFQUFmO0FBQ0EsTUFBSUwsTUFBTSxHQUFHcEIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjeUIsR0FBZCxFQUFiO0FBQ0EsTUFBSTZDLFVBQVUsR0FBRyxJQUFqQjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxJQUFyQjs7QUFDQSxNQUFHbkQsTUFBTSxLQUFLLEtBQWQsRUFBb0I7QUFDaEJrRCxjQUFVLEdBQUd0RSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnlCLEdBQXJCLEVBQWI7QUFDSDs7QUFDRHpCLEdBQUMsQ0FBQzZCLElBQUYsQ0FBT3VDLE1BQVAsRUFBZSxDQUFDSSxRQUFELEVBQVdDLE1BQVgsS0FBc0I7QUFDakMsUUFBSUMsT0FBTyxHQUFHMUUsQ0FBQyxDQUFDeUUsTUFBRCxDQUFELENBQVVFLElBQVYsQ0FBZSxJQUFmLENBQWQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQTVFLEtBQUMsQ0FBQzZCLElBQUYsQ0FBTzZDLE9BQVAsRUFBZ0IsQ0FBQ0csT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ2hDLFVBQUdELE9BQU8sR0FBRyxDQUFiLEVBQWU7QUFDWCxZQUFJRSxVQUFVLEdBQUcvRSxDQUFDLENBQUM4RSxLQUFELENBQUQsQ0FBU0gsSUFBVCxDQUFjLE9BQWQsRUFBdUJLLElBQXZCLENBQTRCLGFBQTVCLENBQWpCO0FBQ0EsWUFBSUcsU0FBUyxHQUFHbkYsQ0FBQyxDQUFDOEUsS0FBRCxDQUFELENBQVNILElBQVQsQ0FBYyxPQUFkLEVBQXVCbEQsR0FBdkIsRUFBaEI7QUFDQSxZQUFJNEQsV0FBVyxHQUFHQyxNQUFNLENBQUN0RixDQUFDLENBQUMsT0FBRCxDQUFELENBQVd5QixHQUFYLEVBQUQsQ0FBeEI7QUFDQSxZQUFJOEQsWUFBWSxHQUFHRixXQUFXLENBQUNHLEdBQVosQ0FBZ0IsTUFBaEIsSUFBMEIsR0FBMUIsSUFBaUNILFdBQVcsQ0FBQ0csR0FBWixDQUFnQixPQUFoQixJQUEyQixDQUE1RCxJQUFpRSxHQUFqRSxHQUF1RUgsV0FBVyxDQUFDRyxHQUFaLENBQWdCLE1BQWhCLENBQTFGO0FBQ0EsWUFBSUMsSUFBSSxHQUFHQywrQ0FBTSxFQUFqQjtBQUNBZCxrQkFBVSxDQUFDZSxJQUFYLENBQWdCO0FBQUMsd0JBQWNaLFVBQWY7QUFBMkIsdUJBQWFJLFNBQXhDO0FBQW1ELGtCQUFRSSxZQUEzRDtBQUF5RSxrQkFBUUU7QUFBakYsU0FBaEI7QUFDSDtBQUNKLEtBVEQ7QUFVQXBCLGlCQUFhLENBQUNzQixJQUFkLENBQW1CO0FBQUN0RixjQUFRLEVBQUVBLFFBQVg7QUFBcUJlLFlBQU0sRUFBRUEsTUFBN0I7QUFBb0N3RCxnQkFBVSxFQUFFQSxVQUFoRDtBQUE0RGdCLGVBQVMsRUFBRXRCO0FBQXZFLEtBQW5CO0FBQ0gsR0FkRDtBQWVBdUIsaUJBQWUsQ0FBQ3hCLGFBQUQsQ0FBZjtBQUNILENBMUJEOztBQTZCQSxNQUFNd0IsZUFBZSxHQUFJakIsVUFBRCxJQUFnQjtBQUNwQ29CLFVBQVEsQ0FBQyxlQUFELEVBQWtCcEIsVUFBbEIsRUFBOEJxQixxQkFBOUIsQ0FBUjtBQUNILENBRkQ7O0FBR0EsTUFBTUEscUJBQXFCLEdBQUlDLENBQUQsSUFBTztBQUNqQyxNQUFHQSxDQUFDLENBQUNDLFFBQUwsRUFBYztBQUNWTCxVQUFNLENBQUNDLEtBQVAsQ0FBYUcsQ0FBQyxDQUFDRSxPQUFmO0FBQ0gsR0FGRCxNQUVLO0FBQ0ROLFVBQU0sQ0FBQ08sT0FBUCxDQUFlSCxDQUFDLENBQUNFLE9BQWpCO0FBQ0FFLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FGQyxDQUdEO0FBQ0E7QUFDQTtBQUNIO0FBQ0osQ0FWRCxDLENBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F4RyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNtRSxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLE1BQU07QUFDN0IsTUFBSTNDLGNBQWMsR0FBR3hCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3lCLEdBQWQsRUFBckI7QUFDQUgsa0JBQWdCO0FBQ2hCYSx3QkFBc0IsQ0FBQ1gsY0FBRCxDQUF0QjtBQUNILENBSkQ7O0FBS0EsTUFBTVcsc0JBQXNCLEdBQUlYLGNBQUQsSUFBb0I7QUFDL0MsTUFBR0EsY0FBYyxLQUFLLEtBQXRCLEVBQTRCO0FBQ3hCeEIsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJxQyxHQUFyQixDQUF5QixTQUF6QixFQUFvQyxPQUFwQztBQUNBckMsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnFDLEdBQW5CLENBQXVCLFNBQXZCLEVBQWtDLE1BQWxDO0FBQ0gsR0FIRCxNQUdLO0FBQ0RyQyxLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnFDLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLE1BQXBDO0FBQ0FyQyxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CcUMsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsT0FBbEM7QUFDSDtBQUNKLENBUkQ7O0FBVUEsTUFBTUcsc0JBQXNCLEdBQUcsTUFBTTtBQUNqQ3hDLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCcUMsR0FBdkIsQ0FBMkIsU0FBM0IsRUFBc0MsT0FBdEM7QUFDQSxNQUFJaEMsUUFBUSxHQUFHTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsR0FBaEIsRUFBZjtBQUNBLE1BQUlMLE1BQU0sR0FBR3BCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3lCLEdBQWQsRUFBYjtBQUNBLE1BQUk2QyxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsTUFBR2xELE1BQU0sS0FBSyxLQUFkLEVBQW9CO0FBQ2hCa0QsY0FBVSxHQUFHdEUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ5QixHQUFyQixFQUFiO0FBQ0g7O0FBQUE7QUFDRCxNQUFJZ0YsYUFBYSxHQUFHNUcsZ0JBQWdCLENBQUM4QixNQUFqQixDQUF3QlQsQ0FBQyxJQUFJQSxDQUFDLENBQUNFLE1BQUYsS0FBYUEsTUFBYixJQUNqQ0YsQ0FBQyxDQUFDYixRQUFGLEtBQWVBLFFBRGtCLElBQ05hLENBQUMsQ0FBQ29ELFVBQUYsS0FBaUJBLFVBRHhDLENBQXBCO0FBRUEsTUFBSW9DLGtCQUFrQixHQUFHMUcsQ0FBQyxDQUFDLCtCQUFELENBQTFCO0FBQ0EsTUFBSTJHLGtCQUFrQixHQUFHM0csQ0FBQyxDQUFDLCtCQUFELENBQTFCO0FBQ0EyRyxvQkFBa0IsQ0FBQ2xHLElBQW5CLENBQXdCLEVBQXhCO0FBQ0FpRyxvQkFBa0IsQ0FBQ2pHLElBQW5CLENBQXdCLEVBQXhCOztBQUNBLE1BQUlnRyxhQUFhLENBQUN6QyxNQUFkLEdBQXVCLENBQTNCLEVBQTZCO0FBQ3JCa0IsWUFBUSxDQUFDdUIsYUFBRCxDQUFSO0FBQ0EsUUFBSUcsVUFBSjs7QUFDQSxRQUFHeEYsTUFBTSxLQUFLLEtBQWQsRUFBb0I7QUFDaEJ3RixnQkFBVSxHQUFHQyxxQkFBcUIsQ0FBQ0osYUFBRCxDQUFsQztBQUNILEtBRkQsTUFFTSxJQUFHckYsTUFBTSxLQUFLLFFBQWQsRUFBdUI7QUFDekJ3RixnQkFBVSxHQUFHRSx3QkFBd0IsQ0FBQ0wsYUFBRCxDQUFyQztBQUNILEtBRkssTUFFQSxJQUFHckYsTUFBTSxLQUFLLEtBQWQsRUFBb0I7QUFDdEJ3RixnQkFBVSxHQUFHRyxxQkFBcUIsQ0FBQ04sYUFBRCxDQUFsQztBQUNIOztBQUNELFFBQUdHLFVBQUgsRUFBYztBQUNiRix3QkFBa0IsQ0FBQzFFLE1BQW5CLENBQTBCNEUsVUFBVSxDQUFDLENBQUQsQ0FBcEM7QUFDQUQsd0JBQWtCLENBQUMzRSxNQUFuQixDQUEwQjRFLFVBQVUsQ0FBQyxDQUFELENBQXBDO0FBQ0E7QUFDUjtBQUNKLENBN0JELEMsQ0ErQkE7OztBQUNBLE1BQU0vRCxZQUFZLEdBQUcsTUFBTTtBQUN2QixNQUFJeEMsUUFBUSxHQUFHTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsR0FBaEIsRUFBZjtBQUNBLE1BQUl1RixVQUFVLEdBQUk7O3lCQUFsQjtBQUdBLE1BQUlDLFVBQVUsR0FBSTs7OzhCQUFsQjtBQUlBLFNBQU8sQ0FBQ0QsVUFBRCxFQUFhQyxVQUFiLENBQVA7QUFDSCxDQVZEOztBQVdBLE1BQU1uRSxlQUFlLEdBQUcsTUFBTTtBQUMxQixNQUFJekMsUUFBUSxHQUFHTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsR0FBaEIsRUFBZjtBQUNBLE1BQUl1RixVQUFVLEdBQUk7eUJBQWxCO0FBRUEsTUFBSUMsVUFBVSxHQUFJOzs7OEJBQWxCO0FBSUEsU0FBTyxDQUFDRCxVQUFELEVBQWFDLFVBQWIsQ0FBUDtBQUNILENBVEQ7O0FBVUEsTUFBTWxFLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLE1BQUkxQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J5QixHQUFoQixFQUFmO0FBQ0EsTUFBSXVGLFVBQVUsR0FBSTs7Ozs7Ozs7O3lCQUFsQjtBQVVBLE1BQUlDLFVBQVUsR0FBSTs7Ozs7Ozs7OzhCQUFsQjtBQVVBLFNBQU8sQ0FBQ0QsVUFBRCxFQUFhQyxVQUFiLENBQVA7QUFDSCxDQXZCRCxDLENBeUJBOzs7QUFDQSxNQUFNSixxQkFBcUIsR0FBSUosYUFBRCxJQUFtQjtBQUM3QyxNQUFJTyxVQUFVLEdBQUk7Ozs7eUJBQWxCO0FBS0EsTUFBSUMsVUFBVSxHQUFJLEVBQWxCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsS0FBRTtBQUNFLFFBQUlDLFNBQVMsR0FBR1YsYUFBYSxDQUFDVyxLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQWhCO0FBQ0FGLFNBQUs7QUFDTFQsaUJBQWEsQ0FBQ1ksS0FBZDtBQUNBLFFBQUlDLEtBQUssR0FBR2hDLE1BQU0sQ0FBQzZCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUksU0FBZCxFQUF5QixrQkFBekIsQ0FBbEI7QUFDQSxRQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQzlCLEdBQU4sQ0FBVSxNQUFWLElBQW9CLEdBQXBCLElBQ1AsQ0FBQzhCLEtBQUssQ0FBQzlCLEdBQU4sQ0FBVSxPQUFWLENBQUQsR0FBc0IsQ0FEZixJQUNvQixHQURwQixHQUMwQjhCLEtBQUssQ0FBQzlCLEdBQU4sQ0FBVSxNQUFWLENBRDlDLENBTEYsQ0FPRTtBQUNBOztBQUNBeUIsY0FBVSxJQUFLO2tDQUNXQyxLQUFNO2tDQUNOTSxhQUFjO2dHQUNnREwsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhL0IsV0FBWTs7OEJBSGpIO0FBTUgsR0FmRCxRQWVPcUIsYUFBYSxDQUFDekMsTUFBZCxHQUF1QixDQWY5Qjs7QUFnQkEsU0FBTyxDQUFDZ0QsVUFBRCxFQUFhQyxVQUFiLENBQVA7QUFDSCxDQXpCRDs7QUEwQkEsTUFBTUgsd0JBQXdCLEdBQUlMLGFBQUQsSUFBbUI7QUFDaEQsTUFBSU8sVUFBVSxHQUFJOzs7O3lCQUFsQjtBQUtBLE1BQUlDLFVBQVUsR0FBSSxFQUFsQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaOztBQUNBLEtBQUU7QUFDRSxRQUFJQyxTQUFTLEdBQUdWLGFBQWEsQ0FBQ1csS0FBZCxDQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUFoQjtBQUNBRixTQUFLO0FBQ0xULGlCQUFhLENBQUNZLEtBQWQ7QUFDQSxRQUFJQyxLQUFLLEdBQUdoQyxNQUFNLENBQUM2QixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFJLFNBQWQsRUFBeUIsa0JBQXpCLENBQWxCO0FBQ0EsUUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUM5QixHQUFOLENBQVUsTUFBVixJQUFvQixHQUFwQixJQUNQLENBQUM4QixLQUFLLENBQUM5QixHQUFOLENBQVUsT0FBVixDQUFELEdBQXNCLENBRGYsSUFDb0IsR0FEcEIsR0FDMEI4QixLQUFLLENBQUM5QixHQUFOLENBQVUsTUFBVixDQUQ5QztBQUVBeUIsY0FBVSxJQUFLO2tDQUNXQyxLQUFNO2tDQUNOTSxhQUFjOzBHQUMwREwsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhL0IsV0FBWTs4QkFIM0g7QUFLSCxHQVpELFFBWU9xQixhQUFhLENBQUN6QyxNQUFkLEdBQXVCLENBWjlCOztBQWFBLFNBQU8sQ0FBQ2dELFVBQUQsRUFBYUMsVUFBYixDQUFQO0FBQ0gsQ0F0QkQ7O0FBdUJBLE1BQU1GLHFCQUFxQixHQUFJTixhQUFELElBQW1CO0FBQzdDLE1BQUdBLGFBQWEsQ0FBQ3pDLE1BQWQsR0FBdUIsQ0FBMUIsRUFBNEI7QUFDeEIsUUFBSWdELFVBQVUsR0FBSTs7Ozs7Ozs7Ozs7eUJBQWxCO0FBWUEsUUFBSUMsVUFBVSxHQUFJLEVBQWxCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0osT0FBRTtBQUNFLFVBQUlPLFNBQVMsR0FBR2hCLGFBQWEsQ0FBQ1csS0FBZCxDQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUFoQjtBQUNBRixXQUFLOztBQUNMLFdBQUksSUFBSVEsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLENBQWYsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFDcEJqQixxQkFBYSxDQUFDWSxLQUFkO0FBQ0E7O0FBQ0QsVUFBSUMsS0FBSyxHQUFHaEMsTUFBTSxDQUFDbUMsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRixTQUFkLEVBQXlCLGtCQUF6QixDQUFsQjtBQUNBLFVBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDOUIsR0FBTixDQUFVLE1BQVYsSUFBb0IsR0FBcEIsSUFDUCxDQUFDOEIsS0FBSyxDQUFDOUIsR0FBTixDQUFVLE9BQVYsQ0FBRCxHQUFzQixDQURmLElBQ29CLEdBRHBCLEdBQzBCOEIsS0FBSyxDQUFDOUIsR0FBTixDQUFVLE1BQVYsQ0FEOUM7QUFFQSxVQUFJbUMsSUFBSSxHQUFHRixTQUFTLENBQUM5RixNQUFWLENBQWlCVCxDQUFDLElBQUlBLENBQUMsQ0FBQzZELFVBQUYsS0FBaUIsT0FBdkMsRUFBZ0QsQ0FBaEQsRUFBbURLLFdBQTlEO0FBQ0EsVUFBSXdDLElBQUksR0FBR0gsU0FBUyxDQUFDOUYsTUFBVixDQUFpQlQsQ0FBQyxJQUFJQSxDQUFDLENBQUM2RCxVQUFGLEtBQWlCLE9BQXZDLEVBQWdELENBQWhELEVBQW1ESyxXQUE5RDtBQUNBLFVBQUl5QyxJQUFJLEdBQUdKLFNBQVMsQ0FBQzlGLE1BQVYsQ0FBaUJULENBQUMsSUFBSUEsQ0FBQyxDQUFDNkQsVUFBRixLQUFpQixPQUF2QyxFQUFnRCxDQUFoRCxFQUFtREssV0FBOUQ7QUFDQSxVQUFJMEMsTUFBTSxHQUFHTCxTQUFTLENBQUM5RixNQUFWLENBQWlCVCxDQUFDLElBQUlBLENBQUMsQ0FBQzZELFVBQUYsS0FBaUIsU0FBdkMsRUFBa0QsQ0FBbEQsRUFBcURLLFdBQWxFO0FBQ0EsVUFBSTJDLE1BQU0sR0FBR04sU0FBUyxDQUFDOUYsTUFBVixDQUFpQlQsQ0FBQyxJQUFJQSxDQUFDLENBQUM2RCxVQUFGLEtBQWlCLFNBQXZDLEVBQWtELENBQWxELEVBQXFESyxXQUFsRTtBQUNBLFVBQUk0QyxHQUFHLEdBQUdQLFNBQVMsQ0FBQzlGLE1BQVYsQ0FBaUJULENBQUMsSUFBSUEsQ0FBQyxDQUFDNkQsVUFBRixLQUFpQixLQUF2QyxFQUE4QyxDQUE5QyxFQUFpREssV0FBM0Q7QUFDQSxVQUFJNkMsR0FBRyxHQUFHUixTQUFTLENBQUM5RixNQUFWLENBQWlCVCxDQUFDLElBQUlBLENBQUMsQ0FBQzZELFVBQUYsS0FBaUIsS0FBdkMsRUFBOEMsQ0FBOUMsRUFBaURLLFdBQTNEO0FBQ0EsVUFBSThDLEdBQUcsR0FBR1QsU0FBUyxDQUFDOUYsTUFBVixDQUFpQlQsQ0FBQyxJQUFJQSxDQUFDLENBQUM2RCxVQUFGLEtBQWlCLEtBQXZDLEVBQThDLENBQTlDLEVBQWlESyxXQUEzRDtBQUVBNkIsZ0JBQVUsSUFBSztrQ0FDV0MsS0FBTTtrQ0FDTk0sYUFBYzs7K0NBRURHLElBQUs7OytDQUVMQyxJQUFLOzsrQ0FFTEMsSUFBSzs7K0NBRUxDLE1BQU87OytDQUVQQyxNQUFPOzsrQ0FFUEMsR0FBSTs7K0NBRUpDLEdBQUk7OytDQUVKQyxHQUFJOzhCQWxCM0M7QUFvQkgsS0F0Q0QsUUFzQ096QixhQUFhLENBQUN6QyxNQUFkLEdBQXVCLENBdEM5Qjs7QUF1Q0EsV0FBTyxDQUFDZ0QsVUFBRCxFQUFhQyxVQUFiLENBQVA7QUFDQztBQUVKLENBMUREOztBQTREQSxNQUFNL0IsUUFBUSxHQUFJaUQsS0FBRCxJQUFXO0FBQ3hCQSxPQUFLLENBQUNDLElBQU4sQ0FBV0MsWUFBWDtBQUNILENBRkQ7O0FBR0EsTUFBTUEsWUFBWSxHQUFHLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFTO0FBQzFCLE1BQUlDLEtBQUssR0FBRyxJQUFJL0UsSUFBSixDQUFTNkIsTUFBTSxDQUFDZ0QsQ0FBQyxDQUFDZixTQUFILEVBQWMsMkJBQWQsQ0FBZixDQUFaO0FBQ0EsTUFBSWtCLEtBQUssR0FBRyxJQUFJaEYsSUFBSixDQUFTNkIsTUFBTSxDQUFDaUQsQ0FBQyxDQUFDaEIsU0FBSCxFQUFjLDJCQUFkLENBQWYsQ0FBWjtBQUNBLFNBQU9pQixLQUFLLEdBQUdDLEtBQVIsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBQyxDQUE1QjtBQUNILENBSkQsQyxDQUtBOzs7QUFDQXpJLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlrRSxFQUFaLENBQWUsVUFBZixFQUEyQixPQUEzQixFQUFvQyxNQUFNO0FBQ3RDLE1BQUl1RSxTQUFTLEdBQUcsQ0FBQzFJLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3lCLEdBQVgsRUFBakI7QUFDQSxNQUFJa0gsUUFBUSxHQUFHRCxTQUFTLEdBQUMsR0FBekI7QUFDQSxNQUFJRSxRQUFRLEdBQUdGLFNBQVMsR0FBQyxHQUF6QjtBQUNBLE1BQUlHLFFBQVEsR0FBR0gsU0FBUyxHQUFDLEdBQXpCO0FBQ0ExSSxHQUFDLENBQUMsTUFBRCxDQUFELENBQVV5QixHQUFWLENBQWNrSCxRQUFkO0FBQ0EzSSxHQUFDLENBQUMsTUFBRCxDQUFELENBQVV5QixHQUFWLENBQWNtSCxRQUFkO0FBQ0E1SSxHQUFDLENBQUMsTUFBRCxDQUFELENBQVV5QixHQUFWLENBQWNvSCxRQUFkO0FBQ0gsQ0FSRCxFLENBU0E7O0FBQ0E3SSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFzQyxLQUFiLENBQW1CLE1BQU07QUFDekI1QixTQUFPLENBQUMsU0FBRCxFQUFZLEVBQVosRUFBZ0JvSSxNQUFoQixDQUFQO0FBQ0MsQ0FGRDs7QUFHQSxNQUFNQSxNQUFNLEdBQUl0SixJQUFELElBQVU7QUFDckJZLGdCQUFjLENBQUMySSxLQUFmO0FBQ0F6QyxRQUFNLENBQUNDLFFBQVAsQ0FBZ0J5QyxPQUFoQixDQUF3QixRQUF4QjtBQUNILENBSEQsQyIsImZpbGUiOiJydW50aW1lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3RhdGljL3J1bnRpbWUuanNcIik7XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXRfKSB7XG4gIHZhciBvZmZzZXQgPSBvZmZzZXRfIHx8IDA7IC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuXG4gIHJldHVybiAoYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFtidWZbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2J1ZltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYnVmW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5dGVzVG9VdWlkOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdjEgfSBmcm9tICcuL3YxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjMgfSBmcm9tICcuL3YzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjQgfSBmcm9tICcuL3Y0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjUgfSBmcm9tICcuL3Y1LmpzJzsiLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIHZhciBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZDU7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4vLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIHZhciBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1bX2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1bX2kyXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciBfdDIgPSAwOyBfdDIgPCA4MDsgKytfdDIpIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihfdDIgLyAyMCk7XG4gICAgICB2YXIgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW190Ml0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhMTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJztcblxuZnVuY3Rpb24gdXVpZFRvQnl0ZXModXVpZCkge1xuICAvLyBOb3RlOiBXZSBhc3N1bWUgd2UncmUgYmVpbmcgcGFzc2VkIGEgdmFsaWQgdXVpZCBzdHJpbmdcbiAgdmFyIGJ5dGVzID0gW107XG4gIHV1aWQucmVwbGFjZSgvW2EtZkEtRjAtOV17Mn0vZywgZnVuY3Rpb24gKGhleCkge1xuICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LCAxNikpO1xuICB9KTtcbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSB1dWlkVG9CeXRlcyhuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBhbiBhcnJheSBvZiBieXRlcycpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShuYW1lc3BhY2UpIHx8IG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ25hbWVzcGFjZSBtdXN0IGJlIHV1aWQgc3RyaW5nIG9yIGFuIEFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzJyk7XG4gICAgfSAvLyBQZXIgNC4zXG5cblxuICAgIHZhciBieXRlcyA9IGhhc2hmdW5jKG5hbWVzcGFjZS5jb25jYXQodmFsdWUpKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gYnl0ZXNUb1V1aWQoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbnZhciB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1OyIsImxldCBkYXRhPVtdO1xyXG5sZXQgcGxhdGZvcm1zID0gW107XHJcbmxldCBzeXN0ZW1zPSBbXTtcclxubGV0IGxydV9kYXRhID0gW107XHJcbmxldCBzeXN0ZW1fb3B0aW9uX2xpc3QgPSBbXTtcclxubGV0IGFsbF9ydW50aW1lX2RhdGEgPSBbXTtcclxubGV0IHNob3J0ZmFsbHMgPSBbJ0JJVCBFZmZpY2FjeScsICdUb29scycsICdEb2N1bWVudHMnLCAnVHJhaW5pbmcgb2YgY3JldyddO1xyXG5sZXQgY3VycmVudF90aGlzO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBlcm1pc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5wZXJtaXNzaW9uO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybTtcclxuICAgIGxldCBwbGF0Zm9ybV9sb2dvX2h0bWwgPSBgJHtwbGF0Zm9ybX0gPHN1YiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxcIj4ke3Nlc3Npb25TdG9yYWdlLnBsYXRmb3JtX3Jhbmt9PC9zdWI+YDtcclxuICAgICQoJy5tdHUtbG9nbycpLmh0bWwocGxhdGZvcm1fbG9nb19odG1sKTtcclxuICAgIGFqYXhHZXQoJy9nZXRfYWxsX3JlcG9ydElkJywgeydxdWVyeSc6IDF9LCBkYXRhX2NhbGxCYWNrKTtcclxufSk7XHJcblxyXG5jb25zdCBkYXRhX2NhbGxCYWNrID0gKGNkYXRhKSA9PiB7XHJcbiAgICBkYXRhID0gY2RhdGE7XHJcbiAgICBsZXQgc3lzdGVtX2RhdGEgPSBKU09OLnBhcnNlKGRhdGFbJ3N5c3RlbV9kYXRhJ10pO1xyXG4gICAgcGxhdGZvcm1zID0gbmV3IFNldChzeXN0ZW1fZGF0YS5tYXAoeCA9PiB4LlBMQVRGT1JNKSk7XHJcbiAgICBzeXN0ZW1zID0gbmV3IFNldChzeXN0ZW1fZGF0YS5tYXAoeCA9PiB4LnN5c3RlbSkpO1xyXG4gICAgc3lzdGVtcyA9IFsuLi5zeXN0ZW1zXTtcclxuICAgIHBsYXRmb3JtcyA9IFsuLi5wbGF0Zm9ybXNdO1xyXG4gICAgc3lzdGVtX3BvcHVsYXRlKCk7XHJcbiAgICBwb3B1bGF0ZVBsYXRmb3JtKCk7XHJcbiAgICBhamF4R2V0KCcvZ2V0X3J1bnRpbWUnLHt9LCBnZXRfcnVudGltZV9jYWxsYmFjayk7XHJcbn07XHJcbmNvbnN0IHBvcHVsYXRlUGxhdGZvcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0ZWRTeXN0ZW0gPSAkKCcjc3lzdGVtXycpLnZhbCgpO1xyXG4gICAgJCgnI3BsYXRmb3JtXycpLmh0bWwoJycpO1xyXG4gICAgbGV0IGZpbHRlcmVkX3BsYXRmb3JtcyA9IEpTT04ucGFyc2UoZGF0YVtcInN5c3RlbV9kYXRhXCJdKS5maWx0ZXIoeCA9PiB4LnN5c3RlbSA9PT0gc2VsZWN0ZWRTeXN0ZW0pO1xyXG4gICAgbGV0IHBsYXRmb3JtX29wdGlvbnNfaHRtbCA9IGBgO1xyXG4gICAgJC5lYWNoKHBsYXRmb3JtcywgKHBfaW5kZXgsIHBfdmFsKSA9PiB7XHJcbiAgICAgICBwbGF0Zm9ybV9vcHRpb25zX2h0bWwgKz0gYDxvcHRpb24+JHtwX3ZhbH08L29wdGlvbj5gXHJcbiAgICB9KTtcclxuICAgICQoJyNwbGF0Zm9ybV8nKS5hcHBlbmQocGxhdGZvcm1fb3B0aW9uc19odG1sKTtcclxufVxyXG5cclxuY29uc3Qgc3lzdGVtX3BvcHVsYXRlID0gKCkgPT4ge1xyXG4gICAgc3lzdGVtX29wdGlvbl9saXN0ID0gW107XHJcbiAgICAvLyBsZXQgcGxhdGZvcm0gPSAkKCcjcGxhdGZvcm1fJykudmFsKCk7XHJcbiAgICAvLyBsZXQgZmlsdGVyZWRfc3lzdGVtID0gSlNPTi5wYXJzZShkYXRhW1wic3lzdGVtX2RhdGFcIl0pLmZpbHRlcih4ID0+IHguUExBVEZPUk0gPT09IHBsYXRmb3JtKTtcclxuICAgICQoJyNzeXN0ZW1fJykuaHRtbCgnJyk7XHJcbiAgICBsZXQgc3lzdGVtX2h0bWwgPSBgYDtcclxuICAgICQuZWFjaChzeXN0ZW1zLCAoaW5kZXgsIHN5c3RlbSkgPT4ge1xyXG4gICAgICAgIHN5c3RlbV9odG1sICs9IGA8b3B0aW9uPiR7c3lzdGVtfTwvb3B0aW9uPmBcclxuICAgIH0pXHJcbiAgICAkKCcjc3lzdGVtXycpLmFwcGVuZChzeXN0ZW1faHRtbCk7XHJcbiAgICBsZXQgc2VsZWN0ZWRTeXN0ZW0gPSAkKCcjc3lzdGVtXycpLnZhbCgpO1xyXG4gICAgY2hhbmdlRW9kU2VyaWFsRGlzcGxheShzZWxlY3RlZFN5c3RlbSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRfcnVudGltZV9jYWxsYmFjayA9IChydW50aW1lX2QpID0+IHtcclxuICAgIGFsbF9ydW50aW1lX2RhdGEgPSBydW50aW1lX2RbXCJydW50aW1lX2RhdGFcIl07XHJcbiAgICAgJCgnI292ZXJsYXknKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59XHJcblxyXG4kKCcjcnVudGltZV9jbG9ja19zaG93JykuY2xpY2soKCkgPT4ge1xyXG4gICAgY2xvY2tfdGFibGVfaHRtbCgpO1xyXG4gICAgcG9wdWxhdGVIaXN0b3JpY2FsRGF0YSgpO1xyXG59KVxyXG5cclxuXHJcbmNvbnN0IGNsb2NrX3RhYmxlX2h0bWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgd3JhcHBlciA9ICQoJy5ydW50aW1lX3RhYmxlJyk7XHJcbiAgICB3cmFwcGVyLmh0bWwoJycpO1xyXG4gICAgbGV0IHRyX2h0bWwgPSBgYDtcclxuICAgIGxldCBzZWxlY3RlZF9zeXN0ZW0gPSAkKCcjc3lzdGVtXycpLnZhbCgpO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gJCgnI3BsYXRmb3JtXycpLnZhbCgpO1xyXG4gICAgbGV0IHRhYmxlX2h0bWxfO1xyXG4gICAgaWYgKHNlbGVjdGVkX3N5c3RlbSA9PT0gJ0VPRCcpe1xyXG4gICAgICAgIHRhYmxlX2h0bWxfID0gcG9wdWxhdGVfRVBTKCk7XHJcbiAgICB9ZWxzZSBpZihzZWxlY3RlZF9zeXN0ZW0gPT09ICdNRlNUQVInKXtcclxuICAgICAgICB0YWJsZV9odG1sXyA9IHBvcHVsYXRlX01GU1RBUigpO1xyXG4gICAgfWVsc2UgaWYoc2VsZWN0ZWRfc3lzdGVtID09PSAnV0NTJyl7XHJcbiAgICAgICAgdGFibGVfaHRtbF8gPSBwb3B1bGF0ZV9XQ1MoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFibGVfaHRtbCA9IGA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtZGFyayB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj4ke3RhYmxlX2h0bWxfWzBdfTwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGFibGVfaHRtbF9bMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1iLTIgbXItMiBidG4gYnRuLWRhbmdlclwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O2Rpc3BsYXk6IG5vbmVcIiBpZD1cImRpc2NhcmRTYXZlUnVudGltZVwiPkRpc2NhcmQgRXJyb3IgYW5kIFNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtYi0yIG1yLTIgYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCIgaWQ9XCJzYXZlX2Nsb2NrX3J1bnRpbWVcIj5TYXZlIFVwZGF0ZWQgUnVudGltZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgd3JhcHBlci5hcHBlbmQodGFibGVfaHRtbCk7XHJcbiAgICAkKCcjZGF0ZScpLmRhdGVwaWNrZXIoIHtcclxuICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxyXG4gICAgICAgIHNob3dCdXR0b25QYW5lbDogdHJ1ZSxcclxuICAgICAgICBkYXRlRm9ybWF0OiAnTU0geXknLFxyXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uKGRhdGVUZXh0LCBpbnN0KSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIDEpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vICQoJyNkYXRlJykuY2xpY2soKCkgPT4ge1xyXG4gICAgLy8gICAgIGFsZXJ0KCdhSGVsbG8nKX0pXHJcbn07XHJcblxyXG5cclxuXHJcbi8vXHJcbi8vICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkX2Nsb2NrX2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZEaWFsb2cnKTtcclxuLy8gICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuLy8gICAgIGN1cnJlbnRfdGhpcyA9IHRoaXM7XHJcbi8vIH0pO1xyXG5cclxuLy8gZGlhbG9nIGNvbmZpcm1CdG4gY2xpY2tcclxuJCgnI2NvbmZpcm1CdG4nKS5jbGljaygoKSA9PiB7XHJcbiAgIGxldCBjbGtfbmFtZSA9ICQoJyNkaWFsb2dfaW5wdXRfdmFsJykudmFsKCk7XHJcbiAgIGxldCBwcmV2X3Rkc19sZW5ndGggPSAkKGN1cnJlbnRfdGhpcykuY2xvc2VzdCgndHInKS5jaGlsZHJlbigpLmxlbmd0aDtcclxuICAgbGV0IG5ld190ZF9odG1sID0gIGA8dGQ+PGlucHV0IHBsYWNlaG9sZGVyPVwiJHtjbGtfbmFtZX1cIiAgdXVpZD1cIiNcIi8+PC90ZD5gO1xyXG4gICAkKGN1cnJlbnRfdGhpcykuY2xvc2VzdCgndHIgdGQnKS5iZWZvcmUobmV3X3RkX2h0bWwpO1xyXG59KTtcclxuXHJcblxyXG4vL1NhdmluZyBSdW50aW1lXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc2F2ZV9jbG9ja19ydW50aW1lJywgKCkgPT4ge1xyXG4gICAgbGV0IGFsbF90ciA9ICQoJy5ydW50aW1lX3RhYmxlIHRhYmxlIHRib2R5IHRyJyk7XHJcbiAgICBsZXQgcnVudGltZV9kYXRhXyA9IFtdO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gJCgnI3BsYXRmb3JtXycpLnZhbCgpO1xyXG4gICAgbGV0IHN5c3RlbSA9ICQoJyNzeXN0ZW1fJykudmFsKCk7XHJcbiAgICBsZXQgc2VyaWFsX251bSA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9ja0dyZWF0ZXIgPSB0cnVlO1xyXG4gICAgaWYoc3lzdGVtID09PSAnRU9EJyl7XHJcbiAgICAgICAgc2VyaWFsX251bSA9ICQoJyNlb2Rfc2VyaWFsX251bScpLnZhbCgpO1xyXG4gICAgfVxyXG4gICAgJC5lYWNoKGFsbF90ciwgKHRyX2luZGV4LCB0cl92YWwpID0+IHtcclxuICAgICAgICBsZXQgYWxsX3RkcyA9ICQodHJfdmFsKS5maW5kKCd0ZCcpO1xyXG4gICAgICAgIGxldCBjbG9ja19kYXRhID0gW107XHJcbiAgICAgICAgJC5lYWNoKGFsbF90ZHMsIChjX2luZGV4LCBjX3ZhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjX2luZGV4ID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvY2tfbmFtZSA9ICQoY192YWwpLmZpbmQoJ2lucHV0JykuYXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgICAgIGxldCByRF8gPSBhbGxfcnVudGltZV9kYXRhLmZpbHRlcih4ID0+IHguY2xvY2tfbmFtZSA9PT0gY2xvY2tfbmFtZSAmJiB4LnNlcmlhbF9udW0gPT09IHNlcmlhbF9udW0pO1xyXG4gICAgICAgICAgICAgICAgc29ydERhdGUockRfKTtcclxuICAgICAgICAgICAgICAgIHJEXyA9IHJEX1tyRF8ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvY2tfdmFsID0gJChjX3ZhbCkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlmKGNsb2NrX3ZhbCA8IHJEXy5ydW50aW1lX3ZhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDbG9ja0dyZWF0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtb21lbnRfZGF0ZSA9IG1vbWVudCgkKCcjZGF0ZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2RhdGUgPSBtb21lbnRfZGF0ZS5nZXQoJ2RhdGUnKSArICctJyArIChtb21lbnRfZGF0ZS5nZXQoJ21vbnRoJykgKyAxKSArICctJyArIG1vbWVudF9kYXRlLmdldCgneWVhcicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHV1aWQgPSB1dWlkdjQoKTtcclxuICAgICAgICAgICAgICAgIGNsb2NrX2RhdGEucHVzaCh7J2Nsb2NrX25hbWUnOiBjbG9ja19uYW1lLCAnY2xvY2tfdmFsJzogY2xvY2tfdmFsLCAnZGF0ZSc6IGN1cnJlbnRfZGF0ZSwgJ3V1aWQnOiB1dWlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnVudGltZV9kYXRhXy5wdXNoKHtwbGF0Zm9ybTogcGxhdGZvcm0sIHN5c3RlbTogc3lzdGVtLGNsb2NrX2RhdGE6IGNsb2NrX2RhdGEsIHNlcmlhbE51bTogc2VyaWFsX251bX0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaXNDbG9ja0dyZWF0ZXIgPT09IHRydWUpe1xyXG4gICAgICAgIHNhdmVfY2xvY2tfZGF0YShydW50aW1lX2RhdGFfKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIlBsZWFzZSBjaGVjayB0aGUgY2xvY2sgdGltZSBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIHByZXZpb3VzIHZhbHVlIS4gSWYgeW91IHN0aWxsIHdhbnQgdG8gcHJvY2VlZCBwbGVhc2UgY2xpY2sgb24gUmVkIEJ1dHRvbi5cIik7XHJcbiAgICAgICAgJCgnI3NhdmVfY2xvY2tfcnVudGltZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgJCgnI2Rpc2NhcmRTYXZlUnVudGltZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZGlzY2FyZFNhdmVSdW50aW1lJywgKCkgPT4ge1xyXG4gICAgbGV0IGFsbF90ciA9ICQoJy5ydW50aW1lX3RhYmxlIHRhYmxlIHRib2R5IHRyJyk7XHJcbiAgICBsZXQgcnVudGltZV9kYXRhXyA9IFtdO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gJCgnI3BsYXRmb3JtXycpLnZhbCgpO1xyXG4gICAgbGV0IHN5c3RlbSA9ICQoJyNzeXN0ZW1fJykudmFsKCk7XHJcbiAgICBsZXQgc2VyaWFsX251bSA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9ja0dyZWF0ZXIgPSB0cnVlO1xyXG4gICAgaWYoc3lzdGVtID09PSAnRU9EJyl7XHJcbiAgICAgICAgc2VyaWFsX251bSA9ICQoJyNlb2Rfc2VyaWFsX251bScpLnZhbCgpO1xyXG4gICAgfVxyXG4gICAgJC5lYWNoKGFsbF90ciwgKHRyX2luZGV4LCB0cl92YWwpID0+IHtcclxuICAgICAgICBsZXQgYWxsX3RkcyA9ICQodHJfdmFsKS5maW5kKCd0ZCcpO1xyXG4gICAgICAgIGxldCBjbG9ja19kYXRhID0gW107XHJcbiAgICAgICAgJC5lYWNoKGFsbF90ZHMsIChjX2luZGV4LCBjX3ZhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjX2luZGV4ID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvY2tfbmFtZSA9ICQoY192YWwpLmZpbmQoJ2lucHV0JykuYXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbG9ja192YWwgPSAkKGNfdmFsKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbWVudF9kYXRlID0gbW9tZW50KCQoJyNkYXRlJykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfZGF0ZSA9IG1vbWVudF9kYXRlLmdldCgnZGF0ZScpICsgJy0nICsgKG1vbWVudF9kYXRlLmdldCgnbW9udGgnKSArIDEpICsgJy0nICsgbW9tZW50X2RhdGUuZ2V0KCd5ZWFyJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXVpZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICAgICAgY2xvY2tfZGF0YS5wdXNoKHsnY2xvY2tfbmFtZSc6IGNsb2NrX25hbWUsICdjbG9ja192YWwnOiBjbG9ja192YWwsICdkYXRlJzogY3VycmVudF9kYXRlLCAndXVpZCc6IHV1aWQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBydW50aW1lX2RhdGFfLnB1c2goe3BsYXRmb3JtOiBwbGF0Zm9ybSwgc3lzdGVtOiBzeXN0ZW0sY2xvY2tfZGF0YTogY2xvY2tfZGF0YSwgc2VyaWFsTnVtOiBzZXJpYWxfbnVtfSk7XHJcbiAgICB9KTtcclxuICAgIHNhdmVfY2xvY2tfZGF0YShydW50aW1lX2RhdGFfKTtcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc2F2ZV9jbG9ja19kYXRhID0gKGNsb2NrX2RhdGEpID0+IHtcclxuICAgIGFqYXhQb3N0KCcvc2F2ZV9ydW50aW1lJywgY2xvY2tfZGF0YSwgc2F2ZV9ydW50aW1lX2NhbGxiYWNrKTtcclxufVxyXG5jb25zdCBzYXZlX3J1bnRpbWVfY2FsbGJhY2sgPSAoZCkgPT4ge1xyXG4gICAgaWYoZC5pZl9lcnJvcil7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGQubWVzc2FnZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhkLm1lc3NhZ2UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAvLyBsZXQgd3JhcHBlciA9ICQoJy5ydW50aW1lX3RhYmxlJyk7XHJcbiAgICAgICAgLy8gd3JhcHBlci5odG1sKCcnKTtcclxuICAgICAgICAvLyAkKCcucnVudGltZV9oaXN0b3J5XycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vUGxhdGZvcm0gc2VsZWN0IG9uIGNoYW5nZS5cclxuLy8gJCgnI3BsYXRmb3JtXycpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbi8vICAgIHN5c3RlbV9wb3B1bGF0ZSgpO1xyXG4vLyB9KTtcclxuLy9TeXN0ZW0gY2hhbmdlIGZ1bmN0aW9uIHRvIGVuYWJsZSBzZXJpYWwgbnVtYmVyIHNlbGVjdCBmaWVsZCBpbiBjYXNlIG9mIEVPRCBhbmQgaGlkZSBpbiBvdGhlciBjYXNlcy5cclxuJCgnI3N5c3RlbV8nKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkU3lzdGVtID0gJCgnI3N5c3RlbV8nKS52YWwoKTtcclxuICAgIHBvcHVsYXRlUGxhdGZvcm0oKTtcclxuICAgIGNoYW5nZUVvZFNlcmlhbERpc3BsYXkoc2VsZWN0ZWRTeXN0ZW0pO1xyXG59KVxyXG5jb25zdCBjaGFuZ2VFb2RTZXJpYWxEaXNwbGF5ID0gKHNlbGVjdGVkU3lzdGVtKSA9PiB7XHJcbiAgICBpZihzZWxlY3RlZFN5c3RlbSA9PT0gJ0VPRCcpe1xyXG4gICAgICAgICQoJy5lb2Qtc2VyaWFsLWRpdicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5wbGF0Zm9ybV9kaXYnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLmVvZC1zZXJpYWwtZGl2JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKCcucGxhdGZvcm1fZGl2JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBwb3B1bGF0ZUhpc3RvcmljYWxEYXRhID0gKCkgPT4ge1xyXG4gICAgJCgnLnJ1bnRpbWVfaGlzdG9yeV8nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIGxldCBwbGF0Zm9ybSA9ICQoJyNwbGF0Zm9ybV8nKS52YWwoKTtcclxuICAgIGxldCBzeXN0ZW0gPSAkKCcjc3lzdGVtXycpLnZhbCgpO1xyXG4gICAgbGV0IHNlcmlhbF9udW0gPSBudWxsO1xyXG4gICAgaWYoc3lzdGVtID09PSAnRU9EJyl7XHJcbiAgICAgICAgc2VyaWFsX251bSA9ICQoJyNlb2Rfc2VyaWFsX251bScpLnZhbCgpO1xyXG4gICAgfTtcclxuICAgIGxldCBmaWx0ZXJlZF9kYXRhID0gYWxsX3J1bnRpbWVfZGF0YS5maWx0ZXIoeCA9PiB4LnN5c3RlbSA9PT0gc3lzdGVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgeC5wbGF0Zm9ybSA9PT0gcGxhdGZvcm0gJiYgeC5zZXJpYWxfbnVtID09PSBzZXJpYWxfbnVtKTtcclxuICAgIGxldCB0YWJsZV9oZWFkX3dyYXBwZXIgPSAkKCcucnVudGltZV9oaXN0b3J5XyB0YWJsZSB0aGVhZCcpO1xyXG4gICAgbGV0IHRhYmxlX2JvZHlfd3JhcHBlciA9ICQoJy5ydW50aW1lX2hpc3RvcnlfIHRhYmxlIHRib2R5Jyk7XHJcbiAgICB0YWJsZV9ib2R5X3dyYXBwZXIuaHRtbCgnJyk7XHJcbiAgICB0YWJsZV9oZWFkX3dyYXBwZXIuaHRtbCgnJyk7XHJcbiAgICBpZiAoZmlsdGVyZWRfZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc29ydERhdGUoZmlsdGVyZWRfZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCB0YWJlbF9odG1sO1xyXG4gICAgICAgICAgICBpZihzeXN0ZW0gPT09ICdFT0QnKXtcclxuICAgICAgICAgICAgICAgIHRhYmVsX2h0bWwgPSBwb3B1bGF0ZUhpc3RvcmljYWxFUFMoZmlsdGVyZWRfZGF0YSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHN5c3RlbSA9PT0gJ01GU1RBUicpe1xyXG4gICAgICAgICAgICAgICAgdGFiZWxfaHRtbCA9IHBvcHVsYXRlSGlzdG9yaWNhbE1GU1RBUihmaWx0ZXJlZF9kYXRhKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoc3lzdGVtID09PSAnV0NTJyl7XHJcbiAgICAgICAgICAgICAgICB0YWJlbF9odG1sID0gcG9wdWxhdGVIaXN0b3JpY2FsV0NTKGZpbHRlcmVkX2RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRhYmVsX2h0bWwpe1xyXG4gICAgICAgICAgICAgdGFibGVfaGVhZF93cmFwcGVyLmFwcGVuZCh0YWJlbF9odG1sWzBdKTtcclxuICAgICAgICAgICAgIHRhYmxlX2JvZHlfd3JhcHBlci5hcHBlbmQodGFiZWxfaHRtbFsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3JlYXRpbmcgZnVuY3Rpb25zIGZvciBlYWNoIHN5c3RlbSBmb3IgcG9wdWxhdGluZyB0YWJsZSBoZWFkZXIgYW5kIGJvZHkuXHJcbmNvbnN0IHBvcHVsYXRlX0VQUyA9ICgpID0+IHtcclxuICAgIGxldCBwbGF0Zm9ybSA9ICQoJyNwbGF0Zm9ybV8nKS52YWwoKTtcclxuICAgIGxldCB0aGVhZF9odG1sID0gYDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVPRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICBsZXQgdGJvZHlfaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkYXRlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVPRFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgcmV0dXJuIFt0aGVhZF9odG1sLCB0Ym9keV9odG1sXTtcclxufTtcclxuY29uc3QgcG9wdWxhdGVfTUZTVEFSID0gKCkgPT4ge1xyXG4gICAgbGV0IHBsYXRmb3JtID0gJCgnI3BsYXRmb3JtXycpLnZhbCgpO1xyXG4gICAgbGV0IHRoZWFkX2h0bWwgPSBgPHRoPkRhdGU8L3RoPjx0aD5NRlNUQVIgTWFzdGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgIGxldCB0Ym9keV9odG1sID0gYDx0cj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkYXRlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1GU1RBUiBNYXN0ZXJcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgIHJldHVybiBbdGhlYWRfaHRtbCwgdGJvZHlfaHRtbF07XHJcbn07XHJcbmNvbnN0IHBvcHVsYXRlX1dDUyA9ICgpID0+IHtcclxuICAgIGxldCBwbGF0Zm9ybSA9ICQoJyNwbGF0Zm9ybV8nKS52YWwoKTtcclxuICAgIGxldCB0aGVhZF9odG1sID0gYCAgPHRoPkRhdGU8L3RoPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NRkMgMTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NRkMgMjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NRkMgMzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5VUFMgRldEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVQUyBBRlQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+R0NVPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxDVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETFU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgbGV0IHRib2R5X2h0bWwgPSBgPHRyPiAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZGF0ZVwiPjwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1GQyAxXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTUZDIDJcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG1mYzNcIiBwbGFjZWhvbGRlcj1cIk1GQyAzXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVVBTIEZXRFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVQUyBBRlRcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGdjdVwiIHBsYWNlaG9sZGVyPVwiR0NVXCIgZGlzYWJsZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBsY3VcIiBwbGFjZWhvbGRlcj1cIkxDVVwiIGRpc2FibGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZGx1XCIgcGxhY2Vob2xkZXI9XCJETFVcIiBkaXNhYmxlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgIHJldHVybiBbdGhlYWRfaHRtbCwgdGJvZHlfaHRtbF07XHJcbn07XHJcblxyXG4vL1BvcHVsYXRpbmcgdGFibGUgaGVhZCBhbmQgYm9keSBmb3IgaGlzdG9yaWNhbCBkYXRhLlxyXG5jb25zdCBwb3B1bGF0ZUhpc3RvcmljYWxFUFMgPSAoZmlsdGVyZWRfZGF0YSkgPT4ge1xyXG4gICAgbGV0IHRoZWFkX2h0bWwgPSBgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlMuUi5Oby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBTdWJtaXR0ZWQ8L3RoPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FT0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgbGV0IHRib2R5X2h0bWwgPSBgYDtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBkb3tcclxuICAgICAgICBsZXQgZmlyc3QycHRzID0gZmlsdGVyZWRfZGF0YS5zbGljZSgwLDEpO1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgZmlsdGVyZWRfZGF0YS5zaGlmdCgpO1xyXG4gICAgICAgIGxldCBkYXRlXyA9IG1vbWVudChmaXJzdDJwdHNbMF0ucHJldl9kYXRlLCAnZGRkLCBERCBNTU0gWVlZWScpO1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZV8uZ2V0KCdkYXRlJykgKyAnLScgK1xyXG4gICAgICAgICAgICAgICAgICAgICgrZGF0ZV8uZ2V0KCdtb250aCcpICsgMSkgKyAnLScgKyBkYXRlXy5nZXQoJ3llYXInKTtcclxuICAgICAgICAvLyBsZXQgZW9kRndkQ2xvY2tWYWx1ZSA9IGZpcnN0MnB0cy5maWx0ZXIoeCA9PiB4LmNsb2NrX25hbWUgPT09ICdFT0QgRldEJylbMF0ucnVudGltZV92YWw7XHJcbiAgICAgICAgLy8gbGV0IGVvZEFmdENsb2NrVmFsdWUgPSBmaXJzdDJwdHMuZmlsdGVyKHggPT4geC5jbG9ja19uYW1lID09PSAnRU9EIEFGVCcpWzBdLnJ1bnRpbWVfdmFsO1xyXG4gICAgICAgIHRib2R5X2h0bWwgKz0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NvdW50fTwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2Zvcm1hdHRlZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVPRFwiIGRpc2FibGVkIHZhbHVlPVwiJHtmaXJzdDJwdHNbMF0ucnVudGltZV92YWx9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICB9d2hpbGUoZmlsdGVyZWRfZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgcmV0dXJuIFt0aGVhZF9odG1sLCB0Ym9keV9odG1sXTtcclxufVxyXG5jb25zdCBwb3B1bGF0ZUhpc3RvcmljYWxNRlNUQVIgPSAoZmlsdGVyZWRfZGF0YSkgPT4ge1xyXG4gICAgbGV0IHRoZWFkX2h0bWwgPSBgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlMuUi5Oby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBTdWJtaXR0ZWQ8L3RoPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NRlNUQVIgTWFzdGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgIGxldCB0Ym9keV9odG1sID0gYGA7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZG97XHJcbiAgICAgICAgbGV0IGZpcnN0MnB0cyA9IGZpbHRlcmVkX2RhdGEuc2xpY2UoMCwxKTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGZpbHRlcmVkX2RhdGEuc2hpZnQoKTtcclxuICAgICAgICBsZXQgZGF0ZV8gPSBtb21lbnQoZmlyc3QycHRzWzBdLnByZXZfZGF0ZSwgJ2RkZCwgREQgTU1NIFlZWVknKTtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGVfLmdldCgnZGF0ZScpICsgJy0nICtcclxuICAgICAgICAgICAgICAgICAgICAoK2RhdGVfLmdldCgnbW9udGgnKSArIDEpICsgJy0nICsgZGF0ZV8uZ2V0KCd5ZWFyJyk7XHJcbiAgICAgICAgdGJvZHlfaHRtbCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y291bnR9PC90ZD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Zm9ybWF0dGVkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTUZTVEFSIE1hc3RlclwiIGRpc2FibGVkIHZhbHVlPVwiJHtmaXJzdDJwdHNbMF0ucnVudGltZV92YWx9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICB9d2hpbGUoZmlsdGVyZWRfZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgcmV0dXJuIFt0aGVhZF9odG1sLCB0Ym9keV9odG1sXTtcclxufVxyXG5jb25zdCBwb3B1bGF0ZUhpc3RvcmljYWxXQ1MgPSAoZmlsdGVyZWRfZGF0YSkgPT4ge1xyXG4gICAgaWYoZmlsdGVyZWRfZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICBsZXQgdGhlYWRfaHRtbCA9IGAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Uy5SLk5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIFN1Ym1pdHRlZDwvdGg+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1GQyAxPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1GQyAyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1GQyAzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVQUyBGV0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VVBTIEFGVDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HQ1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TENVPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRMVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgbGV0IHRib2R5X2h0bWwgPSBgYDtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZG97XHJcbiAgICAgICAgbGV0IGZpcnN0OHB0cyA9IGZpbHRlcmVkX2RhdGEuc2xpY2UoMCw4KTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDg7aSsrKXtcclxuICAgICAgICAgZmlsdGVyZWRfZGF0YS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF0ZV8gPSBtb21lbnQoZmlyc3Q4cHRzWzBdLnByZXZfZGF0ZSwgJ2RkZCwgREQgTU1NIFlZWVknKTtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGVfLmdldCgnZGF0ZScpICsgJy0nICtcclxuICAgICAgICAgICAgICAgICAgICAoK2RhdGVfLmdldCgnbW9udGgnKSArIDEpICsgJy0nICsgZGF0ZV8uZ2V0KCd5ZWFyJyk7XHJcbiAgICAgICAgbGV0IG1mYzEgPSBmaXJzdDhwdHMuZmlsdGVyKHggPT4geC5jbG9ja19uYW1lID09PSAnTUZDIDEnKVswXS5ydW50aW1lX3ZhbDtcclxuICAgICAgICBsZXQgbWZjMiA9IGZpcnN0OHB0cy5maWx0ZXIoeCA9PiB4LmNsb2NrX25hbWUgPT09ICdNRkMgMicpWzBdLnJ1bnRpbWVfdmFsO1xyXG4gICAgICAgIGxldCBtZmMzID0gZmlyc3Q4cHRzLmZpbHRlcih4ID0+IHguY2xvY2tfbmFtZSA9PT0gJ01GQyAzJylbMF0ucnVudGltZV92YWw7XHJcbiAgICAgICAgbGV0IHVwc0ZXRCA9IGZpcnN0OHB0cy5maWx0ZXIoeCA9PiB4LmNsb2NrX25hbWUgPT09ICdVUFMgRldEJylbMF0ucnVudGltZV92YWw7XHJcbiAgICAgICAgbGV0IHVwc0FGVCA9IGZpcnN0OHB0cy5maWx0ZXIoeCA9PiB4LmNsb2NrX25hbWUgPT09ICdVUFMgQUZUJylbMF0ucnVudGltZV92YWw7XHJcbiAgICAgICAgbGV0IGdjdSA9IGZpcnN0OHB0cy5maWx0ZXIoeCA9PiB4LmNsb2NrX25hbWUgPT09ICdHQ1UnKVswXS5ydW50aW1lX3ZhbDtcclxuICAgICAgICBsZXQgbGN1ID0gZmlyc3Q4cHRzLmZpbHRlcih4ID0+IHguY2xvY2tfbmFtZSA9PT0gJ0xDVScpWzBdLnJ1bnRpbWVfdmFsO1xyXG4gICAgICAgIGxldCBkbHUgPSBmaXJzdDhwdHMuZmlsdGVyKHggPT4geC5jbG9ja19uYW1lID09PSAnRExVJylbMF0ucnVudGltZV92YWw7XHJcblxyXG4gICAgICAgIHRib2R5X2h0bWwgKz0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NvdW50fTwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2Zvcm1hdHRlZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1GQyAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCB2YWx1ZT1cIiR7bWZjMX1cIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTUZDIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkIHZhbHVlPVwiJHttZmMyfVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNRkMgM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgdmFsdWU9XCIke21mYzN9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVQUyBGV0RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkIHZhbHVlPVwiJHt1cHNGV0R9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVQUyBBRlRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkIHZhbHVlPVwiJHt1cHNBRlR9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkdDVVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgdmFsdWU9XCIke2djdX1cIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTENVXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCB2YWx1ZT1cIiR7bGN1fVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJETFVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkIHZhbHVlPVwiJHtkbHV9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICB9d2hpbGUoZmlsdGVyZWRfZGF0YS5sZW5ndGggPiA3KVxyXG4gICAgcmV0dXJuIFt0aGVhZF9odG1sLCB0Ym9keV9odG1sXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHNvcnREYXRlID0gKGFycmF5KSA9PiB7XHJcbiAgICBhcnJheS5zb3J0KHNvcnRGdW5jdGlvbik7XHJcbn1cclxuY29uc3Qgc29ydEZ1bmN0aW9uID0gKGEsYikgPT4ge1xyXG4gICAgbGV0IGRhdGVBID0gbmV3IERhdGUobW9tZW50KGEucHJldl9kYXRlLCAnZGRkLCBERCBNTU0gWVlZWSBISDptbTpzcycpKTtcclxuICAgIGxldCBkYXRlQiA9IG5ldyBEYXRlKG1vbWVudChiLnByZXZfZGF0ZSwgJ2RkZCwgREQgTU1NIFlZWVkgSEg6bW06c3MnKSlcclxuICAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gMSA6IC0xO1xyXG59XHJcbi8vQXV0byBmaWxsIEdDVSwgTENVLCBETFUgYXMgNDAlLCAzMCUsIDMwJSBvZiBNRkMzXHJcbiQoZG9jdW1lbnQpLm9uKCdmb2N1c291dCcsICcubWZjMycsICgpID0+IHtcclxuICAgIGxldCBtZmMzVmFsdWUgPSArJCgnLm1mYzMnKS52YWwoKTtcclxuICAgIGxldCBnY3VWYWx1ZSA9IG1mYzNWYWx1ZSowLjQ7XHJcbiAgICBsZXQgbGN1VmFsdWUgPSBtZmMzVmFsdWUqMC4zO1xyXG4gICAgbGV0IGRsdVZhbHVlID0gbWZjM1ZhbHVlKjAuMztcclxuICAgICQoJy5nY3UnKS52YWwoZ2N1VmFsdWUpO1xyXG4gICAgJCgnLmxjdScpLnZhbChsY3VWYWx1ZSk7XHJcbiAgICAkKCcuZGx1JykudmFsKGRsdVZhbHVlKTtcclxufSk7XHJcbi8vbG9nb3V0LlxyXG4kKCcjbG9nb3V0JykuY2xpY2soKCkgPT4ge1xyXG5hamF4R2V0KCcvbG9nb3V0Jywge30sIGxvZ291dClcclxufSk7XHJcbmNvbnN0IGxvZ291dCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=