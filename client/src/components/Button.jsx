import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // optional, just for classes

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick, className, ...props }) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className || ''}`;
  return (
    <button className={baseClass} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
