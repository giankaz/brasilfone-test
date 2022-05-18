import { Redirect, Route, Switch } from "react-router-dom";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
                <Redirect to='/login'/>
			</Route>
			<Route path="/login"></Route>
			<Route path="/cadastro"></Route>
		</Switch>
	);
}
