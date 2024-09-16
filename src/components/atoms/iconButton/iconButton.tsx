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
  asLink?: boolean;
  whereTo?: string;
  label?: string;
}

export interface KeyboardEventM {
  key: string;
}

const IconButton: FC<Props> = ({
  clickHandler,
  children,
  ariaControls,
  ariaExpanded,
  ariaPopup,
  needsAria,
  disabled,
  asLink,
  whereTo,
}) => {
  return asLink ? (
    <a
      href={whereTo}
      target='_blank'
      rel='noopener noreferer'
      className='theo-icon-button'
    >
      {children}
    </a>
  ) : (
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
