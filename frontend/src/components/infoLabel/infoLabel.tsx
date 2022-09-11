import { Fragment, FC } from 'react';

import { TextColor } from './../../enums';

interface InfoLabelProps {
    className?: string;
  text: string;
  color: TextColor;
  style?: object;
}

const InfoLabel: FC<InfoLabelProps> = (props) => {
  return (
    <Fragment>
      <label className={props.className} style={{color: `${props.color}`}}>{props.text}</label>
    </Fragment>
  );
};

export default InfoLabel;
