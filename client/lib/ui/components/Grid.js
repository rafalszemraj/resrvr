import React from 'react';
import R from 'ramda';
import {pickCSSProps, addClassName, ui} from './helpers';
import classnames from 'classnames';




const Grid = (props) => {

  return <div className={ui('grid', props.className)} style={pickCSSProps(props)}>{props.children}</div>

}

export const GridCentered = (props) => Grid(addClassName(props, 'center aligned'));

export default Grid;


