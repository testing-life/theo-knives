import React, { FC, ReactNode } from 'react';
import './iconButton.css';

interface Props {
  children: ReactNode;
  clickHandler?: () => void;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaPopup?: boolean;
  needsAria?: boolean;
  disabled?: boolean;
}

const IconButton: FC<Props> = ({
  clickHandler,
  children,
  ariaControls,
  ariaExpanded,
  ariaPopup,
  needsAria,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type='button'
      onClick={clickHandler}
      {...(needsAria && { 'aria-controls': ariaControls })}
      {...(needsAria && { 'aria-haspopup': ariaPopup })}
      {...(needsAria && { 'aria-expanded': ariaExpanded })}
      className='theo-icon-button'
    >
      {children}
    </button>
  );
};

export default IconButton;
