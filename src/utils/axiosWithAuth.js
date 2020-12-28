import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "https://thereplate2.herokuapp.com",
    // baseURL: "http://localhost:3300",
  });
};
