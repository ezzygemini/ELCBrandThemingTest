import React from 'react';

import caret from './images/caret.png';

export const ProductDesc = ({ category, name, description, rating, features, shade }) =>
  <section>
    <h4>{category}</h4>
    <h2>{name}</h2>
    <p>{description}</p>
    <figure>
      <img src={rating} alt="Product Rating" />
      <img src={caret} alt="View All Ratings" />
    </figure>
    <section>
      <div>
        <h4>Benefits</h4>
        <p>{features.benefits}</p>
      </div>
      <div>
        <h4>Finish</h4>
        <p>{features.finish}</p> 
      </div>
      <div>
        <h4>Coverage</h4>
        <p>{features.coverage}</p>
      </div>
      <div>
        <h4>Key Ingredients</h4>
        <p>{features.keyIngredients} <a href="http://www.clinique.com">More</a></p>
      </div>
    </section>
    <section>
      <span>{shade.name}</span>
      <div style={{ background: shade.color }}></div>
    </section>
  </section>
