import React, { FC, useEffect, useRef } from 'react';
import './dialog.css';
import IconButton, {
  KeyboardEventM,
} from 'components/atoms/iconButton/iconButton';
import { ReactComponent as CloseIcon } from 'assets/icons/X.svg';

interface Props {
  srcUrl: string;
  isOpen: boolean;
  onCloseHandler: () => void;
}

const Dialog: FC<Props> = ({ srcUrl, onCloseHandler, isOpen }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  const closeDialog = (): void => {
    dialogRef.current?.close();
    onCloseHandler();
  };

  const openDialog = (): void => {
    dialogRef.current?.showModal();
  };

  const keyPress = (event: KeyboardEventM) => {
    if (event.key === 'Escape') {
      onCloseHandler();
    }
  };

  return (
    <dialog onKeyDown={keyPress} className='theo-dialog' ref={dialogRef}>
      <IconButton clickHandler={closeDialog}>
        <CloseIcon />
      </IconButton>
      <img className='pure-img' src={srcUrl} alt='' />{' '}
    </dialog>
  );
};

export default Dialog;
