import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) =>
  <main>
    <div>
      <ProductImage image={imgURL} />
    </div>
    <div>
      <ProductDesc 
        category={category}
        name={name}
        description={description}
        rating={ratingURL} 
        features={features} 
        shade={shade} />
      <hr/>
      <ProductPurchase price={price} />
    </div>
 </main>
