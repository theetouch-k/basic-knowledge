import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  //you can set default value using short-circuit

  //check for image and image url existance
  //if image and image.url exist, url will = image.url
  const url = image && image.url;
  return (
  //anything that doesn't exist will be replace by default values
  <article className='product'>
    <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
  </article>
  );
};

//setting up proptype is like setting up an interface to specific valuables type
//if the valuable don't have any value is fine, we have default values to handle that
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// or for setting default value u can set using defaultProps
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product