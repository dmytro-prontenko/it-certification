import axios from "axios";
const BASE_URL = "https://itclusterpython2024.onrender.com";
// const BASE_URL = "https://itclusterjava.onrender.com";
const $instance = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearToken = () => {
//   $instance.defaults.headers.common.Authorization = "";
// };

export const signUp = async (userData) => {
  const { data } = await $instance.post("auth/register", userData);
  setToken(data.token);
  return data;
};

export const signIn = async (userData) => {
  const { data } = await $instance.post("auth/login", userData);
  setToken(data.token);
  return data;
};

// export const logout = async () => {
//   const { data } = await $instance.post("/auth/logout");
//   clearToken();
//   return data;
// };

export const getData = async (endPoint) => {
  const { data } = await $instance.get(endPoint);
  return data;
};
