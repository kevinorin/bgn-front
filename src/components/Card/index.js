import React from 'react';
import Button from '@material-ui/core/Button';

const CustomCard = (props) => {
  return (
    <Button>{props.text}</Button>
  )
}

export default CustomCard;