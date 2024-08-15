import React, { FC, useState } from "react";
import Link from "components/atoms/link/link";
import { forDesktop, forTablet } from "utils/breakpoints";
import { ReactComponent as Menu } from "assets/icons/Menu.svg";
import { ReactComponent as Close } from "assets/icons/X.svg";
import "./productGallery.css";
import IconButton from "components/atoms/iconButton/iconButton";
import Product from "../product/product";

interface Props {
  images: string[];
}

const ProductGallery: FC<Props> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ariaId = "mainNav";
  console.log(images);
  return <div></div>;
};

export default ProductGallery;
