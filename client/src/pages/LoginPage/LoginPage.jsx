import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import { setClientID } from "../../redux/features/setUser/setUserSlice";
import StyledLoginForm from "./LoginPageStyles";

const LoginPage = ({ setClientID, history }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [error, setError] = useState("");

	const logIn = async () => {
		if (!username || !password) return;
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		};
		const res = await fetch("/.netlify/functions/app/api/auth", options);
		const data = await res.json();
		if (data.error)
			return setError(data.error);
		setClientID({xChildID: data.xChildID, username});
		history.push("/")
	};
	const demoLogin = async (e) => {
		e.preventDefault();
		await fetch("/.netlify/functions/app/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: "demo" }),
		});
		setClientID({xChildID: "demo", username: "john.doe@gmail.com"});
		history.push("/")
	}

	return (
		<StyledLoginForm>
			<h3>Login</h3>
			<form className="inputs" onSubmit={e => e.preventDefault()}>
				<input
					className="username"
					type="text"
					placeholder="username or email"
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				
				<span className="password-input">
					<input
						required
						className="password"
						type={isPasswordVisible ? "text":"password"}
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={({key}) => key==="Enter" && logIn()}
					/>
					<span className="is-visible" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
						{isPasswordVisible ? <AiFillEye />:<AiFillEyeInvisible />}
					</span>
				</span>
				{error && <div className="error">{error}</div>}
				<Button type="submit" onClick={logIn}>LOGIN</Button>
				<p onClick={demoLogin}>Demo Login</p>
			</form>
		</StyledLoginForm>
	);
};

const mapDispatchToProps = dispatch => ({
	setClientID: (clientID) => dispatch(setClientID(clientID))
})

export default connect(null, mapDispatchToProps)(LoginPage);
