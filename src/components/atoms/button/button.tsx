import React, { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import "./button.css";

interface Props {
  blok: any;
}

const Button: FC<Props> = ({ blok }) => {
  return (
    <button {...storyblokEditable(blok)} className="pure-button theo-button">
      {blok.label}
    </button>
  );
};

export default Button;
