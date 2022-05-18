import { StyledButton } from './styles'
export default function Button({children, width}) {
  return (
    <StyledButton width={width}>{children}</StyledButton>
  )
}
