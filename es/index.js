import React from "react";
import "prop-types";
import classnames from "classnames";
import isDate from "date-fns/isDate";
import isValidDate from "date-fns/isValid";
import format from "date-fns/format";
import addMinutes from "date-fns/addMinutes";
import addHours from "date-fns/addHours";
import utils$1 from "date-fns/addDays";
import utils$2 from "date-fns/addWeeks";
import addMonths from "date-fns/addMonths";
import addYears from "date-fns/addYears";
import "date-fns/subMinutes";
import "date-fns/subHours";
import subDays from "date-fns/subDays";
import subWeeks from "date-fns/subWeeks";
import subMonths from "date-fns/subMonths";
import subYears from "date-fns/subYears";
import getSeconds from "date-fns/getSeconds";
import getMinutes from "date-fns/getMinutes";
import getHours from "date-fns/getHours";
import getDay from "date-fns/getDay";
import getDate from "date-fns/getDate";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import getTime from "date-fns/getTime";
import setSeconds from "date-fns/setSeconds";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import utils from "date-fns/setMonth";
import setYear from "date-fns/setYear";
import min from "date-fns/min";
import max from "date-fns/max";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import differenceInCalendarMonths from "date-fns/differenceInCalendarMonths";
import differenceInCalendarWeeks from "date-fns/differenceInCalendarWeeks";
import startOfDay from "date-fns/startOfDay";
import startOfWeek from "date-fns/startOfWeek";
import startOfMonth from "date-fns/startOfMonth";
import startOfYear from "date-fns/startOfYear";
import endOfDay from "date-fns/endOfDay";
import endOfWeek from "date-fns/endOfWeek";
import "date-fns/endOfMonth";
import dfIsEqual from "date-fns/isEqual";
import dfIsSameDay from "date-fns/isSameDay";
import dfIsSameMonth from "date-fns/isSameMonth";
import dfIsSameYear from "date-fns/isSameYear";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isWithinInterval from "date-fns/isWithinInterval";
import toDate from "date-fns/toDate";
import parse from "date-fns/parse";
import parseISO from "date-fns/parseISO";
import onClickOutside from "react-onclickoutside";
import "date-fns/esm";
import { Popper, Manager, Reference } from "react-popper";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var longFormatters_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case "P":
        return formatLong.date({
          width: "short"
        });

      case "PP":
        return formatLong.date({
          width: "medium"
        });

      case "PPP":
        return formatLong.date({
          width: "long"
        });

      case "PPPP":
      default:
        return formatLong.date({
          width: "full"
        });
    }
  }

  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case "p":
        return formatLong.time({
          width: "short"
        });

      case "pp":
        return formatLong.time({
          width: "medium"
        });

      case "ppp":
        return formatLong.time({
          width: "long"
        });

      case "pppp":
      default:
        return formatLong.time({
          width: "full"
        });
    }
  }

  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];

    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }

    var dateTimeFormat;

    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong.dateTime({
          width: "short"
        });
        break;

      case "PP":
        dateTimeFormat = formatLong.dateTime({
          width: "medium"
        });
        break;

      case "PPP":
        dateTimeFormat = formatLong.dateTime({
          width: "long"
        });
        break;

      case "PPPP":
      default:
        dateTimeFormat = formatLong.dateTime({
          width: "full"
        });
        break;
    }

    return dateTimeFormat
      .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
      .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
  }

  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  var _default = longFormatters;
  exports.default = _default;
  module.exports = exports.default;
});

var longFormatters = unwrapExports(longFormatters_1);

// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var DAY_ARIA_LABEL = "EEEE LLLL do yyyy"; // Wednesday January 1st, 2020
// ** Date Constructors **

function newDate(value) {
  var d = value
    ? typeof value === "string" || value instanceof String
      ? parseISO(value)
      : toDate(value)
    : new Date();
  return isValid(d) ? d : null;
}
function parseDate(value, dateFormat, locale, strictParsing) {
  var parsedDate = null;
  var localeObject = getLocaleObject(locale) || getDefaultLocale();
  var strictParsingValueMatch = true;

  if (Array.isArray(dateFormat)) {
    dateFormat.forEach(function(df) {
      var tryParseDate = parse(value, df, new Date(), {
        locale: localeObject
      });

      if (strictParsing) {
        strictParsingValueMatch =
          isValid(tryParseDate) &&
          value ===
            format(tryParseDate, df, {
              awareOfUnicodeTokens: true
            });
      }

      if (isValid(tryParseDate) && strictParsingValueMatch) {
        parsedDate = tryParseDate;
      }
    });
    return parsedDate;
  }

  parsedDate = parse(value, dateFormat, new Date(), {
    locale: localeObject
  });

  if (strictParsing) {
    strictParsingValueMatch =
      isValid(parsedDate) &&
      value ===
        format(parsedDate, dateFormat, {
          awareOfUnicodeTokens: true
        });
  } else if (!isValid(parsedDate)) {
    dateFormat = dateFormat
      .match(longFormattingTokensRegExp)
      .map(function(substring) {
        var firstCharacter = substring[0];

        if (firstCharacter === "p" || firstCharacter === "P") {
          var longFormatter = longFormatters[firstCharacter];
          return localeObject
            ? longFormatter(substring, localeObject.formatLong)
            : firstCharacter;
        }

        return substring;
      })
      .join("");

    if (value.length > 0) {
      parsedDate = parse(value, dateFormat.slice(0, value.length), new Date());
    }

    if (!isValid(parsedDate)) {
      parsedDate = new Date(value);
    }
  }

  return isValid(parsedDate) && strictParsingValueMatch ? parsedDate : null;
} // ** Date "Reflection" **
function isValid(date) {
  return isValidDate(date) && isAfter(date, new Date("1/1/1000"));
} // ** Date Formatting **

function formatDate(date, formatStr, locale) {
  if (locale === "en") {
    return format(date, formatStr, {
      awareOfUnicodeTokens: true
    });
  }

  var localeObj = getLocaleObject(locale);

  if (locale && !localeObj) {
    console.warn(
      'A locale object was not found for the provided string ["'.concat(
        locale,
        '"].'
      )
    );
  }

  if (
    !localeObj &&
    !!getDefaultLocale() &&
    !!getLocaleObject(getDefaultLocale())
  ) {
    localeObj = getLocaleObject(getDefaultLocale());
  }

  return format(date, formatStr, {
    locale: localeObj ? localeObj : null,
    awareOfUnicodeTokens: true
  });
}
function safeDateFormat(date, _ref) {
  var dateFormat = _ref.dateFormat,
    locale = _ref.locale;
  return (
    (date &&
      formatDate(
        date,
        Array.isArray(dateFormat) ? dateFormat[0] : dateFormat,
        locale
      )) ||
    ""
  );
} // ** Date Setters **

function setTime(date, _ref2) {
  var _ref2$hour = _ref2.hour,
    hour = _ref2$hour === void 0 ? 0 : _ref2$hour,
    _ref2$minute = _ref2.minute,
    minute = _ref2$minute === void 0 ? 0 : _ref2$minute,
    _ref2$second = _ref2.second,
    second = _ref2$second === void 0 ? 0 : _ref2$second;
  return setHours(setMinutes(setSeconds(date, second), minute), hour);
}
function getWeek(date) {
  if (!isSameYear(endOfWeek(date), date)) {
    return 1;
  }

  return differenceInCalendarWeeks(date, startOfYear(date)) + 1;
}
function getDayOfWeekCode(day, locale) {
  return formatDate(day, "ddd", locale);
} // *** Start of ***

