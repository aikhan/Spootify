import { AUTH_URL, CLIENT_ID, CLIENT_SECRET } from "../constants";

const authTokenFetchApi = async () => {
  try {
    const clientId = CLIENT_ID && encodeURIComponent(CLIENT_ID);
    const clientSecret = CLIENT_SECRET && encodeURIComponent(CLIENT_SECRET);

    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        //Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    const json = await response.json();
    if (response.status === 200) {
      return json;
    } else {
      throw json;
    }
  } catch (error) {
      console.log("authTokenFetchApi - error -> ", error);
    throw error;
  }
};

export { authTokenFetchApi };
