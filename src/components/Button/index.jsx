import React from 'react';

import { Buttons } from './styled';

function Button({ variant, name, hadleFuction, type }) {
  return (
    <>
      <Buttons type={type} variant={variant} onClick={hadleFuction}>
        {name}
      </Buttons>
    </>
  )
}

export default Button;