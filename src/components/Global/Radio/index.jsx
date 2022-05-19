
import { FormControlLabel } from '@mui/material';
import { blue } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import Register from '../../../pages/Register';
import { useErrors } from '../../../providers/ErrorClass';
import { StyledDiv } from './styles';

export default function RadioBox({setAgreed, className, errorMsg}) {
  const {error} = useErrors()

  const handleChange = (event) => {
   setAgreed(true);
  };


  return (
    <StyledDiv>
        <Radio
        onChange={handleChange}
        size='small'
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'var(--blue2)',
        },
        }} />
  <span className={className ? 'error' : 'span__read'}>{errorMsg ? errorMsg : 'Eu li e aceito a política de prividade da Disparo Pro'}</span>
    </StyledDiv>
  );
}

