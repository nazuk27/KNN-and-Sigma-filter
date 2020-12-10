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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/chartjs-plugin-annotation.js":
/*!*********************************************!*\
  !*** ./static/chartjs-plugin-annotation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * chartjs-plugin-annotation.js
 * http://chartjs.org/
 * Version: 0.5.7
 *
 * Copyright 2016 Evert Timberg
 * Released under the MIT license
 * https://github.com/chartjs/Chart.Annotation.js/blob/master/LICENSE.md
 */
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) s(r[o]);

  return s;
})({
  1: [function (require, module, exports) {}, {}],
  2: [function (require, module, exports) {
    module.exports = function (Chart) {
      var chartHelpers = Chart.helpers;

      var helpers = require('./helpers.js')(Chart);

      var events = require('./events.js')(Chart);

      var annotationTypes = Chart.Annotation.types;

      function setAfterDataLimitsHook(axisOptions) {
        helpers.decorate(axisOptions, 'afterDataLimits', function (previous, scale) {
          if (previous) previous(scale);
          helpers.adjustScaleRange(scale);
        });
      }

      function draw(drawTime) {
        return function (chartInstance, easingDecimal) {
          var defaultDrawTime = chartInstance.annotation.options.drawTime;
          helpers.elements(chartInstance).filter(function (element) {
            return drawTime === (element.options.drawTime || defaultDrawTime);
          }).forEach(function (element) {
            element.transition(easingDecimal).draw();
          });
        };
      }

      return {
        beforeInit: function (chartInstance) {
          var chartOptions = chartInstance.options; // Initialize chart instance plugin namespace

          var ns = chartInstance.annotation = {
            elements: {},
            options: helpers.initConfig(chartOptions.annotation || {}),
            onDestroy: [],
            firstRun: true,
            supported: false
          }; // Add the annotation scale adjuster to each scale's afterDataLimits hook

          chartInstance.ensureScalesHaveIDs();

          if (chartOptions.scales) {
            ns.supported = true;
            chartHelpers.each(chartOptions.scales.xAxes, setAfterDataLimitsHook);
            chartHelpers.each(chartOptions.scales.yAxes, setAfterDataLimitsHook);
          }
        },
        beforeUpdate: function (chartInstance) {
          var ns = chartInstance.annotation;

          if (!ns.supported) {
            return;
          }

          if (!ns.firstRun) {
            ns.options = helpers.initConfig(chartInstance.options.annotation || {});
          } else {
            ns.firstRun = false;
          }

          var elementIds = []; // Add new elements, or update existing ones

          ns.options.annotations.forEach(function (annotation) {
            var id = annotation.id || helpers.objectId(); // No element with that ID exists, and it's a valid annotation type

            if (!ns.elements[id] && annotationTypes[annotation.type]) {
              var cls = annotationTypes[annotation.type];
              var element = new cls({
                id: id,
                options: annotation,
                chartInstance: chartInstance
              });
              element.initialize();
              ns.elements[id] = element;
              annotation.id = id;
              elementIds.push(id);
            } else if (ns.elements[id]) {
              // Nothing to do for update, since the element config references
              // the same object that exists in the chart annotation config
              elementIds.push(id);
            }
          }); // Delete removed elements

          Object.keys(ns.elements).forEach(function (id) {
            if (elementIds.indexOf(id) === -1) {
              ns.elements[id].destroy();
              delete ns.elements[id];
            }
          });
        },
        afterScaleUpdate: function (chartInstance) {
          helpers.elements(chartInstance).forEach(function (element) {
            element.configure();
          });
        },
        beforeDatasetsDraw: draw('beforeDatasetsDraw'),
        afterDatasetsDraw: draw('afterDatasetsDraw'),
        afterDraw: draw('afterDraw'),
        afterInit: function (chartInstance) {
          // Detect and intercept events that happen on an annotation element
          var watchFor = chartInstance.annotation.options.events;

          if (chartHelpers.isArray(watchFor) && watchFor.length > 0) {
            var canvas = chartInstance.chart.canvas;
            var eventHandler = events.dispatcher.bind(chartInstance);
            events.collapseHoverEvents(watchFor).forEach(function (eventName) {
              chartHelpers.addEvent(canvas, eventName, eventHandler);
              chartInstance.annotation.onDestroy.push(function () {
                chartHelpers.removeEvent(canvas, eventName, eventHandler);
              });
            });
          }
        },
        destroy: function (chartInstance) {
          var deregisterers = chartInstance.annotation.onDestroy;

          while (deregisterers.length > 0) {
            deregisterers.pop()();
          }
        }
      };
    };
  }, {
    "./events.js": 4,
    "./helpers.js": 5
  }],
  3: [function (require, module, exports) {
    module.exports = function (Chart) {
      var chartHelpers = Chart.helpers;
      var AnnotationElement = Chart.Element.extend({
        initialize: function () {
          this.hidden = false;
          this.hovering = false;
          this._model = chartHelpers.clone(this._model) || {};
          this.setDataLimits();
        },
        destroy: function () {},
        setDataLimits: function () {},
        configure: function () {},
        inRange: function () {},
        getCenterPoint: function () {},
        getWidth: function () {},
        getHeight: function () {},
        getArea: function () {},
        draw: function () {}
      });
      return AnnotationElement;
    };
  }, {}],
  4: [function (require, module, exports) {
    module.exports = function (Chart) {
      var chartHelpers = Chart.helpers;

      var helpers = require('./helpers.js')(Chart);

      function collapseHoverEvents(events) {
        var hover = false;
        var filteredEvents = events.filter(function (eventName) {
          switch (eventName) {
            case 'mouseenter':
            case 'mouseover':
            case 'mouseout':
            case 'mouseleave':
              hover = true;
              return false;

            default:
              return true;
          }
        });

        if (hover && filteredEvents.indexOf('mousemove') === -1) {
          filteredEvents.push('mousemove');
        }

        return filteredEvents;
      }

      function dispatcher(e) {
        var ns = this.annotation;
        var elements = helpers.elements(this);
        var position = chartHelpers.getRelativePosition(e, this.chart);
        var element = helpers.getNearestItems(elements, position);
        var events = collapseHoverEvents(ns.options.events);
        var dblClickSpeed = ns.options.dblClickSpeed;
        var eventHandlers = [];
        var eventHandlerName = helpers.getEventHandlerName(e.type);
        var options = (element || {}).options; // Detect hover events

        if (e.type === 'mousemove') {
          if (element && !element.hovering) {
            // hover started
            ['mouseenter', 'mouseover'].forEach(function (eventName) {
              var eventHandlerName = helpers.getEventHandlerName(eventName);
              var hoverEvent = helpers.createMouseEvent(eventName, e); // recreate the event to match the handler

              element.hovering = true;

              if (typeof options[eventHandlerName] === 'function') {
                eventHandlers.push([options[eventHandlerName], hoverEvent, element]);
              }
            });
          } else if (!element) {
            // hover ended
            elements.forEach(function (element) {
              if (element.hovering) {
                element.hovering = false;
                var options = element.options;
                ['mouseout', 'mouseleave'].forEach(function (eventName) {
                  var eventHandlerName = helpers.getEventHandlerName(eventName);
                  var hoverEvent = helpers.createMouseEvent(eventName, e); // recreate the event to match the handler

                  if (typeof options[eventHandlerName] === 'function') {
                    eventHandlers.push([options[eventHandlerName], hoverEvent, element]);
                  }
                });
              }
            });
          }
        } // Suppress duplicate click events during a double click
        // 1. click -> 2. click -> 3. dblclick
        //
        // 1: wait dblClickSpeed ms, then fire click
        // 2: cancel (1) if it is waiting then wait dblClickSpeed ms then fire click, else fire click immediately
        // 3: cancel (1) or (2) if waiting, then fire dblclick 


        if (element && events.indexOf('dblclick') > -1 && typeof options.onDblclick === 'function') {
          if (e.type === 'click' && typeof options.onClick === 'function') {
            clearTimeout(element.clickTimeout);
            element.clickTimeout = setTimeout(function () {
              delete element.clickTimeout;
              options.onClick.call(element, e);
            }, dblClickSpeed);
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
          } else if (e.type === 'dblclick' && element.clickTimeout) {
            clearTimeout(element.clickTimeout);
            delete element.clickTimeout;
          }
        } // Dispatch the event to the usual handler, but only if we haven't substituted it


        if (element && typeof options[eventHandlerName] === 'function' && eventHandlers.length === 0) {
          eventHandlers.push([options[eventHandlerName], e, element]);
        }

        if (eventHandlers.length > 0) {
          e.stopImmediatePropagation();
          e.preventDefault();
          eventHandlers.forEach(function (eventHandler) {
            // [handler, event, element]
            eventHandler[0].call(eventHandler[2], eventHandler[1]);
          });
        }
      }

      return {
        dispatcher: dispatcher,
        collapseHoverEvents: collapseHoverEvents
      };
    };
  }, {
    "./helpers.js": 5
  }],
  5: [function (require, module, exports) {
    function noop() {}

    function elements(chartInstance) {
      // Turn the elements object into an array of elements
      var elements = chartInstance.annotation.elements;
      return Object.keys(elements).map(function (id) {
        return elements[id];
      });
    }

    function objectId() {
      return Math.random().toString(36).substr(2, 6);
    }

    function isValid(rawValue) {
      if (rawValue === null || typeof rawValue === 'undefined') {
        return false;
      } else if (typeof rawValue === 'number') {
        return isFinite(rawValue);
      } else {
        return !!rawValue;
      }
    }

    function decorate(obj, prop, func) {
      var prefix = '$';

      if (!obj[prefix + prop]) {
        if (obj[prop]) {
          obj[prefix + prop] = obj[prop].bind(obj);

          obj[prop] = function () {
            var args = [obj[prefix + prop]].concat(Array.prototype.slice.call(arguments));
            return func.apply(obj, args);
          };
        } else {
          obj[prop] = function () {
            var args = [undefined].concat(Array.prototype.slice.call(arguments));
            return func.apply(obj, args);
          };
        }
      }
    }

    function callEach(fns, method) {
      fns.forEach(function (fn) {
        (method ? fn[method] : fn)();
      });
    }

    function getEventHandlerName(eventName) {
      return 'on' + eventName[0].toUpperCase() + eventName.substring(1);
    }

    function createMouseEvent(type, previousEvent) {
      try {
        return new MouseEvent(type, previousEvent);
      } catch (exception) {
        try {
          var m = document.createEvent('MouseEvent');
          m.initMouseEvent(type, previousEvent.canBubble, previousEvent.cancelable, previousEvent.view, previousEvent.detail, previousEvent.screenX, previousEvent.screenY, previousEvent.clientX, previousEvent.clientY, previousEvent.ctrlKey, previousEvent.altKey, previousEvent.shiftKey, previousEvent.metaKey, previousEvent.button, previousEvent.relatedTarget);
          return m;
        } catch (exception2) {
          var e = document.createEvent('Event');
          e.initEvent(type, previousEvent.canBubble, previousEvent.cancelable);
          return e;
        }
      }
    }

    module.exports = function (Chart) {
      var chartHelpers = Chart.helpers;

      function initConfig(config) {
        config = chartHelpers.configMerge(Chart.Annotation.defaults, config);

        if (chartHelpers.isArray(config.annotations)) {
          config.annotations.forEach(function (annotation) {
            annotation.label = chartHelpers.configMerge(Chart.Annotation.labelDefaults, annotation.label);
          });
        }

        return config;
      }

      function getScaleLimits(scaleId, annotations, scaleMin, scaleMax) {
        var ranges = annotations.filter(function (annotation) {
          return !!annotation._model.ranges[scaleId];
        }).map(function (annotation) {
          return annotation._model.ranges[scaleId];
        });
        var min = ranges.map(function (range) {
          return Number(range.min);
        }).reduce(function (a, b) {
          return isFinite(b) && !isNaN(b) && b < a ? b : a;
        }, scaleMin);
        var max = ranges.map(function (range) {
          return Number(range.max);
        }).reduce(function (a, b) {
          return isFinite(b) && !isNaN(b) && b > a ? b : a;
        }, scaleMax);
        return {
          min: min,
          max: max
        };
      }

      function adjustScaleRange(scale) {
        // Adjust the scale range to include annotation values
        var range = getScaleLimits(scale.id, elements(scale.chart), scale.min, scale.max);

        if (typeof scale.options.ticks.min === 'undefined' && typeof scale.options.ticks.suggestedMin === 'undefined') {
          scale.min = range.min;
        }

        if (typeof scale.options.ticks.max === 'undefined' && typeof scale.options.ticks.suggestedMax === 'undefined') {
          scale.max = range.max;
        }

        if (scale.handleTickRangeOptions) {
          scale.handleTickRangeOptions();
        }
      }

      function getNearestItems(annotations, position) {
        var minDistance = Number.POSITIVE_INFINITY;
        return annotations.filter(function (element) {
          return element.inRange(position.x, position.y);
        }).reduce(function (nearestItems, element) {
          var center = element.getCenterPoint();
          var distance = chartHelpers.distanceBetweenPoints(position, center);

          if (distance < minDistance) {
            nearestItems = [element];
            minDistance = distance;
          } else if (distance === minDistance) {
            // Can have multiple items at the same distance in which case we sort by size
            nearestItems.push(element);
          }

          return nearestItems;
        }, []).sort(function (a, b) {
          // If there are multiple elements equally close,
          // sort them by size, then by index
          var sizeA = a.getArea(),
              sizeB = b.getArea();
          return sizeA > sizeB || sizeA < sizeB ? sizeA - sizeB : a._index - b._index;
        }).slice(0, 1)[0]; // return only the top item
      }

      return {
        initConfig: initConfig,
        elements: elements,
        callEach: callEach,
        noop: noop,
        objectId: objectId,
        isValid: isValid,
        decorate: decorate,
        adjustScaleRange: adjustScaleRange,
        getNearestItems: getNearestItems,
        getEventHandlerName: getEventHandlerName,
        createMouseEvent: createMouseEvent
      };
    };
  }, {}],
  6: [function (require, module, exports) {
    // Get the chart variable
    var Chart = require('chart.js');

    Chart = typeof Chart === 'function' ? Chart : window.Chart; // Configure plugin namespace

    Chart.Annotation = Chart.Annotation || {};
    Chart.Annotation.drawTimeOptions = {
      afterDraw: 'afterDraw',
      afterDatasetsDraw: 'afterDatasetsDraw',
      beforeDatasetsDraw: 'beforeDatasetsDraw'
    };
    Chart.Annotation.defaults = {
      drawTime: 'afterDatasetsDraw',
      dblClickSpeed: 350,
      // ms
      events: [],
      annotations: []
    };
    Chart.Annotation.labelDefaults = {
      backgroundColor: 'rgba(0,0,0,0.8)',
      fontFamily: Chart.defaults.global.defaultFontFamily,
      fontSize: Chart.defaults.global.defaultFontSize,
      fontStyle: 'bold',
      fontColor: '#fff',
      xPadding: 6,
      yPadding: 6,
      cornerRadius: 6,
      position: 'center',
      xAdjust: 0,
      yAdjust: 0,
      enabled: false,
      content: null
    };
    Chart.Annotation.Element = require('./element.js')(Chart);
    Chart.Annotation.types = {
      line: require('./types/line.js')(Chart),
      box: require('./types/box.js')(Chart)
    };

    var annotationPlugin = require('./annotation.js')(Chart);

    module.exports = annotationPlugin;
    Chart.pluginService.register(annotationPlugin);
  }, {
    "./annotation.js": 2,
    "./element.js": 3,
    "./types/box.js": 7,
    "./types/line.js": 8,
    "chart.js": 1
  }],
  7: [function (require, module, exports) {
    // Box Annotation implementation
    module.exports = function (Chart) {
      var helpers = require('../helpers.js')(Chart);

      var BoxAnnotation = Chart.Annotation.Element.extend({
        setDataLimits: function () {
          var model = this._model;
          var options = this.options;
          var chartInstance = this.chartInstance;
          var xScale = chartInstance.scales[options.xScaleID];
          var yScale = chartInstance.scales[options.yScaleID];
          var chartArea = chartInstance.chartArea; // Set the data range for this annotation

          model.ranges = {};

          if (!chartArea) {
            return;
          }

          var min = 0;
          var max = 0;

          if (xScale) {
            min = helpers.isValid(options.xMin) ? options.xMin : xScale.getPixelForValue(chartArea.left);
            max = helpers.isValid(options.xMax) ? options.xMax : xScale.getPixelForValue(chartArea.right);
            model.ranges[options.xScaleID] = {
              min: Math.min(min, max),
              max: Math.max(min, max)
            };
          }

          if (yScale) {
            min = helpers.isValid(options.yMin) ? options.yMin : yScale.getPixelForValue(chartArea.bottom);
            max = helpers.isValid(options.yMax) ? options.yMax : yScale.getPixelForValue(chartArea.top);
            model.ranges[options.yScaleID] = {
              min: Math.min(min, max),
              max: Math.max(min, max)
            };
          }
        },
        configure: function () {
          var model = this._model;
          var options = this.options;
          var chartInstance = this.chartInstance;
          var xScale = chartInstance.scales[options.xScaleID];
          var yScale = chartInstance.scales[options.yScaleID];
          var chartArea = chartInstance.chartArea; // clip annotations to the chart area

          model.clip = {
            x1: chartArea.left,
            x2: chartArea.right,
            y1: chartArea.top,
            y2: chartArea.bottom
          };
          var left = chartArea.left,
              top = chartArea.top,
              right = chartArea.right,
              bottom = chartArea.bottom;
          var min, max;

          if (xScale) {
            min = helpers.isValid(options.xMin) ? xScale.getPixelForValue(options.xMin) : chartArea.left;
            max = helpers.isValid(options.xMax) ? xScale.getPixelForValue(options.xMax) : chartArea.right;
            left = Math.min(min, max);
            right = Math.max(min, max);
          }

          if (yScale) {
            min = helpers.isValid(options.yMin) ? yScale.getPixelForValue(options.yMin) : chartArea.bottom;
            max = helpers.isValid(options.yMax) ? yScale.getPixelForValue(options.yMax) : chartArea.top;
            top = Math.min(min, max);
            bottom = Math.max(min, max);
          } // Ensure model has rect coordinates


          model.left = left;
          model.top = top;
          model.right = right;
          model.bottom = bottom; // Stylistic options

          model.borderColor = options.borderColor;
          model.borderWidth = options.borderWidth;
          model.backgroundColor = options.backgroundColor;
        },
        inRange: function (mouseX, mouseY) {
          var model = this._model;
          return model && mouseX >= model.left && mouseX <= model.right && mouseY >= model.top && mouseY <= model.bottom;
        },
        getCenterPoint: function () {
          var model = this._model;
          return {
            x: (model.right + model.left) / 2,
            y: (model.bottom + model.top) / 2
          };
        },
        getWidth: function () {
          var model = this._model;
          return Math.abs(model.right - model.left);
        },
        getHeight: function () {
          var model = this._model;
          return Math.abs(model.bottom - model.top);
        },
        getArea: function () {
          return this.getWidth() * this.getHeight();
        },
        draw: function () {
          var view = this._view;
          var ctx = this.chartInstance.chart.ctx;
          ctx.save(); // Canvas setup

          ctx.beginPath();
          ctx.rect(view.clip.x1, view.clip.y1, view.clip.x2 - view.clip.x1, view.clip.y2 - view.clip.y1);
          ctx.clip();
          ctx.lineWidth = view.borderWidth;
          ctx.strokeStyle = view.borderColor;
          ctx.fillStyle = view.backgroundColor; // Draw

          var width = view.right - view.left,
              height = view.bottom - view.top;
          ctx.fillRect(view.left, view.top, width, height);
          ctx.strokeRect(view.left, view.top, width, height);
          ctx.restore();
        }
      });
      return BoxAnnotation;
    };
  }, {
    "../helpers.js": 5
  }],
  8: [function (require, module, exports) {
    // Line Annotation implementation
    module.exports = function (Chart) {
      var chartHelpers = Chart.helpers;

      var helpers = require('../helpers.js')(Chart);

      var horizontalKeyword = 'horizontal';
      var verticalKeyword = 'vertical';
      var LineAnnotation = Chart.Annotation.Element.extend({
        setDataLimits: function () {
          var model = this._model;
          var options = this.options; // Set the data range for this annotation

          model.ranges = {};
          model.ranges[options.scaleID] = {
            min: options.value,
            max: options.endValue || options.value
          };
        },
        configure: function () {
          var model = this._model;
          var options = this.options;
          var chartInstance = this.chartInstance;
          var ctx = chartInstance.chart.ctx;
          var scale = chartInstance.scales[options.scaleID];
          var pixel, endPixel;

          if (scale) {
            pixel = helpers.isValid(options.value) ? scale.getPixelForValue(options.value) : NaN;
            endPixel = helpers.isValid(options.endValue) ? scale.getPixelForValue(options.endValue) : pixel;
          }

          if (isNaN(pixel)) {
            return;
          }

          var chartArea = chartInstance.chartArea; // clip annotations to the chart area

          model.clip = {
            x1: chartArea.left,
            x2: chartArea.right,
            y1: chartArea.top,
            y2: chartArea.bottom
          };

          if (this.options.mode == horizontalKeyword) {
            model.x1 = chartArea.left;
            model.x2 = chartArea.right;
            model.y1 = pixel;
            model.y2 = endPixel;
          } else {
            model.y1 = chartArea.top;
            model.y2 = chartArea.bottom;
            model.x1 = pixel;
            model.x2 = endPixel;
          }

          model.line = new LineFunction(model);
          model.mode = options.mode; // Figure out the label:

          model.labelBackgroundColor = options.label.backgroundColor;
          model.labelFontFamily = options.label.fontFamily;
          model.labelFontSize = options.label.fontSize;
          model.labelFontStyle = options.label.fontStyle;
          model.labelFontColor = options.label.fontColor;
          model.labelXPadding = options.label.xPadding;
          model.labelYPadding = options.label.yPadding;
          model.labelCornerRadius = options.label.cornerRadius;
          model.labelPosition = options.label.position;
          model.labelXAdjust = options.label.xAdjust;
          model.labelYAdjust = options.label.yAdjust;
          model.labelEnabled = options.label.enabled;
          model.labelContent = options.label.content;
          ctx.font = chartHelpers.fontString(model.labelFontSize, model.labelFontStyle, model.labelFontFamily);
          var textWidth = ctx.measureText(model.labelContent).width;
          var textHeight = ctx.measureText('M').width;
          var labelPosition = calculateLabelPosition(model, textWidth, textHeight, model.labelXPadding, model.labelYPadding);
          model.labelX = labelPosition.x - model.labelXPadding;
          model.labelY = labelPosition.y - model.labelYPadding;
          model.labelWidth = textWidth + 2 * model.labelXPadding;
          model.labelHeight = textHeight + 2 * model.labelYPadding;
          model.borderColor = options.borderColor;
          model.borderWidth = options.borderWidth;
          model.borderDash = options.borderDash || [];
          model.borderDashOffset = options.borderDashOffset || 0;
        },
        inRange: function (mouseX, mouseY) {
          var model = this._model;
          return (// On the line
            model.line && model.line.intersects(mouseX, mouseY, this.getHeight()) || // On the label
            model.labelEnabled && model.labelContent && mouseX >= model.labelX && mouseX <= model.labelX + model.labelWidth && mouseY >= model.labelY && mouseY <= model.labelY + model.labelHeight
          );
        },
        getCenterPoint: function () {
          return {
            x: (this._model.x2 + this._model.x1) / 2,
            y: (this._model.y2 + this._model.y1) / 2
          };
        },
        getWidth: function () {
          return Math.abs(this._model.right - this._model.left);
        },
        getHeight: function () {
          return this._model.borderWidth || 1;
        },
        getArea: function () {
          return Math.sqrt(Math.pow(this.getWidth(), 2) + Math.pow(this.getHeight(), 2));
        },
        draw: function () {
          var view = this._view;
          var ctx = this.chartInstance.chart.ctx;

          if (!view.clip) {
            return;
          }

          ctx.save(); // Canvas setup

          ctx.beginPath();
          ctx.rect(view.clip.x1, view.clip.y1, view.clip.x2 - view.clip.x1, view.clip.y2 - view.clip.y1);
          ctx.clip();
          ctx.lineWidth = view.borderWidth;
          ctx.strokeStyle = view.borderColor;

          if (ctx.setLineDash) {
            ctx.setLineDash(view.borderDash);
          }

          ctx.lineDashOffset = view.borderDashOffset; // Draw

          ctx.beginPath();
          ctx.moveTo(view.x1, view.y1);
          ctx.lineTo(view.x2, view.y2);
          ctx.stroke();

          if (view.labelEnabled && view.labelContent) {
            ctx.beginPath();
            ctx.rect(view.clip.x1, view.clip.y1, view.clip.x2 - view.clip.x1, view.clip.y2 - view.clip.y1);
            ctx.clip();
            ctx.fillStyle = view.labelBackgroundColor; // Draw the tooltip

            chartHelpers.drawRoundedRectangle(ctx, view.labelX, // x
            view.labelY, // y
            view.labelWidth, // width
            view.labelHeight, // height
            view.labelCornerRadius // radius
            );
            ctx.fill(); // Draw the text

            ctx.font = chartHelpers.fontString(view.labelFontSize, view.labelFontStyle, view.labelFontFamily);
            ctx.fillStyle = view.labelFontColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(view.labelContent, view.labelX + view.labelWidth / 2, view.labelY + view.labelHeight / 2);
          }

          ctx.restore();
        }
      });

      function LineFunction(view) {
        // Describe the line in slope-intercept form (y = mx + b).
        // Note that the axes are rotated 90° CCW, which causes the
        // x- and y-axes to be swapped.
        var m = (view.x2 - view.x1) / (view.y2 - view.y1);
        var b = view.x1 || 0;
        this.m = m;
        this.b = b;

        this.getX = function (y) {
          // Coordinates are relative to the origin of the canvas
          return m * (y - view.y1) + b;
        };

        this.getY = function (x) {
          return (x - b) / m + view.y1;
        };

        this.intersects = function (x, y, epsilon) {
          epsilon = epsilon || 0.001;
          var dy = this.getY(x),
              dx = this.getX(y);
          return (!isFinite(dy) || Math.abs(y - dy) < epsilon) && (!isFinite(dx) || Math.abs(x - dx) < epsilon);
        };
      }

      function calculateLabelPosition(view, width, height, padWidth, padHeight) {
        var line = view.line;
        var ret = {},
            xa = 0,
            ya = 0;

        switch (true) {
          // top align
          case view.mode == verticalKeyword && view.labelPosition == "top":
            ya = padHeight + view.labelYAdjust;
            xa = width / 2 + view.labelXAdjust;
            ret.y = view.y1 + ya;
            ret.x = (isFinite(line.m) ? line.getX(ret.y) : view.x1) - xa;
            break;
          // bottom align

          case view.mode == verticalKeyword && view.labelPosition == "bottom":
            ya = height + padHeight + view.labelYAdjust;
            xa = width / 2 + view.labelXAdjust;
            ret.y = view.y2 - ya;
            ret.x = (isFinite(line.m) ? line.getX(ret.y) : view.x1) - xa;
            break;
          // left align

          case view.mode == horizontalKeyword && view.labelPosition == "left":
            xa = padWidth + view.labelXAdjust;
            ya = -(height / 2) + view.labelYAdjust;
            ret.x = view.x1 + xa;
            ret.y = line.getY(ret.x) + ya;
            break;
          // right align

          case view.mode == horizontalKeyword && view.labelPosition == "right":
            xa = width + padWidth + view.labelXAdjust;
            ya = -(height / 2) + view.labelYAdjust;
            ret.x = view.x2 - xa;
            ret.y = line.getY(ret.x) + ya;
            break;
          // center align

          default:
            ret.x = (view.x1 + view.x2 - width) / 2 + view.labelXAdjust;
            ret.y = (view.y1 + view.y2 - height) / 2 + view.labelYAdjust;
        }

        return ret;
      }

      return LineAnnotation;
    };
  }, {
    "../helpers.js": 5
  }]
}, {}, [6]);

/***/ }),

/***/ "./static/collectiveGraph.js":
/*!***********************************!*\
  !*** ./static/collectiveGraph.js ***!
  \***********************************/
/*! exports provided: CollectiveGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectiveGraph", function() { return CollectiveGraph; });
class CollectiveGraph {
  constructor(data) {
    this.main_data = data;
  }

  drawOneGraph(selected_input, platform_names, metricId, start_date, end_date) {
    //range
    //let date_range = range.split('-');
    let range_start_date = moment(start_date, 'YYYY-MM-DD');
    let range_end_date = moment(end_date, 'YYYY-MM-DD');
    let dataSets = [];
    let labels = [];
    let annot_Data = [];
    let MAX_val;
    let multiplier;
    this.platform = platform_names[+selected_input.platform - 1];
    let platfromData = this.main_data[this.platform];
    this.metric = platfromData.metric_names[+metricId - 1];
    this.graph = selected_input.graph;
    this.equipment = selected_input.equipment;
    let equipmentId = this.equipment[0].split('-')[1];
    this.equipment_name = platfromData.equipment_names[+equipmentId - 1];
    let data = platfromData.dictData[this.equipment_name];
    let metricData = data[this.metric];

    for (let key2 in metricData) {
      let chartData = [];
      let metric_uni_Data = JSON.parse(metricData[key2]);
      $.each(metric_uni_Data, (index, d) => {
        if (+d.max <= 3) {
          multiplier = 1.3;
        } else {
          multiplier = 1.2;
        }

        MAX_val = d.max;
        let date = new Date(d.date);
        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let moment_date = moment(date, 'YYYY-MM-DD');
        let date_flag = moment_date.isBetween(range_start_date, range_end_date, null, '[]');

        if (date_flag === true) {
          labels.push(date); // chartData.push(d['Recorded Values']);

          chartData.push({
            x: date,
            y: d['value']
          });
        }

        annot_Data.push({
          drawTime: 'afterDraw',
          // overrides annotation.drawTime if set
          type: 'line',
          events: ['click'],
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: d.min,
          borderColor: 'red',
          borderWidth: 1,
          label: {
            backgroundColor: "rgb(200,0,0)",
            content: "MIN",
            enabled: true,
            position: 'left',
            fontSize: 8
          },
          onClick: function (e) {
            console.log(e);
            alert('Hello');
          }
        });
        annot_Data.push({
          drawTime: 'afterDraw',
          // overrides annotation.drawTime if set
          type: 'line',
          events: ['click'],
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: d.max,
          borderColor: 'green',
          borderWidth: 1,
          label: {
            backgroundColor: "rgb(0,200,0)",
            content: "MAX",
            enabled: true,
            position: 'left',
            fontSize: 8
          },
          onClick: function (e) {
            console.log(e);
            alert('Hello');
          }
        });
      });
      let color = this.getRandomColor();
      dataSets.push({
        label: key2,
        data: chartData,
        backgroundColor: color,
        fill: false,
        borderColor: color
      });
    }

    return [labels, dataSets, this.metric, this.graph, annot_Data, MAX_val, multiplier];
  }

  getRandomColor() {
    let o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.6 + ')';
  }

}

/***/ }),

/***/ "./static/main.js":
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectiveGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectiveGraph */ "./static/collectiveGraph.js");
/* harmony import */ var _chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-plugin-annotation */ "./static/chartjs-plugin-annotation.js");
/* harmony import */ var _chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
let machine_data;
let main_data;
let platform_names;
let system_data;
let sub_sys_data;
let first_graph_load = true;
let l2_reportData;
let l3_reportData;
let basic_data;
let systems;
let reportIds;
let l3_approved_reportId;
let opr_data;
let isMand; //HTML for all forms Add Data.

let form_1_fail_bd_html = `<tr>
                                <td><select class="form-control form1_system">
                                </select></td>
                                <td><select class="form-control form1_subSys">
                                </select></td>
                                <td><input type="date" class="form-control" /></td>
                                <td><input type="time" class="form-control" /></td>
                                <td><textarea></textarea></td>
                                <td><input type="number" class="form-control"></td>
                            </tr>`;
let form_1_step_html = `<tr>
                                <td>1</td>
                                <td><input type="text" class="form-control" ></td>
                                <td><textarea maxlength="60"></textarea></td>
                                <td><textarea maxlength="60"></textarea></td>
                                <td><select class="form-control">
                                    <option>Ship Staff</option>
                                    <option>Dockyard</option>
                                    <option>WRSTG</option>
                                    <option>IAI</option>
                                </select></td>
                            </tr>`;
let form_1_item_Def_html = `<tr>
                                <td>1.</td>
                            <td><select class="form-control form1_lru">
                            </select></td>
                            <td>
                                <select class="form-control form1_pattern"></select>
                            </td>
                            <td><input type="text" class="form-control"></td>
                            <td><input type="text" class="form-control"></td>
                            <td><input type="text" class="form-control"></td>
                            <td><select class="form-control taken_from"></select></td>
                            <td><input type="text" class="form-control"></td>
                            </tr>`; //Form 3

let form_3_issue_html = `<tr>
                <td style="width: 45%"><textarea class="oem"></textarea></td>
                <td style="width: 45%"><textarea class="inA"></textarea></td>
                <td><i class="pe-7s-trash delete_step_data delete_icon"></i></td>
                </tr>`;


$(document).ready(function () {
  let permission = sessionStorage.permission;
  let platform = sessionStorage.associated_platform;
  $('.time').bootstrapMaterialDatePicker({
    date: false,
    format: 'HH:mm'
  });
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  let platform_logo_html = `${platform} <sub style="font-size: small">${sessionStorage.platform_rank}</sub>`;
  $('.mtu-logo').html(platform_logo_html);

  if (permission === 'L1' || permission === 'L2') {
    if (permission === 'L2') {
      $('#form1_save').html('Forward to WRSTG');
    } else {
      $('#form1_save').html('Forward for Approval');
    }

    $('#settings').css('display', 'none');
    $('#l1_all_reports').css('display', 'block');
    ajaxGet('/get_sys_data', null, sysData);
  } else {
    $('.mtu-logo').html(platform_logo_html);
    show_page();

    if (permission === 'L4') {
      $('#settings').css('display', 'block');
    } else {
      $('#settings').css('display', 'none');
    }

    $('#all_report').css('display', 'block');
    $('#queries').css('display', 'block');
    $('#l1_all_reports').css('display', 'none');
    $('#runtime').css('display', 'block');
    $('#overlay').css('display', 'none');
  }
});

const sysData = data => {
  platform_names = data.platform_data;
  main_data = data.all_data;
  system_data = data.system_data;
  sub_sys_data = data.sub_sys_data;
  isMand = data.mand; //populate_platform(platform_names);

  let html = system_populate();
  $('.form1_system').append(html);
  html = sub_sys_populate();
  $('.form1_subSys').append(html);
  html = lru_pop();
  $('.form1_lru').append(html);
  let taken_html = taken_from_populate();
  $('.taken_from').append(taken_html);
  html = pattern_populate();
  $('.form1_pattern').append(html);
  let sub_sys = $('.form1_subSys').val();
  $('.next_higher_ass').val(sub_sys);
  show_page();
  let system = $('.form1_system').val();

  if (system === 'MFSTAR') {
    $('.coolantTemp').attr('disabled', false);
    $('.coolantTemp').val('0');
  } else {
    $('.coolantTemp').attr('disabled', true);
    $('.coolantTemp').val('0');
  }

  $('#overlay').css('display', 'none');
};

const show_page = () => {
  let permission_level = sessionStorage.permission;

  if (permission_level === "L1" || permission_level === 'L2') {
    // $('.form_2').css('display','none');
    if (permission_level === 'L2') {
      $('.reportIdtable').css('display', 'block');
      getReportData(permission_level);
    } else {
      $('.reportIdtable').css('display', 'none');
    }

    $('.form_3').css('display', 'none');
    $('.form_1').css('display', 'block');
  } else {
    getReportData(permission_level);
    $('.form_1').css('display', 'none');
    $('.form_2').css('display', 'none');
    $('.form_3').css('display', 'block');
  }
}; // const populate_platform = (platform_list) => {
//     let html = '';
//     $.each(platform_list, (index, value) => {
//       html = html + `<option>${value}</option>`;
//     });
//     $('#langOpt').append(html);
// };
//onLoad system_populate


const system_populate = (platform = null, previous_selected_system = undefined) => {
  if (platform === null) {
    platform = sessionStorage.associated_platform;
  }

  let sys_copy = system_data;
  let systems = sys_copy[platform];
  let html = '';
  $.each(systems, (index, sys) => {
    if (previous_selected_system === sys) {
      html = html + `<option selected>${sys}</option>`;
    } else {
      html = html + `<option>${sys}</option>`;
    }
  });
  return html;
}; //onload sub_sys populate


const sub_sys_populate = (platform = null, system = null) => {
  if (platform === null && system === null) {
    platform = sessionStorage.associated_platform;
    system = $('.form1_system').val();
  }

  ;
  let subsys_copy = sub_sys_data;
  let systems = subsys_copy.filter(x => x['platform'] === platform && x['system'] === system);
  let html = '';
  $.each(systems, (index, sys) => {
    html = html + `<option>${sys['sub_sys']}</option>`;
  });
  return html;
}; //LRU populate


