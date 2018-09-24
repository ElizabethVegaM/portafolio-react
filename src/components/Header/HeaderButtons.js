import React from 'react';
import { Button } from 'react-materialize';

const HeaderButton = (props) => {
  return(
    <Button large>{props.name}</Button>
  )
}

export default HeaderButton;