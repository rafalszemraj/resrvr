import React from 'react';
import {pickCSSProps, addClassName, ui} from './helpers';




const Input = (props) => {
  
  const { type = "text", prompt } = props;
  return <div className={ui('input', props.className)} style={pickCSSProps(props)}>
          <input type={type} placeholder={prompt} />
         </div>;
  
}
  
Input.icon = (props) => {

  const { type = "text", icon, prompt } = props;
  return <div className={ui('input left icon', props.className)} style={pickCSSProps(props)}>
    <i className={ui('icon', icon)} />
    <input type={type} placeholder={prompt} />
  </div>; 

}


export const PasswordInput = (props) => Input.icon({...props, type:'password', icon:'lock'});

