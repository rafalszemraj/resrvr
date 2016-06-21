/**
 * Created by sema on 18/05/16.
 */
import React from 'react';
import R from 'ramda';
import {mergeClasses} from './helpers';


export default (props) => <i className={mergeClasses(props, 'ui icon')}></i>;
export const IconGroup = (props) => <i className={mergeClasses(props, 'icons')}>{props.children}</i>;

