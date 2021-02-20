import React from "react";
import { pdpProductElementClasses } from "./utils";

const cls = pdpProductElementClasses("image");

export const ProductImage = ({ image }) => (
  <figure {...cls("figure")}>
    <img {...cls("tag")} src={image} alt="Product" />
  </figure>
);
