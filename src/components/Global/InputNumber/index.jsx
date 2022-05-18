import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { StyledDiv } from './styles'


export default function InputPhone({label, value, setValue}) {
  return (
      <StyledDiv>
		 <label htmlFor="phone">{label}</label>
          <PhoneInput
          country={'br'}
          enableAreaCodes={true}
          preferredCountries={['br', 'us']}
          inputStyle={{width: '100%', height: '40px', color: 'var(--blue2)'}}
          containerStyle={{width: '100%', height: '40px', color: 'var(--blue2)'}}
          />
      </StyledDiv>
  )
}
