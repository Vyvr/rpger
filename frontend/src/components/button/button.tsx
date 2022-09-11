import * as React from 'react';

import './button.scss';

export interface IButtonProps {
  buttonText: string;
  className?: string; 
  style?: object;
  onClick?: ()=>void;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.onClick} className={props.className} style={props.style}>{props.buttonText}</button>
    </React.Fragment>
  );
};

export default Button;
