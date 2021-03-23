import { useState } from "react";

export const useLoginForm = (
	initialFields,
	history,
	setClientID,
	setColor,
	fetchUserData
) => {
	const [fields, setFields] = useState(initialFields);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const logIn = async (e) => {
		e.preventDefault();
		const { username, password } = fields;
		if (!username || !password) return;
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		};
		setIsLoading(true);
		const res = await fetch("/.netlify/functions/app/api/auth", options);
		const data = await res.json();
		setIsLoading(false);
		fetchUserData();
		if (data.error) return setError(data.error);
		setClientID({ xChildID: data.xChildID, username });
		setColor(data.color);
		history.push("/");
	};
	const demoLogin = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		await fetch("/.netlify/functions/app/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: "demo" }),
		});
		setIsLoading(false);
		setClientID({ xChildID: "demo", username: "john.doe@gmail.com" });
		history.push("/");
	};

	return [setFields, isLoading, error, logIn, demoLogin];
};
