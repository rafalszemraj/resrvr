import React from 'react';
import R from 'ramda';
import {pickCSSProps, addClassName, ui} from './helpers';
import classnames from 'classnames';

const image = (props) => {
  const {src, className} = props;
  return <img className={ui('image', className)} src={src} style={pickCSSProps(props)} />
}

image.placeholder = (props, category) => image({...props, src:`http://placeimg.com/${props.width}/${props.height}/${category}`});

['animals', 'architecture', 'nature', 'people', 'tech'].forEach( category => {

  image[category] = props => image.placeholder(props, category);


})
export default image;