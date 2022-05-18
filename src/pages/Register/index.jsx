import { Link } from "react-router-dom";
import Button from "../../components/Global/Button";
import DisparoLogo from "../../components/LeftSideDesktop/DisparoLogo";
import Form from "../../components/Global/Form";
import InputBase from "../../components/Global/InputBase";
import InputPass from "../../components/Global/InputPass";
import LeftFigure from "../../components/LeftSideDesktop/LeftFigure";
import { StyledMain } from "./styles";
import InputPhone from "../../components/Global/InputNumber";
import RadioBox from "../../components/Global/Radio";
import RadioGroups from "../../components/Global/RadioGroup";

export default function Register() {
	return (
		<StyledMain>
			<section className="figure__container">
				<DisparoLogo className="figure__logo" />
				<LeftFigure className="figure__illustration" />
			</section>

			<DisparoLogo className="mobile__logo" />

			<section className="form__container">
				<Form>
					<div className="form__innerBox">
						<h2>Cadastre-se</h2>
						<div className="login__info">
							<InputBase label="Nome" />
							<InputBase label="E-mail" />
							<InputPhone label="Número" />
							<InputPass label="Senha" />
							<InputPass label="Repetir Senha" />
							<RadioBox />

							<div className="register__notify">
								<span>
									Quero receber ofertas, novidades, conteúdos informativos e
									publicitários da Disparo Pro
								</span>
								<RadioGroups />
							</div>
							<Button width={"80%"}>Cadastrar</Button>
						</div>
						<div className="form__toRegister">
							<p>Ja é cliente Disparo Pro ?</p>
							<Link to="/Login">Fazer Login</Link>
						</div>
					</div>
				</Form>
			</section>
		</StyledMain>
	);
}
