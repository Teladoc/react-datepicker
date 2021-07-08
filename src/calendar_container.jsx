import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  arrowProps,
  className,
  children,
  showPopperArrow,
  "aria-describedBy": ariaDescribedBy
}) {
  return (
    <div
      className={className}
      aria-label="Date picker"
      aria-describedby={ariaDescribedBy}
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  arrowProps: PropTypes.object, // react-popper arrow props
  showPopperArrow: PropTypes.bool,
  "aria-describedBy": PropTypes.string
};
