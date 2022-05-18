
import { FormControlLabel } from '@mui/material';
import { blue } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { StyledDiv } from './styles';

export default function ColorRadioButtons({setState}) {
 

  const handleChange = (event) => {
   setState(true);
  };


  return (
    <StyledDiv>
        <Radio
        size='small'
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'var(--blue2)',
        },
        }} />
  <span className='span__read'>Eu li e aceito a política de prividade da Disparo Pro</span>
    </StyledDiv>
  );
}

