import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Week from "./week";
import * as utils from "./date_utils";

const FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

export default class Month extends React.Component {
  static propTypes = {
    disabledKeyboardNavigation: PropTypes.bool,
    day: PropTypes.instanceOf(Date).isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.instanceOf(Date),
    orderInDisplay: PropTypes.number,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.instanceOf(Map),
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    locale: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ locale: PropTypes.object })
    ]),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onDayClick: PropTypes.func,
    onDayFocus: PropTypes.func.isRequired,
    onDayMouseEnter: PropTypes.func,
    onKeyDown: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func,
    onWeekSelect: PropTypes.func,
    peekNextMonth: PropTypes.bool,
    preSelection: PropTypes.instanceOf(Date),
    selected: PropTypes.instanceOf(Date),
    selectingDate: PropTypes.instanceOf(Date),
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    startDate: PropTypes.instanceOf(Date),
    setOpen: PropTypes.func,
    shouldCloseOnSelect: PropTypes.bool,
    renderDayContents: PropTypes.func,
    showMonthYearPicker: PropTypes.bool,
    showQuarterYearPicker: PropTypes.bool,
    handleOnKeyDown: PropTypes.func,
    isInputFocused: PropTypes.bool
  };

  handleDayClick = (day, event) => {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event, this.props.orderInDisplay);
    }
  };

  handleDayMouseEnter = day => {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day);
    }
  };

  handleMouseLeave = () => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave();
    }
  };

  isRangeStartMonth = m => {
    const { day, startDate, endDate } = this.props;
    if (!startDate || !endDate) {
      return false;
    }
    return utils.isSameMonth(utils.setMonth(day, m), startDate);
  };

  isRangeStartQuarter = q => {
    const { day, startDate, endDate } = this.props;
    if (!startDate || !endDate) {
      return false;
    }
    return utils.isSameQuarter(utils.setQuarter(day, q), startDate);
  };

  isRangeEndMonth = m => {
    const { day, startDate, endDate } = this.props;
    if (!startDate || !endDate) {
      return false;
    }
    return utils.isSameMonth(utils.setMonth(day, m), endDate);
  };

  isRangeEndQuarter = q => {
    const { day, startDate, endDate } = this.props;
    if (!startDate || !endDate) {
      return false;
    }
    return utils.isSameQuarter(utils.setQuarter(day, q), endDate);
  };

  isWeekInMonth = startOfWeek => {
    const day = this.props.day;
    const endOfWeek = utils.addDays(startOfWeek, 6);
    return (
      utils.isSameMonth(startOfWeek, day) || utils.isSameMonth(endOfWeek, day)
    );
  };

  renderWeeks = () => {
    const weeks = [];
    var isFixedHeight = this.props.fixedHeight;
    let currentWeekStart = utils.getStartOfWeek(
      utils.getStartOfMonth(this.props.day),
      this.props.locale
    );
    let i = 0;
    let breakAfterNextPush = false;

    while (true) {
      weeks.push(
        <Week
          day={currentWeekStart}
          dayClassName={this.props.dayClassName}
          disabledKeyboardNavigation={this.props.disabledKeyboardNavigation}
          endDate={this.props.endDate}
          excludeDates={this.props.excludeDates}
          filterDate={this.props.filterDate}
          formatWeekNumber={this.props.formatWeekNumber}
          handleOnKeyDown={this.props.handleOnKeyDown}
          highlightDates={this.props.highlightDates}
          includeDates={this.props.includeDates}
          inline={this.props.inline}
          isInputFocused={this.props.isInputFocused}
          key={i}
          locale={this.props.locale}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          month={utils.getMonth(this.props.day)}
          onDayClick={this.handleDayClick}
          onDayFocus={this.props.onDayFocus}
          onDayMouseEnter={this.handleDayMouseEnter}
          onKeyDown={this.props.onKeyDown}
          onWeekSelect={this.props.onWeekSelect}
          preSelection={this.props.preSelection}
          renderDayContents={this.props.renderDayContents}
          selected={this.props.selected}
          selectingDate={this.props.selectingDate}
          selectsEnd={this.props.selectsEnd}
          selectsStart={this.props.selectsStart}
          setOpen={this.props.setOpen}
          shouldCloseOnSelect={this.props.shouldCloseOnSelect}
          showWeekNumber={this.props.showWeekNumbers}
          startDate={this.props.startDate}
        />
      );

      if (breakAfterNextPush) break;

      i++;
      currentWeekStart = utils.addWeeks(currentWeekStart, 1);

      // If one of these conditions is true, we will either break on this week
      // or break on the next week
      const isFixedAndFinalWeek =
        isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
      const isNonFixedAndOutOfMonth =
        !isFixedHeight && !this.isWeekInMonth(currentWeekStart);

      if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
        if (this.props.peekNextMonth) {
          breakAfterNextPush = true;
        } else {
          break;
        }
      }
    }

    return weeks;
  };

  onMonthClick = (e, m) => {
    this.handleDayClick(
      utils.getStartOfMonth(utils.setMonth(this.props.day, m)),
      e
    );
  };

  onQuarterClick = (e, q) => {
    this.handleDayClick(
      utils.getStartOfQuarter(utils.setQuarter(this.props.day, q)),
      e
    );
  };

  getMonthClassNames = m => {
    const { day, startDate, endDate, selected, minDate, maxDate } = this.props;
    return classnames(
      "react-datepicker__month-text",
      `react-datepicker__month-${m}`,
      {
        "react-datepicker__month--disabled":
          (minDate || maxDate) &&
          utils.isMonthDisabled(utils.setMonth(day, m), this.props),
        "react-datepicker__month--selected":
          utils.getMonth(day) === m &&
          utils.getYear(day) === utils.getYear(selected),
        "react-datepicker__month--in-range": utils.isMonthinRange(
          startDate,
          endDate,
          m,
          day
        ),
        "react-datepicker__month--range-start": this.isRangeStartMonth(m),
        "react-datepicker__month--range-end": this.isRangeEndMonth(m)
      }
    );
  };

  getQuarterClassNames = q => {
    const { day, startDate, endDate, selected, minDate, maxDate } = this.props;
    return classnames(
      "react-datepicker__quarter-text",
      `react-datepicker__quarter-${q}`,
      {
        "react-datepicker__quarter--disabled":
          (minDate || maxDate) &&
          utils.isQuarterDisabled(utils.setQuarter(day, q), this.props),
        "react-datepicker__quarter--selected":
          utils.getQuarter(day) === q &&
          utils.getYear(day) === utils.getYear(selected),
        "react-datepicker__quarter--in-range": utils.isQuarterInRange(
          startDate,
          endDate,
          q,
          day
        ),
        "react-datepicker__quarter--range-start": this.isRangeStartQuarter(q),
        "react-datepicker__quarter--range-end": this.isRangeEndQuarter(q)
      }
    );
  };

  renderMonths = () => {
    const months = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11]
    ];
    return months.map((month, i) => (
      <div className="react-datepicker__month-wrapper" key={i}>
        {month.map((m, j) => (
          <div
            key={j}
            onClick={ev => {
              this.onMonthClick(ev, m);
            }}
            className={this.getMonthClassNames(m)}
          >
            {utils.getMonthShortInLocale(m, this.props.locale)}
          </div>
        ))}
      </div>
    ));
  };

  renderQuarters = () => {
    const quarters = [1, 2, 3, 4];
    return (
      <div className="react-datepicker__quarter-wrapper">
        {quarters.map((q, j) => (
          <div
            key={j}
            onClick={ev => {
              this.onQuarterClick(ev, q);
            }}
            className={this.getQuarterClassNames(q)}
          >
            {utils.getQuarterShortInLocale(q, this.props.locale)}
          </div>
        ))}
      </div>
    );
  };

  getClassNames = () => {
    const {
      selectingDate,
      selectsStart,
      selectsEnd,
      showMonthYearPicker,
      showQuarterYearPicker
    } = this.props;
    return classnames(
      "react-datepicker__month",
      {
        "react-datepicker__month--selecting-range":
          selectingDate && (selectsStart || selectsEnd)
      },
      { "react-datepicker__monthPicker": showMonthYearPicker },
      { "react-datepicker__quarterPicker": showQuarterYearPicker }
    );
  };

  render() {
    const { showMonthYearPicker, showQuarterYearPicker } = this.props;
    return (
      <div
        className={this.getClassNames()}
        onMouseLeave={this.handleMouseLeave}
        role="listbox"
      >
        {showMonthYearPicker
          ? this.renderMonths()
          : showQuarterYearPicker
          ? this.renderQuarters()
          : this.renderWeeks()}
      </div>
    );
  }
}
