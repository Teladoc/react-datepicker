import React from "react";
import PropTypes from "prop-types";
import Day from "./day";
import WeekNumber from "./week_number";
import * as utils from "./date_utils";

export default class Week extends React.Component {
  static get defaultProps() {
    return {
      shouldCloseOnSelect: true
    };
  }
  static propTypes = {
    disabledKeyboardNavigation: PropTypes.bool,
    day: PropTypes.instanceOf(Date).isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.instanceOf(Date),
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
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
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    onDayFocus: PropTypes.func.isRequired,
    onDayMouseEnter: PropTypes.func,
    onKeyDown: PropTypes.func.isRequired,
    onWeekSelect: PropTypes.func,
    preSelection: PropTypes.instanceOf(Date),
    selected: PropTypes.instanceOf(Date),
    selectingDate: PropTypes.instanceOf(Date),
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumber: PropTypes.bool,
    startDate: PropTypes.instanceOf(Date),
    setOpen: PropTypes.func,
    shouldCloseOnSelect: PropTypes.bool,
    renderDayContents: PropTypes.func,
    handleOnKeyDown: PropTypes.func,
    isInputFocused: PropTypes.bool
  };

  handleDayClick = (day, event) => {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event);
    }
  };

  handleDayMouseEnter = day => {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day);
    }
  };

  handleWeekClick = (day, weekNumber, event) => {
    if (typeof this.props.onWeekSelect === "function") {
      this.props.onWeekSelect(day, weekNumber, event);
    }
    if (this.props.shouldCloseOnSelect) {
      this.props.setOpen(false);
    }
  };

  formatWeekNumber = date => {
    if (this.props.formatWeekNumber) {
      return this.props.formatWeekNumber(date);
    }
    return utils.getWeek(date);
  };

  renderDays = () => {
    const startOfWeek = utils.getStartOfWeek(this.props.day, this.props.locale);
    const days = [];
    const weekNumber = this.formatWeekNumber(startOfWeek);
    if (this.props.showWeekNumber) {
      const onClickAction = this.props.onWeekSelect
        ? this.handleWeekClick.bind(this, startOfWeek, weekNumber)
        : undefined;
      days.push(
        <WeekNumber key="W" weekNumber={weekNumber} onClick={onClickAction} />
      );
    }
    return days.concat(
      [0, 1, 2, 3, 4, 5, 6].map(offset => {
        const day = utils.addDays(startOfWeek, offset);
        return (
          <Day
            key={day.valueOf()}
            day={day}
            dayClassName={this.props.dayClassName}
            disabledKeyboardNavigation={this.props.disabledKeyboardNavigation}
            endDate={this.props.endDate}
            excludeDates={this.props.excludeDates}
            filterDate={this.props.filterDate}
            handleOnKeyDown={this.props.handleOnKeyDown}
            highlightDates={this.props.highlightDates}
            includeDates={this.props.includeDates}
            inline={this.props.inline}
            isInputFocused={this.props.isInputFocused}
            locale={this.props.locale}
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            month={this.props.month}
            onClick={this.handleDayClick.bind(this, day)}
            onDayFocus={this.props.onDayFocus}
            onKeyDown={this.props.onKeyDown}
            onMouseEnter={this.handleDayMouseEnter.bind(this, day)}
            preSelection={this.props.preSelection}
            renderDayContents={this.props.renderDayContents}
            selected={this.props.selected}
            selectingDate={this.props.selectingDate}
            selectsEnd={this.props.selectsEnd}
            selectsStart={this.props.selectsStart}
            startDate={this.props.startDate}
          />
        );
      })
    );
  };

  render() {
    return <div className="react-datepicker__week">{this.renderDays()}</div>;
  }
}