const lru_pop = (system = null, sub_sys = null) => {
  let platform = sessionStorage.associated_platform;

  if (system == null && sub_sys == null) {
    system = $('.form1_system').val();
    sub_sys = $('.form1_subSys').val();
    let length_row = $('.form_1_table_items_def tbody tr').length;
    $($('.form_1_table_items_def tbody tr')[length_row - 1]).find('.item_system').html(system + ' ' + '{' + sub_sys + '}');
  }

  let all_data_copy = main_data;
  let systems = all_data_copy.filter(x => x['platform'] === platform && x['system'] === system && x['sub_sys'] === sub_sys);
  let html = '';
  $.each(systems, (index, sys) => {
    html = html + `<option>${sys['lru']}</option>`;
  });
  return html;
}; // Taken From HTML populate


const taken_from_populate = (selected_system = 0, permission = 'L1') => {
  let html = ``;
  let filtered_platforms = platform_names.filter(x => x != sessionStorage.associated_platform);
  filtered_platforms = ['Nil', ...filtered_platforms, 'OBS', 'BND', 'IAI'];
  $.each(filtered_platforms, (f_index, f_val) => {
    if (permission === 'L1') {
      html += `<option>${f_val}</option>`;
    } else {
      if (f_val === selected_system) {
        html += `<option selected>${f_val}</option>`;
      } else {
        html += `<option>${f_val}</option>`;
      }
    }
  });
  return html;
}; //Pattern Number


const pattern_populate = (system = null, sub_sys = null, lru = null) => {
  let platform = sessionStorage.associated_platform;

  if (system === null && sub_sys === null, lru === null) {
    system = $('.form1_system').val();
    sub_sys = $('.form1_subSys').val();
    lru = $('.form1_lru').val();
  }

  let all_data_copy = main_data;
  let systems = all_data_copy.filter(x => x['platform'] === platform && x['system'] === system && x['sub_sys'] === sub_sys && x['lru'] === lru);
  let html = ``;

  if (systems[0]['old_patt'] != "0") {
    html += `<option>${systems[0]['old_patt']}</option>`;
  }

  if (systems[0]['new_patt'] != "0") {
    html += `<option>${systems[0]['new_patt']}</option>`;
  } // html = `<option>${systems[0]['old_patt']}</option>
  //             <option>${systems[0]['new_patt']}</option>`;


  return html;
};

$('#generate_data_table').on('click', e => {
  e.preventDefault();
  let platform_name = $('input[name=platforms]').val();
  let system = $('input[name=system]').val();
  let subsys = $('input[name=subsys]').val();

  if (platform_name.trim() === '' && system.trim() === '' && subsys.trim() === '') {
    toastr.error('Please Enter valid data in the form above!!!');
    return false;
  }

  ;
  let table_head_wrapper = $('#data_point_table tbody');
  let table_body_html = Add_Data_point();
  table_head_wrapper.append(table_body_html);
});

const Add_Data_point = () => {
  let date = $("#date_id").val();
  let t_body_html = `<tr>
                                <td>
                                    <input class="form-control" list="LRU" />
                                    <datalist  name="LRU" ></datalist>
                                </td>
                                <td><input type="number" class="form-control data_point" /></td>
                                <td><input type="number" class="form-control data_point" /></td>
                            </tr>`;
  return t_body_html;
}; // $('#load_data').click(() => {
//     let platform_index = $("#langOpt").val();
//     let form_num = $('#forms_id').val();
//     if(form_num === "Form 1"){
//        // $('.form_2').css('display','none');
//         $('.form_3').css('display','none');
//         $('.form_1').css('display','block');
//     }else if(form_num === 'Form 2'){
//         getReportData(form_num);
//         $('.form_1').css('display','none');
//         $('.form_3').css('display','none');
//         $('.form_2').css('display','block');
//     }else{
//         getReportData(form_num);
//         $('.form_1').css('display','none');
//         $('.form_2').css('display','none');
//         $('.form_3').css('display','block');
//     }
// });


$('.form_button').click(e => {
  console.log('Hello');
  let permission = sessionStorage.permission;
  let form_num = $('#forms_id').val();
  let attr = $(e.currentTarget).attr('data-attr');
  let wrapper = ''; //Form 1

  if (permission === 'L1' || permission === 'L2') {
    if (attr === 'form_1_fail_bd') {
      wrapper = $('.form_1_table_fail_bd tbody');
      let items_length_row = $('.form_1_table_items_def tbody tr').length;
      let platform = sessionStorage.associated_platform;
      let first_selected_System = $($(wrapper).find('tr')[0]).find('.form1_system').val();
      let first_row_date = $($($(wrapper).find('tr')[0]).find('td')[2]).find('input').val();
      let first_row_time = $($($(wrapper).find('tr')[0]).find('td')[3]).find('input').val();
      let first_row_title = $($($(wrapper).find('tr')[0]).find('td')[4]).find('textarea').val();
      let first_row_operating_hours = $($($(wrapper).find('tr')[0]).find('td')[5]).find('input').val();
      let sys_html = system_populate(null, first_selected_System);
      let sub_sys_html = sub_sys_populate(platform, first_selected_System);
      let html = `<tr>
                                <td><select class="form-control form1_system" disabled>
                                ${sys_html}
                                </select></td>
                                <td><select class="form-control form1_subSys">
                                ${sub_sys_html}
                                </select></td>
                                <td><input type="date" class="form-control"  disabled value="${first_row_date}"/></td>
                                <td><input type="time" class="form-control" disabled value="${first_row_time}" /></td>
                                <td><textarea disabled>${first_row_title}</textarea></td>
                                <td><input type="number" class="form-control" disabled value="${first_row_operating_hours}" ></td>
                                <td><i class="pe-7s-trash delete_basic_data delete_icon"></i></td>
                            </tr>`;
      wrapper.append(html); //Append Form 1 Defective row on addition of Failure Basic Data

      let first_sub_sys = sub_sys_data.filter(x => x['platform'] === platform && x['system'] === first_selected_System)[0]['sub_sys'];
      let lru_html = lru_pop();
      let taken_html = taken_from_populate();
      let pat = pattern_populate();
      let items_def_html = `<tr>
                                <td>${items_length_row + 1}.</td>
                                <td class="item_system">${first_selected_System + '{ ' + first_sub_sys + '}'}</td>
                            <td><select class="form-control form1_lru">
                            ${lru_html}
                            </select></td>
                            <td>
                                <select class="form-control form1_pattern">
                                    ${pat}
                                </select>
                            </td>
                            <td><input type="text" class="form-control"></td>
                            <td><input type="text" class="form-control next_higher_ass" value="${first_sub_sys}" disabled></td>
                            <td><input type="text" class="form-control"></td>
                            <td><select class="form-control taken_from">
                                ${taken_html}
                            </select></td>
                            <td><input type="text" class="form-control"></td>
                            </tr>`;
      wrapper = $('.form_1_table_items_def tbody');
      wrapper.append(items_def_html);
    } else if (attr === 'form_1_step') {
      wrapper = $('.form_1_table_step tbody');
      let step_row_index = $('.form_1_table_step tbody tr').length;
      let step_html = `<tr>
                                <td>${+step_row_index + 1}</td>
                                <td><input type="text" class="form-control" ></td>
                                <td><textarea></textarea></td>
                                <td><textarea></textarea></td>
                                <td><select class="form-control">
                                    <option>Ship Staff</option>
                                    <option>Dockyard</option>
                                    <option>WRSTG</option>
                                    <option>IAI</option>
                                </select></td>
                                <td><i class="pe-7s-trash delete_step_data delete_icon"></i></td>
                            </tr>`;
      wrapper.append(step_html);
    }
  } //Form 3


  if (permission === 'L3') {
    if (attr === 'form_3_issue') {
      wrapper = $('.form_3_table_issues tbody');
      wrapper.append(form_3_issue_html);
    }
  }
}); //Data Input Model

$('#data_input_form').click(e => {
  let count = 0;
  clear_forms(); //Platform Names Populate.

  let platform_names_copy = platform_names;
  $('#platform_id').html('');
  $('input[name=platforms]').val('');
  let platform_wrapper = $('#platform_id');
  $('#data_point_table tbody').html('');
  let platform_html = ``;
  platform_names_copy.map(platform => {
    platform_html = platform_html + `<option value="${platform}">`;
  });
  platform_wrapper.append(platform_html);
}); //Datalist change input track Platform Name.

$('input[name=platforms]').on('focusout', function () {
  let platform_name = this.value;
  populate_modal_equipment(platform_name);
});
$("input[name=system]").on('focusout', function () {
  let system = this.value;
  populate_metrics_name(system);
});

const populate_modal_equipment = platform_name => {
  $('input[name=equipment]').val('');
  $('#equipment_id').html('');
  let equipment_wrapper = $('#equipment_id');
  let system_html = system_populate();
  let equipment_names_html = ``;

  if (platform_name.trim() === "") {
    toastr.error("Please select/type Platform!");
  } else {
    equipment_wrapper.append(system_html);
  }
}; //Populate Metrics Name.


const populate_metrics_name = system => {
  $('input[name=metric]').val('');
  $('#metrics_id').html('');
  let metrics_wrapper = $('#metrics_id');
  let platform_name = $('input[name=platforms]').val();

  if (platform_name.trim() === "") {
    toastr.error("Please select/type Platform!");
  } else {
    let sub_system = sub_sys_populate(platform_name, system);
    metrics_wrapper.append(sub_system);
  }
};

const clear_forms = () => {
  $('.modal .modal-body').find('input').val('');
  $('#data_point_table tbody').html('');
}; //Form 1 Failure Basic Data System change and change items found def accordingly.


$(document).on('change', '.form1_system', function (e) {
  let changedSystem = this.value;

  if (changedSystem === 'MFSTAR') {
    $('.coolantTemp').attr('disabled', false);
    $('.coolantTemp').val('0');
  } else {
    $('.coolantTemp').attr('disabled', true);
    $('.coolantTemp').val('0');
  }

  let all_trs = $(this).parent().parent().parent().find('tr');
  $.each(all_trs, (index, tr) => {
    if (index != 0) {
      //$(tr).find('.form1_system').html('');
      $($(tr).find('.form1_system')[0]).val(changedSystem);
    }

    $(tr).find('.form1_subSys').html(''); //clear select list and populate again

    let platform = sessionStorage.associated_platform;
    let subSysHtml = sub_sys_populate(platform, changedSystem);
    $(tr).find('.form1_subSys').append(subSysHtml);
    let sub_sys_selected = $(tr).find('.form1_subSys').val();
    let row_index = $(tr)[0].rowIndex;
    change_sys_sub_sys_name(changedSystem, sub_sys_selected, row_index);
  });
});

const change_sys_sub_sys_name = (newSysName, newSubSys, row_num) => {
  console.log('Hello');
  let selected_row = $('.form_1_table_items_def tbody tr')[row_num - 1];
  let new_name = newSysName + ' {' + newSubSys + '}';
  $(selected_row).find('.next_higher_ass').val(newSubSys);
  $(selected_row).find('.item_system').html(new_name);
  $(selected_row).find('.form1_lru').html('');
  let lru_html = lru_pop(newSysName, newSubSys);
  $(selected_row).find('.form1_lru').html(lru_html); //

  let selected_lru = $(selected_row).find('.form1_lru').val();
  $(selected_row).find('.form1_pattern').html('');
  let pattern_html = pattern_populate(newSysName, newSubSys, selected_lru);
  $(selected_row).find('.form1_pattern').html(pattern_html);
}; //LRU CHANGE FOR CHANGING ITEMS FOUND DEFECTIVE


$(document).on('change', '.form1_lru', function () {
  let system = $(this).parent().parent().find('.item_system').html().split('{')[0];
  let sub_sys = $(this).parent().parent().find('.item_system').html().split('{')[1].split('}')[0];
  let lru = this.value;
  $(this).parent().parent().find('.form1_pattern').html('');
  let pattern_html = pattern_populate(system.trim(), sub_sys.trim(), lru.trim());
  $(this).parent().parent().find('.form1_pattern').html(pattern_html);
}); //Only Sub_System_Chnage.

$(document).on('change', '.form1_subSys', function (e) {
  let changedSubSystem = this.value;
  let system = $(this).parent().parent().find('.form1_system').val();
  let row_index = $(this).parent().parent()[0].rowIndex;
  change_sys_sub_sys_name(system, changedSubSystem, row_index);
}); //////////////////// Save the forms.. ////////
// Saving form 1 ///

$('#form1_save').click(() => {
  let has_empty_field = false;
  let which_fields_empty = [];
  let not_empty_fields = [];
  let lru_matched = true;
  let platform = sessionStorage.associated_platform;
  let reportSystem;
  let permission = sessionStorage.permission;
  let system_n_; //let form1_table_1 = $('.form_1_table_1 table tbody td');

  let report_p_by;
  let report_app_by;

  if (permission === 'L1') {
    report_p_by = sessionStorage.platform_rank;
    report_app_by = null;
  } else if (permission === 'L2') {
    report_p_by = basic_data[0].report_by;
    report_app_by = sessionStorage.platform_rank;
  }

  let date_issue = new Date(); // Generated Report ID.

  let random_num = Math.round(Math.random() * 1000);
  let moment_date = moment(date_issue, "MM/DD/YYYY");
  let date = new Date(moment_date._i);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  date_issue = month + '/' + day + '/' + year; //Combined data populate.

  let final_data_p = [];
  let step_data = [];
  let system_tr_length = $('.form_1_table_2 table tbody tr').length;
  let row_0_tds = $($('.form_1_table_4 table tbody tr')[0]).find('td');
  let row_0_LRU = $(row_0_tds[2]).find('select').val();

  for (let i = 0; i < system_tr_length; i++) {
    let basic_data_tds = $($('.form_1_table_2 table tbody tr')[i]).find('td');
    let item_data_tds = $($('.form_1_table_4 table tbody tr')[i]).find('td'); //Failure Basic Data

    let form1_table_2 = basic_data_tds;
    let system = $(form1_table_2[0]).find('select').val();
    system_n_ = system;
    reportSystem = system;
    let sub_system = $(form1_table_2[1]).find('select').val();
    let date_occur = $(form1_table_2[2]).find('input').val();
    let time_occur = $(form1_table_2[3]).find('input').val();
    let failure_title = $(form1_table_2[4]).find('textarea').val();
    let operating_hours = $(form1_table_2[5]).find('input').val(); //Checking if fields are empty or not

    if (date_occur === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_2[2]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_2[2]).find('input'));
    }

    if (time_occur === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_2[3]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_2[3]).find('input'));
    }

    if (operating_hours.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_2[5]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_2[5]).find('input'));
    }

    if (failure_title.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_2[4]).find('textarea'));
    } else {
      not_empty_fields.push($(form1_table_2[4]).find('textarea'));
    } //Items Defective.


    let form1_table_4 = item_data_tds;
    let sys_subSys = $(form1_table_4[1]).val();
    let lru_name = $(form1_table_4[2]).find('select').val();

    if (lru_name != row_0_LRU) {
      lru_matched = false;
    }

    let pattern_number = $(form1_table_4[3]).find('select').val();
    let serial_number = $(form1_table_4[4]).find('input').val();
    let next_assembly = $(form1_table_4[5]).find('input').val();
    let replaced_sn = $(form1_table_4[6]).find('input').val();
    let taken_from = $(form1_table_4[7]).find('select').val();
    let installed_clock = $(form1_table_4[8]).find('input').val(); //Checking if the mandatory fields are empty or not.

    if (serial_number.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_4[4]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_4[4]).find('input'));
    }

    if (replaced_sn.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_4[6]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_4[6]).find('input'));
    }

    if (taken_from.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_4[7]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_4[7]).find('input'));
    }

    if (installed_clock.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_4[8]).find('input'));
    } else {
      not_empty_fields.push($(form1_table_4[8]).find('input'));
    }

    if (!has_empty_field) {
      final_data_p.push({
        'report_by': report_p_by,
        'report_app_by': report_app_by,
        'issue_date': date_issue,
        'system': system,
        'sub_system': sub_system,
        'occur_date': date_occur,
        'time_occur': time_occur,
        'failure_title': failure_title,
        'operating_hours': operating_hours,
        'lru': lru_name,
        'pattern_no': pattern_number,
        'serial_no': serial_number,
        'next_higher_assembly': next_assembly,
        'replaced_sn': replaced_sn,
        'taken_from': taken_from,
        'installed_clock': installed_clock,
        'platform': platform
      });
    }
  } //STEP DATA


  let set_data_rows_length = $('.form_1_table_3 table tbody tr').length;

  for (let j = 0; j < set_data_rows_length; j++) {
    let set_data_tds = $($('.form_1_table_3 table tbody tr')[j]).find('td'); //Step By step analysis

    let form1_table_3 = set_data_tds;
    let bit_value = $(form1_table_3[1]).find('input').val();
    let observation = $(form1_table_3[2]).find('textarea').val();
    let action = $(form1_table_3[3]).find('textarea').val();
    let done_by = $(form1_table_3[4]).find('select').val();

    if (observation.trim() === "") {
      has_empty_field = true;
      which_fields_empty.push($(form1_table_3[2]).find('textarea'));
    } else {
      not_empty_fields.push($(form1_table_3[2]).find('textarea'));
    }

    if (!has_empty_field) {
      step_data.push({
        'bit_value': bit_value,
        'bit_observation': observation,
        'bit_action': action,
        'step_by': done_by,
        'platform': platform,
        'LRU': row_0_LRU,
        'system': system_n_
      });
    }
  } ////// Form 2 data.
  //Data.


  let form2_table_1 = $('.form2_table1 table tbody td');
  let status = $(form2_table_1[0]).find('select').val();
  let fail_category = $(form2_table_1[1]).find('select').val();
  let fail_freq = $(form2_table_1[2]).find('select').val();
  let rectification_date = $(form2_table_1[3]).find('input').val();
  let rectification_time = $(form2_table_1[4]).find('input').val();
  let remarks = $(form2_table_1[5]).find('input').val(); //Checking Failure operational data mandatory fields.

  if (+status === 0) {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_1[0]).find('select'));
  } else {
    not_empty_fields.push($(form2_table_1[0]).find('select'));
  }

  if (+fail_category === 0) {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_1[1]).find('select'));
  } else {
    not_empty_fields.push($(form2_table_1[1]).find('select'));
  }

  if (rectification_date === "") {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_1[3]).find('input'));
  } else {
    not_empty_fields.push($(form2_table_1[3]).find('input'));
  }

  if (rectification_time === "") {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_1[4]).find('input'));
  } else {
    not_empty_fields.push($(form2_table_1[4]).find('input'));
  }

  if (remarks.trim() === "") {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_1[5]).find('input'));
  } else {
    not_empty_fields.push($(form2_table_1[5]).find('input'));
  } //2nd Form


  let form2_table_2 = $('.form2_table2 table tbody td');
  let shipAt = $(form2_table_2[0]).find('select').val();
  let temperatures = $(form2_table_2[1]).find('input');
  let outside_temp = temperatures[0].value;
  outside_temp = outside_temp.trim() === "" ? 0 : outside_temp;
  let comp_temp = temperatures[1].value;
  comp_temp = comp_temp.trim() === "" ? 0 : comp_temp;
  let coolant_temp = temperatures[2].value;
  coolant_temp = coolant_temp.trim() === "" ? 0 : coolant_temp;
  let source_supply = $(form2_table_2[2]).find('select').val();
  let remarks_form_2 = $(form2_table_2[3]).find('textarea').val();
  let relative_humidity = $(form2_table_2[4]).find('input').val();
  let sea_state = $(form2_table_2[5]).find('select').val();
  let supply_changeover = $(form2_table_2[7]).find('select').val();
  let rain_splash = $(form2_table_2[8]).find('select').val();
  let irr_pheno = $(form2_table_2[6]).find('textarea').val(); // let reportId = $('.reportIds').val();
  //Checking Failure operational data mandatory fields.

  if (+shipAt === 0) {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_2[0]).find('select'));
  } else {
    not_empty_fields.push($(form2_table_2[0]).find('select'));
  }

  if (+source_supply === 0) {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_2[2]).find('select'));
  } else {
    not_empty_fields.push($(form2_table_2[2]).find('select'));
  }

  if (+supply_changeover === 0) {
    has_empty_field = true;
    which_fields_empty.push($(form2_table_2[7]).find('select'));
  } else {
    not_empty_fields.push($(form2_table_2[7]).find('select'));
  } //Form 3


  let form2_table_3_trs_ = $('.form2_table3 table tbody tr');
  let form2_data = [];

  for (let i = 0; i < form2_table_3_trs_.length; i++) {
    let tr_tds = $(form2_table_3_trs_[i]).find('td');
    let shortfall_type = $(tr_tds[0]).html();
    let shotfall_desc = $(tr_tds[1]).find('textarea').val();
    form2_data.push({
      'status': status,
      'failure_category': fail_category,
      'fail_freq': fail_freq,
      'rect_date': rectification_date,
      'form1_remark': remarks,
      'rect_time': rectification_time,
      'ship_at': shipAt,
      'outside_temp': outside_temp,
      'compartment_temp': comp_temp,
      'coolant_temp': coolant_temp,
      'system_suppy': source_supply,
      'env_remarks': remarks_form_2,
      'relative_humidity': relative_humidity,
      'sea_state': sea_state,
      'supply_changeover': supply_changeover,
      'rain_splash': rain_splash,
      'other_irregular': irr_pheno,
      'shortfall_type': shortfall_type,
      'shortfall_desc': shotfall_desc
    });
  }

  let reportId = '';

  if (permission === 'L1') {
    reportId = platform + '-' + system_n_ + '-' + random_num;
  } else {
    reportId = $('.reportIds').val();
  }

  let date_issue_ = new Date();
  date_issue_ = date_issue.toLocaleString().split(',')[0];
  let final_data = {
    'step_data': step_data,
    'form1_data': final_data_p,
    'form2': form2_data,
    'reportId': reportId,
    'platform': platform,
    'issue_date': date_issue_,
    'reportSys': reportSystem
  };

  if (has_empty_field && isMand === 'Yes') {
    l1_l2_mandatory_fileds_css_effect(which_fields_empty, not_empty_fields);
  } else {
    if (lru_matched === true) {
      ajaxPost('/save_level1', final_data, level1_callback); //alert('Matched!!')
    } else {
      // alert("LRU's are not matching!!")
      toastr.error("Please File Separate Failure Report For Different LRU's !!");
    }
  }
}); //// Saving form 2 ////
// $('#form2_save').click(() => {
//     let form2_table_1 = $('.form2_table1 table tbody td');
//     let status = $(form2_table_1[0]).find('select').val();
//     let fail_category = $(form2_table_1[1]).find('select').val();
//     let fail_freq = $(form2_table_1[2]).find('select').val();
//     let rectification_date = $(form2_table_1[3]).find('input').val();
//     let rectification_time = $(form2_table_1[4]).find('input').val();
//     let remarks = $(form2_table_1[5]).find('input').val();
//
//     //2nd Form
//     let form2_table_2 = $('.form2_table2 table tbody td');
//     let shipAt = $(form2_table_2[0]).find('select').val();
//     let temperatures = $(form2_table_2[1]).find('input');
//     let outside_temp = temperatures[0].value;
//     let comp_temp = temperatures[1].value;
//     let coolant_temp = temperatures[2].value;
//     let source_supply = $(form2_table_2[2]).find('select').val();
//     let remarks_form_2 = $(form2_table_2[3]).find('textarea').val();
//     let relative_humidity = $(form2_table_2[4]).find('input').val();
//     let sea_state = $(form2_table_2[5]).find('select').val();
//     let supply_changeover = $(form2_table_2[6]).find('select').val();
//     let rain_splash = $(form2_table_2[7]).find('select').val();
//     let irr_pheno = $(form2_table_2[8]).find('textarea').val();
//     let reportId = $('.reportIds').val();
//     //Form 3
//     let form2_table_3_trs_ = $('.form2_table3 table tbody tr');
//     let form2_data = [];
//     for(let i=0; i<form2_table_3_trs_.length; i++){
//         let tr_tds = $(form2_table_3_trs_[i]).find('td');
//         let shortfall_type = $(tr_tds[0]).html();
//         let shotfall_desc = $(tr_tds[1]).find('textarea').val();
//         form2_data.push({
//             'status': status, 'failure_category': fail_category, 'fail_freq': fail_freq, 'rect_date': rectification_date,
//             'form1_remark': remarks,
//             'rect_time': rectification_time, 'ship_at': shipAt, 'outside_temp': outside_temp, 'compartment_temp':comp_temp,
//             'coolant_temp': coolant_temp, 'system_suppy': source_supply, 'env_remarks': remarks_form_2, 'relative_humidity': relative_humidity,
//             'sea_state': sea_state, 'supply_changeover': supply_changeover, 'rain_splash': rain_splash,
//             'other_irregular': irr_pheno, 'shortfall_type': shortfall_type, 'shortfall_desc': shotfall_desc
//         })
//     }
//     let final_form_data = {'id': reportId, 'data': form2_data};
//     ajaxPost('/save_level2', final_form_data, level2_callback);
// });
///// Saving Form 3

$('#form3_save').click(() => {
  let has_empty_field = false;
  let which_fields_empty = [];
  let not_empty_fields = [];
  let severity = $('.severity')[0].selectedOptions[0].innerHTML;
  let reportStatus = $('.reportStatus').val();
  let hardwareDefective = $('.hardwareDefective').val();
  let mtbf = $('.mtbf').val();
  let critical = $('.critical').val();

  if (severity === "Click to select option") {
    has_empty_field = true;
    which_fields_empty.push($('.severity'));
  } else {
    not_empty_fields.push($('.severity'));
  }

  if (+reportStatus === 0) {
    has_empty_field = true;
    which_fields_empty.push($('.reportStatus'));
  } else {
    not_empty_fields.push($('.reportStatus'));
  }

  if (+hardwareDefective === 0) {
    has_empty_field = true;
    which_fields_empty.push($('.hardwareDefective'));
  } else {
    not_empty_fields.push($('.hardwareDefective'));
  }

  if (+mtbf === 0) {
    has_empty_field = true;
    which_fields_empty.push($('.mtbf'));
  } else {
    not_empty_fields.push($('.mtbf'));
  }

  if (+critical === 0) {
    has_empty_field = true;
    which_fields_empty.push($('.critical'));
  } else {
    not_empty_fields.push($('.critical'));
  } //Form 2


  let time_rectification_data = [];
  let form3_table_2_tr = $('.form3_table2 table tbody tr');
  $.each(form3_table_2_tr, (index, val) => {
    let form3_table_2 = $(val).find('th');
    let category = form3_table_2[1].innerText;
    let days = $(form3_table_2[2]).find('input').val();
    let hours = $(form3_table_2[3]).find('input').val();
    let performed_by = $(form3_table_2[4]).find('select').val();
    let comments = $(form3_table_2[5]).find('textarea').val();
    let time_ = days + '-' + hours;
    time_rectification_data.push({
      'category': category,
      'time': time_,
      'perform_by': performed_by,
      'comments': comments
    });
  }); //Form 3

  let maintenance_perf_analysis = [];
  let form3_table_3_tr = $('.form3_table3 table tbody tr');
  $.each(form3_table_3_tr, (index, val) => {
    let form3_table_3 = $(val).find('td');
    let parameter = form3_table_3[0].innerText;
    let mpa_status = $(form3_table_3[1]).find('select').val();
    let mpa_desc = $(form3_table_3[2]).find('textarea').val();

    if (+mpa_status === 1 && mpa_desc.trim() === "") {
      has_empty_field = true;
      $(form3_table_3[2]).find('textarea').css('border', 'solid red 2px');
    } else {
      $(form3_table_3[2]).find('textarea').css('border', 'none');
    }

    maintenance_perf_analysis.push({
      'parameter': parameter,
      'mpa_status': mpa_status,
      'desc': mpa_desc
    });
  }); // Form 4

  let oem_issues = [];
  let form3_table_4_tr = $('.form3_table4 table tbody tr');
  $.each(form3_table_4_tr, (index, val) => {
    let oem_issue = $(val).find('.oem').val();
    let inA_issue = $(val).find('.inA').val();
    oem_issues.push({
      oem: oem_issue,
      inA: inA_issue
    });
  });
  let reportId = $('.level3_reportIds').val();
  let failureStatus = opr_data.filter(x => x.reportId === reportId)[0].status;
  let form3_final_data = {
    'severity': severity,
    'rectification_data': time_rectification_data,
    'maintenance_data': maintenance_perf_analysis,
    'oem_data': oem_issues,
    'reportId': reportId,
    'mtbf': mtbf,
    'critical': critical,
    'reportStatus': reportStatus,
    'hardwareDefective': hardwareDefective,
    'failureStatus': failureStatus
  };

  if (has_empty_field === true && isMand === 'Yes') {
    l1_l2_mandatory_fileds_css_effect(which_fields_empty);
  } else {
    ajaxPost('/save_level3', form3_final_data, level3_callback);
  } //console.log('Hello');

}); //Call back from level 1.

const level1_callback = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
    window.location.reload();
  }
}; //Call Back from Level 2.


const level2_callback = data => {
  toastr.success('Data sent to WRSTG for Approval!!');
}; //Call Back from Level 3.


const level3_callback = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
    window.location.reload();
  }
}; //On Form 2 load, call reportIds.


const getReportData = permission_level => {
  if (permission_level === 'L2') {
    ajaxGet('/getReportData', {}, reportData);
  } else {
    ajaxGet('/getReportData_level3', {}, reportData_level3);
  }
};

const reportData = reportData => {
  console.log(reportData);
  isMand = reportData.mand;
  let reportIDs = JSON.parse(reportData['reportIds']);
  reportIDs = reportIDs.filter(x => x.reportId.split('-')[0].trim() === sessionStorage.associated_platform);
  l2_reportData = reportData;
  let reportOption = '';
  $.each(reportIDs, (index, val) => {
    reportOption = reportOption + `<option>${val['reportId']}</option>`;
  });
  $('.reportIds').html(reportOption);
  populate_report_data();
};

const reportData_level3 = reportData => {
  let data = JSON.parse(reportData['reportIds']);
  reportIds = data;
  isMand = reportData.mand;
  opr_data = JSON.parse(reportData['opr_data']);
  systems = JSON.parse(reportData['systems']);
  let systemOption = '';
  $.each(systems, (index, val) => {
    systemOption = systemOption + `<option>${val['system']}</option>`;
  });
  $('.level3_system').html(systemOption);
  $('.level3_system_approved').html(systemOption);
  let selected_option = $('.level3_system').val();
  let reportHtml = populate_l3_reportId(selected_option);
  $('.level3_reportIds').html(reportHtml); //Getting data for IAI

  ajaxGet('/get_all_reportId', {}, level3_approved_reports);
}; //IAI reportId call back


const level3_approved_reports = d => {
  l3_approved_reportId = JSON.parse(d.reportIds);
  let selected_system = $('.level3_system_approved').val();
  iai_l3_approved_ids(selected_system);
}; //Populate reportIds for Approved L3/IAI reports.


const iai_l3_approved_ids = system => {
  let filtered_reportId = l3_approved_reportId.filter(x => x.system === system);
  let wrapper = $('.all_reportIds');
  $.each(filtered_reportId, (index, val) => {
    let html = ``;

    if (+val['iai_forward'] === 0) {
      html = `<option>${val['reportId']}</option>`;
    }

    wrapper.append(html);
  });
}; //IAI system change
// system on change function.


$('.level3_system_approved').on('change', () => {
  $('.all_reportIds').html('');
  let selected_option = $('.level3_system_approved').val();
  iai_l3_approved_ids(selected_option);
}); //Populating system wise reportId for L3 level.

const populate_l3_reportId = system => {
  let filtered_report = reportIds.filter(x => x.system === system);
  let reportOption = '';
  $.each(filtered_report, (index, val) => {
    reportOption = reportOption + `<option>${val['reportId']}</option>`;
  });
  return reportOption;
}; // system on change function.


$('.level3_system').on('change', () => {
  $('.level3_reportIds').html('');
  let selected_option = $('.level3_system').val();
  let reportHtml = populate_l3_reportId(selected_option);
  $('.level3_reportIds').html(reportHtml);
}); ////Function for populating saved reportd data by reportIDs.

const populate_report_data = () => {
  let id = $('.reportIds').val();
  basic_data = JSON.parse(l2_reportData['basic_data']);
  let opr_data = JSON.parse(l2_reportData["opr_data"]);
  let step_data = JSON.parse(l2_reportData["step_data"]);
  basic_data = basic_data.filter(x => x.reportId === id);
  opr_data = opr_data.filter(x => x.reportId === id);
  step_data = step_data.filter(x => x.reportId === id);
  let basic_data_html = '';
  let items_found_defective_html = '';
  let basic_wrapper = $('.form_1_table_fail_bd tbody');
  let items_wrapper = $('.form_1_table_items_def tbody');
  basic_wrapper.html('');
  items_wrapper.html('');
  $.each(basic_data, (index, val) => {
    let taken_populate = taken_from_populate(val['taken_from'], 'L2');
    let date = new Date(+val['occur_date']);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let today = date.getFullYear() + "-" + month + "-" + day; // date = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear();

    let html = `<tr>
                                <td><select class="form-control form1_system" disabled>
                                <option>${val['system']}</option>
                                </select></td>
                                <td><select class="form-control form1_subSys" disabled>
                                <option>${val['sub_system']}</option>
                                </select></td>
                                <td><input type="date" class="form-control" value="${today}"  disabled/></td>
                                <td><input type="time" class="form-control" value="${val['time_occur']}" disabled /></td>
                                <td><textarea maxlength="150">${val['failure_title']}</textarea></td>
                                <td><input type="number" class="form-control" value="${val['operating_hours']}" disabled /></td>
                            </tr>`;
    basic_data_html = basic_data_html + html; //Item Found Defective html

    let sys_sub_sys = val['system'] + '{' + val['sub_system'] + '}';
    let item_html = `<tr>
                                <td>${index + 1}</td>
                                <td class="item_system">${sys_sub_sys}</td>
                            <td><select class="form-control form1_lru" disabled>
                            <option>${val['lru']}</option>
                            </select></td>
                            <td>
                                <select class="form-control form1_pattern" disabled>
                                    <option>${val['pattern_no']}</option>
                                </select>
                            </td>
                            <td><input type="text" class="form-control" value="${val['serial_no']}" disabled></td>
                            <td><input type="text" class="form-control next_higher_ass" 
                            disabled value="${val['next_higher_assembly']}"></td>
                            <td><input type="text" class="form-control" value="${val['replaced_sn']}" disabled /></td>
                            <!--<td><input type="text" class="form-control" value="${val['taken_from']}"></td>-->
                            <td>
                                <select class="form-control taken_from" disabled>
                                    ${taken_populate}
                                </select>
                            </td>
                            <td><input type="text" class="form-control" value="${val['installed_clock']}" disabled /></td>
                            </tr>`;
    items_found_defective_html = items_found_defective_html + item_html;
  });
  basic_wrapper.append(basic_data_html);
  items_wrapper.append(items_found_defective_html); //Steps by step analysis html.

  let steps_html = '';
  let step_wrapper = $('.form_1_table_step tbody');
  step_wrapper.html('');
  $.each(step_data, (index, val) => {
    let html = `<tr>
                                <td>${index + 1}</td>
                                <td><input type="text" class="form-control" value="${val['bit_value']}" ></td>
                                <td><textarea maxlength="60">${val['bit_observation']}</textarea></td>
                                <td><textarea maxlength="60">${val['bit_action']}</textarea></td>
                                <td><select class="form-control" disabled>
                                    <option>${val['setp_by']}</option>
                                </select></td>
                            </tr>`;
    steps_html = steps_html + html;
  });
  step_wrapper.append(steps_html); // Operational and environmental Data Populate.

  let opr_html = '';
  let opr_wrapper = $('.form_2_table_fail_od tbody');
  let env_wrapper = $('.form_2_table_env_c tbody');
  opr_wrapper.html('');
  env_wrapper.html('');
  let local_opr_data = [opr_data[0]];
  $.each(local_opr_data, (index, val) => {
    let date = new Date(+val['rectification_date']);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let today = date.getFullYear() + "-" + month + "-" + day;
    let html = `<tr>
                                <td><select class="form-control" disabled>
                                    <option value="0">Click here to select an option</option>
                                    <option value="Rectified">Rectified</option>
                                    <option value="Outstanding">Outstanding</option>
                                    <option value="Managed">Managed</option>
                                </select></td>
                                <td><select class="form-control" disabled>
                                    <option value="0">Click here to select an option.</option>
                                    <option value="1">Hardware Defective - replaced</option>
                                    <option value="2">Hardware Defective – repaired without replacement e.g. wire disconnected</option>
                                    <option value="3">Hardware – loose connection, cleaned, card removed and refitted</option>
                                    <option value="4">Software corrupted – reloaded</option>
                                    <option value="5">Software corrupted – configured</option>
                                    <option value="6">Hanging/intermittent defect – rebooted</option>
                                    <option value="7">Optical Failure</option>
                                    <option value="8">Not identified</option>
                                </select></td>
                                <td><select disabled class="form-control">
                                    <option>Momentary</option>
                                    <option>Continual</option>
                                </select></td>
                                <td><input disabled type="date" class="form-control" value="${today}" /></td>
                                <td><input disabled id="rec_time" class="form-control" type="time" value="${val['rectification_time']}"></td>
                                <td><input disabled type="text" class="form-control" value="${val['failure_remarks']}"></td>
                            </tr>`;
    opr_wrapper.append(html);
    let selects_ = $($($('.form_2_table_fail_od tbody').find('tr'))[0]).find('select');
    $(selects_[0]).val(val['status']);
    $(selects_[1]).val(val['fail_category']);
    $(selects_[2]).val(val['failure_freq']); //////////////////////////////////
    //// enviromental Conditions /////
    //////////////////////////////////

    let env_html = `    <tr>
                                <th>Ship At</th>
                                <th>Outside/Compartment/Coolant Temperature</th>
                                <th>Sources of System Supply</th>
                                <th>Remarks</th>
                                 <th>Relative Humidity</th>
                            </tr>
                            <tr>
                                <td><select disabled class="form-control"><option>Sea</option>
                                    <option>20 Nm from shore</option>
                                    <option>Harbour</option>
                                </select></td>
                                <td>
                                    <div style="display: inline-flex">
                                    <input disabled type="text" class="form-control" placeholder="outside temp" value="${val['outside_temp']}" />
                                    <input disabled type="text" class="form-control" placeholder="compartment temp" value="${val['compartment_temp']}" />
                                    <input disabled type="text" class="form-control coolantTemp" placeholder="Coolant temp" value="${val['coolant_temp']}" /></div>
                                </td>
                                <td><select disabled class="form-control"><option>GTG</option>
                                <option>DA</option>
                                </select></td>
                                <td><textarea disabled>${val['env_remarks']}</textarea></td>
                                  <td><input disabled class="form-control" value="${val['relative_humidity']}" /></td>
                            </tr>
                            <tr>

                                <th>Sea State</th>
                                <th>Other irregular phenomenin</th>
                                <th>Supply Changeover during operation</th>
                                <th>Rain/Splash of water</th>
                                
                            </tr>
                            <tr>

                                <td><select class="form-control" disabled>
                                    <option value="-1" selected>Choose state</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select></td>
                                <td><textarea disabled>${val['other_irregular_phin']}</textarea></td>
                                <td><select disabled class="form-control"><option>No</option><option>Yes</option></td>
                                <td><select disabled class="form-control"><option>No</option><option>Yes</option></td>
                                
                            </tr>`;
    env_wrapper.append(env_html);
    let env_selects_ = $(env_wrapper).find('select');
    $(env_selects_[0]).val(val['shit_at']);
    $(env_selects_[1]).val(val['sourse_supply']);
    $(env_selects_[2]).val(val['sea_state']);
    $(env_selects_[3]).val(val['supply_chnageover']);
    $(env_selects_[4]).val(val['rain_splash']);
  }); //////////////////////////
  //////   SHORTFALLS Populate//////
  /////////////////////////

  let shortfall_wrapper = $('.form_2_table_shortfalls tbody');
  shortfall_wrapper.html('');
  $.each(opr_data, (index, val) => {
    let html = `<tr>
                        <td>${val['shortfall_type']}</td>
                        <td><textarea>${val['shortfall_desc']}</textarea></td>
                    </tr>`;
    shortfall_wrapper.append(html);
  }); //Disable all add buttons when permission levels are L2 and disable all fields and buttons on L3 permission level.

  let permission = sessionStorage.permission;

  if (permission === 'L2') {
    L2_level_disable();
  } else if (permission === 'L3') {
    L3_level_disable();
  }
};

