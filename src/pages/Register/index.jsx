import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Global/Button";
import Form from "../../components/Global/Form";
import InputBase from "../../components/Global/InputBase";
import InputBaseEmail from "../../components/Global/InputBaseEmail";
import InputPhone from "../../components/Global/InputNumber";
import InputPass from "../../components/Global/InputPass";
import InputPassCheck from "../../components/Global/InputPassCheck";
import RadioBox from "../../components/Global/Radio";
import RadioGroups from "../../components/Global/RadioGroup";
import DisparoLogo from "../../components/LeftSideDesktop/DisparoLogo";
import LeftFigure from "../../components/LeftSideDesktop/LeftFigure";
import { StyledMain } from "./styles";


export default function Register() {
	const [number, setNumber] = useState("");
	const [agreed, setAgreed] = useState(false);
	const [notify, setNotify] = useState("");
	const [numberError, setNumberError] = useState(false);
	const [agreedError, setAgreedError] = useState(false);
	const [notifyError, setNotifyError] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory()



	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Digite seu nome completo!")
			.max(18, "Digite seu nome com menos que 18 letras!")
			.matches(
				/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
				"Seu nome deve conter apenas letras"
			),
		email: yup
			.string()
			.required("Digite seu Email!")
			.email("Email não é válido"),
		pass: yup
			.string()
			.required("Digite sua Senha!")
			.min(6, "Senha deve ter 6 caracteres ou mais."),
		passCheck: yup
			.string()
			.required("Confirme sua senha!")
			.min(6, "Senha deve ter 6 caracteres ou mais.")
			.oneOf([yup.ref("pass")], "As senhas não são iguais!"),
		agreed: yup.boolean().isTrue("Você deve Aceitar os Termos!"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submit = (data) => {
		if (number.length < 13) {
			setNumberError(true);
		} else if (!agreed) {
			setNumberError(false);
			setAgreedError(true);
		} else if (notify === "") {
			setNumberError(false);
			setAgreedError(false);
			setNotifyError(true);
		} else {
			setNumberError(false);
			setNotifyError(false);
			setAgreedError(false);
			const userSubmit = {
				...data,
				number: number,
				agreed: agreed,
				notify: notify
			}
			localStorage.setItem('@Disparo_userSubmit', JSON.stringify(userSubmit) )
			enqueueSnackbar(`Cadastro Realizado! Faça seu login para continuar.`, {
				variant: "success",
				autoHideDuration: 3000,

			});
			setTimeout(() => {
				history.push('/login')
			}, 2000)
		}
	};

	return (
		<StyledMain>
			<section className="figure__container">
				<DisparoLogo className="figure__logo" />
				<LeftFigure className="figure__illustration" />
			</section>

			<DisparoLogo className="mobile__logo" />

			<section className="form__container">
				<Form onSubmit={handleSubmit(submit)}>
					<div className="form__innerBox">
						<h2>Cadastre-se</h2>
						<div className="login__info">
							<InputBase
								label="Nome"
								register={register}
								info="name"
								className={errors.name?.message && "error"}
								errorMsg={errors.name?.message && errors.name.message}
							/>
							<InputBaseEmail
								label="E-mail"
								register={register}
								info="email"
								className={errors.email?.message && "error"}
								errorMsg={errors.email?.message && errors.email.message}
							/>
							<InputPhone
								label="Número"
								number={number}
								setNumber={setNumber}
								className={numberError && "error"}
								errorMsg={numberError && "Digite seu Número corretamente."}
							/>
							<InputPass
								label="Senha"
								register={register}
								info="pass"
								className={errors.pass?.message && "error"}
								errorMsg={errors.pass?.message && errors.pass.message}
							/>
							<InputPassCheck
								label="Repetir Senha"
								register={register}
								info="passCheck"
								className={errors.passCheck?.message && "error"}
								errorMsg={errors.passCheck?.message && errors.passCheck.message}
							/>
							<RadioBox
								setAgreed={setAgreed}
								errorMsg={
									agreedError && "Você deve aceitar os termos para continuar!"
								}
								className={agreedError && "error"}
							/>
							<div className="register__notify">
								<span className={notifyError && "error"}>
									{notifyError
										? "Escolha se deseja receber ofertas, novidades, conteúdos informativos e publicitários:"
										: "Quero receber ofertas, novidades, conteúdos informativos e publicitários da Disparo Pro"}
								</span>
								<RadioGroups setNotify={setNotify} />
							</div>

							<Button width={"70%"} type="submit">
								Cadastrar
							</Button>
						</div>
						<div className="form__toRegister">
							<p>Ja é cliente Disparo Pro ?</p>
							<Link to="/login">Fazer Login</Link>
						</div>
					</div>
				</Form>
			</section>
		</StyledMain>
	);
}

/* .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
 "Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
) */