function getStartOfDay(date) {
  return startOfDay(date);
}
function getStartOfWeek(date, locale) {
  var localeObj = locale
    ? getLocaleObject(locale)
    : getLocaleObject(getDefaultLocale());
  return startOfWeek(date, {
    locale: localeObj
  });
}
function getStartOfMonth(date) {
  return startOfMonth(date);
}
function getStartOfToday() {
  return startOfDay(newDate());
} // *** End of ***
function isSameYear(date1, date2) {
  if (date1 && date2) {
    return dfIsSameYear(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isSameMonth(date1, date2) {
  if (date1 && date2) {
    return dfIsSameMonth(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isSameDay(date1, date2) {
  if (date1 && date2) {
    return dfIsSameDay(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isEqual(date1, date2) {
  if (date1 && date2) {
    return dfIsEqual(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isDayInRange(day, startDate, endDate) {
  var valid;
  var start = startOfDay(startDate);
  var end = endOfDay(endDate);

  try {
    valid = isWithinInterval(day, {
      start: start,
      end: end
    });
  } catch (err) {
    valid = false;
  }

  return valid;
} // *** Diffing ***

function registerLocale(localeName, localeData) {
  var scope = typeof window !== "undefined" ? window : global;

  if (!scope.__localeData__) {
    scope.__localeData__ = {};
  }

  scope.__localeData__[localeName] = localeData;
}
function setDefaultLocale(localeName) {
  var scope = typeof window !== "undefined" ? window : global;
  scope.__localeId__ = localeName;
}
function getDefaultLocale() {
  var scope = typeof window !== "undefined" ? window : global;
  return scope.__localeId__;
}
function getLocaleObject(localeSpec) {
  if (typeof localeSpec === "string") {
    // Treat it as a locale name registered by registerLocale
    var scope = typeof window !== "undefined" ? window : global;
    return scope.__localeData__ ? scope.__localeData__[localeSpec] : null;
  } else {
    // Treat it as a raw date-fns locale object
    return localeSpec;
  }
}
function getFormattedWeekdayInLocale(date, formatFunc, locale) {
  return formatFunc(formatDate(date, "EEEE", locale));
}
function getWeekdayMinInLocale(date, locale) {
  return formatDate(date, "EEEEEE", locale);
}
function getWeekdayShortInLocale(date, locale) {
  return formatDate(date, "EEE", locale);
}
function getMonthInLocale(month, locale) {
  return formatDate(utils(newDate(), month), "LLLL", locale);
}
function getMonthShortInLocale(month, locale) {
  return formatDate(utils(newDate(), month), "LLL", locale);
} // ** Utils for some components **

function isDayDisabled(day) {
  var _ref3 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minDate = _ref3.minDate,
    maxDate = _ref3.maxDate,
    excludeDates = _ref3.excludeDates,
    includeDates = _ref3.includeDates,
    filterDate = _ref3.filterDate;

  return (
    isOutOfBounds(day, {
      minDate: minDate,
      maxDate: maxDate
    }) ||
    (excludeDates &&
      excludeDates.some(function(excludeDate) {
        return isSameDay(day, excludeDate);
      })) ||
    (includeDates &&
      !includeDates.some(function(includeDate) {
        return isSameDay(day, includeDate);
      })) ||
    (filterDate && !filterDate(newDate(day))) ||
    false
  );
}
function isDayExcluded(day) {
  var _ref4 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    excludeDates = _ref4.excludeDates;

  return (
    (excludeDates &&
      excludeDates.some(function(excludeDate) {
        return isSameDay(day, excludeDate);
      })) ||
    false
  );
}
function isMonthDisabled(month) {
  var _ref5 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minDate = _ref5.minDate,
    maxDate = _ref5.maxDate,
    excludeDates = _ref5.excludeDates,
    includeDates = _ref5.includeDates,
    filterDate = _ref5.filterDate;

  return (
    isOutOfBounds(month, {
      minDate: minDate,
      maxDate: maxDate
    }) ||
    (excludeDates &&
      excludeDates.some(function(excludeDate) {
        return isSameMonth(month, excludeDate);
      })) ||
    (includeDates &&
      !includeDates.some(function(includeDate) {
        return isSameMonth(month, includeDate);
      })) ||
    (filterDate && !filterDate(newDate(month))) ||
    false
  );
}
function isMonthinRange(startDate, endDate, m, day) {
  var startDateYear = getYear(startDate);
  var startDateMonth = getMonth(startDate);
  var endDateYear = getYear(endDate);
  var endDateMonth = getMonth(endDate);
  var dayYear = getYear(day);

  if (startDateYear === endDateYear && startDateYear === dayYear) {
    return startDateMonth <= m && m <= endDateMonth;
  } else if (startDateYear < endDateYear) {
    return (
      (dayYear === startDateYear && startDateMonth <= m) ||
      (dayYear === endDateYear && endDateMonth >= m) ||
      (dayYear < endDateYear && dayYear > startDateYear)
    );
  }
}
function isOutOfBounds(day) {
  var _ref6 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minDate = _ref6.minDate,
    maxDate = _ref6.maxDate;

  return (
    (minDate && differenceInCalendarDays(day, minDate) < 0) ||
    (maxDate && differenceInCalendarDays(day, maxDate) > 0)
  );
}
function isTimeDisabled(time, disabledTimes) {
  var l = disabledTimes.length;

  for (var i = 0; i < l; i++) {
    if (
      getHours(disabledTimes[i]) === getHours(time) &&
      getMinutes(disabledTimes[i]) === getMinutes(time)
    ) {
      return true;
    }
  }

  return false;
}
function isTimeInDisabledRange(time, _ref7) {
  var minTime = _ref7.minTime,
    maxTime = _ref7.maxTime;

  if (!minTime || !maxTime) {
    throw new Error("Both minTime and maxTime props required");
  }

  var base = newDate();
  var baseTime = setHours(setMinutes(base, getMinutes(time)), getHours(time));
  var min = setHours(setMinutes(base, getMinutes(minTime)), getHours(minTime));
  var max = setHours(setMinutes(base, getMinutes(maxTime)), getHours(maxTime));
  var valid;

  try {
    valid = !isWithinInterval(baseTime, {
      start: min,
      end: max
    });
  } catch (err) {
    valid = false;
  }

  return valid;
}
function monthDisabledBefore(day) {
  var _ref8 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minDate = _ref8.minDate,
    includeDates = _ref8.includeDates;

  var previousMonth = subMonths(day, 1);
  return (
    (minDate && differenceInCalendarMonths(minDate, previousMonth) > 0) ||
    (includeDates &&
      includeDates.every(function(includeDate) {
        return differenceInCalendarMonths(includeDate, previousMonth) > 0;
      })) ||
    false
  );
}
function monthDisabledAfter(day) {
  var _ref9 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    maxDate = _ref9.maxDate,
    includeDates = _ref9.includeDates;

  var nextMonth = addMonths(day, 1);
  return (
    (maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0) ||
    (includeDates &&
      includeDates.every(function(includeDate) {
        return differenceInCalendarMonths(nextMonth, includeDate) > 0;
      })) ||
    false
  );
}
function getEffectiveMinDate(_ref10) {
  var minDate = _ref10.minDate,
    includeDates = _ref10.includeDates;

  if (includeDates && minDate) {
    var minDates = includeDates.filter(function(includeDate) {
      return differenceInCalendarDays(includeDate, minDate) >= 0;
    });
    return min(minDates);
  } else if (includeDates) {
    return min(includeDates);
  } else {
    return minDate;
  }
}
function getEffectiveMaxDate(_ref11) {
  var maxDate = _ref11.maxDate,
    includeDates = _ref11.includeDates;

  if (includeDates && maxDate) {
    var maxDates = includeDates.filter(function(includeDate) {
      return differenceInCalendarDays(includeDate, maxDate) <= 0;
    });
    return max(maxDates);
  } else if (includeDates) {
    return max(includeDates);
  } else {
    return maxDate;
  }
}
function getHightLightDaysMap() {
  var highlightDates =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var defaultClassName =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "react-datepicker__day--highlighted";
  var dateClasses = new Map();

  for (var i = 0, len = highlightDates.length; i < len; i++) {
    var obj = highlightDates[i];

    if (isDate(obj)) {
      var key = formatDate(obj, "MM.dd.yyyy");
      var classNamesArr = dateClasses.get(key) || [];

      if (!classNamesArr.includes(defaultClassName)) {
        classNamesArr.push(defaultClassName);
        dateClasses.set(key, classNamesArr);
      }
    } else if (_typeof(obj) === "object") {
      var keys = Object.keys(obj);
      var className = keys[0];
      var arrOfDates = obj[keys[0]];

      if (typeof className === "string" && arrOfDates.constructor === Array) {
        for (var k = 0, _len = arrOfDates.length; k < _len; k++) {
          var _key = formatDate(arrOfDates[k], "MM.dd.yyyy");

          var _classNamesArr = dateClasses.get(_key) || [];

          if (!_classNamesArr.includes(className)) {
            _classNamesArr.push(className);

            dateClasses.set(_key, _classNamesArr);
          }
        }
      }
    }
  }

  return dateClasses;
}
function timesToInjectAfter(
  startOfDay,
  currentTime,
  currentMultiplier,
  intervals,
  injectedTimes
) {
  var l = injectedTimes.length;
  var times = [];

  for (var i = 0; i < l; i++) {
    var injectedTime = addMinutes(
      addHours(startOfDay, getHours(injectedTimes[i])),
      getMinutes(injectedTimes[i])
    );
    var nextTime = addMinutes(startOfDay, (currentMultiplier + 1) * intervals);

    if (
      isAfter(injectedTime, currentTime) &&
      isBefore(injectedTime, nextTime)
    ) {
      times.push(injectedTimes[i]);
    }
  }

  return times;
}
function addZero(i) {
  return i < 10 ? "0".concat(i) : "".concat(i);
}

function generateYears(year, noOfYear, minDate, maxDate) {
  var list = [];

  for (var i = 0; i < 2 * noOfYear + 1; i++) {
    var newYear = year + noOfYear - i;
    var isInRange = true;

    if (minDate) {
      isInRange = getYear(minDate) <= newYear;
    }

    if (maxDate && isInRange) {
      isInRange = getYear(maxDate) >= newYear;
    }

    if (isInRange) {
      list.push(newYear);
    }
  }

  return list;
}

var YearDropdownOptions =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(YearDropdownOptions, _React$Component);

    function YearDropdownOptions(props) {
      var _this;

      _classCallCheck(this, YearDropdownOptions);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(YearDropdownOptions).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderOptions",
        function() {
          var selectedYear = _this.props.year;

          var options = _this.state.yearsList.map(function(year) {
            return React.createElement(
              "div",
              {
                className:
                  selectedYear === year
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: year,
                ref: year,
                onClick: _this.onChange.bind(
                  _assertThisInitialized(_this),
                  year
                )
              },
              selectedYear === year
                ? React.createElement(
                    "span",
                    {
                      className: "react-datepicker__year-option--selected"
                    },
                    "\u2713"
                  )
                : "",
              year
            );
          });

          var minYear = _this.props.minDate
            ? getYear(_this.props.minDate)
            : null;
          var maxYear = _this.props.maxDate
            ? getYear(_this.props.maxDate)
            : null;

          if (
            !maxYear ||
            !_this.state.yearsList.find(function(year) {
              return year === maxYear;
            })
          ) {
            options.unshift(
              React.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  ref: "upcoming",
                  key: "upcoming",
                  onClick: _this.incrementYears
                },
                React.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                })
              )
            );
          }

          if (
            !minYear ||
            !_this.state.yearsList.find(function(year) {
              return year === minYear;
            })
          ) {
            options.push(
              React.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  ref: "previous",
                  key: "previous",
                  onClick: _this.decrementYears
                },
                React.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                })
              )
            );
          }

          return options;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        year
      ) {
        _this.props.onChange(year);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleClickOutside",
        function() {
          _this.props.onCancel();
        }
      );

      _defineProperty(_assertThisInitialized(_this), "shiftYears", function(
        amount
      ) {
        var years = _this.state.yearsList.map(function(year) {
          return year + amount;
        });

        _this.setState({
          yearsList: years
        });
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "incrementYears",
        function() {
          return _this.shiftYears(1);
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "decrementYears",
        function() {
          return _this.shiftYears(-1);
        }
      );

      var yearDropdownItemNumber = props.yearDropdownItemNumber,
        scrollableYearDropdown = props.scrollableYearDropdown;
      var noOfYear =
        yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
      _this.state = {
        yearsList: generateYears(
          _this.props.year,
          noOfYear,
          _this.props.minDate,
          _this.props.maxDate
        )
      };
      return _this;
    }

    _createClass(YearDropdownOptions, [
      {
        key: "render",
        value: function render() {
          var dropdownClass = classnames({
            "react-datepicker__year-dropdown": true,
            "react-datepicker__year-dropdown--scrollable": this.props
              .scrollableYearDropdown
          });
          return React.createElement(
            "div",
            {
              className: dropdownClass
            },
            this.renderOptions()
          );
        }
      }
    ]);

    return YearDropdownOptions;
  })(React.Component);

var WrappedYearDropdownOptions = onClickOutside(YearDropdownOptions);

var YearDropdown =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(YearDropdown, _React$Component);

    function YearDropdown() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, YearDropdown);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(YearDropdown)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        dropdownVisible: false
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectOptions",
        function() {
          var minYear = _this.props.minDate
            ? getYear(_this.props.minDate)
            : 1900;
          var maxYear = _this.props.maxDate
            ? getYear(_this.props.maxDate)
            : 2100;
          var options = [];

          for (var i = minYear; i <= maxYear; i++) {
            options.push(
              React.createElement(
                "option",
                {
                  key: i,
                  value: i
                },
                i
              )
            );
          }

          return options;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onSelectChange", function(
        e
      ) {
        _this.onChange(e.target.value);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectMode",
        function() {
          return React.createElement(
            "select",
            {
              value: _this.props.year,
              className: "react-datepicker__year-select",
              onChange: _this.onSelectChange
            },
            _this.renderSelectOptions()
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "renderReadView", function(
        visible
      ) {
        return React.createElement(
          "div",
          {
            key: "read",
            style: {
              visibility: visible ? "visible" : "hidden"
            },
            className: "react-datepicker__year-read-view",
            onClick: function onClick(event) {
              return _this.toggleDropdown(event);
            }
          },
          React.createElement("span", {
            className: "react-datepicker__year-read-view--down-arrow"
          }),
          React.createElement(
            "span",
            {
              className: "react-datepicker__year-read-view--selected-year"
            },
            _this.props.year
          )
        );
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderDropdown",
        function() {
          return React.createElement(WrappedYearDropdownOptions, {
            key: "dropdown",
            ref: "options",
            year: _this.props.year,
            onChange: _this.onChange,
            onCancel: _this.toggleDropdown,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            scrollableYearDropdown: _this.props.scrollableYearDropdown,
            yearDropdownItemNumber: _this.props.yearDropdownItemNumber
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderScrollMode",
        function() {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible)];

          if (dropdownVisible) {
            result.unshift(_this.renderDropdown());
          }

          return result;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        year
      ) {
        _this.toggleDropdown();

        if (year === _this.props.year) return;

        _this.props.onChange(year);
      });

      _defineProperty(_assertThisInitialized(_this), "toggleDropdown", function(
        event
      ) {
        _this.setState(
          {
            dropdownVisible: !_this.state.dropdownVisible
          },
          function() {
            if (_this.props.adjustDateOnChange) {
              _this.handleYearChange(_this.props.date, event);
            }
          }
        );
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleYearChange",
        function(date, event) {
          _this.onSelect(date, event);

          _this.setOpen();
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onSelect", function(
        date,
        event
      ) {
        if (_this.props.onSelect) {
          _this.props.onSelect(date, event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setOpen", function() {
        if (_this.props.setOpen) {
          _this.props.setOpen(true);
        }
      });

      return _this;
    }

    _createClass(YearDropdown, [
      {
        key: "render",
        value: function render() {
          var renderedDropdown;

          switch (this.props.dropdownMode) {
            case "scroll":
              renderedDropdown = this.renderScrollMode();
              break;

            case "select":
              renderedDropdown = this.renderSelectMode();
              break;
          }

          return React.createElement(
            "div",
            {
              className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                this.props.dropdownMode
              )
            },
            renderedDropdown
          );
        }
      }
    ]);

    return YearDropdown;
  })(React.Component);

var MonthDropdownOptions =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(MonthDropdownOptions, _React$Component);

    function MonthDropdownOptions() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MonthDropdownOptions);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(MonthDropdownOptions)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderOptions",
        function() {
          return _this.props.monthNames.map(function(month, i) {
            return React.createElement(
              "div",
              {
                className:
                  _this.props.month === i
                    ? "react-datepicker__month-option --selected_month"
                    : "react-datepicker__month-option",
                key: month,
                ref: month,
                onClick: _this.onChange.bind(_assertThisInitialized(_this), i)
              },
              _this.props.month === i
                ? React.createElement(
                    "span",
                    {
                      className: "react-datepicker__month-option--selected"
                    },
                    "\u2713"
                  )
                : "",
              month
            );
          });
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        month
      ) {
        return _this.props.onChange(month);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleClickOutside",
        function() {
          return _this.props.onCancel();
        }
      );

      return _this;
    }

    _createClass(MonthDropdownOptions, [
      {
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            {
              className: "react-datepicker__month-dropdown"
            },
            this.renderOptions()
          );
        }
      }
    ]);

    return MonthDropdownOptions;
  })(React.Component);

var WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions);

var MonthDropdown =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(MonthDropdown, _React$Component);

    function MonthDropdown() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MonthDropdown);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(MonthDropdown)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        dropdownVisible: false
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectOptions",
        function(monthNames) {
          return monthNames.map(function(M, i) {
            return React.createElement(
              "option",
              {
                key: i,
                value: i
              },
              M
            );
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectMode",
        function(monthNames) {
          return React.createElement(
            "select",
            {
              value: _this.props.month,
              className: "react-datepicker__month-select",
              onChange: function onChange(e) {
                return _this.onChange(e.target.value);
              }
            },
            _this.renderSelectOptions(monthNames)
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "renderReadView", function(
        visible,
        monthNames
      ) {
        return React.createElement(
          "div",
          {
            key: "read",
            style: {
              visibility: visible ? "visible" : "hidden"
            },
            className: "react-datepicker__month-read-view",
            onClick: _this.toggleDropdown
          },
          React.createElement("span", {
            className: "react-datepicker__month-read-view--down-arrow"
          }),
          React.createElement(
            "span",
            {
              className: "react-datepicker__month-read-view--selected-month"
            },
            monthNames[_this.props.month]
          )
        );
      });

      _defineProperty(_assertThisInitialized(_this), "renderDropdown", function(
        monthNames
      ) {
        return React.createElement(WrappedMonthDropdownOptions, {
          key: "dropdown",
          ref: "options",
          month: _this.props.month,
          monthNames: monthNames,
          onChange: _this.onChange,
          onCancel: _this.toggleDropdown
        });
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderScrollMode",
        function(monthNames) {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible, monthNames)];

          if (dropdownVisible) {
            result.unshift(_this.renderDropdown(monthNames));
          }

          return result;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        month
      ) {
        _this.toggleDropdown();

        if (month !== _this.props.month) {
          _this.props.onChange(month);
        }
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "toggleDropdown",
        function() {
          return _this.setState({
            dropdownVisible: !_this.state.dropdownVisible
          });
        }
      );

      return _this;
    }

    _createClass(MonthDropdown, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
            this.props.useShortMonthInDropdown
              ? function(M) {
                  return getMonthShortInLocale(M, _this2.props.locale);
                }
              : function(M) {
                  return getMonthInLocale(M, _this2.props.locale);
                }
          );
          var renderedDropdown;

          switch (this.props.dropdownMode) {
            case "scroll":
              renderedDropdown = this.renderScrollMode(monthNames);
              break;

            case "select":
              renderedDropdown = this.renderSelectMode(monthNames);
              break;
          }

          return React.createElement(
            "div",
            {
              className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                this.props.dropdownMode
              )
            },
            renderedDropdown
          );
        }
      }
    ]);

    return MonthDropdown;
  })(React.Component);

function generateMonthYears(minDate, maxDate) {
  var list = [];
  var currDate = getStartOfMonth(minDate);
  var lastDate = getStartOfMonth(maxDate);

  while (!isAfter(currDate, lastDate)) {
    list.push(newDate(currDate));
    currDate = addMonths(currDate, 1);
  }

  return list;
}

var MonthYearDropdownOptions =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(MonthYearDropdownOptions, _React$Component);

    function MonthYearDropdownOptions(props) {
      var _this;

      _classCallCheck(this, MonthYearDropdownOptions);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(MonthYearDropdownOptions).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderOptions",
        function() {
          return _this.state.monthYearsList.map(function(monthYear) {
            var monthYearPoint = getTime(monthYear);
            var isSameMonthYear =
              isSameYear(_this.props.date, monthYear) &&
              isSameMonth(_this.props.date, monthYear);
            return React.createElement(
              "div",
              {
                className: isSameMonthYear
                  ? "react-datepicker__month-year-option --selected_month-year"
                  : "react-datepicker__month-year-option",
                key: monthYearPoint,
                ref: monthYearPoint,
                onClick: _this.onChange.bind(
                  _assertThisInitialized(_this),
                  monthYearPoint
                )
              },
              isSameMonthYear
                ? React.createElement(
                    "span",
                    {
                      className: "react-datepicker__month-year-option--selected"
                    },
                    "\u2713"
                  )
                : "",
              formatDate(monthYear, _this.props.dateFormat)
            );
          });
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        monthYear
      ) {
        return _this.props.onChange(monthYear);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleClickOutside",
        function() {
          _this.props.onCancel();
        }
      );

      _this.state = {
        monthYearsList: generateMonthYears(
          _this.props.minDate,
          _this.props.maxDate
        )
      };
      return _this;
    }

    _createClass(MonthYearDropdownOptions, [
      {
        key: "render",
        value: function render() {
          var dropdownClass = classnames({
            "react-datepicker__month-year-dropdown": true,
            "react-datepicker__month-year-dropdown--scrollable": this.props
              .scrollableMonthYearDropdown
          });
          return React.createElement(
            "div",
            {
              className: dropdownClass
            },
            this.renderOptions()
          );
        }
      }
    ]);

    return MonthYearDropdownOptions;
  })(React.Component);

var WrappedMonthYearDropdownOptions = onClickOutside(MonthYearDropdownOptions);

var MonthYearDropdown =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(MonthYearDropdown, _React$Component);

    function MonthYearDropdown() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MonthYearDropdown);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(MonthYearDropdown)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        dropdownVisible: false
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectOptions",
        function() {
          var currDate = getStartOfMonth(_this.props.minDate);
          var lastDate = getStartOfMonth(_this.props.maxDate);
          var options = [];

          while (!isAfter(currDate, lastDate)) {
            var timepoint = getTime(currDate);
            options.push(
              React.createElement(
                "option",
                {
                  key: timepoint,
                  value: timepoint
                },
                formatDate(currDate, _this.props.dateFormat, _this.props.locale)
              )
            );
            currDate = addMonths(currDate, 1);
          }

          return options;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onSelectChange", function(
        e
      ) {
        _this.onChange(e.target.value);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderSelectMode",
        function() {
          return React.createElement(
            "select",
            {
              value: getTime(getStartOfMonth(_this.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: _this.onSelectChange
            },
            _this.renderSelectOptions()
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "renderReadView", function(
        visible
      ) {
        var yearMonth = formatDate(
          _this.props.date,
          _this.props.dateFormat,
          _this.props.locale
        );
        return React.createElement(
          "div",
          {
            key: "read",
            style: {
              visibility: visible ? "visible" : "hidden"
            },
            className: "react-datepicker__month-year-read-view",
            onClick: function onClick(event) {
              return _this.toggleDropdown(event);
            }
          },
          React.createElement("span", {
            className: "react-datepicker__month-year-read-view--down-arrow"
          }),
          React.createElement(
            "span",
            {
              className:
                "react-datepicker__month-year-read-view--selected-month-year"
            },
            yearMonth
          )
        );
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderDropdown",
        function() {
          return React.createElement(WrappedMonthYearDropdownOptions, {
            key: "dropdown",
            ref: "options",
            date: _this.props.date,
            dateFormat: _this.props.dateFormat,
            onChange: _this.onChange,
            onCancel: _this.toggleDropdown,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderScrollMode",
        function() {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible)];

          if (dropdownVisible) {
            result.unshift(_this.renderDropdown());
          }

          return result;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "onChange", function(
        monthYearPoint
      ) {
        _this.toggleDropdown();

        var changedDate = newDate(parseInt(monthYearPoint));

        if (
          isSameYear(_this.props.date, changedDate) &&
          isSameMonth(_this.props.date, changedDate)
        ) {
          return;
        }

        _this.props.onChange(changedDate);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "toggleDropdown",
        function() {
          return _this.setState({
            dropdownVisible: !_this.state.dropdownVisible
          });
        }
      );

      return _this;
    }

    _createClass(MonthYearDropdown, [
      {
        key: "render",
        value: function render() {
          var renderedDropdown;

          switch (this.props.dropdownMode) {
            case "scroll":
              renderedDropdown = this.renderScrollMode();
              break;

            case "select":
              renderedDropdown = this.renderSelectMode();
              break;
          }

          return React.createElement(
            "div",
            {
              className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                this.props.dropdownMode
              )
            },
            renderedDropdown
          );
        }
      }
    ]);

    return MonthYearDropdown;
  })(React.Component);

var Day =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Day, _React$Component);

    function Day(props) {
      var _this;

      _classCallCheck(this, Day);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Day).call(this, props)
      );

      _defineProperty(_assertThisInitialized(_this), "handleClick", function(
        event
      ) {
        if (!_this.isDisabled() && _this.props.onClick) {
          _this.props.onClick(event);
        }
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleMouseEnter",
        function(event) {
          if (!_this.isDisabled() && _this.props.onMouseEnter) {
            _this.props.onMouseEnter(event);
          }
        }
      );

      _defineProperty(_assertThisInitialized(_this), "isSameDay", function(
        other
      ) {
        return isSameDay(_this.props.day, other);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "isKeyboardSelected",
        function() {
          return (
            !_this.props.disabledKeyboardNavigation &&
            !_this.props.inline &&
            !_this.isSameDay(_this.props.selected) &&
            _this.isSameDay(_this.props.preSelection)
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "isDisabled", function() {
        return isDayDisabled(_this.props.day, _this.props);
      });

      _defineProperty(_assertThisInitialized(_this), "isExcluded", function() {
        return isDayExcluded(_this.props.day, _this.props);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "getHighLightedClass",
        function(defaultClassName) {
          var _this$props = _this.props,
            day = _this$props.day,
            highlightDates = _this$props.highlightDates;

          if (!highlightDates) {
            return false;
          } // Looking for className in the Map of {'day string, 'className'}

          var dayStr = formatDate(day, "MM.dd.yyyy");
          return highlightDates.get(dayStr);
        }
      );

      _defineProperty(_assertThisInitialized(_this), "isInRange", function() {
        var _this$props2 = _this.props,
          day = _this$props2.day,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate;

        if (!startDate || !endDate) {
          return false;
        }

        return isDayInRange(day, startDate, endDate);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "isInSelectingRange",
        function() {
          var _this$props3 = _this.props,
            day = _this$props3.day,
            selectsStart = _this$props3.selectsStart,
            selectsEnd = _this$props3.selectsEnd,
            selectingDate = _this$props3.selectingDate,
            startDate = _this$props3.startDate,
            endDate = _this$props3.endDate;

          if (
            !(selectsStart || selectsEnd) ||
            !selectingDate ||
            _this.isDisabled()
          ) {
            return false;
          }

          if (
            selectsStart &&
            endDate &&
            (isBefore(selectingDate, endDate) ||
              isEqual(selectingDate, endDate))
          ) {
            return isDayInRange(day, selectingDate, endDate);
          }

          if (
            selectsEnd &&
            startDate &&
            (isAfter(selectingDate, startDate) ||
              isEqual(selectingDate, startDate))
          ) {
            return isDayInRange(day, startDate, selectingDate);
          }

          return false;
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "isSelectingRangeStart",
        function() {
          if (!_this.isInSelectingRange()) {
            return false;
          }

          var _this$props4 = _this.props,
            day = _this$props4.day,
            selectingDate = _this$props4.selectingDate,
            startDate = _this$props4.startDate,
            selectsStart = _this$props4.selectsStart;

          if (selectsStart) {
            return isSameDay(day, selectingDate);
          } else {
            return isSameDay(day, startDate);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "isSelectingRangeEnd",
        function() {
          if (!_this.isInSelectingRange()) {
            return false;
          }

          var _this$props5 = _this.props,
            day = _this$props5.day,
            selectingDate = _this$props5.selectingDate,
            endDate = _this$props5.endDate,
            selectsEnd = _this$props5.selectsEnd;

          if (selectsEnd) {
            return isSameDay(day, selectingDate);
          } else {
            return isSameDay(day, endDate);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "isRangeStart",
        function() {
          var _this$props6 = _this.props,
            day = _this$props6.day,
            startDate = _this$props6.startDate,
            endDate = _this$props6.endDate;

          if (!startDate || !endDate) {
            return false;
          }

          return isSameDay(startDate, day);
        }
      );

      _defineProperty(_assertThisInitialized(_this), "isRangeEnd", function() {
        var _this$props7 = _this.props,
          day = _this$props7.day,
          startDate = _this$props7.startDate,
          endDate = _this$props7.endDate;

        if (!startDate || !endDate) {
          return false;
        }

        return isSameDay(endDate, day);
      });

      _defineProperty(_assertThisInitialized(_this), "isWeekend", function() {
        var weekday = getDay(_this.props.day);
        return weekday === 0 || weekday === 6;
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "isOutsideMonth",
        function() {
          return (
            _this.props.month !== undefined &&
            _this.props.month !== getMonth(_this.props.day)
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "getClassNames", function(
        date
      ) {
        var dayClassName = _this.props.dayClassName
          ? _this.props.dayClassName(date)
          : undefined;
        return classnames(
          "react-datepicker__day",
          dayClassName,
          "react-datepicker__day--" + getDayOfWeekCode(_this.props.day),
          {
            "react-datepicker__day--disabled": _this.isDisabled(),
            "react-datepicker__day--excluded": _this.isExcluded(),
            "react-datepicker__day--selected": _this.isSameDay(
              _this.props.selected
            ),
            "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
            "react-datepicker__day--range-start": _this.isRangeStart(),
            "react-datepicker__day--range-end": _this.isRangeEnd(),
            "react-datepicker__day--in-range": _this.isInRange(),
            "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
            "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
            "react-datepicker__day--today": _this.isSameDay(newDate()),
            "react-datepicker__day--weekend": _this.isWeekend(),
            "react-datepicker__day--outside-month": _this.isOutsideMonth()
          },
          _this.getHighLightedClass("react-datepicker__day--highlighted")
        );
      });

      _this.buttonRef = null;
      return _this;
    }

    _createClass(Day, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.isKeyboardSelected()) {
            this.buttonRef.focus();
          }
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var preSelection = this.props.preSelection;
          var prevPreSelection = prevProps.preSelection;

          if (preSelection !== prevPreSelection) {
            if (this.isKeyboardSelected()) {
              this.buttonRef.focus();
            }
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var dayString = formatDate(
            this.props.day,
            DAY_ARIA_LABEL,
            this.props.locale
          );
          return React.createElement(
            "button",
            {
              "aria-label": "Select ".concat(dayString),
              "aria-selected": String(this.isKeyboardSelected()),
              className: this.getClassNames(this.props.day),
              key: dayString,
              onClick: this.handleClick,
              onFocus: this.props.onDayFocus,
              onKeyDown: this.props.onKeyDown,
              onMouseEnter: this.handleMouseEnter,
              ref: function ref(r) {
                return (_this2.buttonRef = r);
              },
              role: "option",
              tabIndex: "-1"
            },
            this.props.renderDayContents
              ? this.props.renderDayContents(
                  getDate(this.props.day),
                  this.props.day
                )
              : getDate(this.props.day)
          );
        }
      }
    ]);

    return Day;
  })(React.Component);

var WeekNumber =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(WeekNumber, _React$Component);

    function WeekNumber() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WeekNumber);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(WeekNumber)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "handleClick", function(
        event
      ) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      });

      return _this;
    }

    _createClass(WeekNumber, [
      {
        key: "render",
        value: function render() {
          var weekNumberClasses = {
            "react-datepicker__week-number": true,
            "react-datepicker__week-number--clickable": !!this.props.onClick
          };
          return React.createElement(
            "div",
            {
              className: classnames(weekNumberClasses),
              onClick: this.handleClick
            },
            this.props.weekNumber
          );
        }
      }
    ]);

    return WeekNumber;
  })(React.Component);

var Week =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Week, _React$Component);

    function Week() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Week);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Week)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "handleDayClick", function(
        day,
        event
      ) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event);
        }
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDayMouseEnter",
        function(day) {
          if (_this.props.onDayMouseEnter) {
            _this.props.onDayMouseEnter(day);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleWeekClick",
        function(day, weekNumber, event) {
          if (typeof _this.props.onWeekSelect === "function") {
            _this.props.onWeekSelect(day, weekNumber, event);
          }

          if (_this.props.shouldCloseOnSelect) {
            _this.props.setOpen(false);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "formatWeekNumber",
        function(date) {
          if (_this.props.formatWeekNumber) {
            return _this.props.formatWeekNumber(date);
          }

          return getWeek(date);
        }
      );

      _defineProperty(_assertThisInitialized(_this), "renderDays", function() {
        var startOfWeek = getStartOfWeek(_this.props.day, _this.props.locale);
        var days = [];

        var weekNumber = _this.formatWeekNumber(startOfWeek);

        if (_this.props.showWeekNumber) {
          var onClickAction = _this.props.onWeekSelect
            ? _this.handleWeekClick.bind(
                _assertThisInitialized(_this),
                startOfWeek,
                weekNumber
              )
            : undefined;
          days.push(
            React.createElement(WeekNumber, {
              key: "W",
              weekNumber: weekNumber,
              onClick: onClickAction
            })
          );
        }

        return days.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function(offset) {
            var day = utils$1(startOfWeek, offset);
            return React.createElement(Day, {
              day: day,
              dayClassName: _this.props.dayClassName,
              disabledKeyboardNavigation:
                _this.props.disabledKeyboardNavigation,
              endDate: _this.props.endDate,
              excludeDates: _this.props.excludeDates,
              filterDate: _this.props.filterDate,
              highlightDates: _this.props.highlightDates,
              includeDates: _this.props.includeDates,
              inline: _this.props.inline,
              key: offset,
              locale: _this.props.locale,
              maxDate: _this.props.maxDate,
              minDate: _this.props.minDate,
              month: _this.props.month,
              onClick: _this.handleDayClick.bind(
                _assertThisInitialized(_this),
                day
              ),
              onDayFocus: _this.props.onDayFocus,
              onKeyDown: _this.props.onKeyDown,
              onMouseEnter: _this.handleDayMouseEnter.bind(
                _assertThisInitialized(_this),
                day
              ),
              preSelection: _this.props.preSelection,
              renderDayContents: _this.props.renderDayContents,
              selected: _this.props.selected,
              selectingDate: _this.props.selectingDate,
              selectsEnd: _this.props.selectsEnd,
              selectsStart: _this.props.selectsStart,
              startDate: _this.props.startDate
            });
          })
        );
      });

      return _this;
    }

    _createClass(
      Week,
      [
        {
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              {
                className: "react-datepicker__week"
              },
              this.renderDays()
            );
          }
        }
      ],
      [
        {
          key: "defaultProps",
          get: function get() {
            return {
              shouldCloseOnSelect: true
            };
          }
        }
      ]
    );

    return Week;
  })(React.Component);

