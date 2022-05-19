import { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useErrors } from '../../../providers/ErrorClass'
import { StyledDiv } from './styles'


export default function InputPhone({label, number, setNumber, className, errorMsg}) {
  const {error} = useErrors()



  return (
      <StyledDiv>
		 <label htmlFor="phone" className={className}>{label}{errorMsg && ` - ${errorMsg}`}</label>
          <PhoneInput
          country={'br'}
          value={number}
          onChange={(phone) => setNumber(phone)}
          enableAreaCodes={true}
          preferredCountries={['br', 'us']}
          inputStyle={{width: '100%', height: '40px', color: 'var(--blue2)'}}
          containerStyle={{width: '100%', height: '40px', color: 'var(--blue2)'}}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
        }}

          />
      </StyledDiv>
  )
}
