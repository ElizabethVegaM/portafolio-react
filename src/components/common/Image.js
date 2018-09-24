import React from 'react';

const Image = (props) => {
  return(
    <img src={props.img} alt="" className={props.className}/>
  )
}

export default Image;