var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

var Month =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Month, _React$Component);

    function Month() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Month);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Month)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "handleDayClick", function(
        day,
        event
      ) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event, _this.props.orderInDisplay);
        }
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDayMouseEnter",
        function(day) {
          if (_this.props.onDayMouseEnter) {
            _this.props.onDayMouseEnter(day);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleMouseLeave",
        function() {
          if (_this.props.onMouseLeave) {
            _this.props.onMouseLeave();
          }
        }
      );

      _defineProperty(_assertThisInitialized(_this), "isRangeStart", function(
        m
      ) {
        var _this$props = _this.props,
          day = _this$props.day,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate;

        if (!startDate || !endDate) {
          return false;
        }

        return isSameMonth(utils(day, m), startDate);
      });

      _defineProperty(_assertThisInitialized(_this), "isRangeEnd", function(m) {
        var _this$props2 = _this.props,
          day = _this$props2.day,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate;

        if (!startDate || !endDate) {
          return false;
        }

        return isSameMonth(utils(day, m), endDate);
      });

      _defineProperty(_assertThisInitialized(_this), "isWeekInMonth", function(
        startOfWeek
      ) {
        var day = _this.props.day;
        var endOfWeek = utils$1(startOfWeek, 6);
        return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
      });

      _defineProperty(_assertThisInitialized(_this), "renderWeeks", function() {
        var weeks = [];
        var isFixedHeight = _this.props.fixedHeight;
        var currentWeekStart = getStartOfWeek(
          getStartOfMonth(_this.props.day),
          _this.props.locale
        );
        var i = 0;
        var breakAfterNextPush = false;

        while (true) {
          weeks.push(
            React.createElement(Week, {
              day: currentWeekStart,
              dayClassName: _this.props.dayClassName,
              disabledKeyboardNavigation:
                _this.props.disabledKeyboardNavigation,
              endDate: _this.props.endDate,
              excludeDates: _this.props.excludeDates,
              filterDate: _this.props.filterDate,
              formatWeekNumber: _this.props.formatWeekNumber,
              highlightDates: _this.props.highlightDates,
              includeDates: _this.props.includeDates,
              inline: _this.props.inline,
              key: i,
              locale: _this.props.locale,
              maxDate: _this.props.maxDate,
              minDate: _this.props.minDate,
              month: getMonth(_this.props.day),
              onDayClick: _this.handleDayClick,
              onDayFocus: _this.props.onDayFocus,
              onDayMouseEnter: _this.handleDayMouseEnter,
              onKeyDown: _this.props.onKeyDown,
              onWeekSelect: _this.props.onWeekSelect,
              preSelection: _this.props.preSelection,
              renderDayContents: _this.props.renderDayContents,
              selected: _this.props.selected,
              selectingDate: _this.props.selectingDate,
              selectsEnd: _this.props.selectsEnd,
              selectsStart: _this.props.selectsStart,
              setOpen: _this.props.setOpen,
              shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
              showWeekNumber: _this.props.showWeekNumbers,
              startDate: _this.props.startDate
            })
          );
          if (breakAfterNextPush) break;
          i++;
          currentWeekStart = utils$2(currentWeekStart, 1); // If one of these conditions is true, we will either break on this week
          // or break on the next week

          var isFixedAndFinalWeek =
            isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
          var isNonFixedAndOutOfMonth =
            !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

          if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
            if (_this.props.peekNextMonth) {
              breakAfterNextPush = true;
            } else {
              break;
            }
          }
        }

        return weeks;
      });

      _defineProperty(_assertThisInitialized(_this), "onMonthClick", function(
        e,
        m
      ) {
        _this.handleDayClick(getStartOfMonth(utils(_this.props.day, m)), e);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "getMonthClassNames",
        function(m) {
          var _this$props3 = _this.props,
            day = _this$props3.day,
            startDate = _this$props3.startDate,
            endDate = _this$props3.endDate,
            selected = _this$props3.selected,
            minDate = _this$props3.minDate,
            maxDate = _this$props3.maxDate;
          return classnames(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(m),
            {
              "react-datepicker__month--disabled":
                (minDate || maxDate) &&
                isMonthDisabled(utils(day, m), _this.props),
              "react-datepicker__month--selected":
                getMonth(day) === m && getYear(day) === getYear(selected),
              "react-datepicker__month--in-range": isMonthinRange(
                startDate,
                endDate,
                m,
                day
              ),
              "react-datepicker__month--range-start": _this.isRangeStart(m),
              "react-datepicker__month--range-end": _this.isRangeEnd(m)
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderMonths",
        function() {
          var months = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];
          return months.map(function(month, i) {
            return React.createElement(
              "div",
              {
                className: "react-datepicker__month-wrapper",
                key: i
              },
              month.map(function(m, j) {
                return React.createElement(
                  "div",
                  {
                    key: j,
                    onClick: function onClick(ev) {
                      _this.onMonthClick(ev, m);
                    },
                    className: _this.getMonthClassNames(m)
                  },
                  getMonthShortInLocale(m, _this.props.locale)
                );
              })
            );
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "getClassNames",
        function() {
          var _this$props4 = _this.props,
            selectingDate = _this$props4.selectingDate,
            selectsStart = _this$props4.selectsStart,
            selectsEnd = _this$props4.selectsEnd,
            showMonthYearPicker = _this$props4.showMonthYearPicker;
          return classnames(
            "react-datepicker__month",
            {
              "react-datepicker__month--selecting-range":
                selectingDate && (selectsStart || selectsEnd)
            },
            {
              "react-datepicker__monthPicker": showMonthYearPicker
            }
          );
        }
      );

      return _this;
    }

    _createClass(Month, [
      {
        key: "render",
        value: function render() {
          var showMonthYearPicker = this.props.showMonthYearPicker;
          return React.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              role: "listbox"
            },
            showMonthYearPicker ? this.renderMonths() : this.renderWeeks()
          );
        }
      }
    ]);

    return Month;
  })(React.Component);

var Time =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Time, _React$Component);

    function Time() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Time);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Time)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        height: null
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick", function(
        time
      ) {
        if (
          ((_this.props.minTime || _this.props.maxTime) &&
            isTimeInDisabledRange(time, _this.props)) ||
          (_this.props.excludeTimes &&
            isTimeDisabled(time, _this.props.excludeTimes)) ||
          (_this.props.includeTimes &&
            !isTimeDisabled(time, _this.props.includeTimes))
        ) {
          return;
        }

        _this.props.onChange(time);
      });

      _defineProperty(_assertThisInitialized(_this), "isDisabledTime", function(
        time
      ) {
        return (
          ((_this.props.minTime || _this.props.maxTime) &&
            isTimeInDisabledRange(time, _this.props)) ||
          (_this.props.excludeTimes &&
            isTimeDisabled(time, _this.props.excludeTimes)) ||
          (_this.props.includeTimes &&
            !isTimeDisabled(time, _this.props.includeTimes))
        );
      });

      _defineProperty(_assertThisInitialized(_this), "liClasses", function(
        time,
        currH,
        currM
      ) {
        var classes = ["react-datepicker__time-list-item"];

        if (
          _this.props.selected &&
          currH === getHours(time) &&
          currM === getMinutes(time)
        ) {
          classes.push("react-datepicker__time-list-item--selected");
        }

        if (_this.isDisabledTime(time)) {
          classes.push("react-datepicker__time-list-item--disabled");
        }

        if (
          _this.props.injectTimes &&
          (getHours(time) * 60 + getMinutes(time)) % _this.props.intervals !== 0
        ) {
          classes.push("react-datepicker__time-list-item--injected");
        }

        return classes.join(" ");
      });

      _defineProperty(_assertThisInitialized(_this), "renderTimes", function() {
        var times = [];
        var format = _this.props.format ? _this.props.format : "p";
        var intervals = _this.props.intervals;
        var activeTime =
          _this.props.selected || _this.props.openToDate || newDate();
        var currH = getHours(activeTime);
        var currM = getMinutes(activeTime);
        var base = getStartOfDay(newDate());
        var multiplier = 1440 / intervals;

        var sortedInjectTimes =
          _this.props.injectTimes &&
          _this.props.injectTimes.sort(function(a, b) {
            return a - b;
          });

        for (var i = 0; i < multiplier; i++) {
          var currentTime = addMinutes(base, i * intervals);
          times.push(currentTime);

          if (sortedInjectTimes) {
            var timesToInject = timesToInjectAfter(
              base,
              currentTime,
              i,
              intervals,
              sortedInjectTimes
            );
            times = times.concat(timesToInject);
          }
        }

        return times.map(function(time, i) {
          return React.createElement(
            "li",
            {
              key: i,
              className: _this.liClasses(time, currH, currM),
              ref: function ref(li) {
                if (currH === getHours(time) && currM >= getMinutes(time)) {
                  _this.centerLi = li;
                }
              }
            },
            React.createElement(
              "button",
              _extends(
                {},
                _this.isDisabledTime(time)
                  ? {
                      disabled: "disabled"
                    }
                  : "",
                {
                  onClick: _this.handleClick.bind(
                    _assertThisInitialized(_this),
                    time
                  )
                }
              ),
              formatDate(time, format, _this.props.locale)
            )
          );
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(e) {
        switch (e.key) {
          case "Up":
          case "ArrowUp":
            _this.centerLi = _this.centerLi.previousSibling;

            _this.centerLi.firstChild.focus();

            break;

          case "Down":
          case "ArrowDown":
            _this.centerLi = _this.centerLi.nextSibling;

            _this.centerLi.firstChild.focus();

            break;

          case "Esc":
          case "Escape":
            _this.props.closeDialog();

            break;

          case "Enter":
          case " ":
            return;

          case "Home":
            _this.centerLi = _this.centerLi.parentNode.firstChild;

            _this.centerLi.firstChild.focus();

            break;

          case "End":
            _this.centerLi = _this.centerLi.parentNode.lastChild;

            _this.centerLi.firstChild.focus();

            break;

          case "Tab":
            return;

          default:
            return;
        }

        e.preventDefault();
      });

      return _this;
    }

    _createClass(
      Time,
      [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            // code to ensure selected time will always be in focus within time window when it first appears
            this.list.scrollTop = Time.calcCenterPosition(
              this.props.monthRef
                ? this.props.monthRef.clientHeight - this.header.clientHeight
                : this.list.clientHeight,
              this.centerLi
            );

            if (this.props.monthRef && this.header) {
              this.setState({
                height:
                  this.props.monthRef.clientHeight - this.header.clientHeight
              });
            }
          }
        },
        {
          key: "render",
          value: function render() {
            var _this2 = this;

            var height = this.state.height;
            return React.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : ""
                )
              },
              React.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--time",
                  ref: function ref(header) {
                    _this2.header = header;
                  }
                },
                React.createElement(
                  "div",
                  {
                    className: "react-datepicker-time__header"
                  },
                  this.props.timeCaption
                )
              ),
              React.createElement(
                "div",
                {
                  className: "react-datepicker__time"
                },
                React.createElement(
                  "div",
                  {
                    className: "react-datepicker__time-box"
                  },
                  React.createElement(
                    "ul",
                    {
                      onKeyDown: this.onKeyDown,
                      className: "react-datepicker__time-list",
                      ref: function ref(list) {
                        _this2.list = list;
                      },
                      style: height
                        ? {
                            height: height
                          }
                        : {}
                    },
                    this.renderTimes()
                  )
                )
              )
            );
          }
        }
      ],
      [
        {
          key: "defaultProps",
          get: function get() {
            return {
              intervals: 30,
              onTimeChange: function onTimeChange() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]
    );

    return Time;
  })(React.Component);

