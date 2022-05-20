//hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

//components
import errorLogo from "../../assets/error.svg";
import Button from "../../components/Global/Button";
import Form from "../../components/Global/Form";
import InputBase from "../../components/Global/InputBase";
import InputPass from "../../components/Global/InputPass";
import DisparoLogo from "../../components/LeftSideDesktop/DisparoLogo";
import LeftFigure from "../../components/LeftSideDesktop/LeftFigure";
import { StyledErrorContainer, StyledMain } from "./styles";


export default function Login() {

	const { enqueueSnackbar } = useSnackbar();

	const [loginError, setLoginError] = useState(false);

	const schema = yup.object().shape({
		email: yup.string().required("Digite seu Email ou Celular!"),
		pass: yup
			.string()
			.required("Digite sua Senha!")
			.min(6, "Senha deve ter 6 caracteres ou mais."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {

		if (errors.email?.message || errors.pass?.message) {

			setLoginError(true);
		}

	}, [errors]);

	const submit = (data) => {
		const dataBase = JSON.parse(localStorage.getItem("@Disparo_userSubmit"));

		console.log(`🤖 ~ submit ~ dataBase`, dataBase);

		if (dataBase.email === data.email || dataBase.number === data.email) {

			if (dataBase.pass === data.pass) {

				enqueueSnackbar(`Login realizado com sucesso!`, {
					variant: "success",
					autoHideDuration: 3000,
				});

				setLoginError(false);

			} else {

				setLoginError(true);
			}
		} else {

			setLoginError(true);
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
						<h2>Login</h2>
						<div className="login__info">

							<InputBase
								label="E-mail ou celular"
								register={register}
								info="email"
								className={errors.email?.message && "error"}
								errorMsg={""}
							/>

							<InputPass
								label="Senha"
								register={register}
								info="pass"
								className={errors.pass?.message && "error"}
								errorMsg={""}
							/>

							{loginError && (
								<StyledErrorContainer display={"flex"}>
									<div className="error__container">
										<img src={errorLogo} alt="" />
									</div>
									<div className="error__msg">
										<span>
											{errors.email?.message
												? errors.email.message
												: errors.pass?.message
												? errors.pass.message
												: "Usuário ou senha incorretos, tente novamente."}
										</span>
					      </div>
								</StyledErrorContainer>
							)}

							<Button width={"70%"} type="submit">
								Conectar
							</Button>
						</div>

						<div className="form__toRegister">
							<p>Ainda não é cliente Disparo Pro ?</p>
							<Link to="/cadastro">Criar Conta</Link>
						</div>

					</div>
				</Form>
			</section>
		</StyledMain>
	);
}
