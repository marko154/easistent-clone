import fetch from "node-fetch";
import getMeta from "lets-get-meta";

export const BASE_URL = "https://www.easistent.com";

export async function getAccessToken(username, password) {
	const response = await fetch(BASE_URL + "/p/ajax_prijava", {
		headers: {
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
		body: `uporabnik=${username}&geslo=${password}`,
		method: "POST",
	});
	const data = await response.json();
	if (data.errfields.uporabnik)
		return { error: "Invalid username or password" };
	const sessionCookie = response.headers.get("set-cookie");
	const tokenResponse = await fetch(BASE_URL, {
		headers: { cookie: sessionCookie },
	});
	const html = await tokenResponse.text();
	return {
		token: getMeta(html)["access-token"].split(" ")[1],
		xChildID: getMeta(html)["x-child-id"],
		sessionID: sessionCookie,
	};
}

export const getHeader = (token, xChildID) => {
	return {
		headers: {
			authorization: `Bearer ${token}`,
			"x-child-id": xChildID,
			"x-client-platform": "web",
			"x-client-version": "13",
		},
		method: "GET",
	};
};

export const easistentRequest = async (cookies, url) => {
	const { token, xChildID } = cookies;
	const options = getHeader(token, xChildID);
	try {
		const res = await fetch(BASE_URL + url, options);
		const data = await res.json();
		return data;
	} catch {
		return { error: "Issue with request" };
	}
};
