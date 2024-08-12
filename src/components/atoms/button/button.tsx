import React, { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import "./button.css";

interface Props {
  blok: any;
  clickHandler: () => void;
}

const Button: FC<Props> = ({ blok, clickHandler }) => {
  return (
    <button {...storyblokEditable(blok)} className="pure-button theo-button">
      {blok.label}
    </button>
  );
};

export default Button;
