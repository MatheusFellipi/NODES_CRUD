import React from 'react';
import { Input, Label, ContendInput, Contend } from './styled'
export default function InputComponentes({ name, label, type, ...rest }) {
  return (
    <Contend>
      <ContendInput>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} id={name} {...rest} />
      </ContendInput>
    </Contend>
  )
}
