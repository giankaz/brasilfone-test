import styled from 'styled-components'


export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
    justify-content: center;
  height: 100%;

  .mobile__logo {
    display: none;
    width: 200px;

  }

  section {
    width: 50%;
    display: flex;
    flex-direction: column;

  }
  .figure__container {
    display: flex;
    position: relative;
    justify-content: center;

    background-repeat: repeat-x;
    background-size: cover;
    background: rgb(125,185,232); 
    background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
    background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
    background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  


  }

 
  .figure__logo {
    width: 200px;
    margin-left: 10%;
  }

  .figure__logo:hover {
    filter: brightness(120%);
    cursor: pointer;
  }


  .form__container {
    justify-content: center;
    align-items: center;
  }

  .form__innerBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  

    align-items: center;
  }

  label {
    color: var(--blue1) ;
    font-weight: 400;
    font-size: 14px;
  }

  h2 {
    font-size: 20px;
    color: var(--blue1);
    font-weight: 700;
  }



  .login__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  .form__toRegister {
    display: flex;
    flex-direction: column;
    gap: 10px;
   
    
  }

  .form__toRegister>p {
    color: var(--grey2);
    font-size: 14px;
  }
  .form__toRegister>a {
    font-weight: bold;
    font-size: 16px;
  }
  .form__toRegister>a:hover {
    filter: brightness(110%);
  }

  .register__notify {
      width: 300px;
      font-size: 13px;
      text-align: start;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .register__notify>span {
      font-size: 13px;
    color: var(--grey2);

  }
  .register__notify>.error {
      color: var(--red);
    }
  
  @media (max-width: 768px) {
   & {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        background-size: cover;
        background: rgb(125,185,232); 
        background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
        background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
        background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
      
   }


        .mobile__logo {
        display: block;
        width: 200px;
        justify-self: flex-start;
    }

        .figure__container {
        display: none;
        }

  }


    @media (max-height: 600px) {
        & {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        background-size: cover;
        background: rgb(125,185,232); 
        background: -moz-linear-gradient(-45deg,  rgba(125,185,232,1) 0%, rgba(41,137,216,1) 29%, rgba(30,87,153,1) 100%); 
        background: -webkit-linear-gradient(-45deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 
        background: linear-gradient(135deg,  rgba(125,185,232,1) 0%,rgba(41,137,216,1) 29%,rgba(30,87,153,1) 100%); 

        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=1 );  
        

    }
    .mobile__logo {
    display: block;

    }

    .figure__container {
        display: none;
    }
    }

    @media (max-width: 400px) {
        .form__container {
            background-color: var(--white);
        }
        .mobile__logo {
            display: block;
        }

        .form__container {
            width: 100%;
        }
}
`