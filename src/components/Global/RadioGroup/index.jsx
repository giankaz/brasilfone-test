
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioGroups() {
  return (
    <FormControl
     >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio 
        size='small'
         sx={{
            '& .MuiSvgIcon-root': {
              color: 'var(--blue2)',
            },
          }}
        />} label="Sim" />
        <FormControlLabel value="male" control={<Radio
        size='small'
         sx={{
            '& .MuiSvgIcon-root': {
              color: 'var(--blue2)',
            },
          }}
        />} label="Não" />
      </RadioGroup>
    </FormControl>
  );
}
