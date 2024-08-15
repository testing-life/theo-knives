import React, { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import ProductGallery from "../productGallery/productGallery";
interface Props {
  blok: any;
}

const Product: FC<Props> = ({ blok }) => {
  return (
    <article {...storyblokEditable(blok)}>
      product {blok.name}, {blok.model}, {blok.description},{" "}
      {blok.images[0].filename}
      {blok.available}
      <ProductGallery images={["sdf0S"]} />
    </article>
  );
};

export default Product;

// name:string
// model:string
// description:string
// images: string[]
// available: bool
