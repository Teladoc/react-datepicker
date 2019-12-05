import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  arrowProps,
  className,
  children,
  containerLabel
}) {
  return (
    <div
      className={className}
      aria-label={containerLabel}
      role="dialog"
      aria-modal="true"
    >
      <div className="react-datepicker__triangle" {...arrowProps} />
      {children}
    </div>
  );
}

CalendarContainer.defaultProps = {
  arrowProps: {},
  className: "",
  containerLabel: "Date Picker"
};

CalendarContainer.propTypes = {
  arrowProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  containerLabel: PropTypes.string
};
