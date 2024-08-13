import React, { FC, ReactNode } from "react";
import "./iconBbutton.css";

interface Props {
  children: ReactNode;
  clickHandler: () => void;
}

const IconButton: FC<Props> = ({ clickHandler, children }) => {
  return (
    <button onClick={clickHandler} className="theo-icon-button">
      {children}
    </button>
  );
};

export default IconButton;
