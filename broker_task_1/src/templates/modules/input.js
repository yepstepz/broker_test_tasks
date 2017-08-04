import React, {Component} from 'react';

const Input = ({name,label,onChange}) => {
    return(
       <div className="form__input">
           <label htmlFor="name">{label}</label>
           <input type="text"
                  name={name}
                  id="name"
                  onChange={onChange}
           />
       </div>
    )
}

export default Input;