_defineProperty(Time, "calcCenterPosition", function(listHeight, centerLiRef) {
  return (
    centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2)
  );
});

var inputTime =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(inputTime, _React$Component);

    function inputTime(props) {
      var _this;

      _classCallCheck(this, inputTime);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(inputTime).call(this, props)
      );

      _defineProperty(_assertThisInitialized(_this), "onTimeChange", function(
        time
      ) {
        _this.setState({
          time: time
        });

        var date = new Date();
        date.setHours(time.split(":")[0]);
        date.setMinutes(time.split(":")[1]);

        _this.props.onChange(date);
      });

      _this.state = {
        time: _this.props.timeString
      };
      return _this;
    }

    _createClass(inputTime, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var time = this.state.time;
          var timeString = this.props.timeString;
          return React.createElement(
            "div",
            {
              className: "react-datepicker__input-time-container"
            },
            React.createElement(
              "div",
              {
                className: "react-datepicker-time__caption"
              },
              this.props.timeInputLabel
            ),
            React.createElement(
              "div",
              {
                className: "react-datepicker-time__input-container"
              },
              React.createElement(
                "div",
                {
                  className: "react-datepicker-time__input"
                },
                React.createElement("input", {
                  type: "time",
                  className: "react-datepicker-time__input",
                  placeholder: "Time",
                  name: "time-input",
                  required: true,
                  value: time,
                  onChange: function onChange(ev) {
                    _this2.onTimeChange(ev.target.value || timeString);
                  }
                })
              )
            )
          );
        }
      }
    ]);

    return inputTime;
  })(React.Component);

function CalendarContainer(_ref) {
  var arrowProps = _ref.arrowProps,
    className = _ref.className,
    children = _ref.children,
    ariaDescribedBy = _ref["aria-describedBy"];
  return React.createElement(
    "div",
    {
      className: className,
      "aria-label": "Date picker",
      "aria-describedBy": ariaDescribedBy,
      role: "dialog",
      "aria-modal": "true"
    },
    React.createElement(
      "div",
      _extends(
        {
          className: "react-datepicker__triangle"
        },
        arrowProps
      )
    ),
    children
  );
}
CalendarContainer.defaultProps = {
  arrowProps: {},
  className: ""
};

var DROPDOWN_FOCUS_CLASSNAMES = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
];

var isDropdownSelect = function isDropdownSelect() {
  var element =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var classNames = (element.className || "").split(/\s+/);
  return DROPDOWN_FOCUS_CLASSNAMES.some(function(testClassname) {
    return classNames.indexOf(testClassname) >= 0;
  });
};

