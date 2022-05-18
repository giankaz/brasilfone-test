import DisparoLogo from '../../components/LeftSideDesktop/DisparoLogo'
import Form from '../../components/Global/Form'
import LeftFigure from '../../components/LeftSideDesktop/LeftFigure'
import InputPass from '../../components/Global/InputPass'
import InputBase from '../../components/Global/InputBase'
import { StyledMain } from './styles'
import Button from '../../components/Global/Button'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <StyledMain>
        <section className='figure__container'>
        <DisparoLogo className='figure__logo'/>
        <LeftFigure className='figure__illustration'/>
        </section>
        <DisparoLogo className='mobile__logo'/>

        <section className='form__container'>
        <motion.div>
        <Form>
          <div className='form__innerBox'>
            <h2>Login</h2>
            <div className='login__info'>
            <InputBase label='E-mail ou celular'/>
            <InputPass label='Senha'/>
            <Button width={'80%'}>Conectar</Button>
            </div>
            <div className='form__toRegister'>
              <p>Ainda não é cliente Disparo Pro ?</p>
              <Link to='/cadastro'>Criar Conta</Link>
            </div>
          </div>
        </Form>
        </motion.div>
        </section>
    </StyledMain>
  )
}
