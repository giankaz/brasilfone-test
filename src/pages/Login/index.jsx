import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../../components/Global/Button'
import Form from '../../components/Global/Form'
import InputBase from '../../components/Global/InputBase'
import InputPass from '../../components/Global/InputPass'
import DisparoLogo from '../../components/LeftSideDesktop/DisparoLogo'
import LeftFigure from '../../components/LeftSideDesktop/LeftFigure'
import { StyledMain } from './styles'

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  return (
    <StyledMain>
        <section className='figure__container'>
        <DisparoLogo className='figure__logo'/>
        <LeftFigure className='figure__illustration'/>
        </section>
        <DisparoLogo className='mobile__logo'/>

        <section className='form__container'>
      

  
        </section>
    </StyledMain>
  )
}


{/* <Form>
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
</Form> */}