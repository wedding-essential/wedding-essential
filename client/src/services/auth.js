import axios from "axios";

const signupCouple = (email, password) => {
  return axios
    .post("/api/auth/signup/couple", { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const signupGuest = (email, password, passcode) => {
  return axios
    .post("/api/auth/signup/guest", { email, password, passcode })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("/api/auth/login", { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete("/api/auth/logout")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export { signupCouple, signupGuest, login, logout };
