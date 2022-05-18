import React from 'react'
import { StyledForm } from './styles'

export default function Form({children}) {
  return (
    <StyledForm>
        {children}
    </StyledForm>
  )
}
