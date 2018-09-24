import React from 'react';
import { Button } from 'react-materialize';

const HeaderButton = (props) => {
  return(
    <Button large className="grey" waves='light'>{props.name}</Button>
  )
}

export default HeaderButton;