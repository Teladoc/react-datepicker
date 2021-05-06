import React from "react";
import PropTypes from "prop-types";
import Calendar from "./calendar";
import PopperComponent, { popperPlacementPositions } from "./popper_component";
import classnames from "classnames";
import {
  newDate,
  isDate,
  isBefore,
  isAfter,
  isEqual,
  setTime,
  getSeconds,
  getMinutes,
  getHours,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  subDays,
  subMonths,
  subWeeks,
  subYears,
  isDayDisabled,
  isDayInRange,
  getEffectiveMinDate,
  getEffectiveMaxDate,
  parseDate,
  safeDateFormat,
  getHightLightDaysMap,
  getYear,
  getMonth,
  registerLocale,
  setDefaultLocale,
  getDefaultLocale
} from "./date_utils";
import onClickOutside from "react-onclickoutside";

export { default as CalendarContainer } from "./calendar_container";

export { registerLocale, setDefaultLocale, getDefaultLocale };

const outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
const WrappedCalendar = onClickOutside(Calendar);

// Compares dates year+month combinations
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
const INPUT_ERR_1 = "Date input not valid.";

export default class DatePicker extends React.Component {
  static propTypes = {
    adjustDateOnChange: PropTypes.bool,
    allowSameDay: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    calendarClassName: PropTypes.string,
    calendarContainer: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    calendarDialogAriaDescribedBy: PropTypes.string,
    customInput: PropTypes.element,
    customInputRef: PropTypes.string,
    dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    dateFormatCalendar: PropTypes.string,
    dayClassName: PropTypes.func,
    disabled: PropTypes.bool,
    disabledKeyboardNavigation: PropTypes.bool,
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    endDate: PropTypes.instanceOf(Date),
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.array,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    includeTimes: PropTypes.array,
    injectTimes: PropTypes.array,
    inline: PropTypes.bool,
    isClearable: PropTypes.bool,
    locale: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ locale: PropTypes.object })
    ]),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    monthsShown: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onTimeChange: PropTypes.func,
    onSelect: PropTypes.func,
    onWeekSelect: PropTypes.func,
    onClickOutside: PropTypes.func,
    onChangeRaw: PropTypes.func,
    onFocus: PropTypes.func,
    onInputClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMonthChange: PropTypes.func,
    onYearChange: PropTypes.func,
    onInputError: PropTypes.func,
    open: PropTypes.bool,
    openToDate: PropTypes.instanceOf(Date),
    peekNextMonth: PropTypes.bool,
    placeholderText: PropTypes.string,
    popperContainer: PropTypes.func,
    popperClassName: PropTypes.string, // <PopperComponent/> props
    popperModifiers: PropTypes.object, // <PopperComponent/> props
    popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <PopperComponent/> props
    popperProps: PropTypes.object,
    preventOpenOnFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    scrollableMonthYearDropdown: PropTypes.bool,
    selected: PropTypes.instanceOf(Date),
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showMonthYearDropdown: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    strictParsing: PropTypes.bool,
    forceShowMonthNavigation: PropTypes.bool,
    showDisabledMonthNavigation: PropTypes.bool,
    startDate: PropTypes.instanceOf(Date),
    startOpen: PropTypes.bool,
    tabIndex: PropTypes.number,
    timeCaption: PropTypes.string,
    title: PropTypes.string,
    todayButton: PropTypes.node,
    useWeekdaysShort: PropTypes.bool,
    formatWeekDay: PropTypes.func,
    value: PropTypes.string,
    weekLabel: PropTypes.string,
    withPortal: PropTypes.bool,
    yearDropdownItemNumber: PropTypes.number,
    shouldCloseOnSelect: PropTypes.bool,
    showTimeInput: PropTypes.bool,
    showMonthYearPicker: PropTypes.bool,
    showTimeSelect: PropTypes.bool,
    showTimeSelectOnly: PropTypes.bool,
    timeFormat: PropTypes.string,
    timeIntervals: PropTypes.number,
    minTime: PropTypes.instanceOf(Date),
    maxTime: PropTypes.instanceOf(Date),
    excludeTimes: PropTypes.array,
    useShortMonthInDropdown: PropTypes.bool,
    clearButtonTitle: PropTypes.string,
    previousMonthButtonLabel: PropTypes.string,
    nextMonthButtonLabel: PropTypes.string,
    previousYearButtonLabel: PropTypes.string,
    nextYearButtonLabel: PropTypes.string,
    timeInputLabel: PropTypes.string,
    renderCustomHeader: PropTypes.func,
    renderDayContents: PropTypes.func,
    wrapperClassName: PropTypes.string,
    inlineFocusSelectedMonth: PropTypes.bool,
    onDayMouseEnter: PropTypes.func,
    onMonthMouseLeave: PropTypes.func
  };

  static get defaultProps() {
    return {
      allowSameDay: false,
      dateFormat: "MM/dd/yyyy",
      dateFormatCalendar: "LLLL yyyy",
      onChange() {},
      disabled: false,
      disabledKeyboardNavigation: false,
      dropdownMode: "scroll",
      onFocus() {},
      onBlur() {},
      onKeyDown() {},
      onInputClick() {},
      onSelect() {},
      onClickOutside() {},
      onMonthChange() {},
      preventOpenOnFocus: false,
      onYearChange() {},
      onInputError() {},
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

      renderDayContents(date) {
        return date;
      },
      inlineFocusSelectedMonth: false
    };
  }

  constructor(props) {
    super(props);
    this.state = this.calcInitialState();
  }

  componentDidUpdate(prevProps, prevState) {
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
      this.setState({ monthSelectedIn: 0 });
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
      this.setState({ inputValue: null });
    }
  }

  componentWillUnmount() {
    this.clearPreventFocusTimeout();
  }

  getPreSelection = () =>
    this.props.openToDate
      ? this.props.openToDate
      : this.props.selectsEnd && this.props.startDate
      ? this.props.startDate
      : this.props.selectsStart && this.props.endDate
      ? this.props.endDate
      : newDate();

  calcInitialState = () => {
    const defaultPreSelection = this.getPreSelection();
    const minDate = getEffectiveMinDate(this.props);
    const maxDate = getEffectiveMaxDate(this.props);
    const boundedPreSelection =
      minDate && isBefore(defaultPreSelection, minDate)
        ? minDate
        : maxDate && isAfter(defaultPreSelection, maxDate)
        ? maxDate
        : defaultPreSelection;
    return {
      open: this.props.startOpen || false,
      preventFocus: false,
      preSelection: this.props.selected
        ? this.props.selected
        : boundedPreSelection,
      // transforming highlighted days (perhaps nested array)
      // to flat Map for faster access in day.jsx
      highlightDates: getHightLightDaysMap(this.props.highlightDates),
      focused: false
    };
  };

  clearPreventFocusTimeout = () => {
    if (this.preventFocusTimeout) {
      clearTimeout(this.preventFocusTimeout);
    }
  };

  setFocus = () => {
    if (this.input && this.input.focus) {
      this.input.focus();
    }
  };

  setBlur = () => {
    if (this.input && this.input.blur) {
      this.input.blur();
    }

    this.cancelFocusInput();
  };

  setOpen = (open, skipSetBlur = false) => {
    this.setState(
      {
        open: open,
        preSelection:
          open && this.state.open
            ? this.state.preSelection
            : this.calcInitialState().preSelection,
        lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
      },
      () => {
        if (!open) {
          this.setState(
            prev => ({
              focused: skipSetBlur ? prev.focused : false
            }),
            () => {
              !skipSetBlur && this.setBlur();

              this.setState({ inputValue: null });
            }
          );
        }
      }
    );
  };
  inputOk = () => isDate(this.state.preSelection);

  isCalendarOpen = () =>
    this.props.open === undefined
      ? this.state.open && !this.props.disabled && !this.props.readOnly
      : this.props.open;

  handleFocus = event => {
    if (!this.state.preventFocus) {
      this.props.onFocus(event);
      if (!this.props.preventOpenOnFocus && !this.props.readOnly) {
        this.setOpen(true);
      }
    }
    this.setState({ focused: true });
  };

  cancelFocusInput = () => {
    clearTimeout(this.inputFocusTimeout);
    this.inputFocusTimeout = null;
  };

  deferFocusInput = () => {
    this.cancelFocusInput();
  };

  handleDropdownFocus = () => {
    this.cancelFocusInput();
  };

  handleBlur = event => {
    if (
      this.state.open &&
      !this.props.withPortal &&
      !this.props.showTimeInput &&
      !this.props.showTimeSelect
    ) {
      this.deferFocusInput();
    } else {
      this.props.onBlur(event);
    }
    this.setState({ focused: false });
  };

  handleCalendarClickOutside = event => {
    if (!this.props.inline) {
      this.setOpen(false);
    }
    this.props.onClickOutside(event);
    if (this.props.withPortal) {
      event.preventDefault();
    }
  };

  handleChange = (...allArgs) => {
    let event = allArgs[0];
    if (this.props.onChangeRaw) {
      this.props.onChangeRaw.apply(this, allArgs);
      if (
        typeof event.isDefaultPrevented !== "function" ||
        event.isDefaultPrevented()
      ) {
        return;
      }
    }
    this.setState({
      inputValue: event.target.value,
      lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
    });
    const date = parseDate(
      event.target.value,
      this.props.dateFormat,
      this.props.locale,
      this.props.strictParsing
    );
    if (date || !event.target.value) {
      this.setSelected(date, event, true);
    }
  };

  handleSelect = (date, event, monthSelectedIn) => {
    // Preventing onFocus event to fix issue
    // https://github.com/Hacker0x01/react-datepicker/issues/628
    this.setState({ preventFocus: true }, () => {
      this.preventFocusTimeout = setTimeout(
        () => this.setState({ preventFocus: false }),
        50
      );
      return this.preventFocusTimeout;
    });
    this.setSelected(date, event, undefined, monthSelectedIn);
    if (!this.props.shouldCloseOnSelect || this.props.showTimeSelect) {
      this.setPreSelection(date);
    } else if (!this.props.inline) {
      this.setOpen(false);
    }

    if (this.props.showTimeSelect) {
      setTimeout(() => {
        document
          .querySelector(
            ".react-datepicker__time-list-item > button:not([disabled])"
          )
          .focus();
      }, 100);
    }
  };

  setSelected = (date, event, keepInput, monthSelectedIn) => {
    let changedDate = date;

    if (changedDate !== null && isDayDisabled(changedDate, this.props)) {
      return;
    }

    if (!isEqual(this.props.selected, changedDate) || this.props.allowSameDay) {
      if (changedDate !== null) {
        if (this.props.selected) {
          let selected = this.props.selected;
          if (keepInput) selected = newDate(changedDate);
          changedDate = setTime(changedDate, {
            hour: getHours(selected),
            minute: getMinutes(selected),
            second: getSeconds(selected)
          });
        }
        if (!this.props.inline) {
          this.setState({
            preSelection: changedDate
          });
        }
        if (
          this.props.inline &&
          this.props.monthsShown > 1 &&
          !this.props.inlineFocusSelectedMonth
        ) {
          this.setState({ monthSelectedIn: monthSelectedIn });
        }
      }
      this.props.onChange(changedDate, event);
    }

    this.props.onSelect(changedDate, event);

    if (!keepInput) {
      this.setState({ inputValue: null });
    }
  };

  setPreSelection = date => {
    const hasMinDate = typeof this.props.minDate !== "undefined";
    const hasMaxDate = typeof this.props.maxDate !== "undefined";
    let isValidDateSelection = true;
    if (date) {
      if (hasMinDate && hasMaxDate) {
        isValidDateSelection = isDayInRange(
          date,
          this.props.minDate,
          this.props.maxDate
        );
      } else if (hasMinDate) {
        isValidDateSelection = isAfter(date, this.props.minDate);
      } else if (hasMaxDate) {
        isValidDateSelection = isBefore(date, this.props.maxDate);
      }
    }
    if (isValidDateSelection) {
      this.setState({
        preSelection: date
      });
    }
  };

  handleTimeChange = time => {
    const selected = this.props.selected
      ? this.props.selected
      : this.getPreSelection();
    let changedDate = setTime(selected, {
      hour: getHours(time),
      minute: getMinutes(time)
    });

    this.setState({
      preSelection: changedDate
    });

    this.props.onChange(changedDate);
    if (this.props.onTimeChange) {
      this.props.onTimeChange(changedDate);
    }
    if (this.props.shouldCloseOnSelect) {
      this.setOpen(false);
    }
    if (this.props.showTimeInput) {
      this.setOpen(true);
    }
    this.setState({ inputValue: null });
  };

  onInputClick = () => {
    if (!this.props.disabled && !this.props.readOnly) {
      this.setOpen(true);
    }

    this.props.onInputClick();
  };

  closeDialog = () => {
    this.setOpen(false);
    if (!this.inputOk()) {
      this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
    }
  };

  onKeyDown = event => {
    event.stopPropagation();
    this.props.onKeyDown(event);
    const eventKey = event.key;
    if (
      !this.state.open &&
      !this.props.inline &&
      !this.props.preventOpenOnFocus
    ) {
      if (eventKey === "ArrowDown" || eventKey === "ArrowUp") {
        this.onInputClick();
      }
      return;
    }
    const copy = newDate(this.state.preSelection);
    if (eventKey === "Enter") {
      event.preventDefault();
      if (
        this.inputOk() &&
        this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE
      ) {
        this.handleSelect(copy, event);
        !this.props.shouldCloseOnSelect && this.setPreSelection(copy);
      } else {
        this.setOpen(false);
      }
    } else if (eventKey === "Escape") {
      event.preventDefault();
      this.closeDialog();
    } else if (eventKey === "Tab") {
      this.setOpen(false, true);
    } else if (!this.props.disabledKeyboardNavigation) {
      let newSelection;
      event.preventDefault();
      switch (eventKey) {
        case "ArrowLeft":
          newSelection = subDays(copy, 1);
          break;
        case "ArrowRight":
          newSelection = addDays(copy, 1);
          break;
        case "ArrowUp":
          newSelection = subWeeks(copy, 1);
          break;
        case "ArrowDown":
          newSelection = addWeeks(copy, 1);
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
        if (this.props.onInputError) {
          this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
        }
        return; // Let the input component handle this keydown
      }
      this.setState({ lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE });
      if (this.props.adjustDateOnChange) {
        this.setSelected(newSelection);
      }
      this.setPreSelection(newSelection);
    }
  };

  onClearClick = event => {
    if (event) {
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
    this.props.onChange(null, event);
    this.setState({ inputValue: null });
  };

  clear = () => {
    this.onClearClick();
  };

  renderCalendar = () => {
    if (!this.props.inline && !this.isCalendarOpen()) {
      return null;
    }
    return (
      <WrappedCalendar
        adjustDateOnChange={this.props.adjustDateOnChange}
        className={this.props.calendarClassName}
        closeDialog={this.closeDialog}
        container={this.props.calendarContainer}
        dateFormat={this.props.dateFormatCalendar}
        dayClassName={this.props.dayClassName}
        ariaDescribedBy={this.props.calendarDialogAriaDescribedBy}
        disabledKeyboardNavigation={this.props.disabledKeyboardNavigation}
        dropdownMode={this.props.dropdownMode}
        endDate={this.props.endDate}
        excludeDates={this.props.excludeDates}
        excludeTimes={this.props.excludeTimes}
        filterDate={this.props.filterDate}
        fixedHeight={this.props.fixedHeight}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        formatWeekDay={this.props.formatWeekDay}
        formatWeekNumber={this.props.formatWeekNumber}
        highlightDates={this.state.highlightDates}
        includeDates={this.props.includeDates}
        includeTimes={this.props.includeTimes}
        injectTimes={this.props.injectTimes}
        inline={this.props.inline}
        locale={this.props.locale}
        maxDate={this.props.maxDate}
        maxTime={this.props.maxTime}
        minDate={this.props.minDate}
        minTime={this.props.minTime}
        monthSelectedIn={this.state.monthSelectedIn}
        monthsShown={this.props.monthsShown}
        nextMonthButtonLabel={this.props.nextMonthButtonLabel}
        nextYearButtonLabel={this.props.nextYearButtonLabel}
        onClickOutside={this.handleCalendarClickOutside}
        onDayMouseEnter={this.props.onDayMouseEnter}
        onDropdownFocus={this.handleDropdownFocus}
        onKeyDown={this.onKeyDown}
        onMonthChange={this.props.onMonthChange}
        onMonthMouseLeave={this.props.onMonthMouseLeave}
        onSelect={this.handleSelect}
        onTimeChange={this.handleTimeChange}
        onWeekSelect={this.props.onWeekSelect}
        onYearChange={this.props.onYearChange}
        openToDate={this.props.openToDate}
        outsideClickIgnoreClass={outsideClickIgnoreClass}
        peekNextMonth={this.props.peekNextMonth}
        popperProps={this.props.popperProps}
        preSelection={this.state.preSelection}
        previousMonthButtonLabel={this.props.previousMonthButtonLabel}
        previousYearButtonLabel={this.props.previousYearButtonLabel}
        ref={elem => (this.calendar = elem)}
        renderCustomHeader={this.props.renderCustomHeader}
        renderDayContents={this.props.renderDayContents}
        scrollableMonthYearDropdown={this.props.scrollableMonthYearDropdown}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        selected={this.props.selected}
        selectsEnd={this.props.selectsEnd}
        selectsStart={this.props.selectsStart}
        setOpen={this.setOpen}
        shouldCloseOnSelect={this.props.shouldCloseOnSelect}
        showDisabledMonthNavigation={this.props.showDisabledMonthNavigation}
        showMonthDropdown={this.props.showMonthDropdown}
        showMonthYearDropdown={this.props.showMonthYearDropdown}
        showMonthYearPicker={this.props.showMonthYearPicker}
        showTimeInput={this.props.showTimeInput}
        showTimeSelect={this.props.showTimeSelect}
        showTimeSelectOnly={this.props.showTimeSelectOnly}
        showWeekNumbers={this.props.showWeekNumbers}
        showYearDropdown={this.props.showYearDropdown}
        startDate={this.props.startDate}
        timeCaption={this.props.timeCaption}
        timeFormat={this.props.timeFormat}
        timeInputLabel={this.props.timeInputLabel}
        timeIntervals={this.props.timeIntervals}
        todayButton={this.props.todayButton}
        useShortMonthInDropdown={this.props.useShortMonthInDropdown}
        useWeekdaysShort={this.props.useWeekdaysShort}
        weekLabel={this.props.weekLabel}
        withPortal={this.props.withPortal}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber}
      >
        {this.props.children}
      </WrappedCalendar>
    );
  };

  renderDateInput = () => {
    const className = classnames(this.props.className, {
      [outsideClickIgnoreClass]: this.state.open
    });
    const { focused } = this.state;

    const inputValue =
      typeof this.props.value === "string"
        ? this.props.value
        : typeof this.state.inputValue === "string"
        ? this.state.inputValue
        : safeDateFormat(this.props.selected, this.props);

    const customInput = this.props.customInput || <input type="text" />;
    const customInputRef = this.props.customInputRef || "ref";

    // aria-hidden and readonly required so screenreader won't read input value on arrow keys press
    return React.cloneElement(customInput, {
      [customInputRef]: input => {
        this.input = input;
      },
      "aria-hidden": "true",
      autoComplete: this.props.autoComplete,
      autoFocus: this.props.autoFocus,
      className: customInput.props.className + " " + className,
      disabled: this.props.disabled,
      id: this.props.id,
      name: this.props.name,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onClick: this.onInputClick,
      onFocus: this.handleFocus,
      onKeyDown: this.onKeyDown,
      placeholder: this.props.placeholderText,
      readOnly: true,
      required: this.props.required,
      tabIndex: this.props.tabIndex,
      title: this.props.title,
      value: inputValue
    });
  };

  renderClearButton = () => {
    if (this.props.isClearable && this.props.selected != null) {
      return (
        <button
          type="button"
          className="react-datepicker__close-icon"
          onClick={this.onClearClick}
          title={this.props.clearButtonTitle}
          tabIndex={-1}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    const calendar = this.renderCalendar();

    if (this.props.inline && !this.props.withPortal) {
      return calendar;
    }

    if (this.props.withPortal) {
      return (
        <div>
          {!this.props.inline ? (
            <div className="react-datepicker__input-container">
              {this.renderDateInput()}
              {this.renderClearButton()}
            </div>
          ) : null}
          {this.state.open || this.props.inline ? (
            <div className="react-datepicker__portal">{calendar}</div>
          ) : null}
        </div>
      );
    }

    return (
      <div role="application">
        <PopperComponent
          className={this.props.popperClassName}
          wrapperClassName={this.props.wrapperClassName}
          hidePopper={!this.isCalendarOpen()}
          popperModifiers={this.props.popperModifiers}
          targetComponent={
            <div className="react-datepicker__input-container">
              {this.renderDateInput()}
              {this.renderClearButton()}
            </div>
          }
          popperContainer={this.props.popperContainer}
          popperComponent={calendar}
          popperPlacement={this.props.popperPlacement}
          popperProps={this.props.popperProps}
        />
      </div>
    );
  }
}

const PRESELECT_CHANGE_VIA_INPUT = "input";
const PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