const L2_level_disable = () => {
  $('.form_button').attr('disabled', true);
  $('.delete_report_l2').attr('disabled', false);
};

const L3_level_disable = () => {
  $('input').attr('disabled', true);
  $('select').attr('disabled', true);
  $('textarea').attr('disabled', true);
  $('.form_button').attr('disabled', true);
};

$('#show_report').click(() => {
  let reportId = $('.level3_reportIds').val();

  if (reportId != undefined || reportId != null) {
    window.open('/report_check?reportId=' + reportId, '_blank');
  }
}); //IAI show_report

$('#show_report_').click(() => {
  let reportId = $('.all_reportIds').val();

  if (reportId != undefined || reportId != null) {
    window.open('/full_report?reportId=' + reportId, '_blank');
  }
}); //logout.

$('#logout').click(() => {
  ajaxGet('/logout', {}, logout);
});

const logout = data => {
  sessionStorage.clear();
  window.location.replace('/login');
};

$('#settings').click(() => {
  let permission = sessionStorage.permission;

  if (permission === 'L4') {
    window.location.replace('/settings');
  } else {
    alert('Not Allowed to access!!');
  }
});
$('#all_report').click(() => {
  let permission = sessionStorage.permission;

  if (permission === 'L3') {
    window.location.replace('/report');
  } else {
    alert('Not Allowed to access!!');
  }
});
$('#l1_all_reports').click(() => {
  let permission = sessionStorage.permission;

  if (permission === 'L1' || permission === 'L2') {
    window.location.replace('/l_report');
  } else {
    alert('Not Allowed to access!!');
  }
});
$('#queries').click(() => {
  let permission = sessionStorage.permission;

  if (permission === 'L3' || permission === 'L4') {
    window.location.replace('/queries');
  } else {
    alert('Not Allowed to access!!');
  }
});
$('#runtime').click(() => {
  let permission = sessionStorage.permission;

  if (permission === 'L3' || permission === 'L4') {
    window.location.replace('/runtime');
  } else {
    alert('Not Allowed to access!!');
  }
}); //

$(document).on('click', '.delete_step_data', function (e) {
  $(this).closest('tr').remove();
});
$(document).on('click', '.delete_basic_data ', e => {
  let rowIndex = $(e.currentTarget).closest('tr')[0].rowIndex;
  $(e.currentTarget).closest('tr').remove();
  $('.form_1_table_items_def').find('tbody tr')[rowIndex - 1].remove();
});
$('.reportIds').on('change', () => {
  populate_report_data();
}); //Click Return Un-actioned.

$('#return_to_l2').click(() => {
  let id = $('.level3_reportIds').val();
  ajaxPost('/change_report_status', {
    'reportId': id
  }, reportstatusChange);
});

const reportstatusChange = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
  }
};

const l1_l2_mandatory_fileds_css_effect = (fields_list, not_css_fields) => {
  $.each(fields_list, (f_index, f_val) => {
    $(f_val).css('border', 'solid red 2px');
  });
  $.each(not_css_fields, (f_index, f_val) => {
    $(f_val).css('border', 'none');
  });
  toastr.error("Please fill all the mandatory fields!!");
}; //Delete Report from L2 level.


$('.delete_report_l2').on('click', () => {
  let selected_reportId = $('.reportIds').val();
  let date_issue = new Date();
  let moment_date = moment(date_issue, "MM/DD/YYYY");
  let date = new Date(moment_date._i);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let date_deletion = month + '/' + day + '/' + year;
  ajaxPost('/delete_l2', {
    reportId: selected_reportId,
    deletion_date: date_deletion
  }, delete_l2_callBack);
});

const delete_l2_callBack = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
  }
}; // Forward to IAI


$('#forward_iai').click(() => {
  let reportId = $('.all_reportIds').val();
  ajaxPost('/update_iai', {
    reportId: reportId
  }, update_iai);
});

