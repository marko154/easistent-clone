import { useState } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../redux/features/setUser/setUserSlice";
import StyledUserData, { StyledForm } from "./UserDataStyles";
import { IoMdCheckboxOutline } from "react-icons/io";

const UserData = ({
	display_name,
	priimek,
	email,
	avatar,
	age,
	gender,
	datum_rojstva,
	emso,
	ulica,
	hisna_stevilka,
	postna,
	posta,
	drzava,
	mobitel,
	primary,
	username,
	fetchUserData,
}) => {
	const [password, setPassoword] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(ulica);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!password) return;
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		};
		const res = await fetch("/.netlify/functions/app/api/auth", options);
		const data = await res.json();
		if (data.error) return setError("Invalid password");
		setError("");
		fetchUserData();
		setIsAuthenticated(true);
	};

	return (
		<>
			<StyledUserData isAuthenticated={isAuthenticated}>
				<div className="image-name-age">
					<img
						alt="headshot"
						style={!avatar ? { display: "none" } : null}
						src={`https://www.easistent.com/images/dijaki/${avatar}`}
					/>
					<div>
						<div>
							Name: <span>{display_name}</span>
						</div>
						<div>
							Last name: <span>{priimek}</span>
						</div>
						<div>
							Age: <span>{age}</span>
						</div>
					</div>
				</div>
				<div className="other">
					<div>
						Date of birth: <span>{datum_rojstva}</span>
					</div>
					<div>
						Gender:
						<input type="radio" defaultChecked={gender === "m"} />
						<label htmlFor="gender">Male</label>
						<input type="radio" defaultChecked={gender !== "m"} />
						<label htmlFor="gender">Female</label>
					</div>
					<div>
						Emšo: <span>{emso}</span>
					</div>

					<div>
						Email: <span>{email}</span>
					</div>
					<div>
						Phone: <span>{mobitel}</span>
					</div>

					<div>
						Address: <span>{ulica + " " + hisna_stevilka}</span>
					</div>
					<div>
						City: <span>{postna + " " + posta}</span>
					</div>
					<div>
						Country: <span>{drzava}</span>
					</div>
				</div>
			</StyledUserData>
			{!isAuthenticated && (
				<StyledForm primary={primary}>
					<label htmlFor="reinput password to confirm identity">
						{error ? "Invalid Password" : "Confirm Password"}
					</label>
					<div>
						<input
							autoFocus
							type="password"
							onChange={(e) => setPassoword(e.target.value)}
							required
						/>
						<button onClick={handleSubmit}>
							<IoMdCheckboxOutline />
						</button>
					</div>
				</StyledForm>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	primary: state.user.primary,
	username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserData: () => dispatch(fetchUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
