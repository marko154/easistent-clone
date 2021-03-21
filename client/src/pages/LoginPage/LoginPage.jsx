import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import {
	setClientID,
	fetchUserData,
} from "../../redux/features/setUser/setUserSlice";
import StyledLoginForm from "./LoginPageStyles";
import { useLoginForm } from "./useLoginForm";

const LoginPage = ({ setClientID, history, fetchUserData }) => {
	const [setFields, isLoading, error, logIn, demoLogin] = useLoginForm(
		{ username: "", password: "" },
		history,
		setClientID,
		fetchUserData
	);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const onFieldChange = (e) => {
		setFields((prevFields) => {
			return { ...prevFields, [e.target.name]: e.target.value };
		});
	};

	return (
		<StyledLoginForm>
			<h3>Login</h3>
			<form className="inputs" onSubmit={(e) => e.preventDefault()}>
				<input
					className="username"
					name="username"
					type="text"
					placeholder="username or email"
					onChange={onFieldChange}
					required
				/>

				<span className="password-input">
					<input
						required
						className="password"
						name="password"
						type={isPasswordVisible ? "text" : "password"}
						placeholder="password"
						onChange={onFieldChange}
						onKeyPress={({ key }) => key === "Enter" && logIn()}
					/>
					<span
						className="is-visible"
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
					>
						{isPasswordVisible ? (
							<AiFillEye />
						) : (
							<AiFillEyeInvisible />
						)}
					</span>
				</span>
				{error && <div className="error">{error}</div>}
				<Button
					type="submit"
					onClick={logIn}
					isLoading={isLoading}
					marginTop={40}
				>
					LOGIN
				</Button>
				<p onClick={demoLogin}>Demo Login</p>
			</form>
		</StyledLoginForm>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setClientID: (clientID) => dispatch(setClientID(clientID)),
	fetchUserData: () => dispatch(fetchUserData()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