const update_iai = d => {
  if (d.if_error) {
    toastr.error(d.message);
  } else {
    toastr.success(d.message);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2NoYXJ0anMtcGx1Z2luLWFubm90YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2NvbGxlY3RpdmVHcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWFpbi5qcyJdLCJuYW1lcyI6WyJlIiwidCIsIm4iLCJyIiwicyIsIm8iLCJ1IiwiYSIsInJlcXVpcmUiLCJpIiwiZiIsIkVycm9yIiwiY29kZSIsImwiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIm1vZHVsZSIsIkNoYXJ0IiwiY2hhcnRIZWxwZXJzIiwiaGVscGVycyIsImV2ZW50cyIsImFubm90YXRpb25UeXBlcyIsIkFubm90YXRpb24iLCJ0eXBlcyIsInNldEFmdGVyRGF0YUxpbWl0c0hvb2siLCJheGlzT3B0aW9ucyIsImRlY29yYXRlIiwicHJldmlvdXMiLCJzY2FsZSIsImFkanVzdFNjYWxlUmFuZ2UiLCJkcmF3IiwiZHJhd1RpbWUiLCJjaGFydEluc3RhbmNlIiwiZWFzaW5nRGVjaW1hbCIsImRlZmF1bHREcmF3VGltZSIsImFubm90YXRpb24iLCJvcHRpb25zIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJlbGVtZW50IiwiZm9yRWFjaCIsInRyYW5zaXRpb24iLCJiZWZvcmVJbml0IiwiY2hhcnRPcHRpb25zIiwibnMiLCJpbml0Q29uZmlnIiwib25EZXN0cm95IiwiZmlyc3RSdW4iLCJzdXBwb3J0ZWQiLCJlbnN1cmVTY2FsZXNIYXZlSURzIiwic2NhbGVzIiwiZWFjaCIsInhBeGVzIiwieUF4ZXMiLCJiZWZvcmVVcGRhdGUiLCJlbGVtZW50SWRzIiwiYW5ub3RhdGlvbnMiLCJpZCIsIm9iamVjdElkIiwidHlwZSIsImNscyIsImluaXRpYWxpemUiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4T2YiLCJkZXN0cm95IiwiYWZ0ZXJTY2FsZVVwZGF0ZSIsImNvbmZpZ3VyZSIsImJlZm9yZURhdGFzZXRzRHJhdyIsImFmdGVyRGF0YXNldHNEcmF3IiwiYWZ0ZXJEcmF3IiwiYWZ0ZXJJbml0Iiwid2F0Y2hGb3IiLCJpc0FycmF5IiwiY2FudmFzIiwiY2hhcnQiLCJldmVudEhhbmRsZXIiLCJkaXNwYXRjaGVyIiwiYmluZCIsImNvbGxhcHNlSG92ZXJFdmVudHMiLCJldmVudE5hbWUiLCJhZGRFdmVudCIsInJlbW92ZUV2ZW50IiwiZGVyZWdpc3RlcmVycyIsInBvcCIsIkFubm90YXRpb25FbGVtZW50IiwiRWxlbWVudCIsImV4dGVuZCIsImhpZGRlbiIsImhvdmVyaW5nIiwiX21vZGVsIiwiY2xvbmUiLCJzZXREYXRhTGltaXRzIiwiaW5SYW5nZSIsImdldENlbnRlclBvaW50IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJnZXRBcmVhIiwiaG92ZXIiLCJmaWx0ZXJlZEV2ZW50cyIsInBvc2l0aW9uIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImdldE5lYXJlc3RJdGVtcyIsImRibENsaWNrU3BlZWQiLCJldmVudEhhbmRsZXJzIiwiZXZlbnRIYW5kbGVyTmFtZSIsImdldEV2ZW50SGFuZGxlck5hbWUiLCJob3ZlckV2ZW50IiwiY3JlYXRlTW91c2VFdmVudCIsIm9uRGJsY2xpY2siLCJvbkNsaWNrIiwiY2xlYXJUaW1lb3V0IiwiY2xpY2tUaW1lb3V0Iiwic2V0VGltZW91dCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwibm9vcCIsIm1hcCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImlzVmFsaWQiLCJyYXdWYWx1ZSIsImlzRmluaXRlIiwib2JqIiwicHJvcCIsImZ1bmMiLCJwcmVmaXgiLCJhcmdzIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImFyZ3VtZW50cyIsImFwcGx5IiwidW5kZWZpbmVkIiwiY2FsbEVhY2giLCJmbnMiLCJtZXRob2QiLCJmbiIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicHJldmlvdXNFdmVudCIsIk1vdXNlRXZlbnQiLCJleGNlcHRpb24iLCJtIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsInZpZXciLCJkZXRhaWwiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwibWV0YUtleSIsImJ1dHRvbiIsInJlbGF0ZWRUYXJnZXQiLCJleGNlcHRpb24yIiwiaW5pdEV2ZW50IiwiY29uZmlnIiwiY29uZmlnTWVyZ2UiLCJkZWZhdWx0cyIsImxhYmVsIiwibGFiZWxEZWZhdWx0cyIsImdldFNjYWxlTGltaXRzIiwic2NhbGVJZCIsInNjYWxlTWluIiwic2NhbGVNYXgiLCJyYW5nZXMiLCJtaW4iLCJyYW5nZSIsIk51bWJlciIsInJlZHVjZSIsImIiLCJpc05hTiIsIm1heCIsInRpY2tzIiwic3VnZ2VzdGVkTWluIiwic3VnZ2VzdGVkTWF4IiwiaGFuZGxlVGlja1JhbmdlT3B0aW9ucyIsIm1pbkRpc3RhbmNlIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ4IiwieSIsIm5lYXJlc3RJdGVtcyIsImNlbnRlciIsImRpc3RhbmNlIiwiZGlzdGFuY2VCZXR3ZWVuUG9pbnRzIiwic29ydCIsInNpemVBIiwic2l6ZUIiLCJfaW5kZXgiLCJ3aW5kb3ciLCJkcmF3VGltZU9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwiZ2xvYmFsIiwiZGVmYXVsdEZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImRlZmF1bHRGb250U2l6ZSIsImZvbnRTdHlsZSIsImZvbnRDb2xvciIsInhQYWRkaW5nIiwieVBhZGRpbmciLCJjb3JuZXJSYWRpdXMiLCJ4QWRqdXN0IiwieUFkanVzdCIsImVuYWJsZWQiLCJjb250ZW50IiwibGluZSIsImJveCIsImFubm90YXRpb25QbHVnaW4iLCJwbHVnaW5TZXJ2aWNlIiwicmVnaXN0ZXIiLCJCb3hBbm5vdGF0aW9uIiwibW9kZWwiLCJ4U2NhbGUiLCJ4U2NhbGVJRCIsInlTY2FsZSIsInlTY2FsZUlEIiwiY2hhcnRBcmVhIiwieE1pbiIsImdldFBpeGVsRm9yVmFsdWUiLCJsZWZ0IiwieE1heCIsInJpZ2h0IiwieU1pbiIsImJvdHRvbSIsInlNYXgiLCJ0b3AiLCJjbGlwIiwieDEiLCJ4MiIsInkxIiwieTIiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwibW91c2VYIiwibW91c2VZIiwiYWJzIiwiX3ZpZXciLCJjdHgiLCJzYXZlIiwiYmVnaW5QYXRoIiwicmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsUmVjdCIsInN0cm9rZVJlY3QiLCJyZXN0b3JlIiwiaG9yaXpvbnRhbEtleXdvcmQiLCJ2ZXJ0aWNhbEtleXdvcmQiLCJMaW5lQW5ub3RhdGlvbiIsInNjYWxlSUQiLCJ2YWx1ZSIsImVuZFZhbHVlIiwicGl4ZWwiLCJlbmRQaXhlbCIsIk5hTiIsIm1vZGUiLCJMaW5lRnVuY3Rpb24iLCJsYWJlbEJhY2tncm91bmRDb2xvciIsImxhYmVsRm9udEZhbWlseSIsImxhYmVsRm9udFNpemUiLCJsYWJlbEZvbnRTdHlsZSIsImxhYmVsRm9udENvbG9yIiwibGFiZWxYUGFkZGluZyIsImxhYmVsWVBhZGRpbmciLCJsYWJlbENvcm5lclJhZGl1cyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbFhBZGp1c3QiLCJsYWJlbFlBZGp1c3QiLCJsYWJlbEVuYWJsZWQiLCJsYWJlbENvbnRlbnQiLCJmb250IiwiZm9udFN0cmluZyIsInRleHRXaWR0aCIsIm1lYXN1cmVUZXh0IiwidGV4dEhlaWdodCIsImNhbGN1bGF0ZUxhYmVsUG9zaXRpb24iLCJsYWJlbFgiLCJsYWJlbFkiLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImludGVyc2VjdHMiLCJzcXJ0IiwicG93Iiwic2V0TGluZURhc2giLCJsaW5lRGFzaE9mZnNldCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRyYXdSb3VuZGVkUmVjdGFuZ2xlIiwiZmlsbCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiZ2V0WCIsImdldFkiLCJlcHNpbG9uIiwiZHkiLCJkeCIsInBhZFdpZHRoIiwicGFkSGVpZ2h0IiwicmV0IiwieGEiLCJ5YSIsIkNvbGxlY3RpdmVHcmFwaCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsIm1haW5fZGF0YSIsImRyYXdPbmVHcmFwaCIsInNlbGVjdGVkX2lucHV0IiwicGxhdGZvcm1fbmFtZXMiLCJtZXRyaWNJZCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInJhbmdlX3N0YXJ0X2RhdGUiLCJtb21lbnQiLCJyYW5nZV9lbmRfZGF0ZSIsImRhdGFTZXRzIiwibGFiZWxzIiwiYW5ub3RfRGF0YSIsIk1BWF92YWwiLCJtdWx0aXBsaWVyIiwicGxhdGZvcm0iLCJwbGF0ZnJvbURhdGEiLCJtZXRyaWMiLCJtZXRyaWNfbmFtZXMiLCJncmFwaCIsImVxdWlwbWVudCIsImVxdWlwbWVudElkIiwic3BsaXQiLCJlcXVpcG1lbnRfbmFtZSIsImVxdWlwbWVudF9uYW1lcyIsImRpY3REYXRhIiwibWV0cmljRGF0YSIsImtleTIiLCJjaGFydERhdGEiLCJtZXRyaWNfdW5pX0RhdGEiLCJKU09OIiwicGFyc2UiLCIkIiwiaW5kZXgiLCJkIiwiZGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIm1vbWVudF9kYXRlIiwiZGF0ZV9mbGFnIiwiaXNCZXR3ZWVuIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY29sb3IiLCJnZXRSYW5kb21Db2xvciIsInJvdW5kIiwibWFjaGluZV9kYXRhIiwic3lzdGVtX2RhdGEiLCJzdWJfc3lzX2RhdGEiLCJmaXJzdF9ncmFwaF9sb2FkIiwibDJfcmVwb3J0RGF0YSIsImwzX3JlcG9ydERhdGEiLCJiYXNpY19kYXRhIiwic3lzdGVtcyIsInJlcG9ydElkcyIsImwzX2FwcHJvdmVkX3JlcG9ydElkIiwib3ByX2RhdGEiLCJpc01hbmQiLCJmb3JtXzFfZmFpbF9iZF9odG1sIiwiZm9ybV8xX3N0ZXBfaHRtbCIsImZvcm1fMV9pdGVtX0RlZl9odG1sIiwiZm9ybV8zX2lzc3VlX2h0bWwiLCJyZWFkeSIsInBlcm1pc3Npb24iLCJzZXNzaW9uU3RvcmFnZSIsImFzc29jaWF0ZWRfcGxhdGZvcm0iLCJib290c3RyYXBNYXRlcmlhbERhdGVQaWNrZXIiLCJmb3JtYXQiLCJ0b2FzdHIiLCJwbGF0Zm9ybV9sb2dvX2h0bWwiLCJwbGF0Zm9ybV9yYW5rIiwiaHRtbCIsImNzcyIsImFqYXhHZXQiLCJzeXNEYXRhIiwic2hvd19wYWdlIiwicGxhdGZvcm1fZGF0YSIsImFsbF9kYXRhIiwibWFuZCIsInN5c3RlbV9wb3B1bGF0ZSIsImFwcGVuZCIsInN1Yl9zeXNfcG9wdWxhdGUiLCJscnVfcG9wIiwidGFrZW5faHRtbCIsInRha2VuX2Zyb21fcG9wdWxhdGUiLCJwYXR0ZXJuX3BvcHVsYXRlIiwic3ViX3N5cyIsInZhbCIsInN5c3RlbSIsImF0dHIiLCJwZXJtaXNzaW9uX2xldmVsIiwiZ2V0UmVwb3J0RGF0YSIsInByZXZpb3VzX3NlbGVjdGVkX3N5c3RlbSIsInN5c19jb3B5Iiwic3lzIiwic3Vic3lzX2NvcHkiLCJsZW5ndGhfcm93IiwiZmluZCIsImFsbF9kYXRhX2NvcHkiLCJzZWxlY3RlZF9zeXN0ZW0iLCJmaWx0ZXJlZF9wbGF0Zm9ybXMiLCJmX2luZGV4IiwiZl92YWwiLCJscnUiLCJvbiIsInBsYXRmb3JtX25hbWUiLCJzdWJzeXMiLCJ0cmltIiwiZXJyb3IiLCJ0YWJsZV9oZWFkX3dyYXBwZXIiLCJ0YWJsZV9ib2R5X2h0bWwiLCJBZGRfRGF0YV9wb2ludCIsInRfYm9keV9odG1sIiwiY2xpY2siLCJmb3JtX251bSIsImN1cnJlbnRUYXJnZXQiLCJ3cmFwcGVyIiwiaXRlbXNfbGVuZ3RoX3JvdyIsImZpcnN0X3NlbGVjdGVkX1N5c3RlbSIsImZpcnN0X3Jvd19kYXRlIiwiZmlyc3Rfcm93X3RpbWUiLCJmaXJzdF9yb3dfdGl0bGUiLCJmaXJzdF9yb3dfb3BlcmF0aW5nX2hvdXJzIiwic3lzX2h0bWwiLCJzdWJfc3lzX2h0bWwiLCJmaXJzdF9zdWJfc3lzIiwibHJ1X2h0bWwiLCJwYXQiLCJpdGVtc19kZWZfaHRtbCIsInN0ZXBfcm93X2luZGV4Iiwic3RlcF9odG1sIiwiY291bnQiLCJjbGVhcl9mb3JtcyIsInBsYXRmb3JtX25hbWVzX2NvcHkiLCJwbGF0Zm9ybV93cmFwcGVyIiwicGxhdGZvcm1faHRtbCIsInBvcHVsYXRlX21vZGFsX2VxdWlwbWVudCIsInBvcHVsYXRlX21ldHJpY3NfbmFtZSIsImVxdWlwbWVudF93cmFwcGVyIiwic3lzdGVtX2h0bWwiLCJlcXVpcG1lbnRfbmFtZXNfaHRtbCIsIm1ldHJpY3Nfd3JhcHBlciIsInN1Yl9zeXN0ZW0iLCJjaGFuZ2VkU3lzdGVtIiwiYWxsX3RycyIsInBhcmVudCIsInRyIiwic3ViU3lzSHRtbCIsInN1Yl9zeXNfc2VsZWN0ZWQiLCJyb3dfaW5kZXgiLCJyb3dJbmRleCIsImNoYW5nZV9zeXNfc3ViX3N5c19uYW1lIiwibmV3U3lzTmFtZSIsIm5ld1N1YlN5cyIsInJvd19udW0iLCJzZWxlY3RlZF9yb3ciLCJuZXdfbmFtZSIsInNlbGVjdGVkX2xydSIsInBhdHRlcm5faHRtbCIsImNoYW5nZWRTdWJTeXN0ZW0iLCJoYXNfZW1wdHlfZmllbGQiLCJ3aGljaF9maWVsZHNfZW1wdHkiLCJub3RfZW1wdHlfZmllbGRzIiwibHJ1X21hdGNoZWQiLCJyZXBvcnRTeXN0ZW0iLCJzeXN0ZW1fbl8iLCJyZXBvcnRfcF9ieSIsInJlcG9ydF9hcHBfYnkiLCJyZXBvcnRfYnkiLCJkYXRlX2lzc3VlIiwicmFuZG9tX251bSIsIl9pIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZmluYWxfZGF0YV9wIiwic3RlcF9kYXRhIiwic3lzdGVtX3RyX2xlbmd0aCIsInJvd18wX3RkcyIsInJvd18wX0xSVSIsImJhc2ljX2RhdGFfdGRzIiwiaXRlbV9kYXRhX3RkcyIsImZvcm0xX3RhYmxlXzIiLCJkYXRlX29jY3VyIiwidGltZV9vY2N1ciIsImZhaWx1cmVfdGl0bGUiLCJvcGVyYXRpbmdfaG91cnMiLCJmb3JtMV90YWJsZV80Iiwic3lzX3N1YlN5cyIsImxydV9uYW1lIiwicGF0dGVybl9udW1iZXIiLCJzZXJpYWxfbnVtYmVyIiwibmV4dF9hc3NlbWJseSIsInJlcGxhY2VkX3NuIiwidGFrZW5fZnJvbSIsImluc3RhbGxlZF9jbG9jayIsInNldF9kYXRhX3Jvd3NfbGVuZ3RoIiwiaiIsInNldF9kYXRhX3RkcyIsImZvcm0xX3RhYmxlXzMiLCJiaXRfdmFsdWUiLCJvYnNlcnZhdGlvbiIsImFjdGlvbiIsImRvbmVfYnkiLCJmb3JtMl90YWJsZV8xIiwic3RhdHVzIiwiZmFpbF9jYXRlZ29yeSIsImZhaWxfZnJlcSIsInJlY3RpZmljYXRpb25fZGF0ZSIsInJlY3RpZmljYXRpb25fdGltZSIsInJlbWFya3MiLCJmb3JtMl90YWJsZV8yIiwic2hpcEF0IiwidGVtcGVyYXR1cmVzIiwib3V0c2lkZV90ZW1wIiwiY29tcF90ZW1wIiwiY29vbGFudF90ZW1wIiwic291cmNlX3N1cHBseSIsInJlbWFya3NfZm9ybV8yIiwicmVsYXRpdmVfaHVtaWRpdHkiLCJzZWFfc3RhdGUiLCJzdXBwbHlfY2hhbmdlb3ZlciIsInJhaW5fc3BsYXNoIiwiaXJyX3BoZW5vIiwiZm9ybTJfdGFibGVfM190cnNfIiwiZm9ybTJfZGF0YSIsInRyX3RkcyIsInNob3J0ZmFsbF90eXBlIiwic2hvdGZhbGxfZGVzYyIsInJlcG9ydElkIiwiZGF0ZV9pc3N1ZV8iLCJ0b0xvY2FsZVN0cmluZyIsImZpbmFsX2RhdGEiLCJsMV9sMl9tYW5kYXRvcnlfZmlsZWRzX2Nzc19lZmZlY3QiLCJhamF4UG9zdCIsImxldmVsMV9jYWxsYmFjayIsInNldmVyaXR5Iiwic2VsZWN0ZWRPcHRpb25zIiwiaW5uZXJIVE1MIiwicmVwb3J0U3RhdHVzIiwiaGFyZHdhcmVEZWZlY3RpdmUiLCJtdGJmIiwiY3JpdGljYWwiLCJ0aW1lX3JlY3RpZmljYXRpb25fZGF0YSIsImZvcm0zX3RhYmxlXzJfdHIiLCJmb3JtM190YWJsZV8yIiwiY2F0ZWdvcnkiLCJpbm5lclRleHQiLCJkYXlzIiwiaG91cnMiLCJwZXJmb3JtZWRfYnkiLCJjb21tZW50cyIsInRpbWVfIiwibWFpbnRlbmFuY2VfcGVyZl9hbmFseXNpcyIsImZvcm0zX3RhYmxlXzNfdHIiLCJmb3JtM190YWJsZV8zIiwicGFyYW1ldGVyIiwibXBhX3N0YXR1cyIsIm1wYV9kZXNjIiwib2VtX2lzc3VlcyIsImZvcm0zX3RhYmxlXzRfdHIiLCJvZW1faXNzdWUiLCJpbkFfaXNzdWUiLCJvZW0iLCJpbkEiLCJmYWlsdXJlU3RhdHVzIiwiZm9ybTNfZmluYWxfZGF0YSIsImxldmVsM19jYWxsYmFjayIsImlmX2Vycm9yIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImxldmVsMl9jYWxsYmFjayIsInJlcG9ydERhdGEiLCJyZXBvcnREYXRhX2xldmVsMyIsInJlcG9ydElEcyIsInJlcG9ydE9wdGlvbiIsInBvcHVsYXRlX3JlcG9ydF9kYXRhIiwic3lzdGVtT3B0aW9uIiwic2VsZWN0ZWRfb3B0aW9uIiwicmVwb3J0SHRtbCIsInBvcHVsYXRlX2wzX3JlcG9ydElkIiwibGV2ZWwzX2FwcHJvdmVkX3JlcG9ydHMiLCJpYWlfbDNfYXBwcm92ZWRfaWRzIiwiZmlsdGVyZWRfcmVwb3J0SWQiLCJmaWx0ZXJlZF9yZXBvcnQiLCJiYXNpY19kYXRhX2h0bWwiLCJpdGVtc19mb3VuZF9kZWZlY3RpdmVfaHRtbCIsImJhc2ljX3dyYXBwZXIiLCJpdGVtc193cmFwcGVyIiwidGFrZW5fcG9wdWxhdGUiLCJ0b2RheSIsInN5c19zdWJfc3lzIiwiaXRlbV9odG1sIiwic3RlcHNfaHRtbCIsInN0ZXBfd3JhcHBlciIsIm9wcl9odG1sIiwib3ByX3dyYXBwZXIiLCJlbnZfd3JhcHBlciIsImxvY2FsX29wcl9kYXRhIiwic2VsZWN0c18iLCJlbnZfaHRtbCIsImVudl9zZWxlY3RzXyIsInNob3J0ZmFsbF93cmFwcGVyIiwiTDJfbGV2ZWxfZGlzYWJsZSIsIkwzX2xldmVsX2Rpc2FibGUiLCJvcGVuIiwibG9nb3V0IiwiY2xlYXIiLCJyZXBsYWNlIiwiY2xvc2VzdCIsInJlbW92ZSIsInJlcG9ydHN0YXR1c0NoYW5nZSIsImZpZWxkc19saXN0Iiwibm90X2Nzc19maWVsZHMiLCJzZWxlY3RlZF9yZXBvcnRJZCIsImRhdGVfZGVsZXRpb24iLCJkZWxldGlvbl9kYXRlIiwiZGVsZXRlX2wyX2NhbGxCYWNrIiwidXBkYXRlX2lhaSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7QUFTQSxDQUFDLFNBQVNBLENBQVQsQ0FBV0MsQ0FBWCxFQUFhQyxDQUFiLEVBQWVDLENBQWYsRUFBaUI7QUFBQyxXQUFTQyxDQUFULENBQVdD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QUFmLEVBQTRFRSxrQkFBNUUsQ0FBUjtBQUNGLENBVkQ7O0FBV0EsTUFBTUEsa0JBQWtCLEdBQUloUyxDQUFELElBQU87QUFDOUIsTUFBR0EsQ0FBQyxDQUFDNk8sUUFBTCxFQUFjO0FBQ1Z4TSxVQUFNLENBQUN3QyxLQUFQLENBQWE3RSxDQUFDLENBQUM4TyxPQUFmO0FBQ0gsR0FGRCxNQUVLO0FBQ0R6TSxVQUFNLENBQUMwTSxPQUFQLENBQWUvTyxDQUFDLENBQUM4TyxPQUFqQjtBQUNIO0FBQ0osQ0FORCxDLENBUUE7OztBQUNBaFAsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9GLEtBQWxCLENBQXdCLE1BQU07QUFDMUIsTUFBSW9ILFFBQVEsR0FBR3hNLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CMEQsR0FBcEIsRUFBZjtBQUNBbUosVUFBUSxDQUFDLGFBQUQsRUFBZ0I7QUFBQ0wsWUFBUSxFQUFFQTtBQUFYLEdBQWhCLEVBQXNDMkYsVUFBdEMsQ0FBUjtBQUNILENBSEQ7O0FBSUEsTUFBTUEsVUFBVSxHQUFJalMsQ0FBRCxJQUFPO0FBQ3RCLE1BQUdBLENBQUMsQ0FBQzZPLFFBQUwsRUFBYztBQUNWeE0sVUFBTSxDQUFDd0MsS0FBUCxDQUFhN0UsQ0FBQyxDQUFDOE8sT0FBZjtBQUNILEdBRkQsTUFFSztBQUNEek0sVUFBTSxDQUFDME0sT0FBUCxDQUFlL08sQ0FBQyxDQUFDOE8sT0FBakI7QUFDSDtBQUNKLENBTkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3RhdGljL21haW4uanNcIik7XG4iLCIvKiFcbiAqIGNoYXJ0anMtcGx1Z2luLWFubm90YXRpb24uanNcbiAqIGh0dHA6Ly9jaGFydGpzLm9yZy9cbiAqIFZlcnNpb246IDAuNS43XG4gKlxuICogQ29weXJpZ2h0IDIwMTYgRXZlcnQgVGltYmVyZ1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcnRqcy9DaGFydC5Bbm5vdGF0aW9uLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ2hhcnQpIHtcblx0dmFyIGNoYXJ0SGVscGVycyA9IENoYXJ0LmhlbHBlcnM7XG5cblx0dmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMuanMnKShDaGFydCk7XG5cdHZhciBldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cy5qcycpKENoYXJ0KTtcblxuXHR2YXIgYW5ub3RhdGlvblR5cGVzID0gQ2hhcnQuQW5ub3RhdGlvbi50eXBlcztcblxuXHRmdW5jdGlvbiBzZXRBZnRlckRhdGFMaW1pdHNIb29rKGF4aXNPcHRpb25zKSB7XG5cdFx0aGVscGVycy5kZWNvcmF0ZShheGlzT3B0aW9ucywgJ2FmdGVyRGF0YUxpbWl0cycsIGZ1bmN0aW9uKHByZXZpb3VzLCBzY2FsZSkge1xuXHRcdFx0aWYgKHByZXZpb3VzKSBwcmV2aW91cyhzY2FsZSk7XG5cdFx0XHRoZWxwZXJzLmFkanVzdFNjYWxlUmFuZ2Uoc2NhbGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhdyhkcmF3VGltZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbihjaGFydEluc3RhbmNlLCBlYXNpbmdEZWNpbWFsKSB7XG5cdFx0XHR2YXIgZGVmYXVsdERyYXdUaW1lID0gY2hhcnRJbnN0YW5jZS5hbm5vdGF0aW9uLm9wdGlvbnMuZHJhd1RpbWU7XG5cblx0XHRcdGhlbHBlcnMuZWxlbWVudHMoY2hhcnRJbnN0YW5jZSlcblx0XHRcdFx0LmZpbHRlcihmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYXdUaW1lID09PSAoZWxlbWVudC5vcHRpb25zLmRyYXdUaW1lIHx8IGRlZmF1bHREcmF3VGltZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRlbGVtZW50LnRyYW5zaXRpb24oZWFzaW5nRGVjaW1hbCkuZHJhdygpO1xuXHRcdFx0XHR9KTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRiZWZvcmVJbml0OiBmdW5jdGlvbihjaGFydEluc3RhbmNlKSB7XG5cdFx0XHR2YXIgY2hhcnRPcHRpb25zID0gY2hhcnRJbnN0YW5jZS5vcHRpb25zO1xuXG5cdFx0XHQvLyBJbml0aWFsaXplIGNoYXJ0IGluc3RhbmNlIHBsdWdpbiBuYW1lc3BhY2Vcblx0XHRcdHZhciBucyA9IGNoYXJ0SW5zdGFuY2UuYW5ub3RhdGlvbiA9IHtcblx0XHRcdFx0ZWxlbWVudHM6IHt9LFxuXHRcdFx0XHRvcHRpb25zOiBoZWxwZXJzLmluaXRDb25maWcoY2hhcnRPcHRpb25zLmFubm90YXRpb24gfHwge30pLFxuXHRcdFx0XHRvbkRlc3Ryb3k6IFtdLFxuXHRcdFx0XHRmaXJzdFJ1bjogdHJ1ZSxcblx0XHRcdFx0c3VwcG9ydGVkOiBmYWxzZVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBhbm5vdGF0aW9uIHNjYWxlIGFkanVzdGVyIHRvIGVhY2ggc2NhbGUncyBhZnRlckRhdGFMaW1pdHMgaG9va1xuXHRcdFx0Y2hhcnRJbnN0YW5jZS5lbnN1cmVTY2FsZXNIYXZlSURzKCk7XG5cdFx0XHRpZiAoY2hhcnRPcHRpb25zLnNjYWxlcykge1xuXHRcdFx0XHRucy5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRjaGFydEhlbHBlcnMuZWFjaChjaGFydE9wdGlvbnMuc2NhbGVzLnhBeGVzLCBzZXRBZnRlckRhdGFMaW1pdHNIb29rKTtcblx0XHRcdFx0Y2hhcnRIZWxwZXJzLmVhY2goY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlcywgc2V0QWZ0ZXJEYXRhTGltaXRzSG9vayk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRiZWZvcmVVcGRhdGU6IGZ1bmN0aW9uKGNoYXJ0SW5zdGFuY2UpIHtcblx0XHRcdHZhciBucyA9IGNoYXJ0SW5zdGFuY2UuYW5ub3RhdGlvbjtcblxuXHRcdFx0aWYgKCFucy5zdXBwb3J0ZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW5zLmZpcnN0UnVuKSB7XG5cdFx0XHRcdG5zLm9wdGlvbnMgPSBoZWxwZXJzLmluaXRDb25maWcoY2hhcnRJbnN0YW5jZS5vcHRpb25zLmFubm90YXRpb24gfHwge30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnMuZmlyc3RSdW4gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGVsZW1lbnRJZHMgPSBbXTtcblxuXHRcdFx0Ly8gQWRkIG5ldyBlbGVtZW50cywgb3IgdXBkYXRlIGV4aXN0aW5nIG9uZXNcblx0XHRcdG5zLm9wdGlvbnMuYW5ub3RhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHZhciBpZCA9IGFubm90YXRpb24uaWQgfHwgaGVscGVycy5vYmplY3RJZCgpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gTm8gZWxlbWVudCB3aXRoIHRoYXQgSUQgZXhpc3RzLCBhbmQgaXQncyBhIHZhbGlkIGFubm90YXRpb24gdHlwZVxuXHRcdFx0XHRpZiAoIW5zLmVsZW1lbnRzW2lkXSAmJiBhbm5vdGF0aW9uVHlwZXNbYW5ub3RhdGlvbi50eXBlXSkge1xuXHRcdFx0XHRcdHZhciBjbHMgPSBhbm5vdGF0aW9uVHlwZXNbYW5ub3RhdGlvbi50eXBlXTtcblx0XHRcdFx0XHR2YXIgZWxlbWVudCA9IG5ldyBjbHMoe1xuXHRcdFx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogYW5ub3RhdGlvbixcblx0XHRcdFx0XHRcdGNoYXJ0SW5zdGFuY2U6IGNoYXJ0SW5zdGFuY2UsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZWxlbWVudC5pbml0aWFsaXplKCk7XG5cdFx0XHRcdFx0bnMuZWxlbWVudHNbaWRdID0gZWxlbWVudDtcblx0XHRcdFx0XHRhbm5vdGF0aW9uLmlkID0gaWQ7XG5cdFx0XHRcdFx0ZWxlbWVudElkcy5wdXNoKGlkKTtcblx0XHRcdFx0fSBlbHNlIGlmIChucy5lbGVtZW50c1tpZF0pIHtcblx0XHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvIGZvciB1cGRhdGUsIHNpbmNlIHRoZSBlbGVtZW50IGNvbmZpZyByZWZlcmVuY2VzXG5cdFx0XHRcdFx0Ly8gdGhlIHNhbWUgb2JqZWN0IHRoYXQgZXhpc3RzIGluIHRoZSBjaGFydCBhbm5vdGF0aW9uIGNvbmZpZ1xuXHRcdFx0XHRcdGVsZW1lbnRJZHMucHVzaChpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBEZWxldGUgcmVtb3ZlZCBlbGVtZW50c1xuXHRcdFx0T2JqZWN0LmtleXMobnMuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0bnMuZWxlbWVudHNbaWRdLmRlc3Ryb3koKTtcblx0XHRcdFx0XHRkZWxldGUgbnMuZWxlbWVudHNbaWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGFmdGVyU2NhbGVVcGRhdGU6IGZ1bmN0aW9uKGNoYXJ0SW5zdGFuY2UpIHtcblx0XHRcdGhlbHBlcnMuZWxlbWVudHMoY2hhcnRJbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdGVsZW1lbnQuY29uZmlndXJlKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGJlZm9yZURhdGFzZXRzRHJhdzogZHJhdygnYmVmb3JlRGF0YXNldHNEcmF3JyksXG5cdFx0YWZ0ZXJEYXRhc2V0c0RyYXc6IGRyYXcoJ2FmdGVyRGF0YXNldHNEcmF3JyksXG5cdFx0YWZ0ZXJEcmF3OiBkcmF3KCdhZnRlckRyYXcnKSxcblx0XHRhZnRlckluaXQ6IGZ1bmN0aW9uKGNoYXJ0SW5zdGFuY2UpIHtcblx0XHRcdC8vIERldGVjdCBhbmQgaW50ZXJjZXB0IGV2ZW50cyB0aGF0IGhhcHBlbiBvbiBhbiBhbm5vdGF0aW9uIGVsZW1lbnRcblx0XHRcdHZhciB3YXRjaEZvciA9IGNoYXJ0SW5zdGFuY2UuYW5ub3RhdGlvbi5vcHRpb25zLmV2ZW50cztcblx0XHRcdGlmIChjaGFydEhlbHBlcnMuaXNBcnJheSh3YXRjaEZvcikgJiYgd2F0Y2hGb3IubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgY2FudmFzID0gY2hhcnRJbnN0YW5jZS5jaGFydC5jYW52YXM7XG5cdFx0XHRcdHZhciBldmVudEhhbmRsZXIgPSBldmVudHMuZGlzcGF0Y2hlci5iaW5kKGNoYXJ0SW5zdGFuY2UpO1xuXHRcdFx0XHRldmVudHMuY29sbGFwc2VIb3ZlckV2ZW50cyh3YXRjaEZvcikuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcblx0XHRcdFx0XHRjaGFydEhlbHBlcnMuYWRkRXZlbnQoY2FudmFzLCBldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG5cdFx0XHRcdFx0Y2hhcnRJbnN0YW5jZS5hbm5vdGF0aW9uLm9uRGVzdHJveS5wdXNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y2hhcnRIZWxwZXJzLnJlbW92ZUV2ZW50KGNhbnZhcywgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKGNoYXJ0SW5zdGFuY2UpIHtcblx0XHRcdHZhciBkZXJlZ2lzdGVyZXJzID0gY2hhcnRJbnN0YW5jZS5hbm5vdGF0aW9uLm9uRGVzdHJveTtcblx0XHRcdHdoaWxlIChkZXJlZ2lzdGVyZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZGVyZWdpc3RlcmVycy5wb3AoKSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbn0se1wiLi9ldmVudHMuanNcIjo0LFwiLi9oZWxwZXJzLmpzXCI6NX1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDaGFydCkge1xuXHR2YXIgY2hhcnRIZWxwZXJzID0gQ2hhcnQuaGVscGVycztcblx0XG5cdHZhciBBbm5vdGF0aW9uRWxlbWVudCA9IENoYXJ0LkVsZW1lbnQuZXh0ZW5kKHtcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaGlkZGVuID0gZmFsc2U7XG5cdFx0XHR0aGlzLmhvdmVyaW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9tb2RlbCA9IGNoYXJ0SGVscGVycy5jbG9uZSh0aGlzLl9tb2RlbCkgfHwge307XG5cdFx0XHR0aGlzLnNldERhdGFMaW1pdHMoKTtcblx0XHR9LFxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge30sXG5cdFx0c2V0RGF0YUxpbWl0czogZnVuY3Rpb24oKSB7fSxcblx0XHRjb25maWd1cmU6IGZ1bmN0aW9uKCkge30sXG5cdFx0aW5SYW5nZTogZnVuY3Rpb24oKSB7fSxcblx0XHRnZXRDZW50ZXJQb2ludDogZnVuY3Rpb24oKSB7fSxcblx0XHRnZXRXaWR0aDogZnVuY3Rpb24oKSB7fSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uKCkge30sXG5cdFx0Z2V0QXJlYTogZnVuY3Rpb24oKSB7fSxcblx0XHRkcmF3OiBmdW5jdGlvbigpIHt9XG5cdH0pO1xuXG5cdHJldHVybiBBbm5vdGF0aW9uRWxlbWVudDtcbn07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDaGFydCkge1xuXHR2YXIgY2hhcnRIZWxwZXJzID0gQ2hhcnQuaGVscGVycztcblx0dmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMuanMnKShDaGFydCk7XG5cblx0ZnVuY3Rpb24gY29sbGFwc2VIb3ZlckV2ZW50cyhldmVudHMpIHtcblx0XHR2YXIgaG92ZXIgPSBmYWxzZTtcblx0XHR2YXIgZmlsdGVyZWRFdmVudHMgPSBldmVudHMuZmlsdGVyKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuXHRcdFx0c3dpdGNoIChldmVudE5hbWUpIHtcblx0XHRcdFx0Y2FzZSAnbW91c2VlbnRlcic6XG5cdFx0XHRcdGNhc2UgJ21vdXNlb3Zlcic6XG5cdFx0XHRcdGNhc2UgJ21vdXNlb3V0Jzpcblx0XHRcdFx0Y2FzZSAnbW91c2VsZWF2ZSc6XG5cdFx0XHRcdFx0aG92ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChob3ZlciAmJiBmaWx0ZXJlZEV2ZW50cy5pbmRleE9mKCdtb3VzZW1vdmUnKSA9PT0gLTEpIHtcblx0XHRcdGZpbHRlcmVkRXZlbnRzLnB1c2goJ21vdXNlbW92ZScpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmlsdGVyZWRFdmVudHM7XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwYXRjaGVyKGUpIHtcblx0XHR2YXIgbnMgPSB0aGlzLmFubm90YXRpb247XG5cdFx0dmFyIGVsZW1lbnRzID0gaGVscGVycy5lbGVtZW50cyh0aGlzKTtcblx0XHR2YXIgcG9zaXRpb24gPSBjaGFydEhlbHBlcnMuZ2V0UmVsYXRpdmVQb3NpdGlvbihlLCB0aGlzLmNoYXJ0KTtcblx0XHR2YXIgZWxlbWVudCA9IGhlbHBlcnMuZ2V0TmVhcmVzdEl0ZW1zKGVsZW1lbnRzLCBwb3NpdGlvbik7XG5cdFx0dmFyIGV2ZW50cyA9IGNvbGxhcHNlSG92ZXJFdmVudHMobnMub3B0aW9ucy5ldmVudHMpO1xuXHRcdHZhciBkYmxDbGlja1NwZWVkID0gbnMub3B0aW9ucy5kYmxDbGlja1NwZWVkO1xuXHRcdHZhciBldmVudEhhbmRsZXJzID0gW107XG5cdFx0dmFyIGV2ZW50SGFuZGxlck5hbWUgPSBoZWxwZXJzLmdldEV2ZW50SGFuZGxlck5hbWUoZS50eXBlKTtcblx0XHR2YXIgb3B0aW9ucyA9IChlbGVtZW50IHx8IHt9KS5vcHRpb25zO1xuXG5cdFx0Ly8gRGV0ZWN0IGhvdmVyIGV2ZW50c1xuXHRcdGlmIChlLnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiAhZWxlbWVudC5ob3ZlcmluZykge1xuXHRcdFx0XHQvLyBob3ZlciBzdGFydGVkXG5cdFx0XHRcdFsnbW91c2VlbnRlcicsICdtb3VzZW92ZXInXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuXHRcdFx0XHRcdHZhciBldmVudEhhbmRsZXJOYW1lID0gaGVscGVycy5nZXRFdmVudEhhbmRsZXJOYW1lKGV2ZW50TmFtZSk7XG5cdFx0XHRcdFx0dmFyIGhvdmVyRXZlbnQgPSBoZWxwZXJzLmNyZWF0ZU1vdXNlRXZlbnQoZXZlbnROYW1lLCBlKTsgLy8gcmVjcmVhdGUgdGhlIGV2ZW50IHRvIG1hdGNoIHRoZSBoYW5kbGVyXG5cdFx0XHRcdFx0ZWxlbWVudC5ob3ZlcmluZyA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zW2V2ZW50SGFuZGxlck5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRldmVudEhhbmRsZXJzLnB1c2goWyBvcHRpb25zW2V2ZW50SGFuZGxlck5hbWVdLCBob3ZlckV2ZW50LCBlbGVtZW50IF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdC8vIGhvdmVyIGVuZGVkXG5cdFx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmhvdmVyaW5nKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmhvdmVyaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IGVsZW1lbnQub3B0aW9ucztcblx0XHRcdFx0XHRcdFsnbW91c2VvdXQnLCAnbW91c2VsZWF2ZSddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBldmVudEhhbmRsZXJOYW1lID0gaGVscGVycy5nZXRFdmVudEhhbmRsZXJOYW1lKGV2ZW50TmFtZSk7XG5cdFx0XHRcdFx0XHRcdHZhciBob3ZlckV2ZW50ID0gaGVscGVycy5jcmVhdGVNb3VzZUV2ZW50KGV2ZW50TmFtZSwgZSk7IC8vIHJlY3JlYXRlIHRoZSBldmVudCB0byBtYXRjaCB0aGUgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9wdGlvbnNbZXZlbnRIYW5kbGVyTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudEhhbmRsZXJzLnB1c2goWyBvcHRpb25zW2V2ZW50SGFuZGxlck5hbWVdLCBob3ZlckV2ZW50LCBlbGVtZW50IF0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFN1cHByZXNzIGR1cGxpY2F0ZSBjbGljayBldmVudHMgZHVyaW5nIGEgZG91YmxlIGNsaWNrXG5cdFx0Ly8gMS4gY2xpY2sgLT4gMi4gY2xpY2sgLT4gMy4gZGJsY2xpY2tcblx0XHQvL1xuXHRcdC8vIDE6IHdhaXQgZGJsQ2xpY2tTcGVlZCBtcywgdGhlbiBmaXJlIGNsaWNrXG5cdFx0Ly8gMjogY2FuY2VsICgxKSBpZiBpdCBpcyB3YWl0aW5nIHRoZW4gd2FpdCBkYmxDbGlja1NwZWVkIG1zIHRoZW4gZmlyZSBjbGljaywgZWxzZSBmaXJlIGNsaWNrIGltbWVkaWF0ZWx5XG5cdFx0Ly8gMzogY2FuY2VsICgxKSBvciAoMikgaWYgd2FpdGluZywgdGhlbiBmaXJlIGRibGNsaWNrIFxuXHRcdGlmIChlbGVtZW50ICYmIGV2ZW50cy5pbmRleE9mKCdkYmxjbGljaycpID4gLTEgJiYgdHlwZW9mIG9wdGlvbnMub25EYmxjbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYgKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChlbGVtZW50LmNsaWNrVGltZW91dCk7XG5cdFx0XHRcdGVsZW1lbnQuY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWxldGUgZWxlbWVudC5jbGlja1RpbWVvdXQ7XG5cdFx0XHRcdFx0b3B0aW9ucy5vbkNsaWNrLmNhbGwoZWxlbWVudCwgZSk7XG5cdFx0XHRcdH0sIGRibENsaWNrU3BlZWQpO1xuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoZS50eXBlID09PSAnZGJsY2xpY2snICYmIGVsZW1lbnQuY2xpY2tUaW1lb3V0KSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChlbGVtZW50LmNsaWNrVGltZW91dCk7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtZW50LmNsaWNrVGltZW91dDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBEaXNwYXRjaCB0aGUgZXZlbnQgdG8gdGhlIHVzdWFsIGhhbmRsZXIsIGJ1dCBvbmx5IGlmIHdlIGhhdmVuJ3Qgc3Vic3RpdHV0ZWQgaXRcblx0XHRpZiAoZWxlbWVudCAmJiB0eXBlb2Ygb3B0aW9uc1tldmVudEhhbmRsZXJOYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBldmVudEhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0ZXZlbnRIYW5kbGVycy5wdXNoKFsgb3B0aW9uc1tldmVudEhhbmRsZXJOYW1lXSwgZSwgZWxlbWVudCBdKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50SGFuZGxlcikge1xuXHRcdFx0XHQvLyBbaGFuZGxlciwgZXZlbnQsIGVsZW1lbnRdXG5cdFx0XHRcdGV2ZW50SGFuZGxlclswXS5jYWxsKGV2ZW50SGFuZGxlclsyXSwgZXZlbnRIYW5kbGVyWzFdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZGlzcGF0Y2hlcjogZGlzcGF0Y2hlcixcblx0XHRjb2xsYXBzZUhvdmVyRXZlbnRzOiBjb2xsYXBzZUhvdmVyRXZlbnRzXG5cdH07XG59O1xuXG59LHtcIi4vaGVscGVycy5qc1wiOjV9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBlbGVtZW50cyhjaGFydEluc3RhbmNlKSB7XG5cdC8vIFR1cm4gdGhlIGVsZW1lbnRzIG9iamVjdCBpbnRvIGFuIGFycmF5IG9mIGVsZW1lbnRzXG5cdHZhciBlbGVtZW50cyA9IGNoYXJ0SW5zdGFuY2UuYW5ub3RhdGlvbi5lbGVtZW50cztcblx0cmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5tYXAoZnVuY3Rpb24oaWQpIHtcblx0XHRyZXR1cm4gZWxlbWVudHNbaWRdO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0SWQoKSB7XG5cdHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNik7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQocmF3VmFsdWUpIHtcblx0aWYgKHJhd1ZhbHVlID09PSBudWxsIHx8IHR5cGVvZiByYXdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiBpc0Zpbml0ZShyYXdWYWx1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICEhcmF3VmFsdWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVjb3JhdGUob2JqLCBwcm9wLCBmdW5jKSB7XG5cdHZhciBwcmVmaXggPSAnJCc7XG5cdGlmICghb2JqW3ByZWZpeCArIHByb3BdKSB7XG5cdFx0aWYgKG9ialtwcm9wXSkge1xuXHRcdFx0b2JqW3ByZWZpeCArIHByb3BdID0gb2JqW3Byb3BdLmJpbmQob2JqKTtcblx0XHRcdG9ialtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYXJncyA9IFsgb2JqW3ByZWZpeCArIHByb3BdIF0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdFx0XHRyZXR1cm4gZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2JqW3Byb3BdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBhcmdzID0gWyB1bmRlZmluZWQgXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0XHRcdHJldHVybiBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjYWxsRWFjaChmbnMsIG1ldGhvZCkge1xuXHRmbnMuZm9yRWFjaChmdW5jdGlvbihmbikge1xuXHRcdChtZXRob2QgPyBmblttZXRob2RdIDogZm4pKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudEhhbmRsZXJOYW1lKGV2ZW50TmFtZSkge1xuXHRyZXR1cm4gJ29uJyArIGV2ZW50TmFtZVswXS50b1VwcGVyQ2FzZSgpICsgZXZlbnROYW1lLnN1YnN0cmluZygxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudCh0eXBlLCBwcmV2aW91c0V2ZW50KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyBNb3VzZUV2ZW50KHR5cGUsIHByZXZpb3VzRXZlbnQpO1xuXHR9IGNhdGNoIChleGNlcHRpb24pIHtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG0gPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xuXHRcdFx0bS5pbml0TW91c2VFdmVudChcblx0XHRcdFx0dHlwZSxcblx0XHRcdFx0cHJldmlvdXNFdmVudC5jYW5CdWJibGUsXG5cdFx0XHRcdHByZXZpb3VzRXZlbnQuY2FuY2VsYWJsZSxcblx0XHRcdFx0cHJldmlvdXNFdmVudC52aWV3LFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LmRldGFpbCxcblx0XHRcdFx0cHJldmlvdXNFdmVudC5zY3JlZW5YLFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LnNjcmVlblksXG5cdFx0XHRcdHByZXZpb3VzRXZlbnQuY2xpZW50WCxcblx0XHRcdFx0cHJldmlvdXNFdmVudC5jbGllbnRZLFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LmN0cmxLZXksXG5cdFx0XHRcdHByZXZpb3VzRXZlbnQuYWx0S2V5LFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LnNoaWZ0S2V5LFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50Lm1ldGFLZXksXG5cdFx0XHRcdHByZXZpb3VzRXZlbnQuYnV0dG9uLFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LnJlbGF0ZWRUYXJnZXRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbTtcblx0XHR9IGNhdGNoIChleGNlcHRpb24yKSB7XG5cdFx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZS5pbml0RXZlbnQoXG5cdFx0XHRcdHR5cGUsXG5cdFx0XHRcdHByZXZpb3VzRXZlbnQuY2FuQnViYmxlLFxuXHRcdFx0XHRwcmV2aW91c0V2ZW50LmNhbmNlbGFibGVcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDaGFydCkge1xuXHR2YXIgY2hhcnRIZWxwZXJzID0gQ2hhcnQuaGVscGVycztcblxuXHRmdW5jdGlvbiBpbml0Q29uZmlnKGNvbmZpZykge1xuXHRcdGNvbmZpZyA9IGNoYXJ0SGVscGVycy5jb25maWdNZXJnZShDaGFydC5Bbm5vdGF0aW9uLmRlZmF1bHRzLCBjb25maWcpO1xuXHRcdGlmIChjaGFydEhlbHBlcnMuaXNBcnJheShjb25maWcuYW5ub3RhdGlvbnMpKSB7XG5cdFx0XHRjb25maWcuYW5ub3RhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdGFubm90YXRpb24ubGFiZWwgPSBjaGFydEhlbHBlcnMuY29uZmlnTWVyZ2UoQ2hhcnQuQW5ub3RhdGlvbi5sYWJlbERlZmF1bHRzLCBhbm5vdGF0aW9uLmxhYmVsKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gY29uZmlnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U2NhbGVMaW1pdHMoc2NhbGVJZCwgYW5ub3RhdGlvbnMsIHNjYWxlTWluLCBzY2FsZU1heCkge1xuXHRcdHZhciByYW5nZXMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYW5ub3RhdGlvbikge1xuXHRcdFx0cmV0dXJuICEhYW5ub3RhdGlvbi5fbW9kZWwucmFuZ2VzW3NjYWxlSWRdO1xuXHRcdH0pLm1hcChmdW5jdGlvbihhbm5vdGF0aW9uKSB7XG5cdFx0XHRyZXR1cm4gYW5ub3RhdGlvbi5fbW9kZWwucmFuZ2VzW3NjYWxlSWRdO1xuXHRcdH0pO1xuXG5cdFx0dmFyIG1pbiA9IHJhbmdlcy5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcblx0XHRcdHJldHVybiBOdW1iZXIocmFuZ2UubWluKTtcblx0XHR9KS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0cmV0dXJuIGlzRmluaXRlKGIpICYmICFpc05hTihiKSAmJiBiIDwgYSA/IGIgOiBhO1xuXHRcdH0sIHNjYWxlTWluKTtcblxuXHRcdHZhciBtYXggPSByYW5nZXMubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHJhbmdlLm1heCk7XG5cdFx0fSkucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBpc0Zpbml0ZShiKSAmJiAhaXNOYU4oYikgJiYgYiA+IGEgPyBiIDogYTtcblx0XHR9LCBzY2FsZU1heCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bWluOiBtaW4sXG5cdFx0XHRtYXg6IG1heFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGp1c3RTY2FsZVJhbmdlKHNjYWxlKSB7XG5cdFx0Ly8gQWRqdXN0IHRoZSBzY2FsZSByYW5nZSB0byBpbmNsdWRlIGFubm90YXRpb24gdmFsdWVzXG5cdFx0dmFyIHJhbmdlID0gZ2V0U2NhbGVMaW1pdHMoc2NhbGUuaWQsIGVsZW1lbnRzKHNjYWxlLmNoYXJ0KSwgc2NhbGUubWluLCBzY2FsZS5tYXgpO1xuXHRcdGlmICh0eXBlb2Ygc2NhbGUub3B0aW9ucy50aWNrcy5taW4gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzY2FsZS5vcHRpb25zLnRpY2tzLnN1Z2dlc3RlZE1pbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHNjYWxlLm1pbiA9IHJhbmdlLm1pbjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBzY2FsZS5vcHRpb25zLnRpY2tzLm1heCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNjYWxlLm9wdGlvbnMudGlja3Muc3VnZ2VzdGVkTWF4ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2NhbGUubWF4ID0gcmFuZ2UubWF4O1xuXHRcdH1cblx0XHRpZiAoc2NhbGUuaGFuZGxlVGlja1JhbmdlT3B0aW9ucykge1xuXHRcdFx0c2NhbGUuaGFuZGxlVGlja1JhbmdlT3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5lYXJlc3RJdGVtcyhhbm5vdGF0aW9ucywgcG9zaXRpb24pIHtcblx0XHR2YXIgbWluRGlzdGFuY2UgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cblx0XHRyZXR1cm4gYW5ub3RhdGlvbnNcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC5pblJhbmdlKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuXHRcdFx0fSlcblx0XHRcdC5yZWR1Y2UoZnVuY3Rpb24obmVhcmVzdEl0ZW1zLCBlbGVtZW50KSB7XG5cdFx0XHRcdHZhciBjZW50ZXIgPSBlbGVtZW50LmdldENlbnRlclBvaW50KCk7XG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IGNoYXJ0SGVscGVycy5kaXN0YW5jZUJldHdlZW5Qb2ludHMocG9zaXRpb24sIGNlbnRlcik7XG5cblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcblx0XHRcdFx0XHRuZWFyZXN0SXRlbXMgPSBbZWxlbWVudF07XG5cdFx0XHRcdFx0bWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0fSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gbWluRGlzdGFuY2UpIHtcblx0XHRcdFx0XHQvLyBDYW4gaGF2ZSBtdWx0aXBsZSBpdGVtcyBhdCB0aGUgc2FtZSBkaXN0YW5jZSBpbiB3aGljaCBjYXNlIHdlIHNvcnQgYnkgc2l6ZVxuXHRcdFx0XHRcdG5lYXJlc3RJdGVtcy5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5lYXJlc3RJdGVtcztcblx0XHRcdH0sIFtdKVxuXHRcdFx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgZWxlbWVudHMgZXF1YWxseSBjbG9zZSxcblx0XHRcdFx0Ly8gc29ydCB0aGVtIGJ5IHNpemUsIHRoZW4gYnkgaW5kZXhcblx0XHRcdFx0dmFyIHNpemVBID0gYS5nZXRBcmVhKCksIHNpemVCID0gYi5nZXRBcmVhKCk7XG5cdFx0XHRcdHJldHVybiAoc2l6ZUEgPiBzaXplQiB8fCBzaXplQSA8IHNpemVCKSA/IHNpemVBIC0gc2l6ZUIgOiBhLl9pbmRleCAtIGIuX2luZGV4O1xuXHRcdFx0fSlcblx0XHRcdC5zbGljZSgwLCAxKVswXTsgLy8gcmV0dXJuIG9ubHkgdGhlIHRvcCBpdGVtXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGluaXRDb25maWc6IGluaXRDb25maWcsXG5cdFx0ZWxlbWVudHM6IGVsZW1lbnRzLFxuXHRcdGNhbGxFYWNoOiBjYWxsRWFjaCxcblx0XHRub29wOiBub29wLFxuXHRcdG9iamVjdElkOiBvYmplY3RJZCxcblx0XHRpc1ZhbGlkOiBpc1ZhbGlkLFxuXHRcdGRlY29yYXRlOiBkZWNvcmF0ZSxcblx0XHRhZGp1c3RTY2FsZVJhbmdlOiBhZGp1c3RTY2FsZVJhbmdlLFxuXHRcdGdldE5lYXJlc3RJdGVtczogZ2V0TmVhcmVzdEl0ZW1zLFxuXHRcdGdldEV2ZW50SGFuZGxlck5hbWU6IGdldEV2ZW50SGFuZGxlck5hbWUsXG5cdFx0Y3JlYXRlTW91c2VFdmVudDogY3JlYXRlTW91c2VFdmVudFxuXHR9O1xufTtcblxuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIEdldCB0aGUgY2hhcnQgdmFyaWFibGVcbnZhciBDaGFydCA9IHJlcXVpcmUoJ2NoYXJ0LmpzJyk7XG5DaGFydCA9IHR5cGVvZihDaGFydCkgPT09ICdmdW5jdGlvbicgPyBDaGFydCA6IHdpbmRvdy5DaGFydDtcblxuLy8gQ29uZmlndXJlIHBsdWdpbiBuYW1lc3BhY2VcbkNoYXJ0LkFubm90YXRpb24gPSBDaGFydC5Bbm5vdGF0aW9uIHx8IHt9O1xuXG5DaGFydC5Bbm5vdGF0aW9uLmRyYXdUaW1lT3B0aW9ucyA9IHtcblx0YWZ0ZXJEcmF3OiAnYWZ0ZXJEcmF3Jyxcblx0YWZ0ZXJEYXRhc2V0c0RyYXc6ICdhZnRlckRhdGFzZXRzRHJhdycsXG5cdGJlZm9yZURhdGFzZXRzRHJhdzogJ2JlZm9yZURhdGFzZXRzRHJhdydcbn07XG5cbkNoYXJ0LkFubm90YXRpb24uZGVmYXVsdHMgPSB7XG5cdGRyYXdUaW1lOiAnYWZ0ZXJEYXRhc2V0c0RyYXcnLFxuXHRkYmxDbGlja1NwZWVkOiAzNTAsIC8vIG1zXG5cdGV2ZW50czogW10sXG5cdGFubm90YXRpb25zOiBbXVxufTtcblxuQ2hhcnQuQW5ub3RhdGlvbi5sYWJlbERlZmF1bHRzID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuOCknLFxuXHRmb250RmFtaWx5OiBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHksXG5cdGZvbnRTaXplOiBDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplLFxuXHRmb250U3R5bGU6ICdib2xkJyxcblx0Zm9udENvbG9yOiAnI2ZmZicsXG5cdHhQYWRkaW5nOiA2LFxuXHR5UGFkZGluZzogNixcblx0Y29ybmVyUmFkaXVzOiA2LFxuXHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdHhBZGp1c3Q6IDAsXG5cdHlBZGp1c3Q6IDAsXG5cdGVuYWJsZWQ6IGZhbHNlLFxuXHRjb250ZW50OiBudWxsXG59O1xuXG5DaGFydC5Bbm5vdGF0aW9uLkVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQuanMnKShDaGFydCk7XG5cbkNoYXJ0LkFubm90YXRpb24udHlwZXMgPSB7XG5cdGxpbmU6IHJlcXVpcmUoJy4vdHlwZXMvbGluZS5qcycpKENoYXJ0KSxcblx0Ym94OiByZXF1aXJlKCcuL3R5cGVzL2JveC5qcycpKENoYXJ0KVxufTtcblxudmFyIGFubm90YXRpb25QbHVnaW4gPSByZXF1aXJlKCcuL2Fubm90YXRpb24uanMnKShDaGFydCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ub3RhdGlvblBsdWdpbjtcbkNoYXJ0LnBsdWdpblNlcnZpY2UucmVnaXN0ZXIoYW5ub3RhdGlvblBsdWdpbik7XG5cbn0se1wiLi9hbm5vdGF0aW9uLmpzXCI6MixcIi4vZWxlbWVudC5qc1wiOjMsXCIuL3R5cGVzL2JveC5qc1wiOjcsXCIuL3R5cGVzL2xpbmUuanNcIjo4LFwiY2hhcnQuanNcIjoxfV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBCb3ggQW5ub3RhdGlvbiBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDaGFydCkge1xuXHR2YXIgaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMuanMnKShDaGFydCk7XG5cdFxuXHR2YXIgQm94QW5ub3RhdGlvbiA9IENoYXJ0LkFubm90YXRpb24uRWxlbWVudC5leHRlbmQoe1xuXHRcdHNldERhdGFMaW1pdHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG1vZGVsID0gdGhpcy5fbW9kZWw7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRcdHZhciBjaGFydEluc3RhbmNlID0gdGhpcy5jaGFydEluc3RhbmNlO1xuXG5cdFx0XHR2YXIgeFNjYWxlID0gY2hhcnRJbnN0YW5jZS5zY2FsZXNbb3B0aW9ucy54U2NhbGVJRF07XG5cdFx0XHR2YXIgeVNjYWxlID0gY2hhcnRJbnN0YW5jZS5zY2FsZXNbb3B0aW9ucy55U2NhbGVJRF07XG5cdFx0XHR2YXIgY2hhcnRBcmVhID0gY2hhcnRJbnN0YW5jZS5jaGFydEFyZWE7XG5cblx0XHRcdC8vIFNldCB0aGUgZGF0YSByYW5nZSBmb3IgdGhpcyBhbm5vdGF0aW9uXG5cdFx0XHRtb2RlbC5yYW5nZXMgPSB7fTtcblx0XHRcdFxuXHRcdFx0aWYgKCFjaGFydEFyZWEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR2YXIgbWluID0gMDtcblx0XHRcdHZhciBtYXggPSAwO1xuXHRcdFx0XG5cdFx0XHRpZiAoeFNjYWxlKSB7XG5cdFx0XHRcdG1pbiA9IGhlbHBlcnMuaXNWYWxpZChvcHRpb25zLnhNaW4pID8gb3B0aW9ucy54TWluIDogeFNjYWxlLmdldFBpeGVsRm9yVmFsdWUoY2hhcnRBcmVhLmxlZnQpO1xuXHRcdFx0XHRtYXggPSBoZWxwZXJzLmlzVmFsaWQob3B0aW9ucy54TWF4KSA/IG9wdGlvbnMueE1heCA6IHhTY2FsZS5nZXRQaXhlbEZvclZhbHVlKGNoYXJ0QXJlYS5yaWdodCk7XG5cblx0XHRcdFx0bW9kZWwucmFuZ2VzW29wdGlvbnMueFNjYWxlSURdID0ge1xuXHRcdFx0XHRcdG1pbjogTWF0aC5taW4obWluLCBtYXgpLFxuXHRcdFx0XHRcdG1heDogTWF0aC5tYXgobWluLCBtYXgpXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh5U2NhbGUpIHtcblx0XHRcdFx0bWluID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMueU1pbikgPyBvcHRpb25zLnlNaW4gOiB5U2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShjaGFydEFyZWEuYm90dG9tKTtcblx0XHRcdFx0bWF4ID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMueU1heCkgPyBvcHRpb25zLnlNYXggOiB5U2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShjaGFydEFyZWEudG9wKTtcblxuXHRcdFx0XHRtb2RlbC5yYW5nZXNbb3B0aW9ucy55U2NhbGVJRF0gPSB7XG5cdFx0XHRcdFx0bWluOiBNYXRoLm1pbihtaW4sIG1heCksXG5cdFx0XHRcdFx0bWF4OiBNYXRoLm1heChtaW4sIG1heClcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbmZpZ3VyZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbW9kZWwgPSB0aGlzLl9tb2RlbDtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdFx0dmFyIGNoYXJ0SW5zdGFuY2UgPSB0aGlzLmNoYXJ0SW5zdGFuY2U7XG5cblx0XHRcdHZhciB4U2NhbGUgPSBjaGFydEluc3RhbmNlLnNjYWxlc1tvcHRpb25zLnhTY2FsZUlEXTtcblx0XHRcdHZhciB5U2NhbGUgPSBjaGFydEluc3RhbmNlLnNjYWxlc1tvcHRpb25zLnlTY2FsZUlEXTtcblx0XHRcdHZhciBjaGFydEFyZWEgPSBjaGFydEluc3RhbmNlLmNoYXJ0QXJlYTtcblxuXHRcdFx0Ly8gY2xpcCBhbm5vdGF0aW9ucyB0byB0aGUgY2hhcnQgYXJlYVxuXHRcdFx0bW9kZWwuY2xpcCA9IHtcblx0XHRcdFx0eDE6IGNoYXJ0QXJlYS5sZWZ0LFxuXHRcdFx0XHR4MjogY2hhcnRBcmVhLnJpZ2h0LFxuXHRcdFx0XHR5MTogY2hhcnRBcmVhLnRvcCxcblx0XHRcdFx0eTI6IGNoYXJ0QXJlYS5ib3R0b21cblx0XHRcdH07XG5cblx0XHRcdHZhciBsZWZ0ID0gY2hhcnRBcmVhLmxlZnQsIFxuXHRcdFx0XHR0b3AgPSBjaGFydEFyZWEudG9wLCBcblx0XHRcdFx0cmlnaHQgPSBjaGFydEFyZWEucmlnaHQsIFxuXHRcdFx0XHRib3R0b20gPSBjaGFydEFyZWEuYm90dG9tO1xuXG5cdFx0XHR2YXIgbWluLCBtYXg7XG5cblx0XHRcdGlmICh4U2NhbGUpIHtcblx0XHRcdFx0bWluID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMueE1pbikgPyB4U2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShvcHRpb25zLnhNaW4pIDogY2hhcnRBcmVhLmxlZnQ7XG5cdFx0XHRcdG1heCA9IGhlbHBlcnMuaXNWYWxpZChvcHRpb25zLnhNYXgpID8geFNjYWxlLmdldFBpeGVsRm9yVmFsdWUob3B0aW9ucy54TWF4KSA6IGNoYXJ0QXJlYS5yaWdodDtcblx0XHRcdFx0bGVmdCA9IE1hdGgubWluKG1pbiwgbWF4KTtcblx0XHRcdFx0cmlnaHQgPSBNYXRoLm1heChtaW4sIG1heCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh5U2NhbGUpIHtcblx0XHRcdFx0bWluID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMueU1pbikgPyB5U2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShvcHRpb25zLnlNaW4pIDogY2hhcnRBcmVhLmJvdHRvbTtcblx0XHRcdFx0bWF4ID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMueU1heCkgPyB5U2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShvcHRpb25zLnlNYXgpIDogY2hhcnRBcmVhLnRvcDtcblx0XHRcdFx0dG9wID0gTWF0aC5taW4obWluLCBtYXgpO1xuXHRcdFx0XHRib3R0b20gPSBNYXRoLm1heChtaW4sIG1heCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVuc3VyZSBtb2RlbCBoYXMgcmVjdCBjb29yZGluYXRlc1xuXHRcdFx0bW9kZWwubGVmdCA9IGxlZnQ7XG5cdFx0XHRtb2RlbC50b3AgPSB0b3A7XG5cdFx0XHRtb2RlbC5yaWdodCA9IHJpZ2h0O1xuXHRcdFx0bW9kZWwuYm90dG9tID0gYm90dG9tO1xuXG5cdFx0XHQvLyBTdHlsaXN0aWMgb3B0aW9uc1xuXHRcdFx0bW9kZWwuYm9yZGVyQ29sb3IgPSBvcHRpb25zLmJvcmRlckNvbG9yO1xuXHRcdFx0bW9kZWwuYm9yZGVyV2lkdGggPSBvcHRpb25zLmJvcmRlcldpZHRoO1xuXHRcdFx0bW9kZWwuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0fSxcblx0XHRpblJhbmdlOiBmdW5jdGlvbihtb3VzZVgsIG1vdXNlWSkge1xuXHRcdFx0dmFyIG1vZGVsID0gdGhpcy5fbW9kZWw7XG5cdFx0XHRyZXR1cm4gbW9kZWwgJiZcblx0XHRcdFx0bW91c2VYID49IG1vZGVsLmxlZnQgJiYgXG5cdFx0XHRcdG1vdXNlWCA8PSBtb2RlbC5yaWdodCAmJiBcblx0XHRcdFx0bW91c2VZID49IG1vZGVsLnRvcCAmJiBcblx0XHRcdFx0bW91c2VZIDw9IG1vZGVsLmJvdHRvbTtcblx0XHR9LFxuXHRcdGdldENlbnRlclBvaW50OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBtb2RlbCA9IHRoaXMuX21vZGVsO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogKG1vZGVsLnJpZ2h0ICsgbW9kZWwubGVmdCkgLyAyLFxuXHRcdFx0XHR5OiAobW9kZWwuYm90dG9tICsgbW9kZWwudG9wKSAvIDJcblx0XHRcdH07XG5cdFx0fSxcblx0XHRnZXRXaWR0aDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbW9kZWwgPSB0aGlzLl9tb2RlbDtcblx0XHRcdHJldHVybiBNYXRoLmFicyhtb2RlbC5yaWdodCAtIG1vZGVsLmxlZnQpO1xuXHRcdH0sXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBtb2RlbCA9IHRoaXMuX21vZGVsO1xuXHRcdFx0cmV0dXJuIE1hdGguYWJzKG1vZGVsLmJvdHRvbSAtIG1vZGVsLnRvcCk7XG5cdFx0fSxcblx0XHRnZXRBcmVhOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFdpZHRoKCkgKiB0aGlzLmdldEhlaWdodCgpO1xuXHRcdH0sXG5cdFx0ZHJhdzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdmlldyA9IHRoaXMuX3ZpZXc7XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jaGFydEluc3RhbmNlLmNoYXJ0LmN0eDtcblxuXHRcdFx0Y3R4LnNhdmUoKTtcblxuXHRcdFx0Ly8gQ2FudmFzIHNldHVwXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHgucmVjdCh2aWV3LmNsaXAueDEsIHZpZXcuY2xpcC55MSwgdmlldy5jbGlwLngyIC0gdmlldy5jbGlwLngxLCB2aWV3LmNsaXAueTIgLSB2aWV3LmNsaXAueTEpO1xuXHRcdFx0Y3R4LmNsaXAoKTtcblxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHZpZXcuYm9yZGVyV2lkdGg7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSB2aWV3LmJvcmRlckNvbG9yO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHZpZXcuYmFja2dyb3VuZENvbG9yO1xuXG5cdFx0XHQvLyBEcmF3XG5cdFx0XHR2YXIgd2lkdGggPSB2aWV3LnJpZ2h0IC0gdmlldy5sZWZ0LFxuXHRcdFx0XHRoZWlnaHQgPSB2aWV3LmJvdHRvbSAtIHZpZXcudG9wO1xuXHRcdFx0Y3R4LmZpbGxSZWN0KHZpZXcubGVmdCwgdmlldy50b3AsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdFx0Y3R4LnN0cm9rZVJlY3Qodmlldy5sZWZ0LCB2aWV3LnRvcCwgd2lkdGgsIGhlaWdodCk7XG5cblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gQm94QW5ub3RhdGlvbjtcbn07XG5cbn0se1wiLi4vaGVscGVycy5qc1wiOjV9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIExpbmUgQW5ub3RhdGlvbiBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDaGFydCkge1xuXHR2YXIgY2hhcnRIZWxwZXJzID0gQ2hhcnQuaGVscGVycztcblx0dmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuLi9oZWxwZXJzLmpzJykoQ2hhcnQpO1xuXG5cdHZhciBob3Jpem9udGFsS2V5d29yZCA9ICdob3Jpem9udGFsJztcblx0dmFyIHZlcnRpY2FsS2V5d29yZCA9ICd2ZXJ0aWNhbCc7XG5cblx0dmFyIExpbmVBbm5vdGF0aW9uID0gQ2hhcnQuQW5ub3RhdGlvbi5FbGVtZW50LmV4dGVuZCh7XG5cdFx0c2V0RGF0YUxpbWl0czogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbW9kZWwgPSB0aGlzLl9tb2RlbDtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEgcmFuZ2UgZm9yIHRoaXMgYW5ub3RhdGlvblxuXHRcdFx0bW9kZWwucmFuZ2VzID0ge307XG5cdFx0XHRtb2RlbC5yYW5nZXNbb3B0aW9ucy5zY2FsZUlEXSA9IHtcblx0XHRcdFx0bWluOiBvcHRpb25zLnZhbHVlLFxuXHRcdFx0XHRtYXg6IG9wdGlvbnMuZW5kVmFsdWUgfHwgb3B0aW9ucy52YWx1ZVxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGNvbmZpZ3VyZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbW9kZWwgPSB0aGlzLl9tb2RlbDtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdFx0dmFyIGNoYXJ0SW5zdGFuY2UgPSB0aGlzLmNoYXJ0SW5zdGFuY2U7XG5cdFx0XHR2YXIgY3R4ID0gY2hhcnRJbnN0YW5jZS5jaGFydC5jdHg7XG5cblx0XHRcdHZhciBzY2FsZSA9IGNoYXJ0SW5zdGFuY2Uuc2NhbGVzW29wdGlvbnMuc2NhbGVJRF07XG5cdFx0XHR2YXIgcGl4ZWwsIGVuZFBpeGVsO1xuXHRcdFx0aWYgKHNjYWxlKSB7XG5cdFx0XHRcdHBpeGVsID0gaGVscGVycy5pc1ZhbGlkKG9wdGlvbnMudmFsdWUpID8gc2NhbGUuZ2V0UGl4ZWxGb3JWYWx1ZShvcHRpb25zLnZhbHVlKSA6IE5hTjtcblx0XHRcdFx0ZW5kUGl4ZWwgPSBoZWxwZXJzLmlzVmFsaWQob3B0aW9ucy5lbmRWYWx1ZSkgPyBzY2FsZS5nZXRQaXhlbEZvclZhbHVlKG9wdGlvbnMuZW5kVmFsdWUpIDogcGl4ZWw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc05hTihwaXhlbCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY2hhcnRBcmVhID0gY2hhcnRJbnN0YW5jZS5jaGFydEFyZWE7XG5cblx0XHRcdC8vIGNsaXAgYW5ub3RhdGlvbnMgdG8gdGhlIGNoYXJ0IGFyZWFcblx0XHRcdG1vZGVsLmNsaXAgPSB7XG5cdFx0XHRcdHgxOiBjaGFydEFyZWEubGVmdCxcblx0XHRcdFx0eDI6IGNoYXJ0QXJlYS5yaWdodCxcblx0XHRcdFx0eTE6IGNoYXJ0QXJlYS50b3AsXG5cdFx0XHRcdHkyOiBjaGFydEFyZWEuYm90dG9tXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm1vZGUgPT0gaG9yaXpvbnRhbEtleXdvcmQpIHtcblx0XHRcdFx0bW9kZWwueDEgPSBjaGFydEFyZWEubGVmdDtcblx0XHRcdFx0bW9kZWwueDIgPSBjaGFydEFyZWEucmlnaHQ7XG5cdFx0XHRcdG1vZGVsLnkxID0gcGl4ZWw7XG5cdFx0XHRcdG1vZGVsLnkyID0gZW5kUGl4ZWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb2RlbC55MSA9IGNoYXJ0QXJlYS50b3A7XG5cdFx0XHRcdG1vZGVsLnkyID0gY2hhcnRBcmVhLmJvdHRvbTtcblx0XHRcdFx0bW9kZWwueDEgPSBwaXhlbDtcblx0XHRcdFx0bW9kZWwueDIgPSBlbmRQaXhlbDtcblx0XHRcdH1cblxuXHRcdFx0bW9kZWwubGluZSA9IG5ldyBMaW5lRnVuY3Rpb24obW9kZWwpO1xuXHRcdFx0bW9kZWwubW9kZSA9IG9wdGlvbnMubW9kZTtcblxuXHRcdFx0Ly8gRmlndXJlIG91dCB0aGUgbGFiZWw6XG5cdFx0XHRtb2RlbC5sYWJlbEJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMubGFiZWwuYmFja2dyb3VuZENvbG9yO1xuXHRcdFx0bW9kZWwubGFiZWxGb250RmFtaWx5ID0gb3B0aW9ucy5sYWJlbC5mb250RmFtaWx5O1xuXHRcdFx0bW9kZWwubGFiZWxGb250U2l6ZSA9IG9wdGlvbnMubGFiZWwuZm9udFNpemU7XG5cdFx0XHRtb2RlbC5sYWJlbEZvbnRTdHlsZSA9IG9wdGlvbnMubGFiZWwuZm9udFN0eWxlO1xuXHRcdFx0bW9kZWwubGFiZWxGb250Q29sb3IgPSBvcHRpb25zLmxhYmVsLmZvbnRDb2xvcjtcblx0XHRcdG1vZGVsLmxhYmVsWFBhZGRpbmcgPSBvcHRpb25zLmxhYmVsLnhQYWRkaW5nO1xuXHRcdFx0bW9kZWwubGFiZWxZUGFkZGluZyA9IG9wdGlvbnMubGFiZWwueVBhZGRpbmc7XG5cdFx0XHRtb2RlbC5sYWJlbENvcm5lclJhZGl1cyA9IG9wdGlvbnMubGFiZWwuY29ybmVyUmFkaXVzO1xuXHRcdFx0bW9kZWwubGFiZWxQb3NpdGlvbiA9IG9wdGlvbnMubGFiZWwucG9zaXRpb247XG5cdFx0XHRtb2RlbC5sYWJlbFhBZGp1c3QgPSBvcHRpb25zLmxhYmVsLnhBZGp1c3Q7XG5cdFx0XHRtb2RlbC5sYWJlbFlBZGp1c3QgPSBvcHRpb25zLmxhYmVsLnlBZGp1c3Q7XG5cdFx0XHRtb2RlbC5sYWJlbEVuYWJsZWQgPSBvcHRpb25zLmxhYmVsLmVuYWJsZWQ7XG5cdFx0XHRtb2RlbC5sYWJlbENvbnRlbnQgPSBvcHRpb25zLmxhYmVsLmNvbnRlbnQ7XG5cblx0XHRcdGN0eC5mb250ID0gY2hhcnRIZWxwZXJzLmZvbnRTdHJpbmcobW9kZWwubGFiZWxGb250U2l6ZSwgbW9kZWwubGFiZWxGb250U3R5bGUsIG1vZGVsLmxhYmVsRm9udEZhbWlseSk7XG5cdFx0XHR2YXIgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KG1vZGVsLmxhYmVsQ29udGVudCkud2lkdGg7XG5cdFx0XHR2YXIgdGV4dEhlaWdodCA9IGN0eC5tZWFzdXJlVGV4dCgnTScpLndpZHRoO1xuXHRcdFx0dmFyIGxhYmVsUG9zaXRpb24gPSBjYWxjdWxhdGVMYWJlbFBvc2l0aW9uKG1vZGVsLCB0ZXh0V2lkdGgsIHRleHRIZWlnaHQsIG1vZGVsLmxhYmVsWFBhZGRpbmcsIG1vZGVsLmxhYmVsWVBhZGRpbmcpO1xuXHRcdFx0bW9kZWwubGFiZWxYID0gbGFiZWxQb3NpdGlvbi54IC0gbW9kZWwubGFiZWxYUGFkZGluZztcblx0XHRcdG1vZGVsLmxhYmVsWSA9IGxhYmVsUG9zaXRpb24ueSAtIG1vZGVsLmxhYmVsWVBhZGRpbmc7XG5cdFx0XHRtb2RlbC5sYWJlbFdpZHRoID0gdGV4dFdpZHRoICsgKDIgKiBtb2RlbC5sYWJlbFhQYWRkaW5nKTtcblx0XHRcdG1vZGVsLmxhYmVsSGVpZ2h0ID0gdGV4dEhlaWdodCArICgyICogbW9kZWwubGFiZWxZUGFkZGluZyk7XG5cblx0XHRcdG1vZGVsLmJvcmRlckNvbG9yID0gb3B0aW9ucy5ib3JkZXJDb2xvcjtcblx0XHRcdG1vZGVsLmJvcmRlcldpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aDtcblx0XHRcdG1vZGVsLmJvcmRlckRhc2ggPSBvcHRpb25zLmJvcmRlckRhc2ggfHwgW107XG5cdFx0XHRtb2RlbC5ib3JkZXJEYXNoT2Zmc2V0ID0gb3B0aW9ucy5ib3JkZXJEYXNoT2Zmc2V0IHx8IDA7XG5cdFx0fSxcblx0XHRpblJhbmdlOiBmdW5jdGlvbihtb3VzZVgsIG1vdXNlWSkge1xuXHRcdFx0dmFyIG1vZGVsID0gdGhpcy5fbW9kZWw7XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdC8vIE9uIHRoZSBsaW5lXG5cdFx0XHRcdG1vZGVsLmxpbmUgJiZcblx0XHRcdFx0bW9kZWwubGluZS5pbnRlcnNlY3RzKG1vdXNlWCwgbW91c2VZLCB0aGlzLmdldEhlaWdodCgpKVxuXHRcdFx0KSB8fCAoXG5cdFx0XHRcdC8vIE9uIHRoZSBsYWJlbFxuXHRcdFx0XHRtb2RlbC5sYWJlbEVuYWJsZWQgJiZcblx0XHRcdFx0bW9kZWwubGFiZWxDb250ZW50ICYmXG5cdFx0XHRcdG1vdXNlWCA+PSBtb2RlbC5sYWJlbFggJiYgXG5cdFx0XHRcdG1vdXNlWCA8PSBtb2RlbC5sYWJlbFggKyBtb2RlbC5sYWJlbFdpZHRoICYmIFxuXHRcdFx0XHRtb3VzZVkgPj0gbW9kZWwubGFiZWxZICYmIFxuXHRcdFx0XHRtb3VzZVkgPD0gbW9kZWwubGFiZWxZICsgbW9kZWwubGFiZWxIZWlnaHRcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRnZXRDZW50ZXJQb2ludDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiAodGhpcy5fbW9kZWwueDIgKyB0aGlzLl9tb2RlbC54MSkgLyAyLFxuXHRcdFx0XHR5OiAodGhpcy5fbW9kZWwueTIgKyB0aGlzLl9tb2RlbC55MSkgLyAyXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Z2V0V2lkdGg6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMuX21vZGVsLnJpZ2h0IC0gdGhpcy5fbW9kZWwubGVmdCk7XG5cdFx0fSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX21vZGVsLmJvcmRlcldpZHRoIHx8IDE7XG5cdFx0fSxcblx0XHRnZXRBcmVhOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5nZXRXaWR0aCgpLCAyKSArIE1hdGgucG93KHRoaXMuZ2V0SGVpZ2h0KCksIDIpKTtcblx0XHR9LFxuXHRcdGRyYXc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHZpZXcgPSB0aGlzLl92aWV3O1xuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2hhcnRJbnN0YW5jZS5jaGFydC5jdHg7XG5cblx0XHRcdGlmICghdmlldy5jbGlwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y3R4LnNhdmUoKTtcblxuXHRcdFx0Ly8gQ2FudmFzIHNldHVwXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHgucmVjdCh2aWV3LmNsaXAueDEsIHZpZXcuY2xpcC55MSwgdmlldy5jbGlwLngyIC0gdmlldy5jbGlwLngxLCB2aWV3LmNsaXAueTIgLSB2aWV3LmNsaXAueTEpO1xuXHRcdFx0Y3R4LmNsaXAoKTtcblxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHZpZXcuYm9yZGVyV2lkdGg7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSB2aWV3LmJvcmRlckNvbG9yO1xuXG5cdFx0XHRpZiAoY3R4LnNldExpbmVEYXNoKSB7XG5cdFx0XHRcdGN0eC5zZXRMaW5lRGFzaCh2aWV3LmJvcmRlckRhc2gpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxpbmVEYXNoT2Zmc2V0ID0gdmlldy5ib3JkZXJEYXNoT2Zmc2V0O1xuXG5cdFx0XHQvLyBEcmF3XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHgubW92ZVRvKHZpZXcueDEsIHZpZXcueTEpO1xuXHRcdFx0Y3R4LmxpbmVUbyh2aWV3LngyLCB2aWV3LnkyKTtcblx0XHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdFx0aWYgKHZpZXcubGFiZWxFbmFibGVkICYmIHZpZXcubGFiZWxDb250ZW50KSB7XG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdFx0Y3R4LnJlY3Qodmlldy5jbGlwLngxLCB2aWV3LmNsaXAueTEsIHZpZXcuY2xpcC54MiAtIHZpZXcuY2xpcC54MSwgdmlldy5jbGlwLnkyIC0gdmlldy5jbGlwLnkxKTtcblx0XHRcdFx0Y3R4LmNsaXAoKTtcblxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdmlldy5sYWJlbEJhY2tncm91bmRDb2xvcjtcblx0XHRcdFx0Ly8gRHJhdyB0aGUgdG9vbHRpcFxuXHRcdFx0XHRjaGFydEhlbHBlcnMuZHJhd1JvdW5kZWRSZWN0YW5nbGUoXG5cdFx0XHRcdFx0Y3R4LFxuXHRcdFx0XHRcdHZpZXcubGFiZWxYLCAvLyB4XG5cdFx0XHRcdFx0dmlldy5sYWJlbFksIC8vIHlcblx0XHRcdFx0XHR2aWV3LmxhYmVsV2lkdGgsIC8vIHdpZHRoXG5cdFx0XHRcdFx0dmlldy5sYWJlbEhlaWdodCwgLy8gaGVpZ2h0XG5cdFx0XHRcdFx0dmlldy5sYWJlbENvcm5lclJhZGl1cyAvLyByYWRpdXNcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmZpbGwoKTtcblxuXHRcdFx0XHQvLyBEcmF3IHRoZSB0ZXh0XG5cdFx0XHRcdGN0eC5mb250ID0gY2hhcnRIZWxwZXJzLmZvbnRTdHJpbmcoXG5cdFx0XHRcdFx0dmlldy5sYWJlbEZvbnRTaXplLFxuXHRcdFx0XHRcdHZpZXcubGFiZWxGb250U3R5bGUsXG5cdFx0XHRcdFx0dmlldy5sYWJlbEZvbnRGYW1pbHlcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHZpZXcubGFiZWxGb250Q29sb3I7XG5cdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblx0XHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuXHRcdFx0XHRjdHguZmlsbFRleHQoXG5cdFx0XHRcdFx0dmlldy5sYWJlbENvbnRlbnQsXG5cdFx0XHRcdFx0dmlldy5sYWJlbFggKyAodmlldy5sYWJlbFdpZHRoIC8gMiksXG5cdFx0XHRcdFx0dmlldy5sYWJlbFkgKyAodmlldy5sYWJlbEhlaWdodCAvIDIpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBMaW5lRnVuY3Rpb24odmlldykge1xuXHRcdC8vIERlc2NyaWJlIHRoZSBsaW5lIGluIHNsb3BlLWludGVyY2VwdCBmb3JtICh5ID0gbXggKyBiKS5cblx0XHQvLyBOb3RlIHRoYXQgdGhlIGF4ZXMgYXJlIHJvdGF0ZWQgOTDCsCBDQ1csIHdoaWNoIGNhdXNlcyB0aGVcblx0XHQvLyB4LSBhbmQgeS1heGVzIHRvIGJlIHN3YXBwZWQuXG5cdFx0dmFyIG0gPSAodmlldy54MiAtIHZpZXcueDEpIC8gKHZpZXcueTIgLSB2aWV3LnkxKTtcblx0XHR2YXIgYiA9IHZpZXcueDEgfHwgMDtcblxuXHRcdHRoaXMubSA9IG07XG5cdFx0dGhpcy5iID0gYjtcblxuXHRcdHRoaXMuZ2V0WCA9IGZ1bmN0aW9uKHkpIHtcblx0XHRcdC8vIENvb3JkaW5hdGVzIGFyZSByZWxhdGl2ZSB0byB0aGUgb3JpZ2luIG9mIHRoZSBjYW52YXNcblx0XHRcdHJldHVybiBtICogKHkgLSB2aWV3LnkxKSArIGI7XG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0WSA9IGZ1bmN0aW9uKHgpIHtcblx0XHRcdHJldHVybiAoKHggLSBiKSAvIG0pICsgdmlldy55MTtcblx0XHR9O1xuXG5cdFx0dGhpcy5pbnRlcnNlY3RzID0gZnVuY3Rpb24oeCwgeSwgZXBzaWxvbikge1xuXHRcdFx0ZXBzaWxvbiA9IGVwc2lsb24gfHwgMC4wMDE7XG5cdFx0XHR2YXIgZHkgPSB0aGlzLmdldFkoeCksXG5cdFx0XHRcdGR4ID0gdGhpcy5nZXRYKHkpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0KCFpc0Zpbml0ZShkeSkgfHwgTWF0aC5hYnMoeSAtIGR5KSA8IGVwc2lsb24pICYmXG5cdFx0XHRcdCghaXNGaW5pdGUoZHgpIHx8IE1hdGguYWJzKHggLSBkeCkgPCBlcHNpbG9uKVxuXHRcdFx0KTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FsY3VsYXRlTGFiZWxQb3NpdGlvbih2aWV3LCB3aWR0aCwgaGVpZ2h0LCBwYWRXaWR0aCwgcGFkSGVpZ2h0KSB7XG5cdFx0dmFyIGxpbmUgPSB2aWV3LmxpbmU7XG5cdFx0dmFyIHJldCA9IHt9LCB4YSA9IDAsIHlhID0gMDtcblxuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Ly8gdG9wIGFsaWduXG5cdFx0XHRjYXNlIHZpZXcubW9kZSA9PSB2ZXJ0aWNhbEtleXdvcmQgJiYgdmlldy5sYWJlbFBvc2l0aW9uID09IFwidG9wXCI6XG5cdFx0XHRcdHlhID0gcGFkSGVpZ2h0ICsgdmlldy5sYWJlbFlBZGp1c3Q7XG5cdFx0XHRcdHhhID0gKHdpZHRoIC8gMikgKyB2aWV3LmxhYmVsWEFkanVzdDtcblx0XHRcdFx0cmV0LnkgPSB2aWV3LnkxICsgeWE7XG5cdFx0XHRcdHJldC54ID0gKGlzRmluaXRlKGxpbmUubSkgPyBsaW5lLmdldFgocmV0LnkpIDogdmlldy54MSkgLSB4YTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBib3R0b20gYWxpZ25cblx0XHRcdGNhc2Ugdmlldy5tb2RlID09IHZlcnRpY2FsS2V5d29yZCAmJiB2aWV3LmxhYmVsUG9zaXRpb24gPT0gXCJib3R0b21cIjpcblx0XHRcdFx0eWEgPSBoZWlnaHQgKyBwYWRIZWlnaHQgKyB2aWV3LmxhYmVsWUFkanVzdDtcblx0XHRcdFx0eGEgPSAod2lkdGggLyAyKSArIHZpZXcubGFiZWxYQWRqdXN0O1xuXHRcdFx0XHRyZXQueSA9IHZpZXcueTIgLSB5YTtcblx0XHRcdFx0cmV0LnggPSAoaXNGaW5pdGUobGluZS5tKSA/IGxpbmUuZ2V0WChyZXQueSkgOiB2aWV3LngxKSAtIHhhO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIGxlZnQgYWxpZ25cblx0XHRcdGNhc2Ugdmlldy5tb2RlID09IGhvcml6b250YWxLZXl3b3JkICYmIHZpZXcubGFiZWxQb3NpdGlvbiA9PSBcImxlZnRcIjpcblx0XHRcdFx0eGEgPSBwYWRXaWR0aCArIHZpZXcubGFiZWxYQWRqdXN0O1xuXHRcdFx0XHR5YSA9IC0oaGVpZ2h0IC8gMikgKyB2aWV3LmxhYmVsWUFkanVzdDtcblx0XHRcdFx0cmV0LnggPSB2aWV3LngxICsgeGE7XG5cdFx0XHRcdHJldC55ID0gbGluZS5nZXRZKHJldC54KSArIHlhO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIHJpZ2h0IGFsaWduXG5cdFx0XHRjYXNlIHZpZXcubW9kZSA9PSBob3Jpem9udGFsS2V5d29yZCAmJiB2aWV3LmxhYmVsUG9zaXRpb24gPT0gXCJyaWdodFwiOlxuXHRcdFx0XHR4YSA9IHdpZHRoICsgcGFkV2lkdGggKyB2aWV3LmxhYmVsWEFkanVzdDtcblx0XHRcdFx0eWEgPSAtKGhlaWdodCAvIDIpICsgdmlldy5sYWJlbFlBZGp1c3Q7XG5cdFx0XHRcdHJldC54ID0gdmlldy54MiAtIHhhO1xuXHRcdFx0XHRyZXQueSA9IGxpbmUuZ2V0WShyZXQueCkgKyB5YTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBjZW50ZXIgYWxpZ25cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldC54ID0gKCh2aWV3LngxICsgdmlldy54MiAtIHdpZHRoKSAvIDIpICsgdmlldy5sYWJlbFhBZGp1c3Q7XG5cdFx0XHRcdHJldC55ID0gKCh2aWV3LnkxICsgdmlldy55MiAtIGhlaWdodCkgLyAyKSArIHZpZXcubGFiZWxZQWRqdXN0O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRyZXR1cm4gTGluZUFubm90YXRpb247XG59O1xuXG59LHtcIi4uL2hlbHBlcnMuanNcIjo1fV19LHt9LFs2XSk7XG4iLCJleHBvcnQgY2xhc3MgQ29sbGVjdGl2ZUdyYXBoe1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5tYWluX2RhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdPbmVHcmFwaChzZWxlY3RlZF9pbnB1dCwgcGxhdGZvcm1fbmFtZXMsIG1ldHJpY0lkLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSkge1xyXG4gICAgICAgIC8vcmFuZ2VcclxuICAgICAgICAvL2xldCBkYXRlX3JhbmdlID0gcmFuZ2Uuc3BsaXQoJy0nKTtcclxuICAgICAgICBsZXQgcmFuZ2Vfc3RhcnRfZGF0ZSA9IG1vbWVudChzdGFydF9kYXRlLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIGxldCByYW5nZV9lbmRfZGF0ZSA9IG1vbWVudChlbmRfZGF0ZSwgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBsZXQgZGF0YVNldHMgPSBbXTtcclxuICAgICAgICBsZXQgbGFiZWxzID0gW107XHJcbiAgICAgICAgbGV0IGFubm90X0RhdGEgPSBbXTtcclxuICAgICAgICBsZXQgTUFYX3ZhbDtcclxuICAgICAgICBsZXQgbXVsdGlwbGllcjtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm1fbmFtZXNbK3NlbGVjdGVkX2lucHV0LnBsYXRmb3JtIC0xXTtcclxuICAgICAgICBsZXQgcGxhdGZyb21EYXRhID0gdGhpcy5tYWluX2RhdGFbdGhpcy5wbGF0Zm9ybV07XHJcbiAgICAgICAgdGhpcy5tZXRyaWMgPSBwbGF0ZnJvbURhdGEubWV0cmljX25hbWVzWyttZXRyaWNJZCAtMV07XHJcbiAgICAgICAgdGhpcy5ncmFwaCA9IHNlbGVjdGVkX2lucHV0LmdyYXBoO1xyXG4gICAgICAgIHRoaXMuZXF1aXBtZW50ID0gc2VsZWN0ZWRfaW5wdXQuZXF1aXBtZW50O1xyXG4gICAgICAgIGxldCBlcXVpcG1lbnRJZCA9IHRoaXMuZXF1aXBtZW50WzBdLnNwbGl0KCctJylbMV07XHJcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRfbmFtZSA9IHBsYXRmcm9tRGF0YS5lcXVpcG1lbnRfbmFtZXNbK2VxdWlwbWVudElkIC0gMV07XHJcbiAgICAgICAgbGV0IGRhdGEgPSBwbGF0ZnJvbURhdGEuZGljdERhdGFbdGhpcy5lcXVpcG1lbnRfbmFtZV07XHJcbiAgICAgICAgbGV0IG1ldHJpY0RhdGEgPSBkYXRhW3RoaXMubWV0cmljXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkyIGluIG1ldHJpY0RhdGEpe1xyXG4gICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gW107XHJcbiAgICAgICAgICAgIGxldCBtZXRyaWNfdW5pX0RhdGEgPSBKU09OLnBhcnNlKG1ldHJpY0RhdGFba2V5Ml0pO1xyXG4gICAgICAgICAgICAkLmVhY2gobWV0cmljX3VuaV9EYXRhLCAoaW5kZXgsIGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZigrZC5tYXggPD0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAxLjNcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IDEuMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBNQVhfdmFsID0gZC5tYXg7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgKGRhdGUuZ2V0TW9udGgoKSsxKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbWVudF9kYXRlID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZV9mbGFnID0gbW9tZW50X2RhdGUuaXNCZXR3ZWVuKHJhbmdlX3N0YXJ0X2RhdGUsIHJhbmdlX2VuZF9kYXRlLCBudWxsLCAnW10nKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGVfZmxhZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgbGFiZWxzLnB1c2goZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGFydERhdGEucHVzaChkWydSZWNvcmRlZCBWYWx1ZXMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnREYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBkWyd2YWx1ZSddXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbm5vdF9EYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd1RpbWU6ICdhZnRlckRyYXcnLCAvLyBvdmVycmlkZXMgYW5ub3RhdGlvbi5kcmF3VGltZSBpZiBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogWydjbGljayddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVJRDogJ3ktYXhpcy0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDIwMCwwLDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJNSU5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdIZWxsbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhbm5vdF9EYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd1RpbWU6ICdhZnRlckRyYXcnLCAvLyBvdmVycmlkZXMgYW5ub3RhdGlvbi5kcmF3VGltZSBpZiBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogWydjbGljayddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVJRDogJ3ktYXhpcy0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMCwyMDAsMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIk1BWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0hlbGxvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVNldHMucHVzaCh7bGFiZWw6IGtleTIsIGRhdGE6IGNoYXJ0RGF0YSwgYmFja2dyb3VuZENvbG9yOmNvbG9yLCBmaWxsOiBmYWxzZSwgYm9yZGVyQ29sb3I6Y29sb3J9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtsYWJlbHMsIGRhdGFTZXRzLCB0aGlzLm1ldHJpYywgdGhpcy5ncmFwaCwgYW5ub3RfRGF0YSwgTUFYX3ZhbCwgbXVsdGlwbGllcl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29sb3IoKXtcclxuICAgIGxldCBvID0gTWF0aC5yb3VuZCwgciA9IE1hdGgucmFuZG9tLCBzID0gMjU1O1xyXG4gICAgcmV0dXJuICdyZ2JhKCcgKyBvKHIoKSpzKSArICcsJyArIG8ocigpKnMpICsgJywnICsgbyhyKCkqcykgKyAnLCcgKyAwLjYgKyAnKSc7XHJcbn1cclxufVxyXG5cclxuXHJcbiIsImxldCBtYWNoaW5lX2RhdGE7XHJcbmxldCBtYWluX2RhdGE7XHJcbmxldCBwbGF0Zm9ybV9uYW1lcztcclxubGV0IHN5c3RlbV9kYXRhO1xyXG5sZXQgc3ViX3N5c19kYXRhO1xyXG5sZXQgZmlyc3RfZ3JhcGhfbG9hZCA9IHRydWU7XHJcbmxldCBsMl9yZXBvcnREYXRhO1xyXG5sZXQgbDNfcmVwb3J0RGF0YTtcclxubGV0IGJhc2ljX2RhdGE7XHJcbmxldCBzeXN0ZW1zO1xyXG5sZXQgcmVwb3J0SWRzO1xyXG5sZXQgbDNfYXBwcm92ZWRfcmVwb3J0SWQ7XHJcbmxldCBvcHJfZGF0YTtcclxubGV0IGlzTWFuZDtcclxuXHJcbi8vSFRNTCBmb3IgYWxsIGZvcm1zIEFkZCBEYXRhLlxyXG5sZXQgZm9ybV8xX2ZhaWxfYmRfaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybTFfc3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtMV9zdWJTeXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjx0ZXh0YXJlYT48L3RleHRhcmVhPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG5sZXQgZm9ybV8xX3N0ZXBfaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48dGV4dGFyZWEgbWF4bGVuZ3RoPVwiNjBcIj48L3RleHRhcmVhPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjx0ZXh0YXJlYSBtYXhsZW5ndGg9XCI2MFwiPjwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNoaXAgU3RhZmY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Eb2NreWFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldSU1RHPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SUFJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxubGV0IGZvcm1fMV9pdGVtX0RlZl9odG1sID0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybTFfbHJ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybTFfcGF0dGVyblwiPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHRha2VuX2Zyb21cIj48L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuXHJcbi8vRm9ybSAzXHJcbmxldCBmb3JtXzNfaXNzdWVfaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ3aWR0aDogNDUlXCI+PHRleHRhcmVhIGNsYXNzPVwib2VtXCI+PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwid2lkdGg6IDQ1JVwiPjx0ZXh0YXJlYSBjbGFzcz1cImluQVwiPjwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aSBjbGFzcz1cInBlLTdzLXRyYXNoIGRlbGV0ZV9zdGVwX2RhdGEgZGVsZXRlX2ljb25cIj48L2k+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuXHJcblxyXG5pbXBvcnQge0NvbGxlY3RpdmVHcmFwaH0gZnJvbSAnLi9jb2xsZWN0aXZlR3JhcGgnO1xyXG5pbXBvcnQgKiBhcyBDaGFydEFubm90YXRpb24gZnJvbSAnLi9jaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uJztcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBlcm1pc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5wZXJtaXNzaW9uO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybTtcclxuICAgICQoJy50aW1lJykuYm9vdHN0cmFwTWF0ZXJpYWxEYXRlUGlja2VyKHtkYXRlOmZhbHNlLCBmb3JtYXQ6ICdISDptbSd9KTtcclxuICAgIHRvYXN0ci5vcHRpb25zID0ge1xyXG4gIFwiY2xvc2VCdXR0b25cIjogZmFsc2UsXHJcbiAgXCJkZWJ1Z1wiOiBmYWxzZSxcclxuICBcIm5ld2VzdE9uVG9wXCI6IGZhbHNlLFxyXG4gIFwicHJvZ3Jlc3NCYXJcIjogdHJ1ZSxcclxuICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtY2VudGVyXCIsXHJcbiAgXCJwcmV2ZW50RHVwbGljYXRlc1wiOiBmYWxzZSxcclxuICBcIm9uY2xpY2tcIjogbnVsbCxcclxuICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxyXG4gIFwiaGlkZUR1cmF0aW9uXCI6IFwiMTAwMFwiLFxyXG4gIFwidGltZU91dFwiOiBcIjUwMDBcIixcclxuICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcclxuICBcInNob3dFYXNpbmdcIjogXCJzd2luZ1wiLFxyXG4gIFwiaGlkZUVhc2luZ1wiOiBcImxpbmVhclwiLFxyXG4gIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxyXG4gIFwiaGlkZU1ldGhvZFwiOiBcImZhZGVPdXRcIlxyXG59XHJcbiAgICBsZXQgcGxhdGZvcm1fbG9nb19odG1sID0gYCR7cGxhdGZvcm19IDxzdWIgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsXCI+JHtzZXNzaW9uU3RvcmFnZS5wbGF0Zm9ybV9yYW5rfTwvc3ViPmA7XHJcbiAgICAkKCcubXR1LWxvZ28nKS5odG1sKHBsYXRmb3JtX2xvZ29faHRtbCk7XHJcbiAgICBpZihwZXJtaXNzaW9uID09PSAnTDEnIHx8IHBlcm1pc3Npb24gPT09ICdMMicpe1xyXG5cclxuICAgICAgICBpZihwZXJtaXNzaW9uID09PSAnTDInKXtcclxuICAgICAgICAgICAgJCgnI2Zvcm0xX3NhdmUnKS5odG1sKCdGb3J3YXJkIHRvIFdSU1RHJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJyNmb3JtMV9zYXZlJykuaHRtbCgnRm9yd2FyZCBmb3IgQXBwcm92YWwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NldHRpbmdzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICAgICAgJCgnI2wxX2FsbF9yZXBvcnRzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgYWpheEdldCgnL2dldF9zeXNfZGF0YScsIG51bGwsIHN5c0RhdGEpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLm10dS1sb2dvJykuaHRtbChwbGF0Zm9ybV9sb2dvX2h0bWwpO1xyXG4gICAgICAgIHNob3dfcGFnZSgpO1xyXG4gICAgICAgIGlmIChwZXJtaXNzaW9uID09PSAnTDQnKXtcclxuICAgICAgICAgICAgJCgnI3NldHRpbmdzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjc2V0dGluZ3MnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYWxsX3JlcG9ydCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJyNxdWVyaWVzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnI2wxX2FsbF9yZXBvcnRzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKCcjcnVudGltZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJyNvdmVybGF5JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBzeXNEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIHBsYXRmb3JtX25hbWVzID0gZGF0YS5wbGF0Zm9ybV9kYXRhO1xyXG4gICAgbWFpbl9kYXRhID0gZGF0YS5hbGxfZGF0YTtcclxuICAgIHN5c3RlbV9kYXRhID0gZGF0YS5zeXN0ZW1fZGF0YTtcclxuICAgIHN1Yl9zeXNfZGF0YSA9IGRhdGEuc3ViX3N5c19kYXRhO1xyXG4gICAgaXNNYW5kID0gZGF0YS5tYW5kO1xyXG4gICAgLy9wb3B1bGF0ZV9wbGF0Zm9ybShwbGF0Zm9ybV9uYW1lcyk7XHJcbiAgICBsZXQgaHRtbCA9IHN5c3RlbV9wb3B1bGF0ZSgpO1xyXG4gICAgJCgnLmZvcm0xX3N5c3RlbScpLmFwcGVuZChodG1sKTtcclxuICAgIGh0bWwgPSBzdWJfc3lzX3BvcHVsYXRlKCk7XHJcbiAgICAkKCcuZm9ybTFfc3ViU3lzJykuYXBwZW5kKGh0bWwpO1xyXG4gICAgaHRtbCA9IGxydV9wb3AoKTtcclxuICAgICQoJy5mb3JtMV9scnUnKS5hcHBlbmQoaHRtbCk7XHJcbiAgICBsZXQgdGFrZW5faHRtbCA9IHRha2VuX2Zyb21fcG9wdWxhdGUoKTtcclxuICAgICQoJy50YWtlbl9mcm9tJykuYXBwZW5kKHRha2VuX2h0bWwpO1xyXG4gICAgaHRtbCA9IHBhdHRlcm5fcG9wdWxhdGUoKTtcclxuICAgICQoJy5mb3JtMV9wYXR0ZXJuJykuYXBwZW5kKGh0bWwpO1xyXG4gICAgbGV0IHN1Yl9zeXMgPSAkKCcuZm9ybTFfc3ViU3lzJykudmFsKCk7XHJcbiAgICAkKCcubmV4dF9oaWdoZXJfYXNzJykudmFsKHN1Yl9zeXMpO1xyXG4gICAgc2hvd19wYWdlKCk7XHJcbiAgICBsZXQgc3lzdGVtID0gJCgnLmZvcm0xX3N5c3RlbScpLnZhbCgpO1xyXG4gICAgaWYoc3lzdGVtID09PSAnTUZTVEFSJyl7XHJcbiAgICAgICAgJCgnLmNvb2xhbnRUZW1wJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgJCgnLmNvb2xhbnRUZW1wJykudmFsKCcwJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKCcuY29vbGFudFRlbXAnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICQoJy5jb29sYW50VGVtcCcpLnZhbCgnMCcpO1xyXG4gICAgfVxyXG4gICAgJCgnI292ZXJsYXknKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG59O1xyXG5jb25zdCBzaG93X3BhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGVybWlzc2lvbl9sZXZlbCA9IHNlc3Npb25TdG9yYWdlLnBlcm1pc3Npb247XHJcbiAgICBpZihwZXJtaXNzaW9uX2xldmVsID09PSBcIkwxXCIgfHwgcGVybWlzc2lvbl9sZXZlbCA9PT0gJ0wyJyl7XHJcbiAgICAgICAvLyAkKCcuZm9ybV8yJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIGlmKHBlcm1pc3Npb25fbGV2ZWwgPT09ICdMMicpe1xyXG4gICAgICAgICAgICAkKCcucmVwb3J0SWR0YWJsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICBnZXRSZXBvcnREYXRhKHBlcm1pc3Npb25fbGV2ZWwpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcucmVwb3J0SWR0YWJsZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5mb3JtXzMnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgJCgnLmZvcm1fMScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBnZXRSZXBvcnREYXRhKHBlcm1pc3Npb25fbGV2ZWwpO1xyXG4gICAgICAgICQoJy5mb3JtXzEnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgJCgnLmZvcm1fMicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAkKCcuZm9ybV8zJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgcG9wdWxhdGVfcGxhdGZvcm0gPSAocGxhdGZvcm1fbGlzdCkgPT4ge1xyXG4vLyAgICAgbGV0IGh0bWwgPSAnJztcclxuLy8gICAgICQuZWFjaChwbGF0Zm9ybV9saXN0LCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbi8vICAgICAgIGh0bWwgPSBodG1sICsgYDxvcHRpb24+JHt2YWx1ZX08L29wdGlvbj5gO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICAkKCcjbGFuZ09wdCcpLmFwcGVuZChodG1sKTtcclxuLy8gfTtcclxuLy9vbkxvYWQgc3lzdGVtX3BvcHVsYXRlXHJcbmNvbnN0IHN5c3RlbV9wb3B1bGF0ZSAgPSAgKHBsYXRmb3JtID0gbnVsbCwgcHJldmlvdXNfc2VsZWN0ZWRfc3lzdGVtPXVuZGVmaW5lZCkgPT4ge1xyXG4gICAgaWYocGxhdGZvcm0gPT09IG51bGwpe1xyXG4gICAgICAgIHBsYXRmb3JtID0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybTtcclxuICAgIH1cclxuICAgIGxldCBzeXNfY29weSA9IHN5c3RlbV9kYXRhO1xyXG4gICAgbGV0IHN5c3RlbXMgPSBzeXNfY29weVtwbGF0Zm9ybV07XHJcbiAgICBsZXQgaHRtbCA9ICcnO1xyXG4gICAgJC5lYWNoKHN5c3RlbXMsIChpbmRleCwgc3lzKSA9PiB7XHJcbiAgICAgICAgaWYocHJldmlvdXNfc2VsZWN0ZWRfc3lzdGVtID09PSBzeXMpe1xyXG4gICAgICAgICAgICBodG1sID0gaHRtbCArIGA8b3B0aW9uIHNlbGVjdGVkPiR7c3lzfTwvb3B0aW9uPmBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyBgPG9wdGlvbj4ke3N5c308L29wdGlvbj5gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaHRtbDtcclxufVxyXG4vL29ubG9hZCBzdWJfc3lzIHBvcHVsYXRlXHJcbmNvbnN0IHN1Yl9zeXNfcG9wdWxhdGUgPSAocGxhdGZvcm09bnVsbCwgc3lzdGVtPW51bGwpID0+IHtcclxuICAgIGlmKHBsYXRmb3JtID09PSBudWxsICYmIHN5c3RlbSA9PT0gbnVsbCl7XHJcbiAgICAgICAgcGxhdGZvcm0gPSBzZXNzaW9uU3RvcmFnZS5hc3NvY2lhdGVkX3BsYXRmb3JtO1xyXG4gICAgICAgIHN5c3RlbSA9ICQoJy5mb3JtMV9zeXN0ZW0nKS52YWwoKTtcclxuICAgIH07XHJcbiAgICBsZXQgc3Vic3lzX2NvcHkgPSBzdWJfc3lzX2RhdGE7XHJcbiAgICBsZXQgc3lzdGVtcyA9IHN1YnN5c19jb3B5LmZpbHRlcih4ID0+IHhbJ3BsYXRmb3JtJ10gPT09IHBsYXRmb3JtICYmIHhbJ3N5c3RlbSddID09PSBzeXN0ZW0pO1xyXG4gICAgbGV0IGh0bWwgPSAnJztcclxuICAgICQuZWFjaChzeXN0ZW1zLCAoaW5kZXgsIHN5cykgPT4ge1xyXG4gICAgICAgIGh0bWwgPSBodG1sICsgYDxvcHRpb24+JHtzeXNbJ3N1Yl9zeXMnXX08L29wdGlvbj5gXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG4vL0xSVSBwb3B1bGF0ZVxyXG5jb25zdCBscnVfcG9wID0gKHN5c3RlbT1udWxsLCBzdWJfc3lzPW51bGwpID0+IHtcclxuICAgIGxldCBwbGF0Zm9ybSA9IHNlc3Npb25TdG9yYWdlLmFzc29jaWF0ZWRfcGxhdGZvcm07XHJcbiAgICBpZihzeXN0ZW09PW51bGwgJiYgc3ViX3N5cyA9PSBudWxsKXtcclxuICAgICAgICBzeXN0ZW0gPSAkKCcuZm9ybTFfc3lzdGVtJykudmFsKCk7XHJcbiAgICAgICAgc3ViX3N5cyA9ICQoJy5mb3JtMV9zdWJTeXMnKS52YWwoKTtcclxuICAgICAgICBsZXQgbGVuZ3RoX3JvdyA9ICQoJy5mb3JtXzFfdGFibGVfaXRlbXNfZGVmIHRib2R5IHRyJykubGVuZ3RoO1xyXG4gICAgICAgICQoJCgnLmZvcm1fMV90YWJsZV9pdGVtc19kZWYgdGJvZHkgdHInKVtsZW5ndGhfcm93IC0gMV0pLmZpbmQoJy5pdGVtX3N5c3RlbScpLmh0bWwoc3lzdGVtICsgJyAnICsgICd7JyArIHN1Yl9zeXMgKyAnfScpO1xyXG4gICAgfVxyXG4gICAgbGV0IGFsbF9kYXRhX2NvcHkgPSBtYWluX2RhdGE7XHJcbiAgICBsZXQgc3lzdGVtcyA9IGFsbF9kYXRhX2NvcHkuZmlsdGVyKHggPT4geFsncGxhdGZvcm0nXSA9PT0gcGxhdGZvcm0gJiYgeFsnc3lzdGVtJ10gPT09IHN5c3RlbSAmJiB4WydzdWJfc3lzJ10gPT09ICBzdWJfc3lzKTtcclxuICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAkLmVhY2goc3lzdGVtcywgKGluZGV4LCBzeXMpID0+IHtcclxuICAgICAgICBodG1sID0gaHRtbCArIGA8b3B0aW9uPiR7c3lzWydscnUnXX08L29wdGlvbj5gXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG4vLyBUYWtlbiBGcm9tIEhUTUwgcG9wdWxhdGVcclxuY29uc3QgdGFrZW5fZnJvbV9wb3B1bGF0ZSA9IChzZWxlY3RlZF9zeXN0ZW09MCwgcGVybWlzc2lvbj0nTDEnKSA9PiB7XHJcbiAgICBsZXQgaHRtbCA9IGBgO1xyXG4gICAgbGV0IGZpbHRlcmVkX3BsYXRmb3JtcyA9IHBsYXRmb3JtX25hbWVzLmZpbHRlcih4ID0+IHghPSBzZXNzaW9uU3RvcmFnZS5hc3NvY2lhdGVkX3BsYXRmb3JtKTtcclxuICAgIGZpbHRlcmVkX3BsYXRmb3JtcyA9IFsnTmlsJywuLi5maWx0ZXJlZF9wbGF0Zm9ybXMsICdPQlMnLCAnQk5EJywgJ0lBSSddO1xyXG4gICAgJC5lYWNoKGZpbHRlcmVkX3BsYXRmb3JtcywgKGZfaW5kZXgsIGZfdmFsKSA9PiB7XHJcbiAgICAgICAgaWYocGVybWlzc2lvbiA9PT0gJ0wxJyl7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYDxvcHRpb24+JHtmX3ZhbH08L29wdGlvbj5gO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihmX3ZhbCA9PT0gc2VsZWN0ZWRfc3lzdGVtKXtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxvcHRpb24gc2VsZWN0ZWQ+JHtmX3ZhbH08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxvcHRpb24+JHtmX3ZhbH08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaHRtbFxyXG59XHJcblxyXG4vL1BhdHRlcm4gTnVtYmVyXHJcbmNvbnN0IHBhdHRlcm5fcG9wdWxhdGUgPSAoc3lzdGVtPW51bGwsIHN1Yl9zeXM9bnVsbCwgbHJ1PW51bGwpID0+IHtcclxuICAgIGxldCBwbGF0Zm9ybSA9IHNlc3Npb25TdG9yYWdlLmFzc29jaWF0ZWRfcGxhdGZvcm07XHJcbiAgICBpZihzeXN0ZW09PT1udWxsICYmIHN1Yl9zeXMgPT09IG51bGwsIGxydT09PW51bGwpe1xyXG4gICAgICAgIHN5c3RlbSA9ICQoJy5mb3JtMV9zeXN0ZW0nKS52YWwoKTtcclxuICAgICAgICBzdWJfc3lzID0gJCgnLmZvcm0xX3N1YlN5cycpLnZhbCgpO1xyXG4gICAgICAgIGxydSA9ICQoJy5mb3JtMV9scnUnKS52YWwoKTtcclxuICAgIH1cclxuICAgIGxldCBhbGxfZGF0YV9jb3B5ID0gbWFpbl9kYXRhO1xyXG4gICAgbGV0IHN5c3RlbXMgPSBhbGxfZGF0YV9jb3B5LmZpbHRlcih4ID0+IHhbJ3BsYXRmb3JtJ10gPT09IHBsYXRmb3JtICYmXHJcbiAgICAgICAgeFsnc3lzdGVtJ10gPT09IHN5c3RlbSAmJiB4WydzdWJfc3lzJ10gPT09ICBzdWJfc3lzICYmIHhbJ2xydSddID09PSBscnUpO1xyXG4gICAgbGV0IGh0bWwgPSBgYDtcclxuICAgIGlmKHN5c3RlbXNbMF1bJ29sZF9wYXR0J10gIT0gXCIwXCIpe1xyXG4gICAgICAgIGh0bWwgKz0gYDxvcHRpb24+JHtzeXN0ZW1zWzBdWydvbGRfcGF0dCddfTwvb3B0aW9uPmA7XHJcbiAgICB9XHJcbiAgICBpZihzeXN0ZW1zWzBdWyduZXdfcGF0dCddICE9IFwiMFwiKXtcclxuICAgICAgICBodG1sICs9IGA8b3B0aW9uPiR7c3lzdGVtc1swXVsnbmV3X3BhdHQnXX08L29wdGlvbj5gXHJcbiAgICB9XHJcbiAgICAvLyBodG1sID0gYDxvcHRpb24+JHtzeXN0ZW1zWzBdWydvbGRfcGF0dCddfTwvb3B0aW9uPlxyXG4gICAgLy8gICAgICAgICAgICAgPG9wdGlvbj4ke3N5c3RlbXNbMF1bJ25ld19wYXR0J119PC9vcHRpb24+YDtcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG4kKCcjZ2VuZXJhdGVfZGF0YV90YWJsZScpLm9uKCdjbGljaycsIChlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHBsYXRmb3JtX25hbWUgPSAkKCdpbnB1dFtuYW1lPXBsYXRmb3Jtc10nKS52YWwoKTtcclxuICAgIGxldCBzeXN0ZW0gPSAkKCdpbnB1dFtuYW1lPXN5c3RlbV0nKS52YWwoKTtcclxuICAgIGxldCBzdWJzeXMgPSAkKCdpbnB1dFtuYW1lPXN1YnN5c10nKS52YWwoKTtcclxuICAgIGlmKHBsYXRmb3JtX25hbWUudHJpbSgpID09PSAnJyAmJiBzeXN0ZW0udHJpbSgpID09PSAnJyAmJiBzdWJzeXMudHJpbSgpID09PSAnJyl7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdQbGVhc2UgRW50ZXIgdmFsaWQgZGF0YSBpbiB0aGUgZm9ybSBhYm92ZSEhIScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHRhYmxlX2hlYWRfd3JhcHBlciA9ICQoJyNkYXRhX3BvaW50X3RhYmxlIHRib2R5Jyk7XHJcbiAgICBsZXQgdGFibGVfYm9keV9odG1sID0gQWRkX0RhdGFfcG9pbnQoKTtcclxuICAgIHRhYmxlX2hlYWRfd3JhcHBlci5hcHBlbmQodGFibGVfYm9keV9odG1sKTtcclxufSk7XHJcblxyXG5jb25zdCAgQWRkX0RhdGFfcG9pbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0ZSA9ICQoXCIjZGF0ZV9pZFwiKS52YWwoKTtcclxuICAgIGxldCB0X2JvZHlfaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBsaXN0PVwiTFJVXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0ICBuYW1lPVwiTFJVXCIgPjwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbCBkYXRhX3BvaW50XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGRhdGFfcG9pbnRcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICByZXR1cm4gdF9ib2R5X2h0bWw7XHJcbn1cclxuXHJcbi8vICQoJyNsb2FkX2RhdGEnKS5jbGljaygoKSA9PiB7XHJcbi8vICAgICBsZXQgcGxhdGZvcm1faW5kZXggPSAkKFwiI2xhbmdPcHRcIikudmFsKCk7XHJcbi8vICAgICBsZXQgZm9ybV9udW0gPSAkKCcjZm9ybXNfaWQnKS52YWwoKTtcclxuLy8gICAgIGlmKGZvcm1fbnVtID09PSBcIkZvcm0gMVwiKXtcclxuLy8gICAgICAgIC8vICQoJy5mb3JtXzInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbi8vICAgICAgICAgJCgnLmZvcm1fMycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuLy8gICAgICAgICAkKCcuZm9ybV8xJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuLy8gICAgIH1lbHNlIGlmKGZvcm1fbnVtID09PSAnRm9ybSAyJyl7XHJcbi8vICAgICAgICAgZ2V0UmVwb3J0RGF0YShmb3JtX251bSk7XHJcbi8vICAgICAgICAgJCgnLmZvcm1fMScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuLy8gICAgICAgICAkKCcuZm9ybV8zJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4vLyAgICAgICAgICQoJy5mb3JtXzInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgZ2V0UmVwb3J0RGF0YShmb3JtX251bSk7XHJcbi8vICAgICAgICAgJCgnLmZvcm1fMScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuLy8gICAgICAgICAkKCcuZm9ybV8yJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4vLyAgICAgICAgICQoJy5mb3JtXzMnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbiQoJy5mb3JtX2J1dHRvbicpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxuICAgIGxldCBwZXJtaXNzaW9uID0gc2Vzc2lvblN0b3JhZ2UucGVybWlzc2lvbjtcclxuICAgIGxldCBmb3JtX251bSA9ICQoJyNmb3Jtc19pZCcpLnZhbCgpO1xyXG4gICAgbGV0IGF0dHIgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1hdHRyJyk7XHJcbiAgICBsZXQgd3JhcHBlciA9ICcnO1xyXG4gICAgLy9Gb3JtIDFcclxuICAgIGlmKHBlcm1pc3Npb24gPT09ICdMMScgfHwgcGVybWlzc2lvbiA9PT0gJ0wyJyl7XHJcbiAgICAgICAgaWYoYXR0ciA9PT0gJ2Zvcm1fMV9mYWlsX2JkJyl7XHJcbiAgICAgICAgICAgIHdyYXBwZXIgPSAkKCcuZm9ybV8xX3RhYmxlX2ZhaWxfYmQgdGJvZHknKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zX2xlbmd0aF9yb3cgPSAkKCcuZm9ybV8xX3RhYmxlX2l0ZW1zX2RlZiB0Ym9keSB0cicpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0X3NlbGVjdGVkX1N5c3RlbSA9ICQoJCh3cmFwcGVyKS5maW5kKCd0cicpWzBdKS5maW5kKCcuZm9ybTFfc3lzdGVtJykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdF9yb3dfZGF0ZSA9ICQoJCgkKHdyYXBwZXIpLmZpbmQoJ3RyJylbMF0pLmZpbmQoJ3RkJylbMl0pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdF9yb3dfdGltZSA9ICQoJCgkKHdyYXBwZXIpLmZpbmQoJ3RyJylbMF0pLmZpbmQoJ3RkJylbM10pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdF9yb3dfdGl0bGUgPSAkKCQoJCh3cmFwcGVyKS5maW5kKCd0cicpWzBdKS5maW5kKCd0ZCcpWzRdKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgZmlyc3Rfcm93X29wZXJhdGluZ19ob3VycyA9ICQoJCgkKHdyYXBwZXIpLmZpbmQoJ3RyJylbMF0pLmZpbmQoJ3RkJylbNV0pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBzeXNfaHRtbCA9IHN5c3RlbV9wb3B1bGF0ZShudWxsLCBmaXJzdF9zZWxlY3RlZF9TeXN0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgc3ViX3N5c19odG1sID0gc3ViX3N5c19wb3B1bGF0ZShwbGF0Zm9ybSwgZmlyc3Rfc2VsZWN0ZWRfU3lzdGVtKTtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0xX3N5c3RlbVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3lzX2h0bWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtMV9zdWJTeXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N1Yl9zeXNfaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBkaXNhYmxlZCB2YWx1ZT1cIiR7Zmlyc3Rfcm93X2RhdGV9XCIvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQgdmFsdWU9XCIke2ZpcnN0X3Jvd190aW1lfVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHRleHRhcmVhIGRpc2FibGVkPiR7Zmlyc3Rfcm93X3RpdGxlfTwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRpc2FibGVkIHZhbHVlPVwiJHtmaXJzdF9yb3dfb3BlcmF0aW5nX2hvdXJzfVwiID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aSBjbGFzcz1cInBlLTdzLXRyYXNoIGRlbGV0ZV9iYXNpY19kYXRhIGRlbGV0ZV9pY29uXCI+PC9pPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAvL0FwcGVuZCBGb3JtIDEgRGVmZWN0aXZlIHJvdyBvbiBhZGRpdGlvbiBvZiBGYWlsdXJlIEJhc2ljIERhdGFcclxuICAgICAgICAgICAgbGV0IGZpcnN0X3N1Yl9zeXMgPSBzdWJfc3lzX2RhdGEuZmlsdGVyKHggPT4geFsncGxhdGZvcm0nXSA9PT0gcGxhdGZvcm0gJiYgeFsnc3lzdGVtJ10gPT09IGZpcnN0X3NlbGVjdGVkX1N5c3RlbSlbMF1bJ3N1Yl9zeXMnXTtcclxuICAgICAgICAgICAgbGV0IGxydV9odG1sID0gbHJ1X3BvcCgpO1xyXG4gICAgICAgICAgICBsZXQgdGFrZW5faHRtbCA9IHRha2VuX2Zyb21fcG9wdWxhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHBhdCA9IHBhdHRlcm5fcG9wdWxhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zX2RlZl9odG1sID0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtc19sZW5ndGhfcm93ICsgMX0uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJpdGVtX3N5c3RlbVwiPiR7Zmlyc3Rfc2VsZWN0ZWRfU3lzdGVtICsgJ3sgJyArIGZpcnN0X3N1Yl9zeXMgKyAnfSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0xX2xydVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtscnVfaHRtbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtMV9wYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmV4dF9oaWdoZXJfYXNzXCIgdmFsdWU9XCIke2ZpcnN0X3N1Yl9zeXN9XCIgZGlzYWJsZWQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCB0YWtlbl9mcm9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0YWtlbl9odG1sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmBcclxuICAgICAgICAgICAgd3JhcHBlciA9ICQoJy5mb3JtXzFfdGFibGVfaXRlbXNfZGVmIHRib2R5Jyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kKGl0ZW1zX2RlZl9odG1sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhdHRyID09PSAnZm9ybV8xX3N0ZXAnKXtcclxuICAgICAgICAgICAgd3JhcHBlciA9ICQoJy5mb3JtXzFfdGFibGVfc3RlcCB0Ym9keScpO1xyXG4gICAgICAgICAgICBsZXQgc3RlcF9yb3dfaW5kZXggPSAkKCcuZm9ybV8xX3RhYmxlX3N0ZXAgdGJvZHkgdHInKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBzdGVwX2h0bWwgPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4keytzdGVwX3Jvd19pbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHRleHRhcmVhPjwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHRleHRhcmVhPjwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNoaXAgU3RhZmY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Eb2NreWFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldSU1RHPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SUFJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJwZS03cy10cmFzaCBkZWxldGVfc3RlcF9kYXRhIGRlbGV0ZV9pY29uXCI+PC9pPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kKHN0ZXBfaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9Gb3JtIDNcclxuICAgIGlmKHBlcm1pc3Npb24gPT09ICdMMycpe1xyXG4gICAgICAgIGlmKGF0dHIgPT09ICdmb3JtXzNfaXNzdWUnKXtcclxuICAgICAgICAgICAgd3JhcHBlciA9ICQoJy5mb3JtXzNfdGFibGVfaXNzdWVzIHRib2R5Jyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kKGZvcm1fM19pc3N1ZV9odG1sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL0RhdGEgSW5wdXQgTW9kZWxcclxuJCgnI2RhdGFfaW5wdXRfZm9ybScpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY2xlYXJfZm9ybXMoKTtcclxuICAgIC8vUGxhdGZvcm0gTmFtZXMgUG9wdWxhdGUuXHJcbiAgICBsZXQgcGxhdGZvcm1fbmFtZXNfY29weSA9IHBsYXRmb3JtX25hbWVzO1xyXG4gICAgJCgnI3BsYXRmb3JtX2lkJykuaHRtbCgnJyk7XHJcbiAgICAkKCdpbnB1dFtuYW1lPXBsYXRmb3Jtc10nKS52YWwoJycpO1xyXG4gICAgbGV0IHBsYXRmb3JtX3dyYXBwZXIgPSAkKCcjcGxhdGZvcm1faWQnKTtcclxuICAgICQoJyNkYXRhX3BvaW50X3RhYmxlIHRib2R5JykuaHRtbCgnJyk7XHJcbiAgICBsZXQgcGxhdGZvcm1faHRtbCA9IGBgO1xyXG4gICAgcGxhdGZvcm1fbmFtZXNfY29weS5tYXAocGxhdGZvcm0gPT4ge1xyXG4gICAgICAgIHBsYXRmb3JtX2h0bWwgPSBwbGF0Zm9ybV9odG1sICsgYDxvcHRpb24gdmFsdWU9XCIke3BsYXRmb3JtfVwiPmA7XHJcbiAgICB9KTtcclxuICAgIHBsYXRmb3JtX3dyYXBwZXIuYXBwZW5kKHBsYXRmb3JtX2h0bWwpO1xyXG59KTtcclxuXHJcbi8vRGF0YWxpc3QgY2hhbmdlIGlucHV0IHRyYWNrIFBsYXRmb3JtIE5hbWUuXHJcbiQoJ2lucHV0W25hbWU9cGxhdGZvcm1zXScpLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcGxhdGZvcm1fbmFtZSA9IHRoaXMudmFsdWU7XHJcbiAgICBwb3B1bGF0ZV9tb2RhbF9lcXVpcG1lbnQocGxhdGZvcm1fbmFtZSk7XHJcbn0pO1xyXG5cclxuJChcImlucHV0W25hbWU9c3lzdGVtXVwiKS5vbignZm9jdXNvdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHN5c3RlbSA9IHRoaXMudmFsdWU7XHJcbiAgICBwb3B1bGF0ZV9tZXRyaWNzX25hbWUoc3lzdGVtKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3B1bGF0ZV9tb2RhbF9lcXVpcG1lbnQgPSAocGxhdGZvcm1fbmFtZSkgPT4ge1xyXG4gICAgJCgnaW5wdXRbbmFtZT1lcXVpcG1lbnRdJykudmFsKCcnKTtcclxuICAgICQoJyNlcXVpcG1lbnRfaWQnKS5odG1sKCcnKTtcclxuICAgIGxldCBlcXVpcG1lbnRfd3JhcHBlciA9ICQoJyNlcXVpcG1lbnRfaWQnKTtcclxuICAgIGxldCBzeXN0ZW1faHRtbCA9IHN5c3RlbV9wb3B1bGF0ZSgpO1xyXG4gICAgbGV0IGVxdWlwbWVudF9uYW1lc19odG1sID0gYGA7XHJcbiAgICBpZihwbGF0Zm9ybV9uYW1lLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiUGxlYXNlIHNlbGVjdC90eXBlIFBsYXRmb3JtIVwiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGVxdWlwbWVudF93cmFwcGVyLmFwcGVuZChzeXN0ZW1faHRtbCk7XHJcbiAgICB9XHJcbn1cclxuLy9Qb3B1bGF0ZSBNZXRyaWNzIE5hbWUuXHJcbmNvbnN0IHBvcHVsYXRlX21ldHJpY3NfbmFtZSA9IChzeXN0ZW0pID0+IHtcclxuICAgICQoJ2lucHV0W25hbWU9bWV0cmljXScpLnZhbCgnJyk7XHJcbiAgICAkKCcjbWV0cmljc19pZCcpLmh0bWwoJycpO1xyXG4gICAgbGV0IG1ldHJpY3Nfd3JhcHBlciA9ICQoJyNtZXRyaWNzX2lkJyk7XHJcbiAgICBsZXQgcGxhdGZvcm1fbmFtZSA9ICQoJ2lucHV0W25hbWU9cGxhdGZvcm1zXScpLnZhbCgpO1xyXG4gICAgIGlmKHBsYXRmb3JtX25hbWUudHJpbSgpID09PSBcIlwiKXtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJQbGVhc2Ugc2VsZWN0L3R5cGUgUGxhdGZvcm0hXCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgIGxldCBzdWJfc3lzdGVtID0gc3ViX3N5c19wb3B1bGF0ZShwbGF0Zm9ybV9uYW1lLCBzeXN0ZW0pO1xyXG4gICAgICAgICBtZXRyaWNzX3dyYXBwZXIuYXBwZW5kKHN1Yl9zeXN0ZW0pO1xyXG4gICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGNsZWFyX2Zvcm1zID0gKCkgPT4ge1xyXG4gICAgJCgnLm1vZGFsIC5tb2RhbC1ib2R5JykuZmluZCgnaW5wdXQnKS52YWwoJycpO1xyXG4gICAgJCgnI2RhdGFfcG9pbnRfdGFibGUgdGJvZHknKS5odG1sKCcnKTtcclxufVxyXG5cclxuLy9Gb3JtIDEgRmFpbHVyZSBCYXNpYyBEYXRhIFN5c3RlbSBjaGFuZ2UgYW5kIGNoYW5nZSBpdGVtcyBmb3VuZCBkZWYgYWNjb3JkaW5nbHkuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCcuZm9ybTFfc3lzdGVtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCBjaGFuZ2VkU3lzdGVtID0gdGhpcy52YWx1ZTtcclxuICAgIGlmKGNoYW5nZWRTeXN0ZW0gPT09ICdNRlNUQVInKXtcclxuICAgICAgICAkKCcuY29vbGFudFRlbXAnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAkKCcuY29vbGFudFRlbXAnKS52YWwoJzAnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5jb29sYW50VGVtcCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgJCgnLmNvb2xhbnRUZW1wJykudmFsKCcwJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgYWxsX3RycyA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgndHInKTtcclxuICAgICQuZWFjaChhbGxfdHJzLCAoaW5kZXgsIHRyKSA9PiB7XHJcbiAgICAgICAgaWYoaW5kZXggIT0gMCl7XHJcbiAgICAgICAgICAgIC8vJCh0cikuZmluZCgnLmZvcm0xX3N5c3RlbScpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCQodHIpLmZpbmQoJy5mb3JtMV9zeXN0ZW0nKVswXSkudmFsKGNoYW5nZWRTeXN0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgJCh0cikuZmluZCgnLmZvcm0xX3N1YlN5cycpLmh0bWwoJycpO1xyXG4gICAgLy9jbGVhciBzZWxlY3QgbGlzdCBhbmQgcG9wdWxhdGUgYWdhaW5cclxuICAgIGxldCBwbGF0Zm9ybSA9IHNlc3Npb25TdG9yYWdlLmFzc29jaWF0ZWRfcGxhdGZvcm07XHJcbiAgICBsZXQgIHN1YlN5c0h0bWwgPSBzdWJfc3lzX3BvcHVsYXRlKHBsYXRmb3JtLCBjaGFuZ2VkU3lzdGVtKTtcclxuICAgICQodHIpLmZpbmQoJy5mb3JtMV9zdWJTeXMnKS5hcHBlbmQoc3ViU3lzSHRtbCk7XHJcbiAgICBsZXQgc3ViX3N5c19zZWxlY3RlZCA9ICQodHIpLmZpbmQoJy5mb3JtMV9zdWJTeXMnKS52YWwoKTtcclxuICAgIGxldCByb3dfaW5kZXggPSAkKHRyKVswXS5yb3dJbmRleDtcclxuICAgIGNoYW5nZV9zeXNfc3ViX3N5c19uYW1lKGNoYW5nZWRTeXN0ZW0sIHN1Yl9zeXNfc2VsZWN0ZWQscm93X2luZGV4KTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuY29uc3QgY2hhbmdlX3N5c19zdWJfc3lzX25hbWUgPSAobmV3U3lzTmFtZSwgbmV3U3ViU3lzLCByb3dfbnVtKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxuICAgIGxldCBzZWxlY3RlZF9yb3cgPSAkKCcuZm9ybV8xX3RhYmxlX2l0ZW1zX2RlZiB0Ym9keSB0cicpW3Jvd19udW0tMV07XHJcbiAgICBsZXQgbmV3X25hbWUgPSBuZXdTeXNOYW1lICsgJyB7JyArIG5ld1N1YlN5cyArICd9JztcclxuICAgICQoc2VsZWN0ZWRfcm93KS5maW5kKCcubmV4dF9oaWdoZXJfYXNzJykudmFsKG5ld1N1YlN5cyk7XHJcbiAgICAkKHNlbGVjdGVkX3JvdykuZmluZCgnLml0ZW1fc3lzdGVtJykuaHRtbChuZXdfbmFtZSk7XHJcbiAgICAkKHNlbGVjdGVkX3JvdykuZmluZCgnLmZvcm0xX2xydScpLmh0bWwoJycpO1xyXG4gICAgbGV0IGxydV9odG1sID0gbHJ1X3BvcChuZXdTeXNOYW1lLCBuZXdTdWJTeXMpO1xyXG4gICAgJChzZWxlY3RlZF9yb3cpLmZpbmQoJy5mb3JtMV9scnUnKS5odG1sKGxydV9odG1sKTtcclxuXHJcbiAgICAvL1xyXG4gICAgbGV0IHNlbGVjdGVkX2xydSA9ICQoc2VsZWN0ZWRfcm93KS5maW5kKCcuZm9ybTFfbHJ1JykudmFsKCk7XHJcbiAgICAkKHNlbGVjdGVkX3JvdykuZmluZCgnLmZvcm0xX3BhdHRlcm4nKS5odG1sKCcnKTtcclxuICAgIGxldCBwYXR0ZXJuX2h0bWwgPSBwYXR0ZXJuX3BvcHVsYXRlKG5ld1N5c05hbWUsIG5ld1N1YlN5cywgc2VsZWN0ZWRfbHJ1KTtcclxuICAgICQoc2VsZWN0ZWRfcm93KS5maW5kKCcuZm9ybTFfcGF0dGVybicpLmh0bWwocGF0dGVybl9odG1sKTtcclxufVxyXG5cclxuXHJcbi8vTFJVIENIQU5HRSBGT1IgQ0hBTkdJTkcgSVRFTVMgRk9VTkQgREVGRUNUSVZFXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCcuZm9ybTFfbHJ1JywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN5c3RlbSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLml0ZW1fc3lzdGVtJykuaHRtbCgpLnNwbGl0KCd7JylbMF07XHJcbiAgICBsZXQgc3ViX3N5cyA9ICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5pdGVtX3N5c3RlbScpLmh0bWwoKS5zcGxpdCgneycpWzFdLnNwbGl0KCd9JylbMF07XHJcbiAgICBsZXQgbHJ1ID0gdGhpcy52YWx1ZTtcclxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmZvcm0xX3BhdHRlcm4nKS5odG1sKCcnKTtcclxuICAgIGxldCBwYXR0ZXJuX2h0bWwgPSBwYXR0ZXJuX3BvcHVsYXRlKHN5c3RlbS50cmltKCksIHN1Yl9zeXMudHJpbSgpLCBscnUudHJpbSgpKTtcclxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmZvcm0xX3BhdHRlcm4nKS5odG1sKHBhdHRlcm5faHRtbCk7XHJcbn0pO1xyXG5cclxuLy9Pbmx5IFN1Yl9TeXN0ZW1fQ2huYWdlLlxyXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywnLmZvcm0xX3N1YlN5cycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgY2hhbmdlZFN1YlN5c3RlbSA9IHRoaXMudmFsdWU7XHJcbiAgICBsZXQgc3lzdGVtID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZm9ybTFfc3lzdGVtJykudmFsKCk7XHJcbiAgICBsZXQgcm93X2luZGV4ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKVswXS5yb3dJbmRleDtcclxuICAgIGNoYW5nZV9zeXNfc3ViX3N5c19uYW1lKHN5c3RlbSwgY2hhbmdlZFN1YlN5c3RlbSxyb3dfaW5kZXgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLyBTYXZlIHRoZSBmb3Jtcy4uIC8vLy8vLy8vXHJcbi8vIFNhdmluZyBmb3JtIDEgLy8vXHJcbiQoJyNmb3JtMV9zYXZlJykuY2xpY2soKCkgPT4ge1xyXG5cclxuICAgIGxldCBoYXNfZW1wdHlfZmllbGQgPSBmYWxzZTtcclxuICAgIGxldCB3aGljaF9maWVsZHNfZW1wdHkgPSBbXTtcclxuICAgIGxldCBub3RfZW1wdHlfZmllbGRzID0gW107XHJcbiAgICBsZXQgbHJ1X21hdGNoZWQgPSB0cnVlO1xyXG4gICAgbGV0IHBsYXRmb3JtID0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybTtcclxuICAgIGxldCByZXBvcnRTeXN0ZW07XHJcbiAgICBsZXQgcGVybWlzc2lvbiA9IHNlc3Npb25TdG9yYWdlLnBlcm1pc3Npb247XHJcbiAgICBsZXQgc3lzdGVtX25fO1xyXG4gICAgLy9sZXQgZm9ybTFfdGFibGVfMSA9ICQoJy5mb3JtXzFfdGFibGVfMSB0YWJsZSB0Ym9keSB0ZCcpO1xyXG4gICAgbGV0IHJlcG9ydF9wX2J5O1xyXG4gICAgbGV0IHJlcG9ydF9hcHBfYnk7XHJcbiAgICBpZiAocGVybWlzc2lvbiA9PT0gJ0wxJyl7XHJcbiAgICAgICAgcmVwb3J0X3BfYnkgPSBzZXNzaW9uU3RvcmFnZS5wbGF0Zm9ybV9yYW5rO1xyXG4gICAgICAgIHJlcG9ydF9hcHBfYnkgPSBudWxsO1xyXG4gICAgfWVsc2UgaWYocGVybWlzc2lvbiA9PT0gJ0wyJyl7XHJcbiAgICAgICAgcmVwb3J0X3BfYnkgPSBiYXNpY19kYXRhWzBdLnJlcG9ydF9ieTtcclxuICAgICAgICByZXBvcnRfYXBwX2J5ID0gc2Vzc2lvblN0b3JhZ2UucGxhdGZvcm1fcmFuaztcclxuICAgIH1cclxuICAgIGxldCBkYXRlX2lzc3VlID0gbmV3IERhdGUoKTtcclxuICAgIC8vIEdlbmVyYXRlZCBSZXBvcnQgSUQuXHJcbiAgICBsZXQgcmFuZG9tX251bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMDAwKVxyXG4gICAgbGV0IG1vbWVudF9kYXRlID0gbW9tZW50KGRhdGVfaXNzdWUsIFwiTU0vREQvWVlZWVwiKTtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUobW9tZW50X2RhdGUuX2kpO1xyXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZGF0ZV9pc3N1ZSA9IG1vbnRoICsgJy8nICsgZGF5ICsgJy8nICsgeWVhcjtcclxuICAgIC8vQ29tYmluZWQgZGF0YSBwb3B1bGF0ZS5cclxuICAgIGxldCBmaW5hbF9kYXRhX3AgPSBbXTtcclxuICAgIGxldCBzdGVwX2RhdGEgPSBbXTtcclxuICAgIGxldCBzeXN0ZW1fdHJfbGVuZ3RoID0gJCgnLmZvcm1fMV90YWJsZV8yIHRhYmxlIHRib2R5IHRyJykubGVuZ3RoO1xyXG4gICAgbGV0IHJvd18wX3RkcyAgPSAkKCQoJy5mb3JtXzFfdGFibGVfNCB0YWJsZSB0Ym9keSB0cicpWzBdKS5maW5kKCd0ZCcpO1xyXG4gICAgbGV0IHJvd18wX0xSVSA9ICQocm93XzBfdGRzWzJdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPHN5c3RlbV90cl9sZW5ndGg7aSsrKXtcclxuICAgICAgICBsZXQgYmFzaWNfZGF0YV90ZHMgPSAkKCQoJy5mb3JtXzFfdGFibGVfMiB0YWJsZSB0Ym9keSB0cicpW2ldKS5maW5kKCd0ZCcpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbV9kYXRhX3RkcyA9ICQoJCgnLmZvcm1fMV90YWJsZV80IHRhYmxlIHRib2R5IHRyJylbaV0pLmZpbmQoJ3RkJyk7XHJcbiAgICAgICAgLy9GYWlsdXJlIEJhc2ljIERhdGFcclxuICAgICAgICBsZXQgZm9ybTFfdGFibGVfMiA9IGJhc2ljX2RhdGFfdGRzO1xyXG4gICAgICAgIGxldCBzeXN0ZW0gPSAkKGZvcm0xX3RhYmxlXzJbMF0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIHN5c3RlbV9uXyA9IHN5c3RlbTtcclxuICAgICAgICByZXBvcnRTeXN0ZW0gPSBzeXN0ZW1cclxuICAgICAgICBsZXQgc3ViX3N5c3RlbSA9ICQoZm9ybTFfdGFibGVfMlsxXSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IGRhdGVfb2NjdXIgPSAkKGZvcm0xX3RhYmxlXzJbMl0pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfb2NjdXIgPSAkKGZvcm0xX3RhYmxlXzJbM10pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IGZhaWx1cmVfdGl0bGUgPSAkKGZvcm0xX3RhYmxlXzJbNF0pLmZpbmQoJ3RleHRhcmVhJykudmFsKCk7XHJcbiAgICAgICAgbGV0IG9wZXJhdGluZ19ob3VycyA9ICQoZm9ybTFfdGFibGVfMls1XSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICAvL0NoZWNraW5nIGlmIGZpZWxkcyBhcmUgZW1wdHkgb3Igbm90XHJcbiAgICAgICAgaWYoZGF0ZV9vY2N1ciA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoZm9ybTFfdGFibGVfMlsyXSkuZmluZCgnaW5wdXQnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0xX3RhYmxlXzJbMl0pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aW1lX29jY3VyID09PSBcIlwiKXtcclxuICAgICAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMV90YWJsZV8yWzNdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm90X2VtcHR5X2ZpZWxkcy5wdXNoKCQoZm9ybTFfdGFibGVfMlszXSkuZmluZCgnaW5wdXQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wZXJhdGluZ19ob3Vycy50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0xX3RhYmxlXzJbNV0pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMV90YWJsZV8yWzVdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmFpbHVyZV90aXRsZS50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0xX3RhYmxlXzJbNF0pLmZpbmQoJ3RleHRhcmVhJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMV90YWJsZV8yWzRdKS5maW5kKCd0ZXh0YXJlYScpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSXRlbXMgRGVmZWN0aXZlLlxyXG4gICAgICAgIGxldCBmb3JtMV90YWJsZV80ID0gaXRlbV9kYXRhX3RkcztcclxuICAgICAgICBsZXQgc3lzX3N1YlN5cyA9ICQoZm9ybTFfdGFibGVfNFsxXSkudmFsKCk7XHJcbiAgICAgICAgbGV0IGxydV9uYW1lID0gJChmb3JtMV90YWJsZV80WzJdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBpZihscnVfbmFtZSAhPSByb3dfMF9MUlUpe1xyXG4gICAgICAgICAgICBscnVfbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybl9udW1iZXIgPSAkKGZvcm0xX3RhYmxlXzRbM10pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCBzZXJpYWxfbnVtYmVyID0gJChmb3JtMV90YWJsZV80WzRdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCBuZXh0X2Fzc2VtYmx5ID0gJChmb3JtMV90YWJsZV80WzVdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXBsYWNlZF9zbiA9ICQoZm9ybTFfdGFibGVfNFs2XSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICBsZXQgdGFrZW5fZnJvbSA9ICQoZm9ybTFfdGFibGVfNFs3XSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IGluc3RhbGxlZF9jbG9jayA9ICQoZm9ybTFfdGFibGVfNFs4XSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICAvL0NoZWNraW5nIGlmIHRoZSBtYW5kYXRvcnkgZmllbGRzIGFyZSBlbXB0eSBvciBub3QuXHJcbiAgICBpZiAoc2VyaWFsX251bWJlci50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMV90YWJsZV80WzRdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMV90YWJsZV80WzRdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZihyZXBsYWNlZF9zbi50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMV90YWJsZV80WzZdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMV90YWJsZV80WzZdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZih0YWtlbl9mcm9tLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0xX3RhYmxlXzRbN10pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0xX3RhYmxlXzRbN10pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgICAgIH1cclxuICAgIGlmKGluc3RhbGxlZF9jbG9jay50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoZm9ybTFfdGFibGVfNFs4XSkuZmluZCgnaW5wdXQnKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm90X2VtcHR5X2ZpZWxkcy5wdXNoKCQoZm9ybTFfdGFibGVfNFs4XSkuZmluZCgnaW5wdXQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgaWYoIWhhc19lbXB0eV9maWVsZCl7XHJcbiAgICAgICAgZmluYWxfZGF0YV9wLnB1c2goe1xyXG4gICAgICAgICAgICAncmVwb3J0X2J5JzogcmVwb3J0X3BfYnksICdyZXBvcnRfYXBwX2J5JzogcmVwb3J0X2FwcF9ieSwgJ2lzc3VlX2RhdGUnOiBkYXRlX2lzc3VlLFxyXG4gICAgICAgICAgICAnc3lzdGVtJzogc3lzdGVtLCAnc3ViX3N5c3RlbSc6IHN1Yl9zeXN0ZW0sICdvY2N1cl9kYXRlJzogZGF0ZV9vY2N1ciwgJ3RpbWVfb2NjdXInOiB0aW1lX29jY3VyLFxyXG4gICAgICAgICAgICAnZmFpbHVyZV90aXRsZSc6IGZhaWx1cmVfdGl0bGUsICdvcGVyYXRpbmdfaG91cnMnOiBvcGVyYXRpbmdfaG91cnMsICdscnUnOiBscnVfbmFtZSwgJ3BhdHRlcm5fbm8nOiBwYXR0ZXJuX251bWJlcixcclxuICAgICAgICAgICAgJ3NlcmlhbF9ubyc6IHNlcmlhbF9udW1iZXIsICduZXh0X2hpZ2hlcl9hc3NlbWJseSc6IG5leHRfYXNzZW1ibHksICdyZXBsYWNlZF9zbic6IHJlcGxhY2VkX3NuLCAndGFrZW5fZnJvbSc6IHRha2VuX2Zyb20sXHJcbiAgICAgICAgICAgICdpbnN0YWxsZWRfY2xvY2snOiBpbnN0YWxsZWRfY2xvY2ssICdwbGF0Zm9ybSc6IHBsYXRmb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vU1RFUCBEQVRBXHJcbiAgICBsZXQgc2V0X2RhdGFfcm93c19sZW5ndGggPSAkKCcuZm9ybV8xX3RhYmxlXzMgdGFibGUgdGJvZHkgdHInKS5sZW5ndGg7XHJcbiAgICBmb3IobGV0IGo9MDsgajwgc2V0X2RhdGFfcm93c19sZW5ndGg7aisrKXtcclxuICAgICAgICBsZXQgc2V0X2RhdGFfdGRzID0gJCgkKCcuZm9ybV8xX3RhYmxlXzMgdGFibGUgdGJvZHkgdHInKVtqXSkuZmluZCgndGQnKTtcclxuICAgICAgICAgLy9TdGVwIEJ5IHN0ZXAgYW5hbHlzaXNcclxuICAgICAgICBsZXQgZm9ybTFfdGFibGVfMyA9IHNldF9kYXRhX3RkcztcclxuICAgICAgICBsZXQgYml0X3ZhbHVlID0gJChmb3JtMV90YWJsZV8zWzFdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCBvYnNlcnZhdGlvbiA9ICQoZm9ybTFfdGFibGVfM1syXSkuZmluZCgndGV4dGFyZWEnKS52YWwoKTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gJChmb3JtMV90YWJsZV8zWzNdKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpO1xyXG4gICAgICAgIGxldCBkb25lX2J5ID0gJChmb3JtMV90YWJsZV8zWzRdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBpZihvYnNlcnZhdGlvbi50cmltKCkgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0xX3RhYmxlXzNbMl0pLmZpbmQoJ3RleHRhcmVhJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMV90YWJsZV8zWzJdKS5maW5kKCd0ZXh0YXJlYScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoYXNfZW1wdHlfZmllbGQpe1xyXG4gICAgICAgICAgICBzdGVwX2RhdGEucHVzaCh7J2JpdF92YWx1ZSc6IGJpdF92YWx1ZSwgJ2JpdF9vYnNlcnZhdGlvbic6IG9ic2VydmF0aW9uLFxyXG4gICAgICAgICAgICAnYml0X2FjdGlvbic6IGFjdGlvbiwgJ3N0ZXBfYnknOiBkb25lX2J5LCAncGxhdGZvcm0nOiBwbGF0Zm9ybSwgJ0xSVSc6IHJvd18wX0xSVSwgJ3N5c3RlbSc6IHN5c3RlbV9uX30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8gRm9ybSAyIGRhdGEuXHJcbiAgICAvL0RhdGEuXHJcbiAgICBsZXQgZm9ybTJfdGFibGVfMSA9ICQoJy5mb3JtMl90YWJsZTEgdGFibGUgdGJvZHkgdGQnKTtcclxuICAgIGxldCBzdGF0dXMgPSAkKGZvcm0yX3RhYmxlXzFbMF0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgbGV0IGZhaWxfY2F0ZWdvcnkgPSAkKGZvcm0yX3RhYmxlXzFbMV0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgbGV0IGZhaWxfZnJlcSA9ICQoZm9ybTJfdGFibGVfMVsyXSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICBsZXQgcmVjdGlmaWNhdGlvbl9kYXRlID0gJChmb3JtMl90YWJsZV8xWzNdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgbGV0IHJlY3RpZmljYXRpb25fdGltZSA9ICQoZm9ybTJfdGFibGVfMVs0XSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgIGxldCByZW1hcmtzID0gJChmb3JtMl90YWJsZV8xWzVdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgLy9DaGVja2luZyBGYWlsdXJlIG9wZXJhdGlvbmFsIGRhdGEgbWFuZGF0b3J5IGZpZWxkcy5cclxuICAgIGlmKCtzdGF0dXMgPT09IDApe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMl90YWJsZV8xWzBdKS5maW5kKCdzZWxlY3QnKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm90X2VtcHR5X2ZpZWxkcy5wdXNoKCQoZm9ybTJfdGFibGVfMVswXSkuZmluZCgnc2VsZWN0JykpO1xyXG4gICAgICAgIH1cclxuICAgIGlmKCtmYWlsX2NhdGVnb3J5ID09PSAwKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoZm9ybTJfdGFibGVfMVsxXSkuZmluZCgnc2VsZWN0JykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0yX3RhYmxlXzFbMV0pLmZpbmQoJ3NlbGVjdCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZihyZWN0aWZpY2F0aW9uX2RhdGUgPT09IFwiXCIpe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMl90YWJsZV8xWzNdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMl90YWJsZV8xWzNdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZihyZWN0aWZpY2F0aW9uX3RpbWUgPT09IFwiXCIpe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJChmb3JtMl90YWJsZV8xWzRdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMl90YWJsZV8xWzRdKS5maW5kKCdpbnB1dCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZihyZW1hcmtzLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0yX3RhYmxlXzFbNV0pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0yX3RhYmxlXzFbNV0pLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgLy8ybmQgRm9ybVxyXG4gICAgbGV0IGZvcm0yX3RhYmxlXzIgPSAkKCcuZm9ybTJfdGFibGUyIHRhYmxlIHRib2R5IHRkJyk7XHJcbiAgICBsZXQgc2hpcEF0ID0gJChmb3JtMl90YWJsZV8yWzBdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgIGxldCB0ZW1wZXJhdHVyZXMgPSAkKGZvcm0yX3RhYmxlXzJbMV0pLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgb3V0c2lkZV90ZW1wID0gdGVtcGVyYXR1cmVzWzBdLnZhbHVlO1xyXG4gICAgb3V0c2lkZV90ZW1wID0gKG91dHNpZGVfdGVtcC50cmltKCkgPT09IFwiXCIpID8gMDpvdXRzaWRlX3RlbXA7XHJcbiAgICBsZXQgY29tcF90ZW1wID0gdGVtcGVyYXR1cmVzWzFdLnZhbHVlO1xyXG4gICAgY29tcF90ZW1wID0gKGNvbXBfdGVtcC50cmltKCkgPT09IFwiXCIpID8gMDpjb21wX3RlbXA7XHJcbiAgICBsZXQgY29vbGFudF90ZW1wID0gdGVtcGVyYXR1cmVzWzJdLnZhbHVlO1xyXG4gICAgY29vbGFudF90ZW1wID0gKGNvb2xhbnRfdGVtcC50cmltKCkgPT09IFwiXCIpID8gMDpjb29sYW50X3RlbXA7XHJcbiAgICBsZXQgc291cmNlX3N1cHBseSA9ICQoZm9ybTJfdGFibGVfMlsyXSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICBsZXQgcmVtYXJrc19mb3JtXzIgPSAkKGZvcm0yX3RhYmxlXzJbM10pLmZpbmQoJ3RleHRhcmVhJykudmFsKCk7XHJcbiAgICBsZXQgcmVsYXRpdmVfaHVtaWRpdHkgPSAkKGZvcm0yX3RhYmxlXzJbNF0pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICBsZXQgc2VhX3N0YXRlID0gJChmb3JtMl90YWJsZV8yWzVdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgIGxldCBzdXBwbHlfY2hhbmdlb3ZlciA9ICQoZm9ybTJfdGFibGVfMls3XSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICBsZXQgcmFpbl9zcGxhc2ggPSAkKGZvcm0yX3RhYmxlXzJbOF0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgbGV0IGlycl9waGVubyA9ICQoZm9ybTJfdGFibGVfMls2XSkuZmluZCgndGV4dGFyZWEnKS52YWwoKTtcclxuICAgIC8vIGxldCByZXBvcnRJZCA9ICQoJy5yZXBvcnRJZHMnKS52YWwoKTtcclxuICAgIC8vQ2hlY2tpbmcgRmFpbHVyZSBvcGVyYXRpb25hbCBkYXRhIG1hbmRhdG9yeSBmaWVsZHMuXHJcbiAgICBpZigrc2hpcEF0ID09PSAwKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoZm9ybTJfdGFibGVfMlswXSkuZmluZCgnc2VsZWN0JykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0yX3RhYmxlXzJbMF0pLmZpbmQoJ3NlbGVjdCcpKTtcclxuICAgICAgICB9XHJcbiAgICBpZigrc291cmNlX3N1cHBseSA9PT0gMCl7XHJcbiAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKGZvcm0yX3RhYmxlXzJbMl0pLmZpbmQoJ3NlbGVjdCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJChmb3JtMl90YWJsZV8yWzJdKS5maW5kKCdzZWxlY3QnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgaWYoK3N1cHBseV9jaGFuZ2VvdmVyID09PSAwKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoZm9ybTJfdGFibGVfMls3XSkuZmluZCgnc2VsZWN0JykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKGZvcm0yX3RhYmxlXzJbN10pLmZpbmQoJ3NlbGVjdCcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy9Gb3JtIDNcclxuICAgIGxldCBmb3JtMl90YWJsZV8zX3Ryc18gPSAkKCcuZm9ybTJfdGFibGUzIHRhYmxlIHRib2R5IHRyJyk7XHJcbiAgICBsZXQgZm9ybTJfZGF0YSA9IFtdO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8Zm9ybTJfdGFibGVfM190cnNfLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgdHJfdGRzID0gJChmb3JtMl90YWJsZV8zX3Ryc19baV0pLmZpbmQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHNob3J0ZmFsbF90eXBlID0gJCh0cl90ZHNbMF0pLmh0bWwoKTtcclxuICAgICAgICBsZXQgc2hvdGZhbGxfZGVzYyA9ICQodHJfdGRzWzFdKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpO1xyXG4gICAgICAgIGZvcm0yX2RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICdzdGF0dXMnOiBzdGF0dXMsICdmYWlsdXJlX2NhdGVnb3J5JzogZmFpbF9jYXRlZ29yeSwgJ2ZhaWxfZnJlcSc6IGZhaWxfZnJlcSwgJ3JlY3RfZGF0ZSc6IHJlY3RpZmljYXRpb25fZGF0ZSxcclxuICAgICAgICAgICAgJ2Zvcm0xX3JlbWFyayc6IHJlbWFya3MsXHJcbiAgICAgICAgICAgICdyZWN0X3RpbWUnOiByZWN0aWZpY2F0aW9uX3RpbWUsICdzaGlwX2F0Jzogc2hpcEF0LCAnb3V0c2lkZV90ZW1wJzogb3V0c2lkZV90ZW1wLCAnY29tcGFydG1lbnRfdGVtcCc6Y29tcF90ZW1wLFxyXG4gICAgICAgICAgICAnY29vbGFudF90ZW1wJzogY29vbGFudF90ZW1wLCAnc3lzdGVtX3N1cHB5Jzogc291cmNlX3N1cHBseSwgJ2Vudl9yZW1hcmtzJzogcmVtYXJrc19mb3JtXzIsICdyZWxhdGl2ZV9odW1pZGl0eSc6IHJlbGF0aXZlX2h1bWlkaXR5LFxyXG4gICAgICAgICAgICAnc2VhX3N0YXRlJzogc2VhX3N0YXRlLCAnc3VwcGx5X2NoYW5nZW92ZXInOiBzdXBwbHlfY2hhbmdlb3ZlciwgJ3JhaW5fc3BsYXNoJzogcmFpbl9zcGxhc2gsXHJcbiAgICAgICAgICAgICdvdGhlcl9pcnJlZ3VsYXInOiBpcnJfcGhlbm8sICdzaG9ydGZhbGxfdHlwZSc6IHNob3J0ZmFsbF90eXBlLCAnc2hvcnRmYWxsX2Rlc2MnOiBzaG90ZmFsbF9kZXNjXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCByZXBvcnRJZCA9ICcnO1xyXG4gICAgaWYocGVybWlzc2lvbiA9PT0gJ0wxJyl7XHJcbiAgICAgICAgcmVwb3J0SWQgPSBwbGF0Zm9ybSArICctJyArICBzeXN0ZW1fbl8gKyAnLScgKyByYW5kb21fbnVtO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmVwb3J0SWQgPSAkKCcucmVwb3J0SWRzJykudmFsKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZV9pc3N1ZV8gPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZV9pc3N1ZV8gPSBkYXRlX2lzc3VlLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoJywnKVswXTtcclxuICAgIGxldCBmaW5hbF9kYXRhID0geydzdGVwX2RhdGEnOiBzdGVwX2RhdGEsICdmb3JtMV9kYXRhJzogZmluYWxfZGF0YV9wLCAnZm9ybTInOiBmb3JtMl9kYXRhLFxyXG4gICAgICAgICdyZXBvcnRJZCc6IHJlcG9ydElkLCAncGxhdGZvcm0nOiBwbGF0Zm9ybSwgJ2lzc3VlX2RhdGUnOiBkYXRlX2lzc3VlXywgJ3JlcG9ydFN5cyc6IHJlcG9ydFN5c3RlbX07XHJcblxyXG5cclxuICAgIGlmIChoYXNfZW1wdHlfZmllbGQgJiYgaXNNYW5kID09PSAnWWVzJyl7XHJcbiAgICAgICAgbDFfbDJfbWFuZGF0b3J5X2ZpbGVkc19jc3NfZWZmZWN0KHdoaWNoX2ZpZWxkc19lbXB0eSwgbm90X2VtcHR5X2ZpZWxkcyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZihscnVfbWF0Y2hlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgYWpheFBvc3QoJy9zYXZlX2xldmVsMScsIGZpbmFsX2RhdGEsIGxldmVsMV9jYWxsYmFjayk7XHJcbiAgICAgICAgLy9hbGVydCgnTWF0Y2hlZCEhJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAvLyBhbGVydChcIkxSVSdzIGFyZSBub3QgbWF0Y2hpbmchIVwiKVxyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIlBsZWFzZSBGaWxlIFNlcGFyYXRlIEZhaWx1cmUgUmVwb3J0IEZvciBEaWZmZXJlbnQgTFJVJ3MgISFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcblxyXG4vLy8vIFNhdmluZyBmb3JtIDIgLy8vL1xyXG4vLyAkKCcjZm9ybTJfc2F2ZScpLmNsaWNrKCgpID0+IHtcclxuLy8gICAgIGxldCBmb3JtMl90YWJsZV8xID0gJCgnLmZvcm0yX3RhYmxlMSB0YWJsZSB0Ym9keSB0ZCcpO1xyXG4vLyAgICAgbGV0IHN0YXR1cyA9ICQoZm9ybTJfdGFibGVfMVswXSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbi8vICAgICBsZXQgZmFpbF9jYXRlZ29yeSA9ICQoZm9ybTJfdGFibGVfMVsxXSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbi8vICAgICBsZXQgZmFpbF9mcmVxID0gJChmb3JtMl90YWJsZV8xWzJdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuLy8gICAgIGxldCByZWN0aWZpY2F0aW9uX2RhdGUgPSAkKGZvcm0yX3RhYmxlXzFbM10pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbi8vICAgICBsZXQgcmVjdGlmaWNhdGlvbl90aW1lID0gJChmb3JtMl90YWJsZV8xWzRdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4vLyAgICAgbGV0IHJlbWFya3MgPSAkKGZvcm0yX3RhYmxlXzFbNV0pLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbi8vXHJcbi8vICAgICAvLzJuZCBGb3JtXHJcbi8vICAgICBsZXQgZm9ybTJfdGFibGVfMiA9ICQoJy5mb3JtMl90YWJsZTIgdGFibGUgdGJvZHkgdGQnKTtcclxuLy8gICAgIGxldCBzaGlwQXQgPSAkKGZvcm0yX3RhYmxlXzJbMF0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4vLyAgICAgbGV0IHRlbXBlcmF0dXJlcyA9ICQoZm9ybTJfdGFibGVfMlsxXSkuZmluZCgnaW5wdXQnKTtcclxuLy8gICAgIGxldCBvdXRzaWRlX3RlbXAgPSB0ZW1wZXJhdHVyZXNbMF0udmFsdWU7XHJcbi8vICAgICBsZXQgY29tcF90ZW1wID0gdGVtcGVyYXR1cmVzWzFdLnZhbHVlO1xyXG4vLyAgICAgbGV0IGNvb2xhbnRfdGVtcCA9IHRlbXBlcmF0dXJlc1syXS52YWx1ZTtcclxuLy8gICAgIGxldCBzb3VyY2Vfc3VwcGx5ID0gJChmb3JtMl90YWJsZV8yWzJdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuLy8gICAgIGxldCByZW1hcmtzX2Zvcm1fMiA9ICQoZm9ybTJfdGFibGVfMlszXSkuZmluZCgndGV4dGFyZWEnKS52YWwoKTtcclxuLy8gICAgIGxldCByZWxhdGl2ZV9odW1pZGl0eSA9ICQoZm9ybTJfdGFibGVfMls0XSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuLy8gICAgIGxldCBzZWFfc3RhdGUgPSAkKGZvcm0yX3RhYmxlXzJbNV0pLmZpbmQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4vLyAgICAgbGV0IHN1cHBseV9jaGFuZ2VvdmVyID0gJChmb3JtMl90YWJsZV8yWzZdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuLy8gICAgIGxldCByYWluX3NwbGFzaCA9ICQoZm9ybTJfdGFibGVfMls3XSkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbi8vICAgICBsZXQgaXJyX3BoZW5vID0gJChmb3JtMl90YWJsZV8yWzhdKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpO1xyXG4vLyAgICAgbGV0IHJlcG9ydElkID0gJCgnLnJlcG9ydElkcycpLnZhbCgpO1xyXG4vLyAgICAgLy9Gb3JtIDNcclxuLy8gICAgIGxldCBmb3JtMl90YWJsZV8zX3Ryc18gPSAkKCcuZm9ybTJfdGFibGUzIHRhYmxlIHRib2R5IHRyJyk7XHJcbi8vICAgICBsZXQgZm9ybTJfZGF0YSA9IFtdO1xyXG4vLyAgICAgZm9yKGxldCBpPTA7IGk8Zm9ybTJfdGFibGVfM190cnNfLmxlbmd0aDsgaSsrKXtcclxuLy8gICAgICAgICBsZXQgdHJfdGRzID0gJChmb3JtMl90YWJsZV8zX3Ryc19baV0pLmZpbmQoJ3RkJyk7XHJcbi8vICAgICAgICAgbGV0IHNob3J0ZmFsbF90eXBlID0gJCh0cl90ZHNbMF0pLmh0bWwoKTtcclxuLy8gICAgICAgICBsZXQgc2hvdGZhbGxfZGVzYyA9ICQodHJfdGRzWzFdKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpO1xyXG4vLyAgICAgICAgIGZvcm0yX2RhdGEucHVzaCh7XHJcbi8vICAgICAgICAgICAgICdzdGF0dXMnOiBzdGF0dXMsICdmYWlsdXJlX2NhdGVnb3J5JzogZmFpbF9jYXRlZ29yeSwgJ2ZhaWxfZnJlcSc6IGZhaWxfZnJlcSwgJ3JlY3RfZGF0ZSc6IHJlY3RpZmljYXRpb25fZGF0ZSxcclxuLy8gICAgICAgICAgICAgJ2Zvcm0xX3JlbWFyayc6IHJlbWFya3MsXHJcbi8vICAgICAgICAgICAgICdyZWN0X3RpbWUnOiByZWN0aWZpY2F0aW9uX3RpbWUsICdzaGlwX2F0Jzogc2hpcEF0LCAnb3V0c2lkZV90ZW1wJzogb3V0c2lkZV90ZW1wLCAnY29tcGFydG1lbnRfdGVtcCc6Y29tcF90ZW1wLFxyXG4vLyAgICAgICAgICAgICAnY29vbGFudF90ZW1wJzogY29vbGFudF90ZW1wLCAnc3lzdGVtX3N1cHB5Jzogc291cmNlX3N1cHBseSwgJ2Vudl9yZW1hcmtzJzogcmVtYXJrc19mb3JtXzIsICdyZWxhdGl2ZV9odW1pZGl0eSc6IHJlbGF0aXZlX2h1bWlkaXR5LFxyXG4vLyAgICAgICAgICAgICAnc2VhX3N0YXRlJzogc2VhX3N0YXRlLCAnc3VwcGx5X2NoYW5nZW92ZXInOiBzdXBwbHlfY2hhbmdlb3ZlciwgJ3JhaW5fc3BsYXNoJzogcmFpbl9zcGxhc2gsXHJcbi8vICAgICAgICAgICAgICdvdGhlcl9pcnJlZ3VsYXInOiBpcnJfcGhlbm8sICdzaG9ydGZhbGxfdHlwZSc6IHNob3J0ZmFsbF90eXBlLCAnc2hvcnRmYWxsX2Rlc2MnOiBzaG90ZmFsbF9kZXNjXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGxldCBmaW5hbF9mb3JtX2RhdGEgPSB7J2lkJzogcmVwb3J0SWQsICdkYXRhJzogZm9ybTJfZGF0YX07XHJcbi8vICAgICBhamF4UG9zdCgnL3NhdmVfbGV2ZWwyJywgZmluYWxfZm9ybV9kYXRhLCBsZXZlbDJfY2FsbGJhY2spO1xyXG4vLyB9KTtcclxuXHJcbi8vLy8vIFNhdmluZyBGb3JtIDNcclxuJCgnI2Zvcm0zX3NhdmUnKS5jbGljaygoKSA9PiB7XHJcbiAgICBsZXQgaGFzX2VtcHR5X2ZpZWxkID0gZmFsc2U7XHJcbiAgICBsZXQgd2hpY2hfZmllbGRzX2VtcHR5ID0gW107XHJcbiAgICBsZXQgbm90X2VtcHR5X2ZpZWxkcyA9IFtdO1xyXG4gICAgbGV0IHNldmVyaXR5ID0gJCgnLnNldmVyaXR5JylbMF0uc2VsZWN0ZWRPcHRpb25zWzBdLmlubmVySFRNTDtcclxuICAgIGxldCByZXBvcnRTdGF0dXMgPSAkKCcucmVwb3J0U3RhdHVzJykudmFsKCk7XHJcbiAgICBsZXQgaGFyZHdhcmVEZWZlY3RpdmUgPSAkKCcuaGFyZHdhcmVEZWZlY3RpdmUnKS52YWwoKTtcclxuICAgIGxldCBtdGJmID0gJCgnLm10YmYnKS52YWwoKTtcclxuICAgIGxldCBjcml0aWNhbCA9ICQoJy5jcml0aWNhbCcpLnZhbCgpO1xyXG4gICAgaWYoc2V2ZXJpdHkgPT09IFwiQ2xpY2sgdG8gc2VsZWN0IG9wdGlvblwiKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoJy5zZXZlcml0eScpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJCgnLnNldmVyaXR5JykpO1xyXG4gICAgfVxyXG4gICAgaWYoK3JlcG9ydFN0YXR1cyA9PT0gMCl7XHJcbiAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICB3aGljaF9maWVsZHNfZW1wdHkucHVzaCgkKCcucmVwb3J0U3RhdHVzJykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vdF9lbXB0eV9maWVsZHMucHVzaCgkKCcucmVwb3J0U3RhdHVzJykpO1xyXG4gICAgfVxyXG4gICAgaWYoK2hhcmR3YXJlRGVmZWN0aXZlID09PSAwKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoJy5oYXJkd2FyZURlZmVjdGl2ZScpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJCgnLmhhcmR3YXJlRGVmZWN0aXZlJykpO1xyXG4gICAgfVxyXG4gICAgaWYoK210YmYgPT09IDApe1xyXG4gICAgICAgIGhhc19lbXB0eV9maWVsZCA9IHRydWU7XHJcbiAgICAgICAgd2hpY2hfZmllbGRzX2VtcHR5LnB1c2goJCgnLm10YmYnKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm90X2VtcHR5X2ZpZWxkcy5wdXNoKCQoJy5tdGJmJykpO1xyXG4gICAgfVxyXG4gICAgaWYoK2NyaXRpY2FsID09PSAwKXtcclxuICAgICAgICBoYXNfZW1wdHlfZmllbGQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWNoX2ZpZWxkc19lbXB0eS5wdXNoKCQoJy5jcml0aWNhbCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub3RfZW1wdHlfZmllbGRzLnB1c2goJCgnLmNyaXRpY2FsJykpO1xyXG4gICAgfVxyXG4gICAgLy9Gb3JtIDJcclxuICAgIGxldCB0aW1lX3JlY3RpZmljYXRpb25fZGF0YSA9IFtdO1xyXG4gICAgbGV0IGZvcm0zX3RhYmxlXzJfdHIgPSAkKCcuZm9ybTNfdGFibGUyIHRhYmxlIHRib2R5IHRyJyk7XHJcbiAgICAkLmVhY2goZm9ybTNfdGFibGVfMl90ciwgKGluZGV4LCB2YWwpID0+IHtcclxuICAgICAgICBsZXQgZm9ybTNfdGFibGVfMiA9ICQodmFsKS5maW5kKCd0aCcpO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGZvcm0zX3RhYmxlXzJbMV0uaW5uZXJUZXh0O1xyXG4gICAgICAgIGxldCBkYXlzID0gJChmb3JtM190YWJsZV8yWzJdKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCBob3VycyA9ICQoZm9ybTNfdGFibGVfMlszXSkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICBsZXQgcGVyZm9ybWVkX2J5ID0gJChmb3JtM190YWJsZV8yWzRdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBsZXQgY29tbWVudHMgPSAkKGZvcm0zX3RhYmxlXzJbNV0pLmZpbmQoJ3RleHRhcmVhJykudmFsKClcclxuICAgICAgICBsZXQgdGltZV8gPSBkYXlzICsgJy0nICsgaG91cnM7XHJcbiAgICAgICAgdGltZV9yZWN0aWZpY2F0aW9uX2RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5LCAndGltZSc6IHRpbWVfLFxyXG4gICAgICAgICAgICAncGVyZm9ybV9ieSc6IHBlcmZvcm1lZF9ieSwgJ2NvbW1lbnRzJzogY29tbWVudHNcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Gb3JtIDNcclxuICAgIGxldCBtYWludGVuYW5jZV9wZXJmX2FuYWx5c2lzID0gW107XHJcbiAgICBsZXQgZm9ybTNfdGFibGVfM190ciA9ICQoJy5mb3JtM190YWJsZTMgdGFibGUgdGJvZHkgdHInKTtcclxuICAgICQuZWFjaChmb3JtM190YWJsZV8zX3RyLCAoaW5kZXgsIHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtM190YWJsZV8zID0gJCh2YWwpLmZpbmQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlciA9IGZvcm0zX3RhYmxlXzNbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgIGxldCBtcGFfc3RhdHVzID0gJChmb3JtM190YWJsZV8zWzFdKS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgICAgICBsZXQgbXBhX2Rlc2MgPSAkKGZvcm0zX3RhYmxlXzNbMl0pLmZpbmQoJ3RleHRhcmVhJykudmFsKCk7XHJcbiAgICAgICAgaWYoK21wYV9zdGF0dXMgPT09IDEgJiYgbXBhX2Rlc2MudHJpbSgpID09PSBcIlwiKXtcclxuICAgICAgICAgICAgaGFzX2VtcHR5X2ZpZWxkID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChmb3JtM190YWJsZV8zWzJdKS5maW5kKCd0ZXh0YXJlYScpLmNzcygnYm9yZGVyJywgJ3NvbGlkIHJlZCAycHgnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJChmb3JtM190YWJsZV8zWzJdKS5maW5kKCd0ZXh0YXJlYScpLmNzcygnYm9yZGVyJywgJ25vbmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWludGVuYW5jZV9wZXJmX2FuYWx5c2lzLnB1c2goe1xyXG4gICAgICAgICAgICAncGFyYW1ldGVyJzogcGFyYW1ldGVyLCAnbXBhX3N0YXR1cyc6IG1wYV9zdGF0dXMsICdkZXNjJzogbXBhX2Rlc2NcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZvcm0gNFxyXG4gICAgbGV0IG9lbV9pc3N1ZXMgPSBbXTtcclxuICAgIGxldCBmb3JtM190YWJsZV80X3RyID0gJCgnLmZvcm0zX3RhYmxlNCB0YWJsZSB0Ym9keSB0cicpO1xyXG4gICAgJC5lYWNoKGZvcm0zX3RhYmxlXzRfdHIsIChpbmRleCwgdmFsKSA9PiB7XHJcbiAgICAgICBsZXQgb2VtX2lzc3VlID0gJCh2YWwpLmZpbmQoJy5vZW0nKS52YWwoKTtcclxuICAgICAgIGxldCBpbkFfaXNzdWUgPSAkKHZhbCkuZmluZCgnLmluQScpLnZhbCgpO1xyXG4gICAgICAgb2VtX2lzc3Vlcy5wdXNoKHtvZW06IG9lbV9pc3N1ZSwgaW5BOiBpbkFfaXNzdWV9KTtcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlcG9ydElkID0gJCgnLmxldmVsM19yZXBvcnRJZHMnKS52YWwoKTtcclxuICAgIGxldCBmYWlsdXJlU3RhdHVzID0gb3ByX2RhdGEuZmlsdGVyKHggPT4geC5yZXBvcnRJZCA9PT0gcmVwb3J0SWQpWzBdLnN0YXR1cztcclxuICAgIGxldCBmb3JtM19maW5hbF9kYXRhID0geydzZXZlcml0eSc6c2V2ZXJpdHksICdyZWN0aWZpY2F0aW9uX2RhdGEnOiB0aW1lX3JlY3RpZmljYXRpb25fZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYWludGVuYW5jZV9kYXRhJzogbWFpbnRlbmFuY2VfcGVyZl9hbmFseXNpcywgJ29lbV9kYXRhJzogb2VtX2lzc3VlcywgJ3JlcG9ydElkJzogcmVwb3J0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXRiZic6IG10YmYsICdjcml0aWNhbCc6IGNyaXRpY2FsLCAncmVwb3J0U3RhdHVzJzogcmVwb3J0U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hhcmR3YXJlRGVmZWN0aXZlJzogaGFyZHdhcmVEZWZlY3RpdmUsICdmYWlsdXJlU3RhdHVzJzogZmFpbHVyZVN0YXR1c307XHJcblxyXG4gICAgaWYoaGFzX2VtcHR5X2ZpZWxkID09PSB0cnVlICYmIGlzTWFuZCA9PT0gJ1llcycpe1xyXG4gICAgICAgIGwxX2wyX21hbmRhdG9yeV9maWxlZHNfY3NzX2VmZmVjdCh3aGljaF9maWVsZHNfZW1wdHkpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWpheFBvc3QoJy9zYXZlX2xldmVsMycsIGZvcm0zX2ZpbmFsX2RhdGEsIGxldmVsM19jYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKCdIZWxsbycpO1xyXG59KVxyXG5cclxuLy9DYWxsIGJhY2sgZnJvbSBsZXZlbCAxLlxyXG5jb25zdCBsZXZlbDFfY2FsbGJhY2sgPSAoZCkgPT4ge1xyXG4gICAgaWYoZC5pZl9lcnJvcil7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGQubWVzc2FnZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhkLm1lc3NhZ2UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxufTtcclxuLy9DYWxsIEJhY2sgZnJvbSBMZXZlbCAyLlxyXG5jb25zdCBsZXZlbDJfY2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xyXG4gICAgdG9hc3RyLnN1Y2Nlc3MoJ0RhdGEgc2VudCB0byBXUlNURyBmb3IgQXBwcm92YWwhIScpXHJcbn07XHJcbi8vQ2FsbCBCYWNrIGZyb20gTGV2ZWwgMy5cclxuY29uc3QgbGV2ZWwzX2NhbGxiYWNrID0gKGQpID0+IHtcclxuICAgIGlmKGQuaWZfZXJyb3Ipe1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihkLm1lc3NhZ2UpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZC5tZXNzYWdlKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL09uIEZvcm0gMiBsb2FkLCBjYWxsIHJlcG9ydElkcy5cclxuY29uc3QgZ2V0UmVwb3J0RGF0YSA9IChwZXJtaXNzaW9uX2xldmVsKSA9PiB7XHJcbiAgICBpZihwZXJtaXNzaW9uX2xldmVsID09PSAnTDInKXtcclxuICAgICAgICBhamF4R2V0KCcvZ2V0UmVwb3J0RGF0YScsIHt9LCByZXBvcnREYXRhKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWpheEdldCgnL2dldFJlcG9ydERhdGFfbGV2ZWwzJywge30sIHJlcG9ydERhdGFfbGV2ZWwzKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlcG9ydERhdGEgPSAocmVwb3J0RGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVwb3J0RGF0YSk7XHJcbiAgICBpc01hbmQgPSByZXBvcnREYXRhLm1hbmQ7XHJcbiAgICBsZXQgcmVwb3J0SURzID0gSlNPTi5wYXJzZShyZXBvcnREYXRhWydyZXBvcnRJZHMnXSk7XHJcbiAgICByZXBvcnRJRHMgPSByZXBvcnRJRHMuZmlsdGVyKHggPT4geC5yZXBvcnRJZC5zcGxpdCgnLScpWzBdLnRyaW0oKSA9PT0gc2Vzc2lvblN0b3JhZ2UuYXNzb2NpYXRlZF9wbGF0Zm9ybSlcclxuICAgIGwyX3JlcG9ydERhdGEgPSByZXBvcnREYXRhO1xyXG4gICAgbGV0IHJlcG9ydE9wdGlvbiA9ICcnO1xyXG4gICAgJC5lYWNoKHJlcG9ydElEcywgKGluZGV4LCB2YWwpID0+IHtcclxuICAgICAgICByZXBvcnRPcHRpb24gPSByZXBvcnRPcHRpb24gKyBgPG9wdGlvbj4ke3ZhbFsncmVwb3J0SWQnXX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucmVwb3J0SWRzJykuaHRtbChyZXBvcnRPcHRpb24pO1xyXG4gICAgcG9wdWxhdGVfcmVwb3J0X2RhdGEoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlcG9ydERhdGFfbGV2ZWwzID0gKHJlcG9ydERhdGEpID0+IHtcclxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXBvcnREYXRhWydyZXBvcnRJZHMnXSk7XHJcbiAgICByZXBvcnRJZHMgPSBkYXRhO1xyXG4gICAgaXNNYW5kID0gcmVwb3J0RGF0YS5tYW5kO1xyXG4gICAgb3ByX2RhdGEgPSBKU09OLnBhcnNlKHJlcG9ydERhdGFbJ29wcl9kYXRhJ10pO1xyXG4gICAgc3lzdGVtcyA9IEpTT04ucGFyc2UocmVwb3J0RGF0YVsnc3lzdGVtcyddKTtcclxuICAgIGxldCBzeXN0ZW1PcHRpb24gPSAnJztcclxuICAgICQuZWFjaChzeXN0ZW1zLCAoaW5kZXgsIHZhbCkgPT4ge1xyXG4gICAgICAgIHN5c3RlbU9wdGlvbj0gc3lzdGVtT3B0aW9uICsgYDxvcHRpb24+JHt2YWxbJ3N5c3RlbSddfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuICAgICQoJy5sZXZlbDNfc3lzdGVtJykuaHRtbChzeXN0ZW1PcHRpb24pO1xyXG4gICAgJCgnLmxldmVsM19zeXN0ZW1fYXBwcm92ZWQnKS5odG1sKHN5c3RlbU9wdGlvbik7XHJcbiAgICBsZXQgc2VsZWN0ZWRfb3B0aW9uID0gJCgnLmxldmVsM19zeXN0ZW0nKS52YWwoKTtcclxuICAgIGxldCByZXBvcnRIdG1sID0gcG9wdWxhdGVfbDNfcmVwb3J0SWQoc2VsZWN0ZWRfb3B0aW9uKTtcclxuICAgICQoJy5sZXZlbDNfcmVwb3J0SWRzJykuaHRtbChyZXBvcnRIdG1sKTtcclxuICAgIC8vR2V0dGluZyBkYXRhIGZvciBJQUlcclxuICAgIGFqYXhHZXQoJy9nZXRfYWxsX3JlcG9ydElkJywge30sIGxldmVsM19hcHByb3ZlZF9yZXBvcnRzKTtcclxuXHJcbn1cclxuLy9JQUkgcmVwb3J0SWQgY2FsbCBiYWNrXHJcbmNvbnN0IGxldmVsM19hcHByb3ZlZF9yZXBvcnRzID0gKGQpID0+IHtcclxuICAgIGwzX2FwcHJvdmVkX3JlcG9ydElkID0gSlNPTi5wYXJzZShkLnJlcG9ydElkcyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRfc3lzdGVtID0gJCgnLmxldmVsM19zeXN0ZW1fYXBwcm92ZWQnKS52YWwoKTtcclxuICAgIGlhaV9sM19hcHByb3ZlZF9pZHMoc2VsZWN0ZWRfc3lzdGVtKTtcclxufVxyXG4vL1BvcHVsYXRlIHJlcG9ydElkcyBmb3IgQXBwcm92ZWQgTDMvSUFJIHJlcG9ydHMuXHJcbmNvbnN0IGlhaV9sM19hcHByb3ZlZF9pZHMgPSAoc3lzdGVtKSA9PiB7XHJcbiAgICBsZXQgZmlsdGVyZWRfcmVwb3J0SWQgPSBsM19hcHByb3ZlZF9yZXBvcnRJZC5maWx0ZXIoeCA9PiB4LnN5c3RlbSA9PT0gc3lzdGVtKTtcclxuICAgIGxldCB3cmFwcGVyID0gJCgnLmFsbF9yZXBvcnRJZHMnKTtcclxuICAgICQuZWFjaChmaWx0ZXJlZF9yZXBvcnRJZCwgKGluZGV4LCB2YWwpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IGBgO1xyXG4gICAgICAgIGlmKCt2YWxbJ2lhaV9mb3J3YXJkJ10gPT09IDApe1xyXG4gICAgICAgICAgICBodG1sID0gYDxvcHRpb24+JHt2YWxbJ3JlcG9ydElkJ119PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQoaHRtbCk7XHJcbiAgICB9KTtcclxufVxyXG4vL0lBSSBzeXN0ZW0gY2hhbmdlXHJcbi8vIHN5c3RlbSBvbiBjaGFuZ2UgZnVuY3Rpb24uXHJcbiQoJy5sZXZlbDNfc3lzdGVtX2FwcHJvdmVkJykub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgICQoJy5hbGxfcmVwb3J0SWRzJykuaHRtbCgnJyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRfb3B0aW9uID0gJCgnLmxldmVsM19zeXN0ZW1fYXBwcm92ZWQnKS52YWwoKTtcclxuICAgIGlhaV9sM19hcHByb3ZlZF9pZHMoc2VsZWN0ZWRfb3B0aW9uKTtcclxufSlcclxuXHJcbi8vUG9wdWxhdGluZyBzeXN0ZW0gd2lzZSByZXBvcnRJZCBmb3IgTDMgbGV2ZWwuXHJcbmNvbnN0IHBvcHVsYXRlX2wzX3JlcG9ydElkID0gKHN5c3RlbSkgPT4ge1xyXG4gICAgbGV0IGZpbHRlcmVkX3JlcG9ydCA9IHJlcG9ydElkcy5maWx0ZXIoeCA9PiB4LnN5c3RlbSA9PT0gc3lzdGVtKTtcclxuICAgIGxldCByZXBvcnRPcHRpb24gPSAnJztcclxuICAgICQuZWFjaChmaWx0ZXJlZF9yZXBvcnQsIChpbmRleCwgdmFsKSA9PiB7XHJcbiAgICAgICAgcmVwb3J0T3B0aW9uID0gcmVwb3J0T3B0aW9uICsgYDxvcHRpb24+JHt2YWxbJ3JlcG9ydElkJ119PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcG9ydE9wdGlvbjtcclxufVxyXG4vLyBzeXN0ZW0gb24gY2hhbmdlIGZ1bmN0aW9uLlxyXG4kKCcubGV2ZWwzX3N5c3RlbScpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAkKCcubGV2ZWwzX3JlcG9ydElkcycpLmh0bWwoJycpO1xyXG4gICAgbGV0IHNlbGVjdGVkX29wdGlvbiA9ICQoJy5sZXZlbDNfc3lzdGVtJykudmFsKCk7XHJcbiAgICBsZXQgcmVwb3J0SHRtbCA9IHBvcHVsYXRlX2wzX3JlcG9ydElkKHNlbGVjdGVkX29wdGlvbik7XHJcbiAgICAkKCcubGV2ZWwzX3JlcG9ydElkcycpLmh0bWwocmVwb3J0SHRtbCk7XHJcbn0pXHJcbi8vLy9GdW5jdGlvbiBmb3IgcG9wdWxhdGluZyBzYXZlZCByZXBvcnRkIGRhdGEgYnkgcmVwb3J0SURzLlxyXG5jb25zdCBwb3B1bGF0ZV9yZXBvcnRfZGF0YSA9ICgpID0+IHtcclxuICAgIGxldCBpZCA9ICQoJy5yZXBvcnRJZHMnKS52YWwoKTtcclxuICAgIGJhc2ljX2RhdGEgPSBKU09OLnBhcnNlKGwyX3JlcG9ydERhdGFbJ2Jhc2ljX2RhdGEnXSk7XHJcbiAgICBsZXQgb3ByX2RhdGEgPSBKU09OLnBhcnNlKGwyX3JlcG9ydERhdGFbXCJvcHJfZGF0YVwiXSk7XHJcbiAgICBsZXQgc3RlcF9kYXRhID0gSlNPTi5wYXJzZShsMl9yZXBvcnREYXRhW1wic3RlcF9kYXRhXCJdKTtcclxuICAgIGJhc2ljX2RhdGEgPSBiYXNpY19kYXRhLmZpbHRlcih4ID0+IHgucmVwb3J0SWQgPT09IGlkKTtcclxuICAgIG9wcl9kYXRhID0gb3ByX2RhdGEuZmlsdGVyKHggPT4geC5yZXBvcnRJZCA9PT0gaWQpO1xyXG4gICAgc3RlcF9kYXRhID0gc3RlcF9kYXRhLmZpbHRlcih4ID0+IHgucmVwb3J0SWQgPT09IGlkKTtcclxuICAgIGxldCBiYXNpY19kYXRhX2h0bWwgPSAnJztcclxuICAgIGxldCBpdGVtc19mb3VuZF9kZWZlY3RpdmVfaHRtbCA9ICcnO1xyXG4gICAgbGV0IGJhc2ljX3dyYXBwZXIgPSAkKCcuZm9ybV8xX3RhYmxlX2ZhaWxfYmQgdGJvZHknKTtcclxuICAgIGxldCBpdGVtc193cmFwcGVyID0gJCgnLmZvcm1fMV90YWJsZV9pdGVtc19kZWYgdGJvZHknKTtcclxuICAgIGJhc2ljX3dyYXBwZXIuaHRtbCgnJyk7XHJcbiAgICBpdGVtc193cmFwcGVyLmh0bWwoJycpO1xyXG4gICAgJC5lYWNoKGJhc2ljX2RhdGEsIChpbmRleCwgdmFsKSA9PiB7XHJcbiAgICAgICAgbGV0IHRha2VuX3BvcHVsYXRlID0gdGFrZW5fZnJvbV9wb3B1bGF0ZSh2YWxbJ3Rha2VuX2Zyb20nXSwgJ0wyJyk7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgrdmFsWydvY2N1cl9kYXRlJ10pO1xyXG4gICAgICAgIGxldCBkYXkgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIGxldCBtb250aCA9IChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIGxldCB0b2RheSA9IGRhdGUuZ2V0RnVsbFllYXIoKStcIi1cIisobW9udGgpK1wiLVwiKyhkYXkpIDtcclxuICAgICAgICAvLyBkYXRlID0gZGF0ZS5nZXRNb250aCgpICsgMSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBodG1sID0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtMV9zeXN0ZW1cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiR7dmFsWydzeXN0ZW0nXX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0xX3N1YlN5c1wiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+JHt2YWxbJ3N1Yl9zeXN0ZW0nXX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiJHt0b2RheX1cIiAgZGlzYWJsZWQvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIke3ZhbFsndGltZV9vY2N1ciddfVwiIGRpc2FibGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHRleHRhcmVhIG1heGxlbmd0aD1cIjE1MFwiPiR7dmFsWydmYWlsdXJlX3RpdGxlJ119PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIke3ZhbFsnb3BlcmF0aW5nX2hvdXJzJ119XCIgZGlzYWJsZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gXHJcbiAgICAgICAgYmFzaWNfZGF0YV9odG1sID0gYmFzaWNfZGF0YV9odG1sICsgaHRtbDtcclxuXHJcbiAgICAgICAgLy9JdGVtIEZvdW5kIERlZmVjdGl2ZSBodG1sXHJcbiAgICAgICAgbGV0IHN5c19zdWJfc3lzID0gdmFsWydzeXN0ZW0nXSArICd7JyArIHZhbFsnc3ViX3N5c3RlbSddICsgJ30nO1xyXG4gICAgICAgIGxldCBpdGVtX2h0bWwgPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIml0ZW1fc3lzdGVtXCI+JHtzeXNfc3ViX3N5c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybTFfbHJ1XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiR7dmFsWydscnUnXX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtMV9wYXR0ZXJuXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+JHt2YWxbJ3BhdHRlcm5fbm8nXX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIiR7dmFsWydzZXJpYWxfbm8nXX1cIiBkaXNhYmxlZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG5leHRfaGlnaGVyX2Fzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgdmFsdWU9XCIke3ZhbFsnbmV4dF9oaWdoZXJfYXNzZW1ibHknXX1cIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIke3ZhbFsncmVwbGFjZWRfc24nXX1cIiBkaXNhYmxlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIke3ZhbFsndGFrZW5fZnJvbSddfVwiPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCB0YWtlbl9mcm9tXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGFrZW5fcG9wdWxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIke3ZhbFsnaW5zdGFsbGVkX2Nsb2NrJ119XCIgZGlzYWJsZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgIGl0ZW1zX2ZvdW5kX2RlZmVjdGl2ZV9odG1sID0gaXRlbXNfZm91bmRfZGVmZWN0aXZlX2h0bWwgKyBpdGVtX2h0bWw7XHJcbiAgICB9KTtcclxuICAgIGJhc2ljX3dyYXBwZXIuYXBwZW5kKGJhc2ljX2RhdGFfaHRtbCk7XHJcbiAgICBpdGVtc193cmFwcGVyLmFwcGVuZChpdGVtc19mb3VuZF9kZWZlY3RpdmVfaHRtbCk7XHJcblxyXG4gICAgLy9TdGVwcyBieSBzdGVwIGFuYWx5c2lzIGh0bWwuXHJcbiAgICBsZXQgc3RlcHNfaHRtbCA9ICcnO1xyXG4gICAgbGV0IHN0ZXBfd3JhcHBlciA9ICQoJy5mb3JtXzFfdGFibGVfc3RlcCB0Ym9keScpO1xyXG4gICAgc3RlcF93cmFwcGVyLmh0bWwoJycpO1xyXG4gICAgJC5lYWNoKHN0ZXBfZGF0YSwgKGluZGV4LCB2YWwgKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiJHt2YWxbJ2JpdF92YWx1ZSddfVwiID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48dGV4dGFyZWEgbWF4bGVuZ3RoPVwiNjBcIj4ke3ZhbFsnYml0X29ic2VydmF0aW9uJ119PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48dGV4dGFyZWEgbWF4bGVuZ3RoPVwiNjBcIj4ke3ZhbFsnYml0X2FjdGlvbiddfTwvdGV4dGFyZWE+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiR7dmFsWydzZXRwX2J5J119PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICBzdGVwc19odG1sID0gc3RlcHNfaHRtbCArIGh0bWw7XHJcbiAgICB9ICk7XHJcbiAgICBzdGVwX3dyYXBwZXIuYXBwZW5kKHN0ZXBzX2h0bWwpO1xyXG5cclxuICAgIC8vIE9wZXJhdGlvbmFsIGFuZCBlbnZpcm9ubWVudGFsIERhdGEgUG9wdWxhdGUuXHJcbiAgICBsZXQgb3ByX2h0bWwgPSAnJztcclxuICAgIGxldCBvcHJfd3JhcHBlciA9ICQoJy5mb3JtXzJfdGFibGVfZmFpbF9vZCB0Ym9keScpO1xyXG4gICAgbGV0IGVudl93cmFwcGVyID0gJCgnLmZvcm1fMl90YWJsZV9lbnZfYyB0Ym9keScpO1xyXG4gICAgb3ByX3dyYXBwZXIuaHRtbCgnJyk7XHJcbiAgICBlbnZfd3JhcHBlci5odG1sKCcnKTtcclxuICAgIGxldCBsb2NhbF9vcHJfZGF0YSA9IFtvcHJfZGF0YVswXV07XHJcbiAgICAkLmVhY2gobG9jYWxfb3ByX2RhdGEsIChpbmRleCwgdmFsKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgrdmFsWydyZWN0aWZpY2F0aW9uX2RhdGUnXSk7XHJcbiAgICAgICAgbGV0IGRheSA9IChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgICAgICAgbGV0IHRvZGF5ID0gZGF0ZS5nZXRGdWxsWWVhcigpK1wiLVwiKyhtb250aCkrXCItXCIrKGRheSkgO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5DbGljayBoZXJlIHRvIHNlbGVjdCBhbiBvcHRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJlY3RpZmllZFwiPlJlY3RpZmllZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3V0c3RhbmRpbmdcIj5PdXRzdGFuZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFuYWdlZFwiPk1hbmFnZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Q2xpY2sgaGVyZSB0byBzZWxlY3QgYW4gb3B0aW9uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkhhcmR3YXJlIERlZmVjdGl2ZSAtIHJlcGxhY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+SGFyZHdhcmUgRGVmZWN0aXZlIOKAkyByZXBhaXJlZCB3aXRob3V0IHJlcGxhY2VtZW50IGUuZy4gd2lyZSBkaXNjb25uZWN0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5IYXJkd2FyZSDigJMgbG9vc2UgY29ubmVjdGlvbiwgY2xlYW5lZCwgY2FyZCByZW1vdmVkIGFuZCByZWZpdHRlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPlNvZnR3YXJlIGNvcnJ1cHRlZCDigJMgcmVsb2FkZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5Tb2Z0d2FyZSBjb3JydXB0ZWQg4oCTIGNvbmZpZ3VyZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj5IYW5naW5nL2ludGVybWl0dGVudCBkZWZlY3Qg4oCTIHJlYm9vdGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+T3B0aWNhbCBGYWlsdXJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+Tm90IGlkZW50aWZpZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGRpc2FibGVkIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TW9tZW50YXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q29udGludWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGRpc2FibGVkIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIiR7dG9kYXl9XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgZGlzYWJsZWQgaWQ9XCJyZWNfdGltZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRpbWVcIiB2YWx1ZT1cIiR7dmFsWydyZWN0aWZpY2F0aW9uX3RpbWUnXX1cIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgZGlzYWJsZWQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiJHt2YWxbJ2ZhaWx1cmVfcmVtYXJrcyddfVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIG9wcl93cmFwcGVyLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdHNfID0gJCgkKCQoJy5mb3JtXzJfdGFibGVfZmFpbF9vZCB0Ym9keScpLmZpbmQoJ3RyJykpWzBdKS5maW5kKCdzZWxlY3QnKTtcclxuICAgICAgICAkKHNlbGVjdHNfWzBdKS52YWwodmFsWydzdGF0dXMnXSk7XHJcbiAgICAgICAgJChzZWxlY3RzX1sxXSkudmFsKHZhbFsnZmFpbF9jYXRlZ29yeSddKTtcclxuICAgICAgICAkKHNlbGVjdHNfWzJdKS52YWwodmFsWydmYWlsdXJlX2ZyZXEnXSk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLy8vIGVudmlyb21lbnRhbCBDb25kaXRpb25zIC8vLy8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBlbnZfaHRtbCA9IGAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaGlwIEF0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3V0c2lkZS9Db21wYXJ0bWVudC9Db29sYW50IFRlbXBlcmF0dXJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U291cmNlcyBvZiBTeXN0ZW0gU3VwcGx5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtYXJrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWxhdGl2ZSBIdW1pZGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGRpc2FibGVkIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PG9wdGlvbj5TZWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yMCBObSBmcm9tIHNob3JlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SGFyYm91cjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIm91dHNpZGUgdGVtcFwiIHZhbHVlPVwiJHt2YWxbJ291dHNpZGVfdGVtcCddfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJjb21wYXJ0bWVudCB0ZW1wXCIgdmFsdWU9XCIke3ZhbFsnY29tcGFydG1lbnRfdGVtcCddfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNvb2xhbnRUZW1wXCIgcGxhY2Vob2xkZXI9XCJDb29sYW50IHRlbXBcIiB2YWx1ZT1cIiR7dmFsWydjb29sYW50X3RlbXAnXX1cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzZWxlY3QgZGlzYWJsZWQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48b3B0aW9uPkdURzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+REE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48dGV4dGFyZWEgZGlzYWJsZWQ+JHt2YWxbJ2Vudl9yZW1hcmtzJ119PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBkaXNhYmxlZCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiJHt2YWxbJ3JlbGF0aXZlX2h1bWlkaXR5J119XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlYSBTdGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk90aGVyIGlycmVndWxhciBwaGVub21lbmluPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3VwcGx5IENoYW5nZW92ZXIgZHVyaW5nIG9wZXJhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhaW4vU3BsYXNoIG9mIHdhdGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiIHNlbGVjdGVkPkNob29zZSBzdGF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48dGV4dGFyZWEgZGlzYWJsZWQ+JHt2YWxbJ290aGVyX2lycmVndWxhcl9waGluJ119PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c2VsZWN0IGRpc2FibGVkIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PG9wdGlvbj5Obzwvb3B0aW9uPjxvcHRpb24+WWVzPC9vcHRpb24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNlbGVjdCBkaXNhYmxlZCBjbGFzcz1cImZvcm0tY29udHJvbFwiPjxvcHRpb24+Tm88L29wdGlvbj48b3B0aW9uPlllczwvb3B0aW9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgZW52X3dyYXBwZXIuYXBwZW5kKGVudl9odG1sKTtcclxuICAgICAgICBsZXQgZW52X3NlbGVjdHNfID0gJChlbnZfd3JhcHBlcikuZmluZCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgJChlbnZfc2VsZWN0c19bMF0pLnZhbCh2YWxbJ3NoaXRfYXQnXSk7XHJcbiAgICAgICAgJChlbnZfc2VsZWN0c19bMV0pLnZhbCh2YWxbJ3NvdXJzZV9zdXBwbHknXSk7XHJcbiAgICAgICAgJChlbnZfc2VsZWN0c19bMl0pLnZhbCh2YWxbJ3NlYV9zdGF0ZSddKTtcclxuICAgICAgICAkKGVudl9zZWxlY3RzX1szXSkudmFsKHZhbFsnc3VwcGx5X2NobmFnZW92ZXInXSk7XHJcbiAgICAgICAgJChlbnZfc2VsZWN0c19bNF0pLnZhbCh2YWxbJ3JhaW5fc3BsYXNoJ10pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vLy8vLyAgIFNIT1JURkFMTFMgUG9wdWxhdGUvLy8vLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGxldCBzaG9ydGZhbGxfd3JhcHBlciA9ICQoJy5mb3JtXzJfdGFibGVfc2hvcnRmYWxscyB0Ym9keScpO1xyXG4gICAgc2hvcnRmYWxsX3dyYXBwZXIuaHRtbCgnJyk7XHJcbiAgICAkLmVhY2gob3ByX2RhdGEsIChpbmRleCwgdmFsKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHt2YWxbJ3Nob3J0ZmFsbF90eXBlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjx0ZXh0YXJlYT4ke3ZhbFsnc2hvcnRmYWxsX2Rlc2MnXX08L3RleHRhcmVhPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgIHNob3J0ZmFsbF93cmFwcGVyLmFwcGVuZChodG1sKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9EaXNhYmxlIGFsbCBhZGQgYnV0dG9ucyB3aGVuIHBlcm1pc3Npb24gbGV2ZWxzIGFyZSBMMiBhbmQgZGlzYWJsZSBhbGwgZmllbGRzIGFuZCBidXR0b25zIG9uIEwzIHBlcm1pc3Npb24gbGV2ZWwuXHJcbiAgICBsZXQgcGVybWlzc2lvbiA9IHNlc3Npb25TdG9yYWdlLnBlcm1pc3Npb247XHJcbiAgICBpZihwZXJtaXNzaW9uID09PSAnTDInKXtcclxuICAgICAgICBMMl9sZXZlbF9kaXNhYmxlKCk7XHJcbiAgICB9ZWxzZSBpZihwZXJtaXNzaW9uID09PSAnTDMnKXtcclxuICAgICAgICBMM19sZXZlbF9kaXNhYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEwyX2xldmVsX2Rpc2FibGUgPSAoKSA9PiB7XHJcbiAgICAkKCcuZm9ybV9idXR0b24nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgJCgnLmRlbGV0ZV9yZXBvcnRfbDInKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxufVxyXG5jb25zdCBMM19sZXZlbF9kaXNhYmxlID0gKCkgPT4ge1xyXG4gICAgJCgnaW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgJCgnc2VsZWN0JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICQoJ3RleHRhcmVhJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICQoJy5mb3JtX2J1dHRvbicpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbn1cclxuXHJcbiQoJyNzaG93X3JlcG9ydCcpLmNsaWNrKCgpID0+IHtcclxuICAgIGxldCByZXBvcnRJZCA9ICQoJy5sZXZlbDNfcmVwb3J0SWRzJykudmFsKCk7XHJcbiAgICBpZihyZXBvcnRJZCAhPSB1bmRlZmluZWQgfHwgcmVwb3J0SWQgIT0gbnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9yZXBvcnRfY2hlY2s/cmVwb3J0SWQ9JyArIHJlcG9ydElkLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9JQUkgc2hvd19yZXBvcnRcclxuJCgnI3Nob3dfcmVwb3J0XycpLmNsaWNrKCgpID0+IHtcclxuICAgIGxldCByZXBvcnRJZCA9ICQoJy5hbGxfcmVwb3J0SWRzJykudmFsKCk7XHJcbiAgICBpZihyZXBvcnRJZCAhPSB1bmRlZmluZWQgfHwgcmVwb3J0SWQgIT0gbnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mdWxsX3JlcG9ydD9yZXBvcnRJZD0nICsgcmVwb3J0SWQsICdfYmxhbmsnKTtcclxuICAgIH1cclxufSk7XHJcbi8vbG9nb3V0LlxyXG4kKCcjbG9nb3V0JykuY2xpY2soKCkgPT4ge1xyXG5hamF4R2V0KCcvbG9nb3V0Jywge30sIGxvZ291dClcclxufSk7XHJcbmNvbnN0IGxvZ291dCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG59O1xyXG5cclxuJCgnI3NldHRpbmdzJykuY2xpY2soKCkgPT4ge1xyXG4gICAgbGV0IHBlcm1pc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5wZXJtaXNzaW9uO1xyXG4gICAgaWYocGVybWlzc2lvbiA9PT0gJ0w0Jyl7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zZXR0aW5ncycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ05vdCBBbGxvd2VkIHRvIGFjY2VzcyEhJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKCcjYWxsX3JlcG9ydCcpLmNsaWNrKCgpID0+IHtcclxuICAgIGxldCBwZXJtaXNzaW9uID0gc2Vzc2lvblN0b3JhZ2UucGVybWlzc2lvbjtcclxuICAgIGlmKHBlcm1pc3Npb24gPT09ICdMMycpe1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvcmVwb3J0Jyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBhbGVydCgnTm90IEFsbG93ZWQgdG8gYWNjZXNzISEnKTtcclxuICAgIH1cclxufSk7XHJcbiQoJyNsMV9hbGxfcmVwb3J0cycpLmNsaWNrKCgpID0+IHtcclxuICAgIGxldCBwZXJtaXNzaW9uID0gc2Vzc2lvblN0b3JhZ2UucGVybWlzc2lvbjtcclxuICAgIGlmKHBlcm1pc3Npb24gPT09ICdMMScgfHwgcGVybWlzc2lvbiA9PT0gJ0wyJyl7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sX3JlcG9ydCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ05vdCBBbGxvd2VkIHRvIGFjY2VzcyEhJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNxdWVyaWVzJykuY2xpY2soKCkgPT4ge1xyXG4gICAgbGV0IHBlcm1pc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5wZXJtaXNzaW9uO1xyXG4gICAgaWYocGVybWlzc2lvbiA9PT0gJ0wzJyB8fCBwZXJtaXNzaW9uID09PSAnTDQnKXtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL3F1ZXJpZXMnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KCdOb3QgQWxsb3dlZCB0byBhY2Nlc3MhIScpO1xyXG4gICAgfVxyXG59KTtcclxuJCgnI3J1bnRpbWUnKS5jbGljaygoKSA9PiB7XHJcbiAgICBsZXQgcGVybWlzc2lvbiA9IHNlc3Npb25TdG9yYWdlLnBlcm1pc3Npb247XHJcbiAgICBpZihwZXJtaXNzaW9uID09PSAnTDMnIHx8IHBlcm1pc3Npb24gPT09ICdMNCcpe1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvcnVudGltZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ05vdCBBbGxvd2VkIHRvIGFjY2VzcyEhJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZGVsZXRlX3N0ZXBfZGF0YScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmRlbGV0ZV9iYXNpY19kYXRhICcsIChlKT0+e1xyXG4gICAgbGV0IHJvd0luZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ3RyJylbMF0ucm93SW5kZXg7XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgICQoJy5mb3JtXzFfdGFibGVfaXRlbXNfZGVmJykuZmluZCgndGJvZHkgdHInKVtyb3dJbmRleCAtIDFdLnJlbW92ZSgpO1xyXG59KTtcclxuXHJcbiQoJy5yZXBvcnRJZHMnKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICBwb3B1bGF0ZV9yZXBvcnRfZGF0YSgpO1xyXG59KTtcclxuXHJcbi8vQ2xpY2sgUmV0dXJuIFVuLWFjdGlvbmVkLlxyXG4kKCcjcmV0dXJuX3RvX2wyJykuY2xpY2soKCkgPT4ge1xyXG4gICAgbGV0IGlkID0gJCgnLmxldmVsM19yZXBvcnRJZHMnKS52YWwoKTtcclxuICAgIGFqYXhQb3N0KCcvY2hhbmdlX3JlcG9ydF9zdGF0dXMnLCB7J3JlcG9ydElkJzppZH0sIHJlcG9ydHN0YXR1c0NoYW5nZSlcclxufSlcclxuY29uc3QgcmVwb3J0c3RhdHVzQ2hhbmdlID0gKGQpID0+IHtcclxuICAgIGlmKGQuaWZfZXJyb3Ipe1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihkLm1lc3NhZ2UpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZC5tZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBsMV9sMl9tYW5kYXRvcnlfZmlsZWRzX2Nzc19lZmZlY3QgPSAoZmllbGRzX2xpc3QsIG5vdF9jc3NfZmllbGRzKSA9PiB7XHJcbiAgICAkLmVhY2goZmllbGRzX2xpc3QsIChmX2luZGV4LCBmX3ZhbCkgPT4ge1xyXG4gICAgICAgICQoZl92YWwpLmNzcygnYm9yZGVyJywgJ3NvbGlkIHJlZCAycHgnKTtcclxuICAgIH0pO1xyXG4gICAgJC5lYWNoKG5vdF9jc3NfZmllbGRzLCAoZl9pbmRleCwgZl92YWwpID0+IHtcclxuICAgICAgICAkKGZfdmFsKS5jc3MoJ2JvcmRlcicsICdub25lJyk7XHJcbiAgICB9KTtcclxuICAgIHRvYXN0ci5lcnJvcihcIlBsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkcyEhXCIpO1xyXG59O1xyXG5cclxuXHJcbi8vRGVsZXRlIFJlcG9ydCBmcm9tIEwyIGxldmVsLlxyXG4kKCcuZGVsZXRlX3JlcG9ydF9sMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgbGV0IHNlbGVjdGVkX3JlcG9ydElkID0gJCgnLnJlcG9ydElkcycpLnZhbCgpO1xyXG4gICBsZXQgZGF0ZV9pc3N1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgIGxldCBtb21lbnRfZGF0ZSA9IG1vbWVudChkYXRlX2lzc3VlLCBcIk1NL0REL1lZWVlcIik7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG1vbWVudF9kYXRlLl9pKTtcclxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBkYXRlX2RlbGV0aW9uID0gbW9udGggKyAnLycgKyBkYXkgKyAnLycgKyB5ZWFyO1xyXG4gICBhamF4UG9zdCgnL2RlbGV0ZV9sMicsIHtyZXBvcnRJZDogc2VsZWN0ZWRfcmVwb3J0SWQsIGRlbGV0aW9uX2RhdGU6IGRhdGVfZGVsZXRpb259LCBkZWxldGVfbDJfY2FsbEJhY2spO1xyXG59KTtcclxuY29uc3QgZGVsZXRlX2wyX2NhbGxCYWNrID0gKGQpID0+IHtcclxuICAgIGlmKGQuaWZfZXJyb3Ipe1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihkLm1lc3NhZ2UpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZC5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRm9yd2FyZCB0byBJQUlcclxuJCgnI2ZvcndhcmRfaWFpJykuY2xpY2soKCkgPT4ge1xyXG4gICAgbGV0IHJlcG9ydElkID0gJCgnLmFsbF9yZXBvcnRJZHMnKS52YWwoKTtcclxuICAgIGFqYXhQb3N0KCcvdXBkYXRlX2lhaScsIHtyZXBvcnRJZDogcmVwb3J0SWR9LCB1cGRhdGVfaWFpKTtcclxufSk7XHJcbmNvbnN0IHVwZGF0ZV9pYWkgPSAoZCkgPT4ge1xyXG4gICAgaWYoZC5pZl9lcnJvcil7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGQubWVzc2FnZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhkLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=