import { API_BASE_URL } from "./config";

const handleNetworkError = async responseError => {
  console.log("responseError", responseError);
};

export const AppUtils = {
  signIn: function(data) {
    return fetch(`${API_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(error => handleNetworkError(error));
  },

  signUp: function(data) {
    return fetch(`${API_BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .catch(error => handleNetworkError(error));
  }
};
