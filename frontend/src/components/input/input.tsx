import {ChangeEvent, Fragment, FC} from 'react'
import './input.scss';

interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  return (
    <Fragment>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

export default Input;
