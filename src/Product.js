import React from "react";
import { ProductDesc } from "./ProductDesc";
import { ProductImage } from "./ProductImage";
import { ProductPurchase } from "./ProductPurchase";
import { pdpProductClasses } from "./utils";

import "./styles/product.scss";

const cls = pdpProductClasses();

export const Product = ({
  productData: {
    imgURL,
    category,
    name,
    description,
    ratingURL,
    features,
    shade,
    price,
  },
}) => (
  <main {...cls("page")}>
    <div {...cls("images")}>
      <ProductImage image={imgURL} />
    </div>
    <div {...cls("details")}>
      <ProductDesc
        category={category}
        name={name}
        description={description}
        rating={ratingURL}
        features={features}
        shade={shade}
      />
      <hr {...cls("hr")} />
      <ProductPurchase price={price} />
    </div>
  </main>
);
