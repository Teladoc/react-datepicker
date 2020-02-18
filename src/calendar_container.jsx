import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  "aria-describedBy": ariaDescribedBy,
  arrowProps = {},
  className,
  children,
  showPopperArrow
}) {
  return (
    <div
      className={className}
      aria-label="Date picker"
      aria-describedBy={ariaDescribedBy}
      role="dialog"
      aria-modal="true"
    >
      {showPopperArrow && (
        <div className="react-datepicker__triangle" {...arrowProps} />
      )}
      {children}
    </div>
  );
}

CalendarContainer.defaultProps = {
  arrowProps: {},
  className: ""
};

CalendarContainer.propTypes = {
  "aria-describedBy": PropTypes.string,
  arrowProps: PropTypes.object, // react-popper arrow props
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showPopperArrow: PropTypes.bool
};
