'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _dates = _interopRequireDefault(require('./utils/dates'))

var _Week = _interopRequireDefault(require('./Week'))

var _TimeGrid = _interopRequireDefault(require('./TimeGrid'))

function workWeekRange(date, _ref) {
  var workWeekStart = _ref.workWeekStart

  var start = _dates.default.startOf(date, 'week', workWeekStart)

  var end = _dates.default.endOf(date, 'week', workWeekStart)

  return _dates.default.range(start, end).slice(0, 5)
}

var WorkWeek =
  /*#__PURE__*/
  (function(_React$Component) {
    ;(0, _inheritsLoose2.default)(WorkWeek, _React$Component)

    function WorkWeek() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = WorkWeek.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        date = _this$props.date,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, [
          'date',
        ])
      var range = workWeekRange(date, this.props)
      return _react.default.createElement(
        _TimeGrid.default,
        (0, _extends2.default)({}, props, {
          range: range,
          eventOffset: 15,
        })
      )
    }

    return WorkWeek
  })(_react.default.Component)

WorkWeek.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired,
}
WorkWeek.defaultProps = _TimeGrid.default.defaultProps
WorkWeek.range = workWeekRange
WorkWeek.navigate = _Week.default.navigate

WorkWeek.title = function(date, _ref2) {
  var localizer = _ref2.localizer,
    workWeekStart = _ref2.workWeekStart

  var _workWeekRange = workWeekRange(date, {
      workWeekStart: workWeekStart,
    }),
    start = _workWeekRange[0],
    rest = _workWeekRange.slice(1)

  return localizer.format(
    {
      start: start,
      end: rest.pop(),
    },
    'dayRangeHeaderFormat'
  )
}

var _default = WorkWeek
exports.default = _default
module.exports = exports['default']