var Calendar =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Calendar, _React$Component);

    _createClass(Calendar, null, [
      {
        key: "defaultProps",
        get: function get() {
          return {
            onDropdownFocus: function onDropdownFocus() {},
            monthsShown: 1,
            monthSelectedIn: 0,
            forceShowMonthNavigation: false,
            timeCaption: "Time",
            previousYearButtonLabel: "Previous Year",
            nextYearButtonLabel: "Next Year",
            previousMonthButtonLabel: "Previous Month",
            nextMonthButtonLabel: "Next Month"
          };
        }
      }
    ]);

    function Calendar(props) {
      var _this;

      _classCallCheck(this, Calendar);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Calendar).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleClickOutside",
        function(event) {
          _this.props.onClickOutside(event);
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDropdownFocus",
        function(event) {
          if (isDropdownSelect(event.target)) {
            _this.props.onDropdownFocus();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "getDateInView",
        function() {
          var _this$props = _this.props,
            preSelection = _this$props.preSelection,
            selected = _this$props.selected,
            openToDate = _this$props.openToDate;
          var minDate = getEffectiveMinDate(_this.props);
          var maxDate = getEffectiveMaxDate(_this.props);
          var current = newDate();
          var initialDate = openToDate || selected || preSelection;

          if (initialDate) {
            return initialDate;
          } else {
            if (minDate && isBefore(current, minDate)) {
              return minDate;
            } else if (maxDate && isAfter(current, maxDate)) {
              return maxDate;
            }
          }

          return current;
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "increaseMonth",
        function() {
          _this.setState(
            function(_ref) {
              var date = _ref.date;
              return {
                date: addMonths(date, 1)
              };
            },
            function() {
              return _this.handleMonthChange(_this.state.date);
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "decreaseMonth",
        function() {
          _this.setState(
            function(_ref2) {
              var date = _ref2.date;
              return {
                date: subMonths(date, 1)
              };
            },
            function() {
              return _this.handleMonthChange(_this.state.date);
            }
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "handleDayClick", function(
        day,
        event,
        monthSelectedIn
      ) {
        return _this.props.onSelect(day, event, monthSelectedIn);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDayMouseEnter",
        function(day) {
          _this.setState({
            selectingDate: day
          });

          _this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleMonthMouseLeave",
        function() {
          _this.setState({
            selectingDate: null
          });

          _this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleYearChange",
        function(date) {
          if (_this.props.onYearChange) {
            _this.props.onYearChange(date);
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleMonthChange",
        function(date) {
          if (_this.props.onMonthChange) {
            _this.props.onMonthChange(date);
          }

          if (_this.props.adjustDateOnChange) {
            if (_this.props.onSelect) {
              _this.props.onSelect(date);
            }

            if (_this.props.setOpen) {
              _this.props.setOpen(true);
            }
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleMonthYearChange",
        function(date) {
          _this.handleYearChange(date);

          _this.handleMonthChange(date);
        }
      );

      _defineProperty(_assertThisInitialized(_this), "changeYear", function(
        year
      ) {
        _this.setState(
          function(_ref3) {
            var date = _ref3.date;
            return {
              date: setYear(date, year)
            };
          },
          function() {
            return _this.handleYearChange(_this.state.date);
          }
        );
      });

      _defineProperty(_assertThisInitialized(_this), "changeMonth", function(
        month
      ) {
        _this.setState(
          function(_ref4) {
            var date = _ref4.date;
            return {
              date: utils(date, month)
            };
          },
          function() {
            return _this.handleMonthChange(_this.state.date);
          }
        );
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "changeMonthYear",
        function(monthYear) {
          _this.setState(
            function(_ref5) {
              var date = _ref5.date;
              return {
                date: setYear(
                  utils(date, getMonth(monthYear)),
                  getYear(monthYear)
                )
              };
            },
            function() {
              return _this.handleMonthYearChange(_this.state.date);
            }
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "header", function() {
        var date =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : _this.state.date;
        var startOfWeek = getStartOfWeek(date, _this.props.locale);
        var dayNames = [];

        if (_this.props.showWeekNumbers) {
          dayNames.push(
            React.createElement(
              "div",
              {
                key: "W",
                className: "react-datepicker__day-name"
              },
              _this.props.weekLabel || "#"
            )
          );
        }

        return dayNames.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function(offset) {
            var day = utils$1(startOfWeek, offset);

            var weekDayName = _this.formatWeekday(day, _this.props.locale);

            return React.createElement(
              "div",
              {
                key: offset,
                "aria-hidden": "true",
                className: "react-datepicker__day-name"
              },
              weekDayName
            );
          })
        );
      });

      _defineProperty(_assertThisInitialized(_this), "formatWeekday", function(
        day,
        locale
      ) {
        if (_this.props.formatWeekDay) {
          return getFormattedWeekdayInLocale(
            day,
            _this.props.formatWeekDay,
            locale
          );
        }

        return _this.props.useWeekdaysShort
          ? getWeekdayShortInLocale(day, locale)
          : getWeekdayMinInLocale(day, locale);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "decreaseYear",
        function() {
          _this.setState(
            function(_ref6) {
              var date = _ref6.date;
              return {
                date: subYears(date, 1)
              };
            },
            function() {
              return _this.handleYearChange(_this.state.date);
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderPreviousButton",
        function() {
          if (_this.props.renderCustomHeader) {
            return;
          }

          var allPrevDaysDisabled = monthDisabledBefore(
            _this.state.date,
            _this.props
          );

          if (
            (!_this.props.forceShowMonthNavigation &&
              !_this.props.showDisabledMonthNavigation &&
              allPrevDaysDisabled) ||
            _this.props.showTimeSelectOnly
          ) {
            return;
          }

          var classes = [
            "react-datepicker__navigation",
            "react-datepicker__navigation--previous"
          ];
          var clickHandler = _this.decreaseMonth;

          if (_this.props.showMonthYearPicker) {
            clickHandler = _this.decreaseYear;
          }

          if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
            classes.push("react-datepicker__navigation--previous--disabled");
            clickHandler = null;
          }

          return React.createElement("button", {
            "aria-label": _this.props.showMonthYearPicker
              ? _this.props.previousYearButtonLabel
              : _this.props.previousMonthButtonLabel,
            type: "button",
            className: classes.join(" "),
            onClick: clickHandler
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "increaseYear",
        function() {
          _this.setState(
            function(_ref7) {
              var date = _ref7.date;
              return {
                date: addYears(date, 1)
              };
            },
            function() {
              return _this.handleYearChange(_this.state.date);
            }
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderNextButton",
        function() {
          if (_this.props.renderCustomHeader) {
            return;
          }

          var allNextDaysDisabled = monthDisabledAfter(
            _this.state.date,
            _this.props
          );

          if (
            (!_this.props.forceShowMonthNavigation &&
              !_this.props.showDisabledMonthNavigation &&
              allNextDaysDisabled) ||
            _this.props.showTimeSelectOnly
          ) {
            return;
          }

          var classes = [
            "react-datepicker__navigation",
            "react-datepicker__navigation--next"
          ];

          if (_this.props.showTimeSelect) {
            classes.push("react-datepicker__navigation--next--with-time");
          }

          if (_this.props.todayButton) {
            classes.push(
              "react-datepicker__navigation--next--with-today-button"
            );
          }

          var clickHandler = _this.increaseMonth;

          if (_this.props.showMonthYearPicker) {
            clickHandler = _this.increaseYear;
          }

          if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
            classes.push("react-datepicker__navigation--next--disabled");
            clickHandler = null;
          }

          return React.createElement("button", {
            "aria-label": _this.props.showMonthYearPicker
              ? _this.props.nextYearButtonLabel
              : _this.props.nextMonthButtonLabel,
            type: "button",
            className: classes.join(" "),
            onClick: clickHandler
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderCurrentMonth",
        function() {
          var date =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : _this.state.date;
          var classes = ["react-datepicker__current-month"];

          if (_this.props.showYearDropdown) {
            classes.push("react-datepicker__current-month--hasYearDropdown");
          }

          if (_this.props.showMonthDropdown) {
            classes.push("react-datepicker__current-month--hasMonthDropdown");
          }

          if (_this.props.showMonthYearDropdown) {
            classes.push(
              "react-datepicker__current-month--hasMonthYearDropdown"
            );
          }

          return React.createElement(
            "div",
            {
              className: classes.join(" ")
            },
            formatDate(date, _this.props.dateFormat, _this.props.locale)
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderYearDropdown",
        function() {
          var overrideHide =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : false;

          if (!_this.props.showYearDropdown || overrideHide) {
            return;
          }

          return React.createElement(YearDropdown, {
            adjustDateOnChange: _this.props.adjustDateOnChange,
            date: _this.state.date,
            onSelect: _this.props.onSelect,
            setOpen: _this.props.setOpen,
            dropdownMode: _this.props.dropdownMode,
            onChange: _this.changeYear,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            year: getYear(_this.state.date),
            scrollableYearDropdown: _this.props.scrollableYearDropdown,
            yearDropdownItemNumber: _this.props.yearDropdownItemNumber
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderMonthDropdown",
        function() {
          var overrideHide =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : false;

          if (!_this.props.showMonthDropdown || overrideHide) {
            return;
          }

          return React.createElement(MonthDropdown, {
            dropdownMode: _this.props.dropdownMode,
            locale: _this.props.locale,
            onChange: _this.changeMonth,
            month: getMonth(_this.state.date),
            useShortMonthInDropdown: _this.props.useShortMonthInDropdown
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderMonthYearDropdown",
        function() {
          var overrideHide =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : false;

          if (!_this.props.showMonthYearDropdown || overrideHide) {
            return;
          }

          return React.createElement(MonthYearDropdown, {
            dropdownMode: _this.props.dropdownMode,
            locale: _this.props.locale,
            dateFormat: _this.props.dateFormat,
            onChange: _this.changeMonthYear,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            date: _this.state.date,
            scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderTodayButton",
        function() {
          if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
            return;
          }

          return React.createElement(
            "div",
            {
              className: "react-datepicker__today-button",
              onClick: function onClick(e) {
                return _this.props.onSelect(getStartOfToday(), e);
              }
            },
            _this.props.todayButton
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderDefaultHeader",
        function(_ref8) {
          var monthDate = _ref8.monthDate,
            i = _ref8.i;
          return React.createElement(
            "div",
            {
              className: "react-datepicker__header"
            },
            _this.renderCurrentMonth(monthDate),
            React.createElement(
              "div",
              {
                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                  _this.props.dropdownMode
                ),
                onFocus: _this.handleDropdownFocus
              },
              _this.renderMonthDropdown(i !== 0),
              _this.renderMonthYearDropdown(i !== 0),
              _this.renderYearDropdown(i !== 0)
            ),
            React.createElement(
              "div",
              {
                className: "react-datepicker__day-names"
              },
              _this.header(monthDate)
            )
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderCustomHeader",
        function(_ref9) {
          var monthDate = _ref9.monthDate,
            i = _ref9.i;

          if (i !== 0) {
            return null;
          }

          var prevMonthButtonDisabled = monthDisabledBefore(
            _this.state.date,
            _this.props
          );
          var nextMonthButtonDisabled = monthDisabledAfter(
            _this.state.date,
            _this.props
          );
          return React.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: _this.props.onDropdownFocus
            },
            _this.props.renderCustomHeader(
              _objectSpread2({}, _this.state, {
                changeMonth: _this.changeMonth,
                changeYear: _this.changeYear,
                decreaseMonth: _this.decreaseMonth,
                increaseMonth: _this.increaseMonth,
                prevMonthButtonDisabled: prevMonthButtonDisabled,
                nextMonthButtonDisabled: nextMonthButtonDisabled
              })
            ),
            React.createElement(
              "div",
              {
                className: "react-datepicker__day-names"
              },
              _this.header(monthDate)
            )
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderYearHeader",
        function() {
          return React.createElement(
            "div",
            {
              className: "react-datepicker__header react-datepicker-year-header"
            },
            getYear(_this.state.date)
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderMonths",
        function() {
          if (_this.props.showTimeSelectOnly) {
            return;
          }

          var monthList = [];

          for (var i = 0; i < _this.props.monthsShown; ++i) {
            var monthsToAdd = i - _this.props.monthSelectedIn;
            var monthDate = addMonths(_this.state.date, monthsToAdd);
            var monthKey = "month-".concat(i);
            monthList.push(
              React.createElement(
                "div",
                {
                  key: monthKey,
                  ref: function ref(div) {
                    _this.monthContainer = div;
                  },
                  className: "react-datepicker__month-container"
                },
                !_this.props.showMonthYearPicker
                  ? _this.props.renderCustomHeader
                    ? _this.renderCustomHeader({
                        monthDate: monthDate,
                        i: i
                      })
                    : _this.renderDefaultHeader({
                        monthDate: monthDate,
                        i: i
                      })
                  : _this.renderYearHeader({
                      monthDate: monthDate,
                      i: i
                    }),
                React.createElement(Month, {
                  day: monthDate,
                  dayClassName: _this.props.dayClassName,
                  disabledKeyboardNavigation:
                    _this.props.disabledKeyboardNavigation,
                  endDate: _this.props.endDate,
                  excludeDates: _this.props.excludeDates,
                  filterDate: _this.props.filterDate,
                  fixedHeight: _this.props.fixedHeight,
                  formatWeekNumber: _this.props.formatWeekNumber,
                  highlightDates: _this.props.highlightDates,
                  includeDates: _this.props.includeDates,
                  inline: _this.props.inline,
                  locale: _this.props.locale,
                  maxDate: _this.props.maxDate,
                  minDate: _this.props.minDate,
                  onChange: _this.changeMonthYear,
                  onDayClick: _this.handleDayClick,
                  onDayFocus: _this.props.onDropdownFocus,
                  onDayMouseEnter: _this.handleDayMouseEnter,
                  onKeyDown: _this.props.onKeyDown,
                  onMouseLeave: _this.handleMonthMouseLeave,
                  onWeekSelect: _this.props.onWeekSelect,
                  orderInDisplay: i,
                  peekNextMonth: _this.props.peekNextMonth,
                  preSelection: _this.props.preSelection,
                  renderDayContents: _this.props.renderDayContents,
                  selected: _this.props.selected,
                  selectingDate: _this.state.selectingDate,
                  selectsEnd: _this.props.selectsEnd,
                  selectsStart: _this.props.selectsStart,
                  setOpen: _this.props.setOpen,
                  shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
                  showMonthYearPicker: _this.props.showMonthYearPicker,
                  showWeekNumbers: _this.props.showWeekNumbers,
                  startDate: _this.props.startDate
                })
              )
            );
          }

          return monthList;
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderTimeSection",
        function() {
          if (
            _this.props.showTimeSelect &&
            (_this.state.monthContainer || _this.props.showTimeSelectOnly)
          ) {
            return React.createElement(Time, {
              selected: _this.props.selected,
              openToDate: _this.props.openToDate,
              onChange: _this.props.onTimeChange,
              format: _this.props.timeFormat,
              includeTimes: _this.props.includeTimes,
              intervals: _this.props.timeIntervals,
              minTime: _this.props.minTime,
              maxTime: _this.props.maxTime,
              excludeTimes: _this.props.excludeTimes,
              timeCaption: _this.props.timeCaption,
              todayButton: _this.props.todayButton,
              showMonthDropdown: _this.props.showMonthDropdown,
              showMonthYearDropdown: _this.props.showMonthYearDropdown,
              showYearDropdown: _this.props.showYearDropdown,
              withPortal: _this.props.withPortal,
              monthRef: _this.state.monthContainer,
              injectTimes: _this.props.injectTimes,
              locale: _this.props.locale,
              closeDialog: _this.props.closeDialog
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderInputTimeSection",
        function() {
          var time = new Date(_this.props.selected);
          var timeString = ""
            .concat(addZero(time.getHours()), ":")
            .concat(addZero(time.getMinutes()));

          if (_this.props.showTimeInput) {
            return React.createElement(inputTime, {
              timeString: timeString,
              timeInputLabel: _this.props.timeInputLabel,
              onChange: _this.props.onTimeChange
            });
          }
        }
      );

      _this.state = {
        date: _this.getDateInView(),
        selectingDate: null,
        monthContainer: null
      };
      return _this;
    }

    _createClass(Calendar, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          // monthContainer height is needed in time component
          // to determine the height for the ul in the time component
          // setState here so height is given after final component
          // layout is rendered
          if (this.props.showTimeSelect) {
            this.assignMonthContainer = (function() {
              _this2.setState({
                monthContainer: _this2.monthContainer
              });
            })();
          }
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (
            this.props.preSelection &&
            !isSameDay(this.props.preSelection, prevProps.preSelection)
          ) {
            this.setState({
              date: this.props.preSelection
            });
          } else if (
            this.props.openToDate &&
            !isSameDay(this.props.openToDate, prevProps.openToDate)
          ) {
            this.setState({
              date: this.props.openToDate
            });
          }
        }
      },
      {
        key: "render",
        value: function render() {
          var Container = this.props.container || CalendarContainer;
          return React.createElement(
            Container,
            {
              className: classnames("react-datepicker", this.props.className, {
                "react-datepicker--time-only": this.props.showTimeSelectOnly
              }),
              "aria-describedBy": this.props.ariaDescribedBy
            },
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.props.children
          );
        }
      }
    ]);

    return Calendar;
  })(React.Component);

var PopperComponent =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(PopperComponent, _React$Component);

    function PopperComponent() {
      _classCallCheck(this, PopperComponent);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(PopperComponent).apply(this, arguments)
      );
    }

    _createClass(
      PopperComponent,
      [
        {
          key: "render",
          value: function render() {
            var _this$props = this.props,
              className = _this$props.className,
              wrapperClassName = _this$props.wrapperClassName,
              hidePopper = _this$props.hidePopper,
              popperComponent = _this$props.popperComponent,
              popperModifiers = _this$props.popperModifiers,
              popperPlacement = _this$props.popperPlacement,
              popperProps = _this$props.popperProps,
              targetComponent = _this$props.targetComponent;
            var popper;

            if (!hidePopper) {
              var classes = classnames("react-datepicker-popper", className);
              popper = React.createElement(
                Popper,
                _extends(
                  {
                    modifiers: popperModifiers,
                    placement: popperPlacement
                  },
                  popperProps
                ),
                function(_ref) {
                  var ref = _ref.ref,
                    style = _ref.style,
                    placement = _ref.placement,
                    arrowProps = _ref.arrowProps;
                  return React.createElement(
                    "div",
                    _extends(
                      {
                        ref: ref,
                        style: style
                      },
                      {
                        className: classes,
                        "data-placement": placement
                      }
                    ),
                    React.cloneElement(popperComponent, {
                      arrowProps: arrowProps
                    })
                  );
                }
              );
            }

            if (this.props.popperContainer) {
              popper = React.createElement(
                this.props.popperContainer,
                {},
                popper
              );
            }

            var wrapperClasses = classnames(
              "react-datepicker-wrapper",
              wrapperClassName
            );
            return React.createElement(
              Manager,
              null,
              React.createElement(Reference, null, function(_ref2) {
                var ref = _ref2.ref;
                return React.createElement(
                  "div",
                  {
                    ref: ref,
                    className: wrapperClasses
                  },
                  targetComponent
                );
              }),
              popper
            );
          }
        }
      ],
      [
        {
          key: "defaultProps",
          get: function get() {
            return {
              hidePopper: true,
              popperModifiers: {
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: true,
                  boundariesElement: "viewport"
                }
              },
              popperProps: {},
              popperPlacement: "bottom-start"
            };
          }
        }
      ]
    );

    return PopperComponent;
  })(React.Component);

var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
var WrappedCalendar = onClickOutside(Calendar); // Compares dates year+month combinations

function hasPreSelectionChanged(date1, date2) {
  if (date1 && date2) {
    return (
      getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2)
    );
  }

  return date1 !== date2;
}
/**
 * General datepicker component.
 */

var INPUT_ERR_1 = "Date input not valid.";

var DatePicker =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DatePicker, _React$Component);

    _createClass(DatePicker, null, [
      {
        key: "defaultProps",
        get: function get() {
          return {
            allowSameDay: false,
            dateFormat: "MM/dd/yyyy",
            dateFormatCalendar: "LLLL yyyy",
            onChange: function onChange() {},
            disabled: false,
            disabledKeyboardNavigation: false,
            dropdownMode: "scroll",
            onFocus: function onFocus() {},
            onBlur: function onBlur() {},
            onKeyDown: function onKeyDown() {},
            onInputClick: function onInputClick() {},
            onSelect: function onSelect() {},
            onClickOutside: function onClickOutside() {},
            onMonthChange: function onMonthChange() {},
            preventOpenOnFocus: false,
            onYearChange: function onYearChange() {},
            onInputError: function onInputError() {},
            monthsShown: 1,
            readOnly: false,
            withPortal: false,
            shouldCloseOnSelect: true,
            showTimeSelect: false,
            showTimeInput: false,
            showMonthYearPicker: false,
            strictParsing: false,
            timeIntervals: 30,
            timeCaption: "Time",
            previousMonthButtonLabel: "Previous Month",
            nextMonthButtonLabel: "Next Month",
            previousYearButtonLabel: "Previous Year",
            nextYearButtonLabel: "Next Year",
            timeInputLabel: "Time",
            renderDayContents: function renderDayContents(date) {
              return date;
            },
            inlineFocusSelectedMonth: false
          };
        }
      }
    ]);

    function DatePicker(props) {
      var _this;

      _classCallCheck(this, DatePicker);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(DatePicker).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "getPreSelection",
        function() {
          return _this.props.openToDate
            ? _this.props.openToDate
            : _this.props.selectsEnd && _this.props.startDate
            ? _this.props.startDate
            : _this.props.selectsStart && _this.props.endDate
            ? _this.props.endDate
            : newDate();
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "calcInitialState",
        function() {
          var defaultPreSelection = _this.getPreSelection();

          var minDate = getEffectiveMinDate(_this.props);
          var maxDate = getEffectiveMaxDate(_this.props);
          var boundedPreSelection =
            minDate && isBefore(defaultPreSelection, minDate)
              ? minDate
              : maxDate && isAfter(defaultPreSelection, maxDate)
              ? maxDate
              : defaultPreSelection;
          return {
            open: _this.props.startOpen || false,
            preventFocus: false,
            preSelection: _this.props.selected
              ? _this.props.selected
              : boundedPreSelection,
            // transforming highlighted days (perhaps nested array)
            // to flat Map for faster access in day.jsx
            highlightDates: getHightLightDaysMap(_this.props.highlightDates),
            focused: false
          };
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "clearPreventFocusTimeout",
        function() {
          if (_this.preventFocusTimeout) {
            clearTimeout(_this.preventFocusTimeout);
          }
        }
      );

      _defineProperty(_assertThisInitialized(_this), "setFocus", function() {
        if (_this.input && _this.input.focus) {
          _this.input.focus();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setBlur", function() {
        if (_this.input && _this.input.blur) {
          _this.input.blur();
        }

        _this.cancelFocusInput();
      });

      _defineProperty(_assertThisInitialized(_this), "setOpen", function(open) {
        var skipSetBlur =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : false;

        _this.setState(
          {
            open: open,
            preSelection:
              open && _this.state.open
                ? _this.state.preSelection
                : _this.calcInitialState().preSelection,
            lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
          },
          function() {
            if (!open) {
              _this.setState(
                function(prev) {
                  return {
                    focused: skipSetBlur ? prev.focused : false
                  };
                },
                function() {
                  !skipSetBlur && _this.setBlur();

                  _this.setState({
                    inputValue: null
                  });
                }
              );
            }
          }
        );
      });

      _defineProperty(_assertThisInitialized(_this), "inputOk", function() {
        return isDate(_this.state.preSelection);
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "isCalendarOpen",
        function() {
          return _this.props.open === undefined
            ? _this.state.open && !_this.props.disabled && !_this.props.readOnly
            : _this.props.open;
        }
      );

      _defineProperty(_assertThisInitialized(_this), "handleFocus", function(
        event
      ) {
        if (!_this.state.preventFocus) {
          _this.props.onFocus(event);

          if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) {
            _this.setOpen(true);
          }
        }

        _this.setState({
          focused: true
        });
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "cancelFocusInput",
        function() {
          clearTimeout(_this.inputFocusTimeout);
          _this.inputFocusTimeout = null;
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "deferFocusInput",
        function() {
          _this.cancelFocusInput();
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDropdownFocus",
        function() {
          _this.cancelFocusInput();
        }
      );

      _defineProperty(_assertThisInitialized(_this), "handleBlur", function(
        event
      ) {
        if (
          _this.state.open &&
          !_this.props.withPortal &&
          !_this.props.showTimeInput &&
          !_this.props.showTimeSelect
        ) {
          _this.deferFocusInput();
        } else {
          _this.props.onBlur(event);
        }

        _this.setState({
          focused: false
        });
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleCalendarClickOutside",
        function(event) {
          if (!_this.props.inline) {
            _this.setOpen(false);
          }

          _this.props.onClickOutside(event);

          if (_this.props.withPortal) {
            event.preventDefault();
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleChange",
        function() {
          for (
            var _len = arguments.length, allArgs = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            allArgs[_key] = arguments[_key];
          }

          var event = allArgs[0];

          if (_this.props.onChangeRaw) {
            _this.props.onChangeRaw.apply(
              _assertThisInitialized(_this),
              allArgs
            );

            if (
              typeof event.isDefaultPrevented !== "function" ||
              event.isDefaultPrevented()
            ) {
              return;
            }
          }

          _this.setState({
            inputValue: event.target.value,
            lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
          });

          var date = parseDate(
            event.target.value,
            _this.props.dateFormat,
            _this.props.locale,
            _this.props.strictParsing
          );

          if (date || !event.target.value) {
            _this.setSelected(date, event, true);
          }
        }
      );

      _defineProperty(_assertThisInitialized(_this), "handleSelect", function(
        date,
        event,
        monthSelectedIn
      ) {
        // Preventing onFocus event to fix issue
        // https://github.com/Hacker0x01/react-datepicker/issues/628
        _this.setState(
          {
            preventFocus: true
          },
          function() {
            _this.preventFocusTimeout = setTimeout(function() {
              return _this.setState({
                preventFocus: false
              });
            }, 50);
            return _this.preventFocusTimeout;
          }
        );

        _this.setSelected(date, event, undefined, monthSelectedIn);

        if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
          _this.setPreSelection(date);
        } else if (!_this.props.inline) {
          _this.setOpen(false);
        }

        if (_this.props.showTimeSelect) {
          setTimeout(function() {
            document
              .querySelector(
                ".react-datepicker__time-list-item > button:not([disabled])"
              )
              .focus();
          }, 100);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setSelected", function(
        date,
        event,
        keepInput,
        monthSelectedIn
      ) {
        var changedDate = date;

        if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
          return;
        }

        if (
          !isEqual(_this.props.selected, changedDate) ||
          _this.props.allowSameDay
        ) {
          if (changedDate !== null) {
            if (_this.props.selected) {
              var selected = _this.props.selected;
              if (keepInput) selected = newDate(changedDate);
              changedDate = setTime(changedDate, {
                hour: getHours(selected),
                minute: getMinutes(selected),
                second: getSeconds(selected)
              });
            }

            if (!_this.props.inline) {
              _this.setState({
                preSelection: changedDate
              });
            }

            if (
              _this.props.inline &&
              _this.props.monthsShown > 1 &&
              !_this.props.inlineFocusSelectedMonth
            ) {
              _this.setState({
                monthSelectedIn: monthSelectedIn
              });
            }
          }

          _this.props.onChange(changedDate, event);
        }

        _this.props.onSelect(changedDate, event);

        if (!keepInput) {
          _this.setState({
            inputValue: null
          });
        }
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "setPreSelection",
        function(date) {
          var hasMinDate = typeof _this.props.minDate !== "undefined";
          var hasMaxDate = typeof _this.props.maxDate !== "undefined";
          var isValidDateSelection = true;

          if (date) {
            if (hasMinDate && hasMaxDate) {
              isValidDateSelection = isDayInRange(
                date,
                _this.props.minDate,
                _this.props.maxDate
              );
            } else if (hasMinDate) {
              isValidDateSelection = isAfter(date, _this.props.minDate);
            } else if (hasMaxDate) {
              isValidDateSelection = isBefore(date, _this.props.maxDate);
            }
          }

          if (isValidDateSelection) {
            _this.setState({
              preSelection: date
            });
          }
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleTimeChange",
        function(time) {
          var selected = _this.props.selected
            ? _this.props.selected
            : _this.getPreSelection();
          var changedDate = setTime(selected, {
            hour: getHours(time),
            minute: getMinutes(time)
          });

          _this.setState({
            preSelection: changedDate
          });

          _this.props.onChange(changedDate);

          if (_this.props.shouldCloseOnSelect) {
            _this.setOpen(false);
          }

          if (_this.props.showTimeInput) {
            _this.setOpen(true);
          }

          _this.setState({
            inputValue: null
          });
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "onInputClick",
        function() {
          if (!_this.props.disabled && !_this.props.readOnly) {
            _this.setOpen(true);
          }

          _this.props.onInputClick();
        }
      );

      _defineProperty(_assertThisInitialized(_this), "closeDialog", function() {
        _this.setOpen(false);

        if (!_this.inputOk()) {
          _this.props.onInputError({
            code: 1,
            msg: INPUT_ERR_1
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(
        event
      ) {
        event.stopPropagation();

        _this.props.onKeyDown(event);

        var eventKey = event.key;

        if (
          !_this.state.open &&
          !_this.props.inline &&
          !_this.props.preventOpenOnFocus
        ) {
          if (eventKey === "ArrowDown" || eventKey === "ArrowUp") {
            _this.onInputClick();
          }

          return;
        }

        var copy = newDate(_this.state.preSelection);

        if (eventKey === "Enter") {
          event.preventDefault();

          if (
            _this.inputOk() &&
            _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE
          ) {
            _this.handleSelect(copy, event);

            !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
          } else {
            _this.setOpen(false);
          }
        } else if (eventKey === "Escape") {
          event.preventDefault();

          _this.closeDialog();
        } else if (eventKey === "Tab") {
          _this.setOpen(false, true);
        } else if (!_this.props.disabledKeyboardNavigation) {
          var newSelection;
          event.preventDefault();

          switch (eventKey) {
            case "ArrowLeft":
              newSelection = subDays(copy, 1);
              break;

            case "ArrowRight":
              newSelection = utils$1(copy, 1);
              break;

            case "ArrowUp":
              newSelection = subWeeks(copy, 1);
              break;

            case "ArrowDown":
              newSelection = utils$2(copy, 1);
              break;

            case "PageUp":
              newSelection = subMonths(copy, 1);
              break;

            case "PageDown":
              newSelection = addMonths(copy, 1);
              break;

            case "Home":
              newSelection = subYears(copy, 1);
              break;

            case "End":
              newSelection = addYears(copy, 1);
              break;
          }

          if (!newSelection) {
            if (_this.props.onInputError) {
              _this.props.onInputError({
                code: 1,
                msg: INPUT_ERR_1
              });
            }

            return; // Let the input component handle this keydown
          }

          _this.setState({
            lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
          });

          if (_this.props.adjustDateOnChange) {
            _this.setSelected(newSelection);
          }

          _this.setPreSelection(newSelection);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onClearClick", function(
        event
      ) {
        if (event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
        }

        _this.props.onChange(null, event);

        _this.setState({
          inputValue: null
        });
      });

      _defineProperty(_assertThisInitialized(_this), "clear", function() {
        _this.onClearClick();
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "renderCalendar",
        function() {
          if (!_this.props.inline && !_this.isCalendarOpen()) {
            return null;
          }

          return React.createElement(
            WrappedCalendar,
            {
              adjustDateOnChange: _this.props.adjustDateOnChange,
              className: _this.props.calendarClassName,
              closeDialog: _this.closeDialog,
              container: _this.props.calendarContainer,
              dateFormat: _this.props.dateFormatCalendar,
              dayClassName: _this.props.dayClassName,
              ariaDescribedBy: _this.props.calendarDialogAriaDescribedBy,
              disabledKeyboardNavigation:
                _this.props.disabledKeyboardNavigation,
              dropdownMode: _this.props.dropdownMode,
              endDate: _this.props.endDate,
              excludeDates: _this.props.excludeDates,
              excludeTimes: _this.props.excludeTimes,
              filterDate: _this.props.filterDate,
              fixedHeight: _this.props.fixedHeight,
              forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
              formatWeekDay: _this.props.formatWeekDay,
              formatWeekNumber: _this.props.formatWeekNumber,
              highlightDates: _this.state.highlightDates,
              includeDates: _this.props.includeDates,
              includeTimes: _this.props.includeTimes,
              injectTimes: _this.props.injectTimes,
              inline: _this.props.inline,
              locale: _this.props.locale,
              maxDate: _this.props.maxDate,
              maxTime: _this.props.maxTime,
              minDate: _this.props.minDate,
              minTime: _this.props.minTime,
              monthSelectedIn: _this.state.monthSelectedIn,
              monthsShown: _this.props.monthsShown,
              nextMonthButtonLabel: _this.props.nextMonthButtonLabel,
              nextYearButtonLabel: _this.props.nextYearButtonLabel,
              onClickOutside: _this.handleCalendarClickOutside,
              onDayMouseEnter: _this.props.onDayMouseEnter,
              onDropdownFocus: _this.handleDropdownFocus,
              onKeyDown: _this.onKeyDown,
              onMonthChange: _this.props.onMonthChange,
              onMonthMouseLeave: _this.props.onMonthMouseLeave,
              onSelect: _this.handleSelect,
              onTimeChange: _this.handleTimeChange,
              onWeekSelect: _this.props.onWeekSelect,
              onYearChange: _this.props.onYearChange,
              openToDate: _this.props.openToDate,
              outsideClickIgnoreClass: outsideClickIgnoreClass,
              peekNextMonth: _this.props.peekNextMonth,
              popperProps: _this.props.popperProps,
              preSelection: _this.state.preSelection,
              previousMonthButtonLabel: _this.props.previousMonthButtonLabel,
              previousYearButtonLabel: _this.props.previousYearButtonLabel,
              ref: function ref(elem) {
                return (_this.calendar = elem);
              },
              renderCustomHeader: _this.props.renderCustomHeader,
              renderDayContents: _this.props.renderDayContents,
              scrollableMonthYearDropdown:
                _this.props.scrollableMonthYearDropdown,
              scrollableYearDropdown: _this.props.scrollableYearDropdown,
              selected: _this.props.selected,
              selectsEnd: _this.props.selectsEnd,
              selectsStart: _this.props.selectsStart,
              setOpen: _this.setOpen,
              shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
              showDisabledMonthNavigation:
                _this.props.showDisabledMonthNavigation,
              showMonthDropdown: _this.props.showMonthDropdown,
              showMonthYearDropdown: _this.props.showMonthYearDropdown,
              showMonthYearPicker: _this.props.showMonthYearPicker,
              showTimeInput: _this.props.showTimeInput,
              showTimeSelect: _this.props.showTimeSelect,
              showTimeSelectOnly: _this.props.showTimeSelectOnly,
              showWeekNumbers: _this.props.showWeekNumbers,
              showYearDropdown: _this.props.showYearDropdown,
              startDate: _this.props.startDate,
              timeCaption: _this.props.timeCaption,
              timeFormat: _this.props.timeFormat,
              timeInputLabel: _this.props.timeInputLabel,
              timeIntervals: _this.props.timeIntervals,
              todayButton: _this.props.todayButton,
              useShortMonthInDropdown: _this.props.useShortMonthInDropdown,
              useWeekdaysShort: _this.props.useWeekdaysShort,
              weekLabel: _this.props.weekLabel,
              withPortal: _this.props.withPortal,
              yearDropdownItemNumber: _this.props.yearDropdownItemNumber
            },
            _this.props.children
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderDateInput",
        function() {
          var _React$cloneElement;

          var className = classnames(
            _this.props.className,
            _defineProperty({}, outsideClickIgnoreClass, _this.state.open)
          );
          var focused = _this.state.focused;
          var inputValue =
            typeof _this.props.value === "string"
              ? _this.props.value
              : typeof _this.state.inputValue === "string"
              ? _this.state.inputValue
              : safeDateFormat(_this.props.selected, _this.props);
          var customInput =
            _this.props.customInput ||
            React.createElement("input", {
              type: "text"
            });
          var customInputRef = _this.props.customInputRef || "ref"; // aria-hidden and readonly required so screenreader won't read input value on arrow keys press

          return React.cloneElement(
            customInput,
            ((_React$cloneElement = {}),
            _defineProperty(_React$cloneElement, customInputRef, function(
              input
            ) {
              _this.input = input;
            }),
            _defineProperty(_React$cloneElement, "aria-hidden", "true"),
            _defineProperty(
              _React$cloneElement,
              "autoComplete",
              _this.props.autoComplete
            ),
            _defineProperty(
              _React$cloneElement,
              "autoFocus",
              _this.props.autoFocus
            ),
            _defineProperty(
              _React$cloneElement,
              "className",
              customInput.props.className + " " + className
            ),
            _defineProperty(
              _React$cloneElement,
              "disabled",
              _this.props.disabled
            ),
            _defineProperty(_React$cloneElement, "id", _this.props.id),
            _defineProperty(_React$cloneElement, "name", _this.props.name),
            _defineProperty(_React$cloneElement, "onBlur", _this.handleBlur),
            _defineProperty(
              _React$cloneElement,
              "onChange",
              _this.handleChange
            ),
            _defineProperty(_React$cloneElement, "onClick", _this.onInputClick),
            _defineProperty(_React$cloneElement, "onFocus", _this.handleFocus),
            _defineProperty(_React$cloneElement, "onKeyDown", _this.onKeyDown),
            _defineProperty(
              _React$cloneElement,
              "placeholder",
              _this.props.placeholderText
            ),
            _defineProperty(_React$cloneElement, "readOnly", true),
            _defineProperty(
              _React$cloneElement,
              "required",
              _this.props.required
            ),
            _defineProperty(
              _React$cloneElement,
              "tabIndex",
              _this.props.tabIndex
            ),
            _defineProperty(_React$cloneElement, "title", _this.props.title),
            _defineProperty(_React$cloneElement, "value", inputValue),
            _React$cloneElement)
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "renderClearButton",
        function() {
          if (_this.props.isClearable && _this.props.selected != null) {
            return React.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon",
              onClick: _this.onClearClick,
              title: _this.props.clearButtonTitle,
              tabIndex: -1
            });
          } else {
            return null;
          }
        }
      );

      _this.state = _this.calcInitialState();
      return _this;
    }

    _createClass(DatePicker, [
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (
            prevProps.inline &&
            hasPreSelectionChanged(prevProps.selected, this.props.selected)
          ) {
            this.setPreSelection(this.props.selected);
          }

          if (
            this.state.monthSelectedIn !== undefined &&
            prevProps.monthsShown !== this.props.monthsShown
          ) {
            this.setState({
              monthSelectedIn: 0
            });
          }

          if (prevProps.highlightDates !== this.props.highlightDates) {
            this.setState({
              highlightDates: getHightLightDaysMap(this.props.highlightDates)
            });
          }

          if (
            !prevState.focused &&
            !isEqual(prevProps.selected, this.props.selected)
          ) {
            this.setState({
              inputValue: null
            });
          }
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.clearPreventFocusTimeout();
        }
      },
      {
        key: "render",
        value: function render() {
          var calendar = this.renderCalendar();

          if (this.props.inline && !this.props.withPortal) {
            return calendar;
          }

          if (this.props.withPortal) {
            return React.createElement(
              "div",
              null,
              !this.props.inline
                ? React.createElement(
                    "div",
                    {
                      className: "react-datepicker__input-container"
                    },
                    this.renderDateInput(),
                    this.renderClearButton()
                  )
                : null,
              this.state.open || this.props.inline
                ? React.createElement(
                    "div",
                    {
                      className: "react-datepicker__portal"
                    },
                    calendar
                  )
                : null
            );
          }

          return React.createElement(PopperComponent, {
            className: this.props.popperClassName,
            wrapperClassName: this.props.wrapperClassName,
            hidePopper: !this.isCalendarOpen(),
            popperModifiers: this.props.popperModifiers,
            targetComponent: React.createElement(
              "div",
              {
                className: "react-datepicker__input-container"
              },
              this.renderDateInput(),
              this.renderClearButton()
            ),
            popperContainer: this.props.popperContainer,
            popperComponent: calendar,
            popperPlacement: this.props.popperPlacement,
            popperProps: this.props.popperProps
          });
        }
      }
    ]);

    return DatePicker;
  })(React.Component);
var PRESELECT_CHANGE_VIA_INPUT = "input";
var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";

export default DatePicker;
export {
  CalendarContainer,
  getDefaultLocale,
  registerLocale,
  setDefaultLocale
};
