import React from "react";

import caret from "./images/caret.png";
import minus from "./images/minus.png";
import plus from "./images/plus.png";
import { pdpProductElementClasses } from "./utils";

const cls = pdpProductElementClasses("purchase");

export const ProductPurchase = ({ price }) => (
  <section {...cls("container")}>
    <div {...cls("quantity")}>
      <span>Quantity</span>
      <img src={minus} alt="Decrease Quantity" />
      <span> 1 </span>
      <img src={plus} alt="Increase Quantity" />
    </div>
    <div {...cls("frequency")}>
      <span>One Time Purchase</span>
      <img src={caret} alt="Select Frequency" />
    </div>
    <div {...cls("price")}>{price}</div>
    <button {...cls("button", ["add-to-bag", "button"])} name="AddToBag">
      Add To Bag
    </button>
  </section>
);
