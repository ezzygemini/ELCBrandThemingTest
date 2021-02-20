import React from "react";

import caret from "./images/caret.png";
import { pdpProductElementClasses } from "./utils";

const cls = pdpProductElementClasses("features");

export const ProductDesc = ({
  category,
  name,
  description,
  rating,
  features,
  shade,
}) => (
  <section {...cls("container")}>
    <h4 {...cls("category")}>{category}</h4>
    <h2 {...cls("name")}>{name}</h2>
    <p {...cls("description")}>{description}</p>
    <figure>
      <img {...cls("rating")} src={rating} alt="Product Rating" />
      <img {...cls("all-ratings")} src={caret} alt="View All Ratings" />
    </figure>
    <section {...cls("features")}>
      <div {...cls("benefits")}>
        <h4 {...cls("benefits", "title")}>Benefits</h4>
        <p {...cls("benefits", "items")}>{features.benefits}</p>
      </div>
      <div {...cls("finish")}>
        <h4 {...cls("finish", "title")}>Finish</h4>
        <p {...cls("finish", "description")}>{features.finish}</p>
      </div>
      <div {...cls("coverage")}>
        <h4 {...cls("coverage", "title")}>Coverage</h4>
        <p {...cls("coverage", "description")}>{features.coverage}</p>
      </div>
      <div {...cls("ingredients")}>
        <h4 {...cls("ingredients", "title")}>Key Ingredients</h4>
        <p {...cls("ingredients", "description")}>
          {features.keyIngredients} <a {...cls(null, "link")} href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section {...cls("shade", "container")}>
      <span {...cls("shade", "title")}>{shade.name}</span>
      <div {...cls("shade", "color")} style={{ background: shade.color }} />
    </section>
  </section>
);
