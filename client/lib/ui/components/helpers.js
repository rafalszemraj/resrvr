import R from 'ramda';
import reactClass from 'classnames';


const convertCssPropUnit = prop => R.map( value => R.test(/(px|em|%)/, value) ? value : value+'px', prop );


const pickClassProps = R.pickBy( val => val === true );
const mergeClass = (cName1) => (cName2) => reactClass(cName1, cName2);

export const pickCSSProps = R.map( convertCssPropUnit, R.pick(['height', 'width']) );
export const addClassName = (props, className) => R.evolve( {className:mergeClass(className)}, props);
export const ui = (...classNames) => reactClass(...['ui', classNames]);