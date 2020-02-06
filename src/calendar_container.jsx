import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  arrowProps,
  className,
  children,
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
      <div className="react-datepicker__triangle" {...arrowProps} />
      {children}
    </div>
  );
}

CalendarContainer.defaultProps = {
  arrowProps: {},
  className: ""
};

CalendarContainer.propTypes = {
  arrowProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  "aria-describedBy": PropTypes.string
};
